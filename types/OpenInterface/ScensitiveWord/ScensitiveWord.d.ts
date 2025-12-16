declare namespace BilibilWebMinigame {
    // ------------------------------ 核心类型 ------------------------------
    /**
     * 敏感词检测结果枚举（success.data.result）
     * @description 0=无敏感词，1=包含敏感词
     */
    enum SensitiveWordCheckResult {
        /** 不包含敏感词 */
        NO_SENSITIVE_WORD = 0,
        /** 包含敏感词 */
        HAS_SENSITIVE_WORD = 1,
    }

    // ------------------------------ 接口参数/回调类型 ------------------------------
    /**
     * sensitiveWordCheck 成功回调的 data 结构
     * @platform 基础库通用
     */
    interface SensitiveWordCheckSuccessData {
        /** 检测结果：0=无敏感词，1=包含敏感词 */
        result: SensitiveWordCheckResult;
        /** 处理后的文本（敏感词替换为*，无敏感词则返回原文） */
        content: string;
    }

    /**
     * sensitiveWordCheck 成功回调结果
     * @platform 基础库通用
     */
    interface SensitiveWordCheckSuccessResult {
        /** 成功消息：固定 "success" */
        message: "success";
        /** 检测结果数据 */
        data: SensitiveWordCheckSuccessData;
    }

    /**
     * sensitiveWordCheck 失败回调结果
     * @platform 基础库通用
     */
    interface SensitiveWordCheckFailResult {
        /** 失败提示信息 */
        message: string;
    }

    /**
     * sensitiveWordCheck - 敏感词查询接口参数
     * @platform 基础库通用
     */
    interface SensitiveWordCheckOptions {
        /** 待校验的内容（必填） */
        content: string;
        /** 接口调用成功的回调函数（可选） */
        success?: (res: SensitiveWordCheckSuccessResult) => void;
        /** 接口调用失败的回调函数（可选） */
        fail?: (res: SensitiveWordCheckFailResult) => void;
        /** 接口调用结束的回调函数（可选） */
        complete?: () => void;
    }
}