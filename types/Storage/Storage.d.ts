declare namespace BilibilWebMinigame {
    /**
     * getStorageInfo/getStorageInfoSync 返回值类型
     * @description 本地缓存的信息（key列表、已用空间、空间上限）
     */
    interface StorageInfoResult {
        /** 当前 storage 中所有的 key 列表 */
        keys: string[];
        /** 当前占用的空间大小，单位：KB */
        currentSize: number;
        /** 限制的空间大小，单位：KB */
        limitSize: number;
    }

    /**
     * getStorageInfo 接口调用参数类型
     * @description 异步获取本地缓存信息的配置项（仅包含回调）
     */
    interface GetStorageInfoOptions {
        /** 接口调用成功的回调函数，返回缓存信息 */
        success?: (res: StorageInfoResult) => void;
        /** 接口调用失败的回调函数 */
        fail?: (err?: any) => void;
        /** 接口调用结束的回调函数（成功/失败都会执行） */
        complete?: () => void;
    }

    /**
     * clearStorage 接口调用参数类型
     * @description 清理本地数据缓存的配置项（仅包含回调）
     */
    interface ClearStorageOptions {
        /** 接口调用成功的回调函数 */
        success?: () => void;
        /** 接口调用失败的回调函数 */
        fail?: (err?: any) => void;
        /** 接口调用结束的回调函数（成功/失败都会执行） */
        complete?: () => void;
    }

    /**
     * removeStorage 接口调用参数类型
     * @description 移除指定 key 本地缓存的配置项
     */
    interface RemoveStorageOptions {
        /** 本地缓存中指定的 key（必填） */
        key: string;
        /** 接口调用成功的回调函数 */
        success?: () => void;
        /** 接口调用失败的回调函数 */
        fail?: (err?: any) => void;
        /** 接口调用结束的回调函数（成功/失败都会执行） */
        complete?: () => void;
    }

    /**
     * setStorage 接口调用参数类型
     * @description 存储数据到指定 key 的配置项；单个 key 最大存储 1MB，所有数据总上限 10MB
     */
    interface SetStorageOptions {
        /** 本地缓存中指定的 key（必填） */
        key: string;
        /**
         * 需要存储的内容（必填）
         * @description 仅支持原生类型、Date、可通过 JSON.stringify 序列化的对象
         */
        data: any;
        /** 接口调用成功的回调函数 */
        success?: () => void;
        /** 接口调用失败的回调函数 */
        fail?: (err?: any) => void;
        /** 接口调用结束的回调函数（成功/失败都会执行） */
        complete?: () => void;
    }

    /**
     * getStorage 接口调用参数类型
     * @description 异步获取指定 key 缓存内容的配置项
     */
    interface GetStorageOptions {
        /** 本地缓存中指定的 key（必填） */
        key: string;
        /** 接口调用成功的回调函数，返回 key 对应的内容 */
        success?: (res: { data: any }) => void;
        /** 接口调用失败的回调函数 */
        fail?: (err?: any) => void;
        /** 接口调用结束的回调函数（成功/失败都会执行） */
        complete?: () => void;
    }

}