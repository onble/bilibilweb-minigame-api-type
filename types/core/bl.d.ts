declare namespace BilibilWebMinigame {
    // 这是BL核心接口，只定义一两个方法用于测试
    interface BL {
        navigateToScene: (options: NavigateToSceneOptions) => void;
        request: (options: RequestOptions) => void;
    }
}