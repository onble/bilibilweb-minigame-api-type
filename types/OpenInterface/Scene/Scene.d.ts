declare namespace BilibilWebMinigame {
    // ------------------------------ 核心枚举/类型 ------------------------------
    /**
     * 小游戏入口场景枚举（目前仅支持侧边栏）
     * @platform 基础库 3.99.5+
     */
    enum GameSceneType {
        /** 侧边栏场景（唯一支持的场景） */
        SIDEBAR = "sidebar",
    }

    /**
     * 场景接口错误码枚举
     * @platform 基础库 3.99.5+
     */
    enum GameSceneErrCode {
        /** 参数校验错误（类型/拼写错误） */
        PARAM_VALIDATE_ERROR = 20001,
        /** 入口场景不可达 */
        SCENE_INACCESSIBLE = 21101,
    }

    /**
     * 场景接口错误码与提示消息映射表（文档明确）
     */
    type GameSceneErrMsgMap = {
        [key in GameSceneErrCode]: string;
    };

    // ------------------------------ checkScene 接口类型 ------------------------------
    /**
     * checkScene 成功回调结果
     * @platform 基础库 3.99.5+
     */
    interface CheckSceneSuccessResult {
        /** 入口场景是否存在 */
        isExist: boolean;
        /** 成功消息：固定 'checkScene:ok' */
        errMsg: "checkScene:ok";
    }

    /**
     * checkScene 失败回调结果
     * @platform 基础库 3.99.5+
     */
    interface CheckSceneFailResult {
        /** 错误信息 */
        errMsg: string;
        /** 错误码（对应 GameSceneErrCode） */
        errCode: GameSceneErrCode | number;
    }

    /**
     * checkScene - 检测入口场景是否支持接口参数
     * @platform 基础库 3.99.5+（低版本需兼容）
     */
    interface CheckSceneOptions {
        /** 要检测的入口场景（默认 sidebar，仅支持该值） */
        scene?: GameSceneType;
        /** 接口调用成功的回调函数（可选） */
        success?: (res: CheckSceneSuccessResult) => void;
        /** 接口调用失败的回调函数（可选） */
        fail?: (res: CheckSceneFailResult) => void;
        /** 接口调用结束的回调函数（可选） */
        complete?: () => void;
    }

    // ------------------------------ navigateToScene 接口类型 ------------------------------
    /**
     * navigateToScene 成功回调结果
     * @platform 基础库 3.99.5+
     */
    interface NavigateToSceneSuccessResult {
        /** 成功消息：固定 'navigateToScene:ok' */
        errMsg: "navigateToScene:ok";
    }

    /**
     * navigateToScene 失败回调结果
     * @platform 基础库 3.99.5+
     */
    interface NavigateToSceneFailResult {
        /** 错误信息 */
        errMsg: string;
        /** 错误码（对应 GameSceneErrCode） */
        errCode: GameSceneErrCode | number;
    }

    /**
     * navigateToScene - 跳转入口场景接口参数
     * @platform 基础库 3.99.5+（低版本需兼容）
     * @example
     * bl.navigateToScene({
     *     scene: "sidebar",
     *     success: (res) => {
     *         console.log("navigate to scene success");
     *         // 跳转成功回调逻辑
     *     },
     *     fail: (res) => {
     *         console.log("navigate to scene fail: ", res);
     *         // 跳转失败回调逻辑
     *     },
     * });
     */
    interface NavigateToSceneOptions {
        /** 要跳转的入口场景（默认 sidebar，仅支持该值） */
        scene?: GameSceneType;
        /** 接口调用成功的回调函数（可选） */
        success?: (res: NavigateToSceneSuccessResult) => void;
        /** 接口调用失败的回调函数（可选） */
        fail?: (res: NavigateToSceneFailResult) => void;
        /** 接口调用结束的回调函数（可选） */
        complete?: () => void;
    }

}