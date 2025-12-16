declare namespace BilibilWebMinigame {
    // ------------------------------ 核心枚举类型 ------------------------------
    /**
     * getDownloadInfo 成功回调的下载状态枚举
     * @platform Android、基础库 3.14.0+、App 6.8.0+（iOS 暂不支持）
     */
    enum RelatedGameDownloadInfoState {
        /** 无可下载的手游 */
        NO_AVAILABLE_GAME = 1,
        /** 已下载 */
        DOWNLOADED = 2,
        /** 未下载 */
        NOT_DOWNLOADED = 3,
    }

    /**
     * showDownloadDetailPage 成功回调的下载状态枚举
     * @platform Android、基础库 3.14.0+、App 6.8.0+（iOS 暂不支持）
     */
    enum RelatedGameDetailPageState {
        /** 未下载过 */
        NOT_DOWNLOADED = 0,
        /** 已下载过 */
        DOWNLOADED = 1,
    }

    /**
     * showDownloadDetailPage 失败回调的错误码枚举
     * @platform Android、基础库 3.14.0+、App 6.8.0+（iOS 暂不支持）
     */
    enum RelatedGameDetailPageErrCode {
        /** 无可下载的手游 */
        NO_AVAILABLE_GAME = 1005,
        /** 未执行下载信息查询 */
        NO_DOWNLOAD_INFO_QUERIED = 1006,
    }

    // ------------------------------ 管理器方法参数/回调类型 ------------------------------
    /**
     * getDownloadInfo 成功回调结果
     * @platform Android、基础库 3.14.0+、App 6.8.0+
     */
    interface GetRelatedGameDownloadInfoSuccessResult {
        /** 下载状态（1=无可下载/2=已下载/3=未下载） */
        state: RelatedGameDownloadInfoState;
        /** 可下载手游的名称 */
        gameName: string;
    }

    /**
     * getDownloadInfo - 查询关联游戏下载信息接口参数
     * @platform Android、基础库 3.14.0+、App 6.8.0+
     */
    interface GetRelatedGameDownloadInfoOptions {
        /** 成功回调（返回下载状态+游戏名称） */
        success?: (res: GetRelatedGameDownloadInfoSuccessResult) => void;
        /** 失败回调（返回错误码/错误信息） */
        fail?: () => void;
        /** 完成回调（成功/失败都执行） */
        complete?: () => void;
    }

    /**
     * showDownloadDetailPage 成功回调结果
     * @platform Android、基础库 3.14.0+、App 6.8.0+
     */
    interface ShowRelatedGameDetailPageSuccessResult {
        /** 下载状态（0=未下载过/1=已下载过） */
        state: RelatedGameDetailPageState;
    }

    /**
     * showDownloadDetailPage 失败回调结果
     * @platform Android、基础库 3.14.0+、App 6.8.0+
     */
    interface ShowRelatedGameDetailPageFailResult {
        /** 错误码（1005=无可下载/1006=未查询信息/其他=其他错误） */
        errCode: RelatedGameDetailPageErrCode | number;
        /** 错误信息 */
        errMsg: string;
    }

    /**
     * showDownloadDetailPage - 打开关联手游详情页接口参数
     * @platform Android、基础库 3.14.0+、App 6.8.0+
     * @description 需在 getDownloadInfo 成功查询后执行
     */
    interface ShowRelatedGameDetailPageOptions {
        /** 成功回调（返回下载状态） */
        success?: (res: ShowRelatedGameDetailPageSuccessResult) => void;
        /** 失败回调（返回错误码/错误信息） */
        fail?: (res: ShowRelatedGameDetailPageFailResult) => void;
        /** 完成回调（成功/失败都执行） */
        complete?: () => void;
    }

    // ------------------------------ 关联游戏管理器类型 ------------------------------
    /**
     * 关联游戏管理器
     * @platform Android、基础库 3.14.0+、App 6.8.0+（iOS 暂不支持）
     */
    interface RelatedGameManager {
        /**
         * 查询关联游戏下载信息
         * @param options 接口配置
         */
        getDownloadInfo: (options?: GetRelatedGameDownloadInfoOptions) => void;

        /**
         * 打开关联手游详情页
         * @description 需在 getDownloadInfo 成功查询后执行
         * @param options 接口配置
         */
        showDownloadDetailPage: (options?: ShowRelatedGameDetailPageOptions) => void;
    }
}