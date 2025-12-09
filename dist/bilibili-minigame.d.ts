declare namespace BilibilWebMinigame {
  // 这是激励视频广告相关类型
  interface RewardedVideoAd {
    load(): Promise<void>;
    show(): Promise<void>;
  }
  // 这是BL核心接口，只定义一两个方法用于测试
  interface BL {
    navigateToScene: (options: NavigateToSceneOptions) => void;
    request: (options: RequestOptions) => void;
  }
  // 这是导航相关类型
  interface NavigateToSceneOptions {
    scene?: "sidebar";
  }
  interface RequestOptions {
    url: string;
  }
}

declare const bl: BilibilWebMinigame.BL;
