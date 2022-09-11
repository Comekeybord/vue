import { createApp } from 'vue'
// import App from './App.vue'
// import App from './components/1ref/App.vue'
// import App from './components/2$nextTick/App.vue'
// import App from './components/3dynamic/App.vue'
// import App from './components/4base-slot/App.vue'
// import App from './components/5named-slot/App.vue'
// import App from './components/6scoped-slot/App.vue'
import App from './components/7directive/App.vue'
import './assets/css/bootstrap.css'
import './index.css'

const app = createApp(App)
// 注册全局的自定义事件 v-focus
// app.directive('focus', {
//     // 当被绑定元素被渲染完后触发mounted函数
//     mounted(el) {
//         el.focus()
//     },
//     // 当被绑定元素重新渲染时触发updated函数
//     updated(el) {
//         el.focus()
//     }
// })

// 逻辑相同时可以简写
app.directive('focus', (el) => {
    // 在mounted 和 updated 两个阶段都会触发
    el.focus()
})

// 自定义颜色指令
app.directive('color', (el, binding) => {
    // binding.value就是传递过来的值
    el.style.color = binding.value;
})

app.mount('#app')

