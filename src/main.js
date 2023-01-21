import { createApp, VueElement } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Axios from 'axios'

VueElement.prototype.$http = Axios;
const token = localStorage.getItem('token')
if (token){
    VueElement.prototype.$http.defaults.headers.common['Authorization'] = token
}
createApp(App).use(store).use(router).mount('#app')
