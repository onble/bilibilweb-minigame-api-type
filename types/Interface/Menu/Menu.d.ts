declare namespace BilibilWebMinigame {
    /**
     * setMenuStyle 接口的菜单样式枚举
     */
    type MenuStyle = "light" | "dark";

    /**
     * setMenuStyle 接口调用参数类型
     * @description 动态设置右上角菜单的样式风格
     */
    interface SetMenuStyleOptions {
        /** 菜单样式风格（必填），有效值：light(浅色)/dark(深色) */
        style: MenuStyle;
        /** 接口调用成功的回调函数 */
        success?: () => void;
        /** 接口调用失败的回调函数 */
        fail?: (err?: any) => void;
        /** 接口调用结束的回调函数（成功/失败都会执行） */
        complete?: () => void;
    }

    /**
     * getMenuButtonBoundingClientRect 接口返回值类型
     * @description 菜单按钮（右上角胶囊按钮）的布局位置信息，坐标以屏幕左上角为原点
     */
    interface MenuButtonBoundingClientRect {
        /** 宽度，单位：px */
        width: number;
        /** 高度，单位：px */
        height: number;
        /** 上边界坐标，单位：px */
        top: number;
        /** 右边界坐标，单位：px */
        right: number;
        /** 下边界坐标，单位：px */
        bottom: number;
        /** 左边界坐标，单位：px */
        left: number;
    }
}