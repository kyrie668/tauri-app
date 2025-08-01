# Android 编译问题修复总结

## 问题描述

在运行 `pnpm tauri android dev` 时遇到编译错误：
```
could not find `menu` in `tauri`
could not find `tray` in `tauri`
```

## 根本原因

Tauri 的 `menu` 和 `tray` 模块只在桌面端可用，在移动端（Android/iOS）不存在。系统托盘是桌面端特有的功能。

## 解决方案

### 1. 使用条件编译

我们已经修改了 `src-tauri/src/lib.rs`，使用 `#[cfg(desktop)]` 条件编译：

```rust
use tauri::{Manager, Runtime};

// 只在桌面端导入托盘相关模块
#[cfg(desktop)]
use tauri::{
    menu::{Menu, MenuItem},
    tray::{MouseButton, TrayIconBuilder, TrayIconEvent},
};

// 只在桌面端编译托盘功能
#[cfg(desktop)]
fn create_tray<R: Runtime>(app: &tauri::AppHandle<R>) -> tauri::Result<()> {
    // 托盘相关代码...
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .plugin(tauri_plugin_os::init())
        .invoke_handler(tauri::generate_handler![greet])
        .setup(|app| {
            // 只在桌面端创建系统托盘
            #[cfg(desktop)]
            {
                create_tray(app.handle())?;
                
                // 设置窗口关闭行为为隐藏而不是退出（仅桌面端）
                if let Some(window) = app.get_webview_window("main") {
                    let window_clone = window.clone();
                    window.on_window_event(move |event| {
                        if let tauri::WindowEvent::CloseRequested { api, .. } = event {
                            api.prevent_close();
                            let _ = window_clone.hide();
                        }
                    });
                }
            }
            
            Ok(())
        })
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
```

### 2. 前端平台检测

修改了 `src/components/TrayControls.tsx`，在移动端隐藏托盘控制组件：

```typescript
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const TrayControls: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
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
            setIsMobile(isMobileUA);
          }
        } else {
          setIsMobile(isMobileUA);
        }
      } catch (error) {
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

  // 桌面端显示托盘控制...
};
```

### 3. 依赖配置

更新了 `src-tauri/Cargo.toml`：

```toml
[dependencies]
tauri = { version = "2", features = ["tray-icon"] }
tauri-plugin-opener = "2"
tauri-plugin-os = "2"
serde = { version = "1", features = ["derive"] }
serde_json = "1"
```

添加了前端依赖：
```bash
pnpm add @tauri-apps/plugin-os
```

## 现在可以运行的命令

### 桌面端开发
```bash
pnpm tauri dev
```

### Android 开发
```bash
# 首次需要初始化 Android 项目
pnpm tauri add android

# 开发模式
pnpm tauri android dev

# 构建 APK
pnpm tauri android build
```

## 功能差异

### 桌面端功能
- ✅ 系统托盘图标
- ✅ 托盘菜单（显示、隐藏、退出）
- ✅ 左键点击切换显示/隐藏
- ✅ 窗口关闭时隐藏到托盘
- ✅ 窗口置顶显示

### 移动端功能
- ❌ 无系统托盘（移动端不支持）
- ✅ 正常的应用窗口行为
- ✅ 标准的移动端应用体验

## 注意事项

1. **条件编译**：使用 `#[cfg(desktop)]` 和 `#[cfg(mobile)]` 来区分平台代码
2. **功能适配**：移动端和桌面端的用户体验应该有所不同
3. **测试**：分别在桌面端和移动端测试应用功能
4. **图标**：确保为不同平台准备合适的图标资源

## 开发流程

1. **桌面端开发**：使用 `pnpm tauri dev` 开发和测试桌面端功能
2. **移动端测试**：使用 `pnpm tauri android dev` 测试移动端兼容性
3. **构建发布**：分别构建桌面端和移动端版本

现在你的应用应该可以在 Android 模拟器中正常运行了！