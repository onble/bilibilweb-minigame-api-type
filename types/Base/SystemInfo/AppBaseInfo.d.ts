declare namespace BilibilWebMinigame {
    /**
     * 当前小程序运行的宿主环境信息
     */
    interface Host {
        /**
         * 宿主应用类型
         * 合法值：
         * 0 - 哔哩哔哩
         * 1 - 高能通
         * 2 - 哔哩哔哩漫画
         */
        appType: 0 | 1 | 2;
        /** 宿主应用名称 */
        appName: string;
    }

    /**
     * getAppBaseInfo 接口返回值类型
     */
    interface GetAppBaseInfoResult {
        /** 客户端基础库版本 */
        SDKVersion: string;
        /** 是否已打开调试（可通过右上角菜单或 bl.setEnableDebug 打开） */
        enableDebug: boolean;
        /** 当前小程序运行的宿主环境信息 */
        host: Host;
        /** 宿主应用设置的语言 */
        language: string;
        /** 宿主应用版本号 */
        version: string;
        /**
         * 系统当前主题（light/dark）
         * 备注：全局配置 "darkmode":true 时才能获取，否则无该字段；不支持小游戏
         */
        theme?: "light" | "dark";
    }
}