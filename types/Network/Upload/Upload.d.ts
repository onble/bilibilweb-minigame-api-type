declare namespace BilibilWebMinigame {
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
        onProgressUpdate: (callback: (res: UploadProgressUpdateResult) => void) => void;

        /**
         * 取消监听上传进度变化事件
         * @param callback 要取消的、已绑定的进度回调函数
         */
        offProgressUpdate: (callback: (res: UploadProgressUpdateResult) => void) => void;

        /**
         * 监听 HTTP Response Header 事件（比请求完成事件更早触发）
         * @param callback 响应头事件触发的回调函数，返回服务器响应头
         */
        onHeadersReceived: (callback: (res: UploadHeadersReceivedResult) => void) => void;

        /**
         * 取消监听 HTTP Response Header 事件
         * @param callback 要取消的、已绑定的响应头回调函数
         */
        offHeadersReceived: (callback: (res: UploadHeadersReceivedResult) => void) => void;
    }
}