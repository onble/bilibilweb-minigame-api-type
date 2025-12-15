declare namespace BilibilWebMinigame {
    // ------------------------------ 新增枚举类型 ------------------------------
    /**
     * 内存告警等级枚举（仅 Android 支持）
     * @platform Android、基础库 2.4.0+
     */
    enum MemoryWarningLevel {
        /** TRIM_MEMORY_RUNNING_MODERATE */
        MODERATE = 5,
        /** TRIM_MEMORY_RUNNING_LOW */
        LOW = 10,
        /** TRIM_MEMORY_RUNNING_CRITICAL */
        CRITICAL = 15,
    }

    // ------------------------------ 新增通用类型 ------------------------------
    /**
     * 内存不足告警事件回调参数
     * @platform 基础库 2.4.0+（Android 有 level 字段，iOS 无）
     */
    interface MemoryWarningResult {
        /** 内存告警等级（仅 Android 才有，对应系统宏定义） */
        level?: MemoryWarningLevel;
    }

    // ------------------------------ 监听回调类型 ------------------------------
    /**
     * onMemoryWarning - 监听内存不足告警的回调
     * @platform 基础库 2.4.0+（Android 有 level 字段，iOS 无）
     */
    type MemoryWarningCallback = (res: MemoryWarningResult) => void;
}