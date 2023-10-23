import process from 'node:process'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },
  runtimeConfig: {
    APP_SECRET: process.env.APP_SECRET,
  },
  modules: [
    // ui & style
    '@vant/nuxt',
    '@unocss/nuxt',
    '@nuxtjs/color-mode',

    // router
    'nuxt-typed-router',

    // state store
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',

    // icons
    'nuxt-icon',

    // composables
    '@vueuse/nuxt',
    '@nuxtjs/device',

    // i18n
    '@nuxtjs/i18n',

    // auth
    // '@sidebase/nuxt-auth',

    // SEO
    '@nuxtseo/module',
  ],
  css: [
    '@unocss/reset/normalize.css',
    '~/assets/styles/main.scss',
  ],
  linkChecker: {
    enabled: false,
  },
})
