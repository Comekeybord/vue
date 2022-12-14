import { createApp } from 'vue'
import App from './App.vue'
// 导入router路由
import router from './router'
// 导入 bootstrap 样式表
import './assets/css/bootstrap.css'
// 导入全局自定义样式表
import './index.css'

// 创建 app 实例
const app = createApp(App)

// 挂载路由
app.use(router)

// 挂载 app 实例
app.mount('#app')
