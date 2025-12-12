declare namespace BilibilWebMinigame {
    // ------------------------------ 通用类型 ------------------------------
    /**
     * 获取剪贴板数据成功回调结果
     * @platform 基础库通用
     */
    interface GetClipboardDataSuccessResult {
        /** 剪贴板的内容 */
        data: string;
    }

    // ------------------------------ 接口参数类型 ------------------------------
    /**
     * setClipboardData - 设置系统剪贴板的内容
     * @platform 基础库通用
     */
    interface SetClipboardDataOptions {
        /** 剪贴板的内容（必填） */
        data: string;
        /** 成功回调 */
        success?: () => void;
        /** 失败回调（返回错误码/错误信息） */
        fail?: () => void;
        /** 完成回调（成功/失败都执行） */
        complete?: () => void;
    }

    /**
     * getClipboardData - 获取系统剪贴板的内容
     * @platform 基础库通用
     */
    interface GetClipboardDataOptions {
        /** 成功回调（返回剪贴板内容） */
        success?: (res: GetClipboardDataSuccessResult) => void;
        /** 失败回调（返回错误码/错误信息） */
        fail?: () => void;
        /** 完成回调（成功/失败都执行） */
        complete?: () => void;
    }
}