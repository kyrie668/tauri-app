import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const TrayControls: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 检测是否为移动端
    const checkPlatform = async () => {
      try {
        // 简单的用户代理检测
        const userAgent = navigator.userAgent.toLowerCase();
        const isMobileUA = /android|iphone|ipad|ipod|blackberry|iemobile|opera mini/.test(userAgent);
        
        // 检查是否在 Tauri 环境中
        if (typeof window !== "undefined" && (window as any).__TAURI__) {
          try {
            const { platform } = await import("@tauri-apps/plugin-os");
            const currentPlatform = await platform();
            setIsMobile(currentPlatform === "android" || currentPlatform === "ios");
          } catch (error) {
            // 如果 OS 插件不可用，使用用户代理检测
            setIsMobile(isMobileUA);
          }
        } else {
          // 如果不在 Tauri 环境中，使用用户代理检测
          setIsMobile(isMobileUA);
        }
      } catch (error) {
        // 如果无法检测平台，假设为桌面端
        console.log("Platform detection failed, assuming desktop");
        setIsMobile(false);
      } finally {
        setIsLoading(false);
      }
    };

    checkPlatform();
  }, []);

  // 加载中或移动端不显示托盘控制
  if (isLoading || isMobile) {
    return null;
  }

  const handleMinimizeToTray = () => {
    // 在 Tauri 中，关闭窗口会触发我们设置的隐藏行为
    window.close();
  };

  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="flex gap-4">
        <Button onClick={handleMinimizeToTray} variant="outline">
          最小化到托盘
        </Button>
      </div>
      <div className="text-sm text-gray-600 bg-blue-50 p-3 rounded-lg">
        <h4 className="font-semibold mb-2 text-blue-800">系统托盘功能说明：</h4>
        <ul className="space-y-1">
          <li>
            • <strong>左键点击托盘图标</strong>
            ：切换窗口显示/隐藏，显示时窗口会自动置于最前面
          </li>
          <li>
            • <strong>右键点击托盘图标</strong>
            ：显示上下文菜单（显示、隐藏、退出）
          </li>
          <li>
            • <strong>点击窗口关闭按钮</strong>：应用会隐藏到托盘而不是退出
          </li>
          <li>
            • <strong>完全退出应用</strong>：右键托盘图标选择"退出"
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TrayControls;
