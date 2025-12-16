declare namespace BilibilWebMinigame {
    // ------------------------------ 支付错误码枚举 ------------------------------
    /**
     * requestRecharge 失败回调错误码枚举
     * @platform App >=8.56.0、SDK_Version >=4.2.2（2025.8.15后低版本不支持）
     */
    enum RechargeFailCode {
        /** 正在支付中，发起了另一个支付流程 */
        DUPLICATE_PAYMENT = 1,
        /** 参数错误 */
        PARAM_ERROR = 2,
        /** 用户取消 */
        USER_CANCEL = 3,
        /** 网络错误 */
        NETWORK_ERROR = 4,
        /** 第三方渠道调起失败 */
        THIRD_PARTY_CHANNEL_FAIL = 5,
        /** 支付结果未知 */
        UNKNOWN_PAY_RESULT = 6,
        /** 支付宝签约失败 */
        ALIPAY_SIGN_FAIL = 9,
        /** 支付宝签约成功但扣款状态未知 */
        ALIPAY_DEDUCT_UNKNOWN = 10,
        /** 获取资产充值参数失败 */
        GET_RECHARGE_PARAM_FAIL = 12,
        /** 支付渠道其他错误 */
        PAY_CHANNEL_OTHER_ERROR = 99,
        /** 内部其他错误 */
        INNER_OTHER_ERROR = 100,
        /** 健康系统限制，支付超限额 */
        HEALTH_SYSTEM_LIMIT = -15009,
    }

    /**
     * 错误码与提示消息映射（文档明确的映射关系）
     */
    type RechargeFailCodeMsgMap = {
        [key in RechargeFailCode]: string;
    };

    // ------------------------------ 回调结果类型 ------------------------------
    /**
     * requestRecharge 成功回调结果
     * @platform App >=8.56.0、SDK_Version >=4.2.2
     */
    interface RequestRechargeSuccessResult {
        /** 成功码：固定 0 */
        code: 0;
        /** 成功消息：固定 "成功" */
        msg: "成功";
    }

    /**
     * requestRecharge 失败回调结果
     * @platform App >=8.56.0、SDK_Version >=4.2.2
     */
    interface RequestRechargeFailResult {
        /** 错误码（对应 RechargeFailCode） */
        code: RechargeFailCode | number;
        /** 错误信息（对应 code 映射的 msg） */
        msg: string;
    }

    // ------------------------------ 接口参数类型 ------------------------------
    /**
     * requestRecharge - 发起充值请求接口参数
     * @platform App >=8.56.0、SDK_Version >=4.2.2（2025.8.15后低版本不支持）
     * @description 1. 需先开通支付权限；2. 参数完全透传服务端创建订单接口返回的数据；3. success 为必填回调
     */
    interface RequestRechargeOptions {
        /** 接口调用成功的回调函数（必填） */
        success: (res: RequestRechargeSuccessResult) => void;
        /** 接口调用失败的回调函数（可选） */
        fail?: (res: RequestRechargeFailResult) => void;
        /** 服务端返回的透传参数（任意字段，文档要求完全透传） */
        [key: string]: any;
    }

}