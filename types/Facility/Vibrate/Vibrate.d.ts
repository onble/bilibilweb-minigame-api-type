declare namespace BilibilWebMinigame {
    // ------------------------------ 接口参数类型 ------------------------------
    /**
     * vibrateLong - 使手机发生较长时间的振动（400ms）
     * @platform 基础库通用
     */
    interface VibrateLongOptions {
        /** 成功回调 */
        success?: () => void;
        /** 失败回调（返回错误码/错误信息） */
        fail?: () => void;
        /** 完成回调（成功/失败都执行） */
        complete?: () => void;
    }

    /**
     * vibrateShort - 使手机发生较短时间的振动（15ms）
     * @platform 基础库通用（仅 iPhone 7/7 Plus 以上及 Android 机型生效）
     */
    interface VibrateShortOptions {
        /** 成功回调 */
        success?: () => void;
        /** 失败回调（返回错误码/错误信息） */
        fail?: () => void;
        /** 完成回调（成功/失败都执行） */
        complete?: () => void;
    }

}