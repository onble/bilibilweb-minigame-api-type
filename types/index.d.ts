declare namespace BilibilWebMinigame {
    /**
    * 全局 bl 对象接口定义
    */
    interface BL {
        //#region 基础

        //#region 系统信息
        /**
         * 获取系统信息（异步版本）
         * @param options 接口调用配置项
         * @example
         * bl.getSystemInfo({
         *  success(res) {
         *      console.log(res.model)
         *      console.log(res.pixelRatio)
         *      console.log(res.windowWidth)
         *      console.log(res.windowHeight)
         *      console.log(res.language)
         *      console.log(res.version)
         *      console.log(res.platform)
         *   }
         * })
         */
        getSystemInfo: (options: GetSystemInfoOptions) => void;
        /**
         * 获取系统信息（同步版本）
         * @returns 系统信息详情
         * @throws 调用失败时抛出错误，需通过 try/catch 捕获
         * @example
         * try {
         *  const res = bl.getSystemInfoSync()
         *  console.log(res.model)
         *  console.log(res.pixelRatio)
         *  console.log(res.windowWidth)
         *  console.log(res.windowHeight)
         *  console.log(res.language)
         *  console.log(res.version)
         *  console.log(res.platform)
         *  } catch (e) {
         *  // Do something when catch error
         * }
         */
        getSystemInfoSync: () => GetSystemInfoSuccessResult;

        /**
        * 获取APP基础信息（同步版本）
        * @returns APP基础信息详情
        */
        getAppBaseInfo: () => GetAppBaseInfoResult;
        //#endregion 系统信息


        //#region 更新
        /**
         * 获取全局唯一的版本更新管理器
         * @platform 基础库 2.6.0+，低版本需做兼容处理
         * @returns 更新管理器实例
         */
        getUpdateManager: () => UpdateManager;

        /**
         * 设置调试开关（含更新模块调试）
         * @platform 基础库 2.6.0+
         * @param options 调试配置项
         */
        setEnableDebug?: (options: SetEnableDebugOptions) => void;

        //#endregion 更新

        //#endregion 基础
    }
}