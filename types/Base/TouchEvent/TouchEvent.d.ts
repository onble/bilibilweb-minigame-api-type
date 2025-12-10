declare namespace BilibilWebMinigame {
    /**
     * 触控设备上的触摸点信息
     * @description 通常指手指/触控笔在触屏设备/触摸板上的操作点
     */
    interface Touch {
        /**
         * Touch 对象的唯一标识符（只读）
         * @description 一次触摸动作的整个过程中该标识符不变，可用于判断是否为同一次触摸
         */
        identifier: number;
        /** 触点相对于页面左边沿的 X 坐标 */
        pageX: number;
        /** 触点相对于页面上边沿的 Y 坐标 */
        pageY: number;
        /** 触点相对于可见视区左边沿的 X 坐标 */
        clientX: number;
        /** 触点相对于可见视区上边沿的 Y 坐标 */
        clientY: number;
    }

    /**
     * 触摸事件回调参数类型（适用于所有 touch 系列事件）
     */
    interface TouchEventCallbackResult {
        /** 当前所有触摸点的列表 */
        touches: Touch[];
        /** 触发此次事件的触摸点列表 */
        changedTouches: Touch[];
        /** 事件触发时的时间戳 */
        timeStamp: number;
    }
}