declare namespace BilibilWebMinigame {
    // ------------------------------ 接口参数类型 ------------------------------
    /**
     * presentPendant - 小游戏内赠送头像框接口参数
     * @platform 基础库通用
     * @description 1. 调用前需已调用 bl.login（建议 onLaunch 中调用）；2. activityId/expire 需联系运营同学获取
     */
    interface PresentPendantOptions {
        /** 挂件发放活动唯一 id（必填，联系运营获取） */
        activityId: number;
        /** 挂件使用时间（必填，单位：天，联系运营获取） */
        expire: number;
        /** 成功回调 */
        success?: () => void;
        /** 失败回调（返回错误码/错误信息） */
        fail?: () => void;
        /** 完成回调（成功/失败都执行） */
        complete?: () => void;
    }
}