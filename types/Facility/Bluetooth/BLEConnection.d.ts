declare namespace BilibilWebMinigame {
    // ------------------------------ 新增枚举类型 ------------------------------
    /**
     * BLE 写模式枚举（iOS/安卓通用）
     * @platform 基础库 3.73.0+
     */
    type BLEWriteType = "write" | "writeNoResponse";

    /**
     * BLE 特征订阅类型枚举
     * @platform 基础库 3.73.0+
     */
    type BLESubscribeType = "notification" | "indication";

    // ------------------------------ 新增通用类型 ------------------------------
    /**
     * BLE 设备服务信息（getBLEDeviceServices 返回）
     * @platform 基础库 3.73.0+
     */
    interface BLEDeviceService {
        /** 蓝牙设备服务的 UUID */
        uuid: string;
        /** 该服务是否为主服务 */
        isPrimary: boolean;
    }

    /**
     * BLE 特征操作属性
     * @platform 基础库 3.73.0+
     */
    interface BLECharacteristicProperties {
        /** 是否支持 read 操作 */
        read: boolean;
        /** 是否支持 write 操作 */
        write: boolean;
        /** 是否支持 notify 操作 */
        notify: boolean;
        /** 是否支持 indicate 操作 */
        indicate: boolean;
        /** 是否支持无回复写操作 */
        writeNoResponse: boolean;
        /** 是否支持有回复写操作 */
        writeDefault: boolean;
    }

    /**
     * BLE 设备特征信息（getBLEDeviceCharacteristics 返回）
     * @platform 基础库 3.73.0+
     */
    interface BLEDeviceCharacteristic {
        /** 蓝牙特征的 UUID */
        uuid: string;
        /** 该特征支持的操作类型 */
        properties: BLECharacteristicProperties;
    }

    /**
     * BLE 连接状态变化回调参数
     * @platform 基础库 3.73.0+
     */
    interface BLEConnectionStateChangeResult {
        /** 蓝牙设备 id */
        deviceId: string;
        /** 是否处于已连接状态 */
        connected: boolean;
    }

    /**
     * BLE 特征值变化回调参数
     * @platform 基础库 3.73.0+
     */
    interface BLECharacteristicValueChangeResult {
        /** 蓝牙设备 id */
        deviceId: string;
        /** 蓝牙特征对应服务的 UUID */
        serviceId: string;
        /** 蓝牙特征的 UUID */
        characteristicId: string;
        /** 特征最新的值（二进制） */
        value: ArrayBuffer;
    }

    /**
     * BLE MTU 变化回调参数（仅 Android 支持）
     * @platform Android、基础库 3.73.0+
     */
    interface BLEMTUChangeResult {
        /** 蓝牙设备 id */
        deviceId: string;
        /** 最新的最大传输单元 */
        mtu: number;
    }

    // ------------------------------ 接口参数类型 ------------------------------
    /**
     * createBLEConnection - 连接蓝牙低功耗设备
     * @platform 基础库 3.73.0+
     */
    interface CreateBLEConnectionOptions {
        /** 蓝牙设备 id（必填） */
        deviceId: string;
        /** 超时时间（单位 ms），不填表示不会超时 */
        timeout?: number;
        /** 成功回调 */
        success?: () => void;
        /** 失败回调（返回错误码/错误信息） */
        fail?: (res: BluetoothErrorResult) => void;
        /** 完成回调（成功/失败都执行） */
        complete?: () => void;
    }

    /**
     * closeBLEConnection - 断开与蓝牙低功耗设备的连接
     * @platform 基础库 3.73.0+
     */
    interface CloseBLEConnectionOptions {
        /** 蓝牙设备 id（必填） */
        deviceId: string;
        /** 成功回调 */
        success?: () => void;
        /** 失败回调（返回错误码/错误信息） */
        fail?: (res: BluetoothErrorResult) => void;
        /** 完成回调（成功/失败都执行） */
        complete?: () => void;
    }

    /**
     * getBLEDeviceServices - 获取蓝牙低功耗设备所有服务
     * @platform 基础库 3.73.0+
     */
    interface GetBLEDeviceServicesOptions {
        /** 蓝牙设备 id（必填，需已建立连接） */
        deviceId: string;
        /** 成功回调（返回设备服务列表） */
        success?: (res: { services: BLEDeviceService[] }) => void;
        /** 失败回调（返回错误码/错误信息） */
        fail?: (res: BluetoothErrorResult) => void;
        /** 完成回调（成功/失败都执行） */
        complete?: () => void;
    }

    /**
     * getBLEDeviceCharacteristics - 获取蓝牙低功耗设备某个服务的所有特征
     * @platform 基础库 3.73.0+
     */
    interface GetBLEDeviceCharacteristicsOptions {
        /** 蓝牙设备 id（必填，需已建立连接） */
        deviceId: string;
        /** 蓝牙服务 UUID（必填，需先调用 getBLEDeviceServices 获取） */
        serviceId: string;
        /** 成功回调（返回设备特征列表） */
        success?: (res: { characteristics: BLEDeviceCharacteristic[] }) => void;
        /** 失败回调（返回错误码/错误信息） */
        fail?: (res: BluetoothErrorResult) => void;
        /** 完成回调（成功/失败都执行） */
        complete?: () => void;
    }

    /**
     * getBLEMTU - 获取蓝牙低功耗的最大传输单元
     * @platform 基础库 3.73.0+
     */
    interface GetBLEMTUOptions {
        /** 蓝牙设备 id（必填） */
        deviceId: string;
        /** 写模式（iOS 特有参数），默认 write */
        writeType?: BLEWriteType;
        /** 成功回调（返回最大传输单元） */
        success?: (res: { mtu: number }) => void;
        /** 失败回调（返回错误码/错误信息） */
        fail?: (res: BluetoothErrorResult) => void;
        /** 完成回调（成功/失败都执行） */
        complete?: () => void;
    }

    /**
     * getBLEDeviceRSSI - 获取蓝牙低功耗设备的信号强度
     * @platform 基础库 3.73.0+
     */
    interface GetBLEDeviceRSSIOptions {
        /** 蓝牙设备 id（必填） */
        deviceId: string;
        /** 成功回调（返回信号强度） */
        success?: (res: { RSSI: number }) => void;
        /** 失败回调（返回错误码/错误信息） */
        fail?: (res: BluetoothErrorResult) => void;
        /** 完成回调（成功/失败都执行） */
        complete?: () => void;
    }

    /**
     * notifyBLECharacteristicValueChange - 启用/关闭特征值变化的 notify 功能
     * @platform 基础库 3.73.0+
     */
    interface NotifyBLECharacteristicValueChangeOptions {
        /** 蓝牙设备 id（必填） */
        deviceId: string;
        /** 蓝牙特征对应服务的 UUID（必填） */
        serviceId: string;
        /** 蓝牙特征的 UUID（必填） */
        characteristicId: string;
        /** 是否启用 notify，默认 false */
        state?: boolean;
        /** 特征订阅类型，默认 indication */
        type?: BLESubscribeType;
        /** 成功回调 */
        success?: () => void;
        /** 失败回调（返回错误码/错误信息） */
        fail?: (res: BluetoothErrorResult) => void;
        /** 完成回调（成功/失败都执行） */
        complete?: () => void;
    }

    /**
     * readBLECharacteristicValue - 读取蓝牙低功耗设备特征值的二进制数据
     * @platform 基础库 3.73.0+
     */
    interface ReadBLECharacteristicValueOptions {
        /** 蓝牙设备 id（必填） */
        deviceId: string;
        /** 蓝牙特征对应服务的 UUID（必填） */
        serviceId: string;
        /** 蓝牙特征的 UUID（必填） */
        characteristicId: string;
        /** 成功回调 */
        success?: () => void;
        /** 失败回调（返回错误码/错误信息） */
        fail?: (res: BluetoothErrorResult) => void;
        /** 完成回调（成功/失败都执行） */
        complete?: () => void;
    }

    /**
     * writeBLECharacteristicValue - 向蓝牙低功耗设备特征值写入二进制数据
     * @platform 基础库 3.73.0+
     */
    interface WriteBLECharacteristicValueOptions {
        /** 蓝牙设备 id（必填） */
        deviceId: string;
        /** 蓝牙特征对应服务的 UUID（必填） */
        serviceId: string;
        /** 蓝牙特征的 UUID（必填） */
        characteristicId: string;
        /** 要写入的二进制值（必填） */
        value: ArrayBuffer;
        /** 写模式（必填，iOS 优先 write，安卓优先 writeNoResponse） */
        writeType: BLEWriteType;
        /** 成功回调 */
        success?: () => void;
        /** 失败回调（返回错误码/错误信息） */
        fail?: (res: BluetoothErrorResult) => void;
        /** 完成回调（成功/失败都执行） */
        complete?: () => void;
    }

    /**
     * setBLEMTU - 协商设置蓝牙低功耗的最大传输单元（仅 Android 支持）
     * @platform Android、基础库 3.73.0+
     */
    interface SetBLEMTUOptions {
        /** 蓝牙设备 id（必填） */
        deviceId: string;
        /** 最大传输单元（必填，范围 22 < mtu ≤ 512，单位 bytes） */
        mtu: number;
        /** 成功回调（返回最终协商的 MTU 值） */
        success?: (res: { mtu: number }) => void;
        /** 失败回调（返回错误码/错误信息，包含最终协商的 MTU 值） */
        fail?: (res: BluetoothErrorResult & { mtu?: number }) => void;
        /** 完成回调（成功/失败都执行） */
        complete?: () => void;
    }

    // ------------------------------ 监听/取消监听回调类型 ------------------------------
    /**
     * onBLEConnectionStateChange - 监听 BLE 连接状态变化的回调
     * @platform 基础库 3.73.0+
     */
    type BLEConnectionStateChangeCallback = (
        res: BLEConnectionStateChangeResult
    ) => void;

    /**
     * onBLECharacteristicValueChange - 监听 BLE 特征值变化的回调
     * @platform 基础库 3.73.0+
     */
    type BLECharacteristicValueChangeCallback = (
        res: BLECharacteristicValueChangeResult
    ) => void;

    /**
     * onBLEMTUChange - 监听 BLE MTU 变化的回调（仅 Android 支持）
     * @platform Android、基础库 3.73.0+
     */
    type BLEMTUChangeCallback = (res: BLEMTUChangeResult) => void;
}