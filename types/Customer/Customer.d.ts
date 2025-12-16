declare namespace BilibilWebMinigame {
    // ------------------------------ 接口参数类型 ------------------------------
    /**
     * 打开客服会话接口参数
     * @platform 基础库 4.0.2+、仅 iOS 支持
     * @description 1. 需在用户至少一次 touch 事件后调用；2. sessionFrom 最长1000字符，超过截断
     */
    interface OpenCustomerServiceConversationOptions {
        /**
         * 会话来源（透传至客服链接的 session_from query 字段）
         * @default ''
         * @maxLength 1000（超过自动截断）
         */
        sessionFrom?: string;
        /** 接口调用成功回调 */
        success?: (res: OpenCustomerServiceConversationSuccessRes) => void;
        /** 接口调用失败回调 */
        fail?: (res: OpenCustomerServiceConversationFailRes) => void;
        /** 接口调用结束回调（成功/失败均执行） */
        complete?: (res: OpenCustomerServiceConversationSuccessRes | OpenCustomerServiceConversationFailRes) => void;
    }

    /**
     * 打开客服会话成功返回结果
     * @platform 基础库 4.0.2+、仅 iOS 支持
     */
    interface OpenCustomerServiceConversationSuccessRes {
        /** 成功提示信息（固定值） */
        errMsg: "openCustomerServiceConversation:ok";
    }

    /**
     * 打开客服会话失败返回结果
     * @platform 基础库 4.0.2+、仅 iOS 支持
     */
    interface OpenCustomerServiceConversationFailRes {
        /** 错误提示信息（格式：openCustomerServiceConversation:fail + 详细信息） */
        errMsg: string;
    }

}