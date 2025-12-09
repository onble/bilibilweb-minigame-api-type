declare namespace BilibilWebMinigame {
    // 这是激励视频广告相关类型
    interface RewardedVideoAd {
        load(): Promise<void>;
        show(): Promise<void>;
    }
}