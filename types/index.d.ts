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
        offTouchCancel: (callback: (res: TouchEventCallbackResult) => void) => void;

        /**
         * 监听触点失效事件
         * @param callback 触点失效事件触发时的回调函数
         */
        onTouchCancel: (callback: (res: TouchEventCallbackResult) => void) => void;

        /**
         * 监听触摸结束事件
         * @param callback 触摸结束事件触发时的回调函数
         */
        onTouchEnd: (callback: (res: TouchEventCallbackResult) => void) => void;

        /**
         * 取消监听触摸结束事件
         * @param callback 要取消的、已绑定的触摸结束事件回调函数
         */
        offTouchEnd: (callback: (res: TouchEventCallbackResult) => void) => void;

        /**
         * 取消监听触点移动事件
         * @param callback 要取消的、已绑定的触点移动事件回调函数
         */
        offTouchMove: (callback: (res: TouchEventCallbackResult) => void) => void;

        /**
         * 监听触点移动事件
         * @param callback 触点移动事件触发时的回调函数
         */
        onTouchMove: (callback: (res: TouchEventCallbackResult) => void) => void;

        /**
         * 取消监听开始触摸事件
         * @param callback 要取消的、已绑定的开始触摸事件回调函数
         */
        offTouchStart: (callback: (res: TouchEventCallbackResult) => void) => void;

        /**
         * 监听开始触摸事件
         * @param callback 开始触摸事件触发时的回调函数
         */
        onTouchStart: (callback: (res: TouchEventCallbackResult) => void) => void;
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
        loadSubpackage: (
            options: LoadSubpackageOptions
        ) => LoadSubpackageTask;
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
            callback: (res: KeyboardCompleteConfirmResult) => void
        ) => void;

        /**
         * 监听键盘收起事件
         * @param callback 键盘收起时触发的回调函数，返回当前输入值
         */
        onKeyboardComplete: (
            callback: (res: KeyboardCompleteConfirmResult) => void
        ) => void;

        /**
         * 取消监听用户点击键盘 Confirm 按钮的事件
         * @param callback 要取消的 Confirm 按钮事件回调函数
         */
        offKeyboardConfirm: (
            callback: (res: KeyboardCompleteConfirmResult) => void
        ) => void;

        /**
         * 监听用户点击键盘 Confirm 按钮的事件
         * @param callback 点击 Confirm 按钮时触发的回调函数，返回当前输入值
         */
        onKeyboardConfirm: (
            callback: (res: KeyboardCompleteConfirmResult) => void
        ) => void;

        /**
         * 取消监听键盘输入事件
         * @param callback 要取消的键盘输入事件回调函数
         */
        offKeyboardInput: (callback: (res: KeyboardInputResult) => void) => void;

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
        offWindowResize: (callback: (res: WindowResizeCallbackResult) => void) => void;

        /**
         * 监听窗口尺寸变化事件
         * @param callback 窗口尺寸变化时触发的回调函数，返回变化后的窗口宽高（单位 px）
         */
        onWindowResize: (callback: (res: WindowResizeCallbackResult) => void) => void;

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
        offShareAppMessage: (
            callback: () => ShareAppMessageConfig
        ) => void;

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
        onShareAppMessage: (
            callback: () => ShareAppMessageConfig
        ) => void;

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
    }

    //#endregion 数据缓存
}