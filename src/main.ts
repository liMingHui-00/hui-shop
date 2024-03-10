import { createApp } from 'vue'
import { createPinia } from 'pinia'
import  '@/assets/styles/index.scss';
import App from './App.vue'
import router from './router'
import SvgIcon from '~virtual/svg-component'
const pinia = createPinia()
const app = createApp(App)
app.component(SvgIcon.name, SvgIcon)
app.use(createPinia())
app.use(router)
app.use(pinia)
app.mount('#app')
