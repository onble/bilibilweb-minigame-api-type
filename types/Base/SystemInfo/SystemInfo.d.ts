declare namespace BilibilWebMinigame {
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
}