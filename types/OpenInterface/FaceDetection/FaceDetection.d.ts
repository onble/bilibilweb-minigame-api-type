declare namespace BilibilWebMinigame {
    // ------------------------------ 核心枚举/类型 ------------------------------
    /**
     * 人脸检测模型选择枚举
     * @platform 仅 Android 支持
     * @description 0=短期模型（2米内），1=全范围模型（5米内）
     */
    enum FaceDetectionModelSelection {
        /** 短期模型：适合2米内的面部检测 */
        SHORT_RANGE = 0,
        /** 全范围模型：适合5米内的面部检测（稀疏模型，推理更快） */
        FULL_RANGE = 1,
    }

    /**
     * 面部矩形区域坐标（相对整个图像）
     * @platform 仅 Android 支持
     */
    interface FaceBoundingBox {
        /** 左位置（相对图像） */
        left: number;
        /** 右位置（相对图像） */
        right: number;
        /** 上位置（相对图像） */
        top: number;
        /** 下位置（相对图像） */
        bottom: number;
    }

    /**
     * 面部关键点坐标（共6个：右眼、左眼、鼻尖、嘴中部、右耳、左耳）
     * @platform 仅 Android 支持
     */
    interface FaceLandmark {
        /** x轴位置（相对整个图像） */
        x: number;
        /** y轴位置（相对整个图像） */
        y: number;
    }

    /**
     * 单个人脸识别结果
     * @platform 仅 Android 支持
     */
    interface FaceDetectionResult {
        /** 面部矩形区域坐标 */
        boundingBox: FaceBoundingBox;
        /** 面部关键点坐标列表（共6个） */
        landmarks: FaceLandmark[];
    }

    /**
     * 人脸检测结果回调的图像数据结构
     * @platform 仅 Android 支持
     */
    interface FaceDetectionImageData {
        /** 图像宽度 */
        width: number;
        /** 图像高度 */
        height: number;
        /** 图像像素点数据（RGBA 一维数组，每4项为一个像素） */
        data: ArrayBuffer;
    }

    /**
     * 人脸检测结果回调参数
     * @platform 仅 Android 支持
     */
    interface FaceDetectionOnResultCallbackRes {
        /** 图像数据 */
        image: FaceDetectionImageData;
        /** 人脸识别结果列表 */
        detections: FaceDetectionResult[];
    }

    /**
     * 人脸检测异常回调参数
     * @platform 仅 Android 支持
     */
    interface FaceDetectionOnErrorCallbackRes {
        /** 异常信息 */
        errMsg: string;
    }

    // ------------------------------ 人脸检测引擎实例类型 ------------------------------
    /**
     * 人脸检测引擎实例（FaceDetection 对象）
     * @platform 仅 Android 支持
     */
    interface FaceDetection {
        /** 引擎版本名称信息 */
        versionName: string;
        /** 引擎版本构建版本信息 */
        versionCode: number;

        /**
         * 发送需要识别的图像数据
         * @param buffer 图像像素点数据（RGBA 一维数组，每4项为一个像素）
         * @param width 图片宽度
         * @param height 图片高度
         */
        send: (buffer: ArrayBuffer, width: number, height: number) => void;

        /**
         * 注册识别结果回调事件
         * @param callback 识别结果回调函数
         */
        onResult: (callback: (res: FaceDetectionOnResultCallbackRes) => void) => void;

        /**
         * 注册异常事件回调
         * @param callback 异常回调函数
         */
        onError: (callback: (res: FaceDetectionOnErrorCallbackRes) => void) => void;

        /**
         * 关闭引擎模块（释放资源）
         */
        close: () => void;
    }

    // ------------------------------ 接口参数/回调类型 ------------------------------
    /**
     * createFaceDetection 成功回调结果
     * @platform 仅 Android 支持
     */
    type CreateFaceDetectionSuccessResult = FaceDetection;

    /**
     * createFaceDetection - 创建人脸检测引擎接口参数
     * @platform 仅 Android 支持
     */
    interface CreateFaceDetectionOptions {
        /** 模型选择（0=短期模型，1=全范围模型），默认 0 */
        modelSelection?: FaceDetectionModelSelection;
        /** 接口调用成功的回调函数（可选） */
        success?: (res: CreateFaceDetectionSuccessResult) => void;
        /** 接口调用失败的回调函数（可选） */
        fail?: (res: string) => void;
        /** 接口调用结束的回调函数（可选） */
        complete?: () => void;
    }
}