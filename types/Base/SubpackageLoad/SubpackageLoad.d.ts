declare namespace BilibilWebMinigame {
    /**
     * LoadSubpackageTask.onProgressUpdate 回调参数类型
     * @description 分包加载进度变化事件的返回参数
     */
    interface LoadSubpackageProgressUpdateResult {
        /** 分包下载进度百分比 */
        progress: number;
        /** 已经下载的数据长度，单位 Bytes */
        totalBytesWritten: number;
        /** 预期需要下载的数据总长度，单位 Bytes */
        totalBytesExpectedToWrite: number;
    }

    /**
     * loadSubpackage 接口调用参数类型
     * @description 触发分包加载的配置项
     */
    interface LoadSubpackageOptions {
        /**
         * 分包的名字（必填）
         * @description 可填写分包的 name 或 root 字段值
         */
        name: string;
        /** 分包加载成功的回调函数（必填） */
        success: () => void;
        /** 分包加载失败的回调函数（必填） */
        fail: (err?: any) => void;
        /** 分包加载结束的回调函数（必填，成功/失败都会执行） */
        complete: () => void;
    }

    /**
     * 加载分包任务实例
     * @description 用于获取分包加载状态，由 bl.loadSubpackage 接口返回
     */
    interface LoadSubpackageTask {
        /**
         * 监听分包加载进度变化事件
         * @param callback 进度变化事件的回调函数，包含下载进度、已下载字节数、总字节数
         */
        onProgressUpdate: (
            callback: (res: LoadSubpackageProgressUpdateResult) => void
        ) => void;
    }
}