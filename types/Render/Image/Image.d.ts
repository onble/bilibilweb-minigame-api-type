declare namespace BilibilWebMinigame {
    /**
     * 图片对象（由 bl.createImage() 创建）
     */
    interface Image {
        /** 图片的 URL 地址 */
        src: string;
        /** 图片的真实宽度（像素） */
        width: number;
        /** 图片的真实高度（像素） */
        height: number;
        /** 图片加载完成后触发的回调函数 */
        onload?: () => void;
        /** 图片加载发生错误后触发的回调函数 */
        onerror?: () => void;
    }
}