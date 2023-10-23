import { defineStore } from 'pinia'

export const useAppStore = defineStore({
  id: 'app',
  state: () => {
    return {
      isDarkTheme: false,
      isUsingSystemDarkMode: true,

      // current dialog id
      currDialogId: 1,
    }
  },
  actions: {
  },
  persist: true,
})
