declare namespace BilibilWebMinigame {
    // ------------------------------ 核心枚举/类型 ------------------------------
    /**
     * 小游戏环境版本枚举
     * @platform 基础库通用
     */
    enum MiniProgramEnvVersion {
        /** 线上正式版本（空字符串） */
        RELEASE = "",
        /** 开发调试版本（对应 IDE 本地调试） */
        DEV = "dev",
        /** 开发预览版本（上传至开发者后台的开发预览） */
        PREDEV = "predev",
        /** 审核预览版本（提交审核的版本） */
        PRECHECK = "precheck",
    }

    /**
     * 小游戏账号信息结构
     * @platform 基础库通用
     */
    interface MiniProgramAccountInfo {
        /** 小游戏 appId */
        appId: string;
        /** 小游戏环境版本（对应 MiniProgramEnvVersion） */
        envVersion: MiniProgramEnvVersion;
    }

    // ------------------------------ 异步接口参数/回调类型 ------------------------------
    /**
     * getAccountInfo 成功回调结果
     * @platform 基础库通用
     */
    interface GetAccountInfoSuccessResult {
        /** 小游戏账号信息 */
        miniProgram: MiniProgramAccountInfo;
    }

    /**
     * getAccountInfo - 获取当前帐号信息（异步接口）参数
     * @platform 基础库通用
     */
    interface GetAccountInfoOptions {
        /** 接口调用成功的回调函数（可选） */
        success?: (res: GetAccountInfoSuccessResult) => void;
        /** 接口调用失败的回调函数（可选） */
        fail?: (res: BluetoothErrorResult) => void;
        /** 接口调用结束的回调函数（可选） */
        complete?: () => void;
    }

    /**
     * getAccountInfoSync - 获取当前帐号信息（同步接口）返回值
     * @platform 基础库通用
     */
    type GetAccountInfoSyncResult = GetAccountInfoSuccessResult;
}