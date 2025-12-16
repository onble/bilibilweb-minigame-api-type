declare namespace BilibilWebMinigame {
    // ------------------------------ 核心枚举/类型 ------------------------------
    /**
     * 订阅消息模板ID枚举（文档明确的模板类型）
     * @platform 基础库 3.1.0+
     */
    enum SubscribeMessageTmplId {
        /** 小游戏版本更新模板 */
        NEW_VERSION = "NEW_VERSION",
    }

    /**
     * 订阅结果值（用户对模板的订阅状态）
     */
    type SubscribeResultValue = "accept" | "reject" | "ban";

    /**
     * 订阅消息失败错误码枚举
     * @platform 基础库 3.1.0+
     */
    enum SubscribeMessageErrCode {
        /** 登录验证失败 */
        LOGIN_VERIFY_FAIL = 83001002,
        /** 错误的小游戏信息 */
        INVALID_GAME_INFO = 83001003,
        /** 消息模版不存在或已失效 */
        TEMPLATE_INVALID = 83000005,
        /** 用户取消 */
        USER_CANCEL = 6001,
        /** 模板消息数量超过上限（单次最多5条） */
        TEMPLATE_COUNT_EXCEED = 1001,
        /** 参数类型错误 */
        PARAM_TYPE_ERROR = 1002,
        /** 游戏类型错误 */
        GAME_TYPE_ERROR = 10001,
        /** 本次无法订阅（冷启仅1次/未上架） */
        CANNOT_POP_NOW = 10002,
        /** 网络错误 */
        NETWORK_ERROR = 10003,
        /** 运行时参数类型错误 */
        RUNTIME_PARAM_ERROR = 10004,
    }

    /**
     * 错误码与提示消息映射表（文档明确）
     */
    type SubscribeMessageErrMsgMap = {
        [key in SubscribeMessageErrCode]: string;
    };

    // ------------------------------ 接口参数/回调类型 ------------------------------
    /**
     * requestSubscribeMessage 成功回调结果
     * @platform 基础库 3.1.0+
     */
    interface RequestSubscribeMessageSuccessResult {
        /** 动态键：模板ID，值为订阅状态（accept/reject/ban） */
        [TEMPLATE_ID: string]: SubscribeResultValue;
    }

    /**
     * requestSubscribeMessage 失败回调结果
     * @platform 基础库 3.1.0+
     */
    interface RequestSubscribeMessageFailResult {
        /** 错误信息 */
        errMsg: string;
        /** 错误码（对应 SubscribeMessageErrCode） */
        errCode: SubscribeMessageErrCode | number;
    }

    /**
     * requestSubscribeMessage - 调起订阅消息界面接口参数
     * @platform 基础库 3.1.0+（低版本需兼容）
     * @description 1. 仅已上架游戏可用；2. 需用户点击/支付后调起；3. 单次最多订阅5条模板；4. 冷启仅能弹1次
     */
    interface RequestSubscribeMessageOptions {
        /** 需要订阅的消息模板ID集合（必填，单次最多5条） */
        tmplIds: string[];
        /** 成功回调（返回各模板的订阅状态） */
        success?: (res: RequestSubscribeMessageSuccessResult) => void;
        /** 失败回调（返回错误码/错误信息） */
        fail?: (res: RequestSubscribeMessageFailResult) => void;
        /** 完成回调（成功/失败都执行） */
        complete?: () => void;
    }
}