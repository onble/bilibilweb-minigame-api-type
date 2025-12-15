declare namespace BilibilWebMinigame {
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

}