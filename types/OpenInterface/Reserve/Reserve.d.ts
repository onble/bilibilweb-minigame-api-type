declare namespace BilibilWebMinigame {
    // ------------------------------ 预约状态枚举 ------------------------------
    /**
     * getReserveInfo 成功回调的预约状态枚举
     * @platform 基础库 2.9.0+
     */
    enum ReserveInfoState {
        /** 无可预约的手游 */
        NO_AVAILABLE_GAME = 1,
        /** 已预约 */
        RESERVED = 2,
        /** 未预约 */
        NOT_RESERVED = 3,
    }

    /**
     * reserve 成功回调的预约结果状态枚举
     * @platform 基础库 2.9.0+
     */
    enum ReserveResultState {
        /** 预约成功 */
        SUCCESS = 0,
        /** 已预约过 */
        ALREADY_RESERVED = 1,
    }

    /**
     * reserve 失败回调的错误码枚举
     * @platform 基础库 2.9.0+
     */
    enum ReserveFailErrCode {
        /** 用户取消预约 */
        USER_CANCEL = 1001,
        /** 无可预约游戏 */
        NO_AVAILABLE_GAME = 1002,
        /** 未执行预约信息查询 */
        NO_RESERVE_INFO_QUERIED = 1003,
        /** 其他错误（自定义兜底值） */
        OTHER_ERROR = 9999,
    }

    // ------------------------------ 预约管理器方法参数/回调类型 ------------------------------
    /**
     * getReserveInfo 成功回调结果
     * @platform 基础库 2.9.0+
     */
    interface GetReserveInfoSuccessResult {
        /** 预约状态（1=无可预约/2=已预约/3=未预约） */
        state: ReserveInfoState;
        /** 游戏名称 */
        gameName: string;
    }

    /**
     * getReserveInfo - 查询预约游戏信息接口参数
     * @platform 基础库 2.9.0+
     */
    interface GetReserveInfoOptions {
        /** 成功回调（返回预约状态+游戏名称） */
        success?: (res: GetReserveInfoSuccessResult) => void;
        /** 失败回调（返回错误码/错误信息） */
        fail?: () => void;
        /** 完成回调（成功/失败都执行） */
        complete?: () => void;
    }

    /**
     * reserve 成功回调结果
     * @platform 基础库 2.9.0+
     */
    interface ReserveSuccessResult {
        /** 预约结果状态（0=成功/1=已预约过） */
        state: ReserveResultState;
    }

    /**
     * reserve 失败回调结果
     * @platform 基础库 2.9.0+
     */
    interface ReserveFailResult {
        /** 错误码（1001=用户取消/1002=无可预约/1003=未查询信息/其他=其他错误） */
        errCode: ReserveFailErrCode | number;
        /** 错误信息 */
        errMsg: string;
    }

    /**
     * reserve - 预约游戏接口参数
     * @platform 基础库 2.9.0+
     * @description 需在 getReserveInfo 成功回调后执行
     */
    interface ReserveOptions {
        /** 成功回调（返回预约结果状态） */
        success?: (res: ReserveSuccessResult) => void;
        /** 失败回调（返回错误码/错误信息） */
        fail?: (res: ReserveFailResult) => void;
        /** 完成回调（成功/失败都执行） */
        complete?: () => void;
    }

    // ------------------------------ 游戏预约管理器类型 ------------------------------
    /**
     * 预约游戏管理器
     * @platform 基础库 2.9.0+
     */
    interface GameReserveManager {
        /**
         * 查询预约游戏信息
         * @param options 接口配置
         */
        getReserveInfo: (options?: GetReserveInfoOptions) => void;

        /**
         * 预约游戏
         * @description 需在 getReserveInfo 成功查询后执行
         * @param options 接口配置
         */
        reserve: (options?: ReserveOptions) => void;
    }
}