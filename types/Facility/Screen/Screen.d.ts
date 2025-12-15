declare namespace BilibilWebMinigame {
    // ------------------------------ 通用类型 ------------------------------
    /**
     * 获取屏幕亮度成功回调结果
     * @platform 基础库通用
     * @description Android 自动亮度模式下仅返回调节前的值，非实时值
     */
    interface GetScreenBrightnessSuccessResult {
        /** 屏幕亮度值，范围 0 ~ 1（0 最暗，1 最亮） */
        value: number;
    }

    // ------------------------------ 接口参数类型 ------------------------------
    /**
     * setScreenBrightness - 设置屏幕亮度
     * @platform 基础库通用
     */
    interface SetScreenBrightnessOptions {
        /** 屏幕亮度值，范围 0 ~ 1（必填） */
        value: number;
        /** 成功回调 */
        success?: () => void;
        /** 失败回调（返回错误码/错误信息） */
        fail?: () => void;
        /** 完成回调（成功/失败都执行） */
        complete?: () => void;
    }

    /**
     * setKeepScreenOn - 设置屏幕常亮状态
     * @platform 基础库通用
     * @description 仅当前小游戏生效，离开后失效
     */
    interface SetKeepScreenOnOptions {
        /** 是否保持屏幕常亮（必填） */
        keepScreenOn: boolean;
        /** 成功回调 */
        success?: () => void;
        /** 失败回调（返回错误码/错误信息） */
        fail?: () => void;
        /** 完成回调（成功/失败都执行） */
        complete?: () => void;
    }

    /**
     * getScreenBrightness - 获取屏幕亮度
     * @platform 基础库通用
     * @description Android 自动亮度模式下仅返回调节前的值，非实时值
     */
    interface GetScreenBrightnessOptions {
        /** 成功回调（返回屏幕亮度值） */
        success?: (res: GetScreenBrightnessSuccessResult) => void;
        /** 失败回调（返回错误码/错误信息） */
        fail?: () => void;
        /** 完成回调（成功/失败都执行） */
        complete?: () => void;
    }

    /**
     * setStatusBarHidden - 显示/隐藏顶部状态栏
     * @platform 基础库 3.37.0+
     */
    interface SetStatusBarHiddenOptions {
        /** 是否隐藏状态栏（必填） */
        hidden: boolean;
        /** 成功回调 */
        success?: () => void;
        /** 失败回调（返回错误码/错误信息） */
        fail?: () => void;
        /** 完成回调（成功/失败都执行） */
        complete?: () => void;
    }

    // ------------------------------ 监听回调类型 ------------------------------
    /**
     * onUserCaptureScreen - 监听用户截屏事件的回调
     * @platform 基础库 3.22.0+
     */
    type UserCaptureScreenCallback = (res?: Record<string, never>) => void;

}