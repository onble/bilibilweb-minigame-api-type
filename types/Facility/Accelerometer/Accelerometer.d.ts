declare namespace BilibilWebMinigame {
    // ------------------------------ 复用/新增枚举类型 ------------------------------
    /**
     * 加速度监听频率枚举（复用设备运动监听的同语义枚举）
     * @platform 基础库通用
     */
    type AccelerometerInterval = "game" | "ui" | "normal";

    // ------------------------------ 新增通用类型 ------------------------------
    /**
     * 加速度数据事件回调参数
     * @platform 基础库通用
     */
    interface AccelerometerChangeResult {
        /** X 轴加速度值 */
        x: number;
        /** Y 轴加速度值 */
        y: number;
        /** Z 轴加速度值 */
        z: number;
    }

    // ------------------------------ 接口参数类型 ------------------------------
    /**
     * startAccelerometer - 开始监听加速度数据
     * @platform 基础库通用
     */
    interface StartAccelerometerOptions {
        /** 回调执行频率，默认 normal */
        interval?: AccelerometerInterval;
        /** 成功回调 */
        success?: () => void;
        /** 失败回调（返回错误码/错误信息） */
        fail?: () => void;
        /** 完成回调（成功/失败都执行） */
        complete?: () => void;
    }

    /**
     * stopAccelerometer - 停止监听加速度数据
     * @platform 基础库通用
     */
    interface StopAccelerometerOptions {
        /** 成功回调 */
        success?: () => void;
        /** 失败回调（返回错误码/错误信息） */
        fail?: () => void;
        /** 完成回调（成功/失败都执行） */
        complete?: () => void;
    }

    // ------------------------------ 监听回调类型 ------------------------------
    /**
     * onAccelerometerChange - 监听加速度数据的回调
     * @platform 基础库通用
     */
    type AccelerometerChangeCallback = (res: AccelerometerChangeResult) => void;

}