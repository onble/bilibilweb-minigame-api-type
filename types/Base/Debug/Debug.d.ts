declare namespace BilibilWebMinigame {
    /**
     * 调试模块配置项（debugModule 数组元素类型）
     * @platform 基础库 3.6.0+ 支持
     */
    interface DebugModule {
        /** 模块名称（如 'update'/'ad' 等） */
        name: string;
        /** 是否开启该模块调试，默认 false */
        enable?: boolean;
        /** 调试模式（不同模块支持的模式不同，如 update 支持 'success'/'fail'） */
        mode?: string;
    }

    /**
     * setEnableDebug 接口调用参数类型
     * @platform 基础库 2.4.0+（基本调试开关）、3.6.0+（广告模块调试），低版本需做兼容处理
     */
    interface SetEnableDebugOptions {
        /** 是否打开调试（必填） */
        enableDebug: boolean;
        /** 模块调试配置列表（3.6.0+ 支持） */
        debugModule?: DebugModule[];
        /** 接口调用成功的回调函数 */
        success?: () => void;
        /** 接口调用失败的回调函数 */
        fail?: (err?: any) => void;
        /** 接口调用结束的回调函数（成功/失败都会执行） */
        complete?: () => void;
    }

    /**
     * 日志管理器实例（由 bl.getLogManager 获取）
     * @platform 基础库 3.11.0+，低版本需做兼容处理
     * @description 本地最多保存 5M 日志，超过则删除旧日志；可通过 bl.createFeedbackButton 上传日志
     */
    interface LogManager {
        /**
         * 写 debug 日志
         * @param args 日志内容（可传任意多个），每次调用参数总大小不超过 100Kb
         */
        debug: (...args: any[]) => void;

        /**
         * 写 info 日志
         * @param args 日志内容（可传任意多个），每次调用参数总大小不超过 100Kb
         */
        info: (...args: any[]) => void;

        /**
         * 写 log 日志
         * @param args 日志内容（可传任意多个），每次调用参数总大小不超过 100Kb
         */
        log: (...args: any[]) => void;

        /**
         * 写 warn 日志
         * @param args 日志内容（可传任意多个），每次调用参数总大小不超过 100Kb
         */
        warn: (...args: any[]) => void;
    }
}