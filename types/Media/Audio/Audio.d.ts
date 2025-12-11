declare namespace BilibilWebMinigame {
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

}