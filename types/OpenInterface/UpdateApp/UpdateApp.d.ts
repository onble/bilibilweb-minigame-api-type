declare namespace BilibilWebMinigame {
    // ------------------------------ 接口参数类型 ------------------------------
    /**
     * updateApp - 更新哔哩哔哩版本
     * @platform iOS 基础库 3.22.0+、Android 基础库 3.23.0+
     */
    interface UpdateAppOptions {
        /** 成功回调 */
        success?: () => void;
        /** 失败回调（返回错误码/错误信息） */
        fail?: () => void;
        /** 完成回调（成功/失败都执行） */
        complete?: () => void;
    }

}