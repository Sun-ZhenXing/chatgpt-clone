<script setup lang="ts">
import type { NuxtError } from 'nuxt/app'

const props = defineProps<{
  error: object
}>()

const isDev = import.meta.env.DEV

// refresh page
const refreshPage = () => window.location.reload()
// back to home
const handleError = () => clearError({ redirect: '/' })
// current error
const processingError = useError() as Ref<NuxtError>

onMounted(() => {
  if (!import.meta.env.SSR && isDev)
    console.error(props.error)
})
</script>

<template>
  <div class="m-[0_auto] h-screen max-w-[620px] w-full flex flex-col items-center justify-center">
    <VanEmpty image="error" :description="$t('content_has_gone')" />
    <div v-if="isDev" class="break-words">
      <VanIcon name="fail" color="red" size="32" />
      <span>{{ processingError.message }}</span>
      <!-- eslint-disable-next-line vue/html-self-closing -->
      <div class="box-border overflow-auto p-4" v-html="processingError.stack"></div>
    </div>
    <VanSpace>
      <VanButton class="m-2" type="success" @click="refreshPage">
        {{ $t('try_refresh') }}
      </VanButton>
      <VanButton class="m-2" type="primary" @click="handleError">
        {{ $t('go_home') }}
      </VanButton>
    </VanSpace>
  </div>
</template>
