declare namespace BilibilWebMinigame {
    /**
     * onCheckForUpdate 回调参数类型
     * @platform 基础库 2.6.0+
     */
    interface OnCheckForUpdateCallbackResult {
        /** 是否有新版本 */
        hasUpdate: boolean;
    }

    /**
     * 更新调试模块配置（用于 setEnableDebug）
     * @platform 基础库 2.6.0+
     */
    interface UpdateDebugModule {
        /** 模块名称，固定为 'update' */
        name: 'update';
        /** 是否开启更新调试，默认 false */
        enable?: boolean;
        /** 调试模式，支持 'success'/'fail'，默认 'success' */
        mode?: 'success' | 'fail';
    }

    /**
     * setEnableDebug 接口参数类型
     * @platform 基础库 2.6.0+
     */
    interface SetEnableDebugOptions {
        /** 调试模块配置列表 */
        debugModule?: (UpdateDebugModule | Record<string, any>)[];
    }

    /**
     * 更新管理器对象（全局唯一）
     * @platform 基础库 2.6.0+，低版本需做兼容处理
     * @description 用于管理小游戏更新，通过 bl.getUpdateManager() 获取实例
     */
    interface UpdateManager {
        /**
         * 强制小游戏重启并使用新版本
         * @description 需在收到 onUpdateReady 回调后调用
         */
        applyUpdate(): void;

        /**
         * 监听向后台请求检查更新结果事件
         * @description 小游戏冷启动时自动检查更新，无需开发者主动触发
         * @param callback 检查更新结果的回调函数
         */
        onCheckForUpdate(
            callback: (res: OnCheckForUpdateCallbackResult) => void
        ): void;

        /**
         * 监听小游戏有版本更新事件
         * @description 客户端主动触发下载（无需开发者触发），下载成功后回调
         * @param callback 版本更新就绪的回调函数
         */
        onUpdateReady(callback: () => void): void;

        /**
         * 监听小游戏更新失败事件
         * @description 小游戏有新版本，客户端主动触发下载（无需开发者触发），下载失败后回调
         * @param callback 版本更新失败的回调函数
         */
        onUpdateFailed(callback: () => void): void;
    }
}