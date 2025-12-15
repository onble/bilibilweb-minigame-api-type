declare namespace BilibilWebMinigame {
    // ------------------------------ 权限 Scope 枚举 ------------------------------
    /**
     * 授权权限 Scope 枚举（基础常用 scope，可根据业务扩展）
     */
    type AuthScope =
        | "scope.userInfo" // 用户信息
        | "scope.userLocation" // 地理位置
        | "scope.address" // 通讯地址
        | "scope.writePhotosAlbum" // 保存到相册
        | "scope.camera" // 是否授权摄像头

    // ------------------------------ 接口参数类型 ------------------------------
    /**
     * authorize - 提前发起用户授权请求接口参数
     * @platform 基础库通用
     * @description 1. 已授权则无弹窗直接成功；未授权则弹窗询问；2. 仅发起授权请求，不实际调用对应接口
     */
    interface AuthorizeOptions {
        /** 需要获取的权限 scope（必填，详见 scope 列表） */
        scope: AuthScope;
        /** 成功回调（用户同意授权/已提前授权） */
        success?: () => void;
        /** 失败回调（用户拒绝授权/授权失败） */
        fail?: () => void;
        /** 完成回调（成功/失败都执行） */
        complete?: () => void;
    }
}