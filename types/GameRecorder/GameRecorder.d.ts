declare namespace BilibilWebMinigame {
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
            callback: (...args: GameRecorderEventParams[E]) => void
        ) => void;

        /**
         * 取消录制事件监听
         * @param event 事件名
         * @param callback 要取消的回调
         */
        off: <E extends GameRecorderEvent>(
            event: E,
            callback: (...args: GameRecorderEventParams[E]) => void
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

}