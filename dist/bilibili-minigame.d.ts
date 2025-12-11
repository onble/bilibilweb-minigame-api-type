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

        //#region 触摸事件
        /**
         * 取消监听触点失效事件
         * @param callback 要取消的、已绑定的触点失效事件回调函数
         */
        offTouchCancel: (
            callback: (res: TouchEventCallbackResult) => void,
        ) => void;

        /**
         * 监听触点失效事件
         * @param callback 触点失效事件触发时的回调函数
         */
        onTouchCancel: (
            callback: (res: TouchEventCallbackResult) => void,
        ) => void;

        /**
         * 监听触摸结束事件
         * @param callback 触摸结束事件触发时的回调函数
         */
        onTouchEnd: (callback: (res: TouchEventCallbackResult) => void) => void;

        /**
         * 取消监听触摸结束事件
         * @param callback 要取消的、已绑定的触摸结束事件回调函数
         */
        offTouchEnd: (
            callback: (res: TouchEventCallbackResult) => void,
        ) => void;

        /**
         * 取消监听触点移动事件
         * @param callback 要取消的、已绑定的触点移动事件回调函数
         */
        offTouchMove: (
            callback: (res: TouchEventCallbackResult) => void,
        ) => void;

        /**
         * 监听触点移动事件
         * @param callback 触点移动事件触发时的回调函数
         */
        onTouchMove: (
            callback: (res: TouchEventCallbackResult) => void,
        ) => void;

        /**
         * 取消监听开始触摸事件
         * @param callback 要取消的、已绑定的开始触摸事件回调函数
         */
        offTouchStart: (
            callback: (res: TouchEventCallbackResult) => void,
        ) => void;

        /**
         * 监听开始触摸事件
         * @param callback 开始触摸事件触发时的回调函数
         */
        onTouchStart: (
            callback: (res: TouchEventCallbackResult) => void,
        ) => void;
        //#endregion 触摸事件

        //#region 性能
        /**
         * 加快触发 JavaScript 引擎垃圾回收（GC）
         * @platform 基础库 3.12.0+，低版本需做兼容处理
         * @description GC 时机由 JavaScript 引擎控制，调用后不保证马上触发 GC
         */
        triggerGC: () => void;
        //#endregion 性能

        //#region 分包加载
        /**
         * 触发分包加载
         * @description 详细规则参考「分包加载」文档
         * @param options 分包加载配置项（所有核心回调均为必填）
         * @returns 加载分包任务实例，可用于监听加载进度
         */
        loadSubpackage: (options: LoadSubpackageOptions) => LoadSubpackageTask;
        //#endregion 分包加载

        //#region 定时器
        /**
         * 设定一个一次性定时器，定时到期后执行回调函数
         * @param callback 定时到期后要执行的回调函数
         * @param delay 延迟时间，单位为毫秒（ms），回调函数会在该延迟后执行
         * @returns 定时器编号，可传递给 clearTimeout 取消该定时器
         */
        setTimeout: (callback: () => void, delay: number) => number;

        /**
         * 取消由 setTimeout 设置的一次性定时器
         * @param timeoutID 要取消的定时器编号（由 setTimeout 返回）
         */
        clearTimeout: (timeoutID: number) => void;

        /**
         * 设定一个周期性定时器，按指定周期执行回调函数
         * @param callback 每个周期要执行的回调函数
         * @param delay 执行回调函数的时间间隔，单位为毫秒（ms）
         * @returns 定时器编号，可传递给 clearInterval 取消该定时器
         */
        setInterval: (callback: () => void, delay: number) => number;

        /**
         * 取消由 setInterval 设置的周期性定时器
         * @param intervalID 要取消的定时器编号（由 setInterval 返回）
         */
        clearInterval: (intervalID: number) => void;

        //#endregion 定时器

        //#region 调试
        /**
         * 设置是否打开调试开关（对正式版也生效）
         * @platform 基础库 2.4.0+（基本调试开关）、3.6.0+（广告模块调试），低版本需做兼容处理
         * @param options 调试开关配置项
         * @example
         * // 打开调试
         * bl.setEnableDebug({
         *     enableDebug: true,
         * });
         *
         * // 关闭调试
         * bl.setEnableDebug({
         *     enableDebug: false,
         * });
         *
         * // 更新模块调试
         * bl.setEnableDebug({
         *     debugModule: [{
         *         name: 'update',
         *         enable: true, // 是否开启更新调试, 默认 false
         *         mode: 'success'// 调试模式，支持 'success'、'fail', 默认 'success'
         *     }]
         * });
         */
        setEnableDebug: (options: SetEnableDebugOptions) => void;

        /**
         * 获取日志管理器对象
         * @platform 基础库 3.11.0+，低版本需做兼容处理
         * @returns 日志管理器实例
         * @example
         * const logger = bl.getLogManager()
         * logger.log({str: 'hello world'}, 'basic log', 100, [1, 2, 3])
         * logger.info({str: 'hello world'}, 'info log', 100, [1, 2, 3])
         * logger.debug({str: 'hello world'}, 'debug log', 100, [1, 2, 3])
         * logger.warn({str: 'hello world'}, 'warn log', 100, [1, 2, 3])
         */
        getLogManager: () => LogManager;

        //#endregion 调试

        //#endregion 基础

        //#region 渲染
        //#region 画布
        /**
         * 创建画布对象
         * @description 首次调用创建屏幕画布，后续调用创建离屏画布
         * @returns 画布对象
         */
        createCanvas: () => Canvas;
        //#endregion 画布

        //#region 帧率

        /**
         * 修改小游戏渲染帧率
         * @platform 基础库 2.4.0+，低版本需做兼容处理
         * @description 默认渲染帧率为 60 帧/秒；修改后 requestAnimationFrame 的回调频率会同步改变
         * @param fps 目标帧率，有效范围 1 ~ 60
         */
        setPreferredFramesPerSecond: (fps: number) => void;

        //#endregion 帧率

        //#region 字体

        /**
         * 加载自定义字体文件
         * @param path 字体文件路径（支持代码包路径、blfile:// 协议的本地文件路径）
         * @returns 加载成功返回字体 family 值，加载失败返回 null
         */
        loadFont: (path: string) => string | null;

        /**
         * 获取一行文本的行高
         * @param options 文本样式、内容及回调配置项
         * @returns 文本的行高数值
         */
        getTextLineHeight: (options: GetTextLineHeightOptions) => number;

        //#endregion 字体

        //#region 图片
        /**
         * 创建一个图片对象
         * @returns 图片对象实例，可通过 src 设置图片地址，监听 onload/onerror 处理加载状态
         */
        createImage: () => Image;
        //#endregion 图片

        //#endregion 渲染

        //#region 界面

        //#region 交互

        /**
         * 显示消息提示框
         * @description 需与 bl.hideToast 配对使用；可与 bl.showLoading 同时显示
         * @param options 提示框配置项
         * @example
         * bl.showToast({
         *   title: '成功',
         *   icon: 'success',
         *   duration: 2000
         * })
         */
        showToast: (options: ShowToastOptions) => void;

        /**
         * 隐藏消息提示框
         * @param options 回调配置项
         */
        hideToast: (options?: HideToastLoadingOptions) => void;

        /**
         * 显示加载提示框（需主动调用 hideLoading 关闭）
         * @description 需与 bl.hideLoading 配对使用；与 bl.showToast 同时只能显示一个
         * @param options 加载提示框配置项
         * @example
         * bl.showLoading({
         *   title: '加载中',
         * })
         * setTimeout(function () {
         *   bl.hideLoading()
         * }, 2000)
         */
        showLoading: (options: ShowLoadingOptions) => void;

        /**
         * 隐藏加载提示框
         * @param options 回调配置项
         */
        hideLoading: (options?: HideToastLoadingOptions) => void;

        /**
         * 显示模态对话框
         * @param options 对话框配置项
         * @example
         * bl.showModal({
         *   title: '提示',
         *   content: '这是一个模态弹窗',
         *   success(res) {
         *     if (res.confirm) {
         *       console.log('用户点击确定')
         *     } else if (res.cancel) {
         *       console.log('用户点击取消')
         *     }
         *   }
         * })
         */
        showModal: (options: ShowModalOptions) => void;

        /**
         * 显示操作菜单
         * @param options 操作菜单配置项
         * @example
         * bl.showActionSheet({
         *   itemList: ['A', 'B', 'C'],
         *   success(res) {
         *     console.log(res.tapIndex)
         *   },
         *   fail(res) {
         *     console.log(res.errMsg)
         *   }
         * })
         */
        showActionSheet: (options: ShowActionSheetOptions) => void;

        /**
         * 创建添加到桌面的引导按钮（单例对象）
         * @platform 基础库 3.8.0+，iOS 暂不支持
         * @param options 引导组件配置项
         * @example 一直展示
         * ⽤户点击引导组件旁边的关闭按钮才能关闭，点击添加按钮可直接添加到我的桌⾯。
         * bl.showAddToDesktopGuide({
         *  type: 'bar',
         *  content: '⼀键添加到我的桌⾯',
         *  success: res => {
         *  console.log('添加成功：', res);
         *  },
         *  fail: err => {
         *  console.log('添加失败：', err);
         *  }
         * })
         * @example ⾃动消失
         * 引导组件 3s 后⾃动消失，点击添加按钮可直接添加到我的桌⾯。
         * bl.showAddToDesktopGuide({
         *  type: 'bar-autohide',
         *  content: '⼀键添加到我的桌⾯',
         *  success: res => {
         *  console.log('添加成功：', res);
         *  },
         *  fail: err => {
         *  console.log('添加失败：', err);
         *  }
         * })
         */
        showAddToDesktopGuide: (options: ShowAddToDesktopGuideOptions) => void;

        //#endregion 交互

        //#region 键盘

        /**
         * 取消监听键盘收起事件
         * @param callback 要取消的键盘收起事件回调函数
         */
        offKeyboardComplete: (
            callback: (res: KeyboardCompleteConfirmResult) => void,
        ) => void;

        /**
         * 监听键盘收起事件
         * @param callback 键盘收起时触发的回调函数，返回当前输入值
         */
        onKeyboardComplete: (
            callback: (res: KeyboardCompleteConfirmResult) => void,
        ) => void;

        /**
         * 取消监听用户点击键盘 Confirm 按钮的事件
         * @param callback 要取消的 Confirm 按钮事件回调函数
         */
        offKeyboardConfirm: (
            callback: (res: KeyboardCompleteConfirmResult) => void,
        ) => void;

        /**
         * 监听用户点击键盘 Confirm 按钮的事件
         * @param callback 点击 Confirm 按钮时触发的回调函数，返回当前输入值
         */
        onKeyboardConfirm: (
            callback: (res: KeyboardCompleteConfirmResult) => void,
        ) => void;

        /**
         * 取消监听键盘输入事件
         * @param callback 要取消的键盘输入事件回调函数
         */
        offKeyboardInput: (
            callback: (res: KeyboardInputResult) => void,
        ) => void;

        /**
         * 监听键盘输入事件
         * @param callback 键盘输入时触发的回调函数，返回当前输入值（文档标注为 Object 类型）
         */
        onKeyboardInput: (callback: (res: KeyboardInputResult) => void) => void;

        /**
         * 更新键盘输入框内容
         * @description 仅当键盘处于拉起状态时调用才会产生效果
         * @param options 输入框内容及回调配置项
         */
        updateKeyboard: (options: UpdateKeyboardOptions) => void;

        /**
         * 隐藏键盘
         * @description Android 端点击收起键盘按钮不会自动隐藏输入框，需主动调用此方法
         * @param options 回调配置项
         */
        hideKeyboard: (options?: HideKeyboardOptions) => void;

        /**
         * 显示键盘
         * @param options 键盘显示配置项（所有核心参数均为必填）
         */
        showKeyboard: (options: ShowKeyboardOptions) => void;

        //#endregion 键盘

        //#region 菜单

        /**
         * 动态设置右上角按钮拉起的菜单样式
         * @param options 菜单样式及回调配置项
         */
        setMenuStyle: (options: SetMenuStyleOptions) => void;

        /**
         * 获取菜单按钮（右上角胶囊按钮）的布局位置信息
         * @platform 基础库 2.4.0+，低版本需做兼容处理
         * @description 坐标信息以屏幕左上角为原点
         * @returns 菜单按钮的布局位置信息（含宽高、上下左右边界坐标）
         */
        getMenuButtonBoundingClientRect: () => MenuButtonBoundingClientRect;

        //#endregion 菜单

        //#region 状态栏

        /**
         * 修改状态栏的样式
         * @param options 状态栏样式及回调配置项
         */
        setStatusBarStyle: (options: SetStatusBarStyleOptions) => void;

        //#endregion 状态栏

        //#region 窗口

        /**
         * 取消监听窗口尺寸变化事件
         * @param callback 要取消的、已绑定的窗口尺寸变化事件回调函数
         */
        offWindowResize: (
            callback: (res: WindowResizeCallbackResult) => void,
        ) => void;

        /**
         * 监听窗口尺寸变化事件
         * @param callback 窗口尺寸变化时触发的回调函数，返回变化后的窗口宽高（单位 px）
         */
        onWindowResize: (
            callback: (res: WindowResizeCallbackResult) => void,
        ) => void;

        //#endregion 窗口

        //#endregion 界面

        //#region 数据分析

        /**
         * 上报小游戏启动成功埋点
         * @description 必须在游戏首页成功渲染时调用
         */
        launchSuccess: () => void;

        /**
         * 上报游戏启动阶段的自定义场景埋点
         * @platform 基础库 3.99.9+，低版本需做兼容处理
         * @param options 场景埋点配置项（含场景ID、耗时、自定义维度/指标）
         * @example
         * bl.reportScene({
         *   sceneId: 7,
         *   costTime: 350,
         *   dimension: {
         *     d1: '2.1.0', // value仅支持传入String类型。若value表示Boolean，请将值处理为'0'、'1'进行上报；若value为Number，请转换为String进行上报
         *   },
         *   metric: {
         *     m1: '546', // value仅支持传入数值且需要转换为String类型进行上报
         *   },
         *   success (res) {
         *     // 上报接口执行完成后的回调，用于检查上报数据是否符合预期
         *     console.log(res)
         *   },
         *   fail (res) {
         *     // 上报报错时的回调，用于查看上报错误的原因：如参数类型错误等
         *     console.log(res)
         *   }
         * })
         */
        reportScene: (options: ReportSceneOptions) => void;

        //#endregion 数据分析

        //#region 网络

        //#region 发起请求
        /**
         * 发起 HTTPS 网络请求
         * @description 所有版本支持 request 种 cookie（下次同域名请求带入）；基础库 3.9.0+ 支持请求 *bilibili.com 域名接口时带上 app 登录信息
         * @param options 网络请求配置项
         * @returns 请求任务对象（基础库 1.4.0+ 支持）
         * @example
         * bl.request({
         *     url: 'test.php', // 仅为示例，并非真实的接口地址
         *     data: {
         *         x: '',
         *         y: '',
         *     },
         *     header: {
         *         'content-type': 'application/json', // 默认值
         *     },
         *     success(res) {
         *         console.log(res.data);
         *     },
         * });
         */
        request: (options: RequestOptions) => RequestTask;
        //#endregion 发起请求

        //#region 下载

        /**
         * 下载文件资源到本地（客户端发起 HTTPS GET 请求）
         * @description 服务端需在响应 header 中指定合理的 Content-Type 以保证客户端正确处理文件类型
         * @param options 文件下载配置项
         * @returns 下载任务对象（基础库 2.3.0+ 支持）
         * @example
         * bl.downloadFile({
         *     url: 'https://example.com/audio/123', // 仅为示例，并非真实的资源
         *     success(res) {
         *         // 只要服务器有响应数据，就会把响应内容写入文件并进入 success 回调，业务需要自行判断是否下载到了想要的内容
         *         if (res.statusCode === 200) {
         *             console.log(res.tempFilePath);
         *         }
         *     },
         * });
         */
        downloadFile: (options: DownloadFileOptions) => DownloadTask;

        //#endregion 下载

        //#region 上传

        /**
         * 上传本地资源到服务器（客户端发起 HTTPS POST 请求，content-type 为 multipart/form-data）
         * @platform 基础库 2.6.0+，低版本需做兼容处理
         * @description 目前仅支持图片资源上传；header 中不能设置 Referer
         * @param options 文件上传配置项
         * @returns 上传任务对象（基础库 2.6.0+ 支持）
         * @example
         * const tempFilePath = 'blfile://temp/example.jpg';
         * bl.uploadFile({
         *     url: 'https://example.bilibili.com/upload', // 仅为示例，非真实的接口地址
         *     filePath: tempFilePath,
         *     name: 'file',
         *     formData: {
         *         user: 'test',
         *     },
         *     success(res) {
         *         const data = res.data;
         *         // do something
         *     },
         * });
         */
        uploadFile: (options: UploadFileOptions) => UploadTask;

        //#endregion 上传

        //#region WebSocket

        /**
         * 创建 WebSocket 连接（仅支持 wss 协议）
         * @param options WebSocket 连接配置项
         * @returns WebSocket 任务对象
         */
        connectSocket: (options: ConnectSocketOptions) => SocketTask;

        //#endregion WebSocket

        //#endregion 网络
    }
    /**
     * reportScene 接口成功回调参数类型
     */
    interface ReportSceneSuccessResult {
        /** 开发者上报的原始数据 */
        data: Record<string, any>;
    }

    /**
     * reportScene 接口失败回调参数类型
     */
    interface ReportSceneFailResult {
        /** 开发者上报的原始数据 */
        data: Record<string, any>;
        /** 错误信息（含参数类型/长度等错误描述） */
        errMsg: string;
    }

    /**
     * reportScene 接口调用参数类型
     * @platform 基础库 3.99.9+，低版本需做兼容处理
     * @description 用于游戏启动阶段的自定义场景上报；dimension/metric 仅支持 JSON.stringify 序列化且序列化后长度≤1024字符
     */
    interface ReportSceneOptions {
        /**
         * 场景ID（必填）
         * @description 预留值：7=游戏可玩（如进入游戏大厅）、10=游戏新手教程完成、1007=激励视频广告（用户点击看广告）
         */
        sceneId: number;
        /** 此场景的耗时（单位：ms），默认 0，值需≥0 */
        costTime?: number;
        /**
         * 自定义维度数据
         * @description value 仅支持非空字符串：布尔值请转为 '0'/'1'，数字请转为字符串
         */
        dimension?: Record<string, string>;
        /**
         * 自定义指标数据
         * @description value 仅支持纯数值组成的字符串（如 '546'）
         */
        metric?: Record<string, string>;
        /** 接口调用成功的回调函数 */
        success?: (res: ReportSceneSuccessResult) => void;
        /** 接口调用失败的回调函数（含错误码/错误信息） */
        fail?: (err: ReportSceneFailResult) => void;
        /** 接口调用结束的回调函数（成功/失败都会执行） */
        complete?: () => void;
    }
    /**
     * onError 全局错误事件回调参数类型
     */
    interface OnErrorCallbackResult {
        /** 错误信息描述 */
        message: string;
        /** 错误调用堆栈信息 */
        stack: string;
    }
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
    /**
     * LoadSubpackageTask.onProgressUpdate 回调参数类型
     * @description 分包加载进度变化事件的返回参数
     */
    interface LoadSubpackageProgressUpdateResult {
        /** 分包下载进度百分比 */
        progress: number;
        /** 已经下载的数据长度，单位 Bytes */
        totalBytesWritten: number;
        /** 预期需要下载的数据总长度，单位 Bytes */
        totalBytesExpectedToWrite: number;
    }

    /**
     * loadSubpackage 接口调用参数类型
     * @description 触发分包加载的配置项
     */
    interface LoadSubpackageOptions {
        /**
         * 分包的名字（必填）
         * @description 可填写分包的 name 或 root 字段值
         */
        name: string;
        /** 分包加载成功的回调函数（必填） */
        success: () => void;
        /** 分包加载失败的回调函数（必填） */
        fail: (err?: any) => void;
        /** 分包加载结束的回调函数（必填，成功/失败都会执行） */
        complete: () => void;
    }

    /**
     * 加载分包任务实例
     * @description 用于获取分包加载状态，由 bl.loadSubpackage 接口返回
     */
    interface LoadSubpackageTask {
        /**
         * 监听分包加载进度变化事件
         * @param callback 进度变化事件的回调函数，包含下载进度、已下载字节数、总字节数
         */
        onProgressUpdate: (
            callback: (res: LoadSubpackageProgressUpdateResult) => void,
        ) => void;
    }
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
    /**
     * 安全区域信息（竖屏正方向下）
     * @platform iOS >= 3.1.0, Android >= 3.31.0
     */
    interface SafeArea {
        /** 安全区域左上角横坐标 */
        left: number;
        /** 安全区域右下角横坐标 */
        right: number;
        /** 安全区域左上角纵坐标 */
        top: number;
        /** 安全区域右下角纵坐标 */
        bottom: number;
        /** 安全区域的宽度，单位逻辑像素 */
        width: number;
        /** 安全区域的高度，单位逻辑像素 */
        height: number;
    }

    /**
     * getSystemInfo 接口调用成功的回调参数类型
     */
    interface GetSystemInfoSuccessResult {
        /** 手机品牌 */
        brand: string;
        /** 手机型号 */
        model: string;
        /** 设备像素比 */
        pixelRatio: number;
        /** 设备像素比（与 pixelRatio 一致） */
        devicePixelRatio: number;
        /** 屏幕宽度 */
        screenWidth: number;
        /** 屏幕高度 */
        screenHeight: number;
        /** 可使用窗口宽度 */
        windowWidth: number;
        /** 可使用窗口高度 */
        windowHeight: number;
        /** 状态栏的高度 */
        statusBarHeight: number;
        /** 系统设置的语言 */
        language: string;
        /** APP版本号 */
        version: string;
        /** 操作系统版本 */
        system: string;
        /** 客户端平台 */
        platform: string;
        /** 客户端基础库版本 */
        SDKVersion: string;
        /** 安全区域信息 */
        safeArea?: SafeArea;
        /**
         * 设备性能等级
         * @platform 仅 Android >= 3.22.0
         * @description 取值：-2/0（无法运行小游戏）、-1（性能未知）、>=1（值越高性能越好，最高不到50）
         */
        benchmarkLevel?: number;
    }

    /**
     * getSystemInfo 接口调用参数类型
     */
    interface GetSystemInfoOptions {
        /** 接口调用成功的回调函数 */
        success?: (res: GetSystemInfoSuccessResult) => void;
        /** 接口调用失败的回调函数 */
        fail?: (err?: any) => void;
        /** 接口调用结束的回调函数（成功/失败都会执行） */
        complete?: () => void;
    }
    /**
     * 触控设备上的触摸点信息
     * @description 通常指手指/触控笔在触屏设备/触摸板上的操作点
     */
    interface Touch {
        /**
         * Touch 对象的唯一标识符（只读）
         * @description 一次触摸动作的整个过程中该标识符不变，可用于判断是否为同一次触摸
         */
        identifier: number;
        /** 触点相对于页面左边沿的 X 坐标 */
        pageX: number;
        /** 触点相对于页面上边沿的 Y 坐标 */
        pageY: number;
        /** 触点相对于可见视区左边沿的 X 坐标 */
        clientX: number;
        /** 触点相对于可见视区上边沿的 Y 坐标 */
        clientY: number;
    }

    /**
     * 触摸事件回调参数类型（适用于所有 touch 系列事件）
     */
    interface TouchEventCallbackResult {
        /** 当前所有触摸点的列表 */
        touches: Touch[];
        /** 触发此次事件的触摸点列表 */
        changedTouches: Touch[];
        /** 事件触发时的时间戳 */
        timeStamp: number;
    }
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
        name: "update";
        /** 是否开启更新调试，默认 false */
        enable?: boolean;
        /** 调试模式，支持 'success'/'fail'，默认 'success' */
        mode?: "success" | "fail";
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
            callback: (res: OnCheckForUpdateCallbackResult) => void,
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
    /**
     * showToast 接口的图标类型枚举
     */
    type ToastIcon = "success" | "loading" | "none";

    /**
     * showAddToDesktopGuide 接口的引导组件类型枚举
     * @platform 基础库 3.8.0+，iOS 暂不支持
     */
    type AddToDesktopGuideType = "bar" | "barautohide";

    /**
     * showAddToDesktopGuide 接口回调的错误码枚举
     */
    type AddToDesktopErrCode = 1 | 2 | 3 | -1 | -3 | -4;

    /**
     * showToast 接口调用参数类型
     * @description 显示消息提示框的配置项
     */
    interface ShowToastOptions {
        /** 提示内容（必填） */
        title: string;
        /** 图标类型，默认 success */
        icon?: ToastIcon;
        /** 自定义图标（仅支持包内资源，优先级高于 icon） */
        image?: string;
        /** 提示延迟时间，默认 1500ms */
        duration?: number;
        /** 是否显示透明蒙层防止触摸穿透，默认 false */
        mask?: boolean;
        /** 接口调用成功的回调函数 */
        success?: () => void;
        /** 接口调用失败的回调函数 */
        fail?: (err?: any) => void;
        /** 接口调用结束的回调函数（成功/失败都会执行） */
        complete?: () => void;
    }

    /**
     * hideToast/hideLoading 接口调用参数类型
     */
    interface HideToastLoadingOptions {
        /** 接口调用成功的回调函数 */
        success?: () => void;
        /** 接口调用失败的回调函数 */
        fail?: (err?: any) => void;
        /** 接口调用结束的回调函数（成功/失败都会执行） */
        complete?: () => void;
    }

    /**
     * showLoading 接口调用参数类型
     * @description 显示加载提示框的配置项（需主动调用 hideLoading 关闭）
     */
    interface ShowLoadingOptions {
        /** 提示内容（必填） */
        title: string;
        /** 是否显示透明蒙层防止触摸穿透，默认 false */
        mask?: boolean;
        /** 接口调用成功的回调函数 */
        success?: () => void;
        /** 接口调用失败的回调函数 */
        fail?: (err?: any) => void;
        /** 接口调用结束的回调函数（成功/失败都会执行） */
        complete?: () => void;
    }

    /**
     * showModal 接口成功回调参数类型
     */
    interface ShowModalSuccessResult {
        /** 是否点击确定按钮 */
        confirm: boolean;
        /** 是否点击取消按钮（Android 区分蒙层关闭/取消按钮） */
        cancel: boolean;
    }

    /**
     * showModal 接口调用参数类型
     * @description 显示模态对话框的配置项
     */
    interface ShowModalOptions {
        /** 提示标题（必填） */
        title: string;
        /** 提示内容（必填） */
        content: string;
        /** 是否显示取消按钮，默认 true */
        showCancel?: boolean;
        /** 取消按钮文字，最多 4 字符，默认 '取消' */
        cancelText?: string;
        /** 取消按钮文字颜色（16进制），默认 #000000 */
        cancelColor?: string;
        /** 确认按钮文字，最多 4 字符，默认 '确定' */
        confirmText?: string;
        /** 确认按钮文字颜色（16进制），默认 #576B95 */
        confirmColor?: string;
        /** 接口调用成功的回调函数 */
        success?: (res: ShowModalSuccessResult) => void;
        /** 接口调用失败的回调函数 */
        fail?: (err?: any) => void;
        /** 接口调用结束的回调函数（成功/失败都会执行） */
        complete?: () => void;
    }

    /**
     * showActionSheet 接口成功回调参数类型
     */
    interface ShowActionSheetSuccessResult {
        /** 用户点击的按钮序号（从上到下，从 0 开始） */
        tapIndex: number;
    }

    /**
     * showActionSheet 接口调用参数类型
     * @description 显示操作菜单的配置项
     */
    interface ShowActionSheetOptions {
        /** 按钮文字数组（必填，最大长度 6） */
        itemList: string[];
        /** 按钮文字颜色，默认 #212121 */
        itemColor?: string;
        /** 接口调用成功的回调函数 */
        success?: (res: ShowActionSheetSuccessResult) => void;
        /** 接口调用失败的回调函数 */
        fail?: (err?: any) => void;
        /** 接口调用结束的回调函数（成功/失败都会执行） */
        complete?: () => void;
    }

    /**
     * showAddToDesktopGuide 接口回调参数类型
     */
    interface AddToDesktopGuideCallbackResult {
        /** 错误码：1=已在桌面存在、2=添加成功、3=状态未知、-1=调起失败、-3=取消添加、-4=添加失败 */
        errCode: AddToDesktopErrCode;
        /** 错误/成功信息描述 */
        errMsg: string;
    }

    /**
     * showAddToDesktopGuide 接口调用参数类型
     * @platform 基础库 3.8.0+，iOS 暂不支持
     * @description 创建添加到桌面的引导按钮（单例对象）
     */
    interface ShowAddToDesktopGuideOptions {
        /** 引导组件类型，默认 bar，有效值：bar/barautohide */
        type?: AddToDesktopGuideType;
        /** 引导组件文案，默认 '一键添加到我的桌面' */
        content?: string;
        /** 添加成功的回调函数 */
        success?: (res: AddToDesktopGuideCallbackResult) => void;
        /** 添加失败的回调函数 */
        fail?: (res: AddToDesktopGuideCallbackResult) => void;
        /** 接口调用完成的回调函数（成功/失败都会执行） */
        complete?: () => void;
    }
    /**
     * showKeyboard 接口中 confirmType 的合法值（影响键盘右下角确认按钮文本）
     */
    type KeyboardConfirmType = "done" | "next" | "search" | "go" | "send";

    /**
     * onKeyboardComplete/onKeyboardConfirm 回调参数类型
     */
    interface KeyboardCompleteConfirmResult {
        /** 键盘输入的当前值 */
        value: string;
    }

    /**
     * onKeyboardInput 回调参数类型（文档标注 value 为 Object 类型）
     */
    interface KeyboardInputResult {
        /** 键盘输入的当前值（文档标注为 Object 类型） */
        value: Record<string, any>;
    }

    /**
     * updateKeyboard 接口调用参数类型
     * @description 仅当键盘处于拉起状态时更新输入框内容才会生效
     */
    interface UpdateKeyboardOptions {
        /** 键盘输入框的当前值（必填） */
        value: string;
        /** 接口调用成功的回调函数 */
        success?: () => void;
        /** 接口调用失败的回调函数 */
        fail?: (err?: any) => void;
        /** 接口调用结束的回调函数（成功/失败都会执行） */
        complete?: () => void;
    }

    /**
     * hideKeyboard 接口调用参数类型
     */
    interface HideKeyboardOptions {
        /** 接口调用成功的回调函数 */
        success?: () => void;
        /** 接口调用失败的回调函数 */
        fail?: (err?: any) => void;
        /** 接口调用结束的回调函数（成功/失败都会执行） */
        complete?: () => void;
    }

    /**
     * showKeyboard 接口调用参数类型
     */
    interface ShowKeyboardOptions {
        /** 键盘输入框显示的默认值（必填） */
        defaultValue: string;
        /** 键盘中文本的最大长度（必填） */
        maxLength: number;
        /** 是否为多行输入（必填） */
        multiple: boolean;
        /** 点击完成时键盘是否收起（必填） */
        confirmHold: boolean;
        /** 键盘右下角 confirm 按钮的类型（仅影响按钮文本，必填） */
        confirmType: KeyboardConfirmType;
        /** 接口调用成功的回调函数 */
        success?: () => void;
        /** 接口调用失败的回调函数 */
        fail?: (err?: any) => void;
        /** 接口调用结束的回调函数（成功/失败都会执行） */
        complete?: () => void;
    }
    /**
     * setMenuStyle 接口的菜单样式枚举
     */
    type MenuStyle = "light" | "dark";

    /**
     * setMenuStyle 接口调用参数类型
     * @description 动态设置右上角菜单的样式风格
     */
    interface SetMenuStyleOptions {
        /** 菜单样式风格（必填），有效值：light(浅色)/dark(深色) */
        style: MenuStyle;
        /** 接口调用成功的回调函数 */
        success?: () => void;
        /** 接口调用失败的回调函数 */
        fail?: (err?: any) => void;
        /** 接口调用结束的回调函数（成功/失败都会执行） */
        complete?: () => void;
    }

    /**
     * getMenuButtonBoundingClientRect 接口返回值类型
     * @description 菜单按钮（右上角胶囊按钮）的布局位置信息，坐标以屏幕左上角为原点
     */
    interface MenuButtonBoundingClientRect {
        /** 宽度，单位：px */
        width: number;
        /** 高度，单位：px */
        height: number;
        /** 上边界坐标，单位：px */
        top: number;
        /** 右边界坐标，单位：px */
        right: number;
        /** 下边界坐标，单位：px */
        bottom: number;
        /** 左边界坐标，单位：px */
        left: number;
    }
    /**
     * setStatusBarStyle 接口的状态栏样式枚举
     */
    type StatusBarStyle = "white" | "black";

    /**
     * setStatusBarStyle 接口调用参数类型
     * @description 用于配置状态栏样式及接口回调
     */
    interface SetStatusBarStyleOptions {
        /** 状态栏样式风格（必填），有效值：white(白色)/black(黑色) */
        style: StatusBarStyle;
        /** 接口调用成功的回调函数 */
        success?: () => void;
        /** 接口调用失败的回调函数 */
        fail?: (err?: any) => void;
        /** 接口调用结束的回调函数（成功/失败都会执行） */
        complete?: () => void;
    }
    /**
     * onWindowResize 窗口尺寸变化事件回调参数类型
     */
    interface WindowResizeCallbackResult {
        /** 变化后的窗口宽度，单位：px */
        windowWidth: number;
        /** 变化后的窗口高度，单位：px */
        windowHeight: number;
    }
    /**
     * DownloadTask.onProgressUpdate 下载进度回调参数类型
     */
    interface DownloadProgressUpdateResult {
        /** 下载进度百分比 */
        progress: number;
        /** 已经下载的数据长度，单位：Bytes */
        totalBytesWritten: number;
        /** 预期需要下载的数据总长度，单位：Bytes */
        totalBytesExpectedToWrite: number;
    }

    /**
     * downloadFile 接口成功回调参数类型
     */
    interface DownloadFileSuccessResult {
        /** 临时文件路径（未传入 filePath 时返回） */
        tempFilePath: string;
        /** 用户文件路径（传入 filePath 时返回，与传入值一致） */
        filePath?: string;
        /** 开发者服务器返回的 HTTP 状态码 */
        statusCode: number;
    }

    /**
     * downloadFile 接口调用参数类型
     * @description 下载文件资源到本地，客户端发起 HTTPS GET 请求；需在服务端响应 header 中指定合理的 Content-Type
     */
    interface DownloadFileOptions {
        /** 下载资源的 URL（必填） */
        url: string;
        /** HTTP 请求 Header（不能设置 Referer） */
        header?: Record<string, string>;
        /** 指定文件下载后存储的本地路径 */
        filePath?: string;
        /** 接口调用成功的回调函数 */
        success?: (res: DownloadFileSuccessResult) => void;
        /** 接口调用失败的回调函数 */
        fail?: (err?: any) => void;
        /** 接口调用结束的回调函数（成功/失败都会执行） */
        complete?: () => void;
    }

    /**
     * 下载任务对象（由 bl.downloadFile 返回）
     * @platform 基础库 2.3.0+，低版本需做兼容处理
     * @description 可监听下载进度、中断下载任务
     */
    interface DownloadTask {
        /**
         * 中断下载任务
         */
        abort: () => void;

        /**
         * 监听下载进度变化事件
         * @param callback 进度变化触发的回调函数，返回下载进度、已下载字节数、总字节数
         */
        onProgressUpdate: (
            callback: (res: DownloadProgressUpdateResult) => void,
        ) => void;

        /**
         * 取消监听下载进度变化事件
         * @param callback 要取消的、已绑定的进度回调函数
         */
        offProgressUpdate: (
            callback: (res: DownloadProgressUpdateResult) => void,
        ) => void;
    }
    /**
     * request 接口的 HTTP 请求方法枚举
     */
    type RequestMethod =
        | "OPTIONS"
        | "GET"
        | "HEAD"
        | "POST"
        | "PUT"
        | "DELETE"
        | "TRACE"
        | "CONNECT";

    /**
     * request 接口的返回数据格式枚举
     */
    type RequestDataType = "json" | string;

    /**
     * request 接口的响应数据类型枚举
     */
    type RequestResponseType = "text" | "arraybuffer";

    /**
     * request 接口成功回调参数类型
     */
    interface RequestSuccessResult {
        /** 开发者服务器返回的数据（类型由 responseType 决定） */
        data: string | Record<string, any> | ArrayBuffer;
        /** 开发者服务器返回的 HTTP 状态码 */
        statusCode: number;
        /** 开发者服务器返回的 HTTP Response Header */
        header: Record<string, string>;
    }

    /**
     * request 接口调用参数类型
     * @description 发起 HTTPS 网络请求；header 中不能设置 Referer，content-type 默认为 application/json
     */
    interface RequestOptions {
        /** 开发者服务器接口地址（必填） */
        url: string;
        /**
         * 请求参数
         * @description 最终会转为 String 类型：GET 转 query string、POST+application/json 转 JSON 序列化、POST+application/x-www-form-urlencoded 转 query string
         */
        data?: string | Record<string, any> | ArrayBuffer;
        /** 请求头配置（不能设置 Referer） */
        header?: Record<string, string>;
        /** HTTP 请求方法，默认 GET */
        method?: RequestMethod;
        /** 返回数据格式，默认 json（json 类型会自动 JSON.parse，其他类型不处理） */
        dataType?: RequestDataType;
        /** 响应数据类型，默认 text */
        responseType?: RequestResponseType;
        /** 接口调用成功的回调函数 */
        success?: (res: RequestSuccessResult) => void;
        /** 接口调用失败的回调函数 */
        fail?: (err?: any) => void;
        /** 接口调用结束的回调函数（成功/失败都会执行） */
        complete?: () => void;
    }

    /**
     * 请求任务对象（由 bl.request 返回）
     * @platform 基础库 1.4.0+，低版本需做兼容处理
     * @description 用于管理网络请求任务（文档未提及具体方法，预留接口）
     */
    interface RequestTask {}
    /**
     * UploadTask.onProgressUpdate 上传进度回调参数类型
     */
    interface UploadProgressUpdateResult {
        /** 上传进度百分比 */
        progress: number;
        /** 已经上传的数据长度，单位：Bytes */
        totalBytesSent: number;
        /** 预期需要上传的数据总长度，单位：Bytes */
        totalBytesExpectedToSend: number;
    }

    /**
     * UploadTask.onHeadersReceived HTTP 响应头回调参数类型
     */
    interface UploadHeadersReceivedResult {
        /** 开发者服务器返回的 HTTP Response Header */
        header: Record<string, string>;
    }

    /**
     * uploadFile 接口成功回调参数类型
     */
    interface UploadFileSuccessResult {
        /** 开发者服务器返回的数据 */
        data: string;
        /** 开发者服务器返回的 HTTP 状态码 */
        statusCode: number;
    }

    /**
     * uploadFile 接口调用参数类型
     * @platform 基础库 2.6.0+，低版本需做兼容处理
     * @description 上传本地资源到服务器，客户端发起 HTTPS POST 请求（content-type 为 multipart/form-data）；目前仅支持图片资源上传
     */
    interface UploadFileOptions {
        /** 开发者服务器地址（必填） */
        url: string;
        /** 要上传文件资源的路径（必填，目前仅支持图片资源） */
        filePath: string;
        /** 文件对应的 key（必填，服务端通过此 key 获取文件二进制内容） */
        name: string;
        /** HTTP 请求 Header（不能设置 Referer） */
        header?: Record<string, string>;
        /** HTTP 请求中额外的 form data */
        formData?: Record<string, any>;
        /** 接口调用成功的回调函数 */
        success?: (res: UploadFileSuccessResult) => void;
        /** 接口调用失败的回调函数 */
        fail?: (err?: any) => void;
        /** 接口调用结束的回调函数（成功/失败都会执行） */
        complete?: () => void;
    }

    /**
     * 上传任务对象（由 bl.uploadFile 返回）
     * @platform 基础库 2.6.0+，低版本需做兼容处理
     * @description 可监听上传进度、HTTP 响应头事件，也可中断上传任务
     * @example
     * const tempFilePath = 'blfile://temp/example.jpg';
     * const uploadTask = bl.uploadFile({
     *     url: 'https://example.bilibili.com/upload', // 仅为示例，非真实的接口地址
     *     filePath: tempFilePath,
     *     name: 'file',
     *     formData: {
     *         user: 'test',
     *     },
     *     success(res) {
     *         const data = res.data;
     *         // do something
     *     },
     * });
     *
     * uploadTask.onProgressUpdate(res => {
     *     console.log('上传进度', res.progress);
     *     console.log('已经上传的数据长度', res.totalBytesSent);
     *     console.log('预期需要上传的数据总长度', res.totalBytesExpectedToSend);
     * });
     *
     * uploadTask.abort(); // 取消上传任务
     */
    interface UploadTask {
        /**
         * 中断上传任务
         */
        abort: () => void;

        /**
         * 监听上传进度变化事件
         * @param callback 进度变化触发的回调函数，返回上传进度、已上传字节数、总字节数
         */
        onProgressUpdate: (
            callback: (res: UploadProgressUpdateResult) => void,
        ) => void;

        /**
         * 取消监听上传进度变化事件
         * @param callback 要取消的、已绑定的进度回调函数
         */
        offProgressUpdate: (
            callback: (res: UploadProgressUpdateResult) => void,
        ) => void;

        /**
         * 监听 HTTP Response Header 事件（比请求完成事件更早触发）
         * @param callback 响应头事件触发的回调函数，返回服务器响应头
         */
        onHeadersReceived: (
            callback: (res: UploadHeadersReceivedResult) => void,
        ) => void;

        /**
         * 取消监听 HTTP Response Header 事件
         * @param callback 要取消的、已绑定的响应头回调函数
         */
        offHeadersReceived: (
            callback: (res: UploadHeadersReceivedResult) => void,
        ) => void;
    }
    /**
     * connectSocket 接口调用参数类型
     * @description 创建 WebSocket 连接，仅支持 wss 协议接口地址；Header 中不能设置 Referer
     */
    interface ConnectSocketOptions {
        /** 开发者服务器 wss 接口地址（必填） */
        url: string;
        /** HTTP Header（不能设置 Referer） */
        header?: Record<string, string>;
        /** WebSocket 子协议数组 */
        protocols?: string[];
        /** 接口调用成功的回调函数 */
        success?: () => void;
        /** 接口调用失败的回调函数 */
        fail?: (err?: any) => void;
        /** 接口调用结束的回调函数（成功/失败都会执行） */
        complete?: () => void;
    }

    /**
     * SocketTask.onClose 连接关闭事件回调参数类型
     * @description 贴合 WebSocket 标准关闭事件参数
     */
    interface SocketCloseResult {
        /** 关闭状态码（符合 WebSocket 标准） */
        code: number;
        /** 关闭原因描述 */
        reason: string;
        /** 是否为正常关闭 */
        wasClean: boolean;
    }

    /**
     * SocketTask.onError 错误事件回调参数类型
     */
    interface SocketErrorResult {
        /** 错误信息描述 */
        errMsg: string;
    }

    /**
     * SocketTask.onMessage 消息接收事件回调参数类型
     */
    interface SocketMessageResult {
        /** 服务器返回的消息数据（支持字符串/ArrayBuffer） */
        data: string | ArrayBuffer;
        /** 数据类型（text/arraybuffer） */
        type: "text" | "arraybuffer";
    }

    /**
     * SocketTask.send 发送数据的参数类型
     */
    interface SocketSendOptions {
        /** 要发送的数据（支持字符串/ArrayBuffer） */
        data: string | ArrayBuffer;
        /** 发送成功的回调函数 */
        success?: () => void;
        /** 发送失败的回调函数 */
        fail?: (err?: SocketErrorResult) => void;
        /** 发送结束的回调函数（成功/失败都会执行） */
        complete?: () => void;
    }

    /**
     * WebSocket 任务对象（由 bl.connectSocket 返回）
     * @description 用于管理 WebSocket 连接，包含关闭、事件监听、发送数据等能力
     */
    interface SocketTask {
        /**
         * 关闭 WebSocket 连接
         * @param callback 连接关闭后的回调函数
         */
        close: (callback?: (res?: SocketCloseResult) => void) => void;

        /**
         * 监听 WebSocket 连接关闭事件
         * @param callback 连接关闭时触发的回调函数
         */
        onClose: (callback: (res: SocketCloseResult) => void) => void;

        /**
         * 监听 WebSocket 错误事件
         * @param callback 错误发生时触发的回调函数
         */
        onError: (callback: (res: SocketErrorResult) => void) => void;

        /**
         * 监听 WebSocket 接收服务器消息事件
         * @param callback 收到消息时触发的回调函数
         */
        onMessage: (callback: (res: SocketMessageResult) => void) => void;

        /**
         * 通过 WebSocket 连接发送数据
         * @param options 发送数据及回调配置项
         */
        send: (options: SocketSendOptions) => void;
    }
    /**
     * Canvas.toTempFilePath/toTempFilePathSync 的文件类型枚举
     */
    type CanvasFileType = "jpg" | "png";

    /**
     * WebGL 上下文属性（仅 getContext('webgl') 时有效）
     */
    interface WebGLContextAttributes {
        /** 绘图完成后是否保留绘图缓冲区，默认 false */
        preserveDrawingBuffer?: boolean;
    }

    /**
     * Canvas.toTempFilePath 接口调用参数类型
     */
    interface CanvasToTempFilePathOptions {
        /** 截取 canvas 的左上角横坐标，默认 0 */
        x?: number;
        /** 截取 canvas 的左上角纵坐标，默认 0 */
        y?: number;
        /** 截取 canvas 的宽度，默认 canvas 自身宽度 */
        width?: number;
        /** 截取 canvas 的高度，默认 canvas 自身高度 */
        height?: number;
        /** 目标文件的宽度，会拉伸/压缩截取区域，默认 canvas 自身宽度 */
        destWidth?: number;
        /** 目标文件的高度，会拉伸/压缩截取区域，默认 canvas 自身高度 */
        destHeight?: number;
        /** 目标文件的类型，默认 png */
        fileType?: CanvasFileType;
        /**
         * jpg 图片质量（仅 fileType 为 jpg 时有效）
         * @description 取值范围 0.0(最低)~1.0(最高)（不含 0），超出范围按 1.0 处理
         * @default 1.0
         */
        quality?: number;
        /**
         * 接口调用成功的回调函数
         * @param res 回调参数，包含临时文件路径
         */
        success?: (res: { tempFilePath: string }) => void;
        /** 接口调用失败的回调函数 */
        fail?: (err?: any) => void;
        /** 接口调用结束的回调函数（成功/失败都会执行） */
        complete?: () => void;
    }

    /**
     * Canvas.toTempFilePathSync 接口调用参数类型（无回调，其余同异步版本）
     */
    type CanvasToTempFilePathSyncOptions = Omit<
        CanvasToTempFilePathOptions,
        "success" | "fail" | "complete"
    >;

    /**
     * 画布对象
     * @description 首次通过 bl.createCanvas() 创建的是屏幕画布，后续创建的是离屏画布
     */
    interface Canvas {
        /**
         * 将当前 Canvas 保存为临时文件（异步版本）
         * @param options 截图/保存配置项
         * @returns canvas 生成的临时文件路径
         * @example
         * Canvas.toTempFilePath({
         *   x: 10,
         *   y: 10,
         *   width: 200,
         *   height: 150,
         *   destWidth: 400,
         *   destHeight: 300,
         *   success: (res) => {
         *     bl.shareAppMessage({
         *       imageUrl: res.tempFilePath
         *     })
         *   }
         * })
         */
        toTempFilePath: (options: CanvasToTempFilePathOptions) => string;

        /**
         * 将当前 Canvas 保存为临时文件（同步版本）
         * @param options 截图/保存配置项
         * @returns canvas 生成的临时文件路径
         * @example
         * const tempFilePath = Canvas.toTempFilePathSync({
         *   x: 10,
         *   y: 10,
         *   width: 200,
         *   height: 150,
         *   destWidth: 400,
         *   destHeight: 300
         * })
         * bl.shareAppMessage({
         *   imageUrl: tempFilePath
         * })
         */
        toTempFilePathSync: (
            options: CanvasToTempFilePathSyncOptions,
        ) => string;

        /**
         * 获取画布对象的绘图上下文
         * @param contextType 上下文类型（2d/webgl）
         * @param contextAttributes WebGL 上下文属性（仅 contextType 为 webgl 时有效）
         * @returns 绘图上下文对象（2d 对应 CanvasRenderingContext2D，webgl 对应 WebGLRenderingContext）
         */
        getContext: (
            contextType: "2d" | "webgl",
            contextAttributes?: WebGLContextAttributes,
        ) => CanvasRenderingContext2D | WebGLRenderingContext;

        /**
         * 把画布绘制内容转为 data URI 格式字符串返回
         * @returns data URI 格式的字符串
         */
        toDataURL: () => string;
    }
    /**
     * 补充 WebGL 上下文类型（贴合文档中 WebGL 1.0 规范）
     * 注：完整属性/方法可参考 WebGL 1.0 标准，此处仅对齐文档提及的约束
     */
    interface WebGLRenderingContext {
        // 文档提及 Android 不支持的接口
        getExtension?: (extensionName: string) => any;
        getSupportedExtensions?: () => string[];
        pixelStorei?: (pname: number, param: number) => void;
    }

    /**
     * 补充 2D 绘图上下文类型（贴合文档中 HTML Canvas 2D Context 规范）
     * 注：完整属性/方法可参考 HTML Canvas 2D 标准，此处仅对齐文档提及的约束
     */
    interface CanvasRenderingContext2D {
        // 文档提及不支持的属性/方法
        globalCompositeOperation?: string;
        isPointInPath?: (x: number, y: number) => boolean;
    }
    /**
     * getTextLineHeight 接口的字体样式枚举（iOS 不支持该配置）
     */
    type FontStyle = "normal" | "italic";

    /**
     * getTextLineHeight 接口的字重枚举
     */
    type FontWeight = "normal" | "bold";

    /**
     * getTextLineHeight 接口调用参数类型
     * @description 用于配置获取文本行高的字体样式、内容等参数
     */
    interface GetTextLineHeightOptions {
        /** 字体样式（iOS 不支持），默认 normal */
        fontStyle?: FontStyle;
        /** 字重，默认 normal */
        fontWeight?: FontWeight;
        /** 字号，默认 16 */
        fontSize?: number;
        /** 字体名称（必填） */
        fontFamily: string;
        /** 文本内容（必填） */
        text: string;
        /** 接口调用成功的回调函数 */
        success?: () => void;
        /** 接口调用失败的回调函数 */
        fail?: (err?: any) => void;
        /** 接口调用结束的回调函数（成功/失败都会执行） */
        complete?: () => void;
    }
    /**
     * 图片对象（由 bl.createImage() 创建）
     */
    interface Image {
        /** 图片的 URL 地址 */
        src: string;
        /** 图片的真实宽度（像素） */
        width: number;
        /** 图片的真实高度（像素） */
        height: number;
        /** 图片加载完成后触发的回调函数 */
        onload?: () => void;
        /** 图片加载发生错误后触发的回调函数 */
        onerror?: () => void;
    }
}

declare const bl: BilibilWebMinigame.BL;
