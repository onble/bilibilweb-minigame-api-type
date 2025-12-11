declare namespace BilibilWebMinigame {
    // ------------------------------ 相机相关枚举类型 ------------------------------
    /**
     * 摄像头朝向枚举
     * @platform 基础库 3.79.0+
     */
    type CameraDevicePosition = "front" | "back";

    /**
     * 闪光灯模式枚举
     * @platform 基础库 3.79.0+
     */
    type CameraFlash = "auto" | "on" | "off";

    /**
     * 相机帧数据图像尺寸枚举
     * @platform 基础库 3.79.0+
     */
    type CameraSize = "small" | "medium" | "large";

    /**
     * 拍照质量枚举
     * @platform 基础库 3.79.0+
     */
    type CameraPhotoQuality = "high" | "normal" | "low";

    // ------------------------------ createCamera 接口参数类型 ------------------------------
    /**
     * createCamera 接口调用参数类型
     * @platform 基础库 3.79.0+，低版本需做兼容处理
     * @description 创建相机对象的配置项，需先获取 scope.camera 授权
     */
    interface CreateCameraOptions {
        /** 相机左上角横坐标，默认 0 */
        x?: number;
        /** 相机左上角纵坐标，默认 0 */
        y?: number;
        /** 相机宽度，默认 300 */
        width?: number;
        /** 相机高度，默认 150 */
        height?: number;
        /** 摄像头朝向，默认 back（front=前置/back=后置） */
        devicePosition?: CameraDevicePosition;
        /** 闪光灯模式，默认 auto（auto=自动/on=开启/off=关闭） */
        flash?: CameraFlash;
        /** 帧数据图像尺寸，默认 small（small/medium/large） */
        size?: CameraSize;
        /** 接口调用成功的回调函数 */
        success?: (res?: any) => void;
        /** 接口调用失败的回调函数 */
        fail?: (err?: any) => void;
        /** 接口调用结束的回调函数（成功/失败都会执行） */
        complete?: (res?: any) => void;
    }

    // ------------------------------ Camera 对象回调参数类型 ------------------------------
    /**
     * Camera.onCameraFrame 回调参数类型
     * @description 摄像头实时帧数据返回结构
     */
    interface CameraFrameResult {
        /** 图像数据矩形的宽度 */
        width: number;
        /** 图像数据矩形的高度 */
        height: number;
        /** 图像像素点数据（一维数组，每四项表示一个像素点的 rgba） */
        data: ArrayBuffer;
    }

    /**
     * Camera.stopRecord 成功回调返回值类型
     * @description 结束录像后返回的封面和视频临时路径
     */
    interface CameraStopRecordResult {
        /** 视频封面临时路径 */
        tempThumbPath: string;
        /** 视频临时路径 */
        tempVideoPath: string;
    }

    /**
     * Camera.takePhoto 成功回调返回值类型
     * @description 拍照后返回的图片临时路径及尺寸
     */
    interface CameraTakePhotoResult {
        /** 图片临时路径 */
        tempImagePath: string;
        /** 图片宽度 */
        width: number;
        /** 图片高度 */
        height: number;
    }

    // ------------------------------ Camera 对象类型 ------------------------------
    /**
     * 相机对象（由 bl.createCamera 创建）
     * @platform 基础库 3.79.0+，低版本需做兼容处理
     * @description 需先获取摄像头授权（scope.camera）才能正常使用
     */
    interface Camera {
        // 基础属性
        x: number;
        y: number;
        width: number;
        height: number;
        devicePosition: CameraDevicePosition;
        flash: CameraFlash;
        size: CameraSize;

        // 核心方法
        /** 销毁相机对象 */
        destroy: () => void;

        /**
         * 监听用户不允许授权使用摄像头的事件
         * @param callback 授权取消时的回调函数
         */
        onAuthCancel: (callback: () => void) => void;

        /**
         * 监听摄像头实时帧数据事件
         * @param callback 帧数据返回时的回调函数，返回帧宽/高/像素数据
         */
        onCameraFrame: (callback: (res: CameraFrameResult) => void) => void;

        /**
         * 监听摄像头非正常终止事件（如退出后台）
         * @param callback 终止事件触发时的回调函数
         */
        onStop: (callback: () => void) => void;

        /**
         * 开始录像
         * @returns 操作结果 Promise（无返回值，失败时 reject）
         */
        startRecord: () => Promise<void>;

        /**
         * 结束录像
         * @param compressed 是否压缩录制的视频
         * @returns 操作结果 Promise，成功时返回 {tempThumbPath, tempVideoPath}
         */
        stopRecord: (compressed: boolean) => Promise<CameraStopRecordResult>;

        /**
         * 拍照
         * @param quality 拍照质量（high=高清/normal=普通/low=低清）
         * @returns 操作结果 Promise，成功时返回 {tempImagePath, width, height}
         */
        takePhoto: (quality: CameraPhotoQuality) => Promise<CameraTakePhotoResult>;

        /** 关闭帧数据监听 */
        closeFrameChange: () => void;

        /** 开启帧数据监听（需配合 onCameraFrame 使用） */
        listenFrameChange: () => void;
    }

}