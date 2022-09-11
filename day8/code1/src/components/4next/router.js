import { createRouter, createWebHashHistory } from 'vue-router'

// 导入组件模块
import MyHome from './Home.vue'
import MyMain from './Main.vue'
import MyLogin from './Login.vue'

const router = createRouter({
    history: createWebHashHistory(),
    linkActiveClass: 'router-active',
    routes: [
        {
            path: '/home',
            component: MyHome
        },
        {
            path: '/main',
            component: MyMain
        },
        {
            path: '/login',
            component: MyLogin
        }
    ]
})

// 创建全局导航守卫
router.beforeEach((to, from, next) => {
    // 判断token是否存在 
    const tokenStr = localStorage.getItem('token');
    // 如果访问的是/main 并且 token不存在 那么就跳转到/login
    if (to.path === '/main' && !tokenStr) {
        // 表示访问main后天主页
        // next(false)表示强制用户停留在当前页面
        // next(false)

        // next('/login')强制用户跳转到指定页面
        next('/login')
    } else {
        // 表示访问其他页面
        next()
    }
    // 不调用next则不可以访问任何路由
    // 调用next则允许访问任何路由
})


export default router