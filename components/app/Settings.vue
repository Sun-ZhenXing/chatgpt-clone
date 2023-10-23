<script setup lang="ts">
import { Locale as vantLocale } from 'vant'
import { useI18n } from 'vue-i18n'

import zhCN from 'vant/es/locale/lang/zh-CN'
import enUS from 'vant/es/locale/lang/en-US'
import jaJP from 'vant/es/locale/lang/ja-JP'

const showSetting = useShowSetting()
const value = ref('')
const active = ref(0)
const { locale } = useI18n()

function changeLanguage() {
  showSetting.value = false
  setTimeout(() => {
    if (active.value === 1) {
      vantLocale.use('en-US', enUS)
      locale.value = 'en_US'
    }
    else if (active.value === 2) {
      vantLocale.use('ja-JP', jaJP)
      locale.value = 'ja_JP'
    }
    else {
      vantLocale.use('zh-CN', zhCN)
      locale.value = 'zh_CN'
    }
  }, 200)
}
</script>

<template>
  <VanDialog
    :show="showSetting" :title="$t('language')" show-cancel-button show-confirm-button
    @cancel="showSetting = false" @confirm="changeLanguage"
  >
    <VanSearch v-model="value" :placeholder="$t('language')" />
    <VanList>
      <VanCell class="cursor-pointer" :class="active === 0 ? 'text-active!' : ''" title="中文" @click="active = 0">
        zh-CN
      </VanCell>
      <VanCell class="cursor-pointer" :class="active === 1 ? 'text-active!' : ''" title="English" @click="active = 1">
        en-US
      </VanCell>
      <VanCell class="cursor-pointer" :class="active === 2 ? 'text-active!' : ''" title="日本語" @click="active = 2">
        ja-JP
      </VanCell>
    </VanList>
  </VanDialog>
</template>
