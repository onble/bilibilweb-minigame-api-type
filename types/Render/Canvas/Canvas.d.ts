declare namespace BilibilWebMinigame {
    /**
     * Canvas.toTempFilePath/toTempFilePathSync 的文件类型枚举
     */
    type CanvasFileType = "jpg" | "png";

    /**
     * WebGL 上下文属性（仅 getContext('webgl') 时有效）
     */
    interface WebGLContextAttributes {
        /** 绘图完成后是否保留绘图缓冲区，默认 false */
        preserveDrawingBuffer?: boolean;
    }

    /**
     * Canvas.toTempFilePath 接口调用参数类型
     */
    interface CanvasToTempFilePathOptions {
        /** 截取 canvas 的左上角横坐标，默认 0 */
        x?: number;
        /** 截取 canvas 的左上角纵坐标，默认 0 */
        y?: number;
        /** 截取 canvas 的宽度，默认 canvas 自身宽度 */
        width?: number;
        /** 截取 canvas 的高度，默认 canvas 自身高度 */
        height?: number;
        /** 目标文件的宽度，会拉伸/压缩截取区域，默认 canvas 自身宽度 */
        destWidth?: number;
        /** 目标文件的高度，会拉伸/压缩截取区域，默认 canvas 自身高度 */
        destHeight?: number;
        /** 目标文件的类型，默认 png */
        fileType?: CanvasFileType;
        /**
         * jpg 图片质量（仅 fileType 为 jpg 时有效）
         * @description 取值范围 0.0(最低)~1.0(最高)（不含 0），超出范围按 1.0 处理
         * @default 1.0
         */
        quality?: number;
        /**
         * 接口调用成功的回调函数
         * @param res 回调参数，包含临时文件路径
         */
        success?: (res: { tempFilePath: string }) => void;
        /** 接口调用失败的回调函数 */
        fail?: (err?: any) => void;
        /** 接口调用结束的回调函数（成功/失败都会执行） */
        complete?: () => void;
    }

    /**
     * Canvas.toTempFilePathSync 接口调用参数类型（无回调，其余同异步版本）
     */
    type CanvasToTempFilePathSyncOptions = Omit<
        CanvasToTempFilePathOptions,
        "success" | "fail" | "complete"
    >;

    /**
     * 画布对象
     * @description 首次通过 bl.createCanvas() 创建的是屏幕画布，后续创建的是离屏画布
     */
    interface Canvas {
        /**
         * 将当前 Canvas 保存为临时文件（异步版本）
         * @param options 截图/保存配置项
         * @returns canvas 生成的临时文件路径
         * @example
         * Canvas.toTempFilePath({
         *   x: 10,
         *   y: 10,
         *   width: 200,
         *   height: 150,
         *   destWidth: 400,
         *   destHeight: 300,
         *   success: (res) => {
         *     bl.shareAppMessage({
         *       imageUrl: res.tempFilePath
         *     })
         *   }
         * })
         */
        toTempFilePath: (options: CanvasToTempFilePathOptions) => string;

        /**
         * 将当前 Canvas 保存为临时文件（同步版本）
         * @param options 截图/保存配置项
         * @returns canvas 生成的临时文件路径
         * @example
         * const tempFilePath = Canvas.toTempFilePathSync({
         *   x: 10,
         *   y: 10,
         *   width: 200,
         *   height: 150,
         *   destWidth: 400,
         *   destHeight: 300
         * })
         * bl.shareAppMessage({
         *   imageUrl: tempFilePath
         * })
         */
        toTempFilePathSync: (options: CanvasToTempFilePathSyncOptions) => string;

        /**
         * 获取画布对象的绘图上下文
         * @param contextType 上下文类型（2d/webgl）
         * @param contextAttributes WebGL 上下文属性（仅 contextType 为 webgl 时有效）
         * @returns 绘图上下文对象（2d 对应 CanvasRenderingContext2D，webgl 对应 WebGLRenderingContext）
         */
        getContext: (
            contextType: "2d" | "webgl",
            contextAttributes?: WebGLContextAttributes
        ) => CanvasRenderingContext2D | WebGLRenderingContext;

        /**
         * 把画布绘制内容转为 data URI 格式字符串返回
         * @returns data URI 格式的字符串
         */
        toDataURL: () => string;
    }
    /**
     * 补充 WebGL 上下文类型（贴合文档中 WebGL 1.0 规范）
     * 注：完整属性/方法可参考 WebGL 1.0 标准，此处仅对齐文档提及的约束
     */
    interface WebGLRenderingContext {
        // 文档提及 Android 不支持的接口
        getExtension?: (extensionName: string) => any;
        getSupportedExtensions?: () => string[];
        pixelStorei?: (pname: number, param: number) => void;
    }

    /**
     * 补充 2D 绘图上下文类型（贴合文档中 HTML Canvas 2D Context 规范）
     * 注：完整属性/方法可参考 HTML Canvas 2D 标准，此处仅对齐文档提及的约束
     */
    interface CanvasRenderingContext2D {
        // 文档提及不支持的属性/方法
        globalCompositeOperation?: string;
        isPointInPath?: (x: number, y: number) => boolean;
    }
}