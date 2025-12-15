declare namespace BilibilWebMinigame {
    // ------------------------------ 复用枚举类型 ------------------------------
    /**
     * 陀螺仪监听频率枚举（复用加速度/设备运动的同语义枚举）
     * @platform 基础库通用
     */
    type GyroscopeInterval = "game" | "ui" | "normal";

    // ------------------------------ 新增通用类型 ------------------------------
    /**
     * 陀螺仪数据变化事件回调参数
     * @platform 基础库通用
     */
    interface GyroscopeChangeResult {
        /** X 轴的角速度 */
        x: number;
        /** Y 轴的角速度 */
        y: number;
        /** Z 轴的角速度 */
        z: number;
    }

    // ------------------------------ 接口参数类型 ------------------------------
    /**
     * startGyroscope - 开始监听陀螺仪数据
     * @platform 基础库通用
     */
    interface StartGyroscopeOptions {
        /** 回调执行频率，默认 normal */
        interval?: GyroscopeInterval;
        /** 成功回调 */
        success?: () => void;
        /** 失败回调（返回错误码/错误信息） */
        fail?: () => void;
        /** 完成回调（成功/失败都执行） */
        complete?: () => void;
    }

    /**
     * stopGyroscope - 停止监听陀螺仪数据
     * @platform 基础库通用
     */
    interface StopGyroscopeOptions {
        /** 成功回调 */
        success?: () => void;
        /** 失败回调（返回错误码/错误信息） */
        fail?: () => void;
        /** 完成回调（成功/失败都执行） */
        complete?: () => void;
    }

    // ------------------------------ 监听回调类型 ------------------------------
    /**
     * onGyroscopeChange - 监听陀螺仪数据变化的回调
     * @platform 基础库通用
     * @description 频率由 startGyroscope 的 interval 参数控制
     */
    type GyroscopeChangeCallback = (res: GyroscopeChangeResult) => void;
}