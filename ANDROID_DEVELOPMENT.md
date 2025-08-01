# Tauri 2.0 Android 开发指南

## 环境准备

### 1. 安装必要工具

```bash
# 安装 Android Studio 和 Android SDK
# 下载地址：https://developer.android.com/studio

# 安装 Java 开发工具包 (JDK 17 或更高版本)
# 可以通过 Android Studio 安装，或单独下载

# 安装 Rust Android 目标
rustup target add aarch64-linux-android armv7-linux-androideabi i686-linux-android x86_64-linux-android
```

### 2. 配置环境变量

在你的系统环境变量中添加：

```bash
# Windows 示例
ANDROID_HOME=C:\Users\YourUsername\AppData\Local\Android\Sdk
JAVA_HOME=C:\Program Files\Android\Android Studio\jbr

# 添加到 PATH
%ANDROID_HOME%\tools
%ANDROID_HOME%\tools\bin
%ANDROID_HOME%\platform-tools
```

### 3. 初始化 Android 项目

```bash
# 添加 Android 平台支持
pnpm tauri add android

# 这会创建 src-tauri/gen/android 目录
```

## 开发和调试

### 1. 启动 Android 模拟器

```bash
# 通过 Android Studio 启动模拟器
# 或使用命令行：
emulator -avd YourAVDName
```

### 2. 在模拟器中运行应用

```bash
# 开发模式（热重载）
pnpm tauri android dev

# 如果遇到设备选择，可以指定设备
pnpm tauri android dev --target emulator-5554
```

### 3. 构建 APK

```bash
# 调试版本
pnpm tauri android build

# 发布版本
pnpm tauri android build --release
```

## 平台差异处理

### 1. 条件编译

我们的代码已经使用了条件编译来处理平台差异：

```rust
// 只在桌面端编译托盘功能
#[cfg(desktop)]
use tauri::{
    menu::{Menu, MenuItem},
    tray::{MouseButton, TrayIconBuilder, TrayIconEvent},
};

#[cfg(desktop)]
fn create_tray<R: Runtime>(app: &tauri::AppHandle<R>) -> tauri::Result<()> {
    // 托盘相关代码
}
```

### 2. 前端平台检测

可以在前端代码中检测平台：

```typescript
import { platform } from '@tauri-apps/plugin-os';

const currentPlatform = await platform();
console.log('当前平台:', currentPlatform); // 'android', 'windows', 'macos', 'linux'

// 根据平台显示不同的 UI
if (currentPlatform === 'android') {
    // 移动端 UI
} else {
    // 桌面端 UI（包含托盘控制）
}
```

### 3. 更新前端组件

让我们更新 TrayControls 组件，使其在移动端不显示：

```typescript
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

const TrayControls: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // 检测是否为移动端
    const checkPlatform = async () => {
      try {
        const { platform } = await import('@tauri-apps/plugin-os');
        const currentPlatform = await platform();
        setIsMobile(currentPlatform === 'android' || currentPlatform === 'ios');
      } catch (error) {
        // 如果无法检测平台，假设为桌面端
        setIsMobile(false);
      }
    };

    checkPlatform();
  }, []);

  // 在移动端不显示托盘控制
  if (isMobile) {
    return null;
  }

  const handleMinimizeToTray = () => {
    window.close();
  };

  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="flex gap-4">
        <Button 
          onClick={handleMinimizeToTray}
          variant="outline"
        >
          最小化到托盘
        </Button>
      </div>
      <div className="text-sm text-gray-600 bg-blue-50 p-3 rounded-lg">
        <h4 className="font-semibold mb-2 text-blue-800">系统托盘功能说明：</h4>
        <ul className="space-y-1">
          <li>• <strong>左键点击托盘图标</strong>：切换窗口显示/隐藏，显示时窗口会自动置于最前面</li>
          <li>• <strong>右键点击托盘图标</strong>：显示上下文菜单（显示、隐藏、退出）</li>
          <li>• <strong>点击窗口关闭按钮</strong>：应用会隐藏到托盘而不是退出</li>
          <li>• <strong>完全退出应用</strong>：右键托盘图标选择"退出"</li>
        </ul>
      </div>
    </div>
  );
};

export default TrayControls;
```

## 常见问题

### 1. 编译错误

**问题**：`could not find 'menu' in 'tauri'`
**解决**：确保使用了条件编译 `#[cfg(desktop)]`

### 2. 模拟器连接问题

```bash
# 检查设备连接
adb devices

# 重启 ADB 服务
adb kill-server
adb start-server
```

### 3. 权限问题

在 `src-tauri/gen/android/app/src/main/AndroidManifest.xml` 中添加必要权限：

```xml
<uses-permission android:name="android.permission.INTERNET" />
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
```

## 调试技巧

### 1. 查看日志

```bash
# 查看应用日志
adb logcat | grep -i "tauri\|rust"

# 或在 Android Studio 的 Logcat 中查看
```

### 2. Chrome DevTools

在 Android 设备上，可以通过 Chrome 的 `chrome://inspect` 来调试 WebView。

### 3. 网络调试

确保开发服务器可以被 Android 设备访问：

```bash
# 在 tauri.conf.json 中设置
"devUrl": "http://0.0.0.0:1420"
```

## 发布准备

### 1. 签名配置

创建 `src-tauri/gen/android/keystore.properties`：

```properties
storeFile=path/to/your/keystore.jks
storePassword=your_store_password
keyAlias=your_key_alias
keyPassword=your_key_password
```

### 2. 构建发布版本

```bash
pnpm tauri android build --release
```

生成的 APK 文件位于：`src-tauri/gen/android/app/build/outputs/apk/`