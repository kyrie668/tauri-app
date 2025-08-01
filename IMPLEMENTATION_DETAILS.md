# Tauri 2.0 系统托盘实现详细说明

## 实现的功能

✅ **已完成的功能：**
1. 系统托盘图标显示
2. 左键点击托盘图标切换窗口显示/隐藏
3. 右键点击托盘图标显示上下文菜单
4. 窗口显示时自动置于最前面，不被其他窗口遮挡
5. 关闭窗口时隐藏到托盘而不是退出应用
6. 托盘菜单包含：显示、隐藏、退出选项

## 核心实现逻辑

### 1. 窗口置顶机制

```rust
// 显示窗口并确保在最前面
let _ = window.show();           // 显示窗口
let _ = window.unminimize();     // 取消最小化状态
let _ = window.set_focus();      // 获得焦点
let _ = window.set_always_on_top(true);  // 临时置顶

// 100ms 后取消置顶，避免影响正常使用
std::thread::spawn(move || {
    std::thread::sleep(std::time::Duration::from_millis(100));
    let _ = window.set_always_on_top(false);
});
```

### 2. 托盘事件处理

**左键点击事件：**
- 检查窗口当前可见性状态
- 如果可见：隐藏窗口
- 如果隐藏：显示窗口并置于最前面

**右键菜单事件：**
- 显示：执行窗口显示和置顶逻辑
- 隐藏：隐藏窗口到托盘
- 退出：完全退出应用程序

### 3. 窗口关闭行为

```rust
window.on_window_event(move |event| {
    if let tauri::WindowEvent::CloseRequested { api, .. } = event {
        api.prevent_close();        // 阻止默认关闭行为
        let _ = window_clone.hide(); // 隐藏到托盘
    }
});
```

## 配置文件修改

### Cargo.toml
```toml
[dependencies]
tauri = { version = "2", features = ["tray-icon"] }
```

### tauri.conf.json
```json
{
  "app": {
    "windows": [
      {
        "label": "main",  // 重要：需要设置 label 为 "main"
        "title": "tauri-app",
        "width": 800,
        "height": 600
      }
    ]
    // 注意：不要在这里配置 trayIcon，否则会与 Rust 代码中的托盘创建冲突
    // 导致出现两个托盘图标
  }
}
```

## 用户体验优化

1. **窗口置顶策略**：
   - 临时置顶 100ms 确保窗口显示在最前面
   - 自动取消置顶避免影响用户正常操作

2. **状态检测**：
   - 使用 `window.is_visible()` 检测窗口状态
   - 根据状态决定显示或隐藏操作

3. **焦点管理**：
   - 显示窗口时自动获得焦点
   - 确保用户可以立即与窗口交互

## 测试建议

1. **基本功能测试**：
   - 左键点击托盘图标切换显示/隐藏
   - 右键点击托盘图标查看菜单
   - 点击窗口关闭按钮验证隐藏行为

2. **置顶功能测试**：
   - 打开多个其他应用窗口
   - 点击托盘图标显示应用
   - 验证应用窗口是否显示在最前面

3. **退出功能测试**：
   - 右键托盘图标选择"退出"
   - 验证应用完全退出，托盘图标消失

## 可能的问题和解决方案

1. **出现两个托盘图标**：
   - 原因：`tauri.conf.json` 中配置了 `trayIcon` 且 Rust 代码中也创建了托盘
   - 解决：移除配置文件中的 `trayIcon` 配置，只保留 Rust 代码中的创建

2. **图标不显示**：
   - 检查 `icons/icon.ico` 文件是否存在
   - 确认图标格式正确

3. **窗口不置顶**：
   - 某些系统可能有权限限制
   - 可以尝试增加置顶时间或使用其他方法

4. **编译错误**：
   - 确保 Tauri 版本为 2.x
   - 检查所有依赖项是否正确安装

## 运行命令

```bash
# 开发模式
pnpm tauri dev

# 构建应用
pnpm tauri build

# 调试构建
pnpm tauri build --debug
```