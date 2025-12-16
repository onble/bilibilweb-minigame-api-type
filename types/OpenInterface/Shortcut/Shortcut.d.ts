declare namespace BilibilWebMinigame {
    // ------------------------------ addShortcut 接口类型 ------------------------------
    /**
     * addShortcut - 添加桌面快捷方式成功回调结果
     * @platform 基础库 3.99.4+
     */
    interface AddShortcutSuccessResult {
        /** 成功消息：固定 'addShortcut:ok' */
        errMsg: "addShortcut:ok";
    }

    /**
     * addShortcut - 添加桌面快捷方式失败回调结果
     * @platform 基础库 3.99.4+
     */
    interface AddShortcutFailResult {
        /** 错误信息：格式为 "addShortcut:fail " + 错误详情 */
        errMsg: string;
    }

    /**
     * addShortcut - 添加桌面快捷方式接口参数
     * @platform 基础库 3.99.4+（低版本需兼容）
     * @description 1. 可将小游戏快捷方式添加到手机桌面；2. 桌面快捷方式礼包需每日可领（同签到礼包）
     */
    interface AddShortcutOptions {
        /** 接口调用成功的回调函数（可选） */
        success?: (res: AddShortcutSuccessResult) => void;
        /** 接口调用失败的回调函数（可选） */
        fail?: (res: AddShortcutFailResult) => void;
        /** 接口调用结束的回调函数（可选） */
        complete?: () => void;
    }

    // ------------------------------ checkShortcut 接口类型 ------------------------------
    /**
     * checkShortcut - 快捷方式状态结构
     * @platform 基础库 3.99.4+、仅 Android 支持
     */
    interface ShortcutStatus {
        /** 是否已添加桌面快捷方式 */
        exist: boolean;
    }

    /**
     * checkShortcut - 检查桌面快捷方式成功回调结果
     * @platform 基础库 3.99.4+、仅 Android 支持
     */
    interface CheckShortcutSuccessResult {
        /** 桌面快捷方式状态 */
        status: ShortcutStatus;
        /** 成功消息：固定 "checkShortcut:ok" */
        errMsg: "checkShortcut:ok";
    }

    /**
     * checkShortcut - 检查桌面快捷方式失败回调结果
     * @platform 基础库 3.99.4+、仅 Android 支持
     */
    interface CheckShortcutFailResult {
        /** 错误信息：格式为 "checkShortcut:fail " + 错误详情 */
        errMsg: string;
    }

    /**
     * checkShortcut - 检查桌面快捷方式接口参数
     * @platform 基础库 3.99.4+（低版本需兼容）、仅 Android 支持
     * @description 1. 检查小游戏快捷方式是否已添加到桌面；2. 桌面快捷方式礼包需每日可领（同签到礼包）
     */
    interface CheckShortcutOptions {
        /** 接口调用成功的回调函数（可选） */
        success?: (res: CheckShortcutSuccessResult) => void;
        /** 接口调用失败的回调函数（可选） */
        fail?: (res: CheckShortcutFailResult) => void;
        /** 接口调用结束的回调函数（可选） */
        complete?: () => void;
    }
}