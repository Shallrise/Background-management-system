import axios from 'axios'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
axios.defaults.baseURL='/api'

createApp(App).use(router).mount('#app')
