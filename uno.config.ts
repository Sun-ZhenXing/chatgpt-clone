import {
  defineConfig,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: {
    // 移动端 active 反馈，透明 60%
    'mobile-feedback': 'transition-opacity ease-in-out active:opacity-60',
    // 桌面端 hover 反馈，背景色 10%
    'desktop-feedback': 'transition-background-color ease-in-out hover:bg-sky-500/[.1]',
    // 激活主题色
    'text-active': 'text-sky-500',
  },
  presets: [
    presetUno(),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
