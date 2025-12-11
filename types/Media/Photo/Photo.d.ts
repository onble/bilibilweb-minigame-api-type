declare namespace BilibilWebMinigame {
    /**
     * saveImageToPhotosAlbum 接口调用参数类型
     * @description 保存图片到系统相册的配置项
     */
    interface SaveImageToPhotosAlbumOptions {
        /**
         * 图片文件路径（必填）
         * @description 支持临时文件路径、永久文件路径；不支持网络图片路径
         */
        filePath: string;
        /** 接口调用成功的回调函数 */
        success?: () => void;
        /** 接口调用失败的回调函数 */
        fail?: (err?: any) => void;
        /** 接口调用结束的回调函数（成功/失败都会执行） */
        complete?: () => void;
    }

}