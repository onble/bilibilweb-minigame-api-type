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

        //#region 生命周期
        /**
         * 取消监听小游戏回到前台的事件
         * @param callback 要取消的、已绑定的小游戏前台事件回调函数
         */
        offShow: (callback: (res: OnShowCallbackResult) => void) => void;

        /**
         * 监听小游戏回到前台的事件
         * @param callback 小游戏回到前台时触发的回调函数
         */
        onShow: (callback: (res: OnShowCallbackResult) => void) => void;

        /**
         * 取消监听小游戏隐藏到后台的事件
         * @param callback 要取消的、已绑定的小游戏后台事件回调函数
         */
        offHide: (callback: () => void) => void;

        /**
         * 监听小游戏隐藏到后台的事件
         * @description 锁屏、按 HOME 键退到桌面等操作会触发此事件
         * @param callback 小游戏隐藏到后台时触发的回调函数
         */
        onHide: (callback: () => void) => void;
        /**
         * 退出当前小游戏
         * @param object 接口调用配置项，包含成功/失败/完成回调
         */
        exitMiniProgram: (object: ExitMiniProgramOptions) => void;

        /**
         * 获取本次小游戏启动时的参数（异步版本）
         * @description 冷启动返回值与回调参数一致；热启动返回值与 App.onShow 一致
         * @param options 接口调用配置项，包含成功/失败回调
         */
        getLaunchOptions: (options: GetLaunchOptionsOptions) => void;

        /**
         * 获取本次小游戏启动时的参数（同步版本）
         * @description 冷启动返回值与自身返回值一致；热启动返回值与 App.onShow 一致
         * @returns 启动参数信息
         */
        getLaunchOptionsSync: () => LaunchOptionsResult;

        /**
         * 获取小游戏打开的参数（包括冷启动和热启动）
         * @returns 启动参数信息
         */
        getEnterOptionsSync: () => LaunchOptionsResult;
        //#endregion 生命周期

        //#region 应用级事件
        /**
         * 取消监听全局错误事件
         * @param callback 要取消的、已绑定的全局错误事件回调函数
         */
        offError: (callback: (res: OnErrorCallbackResult) => void) => void;

        /**
         * 监听全局错误事件
         * @param callback 全局错误事件触发时的回调函数，包含错误信息和调用堆栈
         */
        onError: (callback: (res: OnErrorCallbackResult) => void) => void;

        /**
         * 取消监听音频中断结束事件
         * @param callback 要取消的、已绑定的音频中断结束事件回调函数
         */
        offAudioInterruptionEnd: (callback: () => void) => void;

        /**
         * 监听音频中断结束事件
         * @description 在收到 onAudioInterruptionBegin 事件后，小游戏内所有音频会暂停；收到此事件后才可再次播放成功
         * @param callback 音频中断结束事件触发时的回调函数
         */
        onAudioInterruptionEnd: (callback: () => void) => void;

        /**
         * 取消监听音频因系统占用被中断开始事件
         * @param callback 要取消的、已绑定的音频中断开始事件回调函数
         */
        offAudioInterruptionBegin: (callback: () => void) => void;

        /**
         * 监听音频因系统占用被中断开始事件
         * @description 闹钟、电话、FaceTime 通话等场景会触发此事件；触发后小游戏内所有音频会暂停
         * @param callback 音频中断开始事件触发时的回调函数
         */
        onAudioInterruptionBegin: (callback: () => void) => void;
        //#endregion 应用级事件

        //#endregion 基础
    }
}