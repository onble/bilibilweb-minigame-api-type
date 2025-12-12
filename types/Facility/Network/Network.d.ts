declare namespace BilibilWebMinigame {
    // ------------------------------ 新增枚举类型 ------------------------------
    /**
     * 网络类型枚举
     * @platform 基础库通用（5g 字段 3.20.0+ 支持）
     */
    type NetworkType = "wifi" | "2g" | "3g" | "4g" | "5g" | "unknown" | "none";

    // ------------------------------ 新增通用类型 ------------------------------
    /**
     * 网络状态变化回调参数
     * @platform 基础库通用（5g 字段 3.20.0+ 支持）
     */
    interface NetworkStatusChangeResult {
        /** 当前是否有网络连接 */
        isConnected: boolean;
        /** 网络类型（5g 字段 3.20.0+ 支持） */
        networkType: NetworkType;
    }

    /**
     * 获取网络类型成功回调结果
     * @platform 基础库通用（5g 字段 3.20.0+ 支持）
     */
    interface GetNetworkTypeSuccessResult {
        /** 网络类型（5g 字段 3.20.0+ 支持） */
        networkType: NetworkType;
    }

    // ------------------------------ 接口参数类型 ------------------------------
    /**
     * getNetworkType - 获取网络类型
     * @platform 基础库通用（5g 字段 3.20.0+ 支持）
     */
    interface GetNetworkTypeOptions {
        /** 成功回调（返回网络类型） */
        success?: (res: GetNetworkTypeSuccessResult) => void;
        /** 失败回调（返回错误码/错误信息） */
        fail?: (res: BluetoothErrorResult) => void;
        /** 完成回调（成功/失败都执行） */
        complete?: () => void;
    }

    // ------------------------------ 监听/取消监听回调类型 ------------------------------
    /**
     * onNetworkStatusChange - 监听网络状态变化的回调
     * @platform 基础库通用（5g 字段 3.20.0+ 支持）
     */
    type NetworkStatusChangeCallback = (res: NetworkStatusChangeResult) => void;

}