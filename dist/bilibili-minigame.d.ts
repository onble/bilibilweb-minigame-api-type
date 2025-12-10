declare namespace BilibilWebMinigame {
    /**
     * 全局 bl 对象接口定义
     */
    interface BL {
        //#region 基础

        //#region 系统信息
        /**
         * 获取系统信息（异步版本）
         * @param options 接口调用配置项
         * @example
         * bl.getSystemInfo({
         *  success(res) {
         *      console.log(res.model)
         *      console.log(res.pixelRatio)
         *      console.log(res.windowWidth)
         *      console.log(res.windowHeight)
         *      console.log(res.language)
         *      console.log(res.version)
         *      console.log(res.platform)
         *   }
         * })
         */
        getSystemInfo: (options: GetSystemInfoOptions) => void;
        /**
         * 获取系统信息（同步版本）
         * @returns 系统信息详情
         * @throws 调用失败时抛出错误，需通过 try/catch 捕获
         * @example
         * try {
         *  const res = bl.getSystemInfoSync()
         *  console.log(res.model)
         *  console.log(res.pixelRatio)
         *  console.log(res.windowWidth)
         *  console.log(res.windowHeight)
         *  console.log(res.language)
         *  console.log(res.version)
         *  console.log(res.platform)
         *  } catch (e) {
         *  // Do something when catch error
         * }
         */
        getSystemInfoSync: () => GetSystemInfoSuccessResult;

        /**
         * 获取APP基础信息（同步版本）
         * @returns APP基础信息详情
         */
        getAppBaseInfo: () => GetAppBaseInfoResult;
        //#endregion 系统信息

        //#region 更新
        /**
         * 获取全局唯一的版本更新管理器
         * @platform 基础库 2.6.0+，低版本需做兼容处理
         * @returns 更新管理器实例
         */
        getUpdateManager: () => UpdateManager;

        /**
         * 设置调试开关（含更新模块调试）
         * @platform 基础库 2.6.0+
         * @param options 调试配置项
         */
        setEnableDebug?: (options: SetEnableDebugOptions) => void;

        //#endregion 更新

        //#region 生命周期
        /**
         * 取消监听小游戏回到前台的事件
         * @param callback 要取消的、已绑定的小游戏前台事件回调函数
         */
        offShow: (callback: (res: OnShowCallbackResult) => void) => void;

        /**
         * 监听小游戏回到前台的事件
         * @param callback 小游戏回到前台时触发的回调函数
         */
        onShow: (callback: (res: OnShowCallbackResult) => void) => void;

        /**
         * 取消监听小游戏隐藏到后台的事件
         * @param callback 要取消的、已绑定的小游戏后台事件回调函数
         */
        offHide: (callback: () => void) => void;

        /**
         * 监听小游戏隐藏到后台的事件
         * @description 锁屏、按 HOME 键退到桌面等操作会触发此事件
         * @param callback 小游戏隐藏到后台时触发的回调函数
         */
        onHide: (callback: () => void) => void;
        /**
         * 退出当前小游戏
         * @param object 接口调用配置项，包含成功/失败/完成回调
         */
        exitMiniProgram: (object: ExitMiniProgramOptions) => void;

        /**
         * 获取本次小游戏启动时的参数（异步版本）
         * @description 冷启动返回值与回调参数一致；热启动返回值与 App.onShow 一致
         * @param options 接口调用配置项，包含成功/失败回调
         */
        getLaunchOptions: (options: GetLaunchOptionsOptions) => void;

        /**
         * 获取本次小游戏启动时的参数（同步版本）
         * @description 冷启动返回值与自身返回值一致；热启动返回值与 App.onShow 一致
         * @returns 启动参数信息
         */
        getLaunchOptionsSync: () => LaunchOptionsResult;

        /**
         * 获取小游戏打开的参数（包括冷启动和热启动）
         * @returns 启动参数信息
         */
        getEnterOptionsSync: () => LaunchOptionsResult;
        //#endregion 生命周期

        //#region 应用级事件
        /**
         * 取消监听全局错误事件
         * @param callback 要取消的、已绑定的全局错误事件回调函数
         */
        offError: (callback: (res: OnErrorCallbackResult) => void) => void;

        /**
         * 监听全局错误事件
         * @param callback 全局错误事件触发时的回调函数，包含错误信息和调用堆栈
         */
        onError: (callback: (res: OnErrorCallbackResult) => void) => void;

        /**
         * 取消监听音频中断结束事件
         * @param callback 要取消的、已绑定的音频中断结束事件回调函数
         */
        offAudioInterruptionEnd: (callback: () => void) => void;

        /**
         * 监听音频中断结束事件
         * @description 在收到 onAudioInterruptionBegin 事件后，小游戏内所有音频会暂停；收到此事件后才可再次播放成功
         * @param callback 音频中断结束事件触发时的回调函数
         */
        onAudioInterruptionEnd: (callback: () => void) => void;

        /**
         * 取消监听音频因系统占用被中断开始事件
         * @param callback 要取消的、已绑定的音频中断开始事件回调函数
         */
        offAudioInterruptionBegin: (callback: () => void) => void;

        /**
         * 监听音频因系统占用被中断开始事件
         * @description 闹钟、电话、FaceTime 通话等场景会触发此事件；触发后小游戏内所有音频会暂停
         * @param callback 音频中断开始事件触发时的回调函数
         */
        onAudioInterruptionBegin: (callback: () => void) => void;
        //#endregion 应用级事件

        //#endregion 基础
    }
    /**
     * onError 全局错误事件回调参数类型
     */
    interface OnErrorCallbackResult {
        /** 错误信息描述 */
        message: string;
        /** 错误调用堆栈信息 */
        stack: string;
    }
    /**
     * onShow 回调中 referrerInfo 字段的结构类型
     * @description 仅当场景为由从另一个小游戏打开时返回此字段
     */
    interface ReferrerInfo {
        /** 来源小游戏的 appId */
        appId: string;
        /** 来源小游戏的 vAppId */
        vAppId: string;
        /** 来源小游戏传过来的数据 */
        extraData: Record<string, any>;
    }

    /**
     * onShow 回调参数类型
     */
    interface OnShowCallbackResult {
        /** 启动小游戏的查询参数 */
        query: Record<string, any>;
        /** 来源小游戏信息（仅跨小游戏打开时存在） */
        referrerInfo?: ReferrerInfo;
        /**
         * 启动小游戏的场景值
         * @description 合法值见「场景值介绍」文档，可在 bl.getLaunchOptionsSync 和 bl.onShow 中获取
         * 示例值：10001（我的-小游戏中心）、10002（桌面快捷入口）、10003（分享渠道）、021036（侧边栏）
         */
        scene: string;
    }

    /**
     * exitMiniProgram 接口调用参数类型
     * @description 用于配置退出小游戏接口的回调函数
     */
    interface ExitMiniProgramOptions {
        /** 接口调用成功的回调函数 */
        success?: () => void;
        /** 接口调用失败的回调函数 */
        fail?: (err?: any) => void;
        /** 接口调用结束的回调函数（成功/失败都会执行） */
        complete?: () => void;
    }

    /**
     * 小游戏运行环境枚举（envVersion 合法值）
     */
    type EnvVersion = "" | "dev" | "predev" | "precheck";

    /**
     * 启动参数中的来源信息结构（referrerInfo）
     */
    interface LaunchOptionsReferrerInfo {
        /** 来源小程序/小游戏的 appId */
        appId: string;
        /**
         * 来源小程序的虚拟ID
         * @description 仅小程序类型返回该字段，可关联Up主信息，对应指定Up主
         */
        vappId?: string;
        /** 来源小程序传过来的数据 */
        extraData: Record<string, any>;
    }

    /**
     * getLaunchOptions/getLaunchOptionsSync/getEnterOptionsSync 返回/回调的核心参数类型
     */
    interface LaunchOptionsResult {
        /** 启动小游戏的 query 参数 */
        query: Record<string, any>;
        /**
         * 小游戏所在环境
         * @description 空值表示线上环境；dev=开发调试版、predev=开发预览版、precheck=审核预览版
         */
        envVersion: EnvVersion;
        /**
         * 来源信息
         * @description 从另一个小程序/小游戏进入时返回，否则返回空对象
         */
        referrerInfo: LaunchOptionsReferrerInfo | Record<string, never>;
        /**
         * 启动小游戏的场景值
         * @description 合法值见「场景值介绍」文档
         */
        scene: string;
    }

    /**
     * getLaunchOptions 接口调用参数类型
     */
    interface GetLaunchOptionsOptions {
        /**
         * 接口调用成功的回调函数
         * @param res 启动参数信息
         */
        success?: (res: LaunchOptionsResult) => void;
        /** 接口调用失败的回调函数 */
        fail?: (err?: any) => void;
    }
    /**
     * 当前小程序运行的宿主环境信息
     */
    interface Host {
        /**
         * 宿主应用类型
         * 合法值：
         * 0 - 哔哩哔哩
         * 1 - 高能通
         * 2 - 哔哩哔哩漫画
         */
        appType: 0 | 1 | 2;
        /** 宿主应用名称 */
        appName: string;
    }

    /**
     * getAppBaseInfo 接口返回值类型
     */
    interface GetAppBaseInfoResult {
        /** 客户端基础库版本 */
        SDKVersion: string;
        /** 是否已打开调试（可通过右上角菜单或 bl.setEnableDebug 打开） */
        enableDebug: boolean;
        /** 当前小程序运行的宿主环境信息 */
        host: Host;
        /** 宿主应用设置的语言 */
        language: string;
        /** 宿主应用版本号 */
        version: string;
        /**
         * 系统当前主题（light/dark）
         * 备注：全局配置 "darkmode":true 时才能获取，否则无该字段；不支持小游戏
         */
        theme?: "light" | "dark";
    }
    /**
     * 安全区域信息（竖屏正方向下）
     * @platform iOS >= 3.1.0, Android >= 3.31.0
     */
    interface SafeArea {
        /** 安全区域左上角横坐标 */
        left: number;
        /** 安全区域右下角横坐标 */
        right: number;
        /** 安全区域左上角纵坐标 */
        top: number;
        /** 安全区域右下角纵坐标 */
        bottom: number;
        /** 安全区域的宽度，单位逻辑像素 */
        width: number;
        /** 安全区域的高度，单位逻辑像素 */
        height: number;
    }

    /**
     * getSystemInfo 接口调用成功的回调参数类型
     */
    interface GetSystemInfoSuccessResult {
        /** 手机品牌 */
        brand: string;
        /** 手机型号 */
        model: string;
        /** 设备像素比 */
        pixelRatio: number;
        /** 设备像素比（与 pixelRatio 一致） */
        devicePixelRatio: number;
        /** 屏幕宽度 */
        screenWidth: number;
        /** 屏幕高度 */
        screenHeight: number;
        /** 可使用窗口宽度 */
        windowWidth: number;
        /** 可使用窗口高度 */
        windowHeight: number;
        /** 状态栏的高度 */
        statusBarHeight: number;
        /** 系统设置的语言 */
        language: string;
        /** APP版本号 */
        version: string;
        /** 操作系统版本 */
        system: string;
        /** 客户端平台 */
        platform: string;
        /** 客户端基础库版本 */
        SDKVersion: string;
        /** 安全区域信息 */
        safeArea?: SafeArea;
        /**
         * 设备性能等级
         * @platform 仅 Android >= 3.22.0
         * @description 取值：-2/0（无法运行小游戏）、-1（性能未知）、>=1（值越高性能越好，最高不到50）
         */
        benchmarkLevel?: number;
    }

    /**
     * getSystemInfo 接口调用参数类型
     */
    interface GetSystemInfoOptions {
        /** 接口调用成功的回调函数 */
        success?: (res: GetSystemInfoSuccessResult) => void;
        /** 接口调用失败的回调函数 */
        fail?: (err?: any) => void;
        /** 接口调用结束的回调函数（成功/失败都会执行） */
        complete?: () => void;
    }
    /**
     * onCheckForUpdate 回调参数类型
     * @platform 基础库 2.6.0+
     */
    interface OnCheckForUpdateCallbackResult {
        /** 是否有新版本 */
        hasUpdate: boolean;
    }

    /**
     * 更新调试模块配置（用于 setEnableDebug）
     * @platform 基础库 2.6.0+
     */
    interface UpdateDebugModule {
        /** 模块名称，固定为 'update' */
        name: "update";
        /** 是否开启更新调试，默认 false */
        enable?: boolean;
        /** 调试模式，支持 'success'/'fail'，默认 'success' */
        mode?: "success" | "fail";
    }

    /**
     * setEnableDebug 接口参数类型
     * @platform 基础库 2.6.0+
     */
    interface SetEnableDebugOptions {
        /** 调试模块配置列表 */
        debugModule?: (UpdateDebugModule | Record<string, any>)[];
    }

    /**
     * 更新管理器对象（全局唯一）
     * @platform 基础库 2.6.0+，低版本需做兼容处理
     * @description 用于管理小游戏更新，通过 bl.getUpdateManager() 获取实例
     */
    interface UpdateManager {
        /**
         * 强制小游戏重启并使用新版本
         * @description 需在收到 onUpdateReady 回调后调用
         */
        applyUpdate(): void;

        /**
         * 监听向后台请求检查更新结果事件
         * @description 小游戏冷启动时自动检查更新，无需开发者主动触发
         * @param callback 检查更新结果的回调函数
         */
        onCheckForUpdate(
            callback: (res: OnCheckForUpdateCallbackResult) => void,
        ): void;

        /**
         * 监听小游戏有版本更新事件
         * @description 客户端主动触发下载（无需开发者触发），下载成功后回调
         * @param callback 版本更新就绪的回调函数
         */
        onUpdateReady(callback: () => void): void;

        /**
         * 监听小游戏更新失败事件
         * @description 小游戏有新版本，客户端主动触发下载（无需开发者触发），下载失败后回调
         * @param callback 版本更新失败的回调函数
         */
        onUpdateFailed(callback: () => void): void;
    }
}

declare const bl: BilibilWebMinigame.BL;
