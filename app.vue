<script setup lang="ts">
import '@vant/touch-emulator'

const showLeftSide = ref(false)
const showHistory = useShowHistory()
const { $darkTheme, $darkThemeIconName } = useNuxtApp()
const themeVars = useThemeVars()
</script>

<template>
  <VanConfigProvider :theme-vars="themeVars" :theme="$darkTheme">
    <NuxtLayout>
      <VanNavBar :title="$t('app_name')" class="sm:hidden">
        <template #left>
          <div class="w-8 flex items-center" @click="showLeftSide = !showLeftSide">
            <Icon name="ic:baseline-notes" size="18" />
          </div>
        </template>
        <template #right>
          <div class="w-8 flex items-center" @click="$toggleColorMode">
            <ClientOnly>
              <Icon :name="$darkThemeIconName" size="18" />
            </ClientOnly>
          </div>
        </template>
      </VanNavBar>
      <!-- left popup -->
      <VanPopup v-model:show="showLeftSide" closeable position="left" class="block h-screen w-1/2 sm:w-1/4">
        <AppSidebar />
      </VanPopup>

      <div
        class="grid grid-cols-[200px,1fr,2rem] grid-cols-4 m-[0_auto] box-border h-[calc(100%-var(--van-nav-bar-height))] h-[calc(100vh-var(--van-nav-bar-height))] max-w-[1120px] gap-2 overflow-auto md:grid-cols-12 sm:grid-cols-8 sm:h-screen"
      >
        <div class="col-span-2 hidden sm:block">
          <AppSidebar />
        </div>
        <div class="col-span-6">
          <NuxtPage />
        </div>
        <div class="col-span-4 hidden bg-sky-500/[0.05] p-2 md:block">
          <AppHistory />
        </div>
      </div>
    </NuxtLayout>

    <!-- app setting -->
    <AppSettings />
    <!-- history -->
    <VanDialog v-model:show="showHistory" :title="$t('history_record')" show-cancel-button>
      <VanEmpty :description="$t('no_history_record')" />
    </VanDialog>
  </VanConfigProvider>
</template>
