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

        //#endregion 基础
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
