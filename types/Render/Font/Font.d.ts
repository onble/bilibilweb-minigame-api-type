declare namespace BilibilWebMinigame {
    /**
     * getTextLineHeight 接口的字体样式枚举（iOS 不支持该配置）
     */
    type FontStyle = "normal" | "italic";

    /**
     * getTextLineHeight 接口的字重枚举
     */
    type FontWeight = "normal" | "bold";

    /**
     * getTextLineHeight 接口调用参数类型
     * @description 用于配置获取文本行高的字体样式、内容等参数
     */
    interface GetTextLineHeightOptions {
        /** 字体样式（iOS 不支持），默认 normal */
        fontStyle?: FontStyle;
        /** 字重，默认 normal */
        fontWeight?: FontWeight;
        /** 字号，默认 16 */
        fontSize?: number;
        /** 字体名称（必填） */
        fontFamily: string;
        /** 文本内容（必填） */
        text: string;
        /** 接口调用成功的回调函数 */
        success?: () => void;
        /** 接口调用失败的回调函数 */
        fail?: (err?: any) => void;
        /** 接口调用结束的回调函数（成功/失败都会执行） */
        complete?: () => void;
    }
}