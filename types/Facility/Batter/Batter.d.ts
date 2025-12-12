declare namespace BilibilWebMinigame {
    // ------------------------------ 通用类型 ------------------------------
    /**
     * 设备电量信息返回结果
     * @platform 基础库 3.20.0+（isLowPowerMode 字段）
     */
    interface BatteryInfoResult {
        /** 设备电量，范围 1 - 100（字符串类型） */
        level: string;
        /** 是否正在充电中 */
        isCharging: boolean;
        /** 是否开启省电模式（基础库 3.20.0+ 支持） */
        isLowPowerMode: boolean;
    }

    // ------------------------------ 接口参数类型 ------------------------------
    /**
     * getBatteryInfo - 获取设备电量（异步接口）
     * @platform 基础库 3.20.0+（isLowPowerMode 字段）
     */
    interface GetBatteryInfoOptions {
        /** 成功回调（返回设备电量信息） */
        success?: (res: BatteryInfoResult) => void;
        /** 失败回调（返回错误码/错误信息） */
        fail?: () => void;
        /** 完成回调（成功/失败都执行） */
        complete?: () => void;
    }

}