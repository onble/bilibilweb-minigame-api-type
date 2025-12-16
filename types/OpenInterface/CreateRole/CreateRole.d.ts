declare namespace BilibilWebMinigame {
    // ------------------------------ 核心枚举/类型 ------------------------------
    /**
     * createRole 失败回调错误码枚举
     * @platform 基础库通用
     */
    enum CreateRoleErrCode {
        /** 网络错误 */
        NETWORK_ERROR = -1,
        /** 重复创建角色 */
        DUPLICATE_CREATE = 83000005,
    }

    /**
     * 错误码与提示消息映射表（文档明确）
     */
    type CreateRoleErrMsgMap = {
        [key in CreateRoleErrCode]: string;
    };

    // ------------------------------ 接口参数/回调类型 ------------------------------
    /**
     * createRole 成功回调结果
     * @platform 基础库通用
     */
    interface CreateRoleSuccessResult {
        /** 成功消息：固定 "success" */
        message: "success";
        /** 成功数据：固定 true */
        data: true;
    }

    /**
     * createRole 失败回调结果
     * @platform 基础库通用
     */
    interface CreateRoleFailResult {
        /** 错误码（对应 CreateRoleErrCode） */
        code: string | number; // 文档标注为 string，兼容数字类型
        /** 错误信息（对应 code 映射的 message） */
        message: string;
    }

    /**
     * createRole - 角色创建上报接口参数
     * @platform 基础库通用
     * @description 用户创建角色后上报，记录角色信息（服务器+角色ID需唯一）
     */
    interface CreateRoleOptions {
        /** 服务器id信息（必填） */
        serverId: string;
        /** 服务器名称信息（必填） */
        serverName: string;
        /** 角色id信息（必填） */
        roleId: string;
        /** 其他备注数据（可选） */
        ext?: string;
        /** 接口调用成功的回调函数（可选） */
        success?: (res: CreateRoleSuccessResult) => void;
        /** 接口调用失败的回调函数（可选） */
        fail?: (res: CreateRoleFailResult) => void;
        /** 接口调用结束的回调函数（可选） */
        complete?: () => void;
    }
}