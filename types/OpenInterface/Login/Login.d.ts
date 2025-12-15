declare namespace BilibilWebMinigame {
    // ------------------------------ 登录接口相关类型 ------------------------------
    /**
     * login 成功回调结果
     * @platform 基础库通用
     */
    interface LoginSuccessResult {
        /** 用户登录凭证（有效期5分钟），用于换取 openid/session_key */
        code: string;
    }

    /**
     * login - 调用接口获取登录凭证参数
     * @platform 基础库通用
     * @description 获取 code 后需在服务端调用 code2Session 换取 openid/session_key
     */
    interface LoginOptions {
        /** 成功回调（返回登录凭证 code） */
        success?: (res: LoginSuccessResult) => void;
        /** 失败回调（返回错误码/错误信息） */
        fail?: () => void;
        /** 完成回调（成功/失败都执行） */
        complete?: () => void;
    }

    /**
     * checkSession - 检查登录态是否过期接口参数
     * @platform 基础库通用
     * @description 成功=session_key 未过期；失败=session_key 已过期，需重新登录
     */
    interface CheckSessionOptions {
        /** 成功回调（session_key 未过期） */
        success?: () => void;
        /** 失败回调（session_key 已过期，需重新登录） */
        fail?: () => void;
        /** 完成回调（成功/失败都执行） */
        complete?: () => void;
    }
}