declare namespace BilibilWebMinigame {
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

}