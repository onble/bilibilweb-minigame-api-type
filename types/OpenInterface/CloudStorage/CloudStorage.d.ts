declare namespace BilibilWebMinigame {
    // ------------------------------ 核心数据结构 ------------------------------
    /**
     * 托管的 KV 数据（B站扩展了 order 字段用于排序）
     * @description 1. key长度≤128字节；2. key+value长度≤1024字节；3. order越大排名越靠前
     */
    interface KVData {
        /** 数据的 key（长度≤128字节） */
        key: string;
        /** 数据的 value（key+value长度≤1024字节） */
        value: string;
        /** 用于全服排序的值（order越大排名越靠前） */
        order: number;
    }

    /**
     * 单个用户的游戏数据（用于 getAllCloudStorage 返回结果）
     * @platform 开放数据域
     */
    interface SingleUserGameDataList {
        /** 用户的头像 url */
        avatarUrl: string;
        /** 用户的昵称 */
        nickname: string;
        /** 用户的 openid */
        openid: string;
        /** 托管 KV 数据的 key */
        key: string;
        /** 托管 KV 数据的 value */
        value: string;
        /** 托管 KV 数据的 order（排序用） */
        order: number;
        /** 用户与排行榜用户的关注关系：0=未关注，2=关注，6=双向关注 */
        attribute: 0 | 2 | 6;
        /** 用户的认证信息 */
        official: {
            /** 是否黄V认证：1=是，0=否 */
            role: 0 | 1;
            [key: string]: any;
        };
    }

    /**
     * 按 key 维度的排行榜数据（getAllCloudStorage 返回）
     * @platform 开放数据域
     */
    interface KeyGameDataList {
        /** 数据的 key */
        key: string;
        /** 以 key 降序排序的用户列表（按 order 倒序） */
        singleUserGameDataList: SingleUserGameDataList[];
    }

    /**
     * 关注用户的托管数据（getFollowingCloudStorage 返回）
     * @platform 开放数据域
     */
    interface UserGameData {
        /** 用户的头像 url */
        avatarUrl: string;
        /** 用户的昵称 */
        nickname: string;
        /** 用户的 openid */
        openid: string;
        /** 用户的托管 KV 数据列表 */
        KVDataList: KVData[];
    }

    // ------------------------------ 开放数据域类型 ------------------------------
    /**
     * 开放数据域实例
     * @platform 基础库通用
     */
    interface OpenDataContext {
        /**
         * 向开放数据域发送消息
         * @param message 消息内容（仅支持原始类型：number/string/boolean/null/undefined）
         */
        postMessage: (message: { [key: string]: PrimitiveValue | { [key: string]: PrimitiveValue } }) => void;
    }

    /**
     * 原始值类型（开放数据域消息仅支持此类值）
     */
    type PrimitiveValue = number | string | boolean | null | undefined;

    // ------------------------------ 云存储接口参数/回调类型 ------------------------------
    /**
     * getUserCloudStorage - 获取当前用户托管数据接口参数
     * @platform 开放数据域、基础库通用
     * @description 1. 仅开放数据域可用；2. 调用前需已调用 bl.login；3. 每个用户最多128个KV对
     */
    interface GetUserCloudStorageOptions {
        /** 要获取的 key 列表（必填） */
        keyList: string[];
        /** 成功回调（返回用户KV数据列表） */
        success?: (res: { KVDataList: KVData[] }) => void;
        /** 失败回调（返回错误码/错误信息） */
        fail?: () => void;
        /** 完成回调（成功/失败都执行） */
        complete?: () => void;
    }

    /**
     * removeUserCloudStorage - 删除用户托管数据接口参数
     * @platform 基础库通用
     * @description 调用前需已调用 bl.login
     */
    interface RemoveUserCloudStorageOptions {
        /** 要删除的 key 列表（必填） */
        keyList: string[];
        /** 成功回调 */
        success?: () => void;
        /** 失败回调（返回错误码/错误信息） */
        fail?: () => void;
        /** 完成回调（成功/失败都执行） */
        complete?: () => void;
    }

    /**
     * setUserCloudStorage - 写入用户托管数据接口参数
     * @platform 基础库通用
     * @description 1. 调用前需已调用 bl.login；2. 支持批量写入；3. 需包含 order 字段
     */
    interface SetUserCloudStorageOptions {
        /** 要修改的 KV 数据列表（必填，需包含 order 字段） */
        KVDataList: KVData[];
        /** 成功回调 */
        success?: () => void;
        /** 失败回调（返回错误码/错误信息） */
        fail?: () => void;
        /** 完成回调（成功/失败都执行） */
        complete?: () => void;
    }

    /**
     * getFollowingCloudStorage - 拉取关注用户托管数据接口参数
     * @platform 开放数据域、基础库通用
     * @description 1. 仅开放数据域可用；2. 调用前需已调用 bl.login
     */
    interface GetFollowingCloudStorageOptions {
        /** 要拉取的 key 列表（必填） */
        keyList: string[];
        /** 成功回调（返回关注用户数据） */
        success?: (res: { data: UserGameData[] }) => void;
        /** 失败回调（返回错误码/错误信息） */
        fail?: () => void;
        /** 完成回调（成功/失败都执行） */
        complete?: () => void;
    }

    /**
     * getAllCloudStorage - 获取所有成员游戏数据接口参数
     * @platform 开放数据域、基础库通用
     * @description 1. 仅开放数据域可用；2. 调用前需已调用 bl.login；3. 按 order 倒序取前100名
     */
    interface GetAllCloudStorageOptions {
        /** 要拉取的 key 列表（必填） */
        keyList: string[];
        /** 成功回调（返回排行榜数据） */
        success?: (res: { data: KeyGameDataList[] }) => void;
        /** 失败回调（返回错误码/错误信息） */
        fail?: () => void;
        /** 完成回调（成功/失败都执行） */
        complete?: () => void;
    }

    /**
     * followCloudUpper - 关注排行榜用户接口参数
     * @platform 开放数据域、基础库 2.5.0+（低版本需兼容）
     * @description 1. 仅开放数据域可用；2. 需在 getAllCloudStorage 成功后调用
     */
    interface FollowCloudUpperOptions {
        /** 要关注的用户数据块（来自 singleUserGameDataList，必填） */
        data: SingleUserGameDataList;
        /** 成功回调 */
        success?: (res: Record<string, any>) => void;
        /** 失败回调（返回错误码/错误信息） */
        fail?: () => void;
        /** 完成回调（成功/失败都执行） */
        complete?: () => void;
    }
}