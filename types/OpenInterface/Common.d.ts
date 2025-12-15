declare namespace BilibilWebMinigame {
    // ------------------------------ 基础枚举类型 ------------------------------
    /**
     * 文本对齐方式枚举
     * @platform 基础库通用
     */
    type TextAlignType = "left" | "center" | "right";

    /**
     * 颜色值类型（支持 hex/预设值）
     * @platform 基础库通用
     */
    type ColorValue =
        | string // hex 颜色码（如 #000000）
        | "white"
        | "black"
        | "red"
        | "green"
        | "yellow"
        | "lightgray"
        | "gray"
        | "darkgray"
        | "blue"
        | "orange"
        | "purple"
        | "cyan"
        | "magenta"
        | "brown"
        | "clear";

}