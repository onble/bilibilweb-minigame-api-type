declare namespace BilibilWebMinigame {
    // ------------------------------ 核心枚举类型 ------------------------------
    /**
     * 蓝牙模式枚举（仅 iOS 需指定）
     * @platform iOS、基础库 3.73.0+
     */
    type BluetoothMode = "central" | "peripheral";

    /**
     * 蓝牙扫描功率等级枚举（仅 Android 支持）
     * @platform Android、基础库 3.73.0+
     */
    type BluetoothPowerLevel = "low" | "medium" | "high";

    /**
     * 蓝牙接口错误码枚举
     * @platform 基础库 3.73.0+
     */
    type BluetoothErrCode =
        | 0      // 正常
        | -1     // 已连接
        | 10000  // 未初始化蓝牙适配器
        | 10001  // 当前蓝牙适配器不可用
        | 10002  // 没有找到指定设备
        | 10003  // 连接失败
        | 10004  // 没有找到指定服务
        | 10005  // 没有找到指定特征
        | 10006  // 当前连接已断开
        | 10007  // 当前特征不支持此操作
        | 10008  // 其余所有系统上报的异常
        | 10009  // Android 系统特有，系统版本低于 4.3 不支持 BLE
        | 10012  // 连接超时
        | 10013  // 连接 deviceId 为空或者是格式不正确
        | 10014; // 参数不正确

    // ------------------------------ 通用类型 ------------------------------
    /**
     * 蓝牙操作错误回调参数
     * @platform 基础库 3.73.0+
     */
    interface BluetoothErrorResult {
        /** 错误码 */
        errCode: BluetoothErrCode;
        /** 错误信息 */
        errMsg: string;
    }

    /**
     * 基础蓝牙设备信息（精简版，用于已连接设备列表）
     * @platform 基础库 3.73.0+
     */
    interface BasicBluetoothDevice {
        /** 蓝牙设备名称（某些设备可能没有） */
        name?: string;
        /** 用于区分设备的唯一 ID */
        deviceId: string;
    }

    /**
     * 完整蓝牙设备信息（包含广播数据、信号强度等）
     * @platform 基础库 3.73.0+
     */
    interface CompleteBluetoothDevice extends BasicBluetoothDevice {
        /** 当前蓝牙设备的信号强度（单位 dBm） */
        RSSI: number;
        /** 广播数据段中的 ManufacturerData 数据段 */
        advertisData: ArrayBuffer;
        /** 广播数据段中的 ServiceUUIDs 数据段 */
        advertisServiceUUIDs: string[];
        /** 广播数据段中的 LocalName 数据段 */
        localName: string;
        /** 广播数据段中的 ServiceData 数据段 */
        serviceData: Record<string, any>;
        /** 当前蓝牙设备是否可连接（Android 8.0 以下不支持返回该值） */
        connectable?: boolean;
    }

    /**
     * 蓝牙适配器状态
     * @platform 基础库 3.73.0+
     */
    interface BluetoothAdapterState {
        /** 是否正在搜索设备 */
        discovering: boolean;
        /** 蓝牙适配器是否可用 */
        available: boolean;
    }

    // ------------------------------ 接口参数类型 ------------------------------
    /**
     * openBluetoothAdapter - 初始化蓝牙模块
     * @platform 基础库 3.73.0+
     */
    interface OpenBluetoothAdapterOptions {
        /** 蓝牙模式（仅 iOS 需要），默认 central */
        mode?: BluetoothMode;
        /** 成功回调 */
        success?: () => void;
        /** 失败回调（返回错误码/错误信息） */
        fail?: (res: BluetoothErrorResult) => void;
        /** 完成回调（成功/失败都执行） */
        complete?: () => void;
    }

    /**
     * closeBluetoothAdapter - 关闭蓝牙模块
     * @platform 基础库 3.73.0+
     */
    interface CloseBluetoothAdapterOptions {
        /** 成功回调 */
        success?: () => void;
        /** 失败回调（返回错误码/错误信息） */
        fail?: (res: BluetoothErrorResult) => void;
        /** 完成回调（成功/失败都执行） */
        complete?: () => void;
    }

    /**
     * startBluetoothDevicesDiscovery - 开始搜寻蓝牙外围设备
     * @platform 基础库 3.73.0+
     */
    interface StartBluetoothDevicesDiscoveryOptions {
        /** 要搜索的蓝牙设备主服务的 UUID 列表（支持 16/32/128 位 UUID） */
        services?: string[];
        /** 是否允许重复上报同一设备，默认 false */
        allowDuplicatesKey?: boolean;
        /** 上报设备的间隔（单位 ms），默认 0（立即上报） */
        interval?: number;
        /** 扫描模式（仅安卓支持），默认 medium */
        powerLevel?: BluetoothPowerLevel;
        /** 成功回调 */
        success?: () => void;
        /** 失败回调（返回错误码/错误信息） */
        fail?: (res: BluetoothErrorResult) => void;
        /** 完成回调（成功/失败都执行） */
        complete?: () => void;
    }

    /**
     * stopBluetoothDevicesDiscovery - 停止搜寻蓝牙外围设备
     * @platform 基础库 3.73.0+
     */
    interface StopBluetoothDevicesDiscoveryOptions {
        /** 成功回调 */
        success?: () => void;
        /** 失败回调（返回错误码/错误信息） */
        fail?: (res: BluetoothErrorResult) => void;
        /** 完成回调（成功/失败都执行） */
        complete?: () => void;
    }

    /**
     * getConnectedBluetoothDevices - 根据主服务 UUID 获取已连接的蓝牙设备
     * @platform 基础库 3.73.0+
     */
    interface GetConnectedBluetoothDevicesOptions {
        /** 蓝牙设备主服务的 UUID 列表（必填，支持 16/32/128 位 UUID） */
        services: string[];
        /** 成功回调（返回已连接设备列表） */
        success?: (res: { devices: BasicBluetoothDevice[] }) => void;
        /** 失败回调（返回错误码/错误信息） */
        fail?: (res: BluetoothErrorResult) => void;
        /** 完成回调（成功/失败都执行） */
        complete?: () => void;
    }

    /**
     * getBluetoothDevices - 获取所有搜索到的蓝牙设备
     * @platform 基础库 3.73.0+
     */
    interface GetBluetoothDevicesOptions {
        /** 成功回调（返回所有搜索到的设备列表） */
        success?: (res: { devices: CompleteBluetoothDevice[] }) => void;
        /** 失败回调（返回错误码/错误信息） */
        fail?: (res: BluetoothErrorResult) => void;
        /** 完成回调（成功/失败都执行） */
        complete?: () => void;
    }

    /**
     * getBluetoothAdapterState - 获取本机蓝牙适配器状态
     * @platform 基础库 3.73.0+
     */
    interface GetBluetoothAdapterStateOptions {
        /** 成功回调（返回适配器状态） */
        success?: (res: BluetoothAdapterState) => void;
        /** 失败回调（返回错误码/错误信息） */
        fail?: (res: BluetoothErrorResult) => void;
        /** 完成回调（成功/失败都执行） */
        complete?: () => void;
    }

    /**
     * isBluetoothDevicePaired - 查询蓝牙设备是否配对（仅 Android 支持）
     * @platform Android、基础库 3.73.0+
     */
    interface IsBluetoothDevicePairedOptions {
        /** 蓝牙设备 id（必填） */
        deviceId: string;
        /** 成功回调（返回配对状态） */
        success?: (res: { paired: boolean }) => void;
        /** 失败回调（返回错误码/错误信息） */
        fail?: (res: BluetoothErrorResult) => void;
        /** 完成回调（成功/失败都执行） */
        complete?: () => void;
    }

    // ------------------------------ 监听/取消监听回调类型 ------------------------------
    /**
     * onBluetoothDeviceFound - 监听搜索到新设备的事件回调
     * @platform 基础库 3.73.0+
     */
    type BluetoothDeviceFoundCallback = (res: {
        devices: CompleteBluetoothDevice[];
    }) => void;

    /**
     * onBluetoothAdapterStateChange - 监听蓝牙适配器状态变化的事件回调
     * @platform 基础库 3.73.0+
     */
    type BluetoothAdapterStateChangeCallback = (res: BluetoothAdapterState) => void;
}