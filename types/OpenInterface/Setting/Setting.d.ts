declare namespace BilibilWebMinigame {
    // ------------------------------ 基础枚举/类型 ------------------------------
    /**
     * 授权设置项（仅包含文档明确的权限，可扩展）
     * @platform 基础库通用
     */
    interface AuthSetting {
        /** 是否授权用户信息（对应 bl.getUserInfo） */
        "scope.userInfo"?: boolean;
        /** 是否授权地理位置（对应 bl.getLocation） */
        "scope.userLocation"?: boolean;
        /** 是否授权保存到相册（对应 bl.saveImageToPhotosAlbum） */
        "scope.writePhotosAlbum"?: boolean;
        /** 其他已请求过的权限（预留扩展） */
        [scope: string]: boolean | undefined;
    }

    /**
     * 按钮类型枚举
     * @platform 基础库 2.3.0+
     */
    type OpenSettingButtonType = "text" | "image";

    // ------------------------------ 按钮样式类型 ------------------------------
    /**
     * 打开设置页面按钮样式配置
     * @platform 基础库 2.3.0+
     */
    interface OpenSettingButtonStyle {
        /** 左上角横坐标，默认 0 */
        left?: number;
        /** 左上角纵坐标，默认 0 */
        top?: number;
        /** 宽度，默认 0 */
        width?: number;
        /** 高度，默认 0 */
        height?: number;
        /** 文字颜色，默认 #000000 */
        color?: ColorValue;
        /** 背景颜色，默认透明 */
        backgroundColor?: ColorValue;
        /** 边框颜色，默认透明 */
        borderColor?: ColorValue;
        /** 边框宽度，默认 0 */
        borderWidth?: number;
        /** 边框圆角，默认 0 */
        borderRadius?: number;
        /** 文本水平对齐方式，默认 left */
        textAlign?: TextAlignType;
        /** 字号，默认 14 */
        fontSize?: number;
        /** 文本行高（iOS/Android 均无效） */
        lineHeight?: number;
    }

    // ------------------------------ openSetting/getSetting 相关类型 ------------------------------
    /**
     * openSetting/getSetting 成功回调结果
     * @platform 基础库通用
     */
    interface SettingSuccessResult {
        /** 用户授权结果（仅包含已请求过的权限） */
        authSetting: AuthSetting;
    }

    /**
     * openSetting - 调起小游戏设置界面接口参数
     * @platform 基础库通用
     * @description 设置界面仅显示已请求过的权限
     */
    interface OpenSettingOptions {
        /** 成功回调（返回用户授权设置） */
        success?: (res: SettingSuccessResult) => void;
        /** 失败回调（返回错误码/错误信息） */
        fail?: () => void;
        /** 完成回调（成功/失败都执行） */
        complete?: () => void;
    }

    /**
     * getSetting - 获取用户当前设置接口参数
     * @platform 基础库通用
     * @description 返回值仅包含已请求过的权限
     */
    interface GetSettingOptions {
        /** 成功回调（返回用户授权设置） */
        success?: (res: SettingSuccessResult) => void;
        /** 失败回调（返回错误码/错误信息） */
        fail?: () => void;
        /** 完成回调（成功/失败都执行） */
        complete?: () => void;
    }

    // ------------------------------ 创建设置按钮相关类型 ------------------------------
    /**
     * createOpenSettingButton - 创建打开设置页面按钮接口参数
     * @platform 基础库 2.3.0+（低版本需兼容）
     */
    interface CreateOpenSettingButtonOptions {
        /** 按钮类型，默认 text */
        type?: OpenSettingButtonType;
        /** 按钮文本（仅 type=text 有效），默认 "打开设置" */
        text?: string;
        /** 背景图片（仅 type=image 有效），默认 '' */
        image?: string;
        /** 按钮样式，默认 {} */
        style?: OpenSettingButtonStyle;
    }

    /**
     * 打开设置页面按钮实例
     * @platform 基础库 2.3.0+
     */
    interface OpenSettingButton {
        /** 按钮类型 */
        type: OpenSettingButtonType;
        /** 按钮文本（仅 type=text 有效） */
        text: string;
        /** 按钮背景图片（仅 type=image 有效） */
        image: string;
        /** 按钮样式 */
        style: OpenSettingButtonStyle;

        /** 显示按钮 */
        show: () => void;
        /** 隐藏按钮 */
        hide: () => void;
        /** 销毁按钮 */
        destroy: () => void;
        /** 监听按钮点击事件 */
        onTap: (callback: () => void) => void;
        /** 取消监听按钮点击事件 */
        offTap: (callback?: () => void) => void;
    }
}