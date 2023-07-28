import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { useAppStore } from './app'

const store = createPinia()
store.use(piniaPluginPersistedstate)

export {
  useAppStore,
}
