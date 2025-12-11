declare namespace BilibilWebMinigame {
    /**
    * reportScene 接口成功回调参数类型
    */
    interface ReportSceneSuccessResult {
        /** 开发者上报的原始数据 */
        data: Record<string, any>;
    }

    /**
     * reportScene 接口失败回调参数类型
     */
    interface ReportSceneFailResult {
        /** 开发者上报的原始数据 */
        data: Record<string, any>;
        /** 错误信息（含参数类型/长度等错误描述） */
        errMsg: string;
    }

    /**
     * reportScene 接口调用参数类型
     * @platform 基础库 3.99.9+，低版本需做兼容处理
     * @description 用于游戏启动阶段的自定义场景上报；dimension/metric 仅支持 JSON.stringify 序列化且序列化后长度≤1024字符
     */
    interface ReportSceneOptions {
        /**
         * 场景ID（必填）
         * @description 预留值：7=游戏可玩（如进入游戏大厅）、10=游戏新手教程完成、1007=激励视频广告（用户点击看广告）
         */
        sceneId: number;
        /** 此场景的耗时（单位：ms），默认 0，值需≥0 */
        costTime?: number;
        /**
         * 自定义维度数据
         * @description value 仅支持非空字符串：布尔值请转为 '0'/'1'，数字请转为字符串
         */
        dimension?: Record<string, string>;
        /**
         * 自定义指标数据
         * @description value 仅支持纯数值组成的字符串（如 '546'）
         */
        metric?: Record<string, string>;
        /** 接口调用成功的回调函数 */
        success?: (res: ReportSceneSuccessResult) => void;
        /** 接口调用失败的回调函数（含错误码/错误信息） */
        fail?: (err: ReportSceneFailResult) => void;
        /** 接口调用结束的回调函数（成功/失败都会执行） */
        complete?: () => void;
    }
}