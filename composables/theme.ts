import type { ConfigProviderThemeVars } from 'vant'
import { themeVars, themeVarsDark, themeVarsLight } from '../utils/settings'

/**
 * Vant 默认主题变量
 */
export const useThemeVars = () => useState<ConfigProviderThemeVars>('themeVars', () => themeVars)

/**
 * dark 模式主题变量，优先级高于 themeVars
 */
export const useThemeVarsDark = () => useState<ConfigProviderThemeVars>('themeVarsDark', () => themeVarsDark)

/**
 * light 模式主题变量，优先级高于 themeVars
 */
export const useThemeVarsLight = () => useState<ConfigProviderThemeVars>('themeVarsLight', () => themeVarsLight)
