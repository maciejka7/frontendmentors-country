import { createApp } from 'vue'
import App from './App.vue'
import { setup } from './utils/themeSwitcher'
import { store } from './store'
setup()

const app = createApp(App);
app.use(store);
app.mount('#app');