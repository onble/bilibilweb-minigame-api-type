declare namespace BilibilWebMinigame {
    // ------------------------------ 新增通用类型 ------------------------------
    /**
     * 跳转小游戏传递的额外数据类型
     * @platform 基础库通用
     */
    type MiniProgramExtraData = Record<string, any>;

    // ------------------------------ 接口参数类型 ------------------------------
    /**
     * navigateToMiniProgram - 打开另一个小游戏
     * @platform 基础库通用
     * @description 需用户确认跳转，且目标 appId 需在配置名单内（≤10 个）
     */
    interface NavigateToMiniProgramOptions {
        /** 要打开的小游戏 appId（必填） */
        appId: string;
        /** 要打开的小游戏 vAppId（必填） */
        vAppId: string;
        /** 打开的页面路径，为空则打开首页 */
        path?: string;
        /** 传递给目标小游戏的数据（目标小游戏可在 App.onLaunch/App.onShow 获取） */
        extraData?: MiniProgramExtraData;
        /** 要打开的小游戏版本（仅当前小游戏为开发/体验版时有效） */
        envVersion?: MiniProgramEnvVersion;
        /** 成功回调 */
        success?: () => void;
        /** 失败回调（返回错误码/错误信息）
         * @description 失败场景：用户取消（errMsg 含 cancel）、appId 不在配置列表（errMsg 含 is not in navigateToMiniProgramAppIdList）
         */
        fail?: () => void;
        /** 完成回调（成功/失败都执行） */
        complete?: () => void;
    }
}