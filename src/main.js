import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import Plugin from "./Plugin";

createApp(App).use(createPinia()).use(Plugin).mount('#app')
