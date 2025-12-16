declare namespace BilibilWebMinigame {
    // ------------------------------ 核心枚举/常量 ------------------------------
    /**
     * 激励视频广告错误码枚举
     * @platform 基础库 4.0.0+
     */
    enum RewardedVideoAdErrCode {
        /** 后端接口调用失败 */
        BACKEND_API_FAILED = 1000,
        /** 参数错误 */
        PARAM_ERROR = 1001,
        /** 广告单元无效 */
        AD_UNIT_INVALID = 1002,
        /** 内部错误 */
        INTERNAL_ERROR = 1003,
        /** 无合适的广告 */
        NO_SUITABLE_AD = 1004,
        /** 广告组件审核中 */
        AD_COMPONENT_REVIEWING = 1005,
        /** 广告组件被驳回 */
        AD_COMPONENT_REJECTED = 1006,
        /** 广告组件被封禁 */
        AD_COMPONENT_BANNED = 1007,
        /** 广告单元已关闭 */
        AD_UNIT_CLOSED = 1008,
    }

    /**
     * 激励视频广告错误码与说明/解决方案映射
     * @platform 基础库 4.0.0+
     */
    interface RewardedVideoAdErrDetail {
        /** 异常情况描述 */
        reason: string;
        /** 解决方案 */
        solution: string;
    }

    // ------------------------------ 事件回调参数类型 ------------------------------
    /**
     * 激励视频广告错误事件参数
     * @platform 基础库 4.0.0+
     */
    interface RewardedVideoAdErrorRes {
        /** 错误信息 */
        errMsg: string;
        /** 错误码（对应 RewardedVideoAdErrCode） */
        errCode: RewardedVideoAdErrCode | number;
    }

    /**
     * 激励视频广告关闭事件参数
     * @platform 基础库 4.0.0+
     */
    interface RewardedVideoAdCloseRes {
        /** 视频是否被完整观看后关闭 */
        isEnded: boolean;
    }

    // ------------------------------ 创建广告参数类型 ------------------------------
    /**
     * 创建激励视频广告组件参数
     * @platform 基础库 4.0.0+
     */
    interface CreateRewardedVideoAdOptions {
        /** 广告单元 ID（必填） */
        adUnitId: string;
        /** 是否启用多例模式（默认 false） */
        multiton?: boolean;
    }

    // ------------------------------ 激励视频广告组件接口 ------------------------------
    /**
     * 激励视频广告组件（全局单例，小程序端为页面内单例）
     * @platform 基础库 4.0.0+（低版本需兼容）
     * @description 1. 原生组件，层级高于普通组件；2. 默认隐藏，需调用 show() 显示；3. 小游戏端全局单例，小程序端页面内单例且不允许跨页面使用
     */
    interface RewardedVideoAd {
        /**
         * 加载激励视频广告
         * @returns 加载结果 Promise（无返回值，失败会 reject）
         */
        load: () => Promise<void>;

        /**
         * 显示激励视频广告（从屏幕下方推入）
         * @returns 显示操作结果 Promise（无返回值，失败会 reject）
         */
        show: () => Promise<void>;

        /**
         * 销毁激励视频广告实例
         * @returns 销毁操作结果 Promise（无返回值）
         */
        destroy: () => Promise<void>;

        /**
         * 监听广告加载成功事件
         * @param listener 加载成功监听函数（无参数）
         */
        onLoad: (listener: () => void) => void;

        /**
         * 移除广告加载成功事件监听
         * @param listener 要移除的监听函数（不传则移除所有）
         */
        offLoad: (listener?: () => void) => void;

        /**
         * 监听广告错误事件
         * @param listener 错误事件监听函数（参数为错误信息）
         */
        onError: (listener: (res: RewardedVideoAdErrorRes) => void) => void;

        /**
         * 移除广告错误事件监听
         * @param listener 要移除的监听函数（不传则移除所有）
         */
        offError: (listener?: (res: RewardedVideoAdErrorRes) => void) => void;

        /**
         * 监听广告关闭事件
         * @param listener 关闭事件监听函数（参数包含是否完整观看）
         */
        onClose: (listener: (res: RewardedVideoAdCloseRes) => void) => void;

        /**
         * 移除广告关闭事件监听
         * @param listener 要移除的监听函数（不传则移除所有）
         */
        offClose: (listener?: (res: RewardedVideoAdCloseRes) => void) => void;
    }

}