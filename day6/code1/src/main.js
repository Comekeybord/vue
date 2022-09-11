import { createApp } from 'vue'
// import App from './App.vue'
// import App from './components/2LifeCycle/App.vue';
// import App from './components/3father-son/Father.vue';
// import App from './components/4brother/App.vue'
// import App from './components/5provide&inject/App.vue'
import App from './components/6network/App.vue'
import './assets/css/bootstrap.css'
import './index.css'

const app = createApp(App)

//导入axios
import axios from 'axios'

//创建axios实例对象 设置公用url
axios.defaults.baseURL = 'https://www.escook.cn'
//挂载到全局
app.config.globalProperties.$http = axios

app.mount('#app')
