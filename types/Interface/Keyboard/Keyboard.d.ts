declare namespace BilibilWebMinigame {
    /**
     * showKeyboard 接口中 confirmType 的合法值（影响键盘右下角确认按钮文本）
     */
    type KeyboardConfirmType = "done" | "next" | "search" | "go" | "send";

    /**
     * onKeyboardComplete/onKeyboardConfirm 回调参数类型
     */
    interface KeyboardCompleteConfirmResult {
        /** 键盘输入的当前值 */
        value: string;
    }

    /**
     * onKeyboardInput 回调参数类型（文档标注 value 为 Object 类型）
     */
    interface KeyboardInputResult {
        /** 键盘输入的当前值（文档标注为 Object 类型） */
        value: Record<string, any>;
    }

    /**
     * updateKeyboard 接口调用参数类型
     * @description 仅当键盘处于拉起状态时更新输入框内容才会生效
     */
    interface UpdateKeyboardOptions {
        /** 键盘输入框的当前值（必填） */
        value: string;
        /** 接口调用成功的回调函数 */
        success?: () => void;
        /** 接口调用失败的回调函数 */
        fail?: (err?: any) => void;
        /** 接口调用结束的回调函数（成功/失败都会执行） */
        complete?: () => void;
    }

    /**
     * hideKeyboard 接口调用参数类型
     */
    interface HideKeyboardOptions {
        /** 接口调用成功的回调函数 */
        success?: () => void;
        /** 接口调用失败的回调函数 */
        fail?: (err?: any) => void;
        /** 接口调用结束的回调函数（成功/失败都会执行） */
        complete?: () => void;
    }

    /**
     * showKeyboard 接口调用参数类型
     */
    interface ShowKeyboardOptions {
        /** 键盘输入框显示的默认值（必填） */
        defaultValue: string;
        /** 键盘中文本的最大长度（必填） */
        maxLength: number;
        /** 是否为多行输入（必填） */
        multiple: boolean;
        /** 点击完成时键盘是否收起（必填） */
        confirmHold: boolean;
        /** 键盘右下角 confirm 按钮的类型（仅影响按钮文本，必填） */
        confirmType: KeyboardConfirmType;
        /** 接口调用成功的回调函数 */
        success?: () => void;
        /** 接口调用失败的回调函数 */
        fail?: (err?: any) => void;
        /** 接口调用结束的回调函数（成功/失败都会执行） */
        complete?: () => void;
    }
}