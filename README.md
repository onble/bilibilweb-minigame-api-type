# B站小游戏API类型定义库

这是一个用于B站小游戏开发的TypeScript类型定义库，提供了完整的B站小游戏API的类型声明。
编写注释是使用的AI工具辅助完成。

## 特性

- 📚 **完整的API覆盖**：包含B站小游戏所有核心API的类型定义
- 🔧 **模块化结构**：按功能模块组织，便于维护和扩展
- 🛠️ **Gulp构建**：自动合并多个声明文件，确保类型一致性
- 💪 **TypeScript支持**：完整的TypeScript类型提示
- 📖 **详细文档**：每个API都有详细的注释和使用示例

## 使用方法

### 在TypeScript项目中使用

将lib.bl.api.d.ts文件放入项目中即可。

### 模块结构

项目按功能模块组织，主要包含以下模块：

- **基础模块**：系统信息、更新、生命周期、应用级事件、触摸事件、性能、分包加载、定时器、调试。
- **渲染模块**：画布、帧率、字体、图片。
- **界面模块**：交互、键盘、菜单、状态栏、窗口。
- **数据分析模块**：数据分析。
- **网络模块**：发起请求、下载、上传、WebSocket、SocketTask。
- **转发模块**：转发。
- **数据缓存模块**：数据缓存。
- **媒体模块**：音频、图片、视频、相机。
- **位置模块**：位置。
- **文件模块**：FileSystemManager、Stats。
- **设备模块**：蓝牙-通用、蓝牙-低功耗中心设备、蓝牙-低功耗外围设备、电量、剪切板、设备方向、网络、震动、性能、屏幕、加速计、罗盘、陀螺仪。
- **开放接口模块**：小游戏跳转、APP更新、跳转站内链接、打开站内视频链接、用户信息、关注、邀请、赠送头像框、登录、授权、设置、小游戏互跳、预约游戏、手游下载、支付、开放数据域名、订阅消息、意见反馈、角色创建上报、敏感词查询、账号信息、人脸检测、【必接】侧边栏能力、添加到桌面。
- **第三方服务模块**：声网(Agora)。
- **游戏对局回放模块**：GameRecorder、GameRecorderShareButton。
- **广告模块**：RewardedVideoAd。
- **客服能力模块**：客服能力。

## 开发

### 项目结构

```
├── types/                  # 类型定义文件目录
│   ├── Base/               # 基础API类型
│   ├── Customer/           # 客服能力API类型
│   ├── DataAnalysis/       # 数据分析API类型
│   ├── Facility/           # 设备API类型
│   ├── File/               # 文件API类型
│   ├── GameRecorder/       # 游戏对局回放API类型
│   ├── Interface/          # 界面API类型
│   ├── Location/           # 位置API类型
│   ├── Media/              # 媒体API类型
│   ├── Network/            # 网络API类型
│   ├── OpenInterface/      # 开放接口API类型
│   ├── Render/             # 渲染API类型
│   ├── RewardVideoAd/      # 广告API类型
│   ├── Share/              # 转发API类型
│   ├── Storage/            # 数据缓存API类型
│   ├── ThirdPartyServices/ # 第三方服务API类型
│   └── index.d.ts          # 主入口文件
├── dist/                   # 构建输出目录
│   └── lib.bl.api.d.ts     # 合并后的类型定义文件
├── gulpfile.js             # Gulp构建配置
└── package.json            # 项目配置
```

### 构建命令

```bash
# 安装依赖
npm install

# 构建类型定义文件
npm run build:dts

# 监听文件变化并自动构建
npm run watch:dts
```

### 添加新的API类型

1. 在对应的模块目录下创建新的`.d.ts`文件
2. 在`types/index.d.ts`中导入新类型
3. 运行构建命令重新生成合并后的类型文件

## 版本兼容性

- 支持B站小游戏基础库2.0.0+版本
- TypeScript 3.0+ 兼容
- Node.js 12+ 环境

## 贡献

欢迎提交Issue和Pull Request来改进这个项目。

## 许可证

MIT License

## 相关链接

- [B站小游戏官方文档](https://miniapp.bilibili.com/small-game-doc/api/intro)
- [TypeScript官方文档](https://www.typescriptlang.org/)
- [Gulp构建工具](https://gulpjs.com/)