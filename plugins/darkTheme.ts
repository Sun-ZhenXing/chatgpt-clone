/**
 * 主题颜色模式
 */
import type { ConfigProviderTheme } from 'vant'
import { storeToRefs } from 'pinia'

export default defineNuxtPlugin((_) => {
  // 响应式获取系统偏好
  const colorMode = useColorMode()

  // 响应式获取用户偏好设置
  const appStore = useAppStore()
  const { isDarkTheme, isUsingSystemDarkMode } = storeToRefs(appStore)

  return {
    provide: {
      /**
       * computed: 当前的颜色模式
       */
      darkTheme: computed<ConfigProviderTheme>(() => {
        if (isUsingSystemDarkMode.value) {
          // 如果用户设置了跟随系统，则返回系统偏好
          // 如果没有在预设中，则默认为浅色
          if (['dark', 'light'].includes(colorMode.value))
            return colorMode.value as ConfigProviderTheme
          else
            return 'light'
        }
        else {
          // 否则返回用户设置的偏好
          return isDarkTheme.value ? 'dark' : 'light'
        }
      }),
      /**
       * 切换颜色模式：浅色、深色、跟随系统
       */
      toggleColorMode() {
        if (isUsingSystemDarkMode.value) {
          isDarkTheme.value = false
          isUsingSystemDarkMode.value = false
        } else {
          if (isDarkTheme.value) {
            isDarkTheme.value = false
            isUsingSystemDarkMode.value = true
          } else {
            isDarkTheme.value = true
          }
        }
      },
      /**
       * computed: 当前的颜色模式图标
       */
      darkThemeIconName: computed(() => {
        if (isUsingSystemDarkMode.value)
          return 'ic:baseline-brightness-medium'
        else
          return isDarkTheme.value ? 'ic:baseline-dark-mode' : 'ic:baseline-light-mode'
      }),
    },
  }
})
