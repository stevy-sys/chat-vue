// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import store from './store/store'
import router from './router'

const app = createApp(App)

app.use(router)
app.use(store)

const token = localStorage.getItem('token')
const user = localStorage.getItem('user')
if (token) {
    store.dispatch('saveToken',token)
    store.dispatch('saveUser',JSON.parse(user))
    store.dispatch('setConnected',true)
}

app.mount('#app')
