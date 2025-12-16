declare namespace BilibilWebMinigame {
    // ------------------------------ 基础枚举/类型 ------------------------------
    /**
     * 意见反馈按钮类型枚举
     * @platform 基础库 2.3.0+
     */
    enum FeedbackButtonType {
        /** 可设置背景色和文本的按钮 */
        TEXT = "text",
        /** 仅可设置背景贴图的按钮（贴图拉伸至按钮宽高） */
        IMAGE = "image",
    }


    // ------------------------------ 按钮样式类型 ------------------------------
    /**
     * 意见反馈按钮样式配置
     * @platform 基础库 2.3.0+
     * @description lineHeight 在 iOS/Android 均不起作用
     */
    interface FeedbackButtonStyle {
        /** 左上角横坐标，默认 0 */
        left?: number;
        /** 左上角纵坐标，默认 0 */
        top?: number;
        /** 宽度，默认 0 */
        width?: number;
        /** 高度，默认 0 */
        height?: number;
        /** 文字颜色，默认 #000000（支持 hex/预设颜色） */
        color?: ColorValue;
        /** 背景颜色，默认透明（支持 hex/预设颜色） */
        backgroundColor?: ColorValue;
        /** 边框颜色，默认透明（支持 hex/预设颜色） */
        borderColor?: ColorValue;
        /** 边框宽度，默认 0 */
        borderWidth?: number;
        /** 边框圆角，默认 0 */
        borderRadius?: number;
        /** 文本水平对齐方式，默认 left */
        textAlign?: TextAlignType;
        /** 字号，默认 14 */
        fontSize?: number;
        /** 文本行高（iOS/Android 均不起作用） */
        lineHeight?: number;
    }

    // ------------------------------ 按钮实例类型 ------------------------------
    /**
     * 意见反馈按钮实例
     * @platform 基础库 2.3.0+
     */
    interface FeedbackButton {
        /** 按钮类型（text/image） */
        type: FeedbackButtonType;
        /** 按钮文本（仅 type=text 时有效） */
        text: string;
        /** 按钮背景图片（仅 type=image 时有效） */
        image: string;
        /** 按钮样式配置 */
        style: FeedbackButtonStyle;

        /**
         * 显示意见反馈按钮
         */
        show: () => void;

        /**
         * 隐藏意见反馈按钮
         */
        hide: () => void;

        /**
         * 销毁意见反馈按钮
         */
        destroy: () => void;

        /**
         * 监听意见反馈按钮的点击事件
         * @param callback 点击回调函数
         */
        onTap: (callback: () => void) => void;

        /**
         * 取消监听意见反馈按钮的点击事件
         * @param callback 要取消的回调函数（不传则取消所有）
         */
        offTap: (callback?: () => void) => void;
    }

    // ------------------------------ 接口参数类型 ------------------------------
    /**
     * createFeedbackButton - 创建意见反馈按钮接口参数
     * @platform 基础库 2.3.0+（低版本需兼容）
     */
    interface CreateFeedbackButtonOptions {
        /** 按钮类型，默认 text */
        type?: FeedbackButtonType;
        /** 按钮文本（仅 type=text 时有效），默认 "获取用户信息" */
        text?: string;
        /** 按钮背景图片（仅 type=image 时有效），默认 "" */
        image?: string;
        /** 按钮样式配置，默认 {} */
        style?: FeedbackButtonStyle;
        /** 语言类型（文档提及的可选参数） */
        lang?: LangType;
    }
}