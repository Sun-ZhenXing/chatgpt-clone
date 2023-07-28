/**
 * 是否打开应用设置页面
 */
export const useShowSetting = () => useState<boolean>('openSetting', () => false)

/**
 * 是否打开历史页面
 */
export const useShowHistory = () => useState<boolean>('showHistory', () => false)

/**
* 应用的一级路由导航
*/
export const useTopLevelTabbar = () => useState<0 | 1 | 2 | 3>('topLevelTabbar', () => 0)

/**
 * 上一次路由跳转的时间
 */
export const useLastRouteTime = () => useState<number>('lastRouteTime', () => 0)

/**
 * 当前系统的语言
 */
export { useCurrentLang } from 'vant'
