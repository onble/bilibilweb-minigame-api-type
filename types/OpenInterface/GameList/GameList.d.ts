declare namespace BilibilWebMinigame {
    /**
     * showGameListButton - 展示小游戏互跳按钮接口参数
     * @platform 基础库 2.2.0+（低版本需兼容）
     * @description 同步方法，需先在后台配置互跳小游戏名单；参数为按钮位置偏移（可选）
     */
    interface ShowGameListButtonOptions {
        /** 互跳按钮距离顶部距离（可选） */
        top?: number;
        /** 互跳按钮距离左边距离（可选） */
        left?: number;
    }
}