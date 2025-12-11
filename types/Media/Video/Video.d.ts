declare namespace BilibilWebMinigame {
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
        fail?: (err: { errCode: SaveVideoToPhotosAlbumErrorCode; errMsg: string }) => void;
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
    type VideoErrorMsg = "MEDIA_ERR_NETWORK" | "MEDIA_ERR_DECODE" | "MEDIA_ERR_SRC_NOT_SUPPORTED";

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
        requestFullScreen: (direction: VideoFullScreenDirection) => Promise<void>;
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
}