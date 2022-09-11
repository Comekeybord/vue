// 导入createRouter创建router方法
// 导入createWebHashHistory指定hash指定方法
import { createRouter, createWebHashHistory } from 'vue-router'

// 导入组件
import Home from './MyHome.vue'
import About from './MyAbout.vue'
import Movie from './MyMovie.vue'

// 创建实例
const router = createRouter({
    // 指定路由匹配方式
    history: createWebHashHistory(),
    // 指定被选定的router的类名 一般用来设置高亮  如果不设置，默认是router-link-active
    linkActiveClass: 'router-active',
    // 指定路由匹配规则 强制跳转
    routes: [
        // redirect重定向到/home
        { path: '/', redirect: '/home' },
        { path: '/home', component: Home },
        { path: '/about', component: About },
        { path: '/movie', component: Movie },
    ]
})

// 共享路由模块
export default router;