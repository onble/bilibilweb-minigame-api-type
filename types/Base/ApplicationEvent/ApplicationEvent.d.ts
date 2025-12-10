declare namespace BilibilWebMinigame {
    /**
     * onError 全局错误事件回调参数类型
     */
    interface OnErrorCallbackResult {
        /** 错误信息描述 */
        message: string;
        /** 错误调用堆栈信息 */
        stack: string;
    }
}