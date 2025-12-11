declare namespace BilibilWebMinigame {
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
}