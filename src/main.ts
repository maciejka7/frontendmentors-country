import { createApp } from 'vue'
import App from './App.vue'
import { setup } from './utils/themeSwitcher'
import { store } from './store'
import { router } from './routes'
setup()

const app = createApp(App);
app.use(store);
app.use(router)
app.mount('#app');