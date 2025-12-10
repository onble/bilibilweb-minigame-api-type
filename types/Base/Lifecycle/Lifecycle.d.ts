declare namespace BilibilWebMinigame {
    /**
     * onShow 回调中 referrerInfo 字段的结构类型
     * @description 仅当场景为由从另一个小游戏打开时返回此字段
     */
    interface ReferrerInfo {
        /** 来源小游戏的 appId */
        appId: string;
        /** 来源小游戏的 vAppId */
        vAppId: string;
        /** 来源小游戏传过来的数据 */
        extraData: Record<string, any>;
    }

    /**
     * onShow 回调参数类型
     */
    interface OnShowCallbackResult {
        /** 启动小游戏的查询参数 */
        query: Record<string, any>;
        /** 来源小游戏信息（仅跨小游戏打开时存在） */
        referrerInfo?: ReferrerInfo;
        /**
         * 启动小游戏的场景值
         * @description 合法值见「场景值介绍」文档，可在 bl.getLaunchOptionsSync 和 bl.onShow 中获取
         * 示例值：10001（我的-小游戏中心）、10002（桌面快捷入口）、10003（分享渠道）、021036（侧边栏）
         */
        scene: string;
    }

    /**
     * exitMiniProgram 接口调用参数类型
     * @description 用于配置退出小游戏接口的回调函数
     */
    interface ExitMiniProgramOptions {
        /** 接口调用成功的回调函数 */
        success?: () => void;
        /** 接口调用失败的回调函数 */
        fail?: (err?: any) => void;
        /** 接口调用结束的回调函数（成功/失败都会执行） */
        complete?: () => void;
    }

    /**
     * 小游戏运行环境枚举（envVersion 合法值）
     */
    type EnvVersion = "" | "dev" | "predev" | "precheck";

    /**
     * 启动参数中的来源信息结构（referrerInfo）
     */
    interface LaunchOptionsReferrerInfo {
        /** 来源小程序/小游戏的 appId */
        appId: string;
        /**
         * 来源小程序的虚拟ID
         * @description 仅小程序类型返回该字段，可关联Up主信息，对应指定Up主
         */
        vappId?: string;
        /** 来源小程序传过来的数据 */
        extraData: Record<string, any>;
    }

    /**
     * getLaunchOptions/getLaunchOptionsSync/getEnterOptionsSync 返回/回调的核心参数类型
     */
    interface LaunchOptionsResult {
        /** 启动小游戏的 query 参数 */
        query: Record<string, any>;
        /**
         * 小游戏所在环境
         * @description 空值表示线上环境；dev=开发调试版、predev=开发预览版、precheck=审核预览版
         */
        envVersion: EnvVersion;
        /**
         * 来源信息
         * @description 从另一个小程序/小游戏进入时返回，否则返回空对象
         */
        referrerInfo: LaunchOptionsReferrerInfo | Record<string, never>;
        /**
         * 启动小游戏的场景值
         * @description 合法值见「场景值介绍」文档
         */
        scene: string;
    }

    /**
     * getLaunchOptions 接口调用参数类型
     */
    interface GetLaunchOptionsOptions {
        /**
         * 接口调用成功的回调函数
         * @param res 启动参数信息
         */
        success?: (res: LaunchOptionsResult) => void;
        /** 接口调用失败的回调函数 */
        fail?: (err?: any) => void;
    }
}