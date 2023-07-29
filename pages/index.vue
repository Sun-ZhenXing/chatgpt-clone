<script setup lang="ts">
import { storeToRefs } from 'pinia'

const appStore = useAppStore()
const { currDialogId } = storeToRefs(appStore)

const isInitial = ref(false)
const isLoading = ref(false)
const isOutputing = ref(false)
const messages = ref<any[]>([])
const userInputText = ref('')
const { isMobileOrTablet } = useDevice()
const { t } = useI18n()
const contentElemRef = ref<HTMLElement | null>(null)

async function onRefresh() {
  isLoading.value = true
  const dialog_messages = await $fetch(`/api/dialogs/${currDialogId.value}/messages`).catch(
    () => {
      showToast({ type: 'fail', message: t('fetch_failed') })
    },
  )
  if (!dialog_messages)
    return
  messages.value = dialog_messages
  isLoading.value = false
  showToast({ type: 'success', message: t('flush_success'), duration: 500 })
}

async function sendMsg() {
  if (userInputText.value.trim() === '') {
    showNotify({ type: 'warning', message: t('please_input_something') })
    return
  }
  const resMessage = await $fetch(`/api/dialogs/${currDialogId.value}/add`, {
    method: 'POST',
    body: JSON.stringify({ question: userInputText.value }),
  }).catch(
    () => {
      showToast({ type: 'fail', message: t('fetch_failed') })
    },
  )
  if (!resMessage)
    return
  messages.value.push({
    id: resMessage.id,
    question: resMessage.question,
    answer: '',
  })
  const showMessageTypewriter = messages.value[messages.value.length - 1]
  isOutputing.value = true
  userInputText.value = ''
  let i = 0
  const timer = setInterval(() => {
    const appendString = resMessage.answer!.slice(i, i + 10)
    showMessageTypewriter.answer += appendString
    nextTick(() => {
      contentElemRef.value?.scrollTo({
        top: contentElemRef.value.scrollHeight + 200,
        behavior: 'smooth',
      })
    })
    i += 10
    if (!appendString) {
      clearInterval(timer)
      isOutputing.value = false
    }
  }, 100 + Math.random() * 200)
}

onMounted(async () => {
  showLoadingToast({
    message: t('loading'),
    forbidClick: true,
  })
  if (currDialogId.value !== 0) {
    const dialog_messages = await $fetch(`/api/dialogs/${currDialogId.value}/messages`).catch(
      () => {
        showToast({ type: 'fail', message: t('fetch_failed') })
      },
    )
    if (!dialog_messages)
      return
    messages.value = dialog_messages
    isInitial.value = true
  }
})
</script>

<template>
  <div class="relative box-border h-full p-2">
    <van-skeleton v-show="!isInitial" avatar :row="8" />
    <div
      v-show="isInitial" ref="contentElemRef"
      class="h-[calc(100vh-6rem-var(--van-nav-bar-height))] overflow-auto sm:h-[calc(100vh-6rem)]">
      <van-pull-refresh v-model="isLoading" class="min-h-full" :success-text="$t('flush_success')" @refresh="onRefresh">
        <div class="min-h-[calc(100vh-6rem-var(--van-nav-bar-height))] sm:min-h-[calc(100vh-6rem)]">
          <dialog-card left-content="Hi, I'm Smart Cat. You can ask anything about Chinese culture!" />
          <dialog-card v-for="msg in messages" :key="msg.id" :right-content="msg.question" :left-content="msg.answer" />
          <!-- safe area -->
          <div class="h-8"><br></div>
        </div>
      </van-pull-refresh>
    </div>

    <!-- input box at buttom -->
    <div class="absolute bottom-0 left-0 right-0 z-100 ml-auto mr-auto box-border h-20 w-full overflow-hidden pl-2 pr-2">
      <van-field
        v-model="userInputText" class="rounded-full pt-[2px] drop-shadow-xl" rows="1"
        :placeholder="$t('ask_question')" autocomplete="off" @keypress.enter="sendMsg" @click-right-icon="sendMsg">
        <template #right-icon>
          <Icon
            name="fluent:send-20-filled" size="24" class="rounded-full bg-sky-1/[0.5] p-2 text-sky-500"
            :class="isMobileOrTablet ? 'mobile-feedback' : 'desktop-feedback'" />
        </template>
      </van-field>
    </div>
  </div>
</template>
