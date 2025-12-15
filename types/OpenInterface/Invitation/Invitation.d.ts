declare namespace BilibilWebMinigame {
    // ------------------------------ 活动信息核心类型 ------------------------------
    /**
     * 分享赠送大会员活动基础信息
     * @platform 开放数据域、基础库通用
     */
    interface ShareActivityInfo {
        /** 赠送大会员活动 id */
        activityId: number;
        /** 赠送大会员活动过期时间（13位时间戳） */
        expire: number;
        /** 活动开始时间（13位时间戳） */
        startTime: number;
        /** 活动结束时间（13位时间戳） */
        endTime: number;
        /** 活动设置用户可领取大会员的最大次数 */
        maxRewards: number;
        /** 用户当前是否可领取大会员 */
        canReceive: boolean;
        /** 用户所获得的奖励大会员 总可领取的次数 */
        totalRewards: number;
        /** 用户所获得的奖励大会员 已领取的次数 */
        receivedRewards: number;
        /** 用户所获得的奖励大会员 剩余可领取的次数 */
        remainedRewards: number;
    }

    /**
     * 被邀请新客信息
     * @platform 开放数据域、基础库通用
     */
    interface Invitee {
        /** 小程序用户唯一标识 */
        openId: string;
        /** 用户的昵称 */
        nickName: string;
        /** 用户头像图片 url 地址 */
        face: string;
        /** 新客加入时间 */
        ctime: string;
    }

    /**
     * 被邀请新客列表分页信息
     * @platform 开放数据域、基础库通用
     */
    interface InviteesInfo {
        /** 邀请到的新客信息列表 */
        list: Invitee[];
        /** 当前页码 */
        pageNum: number;
        /** 每页信息个数 */
        pageSize: number;
        /** 总页数 */
        pages: number;
        /** 当前页的信息个数 */
        size: number;
        /** 总信息个数 */
        total: number;
        /** 其余属性不需要关注 */
        [key: string]: any;
    }

    // ------------------------------ 获取活动列表相关类型 ------------------------------
    /**
     * getInvitationData - 获取邀请赠大会员活动列表接口参数
     * @platform 开放数据域、基础库通用
     * @description 调用前需已调用 bl.login（建议 onLaunch 中调用）
     */
    interface GetInvitationDataOptions {
        /** 开始时间戳（必填，13位） */
        start: number;
        /** 截止时间戳（必填，13位） */
        end: number;
        /** 成功回调（返回活动列表） */
        success?: (res: { data: ShareActivityInfo[] }) => void;
        /** 失败回调（返回错误码/错误信息） */
        fail?: () => void;
        /** 完成回调（成功/失败都执行） */
        complete?: () => void;
    }

    // ------------------------------ 获取活动详情相关类型 ------------------------------
    /**
     * getInvitationDetail - 获取指定邀请活动详情接口参数
     * @platform 开放数据域、基础库通用
     * @description 调用前需已调用 bl.login（建议 onLaunch 中调用）
     */
    interface GetInvitationDetailOptions {
        /** 活动 id（必填，从 getInvitationData 返回） */
        activityId: number;
        /** 被邀请新客列表页面大小，默认 10，最大 100 */
        pageSize?: number;
        /** 被邀请新客列表页数，默认 1 */
        pageNum?: number;
        /** 成功回调（返回活动详情+新客列表） */
        success?: (res: {
            /** 活动信息（可能为 undefined） */
            activityInfo: ShareActivityInfo | undefined;
            /** 被邀请成员列表 */
            invitees: InviteesInfo;
        }) => void;
        /** 失败回调（返回错误码/错误信息） */
        fail?: () => void;
        /** 完成回调（成功/失败都执行） */
        complete?: () => void;
    }

    // ------------------------------ 领取活动奖励相关类型 ------------------------------
    /**
     * getInvitationReward - 领取邀请赠大会员活动奖励接口参数
     * @platform 开放数据域、基础库通用
     * @description 调用前需已调用 bl.login（建议 onLaunch 中调用）
     */
    interface GetInvitationRewardOptions {
        /** 活动 id（必填，从 getInvitationData 返回） */
        activityId: number;
        /** 成功回调 */
        success?: (res: Record<string, any>) => void;
        /** 失败回调（返回错误码/错误信息） */
        fail?: () => void;
        /** 完成回调（成功/失败都执行） */
        complete?: () => void;
    }

}