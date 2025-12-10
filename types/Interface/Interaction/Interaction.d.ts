declare namespace BilibilWebMinigame {
    /**
     * showToast 接口的图标类型枚举
     */
    type ToastIcon = "success" | "loading" | "none";

    /**
     * showAddToDesktopGuide 接口的引导组件类型枚举
     * @platform 基础库 3.8.0+，iOS 暂不支持
     */
    type AddToDesktopGuideType = "bar" | "barautohide";

    /**
     * showAddToDesktopGuide 接口回调的错误码枚举
     */
    type AddToDesktopErrCode = 1 | 2 | 3 | -1 | -3 | -4;

    /**
     * showToast 接口调用参数类型
     * @description 显示消息提示框的配置项
     */
    interface ShowToastOptions {
        /** 提示内容（必填） */
        title: string;
        /** 图标类型，默认 success */
        icon?: ToastIcon;
        /** 自定义图标（仅支持包内资源，优先级高于 icon） */
        image?: string;
        /** 提示延迟时间，默认 1500ms */
        duration?: number;
        /** 是否显示透明蒙层防止触摸穿透，默认 false */
        mask?: boolean;
        /** 接口调用成功的回调函数 */
        success?: () => void;
        /** 接口调用失败的回调函数 */
        fail?: (err?: any) => void;
        /** 接口调用结束的回调函数（成功/失败都会执行） */
        complete?: () => void;
    }

    /**
     * hideToast/hideLoading 接口调用参数类型
     */
    interface HideToastLoadingOptions {
        /** 接口调用成功的回调函数 */
        success?: () => void;
        /** 接口调用失败的回调函数 */
        fail?: (err?: any) => void;
        /** 接口调用结束的回调函数（成功/失败都会执行） */
        complete?: () => void;
    }

    /**
     * showLoading 接口调用参数类型
     * @description 显示加载提示框的配置项（需主动调用 hideLoading 关闭）
     */
    interface ShowLoadingOptions {
        /** 提示内容（必填） */
        title: string;
        /** 是否显示透明蒙层防止触摸穿透，默认 false */
        mask?: boolean;
        /** 接口调用成功的回调函数 */
        success?: () => void;
        /** 接口调用失败的回调函数 */
        fail?: (err?: any) => void;
        /** 接口调用结束的回调函数（成功/失败都会执行） */
        complete?: () => void;
    }

    /**
     * showModal 接口成功回调参数类型
     */
    interface ShowModalSuccessResult {
        /** 是否点击确定按钮 */
        confirm: boolean;
        /** 是否点击取消按钮（Android 区分蒙层关闭/取消按钮） */
        cancel: boolean;
    }

    /**
     * showModal 接口调用参数类型
     * @description 显示模态对话框的配置项
     */
    interface ShowModalOptions {
        /** 提示标题（必填） */
        title: string;
        /** 提示内容（必填） */
        content: string;
        /** 是否显示取消按钮，默认 true */
        showCancel?: boolean;
        /** 取消按钮文字，最多 4 字符，默认 '取消' */
        cancelText?: string;
        /** 取消按钮文字颜色（16进制），默认 #000000 */
        cancelColor?: string;
        /** 确认按钮文字，最多 4 字符，默认 '确定' */
        confirmText?: string;
        /** 确认按钮文字颜色（16进制），默认 #576B95 */
        confirmColor?: string;
        /** 接口调用成功的回调函数 */
        success?: (res: ShowModalSuccessResult) => void;
        /** 接口调用失败的回调函数 */
        fail?: (err?: any) => void;
        /** 接口调用结束的回调函数（成功/失败都会执行） */
        complete?: () => void;
    }

    /**
     * showActionSheet 接口成功回调参数类型
     */
    interface ShowActionSheetSuccessResult {
        /** 用户点击的按钮序号（从上到下，从 0 开始） */
        tapIndex: number;
    }

    /**
     * showActionSheet 接口调用参数类型
     * @description 显示操作菜单的配置项
     */
    interface ShowActionSheetOptions {
        /** 按钮文字数组（必填，最大长度 6） */
        itemList: string[];
        /** 按钮文字颜色，默认 #212121 */
        itemColor?: string;
        /** 接口调用成功的回调函数 */
        success?: (res: ShowActionSheetSuccessResult) => void;
        /** 接口调用失败的回调函数 */
        fail?: (err?: any) => void;
        /** 接口调用结束的回调函数（成功/失败都会执行） */
        complete?: () => void;
    }

    /**
     * showAddToDesktopGuide 接口回调参数类型
     */
    interface AddToDesktopGuideCallbackResult {
        /** 错误码：1=已在桌面存在、2=添加成功、3=状态未知、-1=调起失败、-3=取消添加、-4=添加失败 */
        errCode: AddToDesktopErrCode;
        /** 错误/成功信息描述 */
        errMsg: string;
    }

    /**
     * showAddToDesktopGuide 接口调用参数类型
     * @platform 基础库 3.8.0+，iOS 暂不支持
     * @description 创建添加到桌面的引导按钮（单例对象）
     */
    interface ShowAddToDesktopGuideOptions {
        /** 引导组件类型，默认 bar，有效值：bar/barautohide */
        type?: AddToDesktopGuideType;
        /** 引导组件文案，默认 '一键添加到我的桌面' */
        content?: string;
        /** 添加成功的回调函数 */
        success?: (res: AddToDesktopGuideCallbackResult) => void;
        /** 添加失败的回调函数 */
        fail?: (res: AddToDesktopGuideCallbackResult) => void;
        /** 接口调用完成的回调函数（成功/失败都会执行） */
        complete?: () => void;
    }

}