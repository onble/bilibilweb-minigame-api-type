/** bilbiliweb的变量命名空间 */
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
         * @example
         * bl.connectSocket({
         *   url: "wss://example.bilibili.com",
         *   header: {
         *     "content-type": "application/json"
         *   },
         *   protocols: ["protocol1"]
         * });
         */
        connectSocket: (options: ConnectSocketOptions) => SocketTask;

        //#endregion WebSocket

        //#endregion 网络

        //#region 转发

        /**
         * 显示当前页面的转发按钮
         * @param options 转发按钮配置及回调项
         * @example
         * bl.showShareMenu({
         * withShareTicket: true
         * })
         */
        showShareMenu: (options?: ShowShareMenuOptions) => void;

        /**
         * 隐藏转发按钮
         * @param options 回调配置项
         * @example
         * bl.hideShareMenu()
         */
        hideShareMenu: (options?: HideShareMenuOptions) => void;

        /**
         * 取消监听用户点击右上角「转发」按钮的事件
         * @param callback 要取消的转发事件回调函数
         */
        offShareAppMessage: (callback: () => ShareAppMessageConfig) => void;

        /**
         * 监听用户点击右上角「转发」按钮的事件
         * @platform 基础库 3.8.0+，低版本需做兼容处理
         * @param callback 转发事件触发的回调函数，返回分享配置
         * @example
         * bl.onShareAppMessage(() => {
         *     return {
         *         title: '转发标题',
         *         subTitle: '转发副标题',
         *         imageUrl: 'https://xxxx.png', // 图片 URL
         *         query: 'key1=val1',
         *     };
         * });
         * @example 对于不是 bilibili 域名的图片，可按如下方式处理
         * // 第一步：下载文件到本地
         * bl.downloadFile({
         *     url: 'https://example.com/image/123',
         *     success(res) {
         *         if (res.statusCode === 200) {
         *             // 第二步：直接使用临时文件作为分享图
         *             bl.onShareAppMessage(() => {
         *                 return {
         *                     title: '转发标题',
         *                     subTitle: '转发副标题',
         *                     imageUrl: res.tempFilePath, // 图片 URL
         *                     query: 'key1=val1',
         *                 };
         *             });
         *         }
         *     },
         *     fail(err) {
         *         console.log(err);
         *     }
         * });
         */
        onShareAppMessage: (callback: () => ShareAppMessageConfig) => void;

        /**
         * 主动拉起分享，进入选择分享渠道界面
         * @platform 基础库 3.8.0+，低版本需做兼容处理
         * @param options 分享配置及回调项
         * @example
         * // 第一步：下载文件到本地
         * bl.downloadFile({
         *     url: 'https://example.com/image/123',
         *     success(res) {
         *         if (res.statusCode === 200) {
         *             // 第二步：直接使用临时文件作为分享图
         *             bl.shareAppMessage({
         *                 title: '转发标题',
         *                 subTitle: '转发副标题',
         *                 imageUrl: res.tempFilePath,
         *                 biliContent: '转发内容',
         *                 success(res) {
         *                     console.log(res);
         *                 },
         *                 fail(err) {
         *                     console.log(err);
         *                 }
         *             });
         *         }
         *     },
         *     fail(err) {
         *         console.log(err);
         *     }
         * });
         */
        shareAppMessage: (options?: ShareAppMessageOptions) => void;

        //#endregion 转发

        //#region 数据缓存

        /**
         * 异步获取当前 storage 的相关信息
         * @param options 回调配置项
         * @example
         * bl.getStorageInfo({
         *   success(res) {
         *     console.log(res.keys)
         *     console.log(res.currentSize)
         *     console.log(res.limitSize)
         *   }
         * })
         */
        getStorageInfo: (options?: GetStorageInfoOptions) => void;

        /**
         * 同步获取当前 storage 的相关信息
         * @description 同步接口可能抛出异常，需 try/catch 捕获
         * @returns 本地缓存信息（key列表、已用空间、空间上限）
         * @example
         * try {
         *   const res = bl.getStorageInfoSync()
         *   console.log(res.keys)
         *   console.log(res.currentSize)
         *   console.log(res.limitSize)
         * } catch (e) {
         *   // Do something when catch error
         * }
         */
        getStorageInfoSync: () => StorageInfoResult;

        /**
         * 异步清理本地数据缓存
         * @param options 回调配置项
         * @example
         * bl.clearStorage()
         */
        clearStorage: (options?: ClearStorageOptions) => void;

        /**
         * 同步清理本地数据缓存
         * @description 同步接口可能抛出异常，需 try/catch 捕获
         * @example
         * try {
         *   bl.clearStorageSync()
         * } catch (e) {
         *   // Do something when catch error
         * }
         */
        clearStorageSync: () => void;

        /**
         * 异步从本地缓存中移除指定 key
         * @param options 移除配置项（含必填 key）
         * @example
         * bl.removeStorage({
         *   key: 'key',
         *   success(res) {
         *     console.log(res.data)
         *   }
         * })
         */
        removeStorage: (options: RemoveStorageOptions) => void;

        /**
         * 同步从本地缓存中移除指定 key
         * @description 同步接口可能抛出异常，需 try/catch 捕获
         * @param key 本地缓存中指定的 key
         * @example
         * try {
         *   bl.removeStorageSync('key')
         * } catch (e) {
         *   // Do something when catch error
         * }
         */
        removeStorageSync: (key: string) => void;

        /**
         * 异步将数据存储到本地缓存的指定 key 中（会覆盖原有内容）
         * @description 单个 key 最大存储 1MB，所有数据总上限 10MB；数据生命周期与小游戏一致
         * @param options 存储配置项（含必填 key 和 data）
         * @example
         * bl.setStorage({
         *   key: 'key',
         *   data: 'value'
         * })
         */
        setStorage: (options: SetStorageOptions) => void;

        /**
         * 同步将数据存储到本地缓存的指定 key 中（会覆盖原有内容）
         * @description 单个 key 最大存储 1MB，所有数据总上限 10MB；同步接口可能抛出异常，需 try/catch 捕获
         * @param key 本地缓存中指定的 key
         * @param data 需要存储的内容（仅支持原生类型、Date、可 JSON 序列化对象）
         * @example
         * try {
         *   const value = bl.getStorageSync('key')
         *   if (value) {
         *     // Do something with return value
         *   }
         * } catch (e) {
         *   // Do something when catch error
         * }
         */
        setStorageSync: (key: string, data: any) => void;

        /**
         * 异步从本地缓存中获取指定 key 的内容
         * @param options 获取配置项（含必填 key）
         * @example
         * bl.getStorage({
         *   key: 'key',
         *   success(res) {
         *     console.log(res.data)
         *   }
         * })
         */
        getStorage: (options: GetStorageOptions) => void;

        /**
         * 同步从本地缓存中获取指定 key 的内容
         * @description 同步接口可能抛出异常，需 try/catch 捕获
         * @param key 本地缓存中指定的 key
         * @returns key 对应的内容
         * @example
         * try {
         *   const value = bl.getStorageSync('key')
         *   if (value) {
         *     // Do something with return value
         *   }
         * } catch (e) {
         *   // Do something when catch error
         * }
         */
        getStorageSync: (key: string) => any;

        //#endregion 数据缓存

        //#region 媒体

        //#region 音频

        /**
         * 创建内部 audio 上下文 InnerAudioContext 对象
         * @returns 内部音频上下文实例
         */
        createInnerAudioContext: () => InnerAudioContext;

        /**
         * 设置 InnerAudioContext 的播放选项（对当前小游戏全局生效）
         * @param options 音频播放选项配置及回调项
         */
        setInnerAudioOption: (options?: SetInnerAudioOptionOptions) => void;
        //#endregion 音频

        //#region 图片

        /**
         * 保存图片到系统相册
         * @param options 保存图片的配置项（必填 filePath）
         * @example
         * bl.saveImageToPhotosAlbum({
         *   success(res) { }
         * })
         */
        saveImageToPhotosAlbum: (
            options: SaveImageToPhotosAlbumOptions,
        ) => void;

        //#endregion 图片

        //#region 视频
        /**
         * 保存视频到系统相册
         * @platform 基础库 ≥3.62.0 支持
         * @description 仅支持 mp4 格式；文件路径仅支持 blfile 协议/包内本地路径
         * @param options 保存视频配置项（必填 filePath）
         * @example
         * bl.saveVideoToPhotosAlbum({
         *   filePath: 'blfile://xxx',
         *   success (res) {
         *     console.log(res.errMsg)
         *   }
         * })
         */
        saveVideoToPhotosAlbum: (
            options: SaveVideoToPhotosAlbumOptions,
        ) => void;

        /**
         * 创建视频对象
         * @platform 基础库 3.12.0+，低版本需做兼容处理
         * @param options 视频配置项（必填 src）
         * @returns 视频对象（可控制播放/暂停/全屏等）
         */
        createVideo: (options: CreateVideoOptions) => Video;
        //#endregion 视频

        //#region 相机

        /**
         * 创建相机对象
         * @platform 基础库 3.79.0+，低版本需做兼容处理
         * @description 使用前需先通过 bl.authorize 获取 scope.camera 授权
         * @param options 相机配置项
         * @returns 相机对象（可控制录像/拍照/帧监听等）
         * @example
         * let camera
         * // 获取用户的当前设置
         * bl.getSetting({
         *   success(res) {
         *     if (!res.authSetting['scope.camera']) {
         *       // 发起授权请求
         *       bl.authorize({
         *         scope: 'scope.camera',
         *         success() {
         *           // 创建camera对象
         *           camera = bl.createCamera({
         *             x: 0,
         *             y: 0,
         *             width: 300,
         *             height: 350,
         *             devicePosition: 'back',
         *             flash: 'on',
         *             size: 'small',
         *             success: (res)=> {
         *                 console.log('createCameraSuccess', res)
         *             },
         *             fail: (res)=> {
         *                 console.log('createCameraFail', res)
         *             },
         *             complete: (res) => {
         *                 console.log('createCameraComplete', res)
         *             }
         *           })
         *         }
         *       })
         *     } else {
         *       camera = bl.createCamera({
         *         // ...
         *       })
         *     }
         *   }
         * })
         */
        createCamera: (options?: CreateCameraOptions) => Camera;

        //#endregion 相机

        //#endregion 媒体

        //#region 位置

        /**
         * 获取当前的地理位置、速度
         * @description 1. 用户离开小游戏后此接口无法调用；2. 使用第三方服务逆地址解析时，需确认坐标系并做好坐标转换
         * @param options 地理位置获取配置项（仅包含回调）
         * @example
         * bl.getLocation({
         *   success(res) {
         *     const latitude = res.latitude
         *     const longitude = res.longitude
         *   }
         * })
         */
        getLocation: (options?: GetLocationOptions) => void;

        //#endregion 位置

        //#region 文件

        /**
         * 获取全局唯一的文件管理器对象
         * @returns FileSystemManager 实例（包含所有文件/目录操作方法）
         */
        getFileSystemManager: () => FileSystemManager;

        //#endregion 文件

        //#region 设备

        //#region 蓝牙-通用

        /**
         * 初始化蓝牙模块
         * @platform 基础库 3.73.0+
         * @description iOS 上开启主机/从机模式时需分别调用一次，并指定对应的 mode；其他蓝牙 API 必须在该接口调用后使用
         * @param options 初始化配置
         * @example
         * bl.openBluetoothAdapter({
         *     mode: 'central',
         *     success (res) { },
         *     fail (err) { },
         *     complete (result) { },
         * })
         */
        openBluetoothAdapter: (options: OpenBluetoothAdapterOptions) => void;

        /**
         * 关闭蓝牙模块
         * @platform 基础库 3.73.0+
         * @description 断开所有已建立的连接并释放系统资源，建议与 openBluetoothAdapter 成对调用
         * @param options 关闭配置
         * @example
         * bl.closeBluetoothAdapter({
         *   success (res) {
         *     console.log(res)
         *   }
         * })
         */
        closeBluetoothAdapter: (options: CloseBluetoothAdapterOptions) => void;

        /**
         * 开始搜寻附近的蓝牙外围设备
         * @platform 基础库 3.73.0+
         * @description 操作耗费系统资源，需及时调用 stopBluetoothDevicesDiscovery 停止搜索；安卓 6.0+ 无定位权限/开关未开时无法搜索
         * @param options 搜索配置
         * @example
         * bl.startBluetoothDevicesDiscovery({
         *   services: ['FEE7'],
         *   success (res) {
         *     console.log(res)
         *   }
         * })
         */
        startBluetoothDevicesDiscovery: (
            options: StartBluetoothDevicesDiscoveryOptions,
        ) => void;

        /**
         * 停止搜寻附近的蓝牙外围设备
         * @platform 基础库 3.73.0+
         * @description 找到需要的设备后建议立即调用
         * @param options 停止搜索配置
         * @example
         * bl.stopBluetoothDevicesDiscovery({
         *   success (res) {
         *     console.log(res)
         *   }
         * })
         */
        stopBluetoothDevicesDiscovery: (
            options: StopBluetoothDevicesDiscoveryOptions,
        ) => void;

        /**
         * 根据主服务 UUID 获取已连接的蓝牙设备
         * @platform 基础库 3.73.0+
         * @param options 查询配置（必填 services）
         * @example
         * bl.getConnectedBluetoothDevices({
         *   services: ['FEE7'],
         *   success (res) {
         *     console.log(res)
         *   }
         * })
         */
        getConnectedBluetoothDevices: (
            options: GetConnectedBluetoothDevicesOptions,
        ) => void;

        /**
         * 获取在蓝牙模块生效期间所有搜索到的蓝牙设备
         * @platform 基础库 3.73.0+
         * @description 包含已连接设备；若未及时关闭蓝牙模块，可能返回已离开的设备
         * @param options 查询配置
         * @example
         *          * // ArrayBuffer转16进度字符串示例
         * function ab2hex(buffer) {
         *   var hexArr = Array.prototype.map.call(
         *     new Uint8Array(buffer),
         *     function(bit) {
         *       return ('00' + bit.toString(16)).slice(-2)
         *     }
         *   )
         *   return hexArr.join('');
         * }
         * bl.getBluetoothDevices({
         *   success: function (res) {
         *     console.log(res)
         *     if (res.devices[0]) {
         *       console.log(ab2hex(res.devices[0].advertisData))
         *     }
         *   }
         * })
         */
        getBluetoothDevices: (options: GetBluetoothDevicesOptions) => void;

        /**
         * 获取本机蓝牙适配器状态
         * @platform 基础库 3.73.0+
         * @param options 查询配置
         * @example
         * bl.getBluetoothAdapterState({
         *   success (res) {
         *     console.log(res)
         *   }
         * })
         */
        getBluetoothAdapterState: (
            options: GetBluetoothAdapterStateOptions,
        ) => void;

        /**
         * 监听搜索到新设备的事件
         * @platform 基础库 3.73.0+
         * @param callback 新设备发现回调
         * @example
         * // ArrayBuffer转16进度字符串示例
         * function ab2hex(buffer) {
         *   var hexArr = Array.prototype.map.call(
         *     new Uint8Array(buffer),
         *     function(bit) {
         *       return ('00' + bit.toString(16)).slice(-2)
         *     }
         *   )
         *   return hexArr.join('');
         * }
         * bl.onBluetoothDeviceFound(function(res) {
         *   var devices = res.devices;
         *   console.log('new device list has founded')
         *   console.dir(devices)
         *   console.log(ab2hex(devices[0].advertisData))
         * })
         */
        onBluetoothDeviceFound: (
            callback: BluetoothDeviceFoundCallback,
        ) => void;

        /**
         * 监听蓝牙适配器状态变化事件
         * @platform 基础库 3.73.0+
         * @param callback 状态变化回调
         * @example
         * bl.onBluetoothAdapterStateChange(function (res) {
         *   console.log('adapterState changed, now is', res)
         * })
         */
        onBluetoothAdapterStateChange: (
            callback: BluetoothAdapterStateChangeCallback,
        ) => void;

        /**
         * 取消监听寻找到新设备的事件
         * @platform 基础库 3.73.0+
         * @param callback 要取消的回调函数（不传则取消所有）
         * @example
         * bl.offBluetoothDeviceFound()
         */
        offBluetoothDeviceFound: (
            callback?: BluetoothDeviceFoundCallback,
        ) => void;

        /**
         * 取消监听蓝牙适配器状态变化事件
         * @platform 基础库 3.73.0+
         * @param callback 要取消的回调函数（不传则取消所有）
         * @example
         * bl.offBluetoothAdapterStateChange()
         */
        offBluetoothAdapterStateChange: (
            callback?: BluetoothAdapterStateChangeCallback,
        ) => void;

        /**
         * 查询蓝牙设备是否配对
         * @platform Android、基础库 3.73.0+
         * @param options 查询配置（必填 deviceId）
         */
        isBluetoothDevicePaired: (
            options: IsBluetoothDevicePairedOptions,
        ) => void;

        //#endregion 蓝牙-通用

        //#region 蓝牙-低功耗中心设备

        /**
         * 连接蓝牙低功耗设备
         * @platform 基础库 3.73.0+
         * @description 建议与 closeBLEConnection 成对调用；安卓重复调用可能导致多连接实例
         * @param options 连接配置
         * @example
         * bl.createBLEConnection({
         *   deviceId,
         *   success (res) {
         *     console.log(res)
         *   }
         * })
         */
        createBLEConnection: (options: CreateBLEConnectionOptions) => void;

        /**
         * 断开与蓝牙低功耗设备的连接
         * @platform 基础库 3.73.0+
         * @param options 断开连接配置
         * @example
         * bl.closeBLEConnection({
         *   deviceId,
         *   success (res) {
         *     console.log(res)
         *   }
         * })
         */
        closeBLEConnection: (options: CloseBLEConnectionOptions) => void;

        /**
         * 获取蓝牙低功耗设备所有服务
         * @platform 基础库 3.73.0+
         * @description 需先通过 createBLEConnection 建立连接
         * @param options 查询配置
         * @example
         * bl.getBLEDeviceServices({
         *   // 这里的 deviceId 需要已经通过 bl.createBLEConnection 与对应设备建立连接
         *   deviceId,
         *   success (res) {
         *     console.log('device services:', res.services)
         *   }
         * })
         */
        getBLEDeviceServices: (options: GetBLEDeviceServicesOptions) => void;

        /**
         * 获取蓝牙低功耗设备某个服务的所有特征
         * @platform 基础库 3.73.0+
         * @description 需先通过 getBLEDeviceServices 获取 serviceId
         * @param options 查询配置
         * @example
         * bl.getBLEDeviceCharacteristics({
         *   // 这里的 deviceId 需要已经通过 bl.createBLEConnection 与对应设备建立链接
         *   deviceId,
         *   // 这里的 serviceId 需要在 bl.getBLEDeviceServices 接口中获取
         *   serviceId,
         *   success (res) {
         *     console.log('device getBLEDeviceCharacteristics:', res.characteristics)
         *   }
         * })
         */
        getBLEDeviceCharacteristics: (
            options: GetBLEDeviceCharacteristicsOptions,
        ) => void;

        /**
         * 获取蓝牙低功耗的最大传输单元
         * @platform 基础库 3.73.0+
         * @description 需在 createBLEConnection 成功后调用；iOS MTU 固定，安卓需监听 onBLEMTUChange
         * @param options 查询配置
         * @example
         * bl.getBLEMTU({
         *   deviceId: '',
         *   writeType: 'write',
         *   success (res) {
         *     console.log(res)
         *   }
         * })
         */
        getBLEMTU: (options: GetBLEMTUOptions) => void;

        /**
         * 获取蓝牙低功耗设备的信号强度
         * @platform 基础库 3.73.0+
         * @param options 查询配置
         * @example
         * bl.getBLEDeviceRSSI({
         *   deviceId,
         *   success (res) {
         *     console.log('device RSSI:', res.RSSI)
         *   }
         * })
         */
        getBLEDeviceRSSI: (options: GetBLEDeviceRSSIOptions) => void;

        /**
         * 启用/关闭特征值变化的 notify 功能
         * @platform 基础库 3.73.0+
         * @description 必须特征支持 notify/indicate 才能调用；启用后才能监听 characteristicValueChange 事件
         * @param options 订阅配置
         * @example
         * bl.notifyBLECharacteristicValueChange({
         *   state: true, // 启用 notify 功能
         *   // 这里的 deviceId 需要已经通过 createBLEConnection 与对应设备建立链接
         *   deviceId,
         *   // 这里的 serviceId 需要在 getBLEDeviceServices 接口中获取
         *   serviceId,
         *   // 这里的 characteristicId 需要在 getBLEDeviceCharacteristics 接口中获取
         *   characteristicId,
         *   success (res) {
         *     console.log('notifyBLECharacteristicValueChange success', res.errMsg)
         *   }
         * })
         */
        notifyBLECharacteristicValueChange: (
            options: NotifyBLECharacteristicValueChangeOptions,
        ) => void;

        /**
         * 读取蓝牙低功耗设备特征值的二进制数据
         * @platform 基础库 3.73.0+
         * @description 必须特征支持 read；读取结果需在 onBLECharacteristicValueChange 回调中获取
         * @param options 读取配置
         * @example
         * // 必须在这里的回调才能获取
         * bl.onBLECharacteristicValueChange(function(characteristic) {
         *   console.log('characteristic value comed:', characteristic)
         * })
         * bl.readBLECharacteristicValue({
         *   // 这里的 deviceId 需要已经通过 createBLEConnection 与对应设备建立链接
         *   deviceId,
         *   // 这里的 serviceId 需要在 getBLEDeviceServices 接口中获取
         *   serviceId,
         *   // 这里的 characteristicId 需要在 getBLEDeviceCharacteristics 接口中获取
         *   characteristicId,
         *   success (res) {
         *     console.log('readBLECharacteristicValue:', res.errCode)
         *   }
         * })
         */
        readBLECharacteristicValue: (
            options: ReadBLECharacteristicValueOptions,
        ) => void;

        /**
         * 向蓝牙低功耗设备特征值写入二进制数据
         * @platform 基础库 3.73.0+
         * @description 必须特征支持 write；单次写入建议不超过 20 字节
         * @param options 写入配置
         * @example
         * // 向蓝牙设备发送一个0x00的16进制数据
         * let buffer = new ArrayBuffer(1)
         * let dataView = new DataView(buffer)
         * dataView.setUint8(0, 0)
         * bl.writeBLECharacteristicValue({
         *   // 这里的 deviceId 需要在 getBluetoothDevices 或 onBluetoothDeviceFound 接口中获取
         *   deviceId,
         *   // 这里的 serviceId 需要在 getBLEDeviceServices 接口中获取
         *   serviceId,
         *   // 这里的 characteristicId 需要在 getBLEDeviceCharacteristics 接口中获取
         *   characteristicId,
         *   // 这里的value是ArrayBuffer类型
         *   value: buffer,
         *   success (res) {
         *     console.log('writeBLECharacteristicValue success', res.errMsg)
         *   }
         * })
         */
        writeBLECharacteristicValue: (
            options: WriteBLECharacteristicValueOptions,
        ) => void;

        /**
         * 协商设置蓝牙低功耗的最大传输单元（仅 Android 支持）
         * @platform Android、基础库 3.73.0+
         * @description 仅安卓 5.1+ 有效；MTU 范围 22 < mtu ≤ 512
         * @param options MTU 配置
         * @example
         * // 必须在这里的回调才能获取
         * bl.onBLECharacteristicValueChange(function(characteristic) {
         *   console.log('characteristic value comed:', characteristic)
         * })
         * bl.setBLEMTU({
         *   // 这里的 deviceId 需要已经通过 createBLEConnection 与对应设备建立链接
         *   deviceId,
         *   mtu,
         *   success (res) {
         *     console.log('setBLEMTU:', res.mtu)
         *   }
         * })
         */
        setBLEMTU: (options: SetBLEMTUOptions) => void;

        /**
         * 监听蓝牙低功耗连接状态的改变事件
         * @platform 基础库 3.73.0+
         * @param callback 状态变化回调
         * @example
         * bl.onBLEConnectionStateChange(function(res) {
         *   // 该方法回调中可以用于处理连接意外断开等异常情况
         *   console.log(`device ${res.deviceId} state has changed, connected: ${res.connected}`)
         * })
         */
        onBLEConnectionStateChange: (
            callback: BLEConnectionStateChangeCallback,
        ) => void;

        /**
         * 监听蓝牙低功耗设备的特征值变化事件
         * @platform 基础库 3.73.0+
         * @description 需先调用 notifyBLECharacteristicValueChange 启用订阅
         * @param callback 特征值变化回调
         * @example
         * // ArrayBuffer转16进制字符串示例
         * function ab2hex(buffer) {
         *   let hexArr = Array.prototype.map.call(
         *     new Uint8Array(buffer),
         *     function(bit) {
         *       return ('00' + bit.toString(16)).slice(-2)
         *     }
         *   )
         *   return hexArr.join('');
         * }
         * bl.onBLECharacteristicValueChange(function(res) {
         *   console.log(`characteristic ${res.characteristicId} has changed, now is ${res.value}`)
         *   console.log(ab2hex(res.value))
         * })
         */
        onBLECharacteristicValueChange: (
            callback: BLECharacteristicValueChangeCallback,
        ) => void;

        /**
         * 监听蓝牙低功耗的最大传输单元变化事件（仅 Android 支持）
         * @platform Android、基础库 3.73.0+
         * @param callback MTU 变化回调
         * @example
         * bl.onBLEMTUChange(function (res) {
         *   console.log('bluetooth mtu is', res.mtu)
         * })
         */
        onBLEMTUChange: (callback: BLEMTUChangeCallback) => void;

        /**
         * 取消监听蓝牙低功耗连接状态的改变事件
         * @platform 基础库 3.73.0+
         * @param callback 要取消的回调函数（不传则取消所有）
         * @example
         * bl.offBLEConnectionStateChange()
         */
        offBLEConnectionStateChange: (
            callback?: BLEConnectionStateChangeCallback,
        ) => void;

        /**
         * 取消监听蓝牙低功耗设备的特征值变化事件
         * @platform 基础库 3.73.0+
         * @param callback 要取消的回调函数（不传则取消所有）
         * @example
         * bl.offBLECharacteristicValueChange()
         */
        offBLECharacteristicValueChange: (
            callback?: BLECharacteristicValueChangeCallback,
        ) => void;

        /**
         * 取消监听蓝牙低功耗的最大传输单元变化事件（仅 Android 支持）
         * @platform Android、基础库 3.73.0+
         * @param callback 要取消的回调函数（不传则取消所有）
         * @example
         * bl.offBLEMTUChange()
         */
        offBLEMTUChange: (callback?: BLEMTUChangeCallback) => void;

        //#endregion 蓝牙-低功耗中心设备

        //#region 蓝牙-低功耗外围设备

        /**
         * 建立本地作为蓝牙低功耗外围设备的服务端（可创建多个）
         * @platform 基础库 3.73.0+
         * @param options 创建配置
         * @example
         * bl.createBLEPeripheralServer({
         *   success (res) {
         *     console.log(res)
         *   }
         * })
         */
        createBLEPeripheralServer: (
            options: CreateBLEPeripheralServerOptions,
        ) => void;

        /**
         * 监听当前外围设备被连接或断开连接事件（仅 Android 支持）
         * @platform Android、基础库 3.73.0+
         * @param callback 连接状态变化回调
         * @example
         * bl.onBLEPeripheralConnectionStateChanged(function (res) {
         *   console.log('bluetooth state changed', res)
         * })
         */
        onBLEPeripheralConnectionStateChanged: (
            callback: BLEPeripheralConnectionStateChangedCallback,
        ) => void;

        /**
         * 取消监听当前外围设备被连接或断开连接事件
         * @platform 基础库 3.73.0+
         * @param callback 要取消的回调函数（不传则取消所有）
         * @example
         * bl.offBLEPeripheralConnectionStateChanged()
         */
        offBLEPeripheralConnectionStateChanged: (
            callback?: BLEPeripheralConnectionStateChangedCallback,
        ) => void;

        //#endregion 蓝牙-低功耗外围设备

        //#region 电量

        /**
         * 获取设备电量（同步版本）
         * @platform 基础库 3.20.0+（isLowPowerMode 字段）
         * @returns 设备电量信息
         */
        getBatteryInfoSync: () => BatteryInfoResult;

        /**
         * 获取设备电量（异步版本）
         * @platform 基础库 3.20.0+（isLowPowerMode 字段）
         * @param options 异步配置参数
         */
        getBatteryInfo: (options: GetBatteryInfoOptions) => void;

        //#endregion 电量

        //#region 剪切板

        /**
         * 设置系统剪贴板的内容
         * @platform 基础库通用
         * @param options 剪贴板设置配置（必填 data 字段）
         * @example
         * bl.setClipboardData({
         *   data: 'data',
         *   success(res) {
         *     bl.getClipboardData({
         *       success(res) {
         *         console.log(res.data) // data
         *       }
         *     })
         *   }
         * })
         */
        setClipboardData: (options: SetClipboardDataOptions) => void;

        /**
         * 获取系统剪贴板的内容
         * @platform 基础库通用
         * @param options 剪贴板获取配置
         * @example
         * bl.getClipboardData({
         *   success(res) {
         *     console.log(res.data)
         *   }
         * })
         */
        getClipboardData: (options: GetClipboardDataOptions) => void;

        //#endregion 剪切板

        //#region 设备方向

        /**
         * 监听设备方向变化事件
         * @platform 基础库通用
         * @description 频率由 startDeviceMotionListening 的 interval 参数控制
         * @param callback 设备方向变化回调
         */
        onDeviceMotionChange: (callback: DeviceMotionChangeCallback) => void;

        /**
         * 取消监听设备方向变化事件
         * @platform 基础库通用
         * @param callback 要取消的回调（不传则取消所有）
         */
        offDeviceMotionChange: (callback?: DeviceMotionChangeCallback) => void;

        /**
         * 开始监听设备方向的变化
         * @platform 基础库通用
         * @param options 监听配置（含回调频率）
         */
        startDeviceMotionListening: (
            options?: StartDeviceMotionListeningOptions,
        ) => void;

        /**
         * 停止监听设备方向的变化
         * @platform 基础库通用
         * @param options 停止监听配置
         */
        stopDeviceMotionListening: (
            options?: StopDeviceMotionListeningOptions,
        ) => void;

        /**
         * 设置当前设备方向
         * @platform 基础库 3.6.0+、iOS/Android App 6.0.0+
         * @param options 方向配置（必填 newValue）
         */
        setDeviceOrientation: (options: SetDeviceOrientationOptions) => void;

        /**
         * 根据 game.json 配置恢复当前设备方向
         * @platform 基础库通用
         * @param options 恢复配置
         */
        restoreDeviceOrientation: (
            options?: RestoreDeviceOrientationOptions,
        ) => void;

        /**
         * 获取当前设备方向（同步接口）
         * @platform 基础库通用
         * @returns 设备方向（portrait/landscape）
         */
        getDeviceOrientationSync: () => DeviceOrientation;

        //#endregion 设备方向

        //#region 网络

        /**
         * 监听网络状态变化事件
         * @platform 基础库通用（5g 字段 3.20.0+ 支持）
         * @param callback 网络状态变化回调
         * @example
         * bl.onNetworkStatusChange(function (res) {
         *   console.log(res.isConnected)
         *   console.log(res.networkType)
         * })
         */
        onNetworkStatusChange: (callback: NetworkStatusChangeCallback) => void;

        /**
         * 获取网络类型
         * @platform 基础库通用（5g 字段 3.20.0+ 支持）
         * @param options 获取网络类型配置
         * @example
         * bl.getNetworkType({
         *   success(res) {
         *     const networkType = res.networkType
         *   }
         * })
         */
        getNetworkType: (options?: GetNetworkTypeOptions) => void;

        //#endregion 网络

        //#region 震动

        /**
         * 使手机发生较长时间的振动（400ms）
         * @platform 基础库通用
         * @param options 振动配置
         */
        vibrateLong: (options?: VibrateLongOptions) => void;

        /**
         * 使手机发生较短时间的振动（15ms）
         * @platform 基础库通用（仅 iPhone 7/7 Plus 以上及 Android 机型生效）
         * @param options 振动配置
         */
        vibrateShort: (options?: VibrateShortOptions) => void;

        //#endregion 震动

        //#region 性能

        /**
         * 监听内存不足告警事件
         * @platform 基础库 2.4.0+
         * @description iOS/Android 均触发回调，但 level 字段仅 Android 有效；收到告警后建议回收不必要资源
         * @param callback 内存告警回调函数
         * @example
         * bl.onMemoryWarning(function() {
         *     console.log('onMemoryWarningReceive');
         * })``;
         */
        onMemoryWarning: (callback: MemoryWarningCallback) => void;

        //#endregion 性能

        //#region 屏幕

        /**
         * 设置屏幕亮度
         * @platform 基础库通用
         * @param options 亮度配置（必填 value 字段，范围 0~1）
         */
        setScreenBrightness: (options: SetScreenBrightnessOptions) => void;

        /**
         * 设置屏幕常亮状态
         * @platform 基础库通用
         * @description 仅当前小游戏生效，离开小游戏后设置失效
         * @param options 常亮配置（必填 keepScreenOn 字段）
         * @example
         * bl.setKeepScreenOn({
         *   keepScreenOn: true
         * })
         */
        setKeepScreenOn: (options: SetKeepScreenOnOptions) => void;

        /**
         * 获取屏幕亮度
         * @platform 基础库通用
         * @description Android 自动亮度模式下仅返回调节前的值，非实时亮度值
         * @param options 亮度获取配置
         */
        getScreenBrightness: (options?: GetScreenBrightnessOptions) => void;

        /**
         * 监听用户主动截屏事件
         * @platform 基础库 3.22.0+
         * @description 用户使用系统截屏按键时触发，仅能注册一个监听
         * @param callback 截屏事件回调
         * @example
         * bl.onUserCaptureScreen(function (res) {
         *   console.log('用户截屏了')
         * })
         */
        onUserCaptureScreen: (callback: UserCaptureScreenCallback) => void;

        /**
         * 显示/隐藏顶部状态栏
         * @platform 基础库 3.37.0+
         * @param options 状态栏配置（必填 hidden 字段）
         * @example
         * bl.setStatusBarHidden({
         *     hidden: true,
         * });
         */
        setStatusBarHidden: (options: SetStatusBarHiddenOptions) => void;

        //#endregion 屏幕

        //#region 加速计

        /**
         * 开始监听加速度数据
         * @platform 基础库通用
         * @description 调用后会自动开始监听，频率由 interval 参数控制
         * @param options 监听配置（含回调频率）
         * @example
         * bl.startAccelerometer({ interval: 'game' })
         */
        startAccelerometer: (options?: StartAccelerometerOptions) => void;

        /**
         * 停止监听加速度数据
         * @platform 基础库通用
         * @param options 停止监听配置
         * @example
         * bl.stopAccelerometer()
         */
        stopAccelerometer: (options?: StopAccelerometerOptions) => void;

        /**
         * 监听加速度数据事件
         * @platform 基础库通用
         * @description 频率由 startAccelerometer 的 interval 参数决定
         * @param callback 加速度数据回调函数
         * @example
         * bl.onAccelerometerChange(callback)
         */
        onAccelerometerChange: (callback: AccelerometerChangeCallback) => void;

        /**
         * 取消监听加速度数据事件
         * @platform 基础库通用
         * @param callback 要取消的回调（不传则取消所有）
         */
        offAccelerometerChange: (
            callback?: AccelerometerChangeCallback,
        ) => void;

        //#endregion 加速计

        //#region 罗盘

        /**
         * 开始监听罗盘数据
         * @platform 基础库通用
         * @description 调用后自动开始监听，频率固定为 5 次/秒
         * @param options 监听配置
         * @example
         * bl.startCompass()
         */
        startCompass: (options?: StartCompassOptions) => void;

        /**
         * 停止监听罗盘数据
         * @platform 基础库通用
         * @param options 停止监听配置
         * @example
         * bl.stopCompass()
         */
        stopCompass: (options?: StopCompassOptions) => void;

        /**
         * 监听罗盘数据变化事件
         * @platform 基础库通用
         * @description 频率固定为 5 次/秒，调用后自动开始监听
         * @param callback 罗盘数据回调函数
         * @example
         * bl.onCompassChange(callback)
         */
        onCompassChange: (callback: CompassChangeCallback) => void;

        /**
         * 取消监听罗盘数据变化事件
         * @platform 基础库通用
         * @param callback 要取消的回调（不传则取消所有）
         */
        offCompassChange: (callback?: CompassChangeCallback) => void;

        //#endregion 罗盘

        //#region 陀螺仪

        /**
         * 开始监听陀螺仪数据
         * @platform 基础库通用
         * @description 回调频率由 interval 参数控制（game:20ms/次、ui:60ms/次、normal:200ms/次）
         * @param options 监听配置（含回调频率）
         */
        startGyroscope: (options?: StartGyroscopeOptions) => void;

        /**
         * 停止监听陀螺仪数据
         * @platform 基础库通用
         * @param options 停止监听配置
         * @example
         * bl.stopGyroscope()
         */
        stopGyroscope: (options?: StopGyroscopeOptions) => void;

        /**
         * 监听陀螺仪数据变化事件
         * @platform 基础库通用
         * @description 频率由 startGyroscope 的 interval 参数决定
         * @param callback 陀螺仪数据回调函数
         * @example
         * bl.onGyroscopeChange(callback)
         */
        onGyroscopeChange: (callback: GyroscopeChangeCallback) => void;

        /**
         * 取消监听陀螺仪数据变化事件
         * @platform 基础库通用
         * @param callback 要取消的回调（不传则取消所有）
         */
        offGyroscopeChange: (callback?: GyroscopeChangeCallback) => void;

        //#endregion 陀螺仪

        //#endregion 设备

        //#region 开放接口

        //#region 小游戏跳转

        /**
         * 打开另一个小游戏
         * @platform 基础库通用
         * @description 1. 需要用户确认跳转，取消则回调 fail(cancel)；2. 目标 appId 需在配置名单内（≤10 个），否则回调 fail(appId 不在列表)；3. 仅当前小游戏为开发/体验版时 envVersion 生效
         * @param options 跳转配置（必填 appId/vAppId）
         * @example
         * bl.navigateToMiniProgram({
         *   appId: '',
         *   path: 'page/index/index?id=123',
         *   extraData: {
         *     foo: 'bar'
         *   },
         *   success(res) {
         *     // 打开成功
         *   }
         * })
         */
        navigateToMiniProgram: (options: NavigateToMiniProgramOptions) => void;

        //#endregion 小游戏跳转

        //#region APP更新

        /**
         * 更新哔哩哔哩版本
         * @platform iOS 基础库 3.22.0+、Android 基础库 3.23.0+
         * @description 触发哔哩哔哩客户端的版本更新流程，具体更新逻辑由客户端处理
         * @param options 更新配置
         * @example
         * bl.updateApp({
         *     success: function() {
         *         console.log('updateApp success')
         *     },
         *     fail: function() {
         *         console.log('updateApp fail')
         *     },
         *     complete: function() {
         *         console.log('updateApp complete')
         *     }
         * })
         */
        updateApp: (options?: UpdateAppOptions) => void;

        //#endregion APP更新

        //#region 跳转站内链接

        /**
         * 小游戏跳转站内链接
         * @platform 基础库 2.5.0+（低版本需做兼容处理）
         * @description 跳转链接为固定格式（如 bilibili://game_center），需联系小游戏运营同学获取合法链接
         * @param options 跳转配置（必填 path 字段）
         * @example
         * bl.openURL({
         *     path: 'bilibili://game_center',
         *     success() {
         *         console.log('success');
         *     },
         *     fail() {
         *         console.log('fail');
         *     },
         * });
         */
        openURL: (options: OpenURLOptions) => void;

        //#endregion 跳转站内链接

        //#region 跳转站内视频链接

        /**
         * 小游戏跳转站内视频播放页
         * @platform 基础库通用
         * @description 支持指定视频 id 和集数，跳转至B站站内视频播放页面
         * @param options 跳转配置（必填 id 字段）
         * @example
         * bl.openVideoDetail({
         *   id: "87880470",
         *   options: {
         *     p: 2 //视频选集第二集
         *   },
         *   success() {
         *     console.log("success");
         *   },
         *   fail() {
         *     console.log("fail");
         *   },
         *   complete() {
         *     console.log("complete");
         *   }
         * });
         */
        openVideoDetail: (options: OpenVideoDetailOptions) => void;

        //#endregion 跳转站内视频链接

        //#region 用户信息

        /**
         * 获取用户信息
         * @platform 基础库通用
         * @description withCredentials=true 时需已登录且登录态未过期，返回 encryptedData/iv；false 时无敏感信息
         * @param options 获取用户信息配置
         * @example
         * // 检查登录态是否过期
         * bl.checkSession({
         *     success() {
         *         // 如果登录态未失效，可以直接调用 getUserInfo 获取头像昵称等
         *         bl.getUserInfo({
         *             success(res) {
         *                 console.log(res.userInfo);
         *             }
         *         });
         *     },
         *     fail() {
         *         // 如果登录态失效，重新登录
         *         bl.login({
         *             success() {
         *                 bl.getUserInfo({
         *                     success(res) {
         *                         console.log(res.userInfo);
         *                     }
         *                 });
         *             },
         *             fail() {}
         *         })
         *     }
         * });
         */
        getUserInfo: (options?: GetUserInfoOptions) => void;

        /**
         * 创建用户信息按钮
         * @platform 基础库 2.3.0+（低版本需兼容）
         * @param options 按钮配置
         * @returns 用户信息按钮实例
         * @example
         * const button = bl.createUserInfoButton({
         *     type: 'text',
         *     text: '获取用户信息',
         *     style: {
         *         left: 0,
         *         top: 0,
         *         width: 200,
         *         height: 40,
         *         color: '#0000ff',
         *         backgroundColor: '#ff0000',
         *         borderColor: '#000000',
         *         borderWidth: 1,
         *         borderRadius: 4,
         *         textAlign: 'center',
         *         fontSize: 16,
         *         lineHeight: 40,
         *     },
         *     withCredentials: false,
         * });
         * button.onTap(res => {
         *     console.log(res);
         * });
         */
        createUserInfoButton: (
            options: CreateUserInfoButtonOptions,
        ) => UserInfoButton;

        /**
         * 监听实名认证状态完成事件
         * @platform Android、基础库 3.99.6+（低版本需兼容）
         * @description 用户未实名时打开游戏弹实名框，操作后触发回调；返回值用于配置弹窗文案
         * @param callback 实名认证状态回调（必填）
         * @example
         * bl.onRealNameAuthenticationComplete((res) => {
         *     console.log('获取实名认证状态:', res.status);
         *     return {
         *         title: '有礼待领取哦',
         *         content: '完成实名认证即可畅玩小游戏～每日都有礼包可领取～确认离开吗？',
         *         giftImgUrl: '//i0.hdslb.com/bfs/activity-plat/static/20240424/7b925ef85373a2241dca64f5ae8d938b/TgHwcHTp1L.jpg',
         *         cancelText:'认证领礼包',
         *         confirmText:'离开小游戏'
         *     };
         * });
         */
        onRealNameAuthenticationComplete: (
            callback: RealNameAuthCallback,
        ) => void;

        //#endregion 用户信息

        //#region 关注

        /**
         * 获取当前小游戏是否被用户关注过
         * @platform 基础库 2.3.0+（低版本需做兼容处理）
         * @param options 接口配置
         * @example
         * bl.getGameFollowingStatus({
         *     success(res) {
         *         console.log('success', res.follow);
         *     },
         *     fail(res) {
         *         console.log('fail', res);
         *     },
         *     complete(res) {
         *         console.log('complete', res);
         *     },
         * });
         */
        getGameFollowingStatus: (
            options?: GetGameFollowingStatusOptions,
        ) => void;

        /**
         * 注册胶囊菜单关注事件
         * @platform 基础库 3.0.0+（低版本需做兼容处理）
         * @description 仅在用户关注成功时触发，取消关注/关注失败不触发
         * @param callback 关注成功回调
         * @example
         * bl.onGameFollowedFromMenu(function() {
         *   console.log("game followed");
         * });
         */
        onGameFollowedFromMenu: (
            callback: GameFollowedFromMenuCallback,
        ) => void;

        /**
         * 取消注册胶囊菜单关注事件
         * @platform 基础库 3.8.0+（低版本需做兼容处理）
         * @param callback 要取消的回调（不传则取消所有）
         */
        offGameFollowedFromMenu: (
            callback?: GameFollowedFromMenuCallback,
        ) => void;

        /**
         * 获取当前小游戏对应UP主是否被用户关注过
         * @platform 基础库 3.0.0+（低版本需做兼容处理）
         * @description UP主默认为小游戏绑定的管理员，修改需联系运营
         * @param options 接口配置
         * @example
         * bl.getGameUpperFollowingStatus({
         *   success(res) {
         *     console.log("success", res.follow);
         *   },
         *   fail() {
         *     console.log("fail");
         *   },
         *   complete() {
         *     console.log("complete");
         *   }
         * });
         */
        getGameUpperFollowingStatus: (
            options?: GetGameUpperFollowingStatusOptions,
        ) => void;

        /**
         * 关注当前小游戏对应的UP主
         * @platform 基础库 3.0.0+（低版本需做兼容处理）
         * @description 1. 需在 getGameUpperFollowingStatus 成功回调内调用；2. UP主默认为小游戏绑定的管理员，修改需联系运营
         * @param options 接口配置
         * @example
         * bl.getGameUpperFollowingStatus({
         *   success(res) {
         *     // 在bl.getGameUpperFollowingStatus的成功回调内调用
         *     if (!res.follow) {
         *       bl.followGameUpper({
         *         success(res) {
         *           console.log("success");
         *         },
         *         fail(res) {
         *           console.log("fail");
         *         },
         *         complete(res) {
         *           console.log("complete");
         *         }
         *       });
         *     }
         *   }
         * });
         */
        followGameUpper: (options?: FollowGameUpperOptions) => void;

        //#endregion 关注

        //#region 邀请

        /**
         * 获取邀请新用户赠大会员活动列表
         * @platform 开放数据域、基础库通用
         * @description 1. 仅开放数据域可用；2. 调用前需已调用 bl.login（建议 onLaunch 中调用）；3. start/end 为 13 位时间戳
         * @param options 接口配置（必填 start/end）
         * @example
         * // 开放域中
         * bl.getInvitationData({
         *   start: new Date(2019, 11, 3, 19, 15, 28).getTime(), // 2019年12月3日 19:15:28
         *   end: Date.now(),
         *   success(res) {
         *     console.log(res);
         *   },
         *   fail() {},
         *   complete() {}
         * });
         */
        getInvitationData: (options: GetInvitationDataOptions) => void;

        /**
         * 获取指定邀请赠大会员活动详情
         * @platform 开放数据域、基础库通用
         * @description 1. 仅开放数据域可用；2. 调用前需已调用 bl.login；3. pageSize 最大 100，默认 10；pageNum 默认 1
         * @param options 接口配置（必填 activityId）
         * @example
         * // 开放域中
         * bl.getInvitationDetail({
         *   activityId: 123456,
         *   pageSize: 20,
         *   pageNum: 3,
         *   success(res) {
         *     console.log(res);
         *   },
         *   fail() {},
         *   complete() {}
         * });
         */
        getInvitationDetail: (options: GetInvitationDetailOptions) => void;

        /**
         * 领取邀请赠大会员活动奖励
         * @platform 开放数据域、基础库通用
         * @description 1. 仅开放数据域可用；2. 调用前需已调用 bl.login；3. activityId 从 getInvitationData 返回
         * @param options 接口配置（必填 activityId）
         * @example
         * // 开放域中
         * bl.getInvitationReward({
         *   activityId: 123456, // 活动 id，可以从 bl.getInvitationData 返回信息中获取
         *   success(res) {
         *     console.log(res);
         *   },
         *   fail() {},
         *   complete() {}
         * });
         */
        getInvitationReward: (options: GetInvitationRewardOptions) => void;

        //#endregion 邀请

        //#region 赠送头像框

        /**
         * 小游戏内赠送头像框
         * @platform 基础库通用
         * @description 1. 调用前需已成功调用 bl.login（建议在 onLaunch 生命周期内调用）；2. activityId 为挂件发放活动唯一 id，需联系运营同学获取；3. expire 为挂件使用时间（单位：天），需联系运营同学获取
         * @param options 赠送头像框配置（必填 activityId/expire）
         * @example
         * bl.presentPendant({
         *   activityId: 123456,
         *   expire: 5,
         *   success() {
         *     console.log("赠送挂件成功");
         *   },
         *   fail() {}
         * });
         */
        presentPendant: (options: PresentPendantOptions) => void;

        //#endregion 赠送头像框

        //#region 登录

        /**
         * 检查登录态是否过期
         * @platform 基础库通用
         * @description 1. 登录态时效性由B站维护，开发者仅需检测有效性；2. 成功=session_key 未过期，失败=已过期需重新登录；3. 登录态在小游戏生命周期内有效（未过期时）
         * @param options 接口配置
         * @example
         * bl.checkSession({
         *   success() {
         *     // session_key 未过期，并且在本生命周期一直有效
         *   },
         *   fail() {
         *     // session_key 已经失效，需要重新执行登录流程
         *     bl.login() // 重新登录
         *   }
         * })
         */
        checkSession: (options?: CheckSessionOptions) => void;

        /**
         * 调用接口获取登录凭证（code）
         * @platform 基础库通用
         * @description 1. code 有效期5分钟，需在服务端调用 code2Session 换取 openid/session_key；2. 用户数据加解密依赖 session_key；3. 登录态失效后需重新调用此接口
         * @param options 接口配置
         * @example
         * bl.login({
         *   success(res) {
         *     if (res.code) {
         *       // 发起网络请求
         *       bl.request({
         *         url: 'https://test.com/onLogin',
         *         data: {
         *           code: res.code
         *         }
         *       })
         *     } else {
         *       console.log('登录失败！' + res.errMsg)
         *     }
         *   }
         */
        login: (options?: LoginOptions) => void;

        //#endregion 登录

        //#region 授权

        /**
         * 提前向用户发起授权请求
         * @platform 基础库通用
         * @description 1. 未授权时弹窗询问，已授权则直接返回成功；2. 仅发起授权请求，不实际调用对应功能接口；3. 建议先通过 bl.getSetting 查询授权状态
         * @param options 授权配置（必填 scope）
         * @example
         * // 可以通过 bl.getSetting 先查询一下用户是否授权了 "scope.record" 这个 scope
         * bl.getSetting({
         *   success(res) {
         *     if (!res.authSetting['scope.record']) {
         *       bl.authorize({
         *         scope: 'scope.record',
         *         success() {
         *           // 用户已经同意小游戏使用录音功能，后续调用 bl.startRecord 接口不会弹窗询问
         *           bl.startRecord()
         *         }
         *       })
         *     }
         *   }
         * })
         */
        authorize: (options: AuthorizeOptions) => void;

        //#endregion 授权

        //#region 设置

        /**
         * 调起客户端小游戏设置界面
         * @platform 基础库通用
         * @description 设置界面仅显示小游戏已向用户请求过的权限，返回用户设置操作结果
         * @param options 接口配置
         * @example
         * bl.openSetting({
         *   success(res) {
         *     console.log(res.authSetting)
         *     // res.authSetting = {
         *     //   "scope.userInfo": true,
         *     //   "scope.userLocation": true
         *     // }
         *   }
         * })
         */
        openSetting: (options?: OpenSettingOptions) => void;

        /**
         * 获取用户的当前设置
         * @platform 基础库通用
         * @description 返回值仅包含小游戏已向用户请求过的权限
         * @param options 接口配置
         * @example
         * bl.openSetting({
         *   success(res) {
         *     console.log(res.authSetting)
         *     // res.authSetting = {
         *     //   "scope.userInfo": true,
         *     //   "scope.userLocation": true
         *     // }
         *   }
         * })
         */
        getSetting: (options?: GetSettingOptions) => void;

        /**
         * 创建打开设置页面的按钮
         * @platform 基础库 2.3.0+（低版本需做兼容处理）
         * @param options 按钮配置
         * @returns 打开设置页面按钮实例
         * @example
         * const button = bl.createOpenSettingButton({
         *     type: 'text',
         *     text: '打开设置页面',
         *     style: {
         *         left: 0,
         *         top: 0,
         *         width: 200,
         *         height: 40,
         *         color: '#0000ff',
         *         backgroundColor: '#ff0000',
         *         borderColor: '#000000',
         *         borderWidth: 1,
         *         borderRadius: 4,
         *         textAlign: 'center',
         *         fontSize: 16,
         *         lineHeight: 40,
         *     },
         * });
         * button.onTap(res => {
         *     console.log(res);
         * });
         */
        createOpenSettingButton: (
            options: CreateOpenSettingButtonOptions,
        ) => OpenSettingButton;

        //#endregion 设置

        //#region 小游戏互跳

        /**
         * 展示用于小游戏互跳的按钮（同步方法）
         * @platform 基础库 2.2.0+（低版本需做兼容处理）
         * @description 1. 同步方法，调用失败会抛出异常，建议用 try/catch 包裹；2. 需先在后台配置互跳小游戏名单；3. 仅支持配置按钮的 top/left 位置偏移
         * @param options 按钮位置配置（top/left 均为可选）
         * @throws 调用失败时抛出异常（如未配置互跳名单、低版本不支持等）
         * @example
         * bl.showGameListButton({ top: 0, left: 0 });
         */
        showGameListButton: (options?: ShowGameListButtonOptions) => void;

        /**
         * 隐藏已经展示的小游戏互跳按钮（同步方法）
         * @platform 基础库 2.2.0+（低版本需做兼容处理）
         * @description 1. 同步方法，调用失败会抛出异常，建议用 try/catch 包裹；2. 仅能隐藏已通过 showGameListButton 展示的按钮
         * @throws 调用失败时抛出异常（如未展示按钮、低版本不支持等）
         * @example
         * bl.closeGameListButton();
         */
        closeGameListButton: () => void;

        //#endregion 小游戏互跳

        //#region  预约游戏

        /**
         * 获取预约游戏管理器
         * @platform 基础库 2.9.0+（低版本需做兼容处理）
         * @returns 游戏预约管理器实例
         * @example
         * // 获取游戏预约管理器
         * const reserveManager = bl.getGameReserveManager();
         * // 查询预约信息
         * reserveManager.getReserveInfo({
         *   success(res) {
         *     console.log(res.state);
         *     console.log(res.gameName);
         *   },
         *   fail() {
         *     console.log("reserve game fail...");
         *   }
         * });
         * // ...
         * // 成功查询预约信息后，用户触发执⾏预约
         * reserveManager.reserve({
         *   success(res) {
         *     console.log(res.state);
         *   },
         *   fail(res) {
         *     console.log(res);
         *   }
         * });
         */
        getGameReserveManager: () => GameReserveManager;

        //#endregion 预约游戏

        //#region 手游下载

        /**
         * 获取关联游戏管理器
         * @platform Android、基础库 3.14.0+、App 6.8.0+（iOS 暂不支持，低版本需兼容）
         * @returns 关联游戏管理器实例
         * @example
         * // 获取关联游戏管理器
         * var relatedGameManager = bl.getRelatedGameManager();
         * // 查询关联游戏下载信息
         * relatedGameManager.getDownloadInfo({
         *     success(res) {
         *         // 下载状态：
         *         // 1 ⽆可下载的⼿游
         *         // 2 已下载
         *         // 3 未下载
         *         console.log(res.state);
         *         // 可下载⼿游的名称
         *         console.log(res.gameName);
         *         // 打开关联⼿游详情⻚
         *         // Error Codes:
         *         // 1005 - ⽆可下载游戏
         *         // 1006 - 未执⾏下载信息查询
         *         relatedGameManager.showDownloadDetailPage({
         *             success(res) {
         *                 // 0 未下载过
         *                 // 1 已下载过
         *                 console.log(res.state);
         *             },
         *             fail(res) {
         *                 console.log(res.errCode);
         *                 console.log(res.errMsg);
         *             },
         *             complete(res) {}
         *         });
         *     },
         *     fail(res) {
         *         console.log(res.errMsg);
         *     },
         *     complete(res) {}
         * });
         */
        getRelatedGameManager: () => RelatedGameManager;

        //#endregion 手游下载

        //#region 支付

        /**
         * 发起充值请求
         * @platform App >=8.56.0、SDK_Version >=4.2.2（2025年8月15日后低版本不支持支付）
         * @description 1. 使用前需开通支付权限（申请地址：https://open.biligame.com/#/game/game-mng/game-list）；2. 需从B站游戏开放平台获取支付信息（access-token/access-key）；3. 参数完全透传服务端创建订单接口返回的数据；4. 调用前需完成用户登录+服务端创建订单
         * @param options 充值请求配置（包含透传参数+必填的 success 回调）
         * @example
         * // 第一步：请联系运营确保当前 小游戏对应的 AppID 已经开通支付能力
         * // 第二步：小游戏登录获取 code
         * bl.login({
         *   success({ code }) {
         *     // 第三步请求业务服务端 生成订单
         *     //  1. 服务端请求获取 openid，根据移动端请求提供的 code 作为 js_code 参数请求 code2session 接口， 参考文档： http://miniapp.bilibili.com/small-game-doc/open/login/#code2session
         *     //  2. 服务端完成参数签名并调用下单接口，参考支付指南文档接口 http://miniapp.bilibili.com/small-game-doc/open/recharge/Recharge/，需注意不参与签名的参数
         *     bl.request({
         *       url: "https://xxx.com/", // 各业务服务端接口
         *       method: "",
         *       header: {},
         *       data: {
         *         code, // 需携带 code 参数供后端服务使用
         *       },
         *       success(res) {
         *         // 下单成功
         *         // 第四步：前端调起支付
         *         bl.requestRecharge({
         *           ...res, // 透传后端返回的数据
         *           success(res) {
         *             console.log(res.code, res.msg); // 成功情况 code 是 0
         *           },
         *           fail(e) {
         *             console.error(e.code, e.msg);
         *           },
         *         });
         *       },
         *       fail(res) {
         *         // 业务后端接口访问失败
         *       },
         *     });
         *   },
         * });
         */
        requestRecharge: (options: RequestRechargeOptions) => void;

        //#endregion 支付

        //#region 开放数据域名

        /**
         * 获取当前用户托管数据（仅开放数据域可用）
         * @platform 开放数据域、基础库通用
         * @description 1. 仅开放数据域可用；2. 调用前需已调用 bl.login；3. 每个用户最多128个KV对
         * @param options 接口配置（必填 keyList）
         */
        getUserCloudStorage: (options: GetUserCloudStorageOptions) => void;

        /**
         * 删除用户托管数据
         * @platform 基础库通用
         * @description 调用前需已调用 bl.login
         * @param options 接口配置（必填 keyList）
         */
        removeUserCloudStorage: (
            options: RemoveUserCloudStorageOptions,
        ) => void;

        /**
         * 写入用户托管数据
         * @platform 基础库通用
         * @description 1. 调用前需已调用 bl.login；2. KVData 需包含 order 字段；3. key+value长度≤1024字节
         * @param options 接口配置（必填 KVDataList）
         */
        setUserCloudStorage: (options: SetUserCloudStorageOptions) => void;

        /**
         * 拉取当前用户所有关注用户的托管数据（仅开放数据域可用）
         * @platform 开放数据域、基础库通用
         * @description 1. 仅开放数据域可用；2. 调用前需已调用 bl.login
         * @param options 接口配置（必填 keyList）
         */
        getFollowingCloudStorage: (
            options: GetFollowingCloudStorageOptions,
        ) => void;

        /**
         * 获取所有成员的游戏数据（仅开放数据域可用）
         * @platform 开放数据域、基础库通用
         * @description 1. 仅开放数据域可用；2. 调用前需已调用 bl.login；3. 按 order 倒序取前100名
         * @param options 接口配置（必填 keyList）
         */
        getAllCloudStorage: (options: GetAllCloudStorageOptions) => void;

        /**
         * 获取开放数据域
         * @platform 基础库通用
         * @returns 开放数据域实例
         */
        getOpenDataContext: () => OpenDataContext;

        /**
         * 关注排行榜用户（仅开放数据域可用）
         * @platform 开放数据域、基础库 2.5.0+（低版本需兼容）
         * @description 1. 仅开放数据域可用；2. 需在 getAllCloudStorage 成功获取排行榜后调用
         * @param options 接口配置（必填 data）
         * @example
         * // 开放域中
         * let dataList = []; // 用来保存所获取的排行榜数据
         *
         * bl.getAllCloudStorage({
         *     keyList: ['score2', 'score1'],
         *     success(res) {
         *         dataList = res.data[0].singleUserGameDataList;
         *     },
         * });
         *
         * function follow(n) {
         *     bl.followCloudUpper({
         *         data: dataList[n], // 想要关注的用户所对应的数据块
         *         success(res) {
         *             console.info('follow success', res);
         *         },
         *         fail(res) {
         *             console.info('follow fail', res);
         *         },
         *     });
         * }
         */
        followCloudUpper: (options: FollowCloudUpperOptions) => void;

        /**
         * 监听主域发送的消息（开放数据域内调用）
         * @platform 开放数据域、基础库通用
         * @param callback 消息回调函数
         */
        onMessage: (
            callback: (message: {
                [key: string]:
                    | PrimitiveValue
                    | { [key: string]: PrimitiveValue };
            }) => void,
        ) => void;

        //#endregion 开放数据域名

        //#region 订阅消息

        /**
         * 调起客户端小游戏订阅消息界面
         * @platform 基础库 3.1.0+（低版本需做兼容处理）
         * @description 1. 仅面向已上架游戏（首次上架接入会被驳回）；2. 首次接入版本更新订阅卡不可勾选【大版本】；3. 需用户点击/支付后调起；4. 单次最多订阅5条模板；5. 冷启仅能弹1次订阅面板；6. 用户勾选"不再询问"后模板会进入设置页
         * @param options 订阅配置（必填 tmplIds）
         * @example
         * bl.onTouchEnd(() => {
         *   bl.requestSubscribeMessage({
         *     tmplIds: [""],
         *     success(res) {}
         *   });
         * });
         *
         * bl.requestRecharge({
         *   complete() {
         *     bl.requestSubscribeMessage({
         *       tmplIds: [""],
         *       success(res) {}
         *     });
         *   }
         * });
         */
        requestSubscribeMessage: (
            options: RequestSubscribeMessageOptions,
        ) => void;

        //#endregion 订阅消息

        //#region 意见反馈

        /**
         * 创建打开意见反馈页面的按钮
         * @platform 基础库 2.3.0+（低版本需做兼容处理）
         * @description 1. type=image 时背景贴图会拉伸至按钮宽高；2. lineHeight 在 iOS/Android 均不起作用；3. 颜色值支持 hex 码和预设颜色名
         * @param options 按钮配置参数
         * @returns 意见反馈按钮实例
         * @example
         * let button = bl.createFeedbackButton({
         *   type: 'text',
         *   text: '打开意见反馈页面',
         *   style: {
         *     left: 10,
         *     top: 76,
         *     width: 200,
         *     height: 40,
         *     lineHeight: 40,
         *     backgroundColor: '#ff0000',
         *     color: '#ffffff',
         *     textAlign: 'center',
         *     fontSize: 16,
         *     borderRadius: 4
         *   }
         * })
         */
        createFeedbackButton: (
            options?: CreateFeedbackButtonOptions,
        ) => FeedbackButton;

        //#endregion 意见反馈

        //#region 角色创建上报

        /**
         * 角色创建后上报角色信息
         * @platform 基础库通用
         * @description 1. 用户进入游戏服务区、角色创建后调用；2. 重复创建会返回 83000005 错误码；3. serverId/serverName/roleId 为必填项
         * @param options 角色上报配置（必填 serverId/serverName/roleId）
         * @example
         * bl.createRole({
         *     serverId: '1234',
         *     serverName: 'b站服一区',
         *     roleId: '123456',
         *     success: function(res){
         *         console.log(res, 'success')
         *     },
         *     fail: function(err){
         *         console.log(err, 'fail')
         *     }
         * })
         */
        createRole: (options: CreateRoleOptions) => void;

        //#endregion 角色创建上报

        //#region 敏感词查询

        /**
         * 敏感词查询接口
         * @platform 基础库通用
         * @description 1. 检测文本中的敏感词，包含则将敏感词替换为*；2. result=0 无敏感词（返回原文），result=1 包含敏感词（返回替换后文本）
         * @param options 检测配置（必填 content）
         * @example
         * bl.sensitiveWordCheck({
         *     content: '敏感词查询',
         *     success: function(res){
         *         console.log(res, 'success');
         *     },
         *     fail: function(err){
         *         console.log(err, 'fail');
         *     }
         * })
         */
        sensitiveWordCheck: (options: SensitiveWordCheckOptions) => void;

        //#endregion 敏感词查询

        //#region 账号信息

        /**
         * 获取当前帐号信息（异步版本）
         * @platform 基础库通用
         * @description 异步获取小游戏 appId 和环境版本（release/dev/predev/precheck）
         * @param options 异步接口配置（可选回调）
         * @example
         * bl.getAccountInfo({
         *   success(res) {
         *     console.log(res.miniProgram)
         *     console.log(res.miniProgram.appId)
         *     console.log(res.miniProgram.envVersion)
         *   }
         * })
         */
        getAccountInfo: (options?: GetAccountInfoOptions) => void;

        /**
         * 获取当前帐号信息（同步版本）
         * @platform 基础库通用
         * @description 同步获取小游戏 appId 和环境版本，失败会抛出异常需 try/catch 捕获
         * @returns 小游戏账号信息
         * @throws {BluetoothErrorResult} 获取失败时抛出异常
         * @example
         * try {
         *     const res = bl.getAccountInfoSync()
         *     console.log(res.miniProgram)
         *     console.log(res.miniProgram.appId)
         *     console.log(res.miniProgram.envVersion)
         * } catch (e) {
         *   // Do something when catch error
         * }
         */
        getAccountInfoSync: () => GetAccountInfoSyncResult;

        //#endregion 账号信息

        //#region 人脸检测

        /**
         * 获取 FaceDetection 引擎模块（仅 Android 支持）
         * @platform 仅 Android 支持（iOS 无此功能）
         * @description 1. modelSelection=0 适配2米内面部检测，=1 适配5米内；2. 需调用 close() 释放引擎资源；3. 图像数据为 RGBA 一维数组（每4项一个像素）
         * @param options 引擎创建配置（可选 modelSelection + 回调）
         * @example
         * let faceDetection;
         * bl.createFaceDetection({modelSelection:0, success:(res) => {
         *     console.log('createFaceDetection success', res) ;
         *     faceDetection = res;
         * }, fail:(res) => {
         *     console.log('createFaceDetection fail', JSON.stringify(res))
         * }})
         */
        createFaceDetection: (options?: CreateFaceDetectionOptions) => void;

        //#endregion 人脸检测

        //#region 【必接】侧边栏能力

        /**
         * 检测当前宿主版本是否支持跳转指定小游戏入口场景（目前仅支持侧边栏）
         * @platform 基础库 3.99.5+（低版本需做兼容处理）
         * @description 1. 仅支持 scene='sidebar'；2. 成功回调返回 isExist 标识场景是否存在；3. 错误码20001为参数校验错误
         * @param options 场景检测配置
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
        checkScene: (options?: CheckSceneOptions) => void;

        /**
         * 跳转到指定小游戏入口场景（目前仅支持侧边栏）
         * @platform 基础库 3.99.5+（低版本需做兼容处理）
         * @description 1. 仅支持 scene='sidebar'；2. 错误码20001为参数错误，21101为场景不可达；3. 需先通过 checkScene 检测场景是否存在
         * @param options 场景跳转配置
         */
        navigateToScene: (options?: NavigateToSceneOptions) => void;

        //#endregion 【必接】侧边栏能力

        //#region 添加到桌面

        /**
         * 添加小游戏快捷方式到手机桌面
         * @platform 基础库 3.99.4+（低版本需做兼容处理）
         * @description 1. 无入参，仅需回调配置；2. 桌面快捷方式礼包需每日可领取（同游戏内签到礼包）
         * @param options 接口配置（可选回调）
         * @example
         * bl.addShortcut({
         *   success() {
         *     console.log("添加桌面成功");
         *   },
         *   fail(err) {
         *     console.log("添加桌面失败", err.errMsg);
         *   },
         * });
         */
        addShortcut: (options?: AddShortcutOptions) => void;

        /**
         * 检查小游戏快捷方式是否已添加到手机桌面
         * @platform 基础库 3.99.4+（低版本需做兼容处理）、仅 Android 支持
         * @description 1. 仅 Android 支持；2. 成功回调返回 status.exist 标识是否已添加；3. 桌面快捷方式礼包需每日可领取（同游戏内签到礼包）
         * @param options 接口配置（可选回调）
         * @example
         * bl.checkShortcut({
         *   success(res) {
         *     console.log("检查快捷方式", res.status);
         *   },
         *   fail(res) {
         *     console.log("检查快捷方式失败", res.errMsg);
         *   },
         * });
         */
        checkShortcut: (options?: CheckShortcutOptions) => void;

        //#endregion 添加到桌面

        //#endregion 开放接口

        //#region 第三方服务

        //#region 声网(Agora)

        /**
         * 加载 Agora 声网服务（必须先调用确保 SDK 载入）
         * @platform 基础库 3.10.0+
         * @param options 加载配置
         * @example
         * let channelId = ''; // 用于临时存储当前已加入的房间
         * 必须先确保 Agora 模块已载入
         *
         * let agoraSDKLoaded = false;
         *
         * function loadAgoraSDK() {
         *     return new Promise((resolve, reject) => {
         *         if (agoraSDKLoaded) {
         *             resolve();
         *             return;
         *         }
         *         bl.loadAgora({
         *             success() {
         *                 agoraSDKLoaded = true;
         *                 resolve();
         *             },
         *             fail: reject
         *         });
         *     });
         * }
         *
         * // 调用 Agora 能力前必须先授权录音权限
         * function authorizeRecord() {
         *     return new Promise((resolve, reject) => {
         *         bl.authorize({
         *             scope: 'scope.record',
         *             success: resolve,
         *             fail: reject
         *         });
         *     });
         * }
         *
         * // 每次打开时需要恢复声网 SDK：
         * bl.onShow(() => {
         *     // 在这里恢复引擎、以及加入过的房间
         *     loadAgoraSDK()
         *         .then(authorizeRecord)
         *         .then(() => {
         *             agora.init('<Agora AppId>');
         *             if (channelId.length > 0) {
         *                 agora.on('join-channel-success', () => {
         *                     // 加入成功逻辑处理
         *                 });
         *                 agora.joinChannel('', channelId, '', '<用户 ID>');
         *             }
         *         })
         *         .catch(err => {
         *             // 处理异常
         *         });
         * });
         *
         * // 每次离开时记录当前的房间，以备下次打开时重新进入：
         * bl.onHide(() => {
         *     channelId = '<当前房间 ID>';
         * });
         */
        loadAgora: (options: LoadAgoraOptions) => void;

        //#endregion 声网(Agora)

        //#endregion 第三方服务

        //#region 游戏对局回放

        /**
         * 获取全局唯一的游戏画面录制对象
         * @platform 基础库 3.7.0+（低版本需兼容）
         * @returns 游戏录制对象
         */
        getGameRecorder: () => GameRecorder;

        /**
         * 创建游戏对局回放分享按钮（单例）
         * @platform 基础库 3.7.0+（低版本需兼容）
         * @param options 按钮配置（share为必填）
         * @returns 分享按钮对象
         */
        createGameRecorderShareButton: (
            options: CreateGameRecorderShareButtonOptions,
        ) => GameRecorderShareButton;

        //#endregion 游戏对局回放

        //#region 广告

        /**
         * 创建激励视频广告组件（单例模式）
         * @platform 基础库 4.0.0+（低版本需兼容）
         * @description 1. 小游戏端全局单例，小程序端页面内单例；2. 需先通过 bl.getSystemInfoSync().SDKVersion 判断版本；3. 多例模式需显式设置 multiton=true
         * @param options 创建参数（adUnitId 为必填）
         * @returns 激励视频广告组件实例
         */
        createRewardedVideoAd: (
            options: CreateRewardedVideoAdOptions,
        ) => RewardedVideoAd;

        //#endregion 广告

        //#region 客服能力

        /**
         * 打开小游戏客服会话（仅 iOS 支持）
         * @platform 基础库 4.0.2+（低版本需兼容）、仅 iOS 支持
         * @description 1. 需在用户至少一次 touch 事件后调用；2. 支持 Promise 风格调用；3. sessionFrom 最长1000字符，超过自动截断
         * @param options 调用参数
         * @returns Promise 结果（成功/失败对应不同返回结构）
         * @example
         * // 回调风格
         * bl.openCustomerServiceConversation({
         *   sessionFrom: "",
         *   success(res) {
         *     console.log(res);
         *   },
         *   fail(res) {
         *     console.log(res);
         *   },
         * });
         *
         * // Promise风格
         * bl.openCustomerServiceConversation({
         *   sessionFrom: "",
         * }).then(res => {
         *   console.log(res);
         * }).catch(err => {
         *   console.log(res);
         * });
         */
        openCustomerServiceConversation: (
            options: OpenCustomerServiceConversationOptions,
        ) => Promise<OpenCustomerServiceConversationSuccessRes>;

        //#endregion 客服能力
    }
    // ------------------------------ 接口参数类型 ------------------------------
    /**
     * 打开客服会话接口参数
     * @platform 基础库 4.0.2+、仅 iOS 支持
     * @description 1. 需在用户至少一次 touch 事件后调用；2. sessionFrom 最长1000字符，超过截断
     */
    interface OpenCustomerServiceConversationOptions {
        /**
         * 会话来源（透传至客服链接的 session_from query 字段）
         * @default ''
         * @maxLength 1000（超过自动截断）
         */
        sessionFrom?: string;
        /** 接口调用成功回调 */
        success?: (res: OpenCustomerServiceConversationSuccessRes) => void;
        /** 接口调用失败回调 */
        fail?: (res: OpenCustomerServiceConversationFailRes) => void;
        /** 接口调用结束回调（成功/失败均执行） */
        complete?: (
            res:
                | OpenCustomerServiceConversationSuccessRes
                | OpenCustomerServiceConversationFailRes,
        ) => void;
    }

    /**
     * 打开客服会话成功返回结果
     * @platform 基础库 4.0.2+、仅 iOS 支持
     */
    interface OpenCustomerServiceConversationSuccessRes {
        /** 成功提示信息（固定值） */
        errMsg: "openCustomerServiceConversation:ok";
    }

    /**
     * 打开客服会话失败返回结果
     * @platform 基础库 4.0.2+、仅 iOS 支持
     */
    interface OpenCustomerServiceConversationFailRes {
        /** 错误提示信息（格式：openCustomerServiceConversation:fail + 详细信息） */
        errMsg: string;
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
    // ------------------------------ 核心枚举 & 通用类型 ------------------------------
    /**
     * 文件编码类型枚举（所有文件读写接口的 encoding 合法值）
     */
    type FileEncoding =
        | "ascii"
        | "base64"
        | "binary"
        | "hex"
        | "ucs2"
        | "ucs-2"
        | "utf16le"
        | "utf-16le" // 以小端序读取
        | "utf-8"
        | "utf8"
        | "latin1";

    /**
     * 文件操作错误回调通用结构
     */
    interface FileErrorResult {
        /** 错误信息（各方法有专属合法值） */
        errMsg: string;
    }

    /**
     * 文件 Stats 核心对象（stat 接口返回）
     * @description 修正文档笔误：lastModifiedTiem → lastModifiedTime
     */
    interface FileStats {
        /** 最后访问时间戳（秒，示例：1500000000.0000000） */
        lastAccessedTime: number;
        /** 最后修改时间戳（秒，示例：1500000000.0000000） */
        lastModifiedTime: number;
        /** 文件权限模式（示例："500"） */
        mode: string;
        /** 文件大小（字节，示例：196） */
        size: number;

        /**
         * 判断当前文件是否为目录
         * @returns true=是目录 / false=非目录
         */
        isDirectory: () => boolean;

        /**
         * 判断当前文件是否为普通文件
         * @returns true=是普通文件 / false=非普通文件
         */
        isFile: () => boolean;
    }

    /**
     * 已保存文件列表项（getSavedFileList 接口返回）
     */
    interface SavedFileItem {
        /** 文件本地路径 */
        filePath: string;
        /** 文件大小（字节） */
        size: number;
        /** 保存时间戳（从1970/01/01 08:00:00 到当前的秒数） */
        createTime: number;
    }

    // ------------------------------ 异步方法参数类型 ------------------------------
    /**
     * access - 判断文件/目录是否存在
     */
    interface FsAccessOptions {
        /** 要判断的文件/目录路径（必填） */
        path: string;
        /** 成功回调：文件/目录存在时触发 */
        success?: () => void;
        /** 失败回调：errMsg = "fail no such file or directory ${path}" */
        fail?: (res: FileErrorResult) => void;
        /** 完成回调（成功/失败都执行） */
        complete?: () => void;
    }

    /**
     * appendFile - 在文件结尾追加内容
     */
    interface FsAppendFileOptions {
        /** 目标文件路径（必填） */
        filePath: string;
        /** 要追加的内容（文本/二进制，必填） */
        data: string | ArrayBuffer;
        /** 编码格式，默认 utf8 */
        encoding?: FileEncoding;
        /** 成功回调 */
        success?: () => void;
        /**
         * 失败回调（合法 errMsg）：
         * - fail no such file or directory, open ${filePath}（文件不存在）
         * - fail illegal operation on a directory, open "${filePath}"（路径是目录）
         * - fail permission denied, open ${dirPath}（无写权限）
         * - fail sdcard not mounted（SD卡未挂载）
         */
        fail?: (res: FileErrorResult) => void;
        /** 完成回调 */
        complete?: () => void;
    }

    /**
     * copyFile - 复制文件
     */
    interface FsCopyFileOptions {
        /** 源文件路径（必填，仅普通文件） */
        srcPath: string;
        /** 目标文件路径（必填） */
        destPath: string;
        /** 成功回调 */
        success?: () => void;
        /**
         * 失败回调（合法 errMsg）：
         * - fail permission denied, copyFile ${srcPath} -> ${destPath}（无写权限）
         * - fail no such file or directory, copyFile ${srcPath} -> ${destPath}（源文件/目标上层目录不存在）
         */
        fail?: (res: FileErrorResult) => void;
        /** 完成回调 */
        complete?: () => void;
    }

    /**
     * getFileInfo - 获取本地临时/缓存文件信息
     */
    interface FsGetFileInfoOptions {
        /** 文件路径（必填） */
        filePath: string;
        /** 成功回调：返回文件大小（字节） */
        success?: (res: { size: number }) => void;
        /** 失败回调：errMsg = "fail file not exist"（文件不存在） */
        fail?: (res: FileErrorResult) => void;
        /** 完成回调 */
        complete?: () => void;
    }

    /**
     * getSavedFileList - 获取已保存的本地缓存文件列表
     */
    interface FsGetSavedFileListOptions {
        /** 成功回调：返回已保存文件数组 */
        success?: (res: { fileList: SavedFileItem[] }) => void;
        /** 失败回调 */
        fail?: (res: FileErrorResult) => void;
        /** 完成回调 */
        complete?: () => void;
    }

    /**
     * mkdir - 创建目录
     */
    interface FsMkdirOptions {
        /** 目录路径（必填） */
        dirPath: string;
        /** 是否递归创建上级目录，默认 false */
        recursive?: boolean;
        /** 成功回调 */
        success?: () => void;
        /**
         * 失败回调（合法 errMsg）：
         * - fail no such file or directory ${dirPath}（上级目录不存在）
         * - fail permission denied, open ${dirPath}（无写权限）
         * - fail file already exists ${dirPath}（同名文件/目录已存在）
         */
        fail?: (res: FileErrorResult) => void;
        /** 完成回调 */
        complete?: () => void;
    }

    /**
     * readFile - 读取本地文件内容
     */
    interface FsReadFileOptions {
        /** 文件路径（必填） */
        filePath: string;
        /** 编码格式，不传则返回 ArrayBuffer */
        encoding?: FileEncoding;
        /** 成功回调：返回文件内容（字符串/二进制） */
        success?: (res: { data: string | ArrayBuffer }) => void;
        /**
         * 失败回调（合法 errMsg）：
         * - fail no such file or directory, open ${filePath}（目录不存在）
         * - fail permission denied, open ${dirPath}（无读权限）
         */
        fail?: (res: FileErrorResult) => void;
        /** 完成回调 */
        complete?: () => void;
    }

    /**
     * readdir - 读取目录内文件列表
     */
    interface FsReaddirOptions {
        /** 目录路径（必填） */
        dirPath: string;
        /** 成功回调：返回目录下文件名数组 */
        success?: (res: { files: string[] }) => void;
        /**
         * 失败回调（合法 errMsg）：
         * - fail no such file or directory ${dirPath}（目录不存在）
         * - fail not a directory ${dirPath}（非目录）
         * - fail permission denied, open ${dirPath}（无读权限）
         */
        fail?: (res: FileErrorResult) => void;
        /** 完成回调 */
        complete?: () => void;
    }

    /**
     * rename - 重命名/移动文件/目录
     */
    interface FsRenameOptions {
        /** 源文件/目录路径（必填） */
        oldPath: string;
        /** 新文件/目录路径（必填） */
        newPath: string;
        /** 成功回调 */
        success?: () => void;
        /**
         * 失败回调（合法 errMsg）：
         * - fail permission denied, rename ${oldPath} -> ${newPath}（无写权限）
         * - fail no such file or directory, rename ${oldPath} -> ${newPath}（源文件/目标上层目录不存在）
         */
        fail?: (res: FileErrorResult) => void;
        /** 完成回调 */
        complete?: () => void;
    }

    /**
     * removeSavedFile - 删除已保存的本地缓存文件
     */
    interface FsRemoveSavedFileOptions {
        /** 要删除的文件路径（必填） */
        filePath: string;
        /** 成功回调 */
        success?: () => void;
        /** 失败回调：errMsg = "fail file not exist"（文件不存在） */
        fail?: (res: FileErrorResult) => void;
        /** 完成回调 */
        complete?: () => void;
    }

    /**
     * rmdir - 删除目录
     */
    interface FsRmdirOptions {
        /** 目录路径（必填） */
        dirPath: string;
        /** 是否递归删除目录，默认 false（基础库 2.3.0+ 支持） */
        recursive?: boolean;
        /** 成功回调 */
        success?: () => void;
        /**
         * 失败回调（合法 errMsg）：
         * - fail no such file or directory ${dirPath}（目录不存在）
         * - fail directory not empty（目录非空）
         * - fail permission denied, open ${dirPath}（无写权限）
         */
        fail?: (res: FileErrorResult) => void;
        /** 完成回调 */
        complete?: () => void;
    }

    /**
     * saveFile - 保存临时文件到本地（调用后临时文件不可用）
     */
    interface FsSaveFileOptions {
        /** 临时文件路径（必填） */
        tempFilePath: string;
        /** 目标存储路径（可选） */
        filePath?: string;
        /**
         * 成功回调：返回存储后的文件路径
         * @note 文档标注 savedFilePath 为 number，实际应为 string（笔误）
         */
        success?: (res: { savedFilePath: string | number }) => void;
        /**
         * 失败回调（合法 errMsg）：
         * - fail tempFilePath file not exist（临时文件不存在）
         * - fail permission denied, open "${filePath}"（无写权限）
         * - fail no such file or directory "${dirPath}"（上级目录不存在）
         */
        fail?: (res: FileErrorResult) => void;
        /** 完成回调 */
        complete?: () => void;
    }

    /**
     * stat - 获取文件 Stats 对象
     */
    interface FsStatOptions {
        /** 文件/目录路径（必填） */
        path: string;
        /** 是否递归获取目录下文件的 Stats，默认 false */
        recursive?: boolean;
        /**
         * 成功回调：
         * - recursive=false → stats 为 FileStats 对象
         * - recursive=true → stats 为 { [relativePath: string]: FileStats }
         */
        success?: (res: {
            stats: FileStats | Record<string, FileStats>;
        }) => void;
        /**
         * 失败回调（合法 errMsg）：
         * - fail permission denied, open [path]（无读权限）
         * - fail no such file or directory [path]（文件不存在）
         */
        fail?: (res: FileErrorResult) => void;
        /** 完成回调 */
        complete?: () => void;
    }

    /**
     * unlink - 删除文件
     */
    interface FsUnlinkOptions {
        /** 要删除的文件路径（必填） */
        filePath: string;
        /** 成功回调 */
        success?: () => void;
        /**
         * 失败回调（合法 errMsg）：
         * - fail permission denied, open ${path}（无读权限）
         * - fail no such file or directory ${path}（文件不存在）
         * - fail operation not permitted, unlink ${filePath}（路径是目录）
         */
        fail?: (res: FileErrorResult) => void;
        /** 完成回调 */
        complete?: () => void;
    }

    /**
     * unzip - 解压文件
     */
    interface FsUnzipOptions {
        /** 源 zip 文件路径（必填） */
        zipFilePath: string;
        /** 目标目录路径（必填） */
        targetPath: string;
        /** 成功回调 */
        success?: () => void;
        /**
         * 失败回调（合法 errMsg）：
         * - fail permission denied, unzip ${zipFilePath} -> ${destPath}（无写权限）
         * - fail no such file or directory, unzip ${zipFilePath} -> "${destPath}（源文件/目标上层目录不存在）
         */
        fail?: (res: FileErrorResult) => void;
        /** 完成回调 */
        complete?: () => void;
    }

    /**
     * writeFile - 写入文件内容（覆盖原有内容）
     */
    interface FsWriteFileOptions {
        /** 目标文件路径（必填） */
        filePath: string;
        /** 要写入的内容（文本/二进制，必填） */
        data: string | ArrayBuffer;
        /** 编码格式，默认 utf8 */
        encoding?: FileEncoding;
        /** 成功回调 */
        success?: () => void;
        /**
         * 失败回调（合法 errMsg）：
         * - fail no such file or directory, open ${filePath}（目录不存在）
         * - fail permission denied, open ${dirPath}（无写权限）
         */
        fail?: (res: FileErrorResult) => void;
        /** 完成回调 */
        complete?: () => void;
    }

    // ------------------------------ 文件管理器核心接口 ------------------------------
    /**
     * 文件管理器对象（全局唯一，由 bl.getFileSystemManager 获取）
     */
    interface FileSystemManager {
        // ------------------------------ 异步方法 ------------------------------
        /**
         * 判断文件/目录是否存在
         * @example
         * const fs = bl.getFileSystemManager()
         * // 判断文件/目录是否存在
         * fs.access({
         *   path: `${bl.env.USER_DATA_PATH}/hello.txt`,
         *   success(res) {
         *     // 文件存在
         *     console.log(res)
         *   },
         *   fail(res) {
         *     // 文件不存在或其他错误
         *     console.error(res)
         *   }
         * })
         */
        access: (options: FsAccessOptions) => void;
        /** 在文件结尾追加内容 */
        appendFile: (options: FsAppendFileOptions) => void;
        /** 复制文件（仅普通文件） */
        copyFile: (options: FsCopyFileOptions) => void;
        /** 获取本地临时/缓存文件信息（返回文件大小） */
        getFileInfo: (options: FsGetFileInfoOptions) => void;
        /** 获取已保存的本地缓存文件列表 */
        getSavedFileList: (options: FsGetSavedFileListOptions) => void;
        /** 创建目录（支持递归创建上级目录） */
        mkdir: (options: FsMkdirOptions) => void;
        /** 读取文件内容（支持指定编码，默认二进制） */
        readFile: (options: FsReadFileOptions) => void;
        /** 读取目录内文件列表（返回文件名数组） */
        readdir: (options: FsReaddirOptions) => void;
        /** 重命名/移动文件/目录 */
        rename: (options: FsRenameOptions) => void;
        /** 删除已保存的本地缓存文件 */
        removeSavedFile: (options: FsRemoveSavedFileOptions) => void;
        /** 删除目录（支持递归删除） */
        rmdir: (options: FsRmdirOptions) => void;
        /** 保存临时文件到本地（调用后临时文件不可用） */
        saveFile: (options: FsSaveFileOptions) => void;
        /**
         * 获取文件 Stats 对象（支持递归获取目录下所有文件 Stats）
         * @example recursive 为 false 时
         * const fs = bl.getFileSystemManager()
         * fs.stat({
         *   path: `${bl.env.USER_DATA_PATH}/testDir`,
         *   success: res => {
         *     console.log(res.stats.isDirectory())
         *   }
         * })
         * @example recursive 为 true 时
         * const fs = bl.getFileSystemManager()
         * fs.stat({
         *   path: `${bl.env.USER_DATA_PATH}/testDir`,
         *   recursive: true,
         *   success: res => {
         *     Object.keys(res.stats).forEach(path => {
         *       const stats = res.stats[path]
         *       console.log(path, stats.isDirectory())
         *     })
         *   }
         * })
         */
        stat: (options: FsStatOptions) => void;
        /** 删除文件（不可删除目录） */
        unlink: (options: FsUnlinkOptions) => void;
        /** 解压 zip 文件到指定目录 */
        unzip: (options: FsUnzipOptions) => void;
        /** 写入文件内容（覆盖原有内容） */
        writeFile: (options: FsWriteFileOptions) => void;

        // ------------------------------ 同步方法 ------------------------------
        /**
         * access 同步版本
         * @param path 文件/目录路径
         * @throws 错误信息：fail no such file or directory ${path}
         * @example
         * // 同步接口，未进入catch 则表示文件存在
         * try {
         *   fs.accessSync(`${bl.env.USER_DATA_PATH}/hello.txt`)
         * } catch(e) {
         *   console.error(e)
         * }
         */
        accessSync: (path: string) => void;

        /**
         * appendFile 同步版本
         * @param filePath 目标文件路径
         * @param data 要追加的内容
         * @param encoding 编码格式（默认 utf8）
         * @throws 文档指定的各类追加失败错误
         */
        appendFileSync: (
            filePath: string,
            data: string | ArrayBuffer,
            encoding?: FileEncoding,
        ) => void;

        /**
         * copyFile 同步版本
         * @param srcPath 源文件路径（仅普通文件）
         * @param destPath 目标文件路径
         * @throws 权限不足/源文件不存在/目标上层目录不存在
         */
        copyFileSync: (srcPath: string, destPath: string) => void;

        /**
         * mkdir 同步版本
         * @param dirPath 目录路径
         * @param recursive 是否递归创建上级目录（默认 false）
         * @throws 上级目录不存在/无权限/同名文件已存在
         */
        mkdirSync: (dirPath: string, recursive?: boolean) => void;

        /**
         * readFile 同步版本
         * @param filePath 文件路径
         * @param encoding 编码格式（不传返回 ArrayBuffer）
         * @returns 文件内容（字符串/二进制）
         * @throws 目录不存在/无读权限
         */
        readFileSync: (
            filePath: string,
            encoding?: FileEncoding,
        ) => string | ArrayBuffer;

        /**
         * readdir 同步版本
         * @param dirPath 目录路径
         * @returns 目录下文件名数组
         * @throws 目录不存在/非目录/无读权限
         */
        readdirSync: (dirPath: string) => string[];

        /**
         * rename 同步版本
         * @param oldPath 源路径
         * @param newPath 新路径
         * @throws 权限不足/源文件不存在/目标上层目录不存在
         */
        renameSync: (oldPath: string, newPath: string) => void;

        /**
         * rmdir 同步版本
         * @param dirPath 目录路径
         * @param recursive 是否递归删除（基础库 2.3.0+ 支持，默认 false）
         * @throws 目录不存在/非空/无权限
         */
        rmdirSync: (dirPath: string, recursive?: boolean) => void;

        /**
         * saveFile 同步版本
         * @param tempFilePath 临时文件路径
         * @param filePath 目标存储路径（可选）
         * @returns 存储后的文件路径（文档标注 number，实际为 string）
         * @throws 临时文件不存在/无权限/上级目录不存在
         */
        saveFileSync: (
            tempFilePath: string,
            filePath?: string,
        ) => string | number;

        /**
         * stat 同步版本
         * @param path 文件/目录路径
         * @param recursive 是否递归获取 Stats（默认 false）
         * @returns FileStats | Record<string, FileStats>
         * @throws 无读权限/文件不存在
         * @example recursive 为 false 时
         * const fs = bl.getFileSystemManager()
         * const stats = fs.statSync(
         *   `${bl.env.USER_DATA_PATH}/testDir`
         * );
         * console.log(res.isDirectory());
         * @example recursive 为 true 时
         * const fs = bl.getFileSystemManager()
         * const res = fs.statSync({
         *   `${bl.env.USER_DATA_PATH}/testDir`,
         *   true
         * );
         * Object.keys(res).forEach(path => {
         *   const stats = res[path];
         *   console.log(path, stats.isDirectory());
         * });
         */
        statSync: (
            path: string,
            recursive?: boolean,
        ) => FileStats | Record<string, FileStats>;

        /**
         * unlink 同步版本
         * @param filePath 文件路径
         * @throws 无权限/文件不存在/路径是目录
         */
        unlinkSync: (filePath: string) => void;

        /**
         * writeFile 同步版本
         * @param filePath 目标文件路径
         * @param data 要写入的内容
         * @param encoding 编码格式（默认 utf8）
         * @throws 目录不存在/无写权限
         */
        writeFileSync: (
            filePath: string,
            data: string | ArrayBuffer,
            encoding?: FileEncoding,
        ) => void;
    }
    // ------------------------------ 核心枚举/常量 ------------------------------
    /**
     * 游戏录制错误码枚举
     * @platform 基础库 3.7.0+
     */
    enum GameRecorderErrorCode {
        /** 未知错误 */
        UnknownError = 1,
        /** SDK 内部错误 */
        InternalFailed = 2,
        /** 当前设备不支持录制 */
        NotSupported = 3,
        /** duration 参数不合法 */
        StartDurationInvalid = 4,
        /** bitrate 参数不合法 */
        StartBitRateInvalid = 5,
        /** fps 参数不合法 */
        StartFPSInvalid = 6,
        /** gop 参数不合法 */
        StartGOPInvalid = 7,
        /** 已开始录制时调用 start */
        StartWhileAlreadyStartRecording = 8,
        /** 暂停状态调用 start（应调用 resume） */
        StartWhilePaused = 9,
        /** 未开始录制时调用 pause */
        PauseWhileNotStartRecording = 10,
        /** 已暂停时调用 pause */
        PauseWhileAlreadyPaused = 11,
        /** 未开始录制时调用 resume */
        ResumeWhileNotStartRecording = 12,
        /** 录制中调用 resume（仅暂停状态可调用） */
        ResumeWhileRecording = 13,
        /** 未开始录制时调用 abort */
        AbortWhileNotStartRecording = 14,
        /** 未开始录制时调用 stop */
        StopWhileNotStartRecording = 15,
        /** 无录制视频时发起分享 */
        NoVideo = 16,
        /** 背景音乐不存在 */
        BGMNotFound = 17,
        /** 剪辑区间不合法 */
        TimeRangeInvalid = 18,
        /** 剪辑总时长超出上限 */
        EditDurationOutOfLimit = 19,
        /** 剪辑区间太短（需>2秒） */
        TimeRangeTooShort = 20,
    }

    /**
     * 录制事件类型枚举
     * @platform 基础库 3.7.0+
     */
    enum GameRecorderEvent {
        /** 录制开始事件 */
        START = "start",
        /** 录制结束事件 */
        STOP = "stop",
        /** 录制暂停事件 */
        PAUSE = "pause",
        /** 录制恢复事件 */
        RESUME = "resume",
        /** 录制取消事件 */
        ABORT = "abort",
        /** 录制时间更新事件 */
        TIME_UPDATE = "timeUpdate",
        /** 错误事件 */
        ERROR = "error",
    }

    /**
     * 分享按钮类型枚举
     * @platform 基础库 3.7.0+
     */
    enum GameRecorderShareButtonType {
        /** 文本按钮（可设置背景色/文本） */
        TEXT = "text",
        /** 图片按钮（仅背景贴图） */
        IMAGE = "image",
    }

    /**
     * 文本对齐方式枚举
     * @platform 基础库 3.7.0+
     */
    enum TextAlignType {
        /** 居左 */
        LEFT = "left",
        /** 居中 */
        CENTER = "center",
        /** 居右 */
        RIGHT = "right",
    }

    /**
     * 视频播放速率合法值（固定枚举）
     * @platform 基础库 3.19.0+
     */
    type AgoraTempoValue = 0.3 | 0.5 | 1 | 1.5 | 2 | 2.5 | 3;

    // ------------------------------ 事件回调参数类型 ------------------------------
    /**
     * timeUpdate 事件参数
     * @platform 基础库 3.7.0+
     */
    interface GameRecorderTimeUpdateRes {
        /** 当前视频录制到第几秒 */
        currentTime: number;
    }

    /**
     * error 事件参数
     * @platform 基础库 3.7.0+
     */
    interface GameRecorderErrorRes {
        /** 错误码（对应 GameRecorderErrorCode） */
        code: GameRecorderErrorCode | number;
        /** 错误信息 */
        message: string;
    }

    /**
     * stop 事件参数
     * @platform 基础库 3.7.0+
     */
    interface GameRecorderStopRes {
        /** 视频时长（毫秒） */
        duration: number;
    }

    /**
     * 录制事件参数映射
     * @platform 基础库 3.7.0+
     */
    interface GameRecorderEventParams {
        [GameRecorderEvent.START]: [];
        [GameRecorderEvent.STOP]: [res: GameRecorderStopRes];
        [GameRecorderEvent.PAUSE]: [];
        [GameRecorderEvent.RESUME]: [];
        [GameRecorderEvent.ABORT]: [];
        [GameRecorderEvent.TIME_UPDATE]: [res: GameRecorderTimeUpdateRes];
        [GameRecorderEvent.ERROR]: [res: GameRecorderErrorRes];
    }

    // ------------------------------ 录制参数类型 ------------------------------
    /**
     * GameRecorder.start 接口参数
     * @platform 基础库 3.7.0+
     */
    interface GameRecorderStartOptions {
        /** 视频帧率（默认24） */
        fps?: number;
        /** 时长限制（秒），5 ≤ duration ≤ 7200，默认7200 */
        duration?: number;
        /** 视频比特率（kbps），600 ≤ bitrate ≤ 3000，默认1000 */
        bitrate?: number;
        /** 关键帧间隔（默认12） */
        gop?: number;
        /** 是否录制游戏音效（3.10.0+，默认true） */
        hookBgm?: boolean;
    }

    // ------------------------------ 分享按钮相关类型 ------------------------------
    /**
     * 分享按钮样式配置
     * @platform 基础库 3.7.0+
     */
    interface GameRecorderShareButtonStyle {
        /** 左上角横坐标（逻辑像素，默认0） */
        left?: number;
        /** 左上角纵坐标（逻辑像素，默认0） */
        top?: number;
        /** 按钮高度（逻辑像素，最小40，默认40） */
        height?: number;
        /** 文本颜色（默认#ffffff） */
        color?: string;
        /** 背景颜色（hex，默认透明） */
        backgroundColor?: string;
        /** 边框颜色（hex，默认透明） */
        borderColor?: string;
        /** 边框宽度（默认0） */
        borderWidth?: number;
        /** 边框圆角（默认0） */
        borderRadius?: number;
        /** 文本水平对齐方式（默认left） */
        textAlign?: TextAlignType;
        /** 字号（默认14） */
        fontSize?: number;
        /** 文本行高 */
        lineHeight?: number;
        /** 宽度（补充字段，文档属性中存在） */
        width?: number;
    }

    /**
     * 对局回放分享参数
     * @platform 基础库 3.7.0+（timeRange/bgm等 3.19.0+）
     */
    interface GameRecorderShareOptions {
        /** 分享后跳转小游戏的query参数 */
        query?: string;
        /** 剪辑区间（二维数组，单位ms，总时长≤60秒，单段>2秒） */
        timeRange?: [number, number][];
        /** 背景音乐地址（仅代码包/blfile路径，不支持http/https） */
        bgm?: string;
        /** 音量（0~1，默认1） */
        volume?: number;
        /** 播放速率（固定值：0.3/0.5/1/1.5/2/2.5/3，默认1） */
        atempo?: AgoraTempoValue;
        /** 是否混音（原始音频+BGM，默认false） */
        audioMix?: boolean;
    }

    /**
     * 创建分享按钮参数
     * @platform 基础库 3.7.0+
     */
    interface CreateGameRecorderShareButtonOptions {
        /** 按钮类型（默认text） */
        type?: GameRecorderShareButtonType;
        /** 按钮文本（仅type=text有效，默认"分享回放"） */
        text?: string;
        /** 背景图片（仅type=image有效，默认空） */
        image?: string;
        /** 按钮样式 */
        style?: GameRecorderShareButtonStyle;
        /** 分享参数（必填） */
        share: GameRecorderShareOptions;
    }

    // ------------------------------ GameRecorder 核心接口 ------------------------------
    /**
     * 游戏画面录制对象（全局唯一）
     * @platform 基础库 3.7.0+
     */
    interface GameRecorder {
        /**
         * 获取是否支持录制游戏画面
         * @returns 是否支持
         */
        isFrameSupported: () => boolean;

        /**
         * 获取是否支持录制游戏音频
         * @returns 是否支持
         */
        isSoundSupported: () => boolean;

        /**
         * 获取是否支持调节录制视频音量
         * @returns 是否支持
         */
        isVolumeSupported: () => boolean;

        /**
         * 获取是否支持调节录制视频播放速率
         * @returns 是否支持
         */
        isAtempoSupported: () => boolean;

        /**
         * 开始录制游戏画面
         * @param options 录制参数
         * @returns 是否启动成功（boolean）
         */
        start: (options?: GameRecorderStartOptions) => boolean;

        /**
         * 结束录制游戏画面（可发起分享）
         * @returns 结束录制的Promise
         */
        stop: () => Promise<void>;

        /**
         * 暂停录制游戏画面
         * @returns 暂停录制的Promise
         */
        pause: () => Promise<void>;

        /**
         * 恢复录制游戏画面
         * @returns 恢复录制的Promise
         */
        resume: () => Promise<void>;

        /**
         * 放弃录制（丢弃已录制内容）
         * @returns 中断录制的Promise
         */
        abort: () => Promise<void>;

        /**
         * 注册录制事件监听
         * @param event 事件名
         * @param callback 回调函数
         */
        on: <E extends GameRecorderEvent>(
            event: E,
            callback: (...args: GameRecorderEventParams[E]) => void,
        ) => void;

        /**
         * 取消录制事件监听
         * @param event 事件名
         * @param callback 要取消的回调
         */
        off: <E extends GameRecorderEvent>(
            event: E,
            callback: (...args: GameRecorderEventParams[E]) => void,
        ) => void;
    }

    // ------------------------------ GameRecorderShareButton 接口 ------------------------------
    /**
     * 游戏对局回放分享按钮对象
     * @platform 基础库 3.7.0+
     */
    interface GameRecorderShareButton {
        /** 按钮类型 */
        type: GameRecorderShareButtonType;
        /** 按钮文本（仅type=text有效） */
        text: string;
        /** 背景图片（仅type=image有效） */
        image: string;
        /** 按钮样式 */
        style: GameRecorderShareButtonStyle;
        /** 分享参数 */
        share: GameRecorderShareOptions;

        /** 显示分享按钮 */
        show: () => void;

        /** 隐藏分享按钮 */
        hide: () => void;

        /**
         * 监听按钮点击事件（仅分享失败时触发）
         * @param callback 点击回调（分享失败时执行）
         */
        onTap: (callback: () => void) => void;

        /**
         * 取消监听按钮点击事件
         * @param callback 要取消的回调
         */
        offTap: (callback: () => void) => void;
    }
    /**
     * getLocation 接口成功回调返回值类型
     * @description 地理位置信息（纬度/经度）
     */
    interface GetLocationSuccessResult {
        /**
         * 纬度
         * @description 范围 -90~90，负数表示南纬
         */
        latitude: number;
        /**
         * 经度
         * @description 范围 -180~180，负数表示西经
         */
        longitude: number;
    }

    /**
     * getLocation 接口调用参数类型
     * @description 获取当前地理位置、速度；用户离开小游戏后此接口无法调用
     */
    interface GetLocationOptions {
        /** 接口调用成功的回调函数，返回纬度/经度信息 */
        success?: (res: GetLocationSuccessResult) => void;
        /** 接口调用失败的回调函数 */
        fail?: (err?: any) => void;
        /** 接口调用结束的回调函数（成功/失败都会执行） */
        complete?: () => void;
    }
    // ------------------------------ 基础枚举类型 ------------------------------
    /**
     * 文本对齐方式枚举
     * @platform 基础库通用
     */
    type TextAlignType = "left" | "center" | "right";

    /**
     * 颜色值类型（支持 hex/预设值）
     * @platform 基础库通用
     */
    type ColorValue =
        | string // hex 颜色码（如 #000000）
        | "white"
        | "black"
        | "red"
        | "green"
        | "yellow"
        | "lightgray"
        | "gray"
        | "darkgray"
        | "blue"
        | "orange"
        | "purple"
        | "cyan"
        | "magenta"
        | "brown"
        | "clear"; // 透明

    /**
     * 语言类型枚举（文档提及的 lang 合法值）
     * @platform 基础库通用
     */
    enum LangType {
        /** 英文 */
        EN = "en",
        /** 简体中文 */
        ZH_CN = "zh_CN",
        /** 繁体中文 */
        ZH_TW = "zh_TW",
    }

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
    // ------------------------------ 核心枚举/常量 ------------------------------
    /**
     * 激励视频广告错误码枚举
     * @platform 基础库 4.0.0+
     */
    enum RewardedVideoAdErrCode {
        /** 后端接口调用失败 */
        BACKEND_API_FAILED = 1000,
        /** 参数错误 */
        PARAM_ERROR = 1001,
        /** 广告单元无效 */
        AD_UNIT_INVALID = 1002,
        /** 内部错误 */
        INTERNAL_ERROR = 1003,
        /** 无合适的广告 */
        NO_SUITABLE_AD = 1004,
        /** 广告组件审核中 */
        AD_COMPONENT_REVIEWING = 1005,
        /** 广告组件被驳回 */
        AD_COMPONENT_REJECTED = 1006,
        /** 广告组件被封禁 */
        AD_COMPONENT_BANNED = 1007,
        /** 广告单元已关闭 */
        AD_UNIT_CLOSED = 1008,
    }

    /**
     * 激励视频广告错误码与说明/解决方案映射
     * @platform 基础库 4.0.0+
     */
    interface RewardedVideoAdErrDetail {
        /** 异常情况描述 */
        reason: string;
        /** 解决方案 */
        solution: string;
    }

    // ------------------------------ 事件回调参数类型 ------------------------------
    /**
     * 激励视频广告错误事件参数
     * @platform 基础库 4.0.0+
     */
    interface RewardedVideoAdErrorRes {
        /** 错误信息 */
        errMsg: string;
        /** 错误码（对应 RewardedVideoAdErrCode） */
        errCode: RewardedVideoAdErrCode | number;
    }

    /**
     * 激励视频广告关闭事件参数
     * @platform 基础库 4.0.0+
     */
    interface RewardedVideoAdCloseRes {
        /** 视频是否被完整观看后关闭 */
        isEnded: boolean;
    }

    // ------------------------------ 创建广告参数类型 ------------------------------
    /**
     * 创建激励视频广告组件参数
     * @platform 基础库 4.0.0+
     */
    interface CreateRewardedVideoAdOptions {
        /** 广告单元 ID（必填） */
        adUnitId: string;
        /** 是否启用多例模式（默认 false） */
        multiton?: boolean;
    }

    // ------------------------------ 激励视频广告组件接口 ------------------------------
    /**
     * 激励视频广告组件（全局单例，小程序端为页面内单例）
     * @platform 基础库 4.0.0+（低版本需兼容）
     * @description 1. 原生组件，层级高于普通组件；2. 默认隐藏，需调用 show() 显示；3. 小游戏端全局单例，小程序端页面内单例且不允许跨页面使用
     */
    interface RewardedVideoAd {
        /**
         * 加载激励视频广告
         * @returns 加载结果 Promise（无返回值，失败会 reject）
         */
        load: () => Promise<void>;

        /**
         * 显示激励视频广告（从屏幕下方推入）
         * @returns 显示操作结果 Promise（无返回值，失败会 reject）
         */
        show: () => Promise<void>;

        /**
         * 销毁激励视频广告实例
         * @returns 销毁操作结果 Promise（无返回值）
         */
        destroy: () => Promise<void>;

        /**
         * 监听广告加载成功事件
         * @param listener 加载成功监听函数（无参数）
         */
        onLoad: (listener: () => void) => void;

        /**
         * 移除广告加载成功事件监听
         * @param listener 要移除的监听函数（不传则移除所有）
         */
        offLoad: (listener?: () => void) => void;

        /**
         * 监听广告错误事件
         * @param listener 错误事件监听函数（参数为错误信息）
         */
        onError: (listener: (res: RewardedVideoAdErrorRes) => void) => void;

        /**
         * 移除广告错误事件监听
         * @param listener 要移除的监听函数（不传则移除所有）
         */
        offError: (listener?: (res: RewardedVideoAdErrorRes) => void) => void;

        /**
         * 监听广告关闭事件
         * @param listener 关闭事件监听函数（参数包含是否完整观看）
         */
        onClose: (listener: (res: RewardedVideoAdCloseRes) => void) => void;

        /**
         * 移除广告关闭事件监听
         * @param listener 要移除的监听函数（不传则移除所有）
         */
        offClose: (listener?: (res: RewardedVideoAdCloseRes) => void) => void;
    }
    /**
     * showShareMenu 接口调用参数类型
     * @description 显示当前页面的转发按钮，支持配置是否使用带 shareTicket 的转发详情
     */
    interface ShowShareMenuOptions {
        /** 是否使用带 shareTicket 的转发详情，默认 false */
        withShareTicket?: boolean;
        /** 接口调用成功的回调函数 */
        success?: () => void;
        /** 接口调用失败的回调函数 */
        fail?: (err?: any) => void;
        /** 接口调用结束的回调函数（成功/失败都会执行） */
        complete?: () => void;
    }

    /**
     * hideShareMenu 接口调用参数类型
     * @description 隐藏转发按钮
     */
    interface HideShareMenuOptions {
        /** 接口调用成功的回调函数 */
        success?: () => void;
        /** 接口调用失败的回调函数 */
        fail?: (err?: any) => void;
        /** 接口调用结束的回调函数（成功/失败都会执行） */
        complete?: () => void;
    }

    /**
     * onShareAppMessage 回调返回值/ shareAppMessage 入参的核心配置类型
     */
    interface ShareAppMessageConfig {
        /** 转发标题，默认使用当前小游戏的昵称 */
        title?: string;
        /** 转发副标题（基础库 3.8.0+ 支持） */
        subTitle?: string;
        /**
         * 自定义图片路径（建议分辨率 750*750，支持 PNG/JPG）
         * @description 支持：1.包内相对路径 2.blfile:// 协议路径 3.https:// 网络图片（仅 bilibili 图片服务器）
         * @default 当前小游戏的 logo
         */
        imageUrl?: string;
        /** 分享到 B 站动态的内容（支持创建标签话题，如 "标题 #话题 xxx# 内容"），默认空 */
        biliContent?: string;
        /** 分享到 B 站私信的卡片标题（基础库 2.2.0+ 支持），默认同 title */
        biliMessageTitle?: string;
        /**
         * 查询字符串（key1=val1&key2=val2 格式）
         * @description 从转发消息进入时，可通过 bl.getLaunchOptionsSync()/bl.onShow() 获取
         * @default 空
         */
        query?: string;
    }

    /**
     * shareAppMessage 接口调用参数类型
     * @platform 基础库 3.8.0+，低版本需做兼容处理
     * @description 主动拉起分享，进入选择分享渠道界面
     */
    interface ShareAppMessageOptions extends ShareAppMessageConfig {
        /** 转发成功的回调函数 */
        success?: () => void;
        /** 转发失败的回调函数 */
        fail?: (err?: any) => void;
        /** 转发结束的回调函数（成功/失败都会执行） */
        complete?: () => void;
    }
    /**
     * getStorageInfo/getStorageInfoSync 返回值类型
     * @description 本地缓存的信息（key列表、已用空间、空间上限）
     */
    interface StorageInfoResult {
        /** 当前 storage 中所有的 key 列表 */
        keys: string[];
        /** 当前占用的空间大小，单位：KB */
        currentSize: number;
        /** 限制的空间大小，单位：KB */
        limitSize: number;
    }

    /**
     * getStorageInfo 接口调用参数类型
     * @description 异步获取本地缓存信息的配置项（仅包含回调）
     */
    interface GetStorageInfoOptions {
        /** 接口调用成功的回调函数，返回缓存信息 */
        success?: (res: StorageInfoResult) => void;
        /** 接口调用失败的回调函数 */
        fail?: (err?: any) => void;
        /** 接口调用结束的回调函数（成功/失败都会执行） */
        complete?: () => void;
    }

    /**
     * clearStorage 接口调用参数类型
     * @description 清理本地数据缓存的配置项（仅包含回调）
     */
    interface ClearStorageOptions {
        /** 接口调用成功的回调函数 */
        success?: () => void;
        /** 接口调用失败的回调函数 */
        fail?: (err?: any) => void;
        /** 接口调用结束的回调函数（成功/失败都会执行） */
        complete?: () => void;
    }

    /**
     * removeStorage 接口调用参数类型
     * @description 移除指定 key 本地缓存的配置项
     */
    interface RemoveStorageOptions {
        /** 本地缓存中指定的 key（必填） */
        key: string;
        /** 接口调用成功的回调函数 */
        success?: () => void;
        /** 接口调用失败的回调函数 */
        fail?: (err?: any) => void;
        /** 接口调用结束的回调函数（成功/失败都会执行） */
        complete?: () => void;
    }

    /**
     * setStorage 接口调用参数类型
     * @description 存储数据到指定 key 的配置项；单个 key 最大存储 1MB，所有数据总上限 10MB
     */
    interface SetStorageOptions {
        /** 本地缓存中指定的 key（必填） */
        key: string;
        /**
         * 需要存储的内容（必填）
         * @description 仅支持原生类型、Date、可通过 JSON.stringify 序列化的对象
         */
        data: any;
        /** 接口调用成功的回调函数 */
        success?: () => void;
        /** 接口调用失败的回调函数 */
        fail?: (err?: any) => void;
        /** 接口调用结束的回调函数（成功/失败都会执行） */
        complete?: () => void;
    }

    /**
     * getStorage 接口调用参数类型
     * @description 异步获取指定 key 缓存内容的配置项
     */
    interface GetStorageOptions {
        /** 本地缓存中指定的 key（必填） */
        key: string;
        /** 接口调用成功的回调函数，返回 key 对应的内容 */
        success?: (res: { data: any }) => void;
        /** 接口调用失败的回调函数 */
        fail?: (err?: any) => void;
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
    // ------------------------------ 复用/新增枚举类型 ------------------------------
    /**
     * 加速度监听频率枚举（复用设备运动监听的同语义枚举）
     * @platform 基础库通用
     */
    type AccelerometerInterval = "game" | "ui" | "normal";

    // ------------------------------ 新增通用类型 ------------------------------
    /**
     * 加速度数据事件回调参数
     * @platform 基础库通用
     */
    interface AccelerometerChangeResult {
        /** X 轴加速度值 */
        x: number;
        /** Y 轴加速度值 */
        y: number;
        /** Z 轴加速度值 */
        z: number;
    }

    // ------------------------------ 接口参数类型 ------------------------------
    /**
     * startAccelerometer - 开始监听加速度数据
     * @platform 基础库通用
     */
    interface StartAccelerometerOptions {
        /** 回调执行频率，默认 normal */
        interval?: AccelerometerInterval;
        /** 成功回调 */
        success?: () => void;
        /** 失败回调（返回错误码/错误信息） */
        fail?: () => void;
        /** 完成回调（成功/失败都执行） */
        complete?: () => void;
    }

    /**
     * stopAccelerometer - 停止监听加速度数据
     * @platform 基础库通用
     */
    interface StopAccelerometerOptions {
        /** 成功回调 */
        success?: () => void;
        /** 失败回调（返回错误码/错误信息） */
        fail?: () => void;
        /** 完成回调（成功/失败都执行） */
        complete?: () => void;
    }

    // ------------------------------ 监听回调类型 ------------------------------
    /**
     * onAccelerometerChange - 监听加速度数据的回调
     * @platform 基础库通用
     */
    type AccelerometerChangeCallback = (res: AccelerometerChangeResult) => void;
    // ------------------------------ 通用类型 ------------------------------
    /**
     * 设备电量信息返回结果
     * @platform 基础库 3.20.0+（isLowPowerMode 字段）
     */
    interface BatteryInfoResult {
        /** 设备电量，范围 1 - 100（字符串类型） */
        level: string;
        /** 是否正在充电中 */
        isCharging: boolean;
        /** 是否开启省电模式（基础库 3.20.0+ 支持） */
        isLowPowerMode: boolean;
    }

    // ------------------------------ 接口参数类型 ------------------------------
    /**
     * getBatteryInfo - 获取设备电量（异步接口）
     * @platform 基础库 3.20.0+（isLowPowerMode 字段）
     */
    interface GetBatteryInfoOptions {
        /** 成功回调（返回设备电量信息） */
        success?: (res: BatteryInfoResult) => void;
        /** 失败回调（返回错误码/错误信息） */
        fail?: () => void;
        /** 完成回调（成功/失败都执行） */
        complete?: () => void;
    }
    // ------------------------------ 新增枚举类型 ------------------------------
    /**
     * BLE 写模式枚举（iOS/安卓通用）
     * @platform 基础库 3.73.0+
     */
    type BLEWriteType = "write" | "writeNoResponse";

    /**
     * BLE 特征订阅类型枚举
     * @platform 基础库 3.73.0+
     */
    type BLESubscribeType = "notification" | "indication";

    // ------------------------------ 新增通用类型 ------------------------------
    /**
     * BLE 设备服务信息（getBLEDeviceServices 返回）
     * @platform 基础库 3.73.0+
     */
    interface BLEDeviceService {
        /** 蓝牙设备服务的 UUID */
        uuid: string;
        /** 该服务是否为主服务 */
        isPrimary: boolean;
    }

    /**
     * BLE 特征操作属性
     * @platform 基础库 3.73.0+
     */
    interface BLECharacteristicProperties {
        /** 是否支持 read 操作 */
        read: boolean;
        /** 是否支持 write 操作 */
        write: boolean;
        /** 是否支持 notify 操作 */
        notify: boolean;
        /** 是否支持 indicate 操作 */
        indicate: boolean;
        /** 是否支持无回复写操作 */
        writeNoResponse: boolean;
        /** 是否支持有回复写操作 */
        writeDefault: boolean;
    }

    /**
     * BLE 设备特征信息（getBLEDeviceCharacteristics 返回）
     * @platform 基础库 3.73.0+
     */
    interface BLEDeviceCharacteristic {
        /** 蓝牙特征的 UUID */
        uuid: string;
        /** 该特征支持的操作类型 */
        properties: BLECharacteristicProperties;
    }

    /**
     * BLE 连接状态变化回调参数
     * @platform 基础库 3.73.0+
     */
    interface BLEConnectionStateChangeResult {
        /** 蓝牙设备 id */
        deviceId: string;
        /** 是否处于已连接状态 */
        connected: boolean;
    }

    /**
     * BLE 特征值变化回调参数
     * @platform 基础库 3.73.0+
     */
    interface BLECharacteristicValueChangeResult {
        /** 蓝牙设备 id */
        deviceId: string;
        /** 蓝牙特征对应服务的 UUID */
        serviceId: string;
        /** 蓝牙特征的 UUID */
        characteristicId: string;
        /** 特征最新的值（二进制） */
        value: ArrayBuffer;
    }

    /**
     * BLE MTU 变化回调参数（仅 Android 支持）
     * @platform Android、基础库 3.73.0+
     */
    interface BLEMTUChangeResult {
        /** 蓝牙设备 id */
        deviceId: string;
        /** 最新的最大传输单元 */
        mtu: number;
    }

    // ------------------------------ 接口参数类型 ------------------------------
    /**
     * createBLEConnection - 连接蓝牙低功耗设备
     * @platform 基础库 3.73.0+
     */
    interface CreateBLEConnectionOptions {
        /** 蓝牙设备 id（必填） */
        deviceId: string;
        /** 超时时间（单位 ms），不填表示不会超时 */
        timeout?: number;
        /** 成功回调 */
        success?: () => void;
        /** 失败回调（返回错误码/错误信息） */
        fail?: (res: BluetoothErrorResult) => void;
        /** 完成回调（成功/失败都执行） */
        complete?: () => void;
    }

    /**
     * closeBLEConnection - 断开与蓝牙低功耗设备的连接
     * @platform 基础库 3.73.0+
     */
    interface CloseBLEConnectionOptions {
        /** 蓝牙设备 id（必填） */
        deviceId: string;
        /** 成功回调 */
        success?: () => void;
        /** 失败回调（返回错误码/错误信息） */
        fail?: (res: BluetoothErrorResult) => void;
        /** 完成回调（成功/失败都执行） */
        complete?: () => void;
    }

    /**
     * getBLEDeviceServices - 获取蓝牙低功耗设备所有服务
     * @platform 基础库 3.73.0+
     */
    interface GetBLEDeviceServicesOptions {
        /** 蓝牙设备 id（必填，需已建立连接） */
        deviceId: string;
        /** 成功回调（返回设备服务列表） */
        success?: (res: { services: BLEDeviceService[] }) => void;
        /** 失败回调（返回错误码/错误信息） */
        fail?: (res: BluetoothErrorResult) => void;
        /** 完成回调（成功/失败都执行） */
        complete?: () => void;
    }

    /**
     * getBLEDeviceCharacteristics - 获取蓝牙低功耗设备某个服务的所有特征
     * @platform 基础库 3.73.0+
     */
    interface GetBLEDeviceCharacteristicsOptions {
        /** 蓝牙设备 id（必填，需已建立连接） */
        deviceId: string;
        /** 蓝牙服务 UUID（必填，需先调用 getBLEDeviceServices 获取） */
        serviceId: string;
        /** 成功回调（返回设备特征列表） */
        success?: (res: { characteristics: BLEDeviceCharacteristic[] }) => void;
        /** 失败回调（返回错误码/错误信息） */
        fail?: (res: BluetoothErrorResult) => void;
        /** 完成回调（成功/失败都执行） */
        complete?: () => void;
    }

    /**
     * getBLEMTU - 获取蓝牙低功耗的最大传输单元
     * @platform 基础库 3.73.0+
     */
    interface GetBLEMTUOptions {
        /** 蓝牙设备 id（必填） */
        deviceId: string;
        /** 写模式（iOS 特有参数），默认 write */
        writeType?: BLEWriteType;
        /** 成功回调（返回最大传输单元） */
        success?: (res: { mtu: number }) => void;
        /** 失败回调（返回错误码/错误信息） */
        fail?: (res: BluetoothErrorResult) => void;
        /** 完成回调（成功/失败都执行） */
        complete?: () => void;
    }

    /**
     * getBLEDeviceRSSI - 获取蓝牙低功耗设备的信号强度
     * @platform 基础库 3.73.0+
     */
    interface GetBLEDeviceRSSIOptions {
        /** 蓝牙设备 id（必填） */
        deviceId: string;
        /** 成功回调（返回信号强度） */
        success?: (res: { RSSI: number }) => void;
        /** 失败回调（返回错误码/错误信息） */
        fail?: (res: BluetoothErrorResult) => void;
        /** 完成回调（成功/失败都执行） */
        complete?: () => void;
    }

    /**
     * notifyBLECharacteristicValueChange - 启用/关闭特征值变化的 notify 功能
     * @platform 基础库 3.73.0+
     */
    interface NotifyBLECharacteristicValueChangeOptions {
        /** 蓝牙设备 id（必填） */
        deviceId: string;
        /** 蓝牙特征对应服务的 UUID（必填） */
        serviceId: string;
        /** 蓝牙特征的 UUID（必填） */
        characteristicId: string;
        /** 是否启用 notify，默认 false */
        state?: boolean;
        /** 特征订阅类型，默认 indication */
        type?: BLESubscribeType;
        /** 成功回调 */
        success?: () => void;
        /** 失败回调（返回错误码/错误信息） */
        fail?: (res: BluetoothErrorResult) => void;
        /** 完成回调（成功/失败都执行） */
        complete?: () => void;
    }

    /**
     * readBLECharacteristicValue - 读取蓝牙低功耗设备特征值的二进制数据
     * @platform 基础库 3.73.0+
     */
    interface ReadBLECharacteristicValueOptions {
        /** 蓝牙设备 id（必填） */
        deviceId: string;
        /** 蓝牙特征对应服务的 UUID（必填） */
        serviceId: string;
        /** 蓝牙特征的 UUID（必填） */
        characteristicId: string;
        /** 成功回调 */
        success?: () => void;
        /** 失败回调（返回错误码/错误信息） */
        fail?: (res: BluetoothErrorResult) => void;
        /** 完成回调（成功/失败都执行） */
        complete?: () => void;
    }

    /**
     * writeBLECharacteristicValue - 向蓝牙低功耗设备特征值写入二进制数据
     * @platform 基础库 3.73.0+
     */
    interface WriteBLECharacteristicValueOptions {
        /** 蓝牙设备 id（必填） */
        deviceId: string;
        /** 蓝牙特征对应服务的 UUID（必填） */
        serviceId: string;
        /** 蓝牙特征的 UUID（必填） */
        characteristicId: string;
        /** 要写入的二进制值（必填） */
        value: ArrayBuffer;
        /** 写模式（必填，iOS 优先 write，安卓优先 writeNoResponse） */
        writeType: BLEWriteType;
        /** 成功回调 */
        success?: () => void;
        /** 失败回调（返回错误码/错误信息） */
        fail?: (res: BluetoothErrorResult) => void;
        /** 完成回调（成功/失败都执行） */
        complete?: () => void;
    }

    /**
     * setBLEMTU - 协商设置蓝牙低功耗的最大传输单元（仅 Android 支持）
     * @platform Android、基础库 3.73.0+
     */
    interface SetBLEMTUOptions {
        /** 蓝牙设备 id（必填） */
        deviceId: string;
        /** 最大传输单元（必填，范围 22 < mtu ≤ 512，单位 bytes） */
        mtu: number;
        /** 成功回调（返回最终协商的 MTU 值） */
        success?: (res: { mtu: number }) => void;
        /** 失败回调（返回错误码/错误信息，包含最终协商的 MTU 值） */
        fail?: (res: BluetoothErrorResult & { mtu?: number }) => void;
        /** 完成回调（成功/失败都执行） */
        complete?: () => void;
    }

    // ------------------------------ 监听/取消监听回调类型 ------------------------------
    /**
     * onBLEConnectionStateChange - 监听 BLE 连接状态变化的回调
     * @platform 基础库 3.73.0+
     */
    type BLEConnectionStateChangeCallback = (
        res: BLEConnectionStateChangeResult,
    ) => void;

    /**
     * onBLECharacteristicValueChange - 监听 BLE 特征值变化的回调
     * @platform 基础库 3.73.0+
     */
    type BLECharacteristicValueChangeCallback = (
        res: BLECharacteristicValueChangeResult,
    ) => void;

    /**
     * onBLEMTUChange - 监听 BLE MTU 变化的回调（仅 Android 支持）
     * @platform Android、基础库 3.73.0+
     */
    type BLEMTUChangeCallback = (res: BLEMTUChangeResult) => void;
    // ------------------------------ 新增枚举类型 ------------------------------
    /**
     * BLE 外围设备广播功率等级（仅 Android 支持）
     * @platform Android、基础库 3.73.0+
     */
    type BLEPeripheralAdvertisePowerLevel = "low" | "medium" | "high";

    // ------------------------------ 新增通用类型 ------------------------------
    /**
     * BLE 外围设备特征属性配置
     * @platform 基础库 3.73.0+
     */
    interface BLEPeripheralCharacteristicProperties {
        /** 是否支持写操作，默认 false */
        write?: boolean;
        /** 是否支持写无回复操作，默认 false */
        writeNoResponse?: boolean;
        /** 是否支持读操作，默认 false */
        read?: boolean;
        /** 是否支持订阅操作，默认 false */
        notify?: boolean;
        /** 是否支持回包操作，默认 false */
        indicate?: boolean;
    }

    /**
     * BLE 外围设备特征权限配置
     * @platform 基础库 3.73.0+
     */
    interface BLEPeripheralCharacteristicPermission {
        /** 是否可读，默认 false */
        readable?: boolean;
        /** 是否可写，默认 false */
        writeable?: boolean;
        /** 是否需要加密读请求，默认 false */
        readEncryptionRequired?: boolean;
        /** 是否需要加密写请求，默认 false */
        writeEncryptionRequired?: boolean;
    }

    /**
     * BLE 外围设备描述符权限配置
     * @platform 基础库 3.73.0+
     */
    interface BLEPeripheralDescriptorPermission {
        /** 是否支持写操作，默认 false */
        write?: boolean;
        /** 是否支持读操作，默认 false */
        read?: boolean;
    }

    /**
     * BLE 外围设备描述符配置
     * @platform 基础库 3.73.0+
     */
    interface BLEPeripheralDescriptor {
        /** Descriptor 的 UUID（必填） */
        uuid: string;
        /** 描述符的权限配置 */
        permission?: BLEPeripheralDescriptorPermission;
        /** 描述符二进制数据 */
        value?: ArrayBuffer;
    }

    /**
     * BLE 外围设备特征配置
     * @platform 基础库 3.73.0+
     */
    interface BLEPeripheralCharacteristic {
        /** characteristic 的 UUID（必填） */
        uuid: string;
        /** 特征支持的操作属性 */
        properties?: BLEPeripheralCharacteristicProperties;
        /** 特征权限配置 */
        permission?: BLEPeripheralCharacteristicPermission;
        /** 特征对应的二进制值 */
        value?: ArrayBuffer;
        /** 描述符数据列表 */
        descriptors?: BLEPeripheralDescriptor[];
    }

    /**
     * BLE 外围设备服务配置
     * @platform 基础库 3.73.0+
     */
    interface BLEPeripheralService {
        /** 蓝牙服务的 UUID（必填） */
        uuid: string;
        /** characteristics 列表（必填） */
        characteristics: BLEPeripheralCharacteristic[];
    }

    /**
     * BLE 外围设备广播制造商信息（仅 Android 支持）
     * @platform Android、基础库 3.73.0+
     */
    interface BLEPeripheralManufacturerData {
        /** 制造商ID（0x 开头的十六进制，必填） */
        manufacturerId: string;
        /** 制造商自定义二进制信息 */
        manufacturerSpecificData?: ArrayBuffer;
    }

    /**
     * BLE 外围设备广播自定义参数
     * @platform 基础库 3.73.0+
     */
    interface BLEPeripheralAdvertiseRequest {
        /** 当前设备是否可连接（iOS 不生效），默认 true */
        connectable?: boolean;
        /** 广播中 deviceName 字段，默认为空 */
        deviceName?: string;
        /** 要广播的服务 UUID 列表（Android 8.0.9+ 支持 16/32/128 位，iOS 仅支持 16 位） */
        serviceUuids?: string[];
        /** 广播的制造商信息（仅安卓支持） */
        notify?: BLEPeripheralManufacturerData[];
    }

    /**
     * BLE 外围设备连接状态变化回调参数（仅 Android 支持）
     * @platform Android、基础库 3.73.0+
     */
    interface BLEPeripheralConnectionStateChangedResult {
        /** 连接状态变化的设备 id */
        deviceId: string;
        /** server 的 UUID */
        serverId: string;
        /** 当前连接状态 */
        connected: boolean;
    }

    /**
     * 特征写请求回调参数
     * @platform 基础库 3.73.0+
     */
    interface BLEPeripheralCharacteristicWriteRequestResult {
        /** 蓝牙特征对应服务的 UUID */
        serviceId: string;
        /** 蓝牙特征的 UUID */
        characteristicId: string;
        /** 唯一标识码（调用 writeCharacteristicValue 时使用） */
        callbackId: number;
        /** 请求写入特征的二进制数据值 */
        value: ArrayBuffer;
    }

    /**
     * 特征读请求回调参数
     * @platform 基础库 3.73.0+
     */
    interface BLEPeripheralCharacteristicReadRequestResult {
        /** 蓝牙特征对应服务的 UUID */
        serviceId: string;
        /** 蓝牙特征的 UUID */
        characteristicId: string;
        /** 唯一标识码（调用 writeCharacteristicValue 时使用） */
        callbackId: number;
    }

    /**
     * 特征订阅/取消订阅回调参数（仅 iOS 支持）
     * @platform iOS、基础库 3.73.0+
     */
    interface BLEPeripheralCharacteristicSubscribeResult {
        /** 蓝牙特征对应服务的 UUID */
        serviceId: string;
        /** 蓝牙特征的 UUID */
        characteristicId: string;
    }

    // ------------------------------ BLEPeripheralServer 类定义 ------------------------------
    /**
     * BLE 外围设备服务端实例
     * @platform 基础库 3.73.0+
     */
    interface BLEPeripheralServer {
        /**
         * 添加服务
         * @platform 基础库 3.73.0+
         * @param options 服务配置参数
         * @example
         * BLEPeripheralServer.addService(function (res) {
         *   service,
         *   console.log('addService:', res)
         * })
         */
        addService: (options: {
            /** 描述service的Object（必填） */
            service: BLEPeripheralService;
            /** 成功回调 */
            success?: () => void;
            /** 失败回调（返回错误码/错误信息） */
            fail?: (res: BluetoothErrorResult) => void;
            /** 完成回调（成功/失败都执行） */
            complete?: () => void;
        }) => void;

        /**
         * 移除服务
         * @platform 基础库 3.73.0+
         * @param options 移除服务配置
         * @example
         * BLEPeripheralServer.removeService(function (res) {
         *   service,
         *   console.log('removeService:', res)
         * })
         */
        removeService: (options: {
            /** service 的 UUID（必填） */
            serviceId: string;
            /** 成功回调 */
            success?: () => void;
            /** 失败回调（返回错误码/错误信息） */
            fail?: (res: BluetoothErrorResult) => void;
            /** 完成回调（成功/失败都执行） */
            complete?: () => void;
        }) => void;

        /**
         * 开始广播本地创建的外围设备
         * @platform 基础库 3.73.0+
         * @description Android 支持多广播，iOS 仅支持单广播；UUID 格式需匹配系统版本约束
         * @param options 广播配置
         * @example
         * BLEPeripheralServer.startAdvertising(function (res) {
         *   advertiseRequest,
         *   console.log('startAdvertising:', res)
         * })
         */
        startAdvertising: (options: {
            /** 广播自定义参数（必填） */
            advertiseRequest: BLEPeripheralAdvertiseRequest;
            /** 广播功率（仅安卓支持），默认 medium */
            powerLevel?: BLEPeripheralAdvertisePowerLevel;
            /** 成功回调 */
            success?: () => void;
            /** 失败回调（返回错误码/错误信息） */
            fail?: (res: BluetoothErrorResult) => void;
            /** 完成回调（成功/失败都执行） */
            complete?: () => void;
        }) => void;

        /**
         * 停止广播
         * @platform 基础库 3.73.0+
         * @param options 停止广播配置
         * @example
         * BLEPeripheralServer.stopAdvertising(function (res) {
         *   service,
         *   console.log('stopAdvertising:', res)
         * })
         */
        stopAdvertising: (options: {
            /** 成功回调 */
            success?: () => void;
            /** 失败回调（返回错误码/错误信息） */
            fail?: (res: BluetoothErrorResult) => void;
            /** 完成回调（成功/失败都执行） */
            complete?: () => void;
        }) => void;

        /**
         * 往指定特征写入二进制数据值，并通知已连接的主机
         * @platform 基础库 3.73.0+
         * @description 收到读/写请求后需立即调用该接口写回数据，否则主机无响应
         * @param options 写入配置
         * @example
         * BLEPeripheralServer.writeCharacteristicValue(function (res) {
         *   serviceId,
         *   characteristicId,
         *   value,
         *   console.log('writeCharacteristicValue:', res)
         * })
         */
        writeCharacteristicValue: (options: {
            /** 蓝牙特征对应服务的 UUID（必填） */
            serviceId: string;
            /** 蓝牙特征的 UUID（必填） */
            characteristicId: string;
            /** characteristic 对应的二进制值（必填） */
            value: ArrayBuffer;
            /** 是否需要通知主机 value 已更新（必填） */
            needNotify: boolean;
            /** 可选，处理回包时使用的唯一标识码 */
            callbackId?: number;
            /** 成功回调 */
            success?: () => void;
            /** 失败回调（返回错误码/错误信息） */
            fail?: (res: BluetoothErrorResult) => void;
            /** 完成回调（成功/失败都执行） */
            complete?: () => void;
        }) => void;

        /**
         * 关闭当前服务端
         * @platform 基础库 3.73.0+
         * @param options 关闭配置
         * @example
         * LEPeripheralServer.close()
         */
        close: (options: {
            /** 成功回调 */
            success?: () => void;
            /** 失败回调（返回错误码/错误信息） */
            fail?: (res: BluetoothErrorResult) => void;
            /** 完成回调（成功/失败都执行） */
            complete?: () => void;
        }) => void;

        /**
         * 监听已连接的设备请求写当前外围设备的特征值事件
         * @platform 基础库 3.73.0+
         * @param callback 写请求回调
         * @example
         * peripheralServer.onCharacteristicWriteRequest(function (res) {
         *   console.log('onCharacteristicWriteRequest', res)
         * })
         */
        onCharacteristicWriteRequest: (
            callback: (
                res: BLEPeripheralCharacteristicWriteRequestResult,
            ) => void,
        ) => void;

        /**
         * 监听已连接的设备请求读当前外围设备的特征值事件
         * @platform 基础库 3.73.0+
         * @param callback 读请求回调
         * @example
         * peripheralServer.onCharacteristicReadRequest(function (res) {
         *   console.log('onCharacteristicReadRequest', res)
         * })
         */
        onCharacteristicReadRequest: (
            callback: (
                res: BLEPeripheralCharacteristicReadRequestResult,
            ) => void,
        ) => void;

        /**
         * 监听特征订阅事件（仅 iOS 支持）
         * @platform iOS、基础库 3.73.0+
         * @param callback 订阅事件回调
         * @example
         * peripheralServer.onCharacteristicSubscribed(function (res) {
         *   console.log('onCharacteristicSubscribed', res)
         * })
         */
        onCharacteristicSubscribed: (
            callback: (res: BLEPeripheralCharacteristicSubscribeResult) => void,
        ) => void;

        /**
         * 监听取消特征订阅事件（仅 iOS 支持）
         * @platform iOS、基础库 3.73.0+
         * @param callback 取消订阅事件回调
         * @example
         * peripheralServer.onCharacteristicUnsubscribed(function (res) {
         *   console.log('onCharacteristicUnsubscribed', res)
         * })
         */
        onCharacteristicUnsubscribed: (
            callback: (res: BLEPeripheralCharacteristicSubscribeResult) => void,
        ) => void;

        /**
         * 取消监听已连接的设备请求写当前外围设备的特征值事件
         * @platform 基础库 3.73.0+
         * @param callback 要取消的回调函数（不传则取消所有）
         * @example
         * BLEPeripheralServer.offCharacteristicWriteRequest()
         */
        offCharacteristicWriteRequest: (
            callback?: (
                res: BLEPeripheralCharacteristicWriteRequestResult,
            ) => void,
        ) => void;

        /**
         * 取消监听已连接的设备请求读当前外围设备的特征值事件
         * @platform 基础库 3.73.0+
         * @param callback 要取消的回调函数（不传则取消所有）
         * @example
         * BLEPeripheralServer.offCharacteristicReadRequest()
         */
        offCharacteristicReadRequest: (
            callback?: (
                res: BLEPeripheralCharacteristicReadRequestResult,
            ) => void,
        ) => void;

        /**
         * 取消监听特征订阅事件
         * @platform 基础库 3.73.0+
         * @param callback 要取消的回调函数（不传则取消所有）
         * @example
         * BLEPeripheralServer.offCharacteristicSubscribed()
         */
        offCharacteristicSubscribed: (
            callback?: (
                res: BLEPeripheralCharacteristicSubscribeResult,
            ) => void,
        ) => void;

        /**
         * 取消监听取消特征订阅事件
         * @platform 基础库 3.73.0+
         * @param callback 要取消的回调函数（不传则取消所有）
         * @example
         * BLEPeripheralServer.offCharacteristicUnsubscribed()
         */
        offCharacteristicUnsubscribed: (
            callback?: (
                res: BLEPeripheralCharacteristicSubscribeResult,
            ) => void,
        ) => void;
    }

    // ------------------------------ 接口参数类型 ------------------------------
    /**
     * createBLEPeripheralServer - 建立本地作为蓝牙低功耗外围设备的服务端
     * @platform 基础库 3.73.0+
     */
    interface CreateBLEPeripheralServerOptions {
        /** 成功回调（返回外围设备服务端实例） */
        success?: (res: { server: BLEPeripheralServer }) => void;
        /** 失败回调（返回错误码/错误信息） */
        fail?: (res: BluetoothErrorResult) => void;
        /** 完成回调（成功/失败都执行） */
        complete?: () => void;
    }

    // ------------------------------ 监听/取消监听回调类型 ------------------------------
    /**
     * onBLEPeripheralConnectionStateChanged - 监听外围设备连接状态变化的回调（仅 Android 支持）
     * @platform Android、基础库 3.73.0+
     */
    type BLEPeripheralConnectionStateChangedCallback = (
        res: BLEPeripheralConnectionStateChangedResult,
    ) => void;
    // ------------------------------ 核心枚举类型 ------------------------------
    /**
     * 蓝牙模式枚举（仅 iOS 需指定）
     * @platform iOS、基础库 3.73.0+
     */
    type BluetoothMode = "central" | "peripheral";

    /**
     * 蓝牙扫描功率等级枚举（仅 Android 支持）
     * @platform Android、基础库 3.73.0+
     */
    type BluetoothPowerLevel = "low" | "medium" | "high";

    /**
     * 蓝牙接口错误码枚举
     * @platform 基础库 3.73.0+
     */
    type BluetoothErrCode =
        | 0 // 正常
        | -1 // 已连接
        | 10000 // 未初始化蓝牙适配器
        | 10001 // 当前蓝牙适配器不可用
        | 10002 // 没有找到指定设备
        | 10003 // 连接失败
        | 10004 // 没有找到指定服务
        | 10005 // 没有找到指定特征
        | 10006 // 当前连接已断开
        | 10007 // 当前特征不支持此操作
        | 10008 // 其余所有系统上报的异常
        | 10009 // Android 系统特有，系统版本低于 4.3 不支持 BLE
        | 10012 // 连接超时
        | 10013 // 连接 deviceId 为空或者是格式不正确
        | 10014; // 参数不正确

    // ------------------------------ 通用类型 ------------------------------
    /**
     * 蓝牙操作错误回调参数
     * @platform 基础库 3.73.0+
     */
    interface BluetoothErrorResult {
        /** 错误码 */
        errCode: BluetoothErrCode;
        /** 错误信息 */
        errMsg: string;
    }

    /**
     * 基础蓝牙设备信息（精简版，用于已连接设备列表）
     * @platform 基础库 3.73.0+
     */
    interface BasicBluetoothDevice {
        /** 蓝牙设备名称（某些设备可能没有） */
        name?: string;
        /** 用于区分设备的唯一 ID */
        deviceId: string;
    }

    /**
     * 完整蓝牙设备信息（包含广播数据、信号强度等）
     * @platform 基础库 3.73.0+
     */
    interface CompleteBluetoothDevice extends BasicBluetoothDevice {
        /** 当前蓝牙设备的信号强度（单位 dBm） */
        RSSI: number;
        /** 广播数据段中的 ManufacturerData 数据段 */
        advertisData: ArrayBuffer;
        /** 广播数据段中的 ServiceUUIDs 数据段 */
        advertisServiceUUIDs: string[];
        /** 广播数据段中的 LocalName 数据段 */
        localName: string;
        /** 广播数据段中的 ServiceData 数据段 */
        serviceData: Record<string, any>;
        /** 当前蓝牙设备是否可连接（Android 8.0 以下不支持返回该值） */
        connectable?: boolean;
    }

    /**
     * 蓝牙适配器状态
     * @platform 基础库 3.73.0+
     */
    interface BluetoothAdapterState {
        /** 是否正在搜索设备 */
        discovering: boolean;
        /** 蓝牙适配器是否可用 */
        available: boolean;
    }

    // ------------------------------ 接口参数类型 ------------------------------
    /**
     * openBluetoothAdapter - 初始化蓝牙模块
     * @platform 基础库 3.73.0+
     */
    interface OpenBluetoothAdapterOptions {
        /** 蓝牙模式（仅 iOS 需要），默认 central */
        mode?: BluetoothMode;
        /** 成功回调 */
        success?: () => void;
        /** 失败回调（返回错误码/错误信息） */
        fail?: (res: BluetoothErrorResult) => void;
        /** 完成回调（成功/失败都执行） */
        complete?: () => void;
    }

    /**
     * closeBluetoothAdapter - 关闭蓝牙模块
     * @platform 基础库 3.73.0+
     */
    interface CloseBluetoothAdapterOptions {
        /** 成功回调 */
        success?: () => void;
        /** 失败回调（返回错误码/错误信息） */
        fail?: (res: BluetoothErrorResult) => void;
        /** 完成回调（成功/失败都执行） */
        complete?: () => void;
    }

    /**
     * startBluetoothDevicesDiscovery - 开始搜寻蓝牙外围设备
     * @platform 基础库 3.73.0+
     */
    interface StartBluetoothDevicesDiscoveryOptions {
        /** 要搜索的蓝牙设备主服务的 UUID 列表（支持 16/32/128 位 UUID） */
        services?: string[];
        /** 是否允许重复上报同一设备，默认 false */
        allowDuplicatesKey?: boolean;
        /** 上报设备的间隔（单位 ms），默认 0（立即上报） */
        interval?: number;
        /** 扫描模式（仅安卓支持），默认 medium */
        powerLevel?: BluetoothPowerLevel;
        /** 成功回调 */
        success?: () => void;
        /** 失败回调（返回错误码/错误信息） */
        fail?: (res: BluetoothErrorResult) => void;
        /** 完成回调（成功/失败都执行） */
        complete?: () => void;
    }

    /**
     * stopBluetoothDevicesDiscovery - 停止搜寻蓝牙外围设备
     * @platform 基础库 3.73.0+
     */
    interface StopBluetoothDevicesDiscoveryOptions {
        /** 成功回调 */
        success?: () => void;
        /** 失败回调（返回错误码/错误信息） */
        fail?: (res: BluetoothErrorResult) => void;
        /** 完成回调（成功/失败都执行） */
        complete?: () => void;
    }

    /**
     * getConnectedBluetoothDevices - 根据主服务 UUID 获取已连接的蓝牙设备
     * @platform 基础库 3.73.0+
     */
    interface GetConnectedBluetoothDevicesOptions {
        /** 蓝牙设备主服务的 UUID 列表（必填，支持 16/32/128 位 UUID） */
        services: string[];
        /** 成功回调（返回已连接设备列表） */
        success?: (res: { devices: BasicBluetoothDevice[] }) => void;
        /** 失败回调（返回错误码/错误信息） */
        fail?: (res: BluetoothErrorResult) => void;
        /** 完成回调（成功/失败都执行） */
        complete?: () => void;
    }

    /**
     * getBluetoothDevices - 获取所有搜索到的蓝牙设备
     * @platform 基础库 3.73.0+
     */
    interface GetBluetoothDevicesOptions {
        /** 成功回调（返回所有搜索到的设备列表） */
        success?: (res: { devices: CompleteBluetoothDevice[] }) => void;
        /** 失败回调（返回错误码/错误信息） */
        fail?: (res: BluetoothErrorResult) => void;
        /** 完成回调（成功/失败都执行） */
        complete?: () => void;
    }

    /**
     * getBluetoothAdapterState - 获取本机蓝牙适配器状态
     * @platform 基础库 3.73.0+
     */
    interface GetBluetoothAdapterStateOptions {
        /** 成功回调（返回适配器状态） */
        success?: (res: BluetoothAdapterState) => void;
        /** 失败回调（返回错误码/错误信息） */
        fail?: (res: BluetoothErrorResult) => void;
        /** 完成回调（成功/失败都执行） */
        complete?: () => void;
    }

    /**
     * isBluetoothDevicePaired - 查询蓝牙设备是否配对（仅 Android 支持）
     * @platform Android、基础库 3.73.0+
     */
    interface IsBluetoothDevicePairedOptions {
        /** 蓝牙设备 id（必填） */
        deviceId: string;
        /** 成功回调（返回配对状态） */
        success?: (res: { paired: boolean }) => void;
        /** 失败回调（返回错误码/错误信息） */
        fail?: (res: BluetoothErrorResult) => void;
        /** 完成回调（成功/失败都执行） */
        complete?: () => void;
    }

    // ------------------------------ 监听/取消监听回调类型 ------------------------------
    /**
     * onBluetoothDeviceFound - 监听搜索到新设备的事件回调
     * @platform 基础库 3.73.0+
     */
    type BluetoothDeviceFoundCallback = (res: {
        devices: CompleteBluetoothDevice[];
    }) => void;

    /**
     * onBluetoothAdapterStateChange - 监听蓝牙适配器状态变化的事件回调
     * @platform 基础库 3.73.0+
     */
    type BluetoothAdapterStateChangeCallback = (
        res: BluetoothAdapterState,
    ) => void;
    // ------------------------------ 通用类型 ------------------------------
    /**
     * 获取剪贴板数据成功回调结果
     * @platform 基础库通用
     */
    interface GetClipboardDataSuccessResult {
        /** 剪贴板的内容 */
        data: string;
    }

    // ------------------------------ 接口参数类型 ------------------------------
    /**
     * setClipboardData - 设置系统剪贴板的内容
     * @platform 基础库通用
     */
    interface SetClipboardDataOptions {
        /** 剪贴板的内容（必填） */
        data: string;
        /** 成功回调 */
        success?: () => void;
        /** 失败回调（返回错误码/错误信息） */
        fail?: () => void;
        /** 完成回调（成功/失败都执行） */
        complete?: () => void;
    }

    /**
     * getClipboardData - 获取系统剪贴板的内容
     * @platform 基础库通用
     */
    interface GetClipboardDataOptions {
        /** 成功回调（返回剪贴板内容） */
        success?: (res: GetClipboardDataSuccessResult) => void;
        /** 失败回调（返回错误码/错误信息） */
        fail?: () => void;
        /** 完成回调（成功/失败都执行） */
        complete?: () => void;
    }
    // ------------------------------ 新增通用类型 ------------------------------
    /**
     * 罗盘数据变化事件回调参数
     * @platform 基础库通用
     * @description 监听频率固定为 5 次/秒
     */
    interface CompassChangeResult {
        /** 面对的方向度数（角度值） */
        direction: number;
        /** 精度（支持数字/字符串类型） */
        accuracy: number | string;
    }

    // ------------------------------ 接口参数类型 ------------------------------
    /**
     * startCompass - 开始监听罗盘数据
     * @platform 基础库通用
     */
    interface StartCompassOptions {
        /** 成功回调 */
        success?: () => void;
        /** 失败回调（返回错误码/错误信息） */
        fail?: () => void;
        /** 完成回调（成功/失败都执行） */
        complete?: () => void;
    }

    /**
     * stopCompass - 停止监听罗盘数据
     * @platform 基础库通用
     */
    interface StopCompassOptions {
        /** 成功回调 */
        success?: () => void;
        /** 失败回调（返回错误码/错误信息） */
        fail?: () => void;
        /** 完成回调（成功/失败都执行） */
        complete?: () => void;
    }

    // ------------------------------ 监听回调类型 ------------------------------
    /**
     * onCompassChange - 监听罗盘数据变化的回调
     * @platform 基础库通用
     * @description 回调频率固定为 5 次/秒
     */
    type CompassChangeCallback = (res: CompassChangeResult) => void;
    // ------------------------------ 新增枚举类型 ------------------------------
    /**
     * 设备运动监听频率枚举
     * @platform 基础库通用
     */
    type DeviceMotionInterval = "game" | "ui" | "normal";

    /**
     * 设备方向枚举
     * @platform 基础库 3.6.0+、iOS/Android App 6.0.0+
     */
    type DeviceOrientation = "portrait" | "landscape";

    // ------------------------------ 新增通用类型 ------------------------------
    /**
     * 引力加速度信息（基础库 3.94.0+ 支持）
     * @platform 基础库 3.94.0+
     */
    interface GravityInfo {
        /** x 轴方向的引力加速度 */
        x: number;
        /** y 轴方向的引力加速度 */
        y: number;
        /** z 轴方向的引力加速度 */
        z: number;
    }

    /**
     * 设备方向变化事件回调参数
     * @platform 基础库通用（gravity 字段 3.94.0+ 支持）
     */
    interface DeviceMotionChangeResult {
        /** 绕 Z 轴转动夹角，范围 [0, 2π)，逆时针为正 */
        alpha: number;
        /** 绕 X 轴转动夹角，范围 [-π, π)，顶部朝地球表面为正 */
        beta: number;
        /** 绕 Y 轴转动夹角，范围 [-π/2, π/2)，右边朝地球表面为正 */
        gamma: number;
        /** 引力加速度信息（基础库 3.94.0+） */
        gravity?: GravityInfo;
    }

    // ------------------------------ 接口参数类型 ------------------------------
    /**
     * startDeviceMotionListening - 开始监听设备方向的变化
     * @platform 基础库通用
     */
    interface StartDeviceMotionListeningOptions {
        /** 回调执行频率，默认 normal */
        interval?: DeviceMotionInterval;
        /** 成功回调 */
        success?: () => void;
        /** 失败回调（返回错误码/错误信息） */
        fail?: () => void;
        /** 完成回调（成功/失败都执行） */
        complete?: () => void;
    }

    /**
     * stopDeviceMotionListening - 停止监听设备方向的变化
     * @platform 基础库通用
     */
    interface StopDeviceMotionListeningOptions {
        /** 成功回调 */
        success?: () => void;
        /** 失败回调（返回错误码/错误信息） */
        fail?: () => void;
        /** 完成回调（成功/失败都执行） */
        complete?: () => void;
    }

    /**
     * setDeviceOrientation - 设置当前设备方向
     * @platform 基础库 3.6.0+、iOS/Android App 6.0.0+
     */
    interface SetDeviceOrientationOptions {
        /** 设备方向（必填） */
        newValue: DeviceOrientation;
        /** 成功回调 */
        success?: () => void;
        /** 失败回调（返回错误码/错误信息） */
        fail?: () => void;
        /** 完成回调（成功/失败都执行） */
        complete?: () => void;
    }

    /**
     * restoreDeviceOrientation - 恢复当前设备方向（按 game.json 配置）
     * @platform 基础库通用
     */
    interface RestoreDeviceOrientationOptions {
        /** 成功回调 */
        success?: () => void;
        /** 失败回调（返回错误码/错误信息） */
        fail?: () => void;
        /** 完成回调（成功/失败都执行） */
        complete?: () => void;
    }

    // ------------------------------ 监听/取消监听回调类型 ------------------------------
    /**
     * onDeviceMotionChange - 监听设备方向变化的回调
     * @platform 基础库通用
     */
    type DeviceMotionChangeCallback = (res: DeviceMotionChangeResult) => void;
    // ------------------------------ 复用枚举类型 ------------------------------
    /**
     * 陀螺仪监听频率枚举（复用加速度/设备运动的同语义枚举）
     * @platform 基础库通用
     */
    type GyroscopeInterval = "game" | "ui" | "normal";

    // ------------------------------ 新增通用类型 ------------------------------
    /**
     * 陀螺仪数据变化事件回调参数
     * @platform 基础库通用
     */
    interface GyroscopeChangeResult {
        /** X 轴的角速度 */
        x: number;
        /** Y 轴的角速度 */
        y: number;
        /** Z 轴的角速度 */
        z: number;
    }

    // ------------------------------ 接口参数类型 ------------------------------
    /**
     * startGyroscope - 开始监听陀螺仪数据
     * @platform 基础库通用
     */
    interface StartGyroscopeOptions {
        /** 回调执行频率，默认 normal */
        interval?: GyroscopeInterval;
        /** 成功回调 */
        success?: () => void;
        /** 失败回调（返回错误码/错误信息） */
        fail?: () => void;
        /** 完成回调（成功/失败都执行） */
        complete?: () => void;
    }

    /**
     * stopGyroscope - 停止监听陀螺仪数据
     * @platform 基础库通用
     */
    interface StopGyroscopeOptions {
        /** 成功回调 */
        success?: () => void;
        /** 失败回调（返回错误码/错误信息） */
        fail?: () => void;
        /** 完成回调（成功/失败都执行） */
        complete?: () => void;
    }

    // ------------------------------ 监听回调类型 ------------------------------
    /**
     * onGyroscopeChange - 监听陀螺仪数据变化的回调
     * @platform 基础库通用
     * @description 频率由 startGyroscope 的 interval 参数控制
     */
    type GyroscopeChangeCallback = (res: GyroscopeChangeResult) => void;
    // ------------------------------ 新增枚举类型 ------------------------------
    /**
     * 内存告警等级枚举（仅 Android 支持）
     * @platform Android、基础库 2.4.0+
     */
    enum MemoryWarningLevel {
        /** TRIM_MEMORY_RUNNING_MODERATE */
        MODERATE = 5,
        /** TRIM_MEMORY_RUNNING_LOW */
        LOW = 10,
        /** TRIM_MEMORY_RUNNING_CRITICAL */
        CRITICAL = 15,
    }

    // ------------------------------ 新增通用类型 ------------------------------
    /**
     * 内存不足告警事件回调参数
     * @platform 基础库 2.4.0+（Android 有 level 字段，iOS 无）
     */
    interface MemoryWarningResult {
        /** 内存告警等级（仅 Android 才有，对应系统宏定义） */
        level?: MemoryWarningLevel;
    }

    // ------------------------------ 监听回调类型 ------------------------------
    /**
     * onMemoryWarning - 监听内存不足告警的回调
     * @platform 基础库 2.4.0+（Android 有 level 字段，iOS 无）
     */
    type MemoryWarningCallback = (res: MemoryWarningResult) => void;
    // ------------------------------ 新增枚举类型 ------------------------------
    /**
     * 网络类型枚举
     * @platform 基础库通用（5g 字段 3.20.0+ 支持）
     */
    type NetworkType = "wifi" | "2g" | "3g" | "4g" | "5g" | "unknown" | "none";

    // ------------------------------ 新增通用类型 ------------------------------
    /**
     * 网络状态变化回调参数
     * @platform 基础库通用（5g 字段 3.20.0+ 支持）
     */
    interface NetworkStatusChangeResult {
        /** 当前是否有网络连接 */
        isConnected: boolean;
        /** 网络类型（5g 字段 3.20.0+ 支持） */
        networkType: NetworkType;
    }

    /**
     * 获取网络类型成功回调结果
     * @platform 基础库通用（5g 字段 3.20.0+ 支持）
     */
    interface GetNetworkTypeSuccessResult {
        /** 网络类型（5g 字段 3.20.0+ 支持） */
        networkType: NetworkType;
    }

    // ------------------------------ 接口参数类型 ------------------------------
    /**
     * getNetworkType - 获取网络类型
     * @platform 基础库通用（5g 字段 3.20.0+ 支持）
     */
    interface GetNetworkTypeOptions {
        /** 成功回调（返回网络类型） */
        success?: (res: GetNetworkTypeSuccessResult) => void;
        /** 失败回调（返回错误码/错误信息） */
        fail?: (res: BluetoothErrorResult) => void;
        /** 完成回调（成功/失败都执行） */
        complete?: () => void;
    }

    // ------------------------------ 监听/取消监听回调类型 ------------------------------
    /**
     * onNetworkStatusChange - 监听网络状态变化的回调
     * @platform 基础库通用（5g 字段 3.20.0+ 支持）
     */
    type NetworkStatusChangeCallback = (res: NetworkStatusChangeResult) => void;
    // ------------------------------ 通用类型 ------------------------------
    /**
     * 获取屏幕亮度成功回调结果
     * @platform 基础库通用
     * @description Android 自动亮度模式下仅返回调节前的值，非实时值
     */
    interface GetScreenBrightnessSuccessResult {
        /** 屏幕亮度值，范围 0 ~ 1（0 最暗，1 最亮） */
        value: number;
    }

    // ------------------------------ 接口参数类型 ------------------------------
    /**
     * setScreenBrightness - 设置屏幕亮度
     * @platform 基础库通用
     */
    interface SetScreenBrightnessOptions {
        /** 屏幕亮度值，范围 0 ~ 1（必填） */
        value: number;
        /** 成功回调 */
        success?: () => void;
        /** 失败回调（返回错误码/错误信息） */
        fail?: () => void;
        /** 完成回调（成功/失败都执行） */
        complete?: () => void;
    }

    /**
     * setKeepScreenOn - 设置屏幕常亮状态
     * @platform 基础库通用
     * @description 仅当前小游戏生效，离开后失效
     */
    interface SetKeepScreenOnOptions {
        /** 是否保持屏幕常亮（必填） */
        keepScreenOn: boolean;
        /** 成功回调 */
        success?: () => void;
        /** 失败回调（返回错误码/错误信息） */
        fail?: () => void;
        /** 完成回调（成功/失败都执行） */
        complete?: () => void;
    }

    /**
     * getScreenBrightness - 获取屏幕亮度
     * @platform 基础库通用
     * @description Android 自动亮度模式下仅返回调节前的值，非实时值
     */
    interface GetScreenBrightnessOptions {
        /** 成功回调（返回屏幕亮度值） */
        success?: (res: GetScreenBrightnessSuccessResult) => void;
        /** 失败回调（返回错误码/错误信息） */
        fail?: () => void;
        /** 完成回调（成功/失败都执行） */
        complete?: () => void;
    }

    /**
     * setStatusBarHidden - 显示/隐藏顶部状态栏
     * @platform 基础库 3.37.0+
     */
    interface SetStatusBarHiddenOptions {
        /** 是否隐藏状态栏（必填） */
        hidden: boolean;
        /** 成功回调 */
        success?: () => void;
        /** 失败回调（返回错误码/错误信息） */
        fail?: () => void;
        /** 完成回调（成功/失败都执行） */
        complete?: () => void;
    }

    // ------------------------------ 监听回调类型 ------------------------------
    /**
     * onUserCaptureScreen - 监听用户截屏事件的回调
     * @platform 基础库 3.22.0+
     */
    type UserCaptureScreenCallback = (res?: Record<string, never>) => void;
    // ------------------------------ 接口参数类型 ------------------------------
    /**
     * vibrateLong - 使手机发生较长时间的振动（400ms）
     * @platform 基础库通用
     */
    interface VibrateLongOptions {
        /** 成功回调 */
        success?: () => void;
        /** 失败回调（返回错误码/错误信息） */
        fail?: () => void;
        /** 完成回调（成功/失败都执行） */
        complete?: () => void;
    }

    /**
     * vibrateShort - 使手机发生较短时间的振动（15ms）
     * @platform 基础库通用（仅 iPhone 7/7 Plus 以上及 Android 机型生效）
     */
    interface VibrateShortOptions {
        /** 成功回调 */
        success?: () => void;
        /** 失败回调（返回错误码/错误信息） */
        fail?: () => void;
        /** 完成回调（成功/失败都执行） */
        complete?: () => void;
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
     * InnerAudioContext 播放错误码枚举
     */
    type InnerAudioErrorCode = 10001 | 10002 | 10003 | 10004 | -1;

    /**
     * InnerAudioContext.onError 回调参数类型
     */
    interface InnerAudioErrorResult {
        /** 错误码：10001=系统错误、10002=网络错误、10003=文件错误、10004=格式错误、-1=未知错误 */
        errCode: InnerAudioErrorCode;
    }

    /**
     * setInnerAudioOption 接口调用参数类型
     * @description 设置 InnerAudioContext 播放选项，对当前小游戏全局生效
     */
    interface SetInnerAudioOptionOptions {
        /** 是否与其他音频混播（不终止其他应用音乐），默认 true */
        mixWithOther?: boolean;
        /** （仅 iOS 生效）是否遵循静音开关，默认 true；设为 false 时静音模式也能播放声音 */
        obeyMuteSwitch?: boolean;
        /** 接口调用成功的回调函数 */
        success?: () => void;
        /** 接口调用失败的回调函数 */
        fail?: (err?: any) => void;
        /** 接口调用结束的回调函数（成功/失败都会执行） */
        complete?: () => void;
    }

    /**
     * 内部音频上下文实例（由 bl.createInnerAudioContext 创建）
     */
    interface InnerAudioContext {
        /** 音频资源地址（用于直接播放） */
        src: string;
        /** 开始播放位置（单位：s），默认 0 */
        startTime: number;
        /** 是否自动播放，默认 false */
        autoplay: boolean;
        /** 是否循环播放，默认 false */
        loop: boolean;
        /** （仅 iOS 生效）是否遵循系统静音开关，默认 true；设为 false 时静音模式也能播放 */
        obeyMuteSwitch: boolean;
        /** 音量（范围 0~1），默认 1 */
        volume: number;
        /** 当前音频长度（单位：s），仅当 src 合法时返回（只读） */
        readonly duration: number;
        /** 音频缓冲的时间点，仅保证当前播放时间点到此时间点内容已缓冲（只读） */
        readonly buffered: number;

        /** 播放音频 */
        play: () => void;

        /** 暂停音频（暂停后播放从暂停处继续） */
        pause: () => void;

        /** 停止音频（停止后播放从头开始） */
        stop: () => void;

        /**
         * 跳转到指定播放位置
         * @param position 跳转时间（单位：s），精确到小数点后 3 位（ms 级别）
         */
        seek: (position: number) => void;

        /** 销毁当前音频实例 */
        destroy: () => void;

        /** 监听音频进入可播放状态事件（不保证后续流畅播放） */
        onCanplay: (callback: () => void) => void;
        /** 取消监听音频可播放状态事件 */
        offCanplay: (callback: () => void) => void;

        /** 监听音频播放事件 */
        onPlay: (callback: () => void) => void;
        /** 取消监听音频播放事件 */
        offPlay: (callback: () => void) => void;

        /** 监听音频暂停事件 */
        onPause: (callback: () => void) => void;
        /** 取消监听音频暂停事件 */
        offPause: (callback: () => void) => void;

        /** 监听音频停止事件 */
        onStop: (callback: () => void) => void;
        /** 取消监听音频停止事件 */
        offStop: (callback: () => void) => void;

        /** 监听音频自然播放至结束事件 */
        onEnded: (callback: () => void) => void;
        /** 取消监听音频自然结束事件 */
        offEnded: (callback: () => void) => void;

        /** 监听音频播放进度更新事件 */
        onTimeUpdate: (callback: () => void) => void;
        /** 取消监听音频进度更新事件 */
        offTimeUpdate: (callback: () => void) => void;

        /** 监听音频播放错误事件 */
        onError: (callback: (res: InnerAudioErrorResult) => void) => void;
        /** 取消监听音频播放错误事件 */
        offError: (callback: (res: InnerAudioErrorResult) => void) => void;

        /** 监听音频加载中事件（数据不足需暂停加载时触发） */
        onWaiting: (callback: () => void) => void;
        /** 取消监听音频加载中事件 */
        offWaiting: (callback: () => void) => void;

        /** 监听音频跳转操作中事件 */
        onSeeking: (callback: () => void) => void;
        /** 取消监听音频跳转中事件 */
        offSeeking: (callback: () => void) => void;

        /** 监听音频跳转操作完成事件 */
        onSeeked: (callback: () => void) => void;
        /** 取消监听音频跳转完成事件 */
        offSeeked: (callback: () => void) => void;
    }
    // ------------------------------ 相机相关枚举类型 ------------------------------
    /**
     * 摄像头朝向枚举
     * @platform 基础库 3.79.0+
     */
    type CameraDevicePosition = "front" | "back";

    /**
     * 闪光灯模式枚举
     * @platform 基础库 3.79.0+
     */
    type CameraFlash = "auto" | "on" | "off";

    /**
     * 相机帧数据图像尺寸枚举
     * @platform 基础库 3.79.0+
     */
    type CameraSize = "small" | "medium" | "large";

    /**
     * 拍照质量枚举
     * @platform 基础库 3.79.0+
     */
    type CameraPhotoQuality = "high" | "normal" | "low";

    // ------------------------------ createCamera 接口参数类型 ------------------------------
    /**
     * createCamera 接口调用参数类型
     * @platform 基础库 3.79.0+，低版本需做兼容处理
     * @description 创建相机对象的配置项，需先获取 scope.camera 授权
     */
    interface CreateCameraOptions {
        /** 相机左上角横坐标，默认 0 */
        x?: number;
        /** 相机左上角纵坐标，默认 0 */
        y?: number;
        /** 相机宽度，默认 300 */
        width?: number;
        /** 相机高度，默认 150 */
        height?: number;
        /** 摄像头朝向，默认 back（front=前置/back=后置） */
        devicePosition?: CameraDevicePosition;
        /** 闪光灯模式，默认 auto（auto=自动/on=开启/off=关闭） */
        flash?: CameraFlash;
        /** 帧数据图像尺寸，默认 small（small/medium/large） */
        size?: CameraSize;
        /** 接口调用成功的回调函数 */
        success?: (res?: any) => void;
        /** 接口调用失败的回调函数 */
        fail?: (err?: any) => void;
        /** 接口调用结束的回调函数（成功/失败都会执行） */
        complete?: (res?: any) => void;
    }

    // ------------------------------ Camera 对象回调参数类型 ------------------------------
    /**
     * Camera.onCameraFrame 回调参数类型
     * @description 摄像头实时帧数据返回结构
     */
    interface CameraFrameResult {
        /** 图像数据矩形的宽度 */
        width: number;
        /** 图像数据矩形的高度 */
        height: number;
        /** 图像像素点数据（一维数组，每四项表示一个像素点的 rgba） */
        data: ArrayBuffer;
    }

    /**
     * Camera.stopRecord 成功回调返回值类型
     * @description 结束录像后返回的封面和视频临时路径
     */
    interface CameraStopRecordResult {
        /** 视频封面临时路径 */
        tempThumbPath: string;
        /** 视频临时路径 */
        tempVideoPath: string;
    }

    /**
     * Camera.takePhoto 成功回调返回值类型
     * @description 拍照后返回的图片临时路径及尺寸
     */
    interface CameraTakePhotoResult {
        /** 图片临时路径 */
        tempImagePath: string;
        /** 图片宽度 */
        width: number;
        /** 图片高度 */
        height: number;
    }

    // ------------------------------ Camera 对象类型 ------------------------------
    /**
     * 相机对象（由 bl.createCamera 创建）
     * @platform 基础库 3.79.0+，低版本需做兼容处理
     * @description 需先获取摄像头授权（scope.camera）才能正常使用
     */
    interface Camera {
        // 基础属性
        x: number;
        y: number;
        width: number;
        height: number;
        devicePosition: CameraDevicePosition;
        flash: CameraFlash;
        size: CameraSize;

        // 核心方法
        /** 销毁相机对象 */
        destroy: () => void;

        /**
         * 监听用户不允许授权使用摄像头的事件
         * @param callback 授权取消时的回调函数
         */
        onAuthCancel: (callback: () => void) => void;

        /**
         * 监听摄像头实时帧数据事件
         * @param callback 帧数据返回时的回调函数，返回帧宽/高/像素数据
         */
        onCameraFrame: (callback: (res: CameraFrameResult) => void) => void;

        /**
         * 监听摄像头非正常终止事件（如退出后台）
         * @param callback 终止事件触发时的回调函数
         */
        onStop: (callback: () => void) => void;

        /**
         * 开始录像
         * @returns 操作结果 Promise（无返回值，失败时 reject）
         */
        startRecord: () => Promise<void>;

        /**
         * 结束录像
         * @param compressed 是否压缩录制的视频
         * @returns 操作结果 Promise，成功时返回 {tempThumbPath, tempVideoPath}
         */
        stopRecord: (compressed: boolean) => Promise<CameraStopRecordResult>;

        /**
         * 拍照
         * @param quality 拍照质量（high=高清/normal=普通/low=低清）
         * @returns 操作结果 Promise，成功时返回 {tempImagePath, width, height}
         */
        takePhoto: (
            quality: CameraPhotoQuality,
        ) => Promise<CameraTakePhotoResult>;

        /** 关闭帧数据监听 */
        closeFrameChange: () => void;

        /** 开启帧数据监听（需配合 onCameraFrame 使用） */
        listenFrameChange: () => void;
    }
    /**
     * saveImageToPhotosAlbum 接口调用参数类型
     * @description 保存图片到系统相册的配置项
     */
    interface SaveImageToPhotosAlbumOptions {
        /**
         * 图片文件路径（必填）
         * @description 支持临时文件路径、永久文件路径；不支持网络图片路径
         */
        filePath: string;
        /** 接口调用成功的回调函数 */
        success?: () => void;
        /** 接口调用失败的回调函数 */
        fail?: (err?: any) => void;
        /** 接口调用结束的回调函数（成功/失败都会执行） */
        complete?: () => void;
    }
    // ------------------------------ 保存视频到相册相关类型 ------------------------------
    /**
     * saveVideoToPhotosAlbum 接口错误码枚举
     */
    type SaveVideoToPhotosAlbumErrorCode = 901 | 1310 | 1311 | 1312;
    /**
     * saveVideoToPhotosAlbum 接口错误信息映射
     */
    interface SaveVideoToPhotosAlbumErrorMsg {
        901: "file not exist"; // 文件不存在
        1310: "invalid video"; // 视频格式不支持（仅支持mp4）
        1311: "no authority"; // 授权失败
        1312: "save video failed"; // 系统库报错
    }

    /**
     * saveVideoToPhotosAlbum 接口调用参数类型
     * @platform 基础库 ≥3.62.0 支持
     * @description 保存视频到系统相册（仅支持 mp4 格式）
     */
    interface SaveVideoToPhotosAlbumOptions {
        /**
         * 视频文件路径（必填）
         * @description 支持临时/永久文件路径，仅支持 blfile 协议及包内本地路径；不支持网络路径
         */
        filePath: string;
        /** 接口调用成功的回调函数 */
        success?: (res: { errMsg: string }) => void;
        /** 接口调用失败的回调函数（返回错误码/错误信息） */
        fail?: (err: {
            errCode: SaveVideoToPhotosAlbumErrorCode;
            errMsg: string;
        }) => void;
        /** 接口调用结束的回调函数（成功/失败都会执行） */
        complete?: () => void;
    }

    // ------------------------------ 创建视频相关枚举/类型 ------------------------------
    /**
     * Video 对象缩放模式（objectFit 合法值）
     * @platform 基础库 3.12.0+
     */
    type VideoObjectFit = "fill" | "contain" | "cover";

    /**
     * Video 播放速率合法值
     * @platform 基础库 3.12.0+
     */
    type VideoPlaybackRate = 0.5 | 0.8 | 1.0 | 1.25 | 1.5;

    /**
     * Video.requestFullScreen 方向参数合法值
     * @platform 基础库 3.12.0+
     */
    type VideoFullScreenDirection = 0 | 90 | -90;

    /**
     * Video.onError 错误信息枚举
     * @platform 基础库 3.12.0+
     */
    type VideoErrorMsg =
        | "MEDIA_ERR_NETWORK"
        | "MEDIA_ERR_DECODE"
        | "MEDIA_ERR_SRC_NOT_SUPPORTED";

    /**
     * createVideo 接口调用参数类型
     * @platform 基础库 3.12.0+，低版本需做兼容处理
     * @description 创建视频对象的配置项
     */
    interface CreateVideoOptions {
        /** 视频左上角横坐标，默认 0 */
        x?: number;
        /** 视频左上角纵坐标，默认 0 */
        y?: number;
        /** 视频宽度，默认 300 */
        width?: number;
        /** 视频高度，默认 150 */
        height?: number;
        /** 视频资源地址（必填） */
        src: string;
        /** 视频封面 */
        poster?: string;
        /** 初始播放位置（单位：s），默认 0 */
        initialTime?: number;
        /** 播放速率，默认 1.0（有效值：0.5/0.8/1.0/1.25/1.5） */
        playbackRate?: VideoPlaybackRate;
        /** 是否为直播（暂不支持直播源），默认 false */
        live?: boolean;
        /** 缩放模式，默认 'contain' */
        objectFit?: VideoObjectFit;
        /** 是否显示控件，默认 true */
        controls?: boolean;
        /** 是否自动播放，默认 false */
        autoplay?: boolean;
        /** 是否循环播放，默认 false */
        loop?: boolean;
        /** 是否禁音播放，默认 false */
        muted?: boolean;
        /** （仅 iOS）是否遵循系统静音开关，默认 false */
        obeyMuteSwitch?: boolean;
        /** 是否启用手势控制播放进度，默认 true */
        enableProgressGesture?: boolean;
        /** 是否开启双击播放手势，默认 false */
        enablePlayGesture?: boolean;
        /** 是否显示中央播放按钮，默认 true */
        showCenterPlayBtn?: boolean;
        /**
         * 是否显示在游戏画布之下
         * @description 需配合 Canvas.getContext('webgl', {alpha: true}) 实现主屏 canvas 透明
         * @default false
         */
        underGameView?: boolean;
    }

    // ------------------------------ Video 对象回调参数类型 ------------------------------
    /**
     * Video.onProgress 回调参数类型
     * @description 视频缓冲事件返回的缓冲进度/总时长
     */
    interface VideoProgressResult {
        /** 缓冲进度（0~100]，100 表示缓冲完成 */
        buffered: number;
        /** 视频总时长（单位：s） */
        duration: number;
    }

    /**
     * Video.onTimeUpdate 回调参数类型
     * @description 视频进度更新事件返回的当前播放位置/总时长
     */
    interface VideoTimeUpdateResult {
        /** 当前播放位置（单位：s） */
        position: number;
        /** 视频总时长（单位：s） */
        duration: number;
    }

    /**
     * Video.onError 回调参数类型
     * @description 视频错误事件返回的错误信息
     */
    interface VideoErrorResult {
        /** 错误信息：MEDIA_ERR_NETWORK/解码错误/资源不支持 */
        errMsg: VideoErrorMsg;
    }

    // ------------------------------ Video 对象类型 ------------------------------
    /**
     * 视频对象（由 bl.createVideo 创建）
     * @platform 基础库 3.12.0+，低版本需做兼容处理
     */
    interface Video {
        // 基础属性
        x: number;
        y: number;
        width: number;
        height: number;
        src: string;
        poster: string;
        initialTime: number;
        playbackRate: VideoPlaybackRate;
        live: boolean;
        objectFit: VideoObjectFit;
        controls: boolean;
        autoplay: boolean;
        loop: boolean;
        muted: boolean;
        obeyMuteSwitch: boolean;
        enableProgressGesture: boolean;
        enablePlayGesture: boolean;
        showCenterPlayBtn: boolean;
        underGameView: boolean;

        // 核心方法（返回 Promise 表示操作完成）
        /** 销毁视频对象 */
        destroy: () => void;
        /** 播放视频 */
        play: () => Promise<void>;
        /** 暂停视频 */
        pause: () => Promise<void>;
        /** 停止视频 */
        stop: () => Promise<void>;
        /**
         * 跳转到指定播放位置
         * @param time 跳转位置（单位：s）
         * @returns 跳转完成的 Promise
         */
        seek: (time: number) => Promise<void>;
        /**
         * 进入全屏播放
         * @param direction 全屏方向（0=竖向/90=逆时针90°/-90=顺时针90°）
         * @returns 全屏完成的 Promise
         */
        requestFullScreen: (
            direction: VideoFullScreenDirection,
        ) => Promise<void>;
        /** 退出全屏播放 */
        exitFullScreen: () => Promise<void>;

        // 事件监听/取消监听
        /** 监听视频缓冲事件（需要缓冲下一帧时触发） */
        onWaiting: (callback: () => void) => void;
        /** 取消监听视频缓冲事件 */
        offWaiting: (callback: () => void) => void;

        /** 监听视频缓冲进度事件 */
        onProgress: (callback: (res: VideoProgressResult) => void) => void;
        /** 取消监听视频缓冲进度事件 */
        offProgress: (callback: (res: VideoProgressResult) => void) => void;

        /** 监听视频播放事件 */
        onPlay: (callback: () => void) => void;
        /** 取消监听视频播放事件 */
        offPlay: (callback: () => void) => void;

        /** 监听视频暂停事件 */
        onPause: (callback: () => void) => void;
        /** 取消监听视频暂停事件 */
        offPause: (callback: () => void) => void;

        /** 监听视频播放结束事件 */
        onEnded: (callback: () => void) => void;
        /** 取消监听视频播放结束事件 */
        offEnded: (callback: () => void) => void;

        /** 监听视频进度更新事件 */
        onTimeUpdate: (callback: (res: VideoTimeUpdateResult) => void) => void;
        /** 取消监听视频进度更新事件 */
        offTimeUpdate: (callback: (res: VideoTimeUpdateResult) => void) => void;

        /** 监听视频错误事件 */
        onError: (callback: (res: VideoErrorResult) => void) => void;
        /** 取消监听视频错误事件 */
        offError: (callback: (res: VideoErrorResult) => void) => void;
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
     * SocketTask.close 方法的参数类型
     * @description 关闭 WebSocket 连接的配置项
     */
    interface SocketCloseOptions {
        /** 关闭状态码，默认 1000（表示正常关闭） */
        code?: number;
        /** 关闭原因描述（≤123 字节的 UTF-8 文本） */
        reason?: string;
        /** 接口调用成功的回调函数 */
        success?: () => void;
        /** 接口调用失败的回调函数 */
        fail?: (err?: any) => void;
        /** 接口调用结束的回调函数（成功/失败都会执行） */
        complete?: () => void;
    }

    /**
     * SocketTask.onError 回调参数类型
     */
    interface SocketOnErrorResult {
        /** 错误信息描述 */
        errMsg: string;
    }

    /**
     * SocketTask.onMessage 回调参数类型
     */
    interface SocketOnMessageResult {
        /** 服务器返回的消息数据（字符串/ArrayBuffer 类型） */
        data: string | ArrayBuffer;
    }

    /**
     * SocketTask.onOpen 回调参数类型
     */
    interface SocketOnOpenResult {
        /** 连接成功的 HTTP 响应 Header */
        header: Record<string, string>;
    }

    /**
     * SocketTask.send 方法的参数类型
     */
    interface SocketSendOptions {
        /** 需要发送的内容（必填，字符串/ArrayBuffer 类型） */
        data: string | ArrayBuffer;
        /** 接口调用成功的回调函数 */
        success?: () => void;
        /** 接口调用失败的回调函数 */
        fail?: (err?: any) => void;
        /** 接口调用结束的回调函数（成功/失败都会执行） */
        complete?: () => void;
    }

    /**
     * WebSocket 任务对象（由 bl.connectSocket 返回）
     * @description 用于管理 WebSocket 连接的全生命周期操作
     */
    interface SocketTask {
        /**
         * 关闭 WebSocket 连接
         * @param options 关闭连接的配置项（状态码、原因、回调）
         */
        close: (options?: SocketCloseOptions) => void;

        /**
         * 监听 WebSocket 连接关闭事件
         * @param callback 连接关闭时触发的回调函数
         */
        onClose: (callback: () => void) => void;

        /**
         * 监听 WebSocket 错误事件
         * @param callback 错误发生时触发的回调函数，返回错误信息
         */
        onError: (callback: (res: SocketOnErrorResult) => void) => void;

        /**
         * 监听 WebSocket 接收服务器消息事件
         * @param callback 收到消息时触发的回调函数，返回服务器消息数据
         */
        onMessage: (callback: (res: SocketOnMessageResult) => void) => void;

        /**
         * 监听 WebSocket 连接打开事件
         * @param callback 连接成功打开时触发的回调函数，返回响应 Header
         */
        onOpen: (callback: (res: SocketOnOpenResult) => void) => void;

        /**
         * 通过 WebSocket 连接发送数据
         * @param options 发送数据及回调配置项（data 为必填）
         */
        send: (options: SocketSendOptions) => void;
    }
    // ------------------------------ 核心枚举/类型 ------------------------------

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
    // ------------------------------ 权限 Scope 枚举 ------------------------------
    /**
     * 授权权限 Scope 枚举（基础常用 scope，可根据业务扩展）
     */
    type AuthScope =
        | "scope.userInfo" // 用户信息
        | "scope.userLocation" // 地理位置
        | "scope.address" // 通讯地址
        | "scope.writePhotosAlbum" // 保存到相册
        | "scope.camera"; // 是否授权摄像头

    // ------------------------------ 接口参数类型 ------------------------------
    /**
     * authorize - 提前发起用户授权请求接口参数
     * @platform 基础库通用
     * @description 1. 已授权则无弹窗直接成功；未授权则弹窗询问；2. 仅发起授权请求，不实际调用对应接口
     */
    interface AuthorizeOptions {
        /** 需要获取的权限 scope（必填，详见 scope 列表） */
        scope: AuthScope;
        /** 成功回调（用户同意授权/已提前授权） */
        success?: () => void;
        /** 失败回调（用户拒绝授权/授权失败） */
        fail?: () => void;
        /** 完成回调（成功/失败都执行） */
        complete?: () => void;
    }
    // ------------------------------ 核心数据结构 ------------------------------
    /**
     * 托管的 KV 数据（B站扩展了 order 字段用于排序）
     * @description 1. key长度≤128字节；2. key+value长度≤1024字节；3. order越大排名越靠前
     */
    interface KVData {
        /** 数据的 key（长度≤128字节） */
        key: string;
        /** 数据的 value（key+value长度≤1024字节） */
        value: string;
        /** 用于全服排序的值（order越大排名越靠前） */
        order: number;
    }

    /**
     * 单个用户的游戏数据（用于 getAllCloudStorage 返回结果）
     * @platform 开放数据域
     */
    interface SingleUserGameDataList {
        /** 用户的头像 url */
        avatarUrl: string;
        /** 用户的昵称 */
        nickname: string;
        /** 用户的 openid */
        openid: string;
        /** 托管 KV 数据的 key */
        key: string;
        /** 托管 KV 数据的 value */
        value: string;
        /** 托管 KV 数据的 order（排序用） */
        order: number;
        /** 用户与排行榜用户的关注关系：0=未关注，2=关注，6=双向关注 */
        attribute: 0 | 2 | 6;
        /** 用户的认证信息 */
        official: {
            /** 是否黄V认证：1=是，0=否 */
            role: 0 | 1;
            [key: string]: any;
        };
    }

    /**
     * 按 key 维度的排行榜数据（getAllCloudStorage 返回）
     * @platform 开放数据域
     */
    interface KeyGameDataList {
        /** 数据的 key */
        key: string;
        /** 以 key 降序排序的用户列表（按 order 倒序） */
        singleUserGameDataList: SingleUserGameDataList[];
    }

    /**
     * 关注用户的托管数据（getFollowingCloudStorage 返回）
     * @platform 开放数据域
     */
    interface UserGameData {
        /** 用户的头像 url */
        avatarUrl: string;
        /** 用户的昵称 */
        nickname: string;
        /** 用户的 openid */
        openid: string;
        /** 用户的托管 KV 数据列表 */
        KVDataList: KVData[];
    }

    // ------------------------------ 开放数据域类型 ------------------------------
    /**
     * 开放数据域实例
     * @platform 基础库通用
     */
    interface OpenDataContext {
        /**
         * 向开放数据域发送消息
         * @param message 消息内容（仅支持原始类型：number/string/boolean/null/undefined）
         */
        postMessage: (message: {
            [key: string]: PrimitiveValue | { [key: string]: PrimitiveValue };
        }) => void;
    }

    /**
     * 原始值类型（开放数据域消息仅支持此类值）
     */
    type PrimitiveValue = number | string | boolean | null | undefined;

    // ------------------------------ 云存储接口参数/回调类型 ------------------------------
    /**
     * getUserCloudStorage - 获取当前用户托管数据接口参数
     * @platform 开放数据域、基础库通用
     * @description 1. 仅开放数据域可用；2. 调用前需已调用 bl.login；3. 每个用户最多128个KV对
     */
    interface GetUserCloudStorageOptions {
        /** 要获取的 key 列表（必填） */
        keyList: string[];
        /** 成功回调（返回用户KV数据列表） */
        success?: (res: { KVDataList: KVData[] }) => void;
        /** 失败回调（返回错误码/错误信息） */
        fail?: () => void;
        /** 完成回调（成功/失败都执行） */
        complete?: () => void;
    }

    /**
     * removeUserCloudStorage - 删除用户托管数据接口参数
     * @platform 基础库通用
     * @description 调用前需已调用 bl.login
     */
    interface RemoveUserCloudStorageOptions {
        /** 要删除的 key 列表（必填） */
        keyList: string[];
        /** 成功回调 */
        success?: () => void;
        /** 失败回调（返回错误码/错误信息） */
        fail?: () => void;
        /** 完成回调（成功/失败都执行） */
        complete?: () => void;
    }

    /**
     * setUserCloudStorage - 写入用户托管数据接口参数
     * @platform 基础库通用
     * @description 1. 调用前需已调用 bl.login；2. 支持批量写入；3. 需包含 order 字段
     */
    interface SetUserCloudStorageOptions {
        /** 要修改的 KV 数据列表（必填，需包含 order 字段） */
        KVDataList: KVData[];
        /** 成功回调 */
        success?: () => void;
        /** 失败回调（返回错误码/错误信息） */
        fail?: () => void;
        /** 完成回调（成功/失败都执行） */
        complete?: () => void;
    }

    /**
     * getFollowingCloudStorage - 拉取关注用户托管数据接口参数
     * @platform 开放数据域、基础库通用
     * @description 1. 仅开放数据域可用；2. 调用前需已调用 bl.login
     */
    interface GetFollowingCloudStorageOptions {
        /** 要拉取的 key 列表（必填） */
        keyList: string[];
        /** 成功回调（返回关注用户数据） */
        success?: (res: { data: UserGameData[] }) => void;
        /** 失败回调（返回错误码/错误信息） */
        fail?: () => void;
        /** 完成回调（成功/失败都执行） */
        complete?: () => void;
    }

    /**
     * getAllCloudStorage - 获取所有成员游戏数据接口参数
     * @platform 开放数据域、基础库通用
     * @description 1. 仅开放数据域可用；2. 调用前需已调用 bl.login；3. 按 order 倒序取前100名
     */
    interface GetAllCloudStorageOptions {
        /** 要拉取的 key 列表（必填） */
        keyList: string[];
        /** 成功回调（返回排行榜数据） */
        success?: (res: { data: KeyGameDataList[] }) => void;
        /** 失败回调（返回错误码/错误信息） */
        fail?: () => void;
        /** 完成回调（成功/失败都执行） */
        complete?: () => void;
    }

    /**
     * followCloudUpper - 关注排行榜用户接口参数
     * @platform 开放数据域、基础库 2.5.0+（低版本需兼容）
     * @description 1. 仅开放数据域可用；2. 需在 getAllCloudStorage 成功后调用
     */
    interface FollowCloudUpperOptions {
        /** 要关注的用户数据块（来自 singleUserGameDataList，必填） */
        data: SingleUserGameDataList;
        /** 成功回调 */
        success?: (res: Record<string, any>) => void;
        /** 失败回调（返回错误码/错误信息） */
        fail?: () => void;
        /** 完成回调（成功/失败都执行） */
        complete?: () => void;
    }
    // ------------------------------ 核心枚举/类型 ------------------------------
    /**
     * createRole 失败回调错误码枚举
     * @platform 基础库通用
     */
    enum CreateRoleErrCode {
        /** 网络错误 */
        NETWORK_ERROR = -1,
        /** 重复创建角色 */
        DUPLICATE_CREATE = 83000005,
    }

    /**
     * 错误码与提示消息映射表（文档明确）
     */
    type CreateRoleErrMsgMap = {
        [key in CreateRoleErrCode]: string;
    };

    // ------------------------------ 接口参数/回调类型 ------------------------------
    /**
     * createRole 成功回调结果
     * @platform 基础库通用
     */
    interface CreateRoleSuccessResult {
        /** 成功消息：固定 "success" */
        message: "success";
        /** 成功数据：固定 true */
        data: true;
    }

    /**
     * createRole 失败回调结果
     * @platform 基础库通用
     */
    interface CreateRoleFailResult {
        /** 错误码（对应 CreateRoleErrCode） */
        code: string | number; // 文档标注为 string，兼容数字类型
        /** 错误信息（对应 code 映射的 message） */
        message: string;
    }

    /**
     * createRole - 角色创建上报接口参数
     * @platform 基础库通用
     * @description 用户创建角色后上报，记录角色信息（服务器+角色ID需唯一）
     */
    interface CreateRoleOptions {
        /** 服务器id信息（必填） */
        serverId: string;
        /** 服务器名称信息（必填） */
        serverName: string;
        /** 角色id信息（必填） */
        roleId: string;
        /** 其他备注数据（可选） */
        ext?: string;
        /** 接口调用成功的回调函数（可选） */
        success?: (res: CreateRoleSuccessResult) => void;
        /** 接口调用失败的回调函数（可选） */
        fail?: (res: CreateRoleFailResult) => void;
        /** 接口调用结束的回调函数（可选） */
        complete?: () => void;
    }
    // ------------------------------ 核心枚举/类型 ------------------------------
    /**
     * 人脸检测模型选择枚举
     * @platform 仅 Android 支持
     * @description 0=短期模型（2米内），1=全范围模型（5米内）
     */
    enum FaceDetectionModelSelection {
        /** 短期模型：适合2米内的面部检测 */
        SHORT_RANGE = 0,
        /** 全范围模型：适合5米内的面部检测（稀疏模型，推理更快） */
        FULL_RANGE = 1,
    }

    /**
     * 面部矩形区域坐标（相对整个图像）
     * @platform 仅 Android 支持
     */
    interface FaceBoundingBox {
        /** 左位置（相对图像） */
        left: number;
        /** 右位置（相对图像） */
        right: number;
        /** 上位置（相对图像） */
        top: number;
        /** 下位置（相对图像） */
        bottom: number;
    }

    /**
     * 面部关键点坐标（共6个：右眼、左眼、鼻尖、嘴中部、右耳、左耳）
     * @platform 仅 Android 支持
     */
    interface FaceLandmark {
        /** x轴位置（相对整个图像） */
        x: number;
        /** y轴位置（相对整个图像） */
        y: number;
    }

    /**
     * 单个人脸识别结果
     * @platform 仅 Android 支持
     */
    interface FaceDetectionResult {
        /** 面部矩形区域坐标 */
        boundingBox: FaceBoundingBox;
        /** 面部关键点坐标列表（共6个） */
        landmarks: FaceLandmark[];
    }

    /**
     * 人脸检测结果回调的图像数据结构
     * @platform 仅 Android 支持
     */
    interface FaceDetectionImageData {
        /** 图像宽度 */
        width: number;
        /** 图像高度 */
        height: number;
        /** 图像像素点数据（RGBA 一维数组，每4项为一个像素） */
        data: ArrayBuffer;
    }

    /**
     * 人脸检测结果回调参数
     * @platform 仅 Android 支持
     */
    interface FaceDetectionOnResultCallbackRes {
        /** 图像数据 */
        image: FaceDetectionImageData;
        /** 人脸识别结果列表 */
        detections: FaceDetectionResult[];
    }

    /**
     * 人脸检测异常回调参数
     * @platform 仅 Android 支持
     */
    interface FaceDetectionOnErrorCallbackRes {
        /** 异常信息 */
        errMsg: string;
    }

    // ------------------------------ 人脸检测引擎实例类型 ------------------------------
    /**
     * 人脸检测引擎实例（FaceDetection 对象）
     * @platform 仅 Android 支持
     */
    interface FaceDetection {
        /** 引擎版本名称信息 */
        versionName: string;
        /** 引擎版本构建版本信息 */
        versionCode: number;

        /**
         * 发送需要识别的图像数据
         * @param buffer 图像像素点数据（RGBA 一维数组，每4项为一个像素）
         * @param width 图片宽度
         * @param height 图片高度
         */
        send: (buffer: ArrayBuffer, width: number, height: number) => void;

        /**
         * 注册识别结果回调事件
         * @param callback 识别结果回调函数
         */
        onResult: (
            callback: (res: FaceDetectionOnResultCallbackRes) => void,
        ) => void;

        /**
         * 注册异常事件回调
         * @param callback 异常回调函数
         */
        onError: (
            callback: (res: FaceDetectionOnErrorCallbackRes) => void,
        ) => void;

        /**
         * 关闭引擎模块（释放资源）
         */
        close: () => void;
    }

    // ------------------------------ 接口参数/回调类型 ------------------------------
    /**
     * createFaceDetection 成功回调结果
     * @platform 仅 Android 支持
     */
    type CreateFaceDetectionSuccessResult = FaceDetection;

    /**
     * createFaceDetection - 创建人脸检测引擎接口参数
     * @platform 仅 Android 支持
     */
    interface CreateFaceDetectionOptions {
        /** 模型选择（0=短期模型，1=全范围模型），默认 0 */
        modelSelection?: FaceDetectionModelSelection;
        /** 接口调用成功的回调函数（可选） */
        success?: (res: CreateFaceDetectionSuccessResult) => void;
        /** 接口调用失败的回调函数（可选） */
        fail?: (res: string) => void;
        /** 接口调用结束的回调函数（可选） */
        complete?: () => void;
    }
    // ------------------------------ 基础枚举/类型 ------------------------------
    /**
     * 意见反馈按钮类型枚举
     * @platform 基础库 2.3.0+
     */
    enum FeedbackButtonType {
        /** 可设置背景色和文本的按钮 */
        TEXT = "text",
        /** 仅可设置背景贴图的按钮（贴图拉伸至按钮宽高） */
        IMAGE = "image",
    }

    // ------------------------------ 按钮样式类型 ------------------------------
    /**
     * 意见反馈按钮样式配置
     * @platform 基础库 2.3.0+
     * @description lineHeight 在 iOS/Android 均不起作用
     */
    interface FeedbackButtonStyle {
        /** 左上角横坐标，默认 0 */
        left?: number;
        /** 左上角纵坐标，默认 0 */
        top?: number;
        /** 宽度，默认 0 */
        width?: number;
        /** 高度，默认 0 */
        height?: number;
        /** 文字颜色，默认 #000000（支持 hex/预设颜色） */
        color?: ColorValue;
        /** 背景颜色，默认透明（支持 hex/预设颜色） */
        backgroundColor?: ColorValue;
        /** 边框颜色，默认透明（支持 hex/预设颜色） */
        borderColor?: ColorValue;
        /** 边框宽度，默认 0 */
        borderWidth?: number;
        /** 边框圆角，默认 0 */
        borderRadius?: number;
        /** 文本水平对齐方式，默认 left */
        textAlign?: TextAlignType;
        /** 字号，默认 14 */
        fontSize?: number;
        /** 文本行高（iOS/Android 均不起作用） */
        lineHeight?: number;
    }

    // ------------------------------ 按钮实例类型 ------------------------------
    /**
     * 意见反馈按钮实例
     * @platform 基础库 2.3.0+
     */
    interface FeedbackButton {
        /** 按钮类型（text/image） */
        type: FeedbackButtonType;
        /** 按钮文本（仅 type=text 时有效） */
        text: string;
        /** 按钮背景图片（仅 type=image 时有效） */
        image: string;
        /** 按钮样式配置 */
        style: FeedbackButtonStyle;

        /**
         * 显示意见反馈按钮
         */
        show: () => void;

        /**
         * 隐藏意见反馈按钮
         */
        hide: () => void;

        /**
         * 销毁意见反馈按钮
         */
        destroy: () => void;

        /**
         * 监听意见反馈按钮的点击事件
         * @param callback 点击回调函数
         */
        onTap: (callback: () => void) => void;

        /**
         * 取消监听意见反馈按钮的点击事件
         * @param callback 要取消的回调函数（不传则取消所有）
         */
        offTap: (callback?: () => void) => void;
    }

    // ------------------------------ 接口参数类型 ------------------------------
    /**
     * createFeedbackButton - 创建意见反馈按钮接口参数
     * @platform 基础库 2.3.0+（低版本需兼容）
     */
    interface CreateFeedbackButtonOptions {
        /** 按钮类型，默认 text */
        type?: FeedbackButtonType;
        /** 按钮文本（仅 type=text 时有效），默认 "获取用户信息" */
        text?: string;
        /** 按钮背景图片（仅 type=image 时有效），默认 "" */
        image?: string;
        /** 按钮样式配置，默认 {} */
        style?: FeedbackButtonStyle;
        /** 语言类型（文档提及的可选参数） */
        lang?: LangType;
    }
    // ------------------------------ 通用类型 ------------------------------
    /**
     * 关注状态结果（0=未关注，1=已关注）
     * @platform 基础库通用
     */
    interface FollowStatusResult {
        /** 关注状态：0 未关注，1 已关注 */
        follow: 0 | 1;
    }

    // ------------------------------ 获取小游戏关注状态相关类型 ------------------------------
    /**
     * getGameFollowingStatus - 获取小游戏关注状态接口参数
     * @platform 基础库 2.3.0+（低版本需兼容）
     */
    interface GetGameFollowingStatusOptions {
        /** 成功回调（返回关注状态） */
        success?: (res: FollowStatusResult) => void;
        /** 失败回调（返回错误码/错误信息） */
        fail?: () => void;
        /** 完成回调（成功/失败都执行） */
        complete?: () => void;
    }

    // ------------------------------ 胶囊菜单关注事件相关类型 ------------------------------
    /**
     * onGameFollowedFromMenu - 胶囊菜单关注事件回调类型
     * @platform 基础库 3.0.0+（低版本需兼容）
     */
    type GameFollowedFromMenuCallback = () => void;

    // ------------------------------ UP主关注相关类型 ------------------------------
    /**
     * getGameUpperFollowingStatus - 获取小游戏对应UP主关注状态接口参数
     * @platform 基础库 3.0.0+（低版本需兼容）
     */
    interface GetGameUpperFollowingStatusOptions {
        /** 成功回调（返回关注状态） */
        success?: (res: FollowStatusResult) => void;
        /** 失败回调（返回错误码/错误信息） */
        fail?: () => void;
        /** 完成回调（成功/失败都执行） */
        complete?: () => void;
    }

    /**
     * followGameUpper - 关注小游戏对应UP主接口参数
     * @platform 基础库 3.0.0+（低版本需兼容）
     * @description 需在 getGameUpperFollowingStatus 成功回调内调用
     */
    interface FollowGameUpperOptions {
        /** 成功回调 */
        success?: () => void;
        /** 失败回调（返回错误码/错误信息） */
        fail?: () => void;
        /** 完成回调（成功/失败都执行） */
        complete?: () => void;
    }
    /**
     * showGameListButton - 展示小游戏互跳按钮接口参数
     * @platform 基础库 2.2.0+（低版本需兼容）
     * @description 同步方法，需先在后台配置互跳小游戏名单；参数为按钮位置偏移（可选）
     */
    interface ShowGameListButtonOptions {
        /** 互跳按钮距离顶部距离（可选） */
        top?: number;
        /** 互跳按钮距离左边距离（可选） */
        left?: number;
    }
    // ------------------------------ 活动信息核心类型 ------------------------------
    /**
     * 分享赠送大会员活动基础信息
     * @platform 开放数据域、基础库通用
     */
    interface ShareActivityInfo {
        /** 赠送大会员活动 id */
        activityId: number;
        /** 赠送大会员活动过期时间（13位时间戳） */
        expire: number;
        /** 活动开始时间（13位时间戳） */
        startTime: number;
        /** 活动结束时间（13位时间戳） */
        endTime: number;
        /** 活动设置用户可领取大会员的最大次数 */
        maxRewards: number;
        /** 用户当前是否可领取大会员 */
        canReceive: boolean;
        /** 用户所获得的奖励大会员 总可领取的次数 */
        totalRewards: number;
        /** 用户所获得的奖励大会员 已领取的次数 */
        receivedRewards: number;
        /** 用户所获得的奖励大会员 剩余可领取的次数 */
        remainedRewards: number;
    }

    /**
     * 被邀请新客信息
     * @platform 开放数据域、基础库通用
     */
    interface Invitee {
        /** 小程序用户唯一标识 */
        openId: string;
        /** 用户的昵称 */
        nickName: string;
        /** 用户头像图片 url 地址 */
        face: string;
        /** 新客加入时间 */
        ctime: string;
    }

    /**
     * 被邀请新客列表分页信息
     * @platform 开放数据域、基础库通用
     */
    interface InviteesInfo {
        /** 邀请到的新客信息列表 */
        list: Invitee[];
        /** 当前页码 */
        pageNum: number;
        /** 每页信息个数 */
        pageSize: number;
        /** 总页数 */
        pages: number;
        /** 当前页的信息个数 */
        size: number;
        /** 总信息个数 */
        total: number;
        /** 其余属性不需要关注 */
        [key: string]: any;
    }

    // ------------------------------ 获取活动列表相关类型 ------------------------------
    /**
     * getInvitationData - 获取邀请赠大会员活动列表接口参数
     * @platform 开放数据域、基础库通用
     * @description 调用前需已调用 bl.login（建议 onLaunch 中调用）
     */
    interface GetInvitationDataOptions {
        /** 开始时间戳（必填，13位） */
        start: number;
        /** 截止时间戳（必填，13位） */
        end: number;
        /** 成功回调（返回活动列表） */
        success?: (res: { data: ShareActivityInfo[] }) => void;
        /** 失败回调（返回错误码/错误信息） */
        fail?: () => void;
        /** 完成回调（成功/失败都执行） */
        complete?: () => void;
    }

    // ------------------------------ 获取活动详情相关类型 ------------------------------
    /**
     * getInvitationDetail - 获取指定邀请活动详情接口参数
     * @platform 开放数据域、基础库通用
     * @description 调用前需已调用 bl.login（建议 onLaunch 中调用）
     */
    interface GetInvitationDetailOptions {
        /** 活动 id（必填，从 getInvitationData 返回） */
        activityId: number;
        /** 被邀请新客列表页面大小，默认 10，最大 100 */
        pageSize?: number;
        /** 被邀请新客列表页数，默认 1 */
        pageNum?: number;
        /** 成功回调（返回活动详情+新客列表） */
        success?: (res: {
            /** 活动信息（可能为 undefined） */
            activityInfo: ShareActivityInfo | undefined;
            /** 被邀请成员列表 */
            invitees: InviteesInfo;
        }) => void;
        /** 失败回调（返回错误码/错误信息） */
        fail?: () => void;
        /** 完成回调（成功/失败都执行） */
        complete?: () => void;
    }

    // ------------------------------ 领取活动奖励相关类型 ------------------------------
    /**
     * getInvitationReward - 领取邀请赠大会员活动奖励接口参数
     * @platform 开放数据域、基础库通用
     * @description 调用前需已调用 bl.login（建议 onLaunch 中调用）
     */
    interface GetInvitationRewardOptions {
        /** 活动 id（必填，从 getInvitationData 返回） */
        activityId: number;
        /** 成功回调 */
        success?: (res: Record<string, any>) => void;
        /** 失败回调（返回错误码/错误信息） */
        fail?: () => void;
        /** 完成回调（成功/失败都执行） */
        complete?: () => void;
    }
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
    // ------------------------------ 新增通用类型 ------------------------------
    /**
     * 跳转小游戏传递的额外数据类型
     * @platform 基础库通用
     */
    type MiniProgramExtraData = Record<string, any>;

    // ------------------------------ 接口参数类型 ------------------------------
    /**
     * navigateToMiniProgram - 打开另一个小游戏
     * @platform 基础库通用
     * @description 需用户确认跳转，且目标 appId 需在配置名单内（≤10 个）
     */
    interface NavigateToMiniProgramOptions {
        /** 要打开的小游戏 appId（必填） */
        appId: string;
        /** 要打开的小游戏 vAppId（必填） */
        vAppId: string;
        /** 打开的页面路径，为空则打开首页 */
        path?: string;
        /** 传递给目标小游戏的数据（目标小游戏可在 App.onLaunch/App.onShow 获取） */
        extraData?: MiniProgramExtraData;
        /** 要打开的小游戏版本（仅当前小游戏为开发/体验版时有效） */
        envVersion?: MiniProgramEnvVersion;
        /** 成功回调 */
        success?: () => void;
        /** 失败回调（返回错误码/错误信息）
         * @description 失败场景：用户取消（errMsg 含 cancel）、appId 不在配置列表（errMsg 含 is not in navigateToMiniProgramAppIdList）
         */
        fail?: () => void;
        /** 完成回调（成功/失败都执行） */
        complete?: () => void;
    }
    // ------------------------------ 接口参数类型 ------------------------------
    /**
     * openURL - 小游戏跳转站内链接
     * @platform 基础库 2.5.0+
     */
    interface OpenURLOptions {
        /** 跳转链接（必填），限制固定格式，需联系运营同学获取 */
        path: string;
        /** 成功回调 */
        success?: () => void;
        /** 失败回调（返回错误码/错误信息） */
        fail?: (res: BluetoothErrorResult) => void;
        /** 完成回调（成功/失败都执行） */
        complete?: () => void;
    }
    // ------------------------------ 新增通用类型 ------------------------------
    /**
     * 跳转视频播放页的可选参数
     * @platform 基础库通用
     */
    interface OpenVideoDetailOptionsExtra {
        /** 视频集数，从 1 开始，默认第一集 */
        p?: number;
    }

    // ------------------------------ 接口参数类型 ------------------------------
    /**
     * openVideoDetail - 小游戏跳转站内视频播放页
     * @platform 基础库通用
     */
    interface OpenVideoDetailOptions {
        /** 视频 id（必填） */
        id: string;
        /** 可选参数（如集数） */
        options?: OpenVideoDetailOptionsExtra;
        /** 成功回调 */
        success?: () => void;
        /** 失败回调（返回错误码/错误信息） */
        fail?: () => void;
        /** 完成回调（成功/失败都执行） */
        complete?: () => void;
    }
    // ------------------------------ 接口参数类型 ------------------------------
    /**
     * presentPendant - 小游戏内赠送头像框接口参数
     * @platform 基础库通用
     * @description 1. 调用前需已调用 bl.login（建议 onLaunch 中调用）；2. activityId/expire 需联系运营同学获取
     */
    interface PresentPendantOptions {
        /** 挂件发放活动唯一 id（必填，联系运营获取） */
        activityId: number;
        /** 挂件使用时间（必填，单位：天，联系运营获取） */
        expire: number;
        /** 成功回调 */
        success?: () => void;
        /** 失败回调（返回错误码/错误信息） */
        fail?: () => void;
        /** 完成回调（成功/失败都执行） */
        complete?: () => void;
    }
    // ------------------------------ 支付错误码枚举 ------------------------------
    /**
     * requestRecharge 失败回调错误码枚举
     * @platform App >=8.56.0、SDK_Version >=4.2.2（2025.8.15后低版本不支持）
     */
    enum RechargeFailCode {
        /** 正在支付中，发起了另一个支付流程 */
        DUPLICATE_PAYMENT = 1,
        /** 参数错误 */
        PARAM_ERROR = 2,
        /** 用户取消 */
        USER_CANCEL = 3,
        /** 网络错误 */
        NETWORK_ERROR = 4,
        /** 第三方渠道调起失败 */
        THIRD_PARTY_CHANNEL_FAIL = 5,
        /** 支付结果未知 */
        UNKNOWN_PAY_RESULT = 6,
        /** 支付宝签约失败 */
        ALIPAY_SIGN_FAIL = 9,
        /** 支付宝签约成功但扣款状态未知 */
        ALIPAY_DEDUCT_UNKNOWN = 10,
        /** 获取资产充值参数失败 */
        GET_RECHARGE_PARAM_FAIL = 12,
        /** 支付渠道其他错误 */
        PAY_CHANNEL_OTHER_ERROR = 99,
        /** 内部其他错误 */
        INNER_OTHER_ERROR = 100,
        /** 健康系统限制，支付超限额 */
        HEALTH_SYSTEM_LIMIT = -15009,
    }

    /**
     * 错误码与提示消息映射（文档明确的映射关系）
     */
    type RechargeFailCodeMsgMap = {
        [key in RechargeFailCode]: string;
    };

    // ------------------------------ 回调结果类型 ------------------------------
    /**
     * requestRecharge 成功回调结果
     * @platform App >=8.56.0、SDK_Version >=4.2.2
     */
    interface RequestRechargeSuccessResult {
        /** 成功码：固定 0 */
        code: 0;
        /** 成功消息：固定 "成功" */
        msg: "成功";
    }

    /**
     * requestRecharge 失败回调结果
     * @platform App >=8.56.0、SDK_Version >=4.2.2
     */
    interface RequestRechargeFailResult {
        /** 错误码（对应 RechargeFailCode） */
        code: RechargeFailCode | number;
        /** 错误信息（对应 code 映射的 msg） */
        msg: string;
    }

    // ------------------------------ 接口参数类型 ------------------------------
    /**
     * requestRecharge - 发起充值请求接口参数
     * @platform App >=8.56.0、SDK_Version >=4.2.2（2025.8.15后低版本不支持）
     * @description 1. 需先开通支付权限；2. 参数完全透传服务端创建订单接口返回的数据；3. success 为必填回调
     */
    interface RequestRechargeOptions {
        /** 接口调用成功的回调函数（必填） */
        success: (res: RequestRechargeSuccessResult) => void;
        /** 接口调用失败的回调函数（可选） */
        fail?: (res: RequestRechargeFailResult) => void;
        /** 服务端返回的透传参数（任意字段，文档要求完全透传） */
        [key: string]: any;
    }
    // ------------------------------ 核心枚举类型 ------------------------------
    /**
     * getDownloadInfo 成功回调的下载状态枚举
     * @platform Android、基础库 3.14.0+、App 6.8.0+（iOS 暂不支持）
     */
    enum RelatedGameDownloadInfoState {
        /** 无可下载的手游 */
        NO_AVAILABLE_GAME = 1,
        /** 已下载 */
        DOWNLOADED = 2,
        /** 未下载 */
        NOT_DOWNLOADED = 3,
    }

    /**
     * showDownloadDetailPage 成功回调的下载状态枚举
     * @platform Android、基础库 3.14.0+、App 6.8.0+（iOS 暂不支持）
     */
    enum RelatedGameDetailPageState {
        /** 未下载过 */
        NOT_DOWNLOADED = 0,
        /** 已下载过 */
        DOWNLOADED = 1,
    }

    /**
     * showDownloadDetailPage 失败回调的错误码枚举
     * @platform Android、基础库 3.14.0+、App 6.8.0+（iOS 暂不支持）
     */
    enum RelatedGameDetailPageErrCode {
        /** 无可下载的手游 */
        NO_AVAILABLE_GAME = 1005,
        /** 未执行下载信息查询 */
        NO_DOWNLOAD_INFO_QUERIED = 1006,
    }

    // ------------------------------ 管理器方法参数/回调类型 ------------------------------
    /**
     * getDownloadInfo 成功回调结果
     * @platform Android、基础库 3.14.0+、App 6.8.0+
     */
    interface GetRelatedGameDownloadInfoSuccessResult {
        /** 下载状态（1=无可下载/2=已下载/3=未下载） */
        state: RelatedGameDownloadInfoState;
        /** 可下载手游的名称 */
        gameName: string;
    }

    /**
     * getDownloadInfo - 查询关联游戏下载信息接口参数
     * @platform Android、基础库 3.14.0+、App 6.8.0+
     */
    interface GetRelatedGameDownloadInfoOptions {
        /** 成功回调（返回下载状态+游戏名称） */
        success?: (res: GetRelatedGameDownloadInfoSuccessResult) => void;
        /** 失败回调（返回错误码/错误信息） */
        fail?: () => void;
        /** 完成回调（成功/失败都执行） */
        complete?: () => void;
    }

    /**
     * showDownloadDetailPage 成功回调结果
     * @platform Android、基础库 3.14.0+、App 6.8.0+
     */
    interface ShowRelatedGameDetailPageSuccessResult {
        /** 下载状态（0=未下载过/1=已下载过） */
        state: RelatedGameDetailPageState;
    }

    /**
     * showDownloadDetailPage 失败回调结果
     * @platform Android、基础库 3.14.0+、App 6.8.0+
     */
    interface ShowRelatedGameDetailPageFailResult {
        /** 错误码（1005=无可下载/1006=未查询信息/其他=其他错误） */
        errCode: RelatedGameDetailPageErrCode | number;
        /** 错误信息 */
        errMsg: string;
    }

    /**
     * showDownloadDetailPage - 打开关联手游详情页接口参数
     * @platform Android、基础库 3.14.0+、App 6.8.0+
     * @description 需在 getDownloadInfo 成功查询后执行
     */
    interface ShowRelatedGameDetailPageOptions {
        /** 成功回调（返回下载状态） */
        success?: (res: ShowRelatedGameDetailPageSuccessResult) => void;
        /** 失败回调（返回错误码/错误信息） */
        fail?: (res: ShowRelatedGameDetailPageFailResult) => void;
        /** 完成回调（成功/失败都执行） */
        complete?: () => void;
    }

    // ------------------------------ 关联游戏管理器类型 ------------------------------
    /**
     * 关联游戏管理器
     * @platform Android、基础库 3.14.0+、App 6.8.0+（iOS 暂不支持）
     */
    interface RelatedGameManager {
        /**
         * 查询关联游戏下载信息
         * @param options 接口配置
         */
        getDownloadInfo: (options?: GetRelatedGameDownloadInfoOptions) => void;

        /**
         * 打开关联手游详情页
         * @description 需在 getDownloadInfo 成功查询后执行
         * @param options 接口配置
         */
        showDownloadDetailPage: (
            options?: ShowRelatedGameDetailPageOptions,
        ) => void;
    }
    // ------------------------------ 预约状态枚举 ------------------------------
    /**
     * getReserveInfo 成功回调的预约状态枚举
     * @platform 基础库 2.9.0+
     */
    enum ReserveInfoState {
        /** 无可预约的手游 */
        NO_AVAILABLE_GAME = 1,
        /** 已预约 */
        RESERVED = 2,
        /** 未预约 */
        NOT_RESERVED = 3,
    }

    /**
     * reserve 成功回调的预约结果状态枚举
     * @platform 基础库 2.9.0+
     */
    enum ReserveResultState {
        /** 预约成功 */
        SUCCESS = 0,
        /** 已预约过 */
        ALREADY_RESERVED = 1,
    }

    /**
     * reserve 失败回调的错误码枚举
     * @platform 基础库 2.9.0+
     */
    enum ReserveFailErrCode {
        /** 用户取消预约 */
        USER_CANCEL = 1001,
        /** 无可预约游戏 */
        NO_AVAILABLE_GAME = 1002,
        /** 未执行预约信息查询 */
        NO_RESERVE_INFO_QUERIED = 1003,
        /** 其他错误（自定义兜底值） */
        OTHER_ERROR = 9999,
    }

    // ------------------------------ 预约管理器方法参数/回调类型 ------------------------------
    /**
     * getReserveInfo 成功回调结果
     * @platform 基础库 2.9.0+
     */
    interface GetReserveInfoSuccessResult {
        /** 预约状态（1=无可预约/2=已预约/3=未预约） */
        state: ReserveInfoState;
        /** 游戏名称 */
        gameName: string;
    }

    /**
     * getReserveInfo - 查询预约游戏信息接口参数
     * @platform 基础库 2.9.0+
     */
    interface GetReserveInfoOptions {
        /** 成功回调（返回预约状态+游戏名称） */
        success?: (res: GetReserveInfoSuccessResult) => void;
        /** 失败回调（返回错误码/错误信息） */
        fail?: () => void;
        /** 完成回调（成功/失败都执行） */
        complete?: () => void;
    }

    /**
     * reserve 成功回调结果
     * @platform 基础库 2.9.0+
     */
    interface ReserveSuccessResult {
        /** 预约结果状态（0=成功/1=已预约过） */
        state: ReserveResultState;
    }

    /**
     * reserve 失败回调结果
     * @platform 基础库 2.9.0+
     */
    interface ReserveFailResult {
        /** 错误码（1001=用户取消/1002=无可预约/1003=未查询信息/其他=其他错误） */
        errCode: ReserveFailErrCode | number;
        /** 错误信息 */
        errMsg: string;
    }

    /**
     * reserve - 预约游戏接口参数
     * @platform 基础库 2.9.0+
     * @description 需在 getReserveInfo 成功回调后执行
     */
    interface ReserveOptions {
        /** 成功回调（返回预约结果状态） */
        success?: (res: ReserveSuccessResult) => void;
        /** 失败回调（返回错误码/错误信息） */
        fail?: (res: ReserveFailResult) => void;
        /** 完成回调（成功/失败都执行） */
        complete?: () => void;
    }

    // ------------------------------ 游戏预约管理器类型 ------------------------------
    /**
     * 预约游戏管理器
     * @platform 基础库 2.9.0+
     */
    interface GameReserveManager {
        /**
         * 查询预约游戏信息
         * @param options 接口配置
         */
        getReserveInfo: (options?: GetReserveInfoOptions) => void;

        /**
         * 预约游戏
         * @description 需在 getReserveInfo 成功查询后执行
         * @param options 接口配置
         */
        reserve: (options?: ReserveOptions) => void;
    }
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
    // ------------------------------ 核心类型 ------------------------------
    /**
     * 敏感词检测结果枚举（success.data.result）
     * @description 0=无敏感词，1=包含敏感词
     */
    enum SensitiveWordCheckResult {
        /** 不包含敏感词 */
        NO_SENSITIVE_WORD = 0,
        /** 包含敏感词 */
        HAS_SENSITIVE_WORD = 1,
    }

    // ------------------------------ 接口参数/回调类型 ------------------------------
    /**
     * sensitiveWordCheck 成功回调的 data 结构
     * @platform 基础库通用
     */
    interface SensitiveWordCheckSuccessData {
        /** 检测结果：0=无敏感词，1=包含敏感词 */
        result: SensitiveWordCheckResult;
        /** 处理后的文本（敏感词替换为*，无敏感词则返回原文） */
        content: string;
    }

    /**
     * sensitiveWordCheck 成功回调结果
     * @platform 基础库通用
     */
    interface SensitiveWordCheckSuccessResult {
        /** 成功消息：固定 "success" */
        message: "success";
        /** 检测结果数据 */
        data: SensitiveWordCheckSuccessData;
    }

    /**
     * sensitiveWordCheck 失败回调结果
     * @platform 基础库通用
     */
    interface SensitiveWordCheckFailResult {
        /** 失败提示信息 */
        message: string;
    }

    /**
     * sensitiveWordCheck - 敏感词查询接口参数
     * @platform 基础库通用
     */
    interface SensitiveWordCheckOptions {
        /** 待校验的内容（必填） */
        content: string;
        /** 接口调用成功的回调函数（可选） */
        success?: (res: SensitiveWordCheckSuccessResult) => void;
        /** 接口调用失败的回调函数（可选） */
        fail?: (res: SensitiveWordCheckFailResult) => void;
        /** 接口调用结束的回调函数（可选） */
        complete?: () => void;
    }
    // ------------------------------ 基础枚举/类型 ------------------------------
    /**
     * 授权设置项（仅包含文档明确的权限，可扩展）
     * @platform 基础库通用
     */
    interface AuthSetting {
        /** 是否授权用户信息（对应 bl.getUserInfo） */
        "scope.userInfo"?: boolean;
        /** 是否授权地理位置（对应 bl.getLocation） */
        "scope.userLocation"?: boolean;
        /** 是否授权保存到相册（对应 bl.saveImageToPhotosAlbum） */
        "scope.writePhotosAlbum"?: boolean;
        /** 其他已请求过的权限（预留扩展） */
        [scope: string]: boolean | undefined;
    }

    /**
     * 按钮类型枚举
     * @platform 基础库 2.3.0+
     */
    type OpenSettingButtonType = "text" | "image";

    // ------------------------------ 按钮样式类型 ------------------------------
    /**
     * 打开设置页面按钮样式配置
     * @platform 基础库 2.3.0+
     */
    interface OpenSettingButtonStyle {
        /** 左上角横坐标，默认 0 */
        left?: number;
        /** 左上角纵坐标，默认 0 */
        top?: number;
        /** 宽度，默认 0 */
        width?: number;
        /** 高度，默认 0 */
        height?: number;
        /** 文字颜色，默认 #000000 */
        color?: ColorValue;
        /** 背景颜色，默认透明 */
        backgroundColor?: ColorValue;
        /** 边框颜色，默认透明 */
        borderColor?: ColorValue;
        /** 边框宽度，默认 0 */
        borderWidth?: number;
        /** 边框圆角，默认 0 */
        borderRadius?: number;
        /** 文本水平对齐方式，默认 left */
        textAlign?: TextAlignType;
        /** 字号，默认 14 */
        fontSize?: number;
        /** 文本行高（iOS/Android 均无效） */
        lineHeight?: number;
    }

    // ------------------------------ openSetting/getSetting 相关类型 ------------------------------
    /**
     * openSetting/getSetting 成功回调结果
     * @platform 基础库通用
     */
    interface SettingSuccessResult {
        /** 用户授权结果（仅包含已请求过的权限） */
        authSetting: AuthSetting;
    }

    /**
     * openSetting - 调起小游戏设置界面接口参数
     * @platform 基础库通用
     * @description 设置界面仅显示已请求过的权限
     */
    interface OpenSettingOptions {
        /** 成功回调（返回用户授权设置） */
        success?: (res: SettingSuccessResult) => void;
        /** 失败回调（返回错误码/错误信息） */
        fail?: () => void;
        /** 完成回调（成功/失败都执行） */
        complete?: () => void;
    }

    /**
     * getSetting - 获取用户当前设置接口参数
     * @platform 基础库通用
     * @description 返回值仅包含已请求过的权限
     */
    interface GetSettingOptions {
        /** 成功回调（返回用户授权设置） */
        success?: (res: SettingSuccessResult) => void;
        /** 失败回调（返回错误码/错误信息） */
        fail?: () => void;
        /** 完成回调（成功/失败都执行） */
        complete?: () => void;
    }

    // ------------------------------ 创建设置按钮相关类型 ------------------------------
    /**
     * createOpenSettingButton - 创建打开设置页面按钮接口参数
     * @platform 基础库 2.3.0+（低版本需兼容）
     */
    interface CreateOpenSettingButtonOptions {
        /** 按钮类型，默认 text */
        type?: OpenSettingButtonType;
        /** 按钮文本（仅 type=text 有效），默认 "打开设置" */
        text?: string;
        /** 背景图片（仅 type=image 有效），默认 '' */
        image?: string;
        /** 按钮样式，默认 {} */
        style?: OpenSettingButtonStyle;
    }

    /**
     * 打开设置页面按钮实例
     * @platform 基础库 2.3.0+
     */
    interface OpenSettingButton {
        /** 按钮类型 */
        type: OpenSettingButtonType;
        /** 按钮文本（仅 type=text 有效） */
        text: string;
        /** 按钮背景图片（仅 type=image 有效） */
        image: string;
        /** 按钮样式 */
        style: OpenSettingButtonStyle;

        /** 显示按钮 */
        show: () => void;
        /** 隐藏按钮 */
        hide: () => void;
        /** 销毁按钮 */
        destroy: () => void;
        /** 监听按钮点击事件 */
        onTap: (callback: () => void) => void;
        /** 取消监听按钮点击事件 */
        offTap: (callback?: () => void) => void;
    }
    // ------------------------------ addShortcut 接口类型 ------------------------------
    /**
     * addShortcut - 添加桌面快捷方式成功回调结果
     * @platform 基础库 3.99.4+
     */
    interface AddShortcutSuccessResult {
        /** 成功消息：固定 'addShortcut:ok' */
        errMsg: "addShortcut:ok";
    }

    /**
     * addShortcut - 添加桌面快捷方式失败回调结果
     * @platform 基础库 3.99.4+
     */
    interface AddShortcutFailResult {
        /** 错误信息：格式为 "addShortcut:fail " + 错误详情 */
        errMsg: string;
    }

    /**
     * addShortcut - 添加桌面快捷方式接口参数
     * @platform 基础库 3.99.4+（低版本需兼容）
     * @description 1. 可将小游戏快捷方式添加到手机桌面；2. 桌面快捷方式礼包需每日可领（同签到礼包）
     */
    interface AddShortcutOptions {
        /** 接口调用成功的回调函数（可选） */
        success?: (res: AddShortcutSuccessResult) => void;
        /** 接口调用失败的回调函数（可选） */
        fail?: (res: AddShortcutFailResult) => void;
        /** 接口调用结束的回调函数（可选） */
        complete?: () => void;
    }

    // ------------------------------ checkShortcut 接口类型 ------------------------------
    /**
     * checkShortcut - 快捷方式状态结构
     * @platform 基础库 3.99.4+、仅 Android 支持
     */
    interface ShortcutStatus {
        /** 是否已添加桌面快捷方式 */
        exist: boolean;
    }

    /**
     * checkShortcut - 检查桌面快捷方式成功回调结果
     * @platform 基础库 3.99.4+、仅 Android 支持
     */
    interface CheckShortcutSuccessResult {
        /** 桌面快捷方式状态 */
        status: ShortcutStatus;
        /** 成功消息：固定 "checkShortcut:ok" */
        errMsg: "checkShortcut:ok";
    }

    /**
     * checkShortcut - 检查桌面快捷方式失败回调结果
     * @platform 基础库 3.99.4+、仅 Android 支持
     */
    interface CheckShortcutFailResult {
        /** 错误信息：格式为 "checkShortcut:fail " + 错误详情 */
        errMsg: string;
    }

    /**
     * checkShortcut - 检查桌面快捷方式接口参数
     * @platform 基础库 3.99.4+（低版本需兼容）、仅 Android 支持
     * @description 1. 检查小游戏快捷方式是否已添加到桌面；2. 桌面快捷方式礼包需每日可领（同签到礼包）
     */
    interface CheckShortcutOptions {
        /** 接口调用成功的回调函数（可选） */
        success?: (res: CheckShortcutSuccessResult) => void;
        /** 接口调用失败的回调函数（可选） */
        fail?: (res: CheckShortcutFailResult) => void;
        /** 接口调用结束的回调函数（可选） */
        complete?: () => void;
    }
    // ------------------------------ 核心枚举/类型 ------------------------------
    /**
     * 订阅消息模板ID枚举（文档明确的模板类型）
     * @platform 基础库 3.1.0+
     */
    enum SubscribeMessageTmplId {
        /** 小游戏版本更新模板 */
        NEW_VERSION = "NEW_VERSION",
    }

    /**
     * 订阅结果值（用户对模板的订阅状态）
     */
    type SubscribeResultValue = "accept" | "reject" | "ban";

    /**
     * 订阅消息失败错误码枚举
     * @platform 基础库 3.1.0+
     */
    enum SubscribeMessageErrCode {
        /** 登录验证失败 */
        LOGIN_VERIFY_FAIL = 83001002,
        /** 错误的小游戏信息 */
        INVALID_GAME_INFO = 83001003,
        /** 消息模版不存在或已失效 */
        TEMPLATE_INVALID = 83000005,
        /** 用户取消 */
        USER_CANCEL = 6001,
        /** 模板消息数量超过上限（单次最多5条） */
        TEMPLATE_COUNT_EXCEED = 1001,
        /** 参数类型错误 */
        PARAM_TYPE_ERROR = 1002,
        /** 游戏类型错误 */
        GAME_TYPE_ERROR = 10001,
        /** 本次无法订阅（冷启仅1次/未上架） */
        CANNOT_POP_NOW = 10002,
        /** 网络错误 */
        NETWORK_ERROR = 10003,
        /** 运行时参数类型错误 */
        RUNTIME_PARAM_ERROR = 10004,
    }

    /**
     * 错误码与提示消息映射表（文档明确）
     */
    type SubscribeMessageErrMsgMap = {
        [key in SubscribeMessageErrCode]: string;
    };

    // ------------------------------ 接口参数/回调类型 ------------------------------
    /**
     * requestSubscribeMessage 成功回调结果
     * @platform 基础库 3.1.0+
     */
    interface RequestSubscribeMessageSuccessResult {
        /** 动态键：模板ID，值为订阅状态（accept/reject/ban） */
        [TEMPLATE_ID: string]: SubscribeResultValue;
    }

    /**
     * requestSubscribeMessage 失败回调结果
     * @platform 基础库 3.1.0+
     */
    interface RequestSubscribeMessageFailResult {
        /** 错误信息 */
        errMsg: string;
        /** 错误码（对应 SubscribeMessageErrCode） */
        errCode: SubscribeMessageErrCode | number;
    }

    /**
     * requestSubscribeMessage - 调起订阅消息界面接口参数
     * @platform 基础库 3.1.0+（低版本需兼容）
     * @description 1. 仅已上架游戏可用；2. 需用户点击/支付后调起；3. 单次最多订阅5条模板；4. 冷启仅能弹1次
     */
    interface RequestSubscribeMessageOptions {
        /** 需要订阅的消息模板ID集合（必填，单次最多5条） */
        tmplIds: string[];
        /** 成功回调（返回各模板的订阅状态） */
        success?: (res: RequestSubscribeMessageSuccessResult) => void;
        /** 失败回调（返回错误码/错误信息） */
        fail?: (res: RequestSubscribeMessageFailResult) => void;
        /** 完成回调（成功/失败都执行） */
        complete?: () => void;
    }
    // ------------------------------ 接口参数类型 ------------------------------
    /**
     * updateApp - 更新哔哩哔哩版本
     * @platform iOS 基础库 3.22.0+、Android 基础库 3.23.0+
     */
    interface UpdateAppOptions {
        /** 成功回调 */
        success?: () => void;
        /** 失败回调（返回错误码/错误信息） */
        fail?: () => void;
        /** 完成回调（成功/失败都执行） */
        complete?: () => void;
    }
    // ------------------------------ 基础枚举类型 ------------------------------
    /**
     * 用户性别枚举
     * @platform 基础库通用
     */
    enum Gender {
        UNKNOWN = 0,
        MALE = 1,
        FEMALE = 2,
    }

    /**
     * 用户信息按钮类型枚举
     * @platform 基础库 2.3.0+
     */
    type UserInfoButtonType = "text" | "image";

    /**
     * 实名认证状态枚举
     * @platform Android、基础库 3.99.6+
     */
    type RealNameAuthState = "complete" | "anonymous" | "cancel";

    // ------------------------------ 用户信息相关类型 ------------------------------
    /**
     * 用户信息对象
     * @platform 基础库通用
     */
    interface UserInfo {
        /** 用户昵称 */
        nickName: string;
        /** 用户头像 URL（最后一位数值为尺寸：0/46/64/96/132） */
        avatarUrl: string;
        /** 用户性别 */
        gender: Gender;
        /** 用户所在国家 */
        country: string;
        /** 用户所在省份 */
        province: string;
        /** 用户所在城市 */
        city: string;
        /** 显示地址所用的语言 */
        language: LangType;
    }

    /**
     * getUserInfo 成功回调结果
     * @platform 基础库通用
     */
    interface GetUserInfoSuccessResult {
        /** 用户信息对象（无敏感信息） */
        userInfo: UserInfo;
        /** 无敏感信息的原始数据字符串（用于签名） */
        rawData: string;
        /** 签名（sha1(rawData + sessionkey)） */
        signature: string;
        /**
         * 完整用户信息的加密数据（withCredentials=true 时返回）
         * @example
         * {
         *     "openId": "OPENID",
         *     "nickName": "NICKNAME",
         *     "gender": "GENDER",
         *     "city": "CITY",
         *     "province": "PROVINCE",
         *     "country": "COUNTRY",
         *     "avatarUrl": "AVATARURL",
         *     "unionId": "UNIONID",
         *     "watermark": {
         *         "appId": "APPID",
         *         "timestamp": "TIMESTAMP"
         *     },
         *     "vip": {// vip字段非必返回，如果需要，请与运营同学联系
         *         "active": true //true:用户有大会员，false:用户无大会员
         *     }
         * }
         */
        encryptedData?: string;
        /** 加密算法初始向量（withCredentials=true 时返回） */
        iv?: string;
    }

    /**
     * getUserInfo 接口参数
     * @platform 基础库通用
     */
    interface GetUserInfoOptions {
        /** 是否带登录态（true 需已登录且未过期） */
        withCredentials?: boolean;
        /** 显示用户信息的语言，默认 zh_CN */
        lang?: LangType;
        /** 成功回调 */
        success?: (res: GetUserInfoSuccessResult) => void;
        /** 失败回调（返回错误码/错误信息） */
        fail?: () => void;
        /** 完成回调（成功/失败都执行） */
        complete?: () => void;
    }

    // ------------------------------ 用户信息按钮相关类型 ------------------------------
    /**
     * 用户信息按钮样式配置
     * @platform 基础库 2.3.0+
     */
    interface UserInfoButtonStyle {
        /** 左上角横坐标，默认 0 */
        left?: number;
        /** 左上角纵坐标，默认 0 */
        top?: number;
        /** 宽度，默认 0 */
        width?: number;
        /** 高度，默认 0 */
        height?: number;
        /** 文字颜色，默认 #000000 */
        color?: ColorValue;
        /** 背景颜色，默认透明 */
        backgroundColor?: ColorValue;
        /** 边框颜色，默认透明 */
        borderColor?: ColorValue;
        /** 边框宽度，默认 0 */
        borderWidth?: number;
        /** 边框圆角，默认 0 */
        borderRadius?: number;
        /** 文本水平对齐方式，默认 left */
        textAlign?: TextAlignType;
        /** 字号，默认 14 */
        fontSize?: number;
        /** 文本行高（iOS/Android 均无效） */
        lineHeight?: number;
    }

    /**
     * createUserInfoButton 接口参数
     * @platform 基础库 2.3.0+
     */
    interface CreateUserInfoButtonOptions {
        /** 按钮类型，默认 text */
        type?: UserInfoButtonType;
        /** 按钮文本（仅 type=text 有效），默认 "获取用户信息" */
        text?: string;
        /** 背景图片（仅 type=image 有效），默认 '' */
        image?: string;
        /** 按钮样式，默认 {} */
        style?: UserInfoButtonStyle;
        /** 是否带登录态，默认 false */
        withCredentials?: boolean;
        /** 描述用户信息的语言，默认 en */
        lang?: LangType;
    }

    /**
     * 用户信息按钮点击回调结果
     * @platform 基础库 2.3.0+
     */
    type UserInfoButtonTapResult = GetUserInfoSuccessResult;

    /**
     * 用户信息按钮实例
     * @platform 基础库 2.3.0+
     */
    interface UserInfoButton {
        /** 按钮类型 */
        type: UserInfoButtonType;
        /** 按钮文本（仅 type=text 有效） */
        text: string;
        /** 按钮背景图片（仅 type=image 有效） */
        image: string;
        /** 按钮样式 */
        style: UserInfoButtonStyle;

        /** 显示按钮 */
        show: () => void;
        /** 隐藏按钮 */
        hide: () => void;
        /** 销毁按钮 */
        destroy: () => void;
        /** 监听按钮点击事件 */
        onTap: (callback: (res: UserInfoButtonTapResult) => void) => void;
        /** 取消监听按钮点击事件 */
        offTap: (callback?: (res: UserInfoButtonTapResult) => void) => void;
    }

    // ------------------------------ 实名认证相关类型 ------------------------------
    /**
     * 实名认证回调参数
     * @platform Android、基础库 3.99.6+
     */
    interface RealNameAuthCallbackResult {
        /** 实名认证状态 */
        state: RealNameAuthState;
    }

    /**
     * 实名认证回调返回值（弹窗配置）
     * @platform Android、基础库 3.99.6+
     */
    interface RealNameAuthCallbackReturn {
        /** 提示标题（必填） */
        title: string;
        /** 提示内容（必填） */
        content: string;
        /** 礼包图片 URL（可选，支持 GIF） */
        giftImgUrl?: string;
        /** 取消按钮文字，默认 "取消"，最多 5 字符 */
        cancelText?: string;
        /** 确认按钮文字，默认 "确定"，最多 5 字符 */
        confirmText?: string;
    }

    /**
     * 实名认证监听回调类型
     * @platform Android、基础库 3.99.6+
     */
    type RealNameAuthCallback = (
        res: RealNameAuthCallbackResult,
    ) => RealNameAuthCallbackReturn;
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
    // ------------------------------ 核心枚举/常量 ------------------------------
    /**
     * Agora 频道属性枚举
     * @platform 基础库 3.10.0+
     */
    enum AgoraChannelProfile {
        /** 通信模式（默认） */
        COMMUNICATION = 0,
        /** 直播模式 */
        LIVE_BROADCASTING = 1,
    }

    /**
     * Agora 用户角色枚举（直播模式下有效）
     * @platform 基础库 3.10.0+
     */
    enum AgoraClientRole {
        /** 主播 */
        BROADCASTER = 1,
        /** 观众 */
        AUDIENCE = 2,
    }

    /**
     * Agora 日志过滤等级枚举
     * @platform 基础库 3.10.0+
     */
    enum AgoraLogFilter {
        /** 不输出日志 */
        LOG_FILTER_OFF = 0,
        /** 输出所有 API 日志 */
        LOG_FILTER_DEBUG = 0x80f,
        /** 输出 CRITICAL、ERROR、WARNING、INFO 级别 */
        LOG_FILTER_INFO = 0x0f,
        /** 输出 CRITICAL、ERROR、WARNING 级别 */
        LOG_FILTER_WARNING = 0x0e,
        /** 输出 CRITICAL、ERROR 级别 */
        LOG_FILTER_ERROR = 0x0c,
        /** 仅输出 CRITICAL 级别 */
        LOG_FILTER_CRITICAL = 0x08,
    }

    /**
     * Agora 已知错误码
     * @platform 基础库 3.10.0+
     */
    enum AgoraErrorCode {
        /** 参数异常未传 */
        PARAM_EXCEPTION = 103,
        /** Agora 未初始化 */
        NOT_INITIALIZED = 7000,
    }

    // ------------------------------ 事件回调参数类型 ------------------------------
    /**
     * 说话者音量信息
     * @platform 基础库 3.10.0+
     */
    interface AgoraSpeakerInfo {
        /** 说话者用户 ID（0 为本地用户） */
        uid: number;
        /** 音量（0~255） */
        volume: number;
    }

    /**
     * 离开频道统计信息
     * @platform 基础库 3.10.0+
     */
    interface AgoraLeaveChannelStats {
        /** 通话时长（秒） */
        duration: number;
        /** 发送字节数（bytes） */
        txBytes: number;
        /** 接收字节数（bytes） */
        rxBytes: number;
        /** 发送码率（kbps） */
        txKBitRate: number;
        /** 接收码率（kbps） */
        rxKBitRate: number;
        /** 音频接收码率 (kbps) */
        rxAudioKBitRate: number;
        /** 音频发送码率 (kbps) */
        txAudioKBitRate: number;
        /** 视频接收码率 (kbps) */
        rxVideoKBitRate: number;
        /** 视频发送码率 (kbps) */
        txVideoKBitRate: number;
        /** 离开频道时频道内瞬时人数 */
        userCount: number;
        /** 当前应用 CPU 使用率 (%) */
        cpuAppUsage: number;
        /** 当前系统 CPU 使用率 (%) */
        cpuTotalUsage: number;
    }

    /**
     * Agora 事件类型映射（键为事件名，值为回调参数类型）
     * @platform 基础库 3.10.0+
     */
    interface AgoraEventMap {
        /** 加入频道成功 */
        "join-channel-success": [channel: string, uid: number, elapsed: number];
        /** 说话声音音量提示 */
        "audio-volume-indication": [
            speakers: AgoraSpeakerInfo[],
            speakerNumber: number,
            totalVolume: number,
        ];
        /** 发生错误 */
        error: [err: number, msg: string];
        /** 离开频道 */
        "leave-channel": [stat: AgoraLeaveChannelStats];
        /** 其他用户加入频道 */
        "user-joined": [uid: number, elapsed: number];
        /** 其他用户离开频道 */
        "user-offline": [uid: number, reason: number];
        /** 用户被静音 */
        "user-mute-audio": [uid: number, muted: boolean];
        /** 网络中断 */
        "connection-interrupted": [];
        /** Token 过期 */
        "request-token": [];
        /** 上下麦（角色切换） */
        "client-role-changed": [oldRole: number, newRole: number];
        /** 重新加入频道成功 */
        "rejoin-channel-success": [
            channel: string,
            uid: number,
            elapsed: number,
        ];
        /** 声音质量 */
        "audio-quality": [
            uid: number,
            quality: number,
            delay: number,
            lost: number,
        ];
        /** 发生警告 */
        warning: [warn: number, msg: string];
        /** 频道内网络质量报告 */
        "network-quality": [uid: number, txQuality: number, rxQuality: number];
        /** 声音路由变化 */
        "audio-routing-changed": [routing: string];
        /** 连接丢失 */
        "connection-lost": [];
        /** 连接被禁止 */
        "connection-banned": [];
        /** Agora 初始化成功 */
        "init-success": [];
        /** 录音设备变化 */
        "recording-device-changed": [state: number, device: string];
    }

    // ------------------------------ Agora 核心接口 ------------------------------
    /**
     * Agora 声网 SDK 核心接口
     * @platform 基础库 3.10.0+（低版本需兼容）、Cocos 引擎
     * @description 1. 需先通过 bl.loadAgora 确保 SDK 载入；2. 后台切前台需重新初始化；3. 仅支持单实例
     */
    interface Agora {
        /**
         * 初始化 Agora（全局仅需调用一次）
         * @param appid Agora App ID
         */
        init: (appid: string) => void;

        /**
         * 设置频道属性
         * @param profile 频道模式（0=通信，1=直播）
         */
        setChannelProfile: (profile: AgoraChannelProfile) => void;

        /**
         * 设置用户角色（直播模式下有效）
         * @param role 角色（1=主播，2=观众）
         */
        setClientRole: (role: AgoraClientRole) => void;

        /**
         * 加入频道
         * @param token 安全令牌（无安全要求可传空字符串）
         * @param channelId 频道名称（64字节内，支持 a-z/A-Z/0-9 等89个字符）
         * @param info 附加信息（可选，默认空字符串）
         * @param uid 用户ID（可选，0则由SDK自动分配）
         */
        joinChannel: (
            token: string,
            channelId: string,
            info?: string,
            uid?: number,
        ) => void;

        /**
         * 离开频道（必须调用以结束通话，释放资源）
         */
        leaveChannel: () => void;

        /**
         * 打开音频
         */
        enableAudio: () => void;

        /**
         * 本地麦克风静音/取消静音
         * @param mute true=静音，false=取消静音
         */
        muteLocalAudioStream: (mute: boolean) => void;

        /**
         * 关闭/重启本地语音采集处理
         * @param enabled true=开启，false=关闭
         */
        enableLocalAudio: (enabled: boolean) => void;

        /**
         * 静音所有远端音频流
         * @param mute true=停止接收播放，false=允许
         */
        muteAllRemoteAudioStreams: (mute: boolean) => void;

        /**
         * 静音指定远端用户音频流
         * @param uid 用户ID
         * @param mute true=停止接收播放，false=允许
         */
        muteRemoteAudioStream: (uid: string, mute: boolean) => void;

        /**
         * 启用说话者音量提示
         * @param interval 提示间隔（>0 毫秒，最小10ms，建议>200ms）
         * @param smooth 平滑系数（0-10，建议3）
         * @example
         * agora.enableAudioVolumeIndication(1000, 3)
         */
        enableAudioVolumeIndication: (interval: number, smooth: number) => void;

        /**
         * 调节录音信号音量
         * @param volume 音量（0~400）
         */
        adjustRecordingSignalVolume: (volume: number) => void;

        /**
         * 调节播放信号音量
         * @param volume 音量（0=静音，100=原始，400=4倍）
         */
        adjustPlaybackSignalVolume: (volume: number) => void;

        /**
         * 修改默认语音路由（纯音频模式有效，需在 joinChannel 前调用）
         * @param bVal true=扬声器，false=听筒
         */
        setDefaultAudioRouteToSpeakerphone: (bVal: boolean) => void;

        /**
         * 设置自定义参数（JSON字符串）
         * @param profile JSON 字符串格式的参数
         */
        setParameters: (profile: string) => void;

        /**
         * 查询 SDK 版本号
         * @returns 版本号字符串
         */
        getVersion: () => string;

        /**
         * 设置日志文件路径
         * @param filePath 日志文件完整路径（UTF-8 编码）
         */
        setLogFile: (filePath: string) => void;

        /**
         * 设置日志过滤等级
         * @param filter 过滤等级（AgoraLogFilter）
         */
        setLogFilter: (filter: AgoraLogFilter) => void;

        /**
         * 监听 Agora 事件
         * @param event 事件名
         * @param callback 回调函数
         * @param target 回调上下文
         */
        on: <K extends keyof AgoraEventMap>(
            event: K,
            callback: (...args: AgoraEventMap[K]) => void,
            target?: any,
        ) => void;

        /**
         * 取消监听 Agora 事件（文档未显式定义，补充通用实现）
         * @param event 事件名
         * @param callback 要取消的回调
         * @param target 回调上下文
         */
        off?: <K extends keyof AgoraEventMap>(
            event: K,
            callback?: (...args: AgoraEventMap[K]) => void,
            target?: any,
        ) => void;
    }

    // ------------------------------ BL 扩展接口（loadAgora） ------------------------------
    /**
     * bl.loadAgora 接口参数
     * @platform 基础库 3.10.0+
     */
    interface LoadAgoraOptions {
        /** 加载成功回调 */
        success?: () => void;
        /** 加载失败回调 */
        fail?: (err: { errMsg: string }) => void;
        /** 加载完成回调 */
        complete?: () => void;
    }
}

/** 将bilbiliweb的bl变量声明为全局变量 */
declare const bl: BilibilWebMinigame.BL;

/** 声网的全局变量-未接入的话请忽视 */
declare const agora: BilibilWebMinigame.Agora;
