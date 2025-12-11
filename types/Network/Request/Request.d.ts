declare namespace BilibilWebMinigame {
    /**
   * request 接口的 HTTP 请求方法枚举
   */
    type RequestMethod = "OPTIONS" | "GET" | "HEAD" | "POST" | "PUT" | "DELETE" | "TRACE" | "CONNECT";

    /**
     * request 接口的返回数据格式枚举
     */
    type RequestDataType = "json" | string;

    /**
     * request 接口的响应数据类型枚举
     */
    type RequestResponseType = "text" | "arraybuffer";

    /**
     * request 接口成功回调参数类型
     */
    interface RequestSuccessResult {
        /** 开发者服务器返回的数据（类型由 responseType 决定） */
        data: string | Record<string, any> | ArrayBuffer;
        /** 开发者服务器返回的 HTTP 状态码 */
        statusCode: number;
        /** 开发者服务器返回的 HTTP Response Header */
        header: Record<string, string>;
    }

    /**
     * request 接口调用参数类型
     * @description 发起 HTTPS 网络请求；header 中不能设置 Referer，content-type 默认为 application/json
     */
    interface RequestOptions {
        /** 开发者服务器接口地址（必填） */
        url: string;
        /**
         * 请求参数
         * @description 最终会转为 String 类型：GET 转 query string、POST+application/json 转 JSON 序列化、POST+application/x-www-form-urlencoded 转 query string
         */
        data?: string | Record<string, any> | ArrayBuffer;
        /** 请求头配置（不能设置 Referer） */
        header?: Record<string, string>;
        /** HTTP 请求方法，默认 GET */
        method?: RequestMethod;
        /** 返回数据格式，默认 json（json 类型会自动 JSON.parse，其他类型不处理） */
        dataType?: RequestDataType;
        /** 响应数据类型，默认 text */
        responseType?: RequestResponseType;
        /** 接口调用成功的回调函数 */
        success?: (res: RequestSuccessResult) => void;
        /** 接口调用失败的回调函数 */
        fail?: (err?: any) => void;
        /** 接口调用结束的回调函数（成功/失败都会执行） */
        complete?: () => void;
    }

    /**
     * 请求任务对象（由 bl.request 返回）
     * @platform 基础库 1.4.0+，低版本需做兼容处理
     * @description 用于管理网络请求任务（文档未提及具体方法，预留接口）
     */
    interface RequestTask { }
}