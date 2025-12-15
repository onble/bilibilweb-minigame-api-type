declare namespace BilibilWebMinigame {
    // ------------------------------ 新增通用类型 ------------------------------
    /**
     * 罗盘数据变化事件回调参数
     * @platform 基础库通用
     * @description 监听频率固定为 5 次/秒
     */
    interface CompassChangeResult {
        /** 面对的方向度数（角度值） */
        direction: number;
        /** 精度（支持数字/字符串类型） */
        accuracy: number | string;
    }

    // ------------------------------ 接口参数类型 ------------------------------
    /**
     * startCompass - 开始监听罗盘数据
     * @platform 基础库通用
     */
    interface StartCompassOptions {
        /** 成功回调 */
        success?: () => void;
        /** 失败回调（返回错误码/错误信息） */
        fail?: () => void;
        /** 完成回调（成功/失败都执行） */
        complete?: () => void;
    }

    /**
     * stopCompass - 停止监听罗盘数据
     * @platform 基础库通用
     */
    interface StopCompassOptions {
        /** 成功回调 */
        success?: () => void;
        /** 失败回调（返回错误码/错误信息） */
        fail?: () => void;
        /** 完成回调（成功/失败都执行） */
        complete?: () => void;
    }

    // ------------------------------ 监听回调类型 ------------------------------
    /**
     * onCompassChange - 监听罗盘数据变化的回调
     * @platform 基础库通用
     * @description 回调频率固定为 5 次/秒
     */
    type CompassChangeCallback = (res: CompassChangeResult) => void;

}