declare namespace BilibilWebMinigame {
    // ------------------------------ 通用类型 ------------------------------
    /**
     * 关注状态结果（0=未关注，1=已关注）
     * @platform 基础库通用
     */
    interface FollowStatusResult {
        /** 关注状态：0 未关注，1 已关注 */
        follow: 0 | 1;
    }

    // ------------------------------ 获取小游戏关注状态相关类型 ------------------------------
    /**
     * getGameFollowingStatus - 获取小游戏关注状态接口参数
     * @platform 基础库 2.3.0+（低版本需兼容）
     */
    interface GetGameFollowingStatusOptions {
        /** 成功回调（返回关注状态） */
        success?: (res: FollowStatusResult) => void;
        /** 失败回调（返回错误码/错误信息） */
        fail?: () => void;
        /** 完成回调（成功/失败都执行） */
        complete?: () => void;
    }

    // ------------------------------ 胶囊菜单关注事件相关类型 ------------------------------
    /**
     * onGameFollowedFromMenu - 胶囊菜单关注事件回调类型
     * @platform 基础库 3.0.0+（低版本需兼容）
     */
    type GameFollowedFromMenuCallback = () => void;

    // ------------------------------ UP主关注相关类型 ------------------------------
    /**
     * getGameUpperFollowingStatus - 获取小游戏对应UP主关注状态接口参数
     * @platform 基础库 3.0.0+（低版本需兼容）
     */
    interface GetGameUpperFollowingStatusOptions {
        /** 成功回调（返回关注状态） */
        success?: (res: FollowStatusResult) => void;
        /** 失败回调（返回错误码/错误信息） */
        fail?: () => void;
        /** 完成回调（成功/失败都执行） */
        complete?: () => void;
    }

    /**
     * followGameUpper - 关注小游戏对应UP主接口参数
     * @platform 基础库 3.0.0+（低版本需兼容）
     * @description 需在 getGameUpperFollowingStatus 成功回调内调用
     */
    interface FollowGameUpperOptions {
        /** 成功回调 */
        success?: () => void;
        /** 失败回调（返回错误码/错误信息） */
        fail?: () => void;
        /** 完成回调（成功/失败都执行） */
        complete?: () => void;
    }

}