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
  <div class="h-screen w-full w-full flex flex-col items-center justify-center">
    <van-empty image="error" description="内容走丢了，呜呜呜~" />
    <div v-if="isDev" class="w-full break-words">
      <van-icon name="fail" color="red" size="64" />
      <span>{{ processingError.message }}</span>
      <!-- eslint-disable-next-line vue/html-self-closing -->
      <div class="box-border w-full overflow-auto p-4" v-html="processingError.stack"></div>
    </div>
    <div class="m2">
      <van-button style="margin: .5rem;" type="success" @click="refreshPage">刷新试试</van-button>
      <van-button style="margin: .5rem;" type="primary" @click="handleError">回到主页</van-button>
    </div>
  </div>
</template>
