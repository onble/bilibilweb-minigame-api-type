declare namespace BilibilWebMinigame {
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
        "audio-volume-indication": [speakers: AgoraSpeakerInfo[], speakerNumber: number, totalVolume: number];
        /** 发生错误 */
        "error": [err: number, msg: string];
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
        "rejoin-channel-success": [channel: string, uid: number, elapsed: number];
        /** 声音质量 */
        "audio-quality": [uid: number, quality: number, delay: number, lost: number];
        /** 发生警告 */
        "warning": [warn: number, msg: string];
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
        joinChannel: (token: string, channelId: string, info?: string, uid?: number) => void;

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
            target?: any
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
            target?: any
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