/**
 * 项目配置
 */

import type { ConfigProviderThemeVars } from 'vant'

/**
 * 主题变量，详情见 <https://vant-contrib.gitee.io/vant/#/zh-CN/config-provider#zhu-ti-bian-liang>
 */
export const themeVars: ConfigProviderThemeVars = {
  sidebarWidth: '100%',
  cellVerticalPadding: '14px',
}

/**
 * 在 dark 主题下的变量，优先级高于 themeVars
 */
export const themeVarsDark: ConfigProviderThemeVars = {
}

/**
 * 在 light 主题下的变量，优先级高于 themeVars
 */
export const themeVarsLight: ConfigProviderThemeVars = {
}
