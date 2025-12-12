declare namespace BilibilWebMinigame {
    // ------------------------------ 新增枚举类型 ------------------------------
    /**
     * BLE 外围设备广播功率等级（仅 Android 支持）
     * @platform Android、基础库 3.73.0+
     */
    type BLEPeripheralAdvertisePowerLevel = "low" | "medium" | "high";

    // ------------------------------ 新增通用类型 ------------------------------
    /**
     * BLE 外围设备特征属性配置
     * @platform 基础库 3.73.0+
     */
    interface BLEPeripheralCharacteristicProperties {
        /** 是否支持写操作，默认 false */
        write?: boolean;
        /** 是否支持写无回复操作，默认 false */
        writeNoResponse?: boolean;
        /** 是否支持读操作，默认 false */
        read?: boolean;
        /** 是否支持订阅操作，默认 false */
        notify?: boolean;
        /** 是否支持回包操作，默认 false */
        indicate?: boolean;
    }

    /**
     * BLE 外围设备特征权限配置
     * @platform 基础库 3.73.0+
     */
    interface BLEPeripheralCharacteristicPermission {
        /** 是否可读，默认 false */
        readable?: boolean;
        /** 是否可写，默认 false */
        writeable?: boolean;
        /** 是否需要加密读请求，默认 false */
        readEncryptionRequired?: boolean;
        /** 是否需要加密写请求，默认 false */
        writeEncryptionRequired?: boolean;
    }

    /**
     * BLE 外围设备描述符权限配置
     * @platform 基础库 3.73.0+
     */
    interface BLEPeripheralDescriptorPermission {
        /** 是否支持写操作，默认 false */
        write?: boolean;
        /** 是否支持读操作，默认 false */
        read?: boolean;
    }

    /**
     * BLE 外围设备描述符配置
     * @platform 基础库 3.73.0+
     */
    interface BLEPeripheralDescriptor {
        /** Descriptor 的 UUID（必填） */
        uuid: string;
        /** 描述符的权限配置 */
        permission?: BLEPeripheralDescriptorPermission;
        /** 描述符二进制数据 */
        value?: ArrayBuffer;
    }

    /**
     * BLE 外围设备特征配置
     * @platform 基础库 3.73.0+
     */
    interface BLEPeripheralCharacteristic {
        /** characteristic 的 UUID（必填） */
        uuid: string;
        /** 特征支持的操作属性 */
        properties?: BLEPeripheralCharacteristicProperties;
        /** 特征权限配置 */
        permission?: BLEPeripheralCharacteristicPermission;
        /** 特征对应的二进制值 */
        value?: ArrayBuffer;
        /** 描述符数据列表 */
        descriptors?: BLEPeripheralDescriptor[];
    }

    /**
     * BLE 外围设备服务配置
     * @platform 基础库 3.73.0+
     */
    interface BLEPeripheralService {
        /** 蓝牙服务的 UUID（必填） */
        uuid: string;
        /** characteristics 列表（必填） */
        characteristics: BLEPeripheralCharacteristic[];
    }

    /**
     * BLE 外围设备广播制造商信息（仅 Android 支持）
     * @platform Android、基础库 3.73.0+
     */
    interface BLEPeripheralManufacturerData {
        /** 制造商ID（0x 开头的十六进制，必填） */
        manufacturerId: string;
        /** 制造商自定义二进制信息 */
        manufacturerSpecificData?: ArrayBuffer;
    }

    /**
     * BLE 外围设备广播自定义参数
     * @platform 基础库 3.73.0+
     */
    interface BLEPeripheralAdvertiseRequest {
        /** 当前设备是否可连接（iOS 不生效），默认 true */
        connectable?: boolean;
        /** 广播中 deviceName 字段，默认为空 */
        deviceName?: string;
        /** 要广播的服务 UUID 列表（Android 8.0.9+ 支持 16/32/128 位，iOS 仅支持 16 位） */
        serviceUuids?: string[];
        /** 广播的制造商信息（仅安卓支持） */
        notify?: BLEPeripheralManufacturerData[];
    }

    /**
     * BLE 外围设备连接状态变化回调参数（仅 Android 支持）
     * @platform Android、基础库 3.73.0+
     */
    interface BLEPeripheralConnectionStateChangedResult {
        /** 连接状态变化的设备 id */
        deviceId: string;
        /** server 的 UUID */
        serverId: string;
        /** 当前连接状态 */
        connected: boolean;
    }

    /**
     * 特征写请求回调参数
     * @platform 基础库 3.73.0+
     */
    interface BLEPeripheralCharacteristicWriteRequestResult {
        /** 蓝牙特征对应服务的 UUID */
        serviceId: string;
        /** 蓝牙特征的 UUID */
        characteristicId: string;
        /** 唯一标识码（调用 writeCharacteristicValue 时使用） */
        callbackId: number;
        /** 请求写入特征的二进制数据值 */
        value: ArrayBuffer;
    }

    /**
     * 特征读请求回调参数
     * @platform 基础库 3.73.0+
     */
    interface BLEPeripheralCharacteristicReadRequestResult {
        /** 蓝牙特征对应服务的 UUID */
        serviceId: string;
        /** 蓝牙特征的 UUID */
        characteristicId: string;
        /** 唯一标识码（调用 writeCharacteristicValue 时使用） */
        callbackId: number;
    }

    /**
     * 特征订阅/取消订阅回调参数（仅 iOS 支持）
     * @platform iOS、基础库 3.73.0+
     */
    interface BLEPeripheralCharacteristicSubscribeResult {
        /** 蓝牙特征对应服务的 UUID */
        serviceId: string;
        /** 蓝牙特征的 UUID */
        characteristicId: string;
    }

    // ------------------------------ BLEPeripheralServer 类定义 ------------------------------
    /**
     * BLE 外围设备服务端实例
     * @platform 基础库 3.73.0+
     */
    interface BLEPeripheralServer {
        /**
         * 添加服务
         * @platform 基础库 3.73.0+
         * @param options 服务配置参数
         * @example
         * BLEPeripheralServer.addService(function (res) {
         *   service,
         *   console.log('addService:', res)
         * })
         */
        addService: (options: {
            /** 描述service的Object（必填） */
            service: BLEPeripheralService;
            /** 成功回调 */
            success?: () => void;
            /** 失败回调（返回错误码/错误信息） */
            fail?: (res: BluetoothErrorResult) => void;
            /** 完成回调（成功/失败都执行） */
            complete?: () => void;
        }) => void;

        /**
         * 移除服务
         * @platform 基础库 3.73.0+
         * @param options 移除服务配置
         * @example
         * BLEPeripheralServer.removeService(function (res) {
         *   service,
         *   console.log('removeService:', res)
         * })
         */
        removeService: (options: {
            /** service 的 UUID（必填） */
            serviceId: string;
            /** 成功回调 */
            success?: () => void;
            /** 失败回调（返回错误码/错误信息） */
            fail?: (res: BluetoothErrorResult) => void;
            /** 完成回调（成功/失败都执行） */
            complete?: () => void;
        }) => void;

        /**
         * 开始广播本地创建的外围设备
         * @platform 基础库 3.73.0+
         * @description Android 支持多广播，iOS 仅支持单广播；UUID 格式需匹配系统版本约束
         * @param options 广播配置
         * @example
         * BLEPeripheralServer.startAdvertising(function (res) {
         *   advertiseRequest,
         *   console.log('startAdvertising:', res)
         * })
         */
        startAdvertising: (options: {
            /** 广播自定义参数（必填） */
            advertiseRequest: BLEPeripheralAdvertiseRequest;
            /** 广播功率（仅安卓支持），默认 medium */
            powerLevel?: BLEPeripheralAdvertisePowerLevel;
            /** 成功回调 */
            success?: () => void;
            /** 失败回调（返回错误码/错误信息） */
            fail?: (res: BluetoothErrorResult) => void;
            /** 完成回调（成功/失败都执行） */
            complete?: () => void;
        }) => void;

        /**
         * 停止广播
         * @platform 基础库 3.73.0+
         * @param options 停止广播配置
         * @example
         * BLEPeripheralServer.stopAdvertising(function (res) {
         *   service,
         *   console.log('stopAdvertising:', res)
         * })
         */
        stopAdvertising: (options: {
            /** 成功回调 */
            success?: () => void;
            /** 失败回调（返回错误码/错误信息） */
            fail?: (res: BluetoothErrorResult) => void;
            /** 完成回调（成功/失败都执行） */
            complete?: () => void;
        }) => void;

        /**
         * 往指定特征写入二进制数据值，并通知已连接的主机
         * @platform 基础库 3.73.0+
         * @description 收到读/写请求后需立即调用该接口写回数据，否则主机无响应
         * @param options 写入配置
         * @example
         * BLEPeripheralServer.writeCharacteristicValue(function (res) {
         *   serviceId,
         *   characteristicId,
         *   value,
         *   console.log('writeCharacteristicValue:', res)
         * })
         */
        writeCharacteristicValue: (options: {
            /** 蓝牙特征对应服务的 UUID（必填） */
            serviceId: string;
            /** 蓝牙特征的 UUID（必填） */
            characteristicId: string;
            /** characteristic 对应的二进制值（必填） */
            value: ArrayBuffer;
            /** 是否需要通知主机 value 已更新（必填） */
            needNotify: boolean;
            /** 可选，处理回包时使用的唯一标识码 */
            callbackId?: number;
            /** 成功回调 */
            success?: () => void;
            /** 失败回调（返回错误码/错误信息） */
            fail?: (res: BluetoothErrorResult) => void;
            /** 完成回调（成功/失败都执行） */
            complete?: () => void;
        }) => void;

        /**
         * 关闭当前服务端
         * @platform 基础库 3.73.0+
         * @param options 关闭配置
         * @example
         * LEPeripheralServer.close()
         */
        close: (options: {
            /** 成功回调 */
            success?: () => void;
            /** 失败回调（返回错误码/错误信息） */
            fail?: (res: BluetoothErrorResult) => void;
            /** 完成回调（成功/失败都执行） */
            complete?: () => void;
        }) => void;

        /**
         * 监听已连接的设备请求写当前外围设备的特征值事件
         * @platform 基础库 3.73.0+
         * @param callback 写请求回调
         * @example
         * peripheralServer.onCharacteristicWriteRequest(function (res) {
         *   console.log('onCharacteristicWriteRequest', res)
         * })
         */
        onCharacteristicWriteRequest: (
            callback: (res: BLEPeripheralCharacteristicWriteRequestResult) => void
        ) => void;

        /**
         * 监听已连接的设备请求读当前外围设备的特征值事件
         * @platform 基础库 3.73.0+
         * @param callback 读请求回调
         * @example
         * peripheralServer.onCharacteristicReadRequest(function (res) {
         *   console.log('onCharacteristicReadRequest', res)
         * })
         */
        onCharacteristicReadRequest: (
            callback: (res: BLEPeripheralCharacteristicReadRequestResult) => void
        ) => void;

        /**
         * 监听特征订阅事件（仅 iOS 支持）
         * @platform iOS、基础库 3.73.0+
         * @param callback 订阅事件回调
         * @example
         * peripheralServer.onCharacteristicSubscribed(function (res) {
         *   console.log('onCharacteristicSubscribed', res)
         * })
         */
        onCharacteristicSubscribed: (
            callback: (res: BLEPeripheralCharacteristicSubscribeResult) => void
        ) => void;

        /**
         * 监听取消特征订阅事件（仅 iOS 支持）
         * @platform iOS、基础库 3.73.0+
         * @param callback 取消订阅事件回调
         * @example
         * peripheralServer.onCharacteristicUnsubscribed(function (res) {
         *   console.log('onCharacteristicUnsubscribed', res)
         * })
         */
        onCharacteristicUnsubscribed: (
            callback: (res: BLEPeripheralCharacteristicSubscribeResult) => void
        ) => void;

        /**
         * 取消监听已连接的设备请求写当前外围设备的特征值事件
         * @platform 基础库 3.73.0+
         * @param callback 要取消的回调函数（不传则取消所有）
         * @example
         * BLEPeripheralServer.offCharacteristicWriteRequest()
         */
        offCharacteristicWriteRequest: (
            callback?: (res: BLEPeripheralCharacteristicWriteRequestResult) => void
        ) => void;

        /**
         * 取消监听已连接的设备请求读当前外围设备的特征值事件
         * @platform 基础库 3.73.0+
         * @param callback 要取消的回调函数（不传则取消所有）
         * @example
         * BLEPeripheralServer.offCharacteristicReadRequest()
         */
        offCharacteristicReadRequest: (
            callback?: (res: BLEPeripheralCharacteristicReadRequestResult) => void
        ) => void;

        /**
         * 取消监听特征订阅事件
         * @platform 基础库 3.73.0+
         * @param callback 要取消的回调函数（不传则取消所有）
         * @example
         * BLEPeripheralServer.offCharacteristicSubscribed()
         */
        offCharacteristicSubscribed: (
            callback?: (res: BLEPeripheralCharacteristicSubscribeResult) => void
        ) => void;

        /**
         * 取消监听取消特征订阅事件
         * @platform 基础库 3.73.0+
         * @param callback 要取消的回调函数（不传则取消所有）
         * @example
         * BLEPeripheralServer.offCharacteristicUnsubscribed()
         */
        offCharacteristicUnsubscribed: (
            callback?: (res: BLEPeripheralCharacteristicSubscribeResult) => void
        ) => void;
    }

    // ------------------------------ 接口参数类型 ------------------------------
    /**
     * createBLEPeripheralServer - 建立本地作为蓝牙低功耗外围设备的服务端
     * @platform 基础库 3.73.0+
     */
    interface CreateBLEPeripheralServerOptions {
        /** 成功回调（返回外围设备服务端实例） */
        success?: (res: { server: BLEPeripheralServer }) => void;
        /** 失败回调（返回错误码/错误信息） */
        fail?: (res: BluetoothErrorResult) => void;
        /** 完成回调（成功/失败都执行） */
        complete?: () => void;
    }

    // ------------------------------ 监听/取消监听回调类型 ------------------------------
    /**
     * onBLEPeripheralConnectionStateChanged - 监听外围设备连接状态变化的回调（仅 Android 支持）
     * @platform Android、基础库 3.73.0+
     */
    type BLEPeripheralConnectionStateChangedCallback = (
        res: BLEPeripheralConnectionStateChangedResult
    ) => void;
}