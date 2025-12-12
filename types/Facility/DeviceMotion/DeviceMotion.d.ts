declare namespace BilibilWebMinigame {
    // ------------------------------ 新增枚举类型 ------------------------------
    /**
     * 设备运动监听频率枚举
     * @platform 基础库通用
     */
    type DeviceMotionInterval = "game" | "ui" | "normal";

    /**
     * 设备方向枚举
     * @platform 基础库 3.6.0+、iOS/Android App 6.0.0+
     */
    type DeviceOrientation = "portrait" | "landscape";

    // ------------------------------ 新增通用类型 ------------------------------
    /**
     * 引力加速度信息（基础库 3.94.0+ 支持）
     * @platform 基础库 3.94.0+
     */
    interface GravityInfo {
        /** x 轴方向的引力加速度 */
        x: number;
        /** y 轴方向的引力加速度 */
        y: number;
        /** z 轴方向的引力加速度 */
        z: number;
    }

    /**
     * 设备方向变化事件回调参数
     * @platform 基础库通用（gravity 字段 3.94.0+ 支持）
     */
    interface DeviceMotionChangeResult {
        /** 绕 Z 轴转动夹角，范围 [0, 2π)，逆时针为正 */
        alpha: number;
        /** 绕 X 轴转动夹角，范围 [-π, π)，顶部朝地球表面为正 */
        beta: number;
        /** 绕 Y 轴转动夹角，范围 [-π/2, π/2)，右边朝地球表面为正 */
        gamma: number;
        /** 引力加速度信息（基础库 3.94.0+） */
        gravity?: GravityInfo;
    }

    // ------------------------------ 接口参数类型 ------------------------------
    /**
     * startDeviceMotionListening - 开始监听设备方向的变化
     * @platform 基础库通用
     */
    interface StartDeviceMotionListeningOptions {
        /** 回调执行频率，默认 normal */
        interval?: DeviceMotionInterval;
        /** 成功回调 */
        success?: () => void;
        /** 失败回调（返回错误码/错误信息） */
        fail?: () => void;
        /** 完成回调（成功/失败都执行） */
        complete?: () => void;
    }

    /**
     * stopDeviceMotionListening - 停止监听设备方向的变化
     * @platform 基础库通用
     */
    interface StopDeviceMotionListeningOptions {
        /** 成功回调 */
        success?: () => void;
        /** 失败回调（返回错误码/错误信息） */
        fail?: () => void;
        /** 完成回调（成功/失败都执行） */
        complete?: () => void;
    }

    /**
     * setDeviceOrientation - 设置当前设备方向
     * @platform 基础库 3.6.0+、iOS/Android App 6.0.0+
     */
    interface SetDeviceOrientationOptions {
        /** 设备方向（必填） */
        newValue: DeviceOrientation;
        /** 成功回调 */
        success?: () => void;
        /** 失败回调（返回错误码/错误信息） */
        fail?: () => void;
        /** 完成回调（成功/失败都执行） */
        complete?: () => void;
    }

    /**
     * restoreDeviceOrientation - 恢复当前设备方向（按 game.json 配置）
     * @platform 基础库通用
     */
    interface RestoreDeviceOrientationOptions {
        /** 成功回调 */
        success?: () => void;
        /** 失败回调（返回错误码/错误信息） */
        fail?: () => void;
        /** 完成回调（成功/失败都执行） */
        complete?: () => void;
    }

    // ------------------------------ 监听/取消监听回调类型 ------------------------------
    /**
     * onDeviceMotionChange - 监听设备方向变化的回调
     * @platform 基础库通用
     */
    type DeviceMotionChangeCallback = (res: DeviceMotionChangeResult) => void;
}