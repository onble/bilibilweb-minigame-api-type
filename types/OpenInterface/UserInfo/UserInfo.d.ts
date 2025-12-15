declare namespace BilibilWebMinigame {
    // ------------------------------ 基础枚举类型 ------------------------------
    /**
     * 语言枚举（通用）
     * @platform 基础库通用
     */
    type LangType = "en" | "zh_CN" | "zh_TW";

    /**
     * 用户性别枚举
     * @platform 基础库通用
     */
    enum Gender {
        UNKNOWN = 0,
        MALE = 1,
        FEMALE = 2,
    }

    /**
     * 用户信息按钮类型枚举
     * @platform 基础库 2.3.0+
     */
    type UserInfoButtonType = "text" | "image";


    /**
     * 实名认证状态枚举
     * @platform Android、基础库 3.99.6+
     */
    type RealNameAuthState = "complete" | "anonymous" | "cancel";

    // ------------------------------ 用户信息相关类型 ------------------------------
    /**
     * 用户信息对象
     * @platform 基础库通用
     */
    interface UserInfo {
        /** 用户昵称 */
        nickName: string;
        /** 用户头像 URL（最后一位数值为尺寸：0/46/64/96/132） */
        avatarUrl: string;
        /** 用户性别 */
        gender: Gender;
        /** 用户所在国家 */
        country: string;
        /** 用户所在省份 */
        province: string;
        /** 用户所在城市 */
        city: string;
        /** 显示地址所用的语言 */
        language: LangType;
    }

    /**
     * getUserInfo 成功回调结果
     * @platform 基础库通用
     */
    interface GetUserInfoSuccessResult {
        /** 用户信息对象（无敏感信息） */
        userInfo: UserInfo;
        /** 无敏感信息的原始数据字符串（用于签名） */
        rawData: string;
        /** 签名（sha1(rawData + sessionkey)） */
        signature: string;
        /** 
         * 完整用户信息的加密数据（withCredentials=true 时返回）
         * @example
         * {
         *     "openId": "OPENID",
         *     "nickName": "NICKNAME",
         *     "gender": "GENDER",
         *     "city": "CITY",
         *     "province": "PROVINCE",
         *     "country": "COUNTRY",
         *     "avatarUrl": "AVATARURL",
         *     "unionId": "UNIONID",
         *     "watermark": {
         *         "appId": "APPID",
         *         "timestamp": "TIMESTAMP"
         *     },
         *     "vip": {// vip字段非必返回，如果需要，请与运营同学联系
         *         "active": true //true:用户有大会员，false:用户无大会员
         *     }
         * }
         */
        encryptedData?: string;
        /** 加密算法初始向量（withCredentials=true 时返回） */
        iv?: string;
    }

    /**
     * getUserInfo 接口参数
     * @platform 基础库通用
     */
    interface GetUserInfoOptions {
        /** 是否带登录态（true 需已登录且未过期） */
        withCredentials?: boolean;
        /** 显示用户信息的语言，默认 zh_CN */
        lang?: LangType;
        /** 成功回调 */
        success?: (res: GetUserInfoSuccessResult) => void;
        /** 失败回调（返回错误码/错误信息） */
        fail?: () => void;
        /** 完成回调（成功/失败都执行） */
        complete?: () => void;
    }

    // ------------------------------ 用户信息按钮相关类型 ------------------------------
    /**
     * 用户信息按钮样式配置
     * @platform 基础库 2.3.0+
     */
    interface UserInfoButtonStyle {
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

    /**
     * createUserInfoButton 接口参数
     * @platform 基础库 2.3.0+
     */
    interface CreateUserInfoButtonOptions {
        /** 按钮类型，默认 text */
        type?: UserInfoButtonType;
        /** 按钮文本（仅 type=text 有效），默认 "获取用户信息" */
        text?: string;
        /** 背景图片（仅 type=image 有效），默认 '' */
        image?: string;
        /** 按钮样式，默认 {} */
        style?: UserInfoButtonStyle;
        /** 是否带登录态，默认 false */
        withCredentials?: boolean;
        /** 描述用户信息的语言，默认 en */
        lang?: LangType;
    }

    /**
     * 用户信息按钮点击回调结果
     * @platform 基础库 2.3.0+
     */
    type UserInfoButtonTapResult = GetUserInfoSuccessResult;

    /**
     * 用户信息按钮实例
     * @platform 基础库 2.3.0+
     */
    interface UserInfoButton {
        /** 按钮类型 */
        type: UserInfoButtonType;
        /** 按钮文本（仅 type=text 有效） */
        text: string;
        /** 按钮背景图片（仅 type=image 有效） */
        image: string;
        /** 按钮样式 */
        style: UserInfoButtonStyle;

        /** 显示按钮 */
        show: () => void;
        /** 隐藏按钮 */
        hide: () => void;
        /** 销毁按钮 */
        destroy: () => void;
        /** 监听按钮点击事件 */
        onTap: (callback: (res: UserInfoButtonTapResult) => void) => void;
        /** 取消监听按钮点击事件 */
        offTap: (callback?: (res: UserInfoButtonTapResult) => void) => void;
    }

    // ------------------------------ 实名认证相关类型 ------------------------------
    /**
     * 实名认证回调参数
     * @platform Android、基础库 3.99.6+
     */
    interface RealNameAuthCallbackResult {
        /** 实名认证状态 */
        state: RealNameAuthState;
    }

    /**
     * 实名认证回调返回值（弹窗配置）
     * @platform Android、基础库 3.99.6+
     */
    interface RealNameAuthCallbackReturn {
        /** 提示标题（必填） */
        title: string;
        /** 提示内容（必填） */
        content: string;
        /** 礼包图片 URL（可选，支持 GIF） */
        giftImgUrl?: string;
        /** 取消按钮文字，默认 "取消"，最多 5 字符 */
        cancelText?: string;
        /** 确认按钮文字，默认 "确定"，最多 5 字符 */
        confirmText?: string;
    }

    /**
     * 实名认证监听回调类型
     * @platform Android、基础库 3.99.6+
     */
    type RealNameAuthCallback = (
        res: RealNameAuthCallbackResult
    ) => RealNameAuthCallbackReturn;
}