import { createApp } from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import router from './router'
import store from './store'

createApp(App).use(store).use(VueAxios, axios).use(router).mount('#app')
