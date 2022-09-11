import { createApp } from 'vue'
// import App from './App.vue'
// import App from './components/easy-router/App.vue'
// import App from './components/start/App.vue'
// import App from './components/3plus/App.vue'
import App from './components/4next/App.vue'

// 导入路由模块
// import router from './components/start/router'
import router from './components/4next/router'
import './assets/css/bootstrap.css'
import './index.css'

const app = createApp(App)

// 挂载路由
app.use(router);

app.mount('#app')
