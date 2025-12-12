declare namespace BilibilWebMinigame {
    /**
     * getLocation 接口成功回调返回值类型
     * @description 地理位置信息（纬度/经度）
     */
    interface GetLocationSuccessResult {
        /**
         * 纬度
         * @description 范围 -90~90，负数表示南纬
         */
        latitude: number;
        /**
         * 经度
         * @description 范围 -180~180，负数表示西经
         */
        longitude: number;
    }

    /**
     * getLocation 接口调用参数类型
     * @description 获取当前地理位置、速度；用户离开小游戏后此接口无法调用
     */
    interface GetLocationOptions {
        /** 接口调用成功的回调函数，返回纬度/经度信息 */
        success?: (res: GetLocationSuccessResult) => void;
        /** 接口调用失败的回调函数 */
        fail?: (err?: any) => void;
        /** 接口调用结束的回调函数（成功/失败都会执行） */
        complete?: () => void;
    }
}