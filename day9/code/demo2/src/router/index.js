import Vue from 'vue'
import vueRouter from 'vue-router'

// 把vueRouter注册为vue的插件
Vue.use(vueRouter)

// 导入组件
// 在vue-cli中@就代表src目录
import Home from '@/components/Home.vue'
import Movie from '@/components/Movie.vue'

// 设置路由规则
const router = new vueRouter({
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            component: Home
        },
        {
            path: '/movie',
            component: Movie
        }
    ]
})

// 共享
export default router