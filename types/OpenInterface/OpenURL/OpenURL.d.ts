declare namespace BilibilWebMinigame {
    // ------------------------------ 接口参数类型 ------------------------------
    /**
     * openURL - 小游戏跳转站内链接
     * @platform 基础库 2.5.0+
     */
    interface OpenURLOptions {
        /** 跳转链接（必填），限制固定格式，需联系运营同学获取 */
        path: string;
        /** 成功回调 */
        success?: () => void;
        /** 失败回调（返回错误码/错误信息） */
        fail?: (res: BluetoothErrorResult) => void;
        /** 完成回调（成功/失败都执行） */
        complete?: () => void;
    }
}