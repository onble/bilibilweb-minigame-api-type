declare namespace BilibilWebMinigame {
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
        onProgressUpdate: (callback: (res: DownloadProgressUpdateResult) => void) => void;

        /**
         * 取消监听下载进度变化事件
         * @param callback 要取消的、已绑定的进度回调函数
         */
        offProgressUpdate: (callback: (res: DownloadProgressUpdateResult) => void) => void;
    }
}