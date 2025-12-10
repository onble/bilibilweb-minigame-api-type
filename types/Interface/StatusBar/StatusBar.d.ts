declare namespace BilibilWebMinigame {
    /**
     * setStatusBarStyle 接口的状态栏样式枚举
     */
    type StatusBarStyle = "white" | "black";

    /**
     * setStatusBarStyle 接口调用参数类型
     * @description 用于配置状态栏样式及接口回调
     */
    interface SetStatusBarStyleOptions {
        /** 状态栏样式风格（必填），有效值：white(白色)/black(黑色) */
        style: StatusBarStyle;
        /** 接口调用成功的回调函数 */
        success?: () => void;
        /** 接口调用失败的回调函数 */
        fail?: (err?: any) => void;
        /** 接口调用结束的回调函数（成功/失败都会执行） */
        complete?: () => void;
    }
}