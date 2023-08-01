<script setup lang="ts">
import type { NuxtError } from 'nuxt/app'

const props = defineProps<{
  error: object
}>()

const isDev = import.meta.env.DEV

// 刷新页面
const refreshPage = () => window.location.reload()
// 返回首页
const handleError = () => clearError({ redirect: '/' })
// 当前错误
const processingError = useError() as Ref<NuxtError>

onMounted(() => {
  if (!import.meta.env.SSR && isDev)
    console.error(props.error)
})
</script>

<template>
  <div class="m-[0_auto] h-screen max-w-[620px] w-full flex flex-col items-center justify-center">
    <van-empty image="error" :description="$t('content_has_gone')" />
    <div v-if="isDev" class="break-words">
      <van-icon name="fail" color="red" size="32" />
      <span>{{ processingError.message }}</span>
      <!-- eslint-disable-next-line vue/html-self-closing -->
      <div class="box-border overflow-auto p-4" v-html="processingError.stack"></div>
    </div>
    <van-space>
      <van-button class="m-2" type="success" @click="refreshPage">{{ $t('try_refresh') }}</van-button>
      <van-button class="m-2" type="primary" @click="handleError">{{ $t('go_home') }}</van-button>
    </van-space>
  </div>
</template>
