import { defineStore } from 'pinia'

export const useAppStore = defineStore({
  id: 'app',
  state: () => {
    return {
      isDarkTheme: false,
      isUsingSystemDarkMode: true,

      // 当前对话 ID
      currDialogId: 1,
    }
  },
  actions: {
  },
  persist: {
    storage: persistedState.localStorage,
  },
})
