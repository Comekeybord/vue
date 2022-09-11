// 导入router模块方法
import { createRouter, createWebHashHistory } from 'vue-router'

import Login from './components/MyLogin.vue'
import Home from './components/MyHome.vue'
import Users from './components/menus/MyUsers.vue'
import Rights from './components/menus/MyRights.vue'
import Goods from './components/menus/MyGoods.vue'
import Orders from './components/menus/MyOrders.vue'
import Settings from './components/menus/MySettings.vue'

// 创建实例对象
const router = createRouter({
    history: createWebHashHistory(),
    linkActiveClass: 'router-active',
    routes: [
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/login',
            component: Login,
            name: 'login'
        },
        {
            path: '/home',
            component: Home,
            // 把/home 重定向到/home/users 一进来就是users页面
            redirect: '/home/users',
            name: 'home',
            // 配置子路由 不要加/
            children: [
                {
                    path: 'users',
                    component: Users
                },
                {
                    path: 'rights',
                    component: Rights
                },
                {
                    path: 'goods',
                    component: Goods
                },
                {
                    path: 'orders',
                    component: Orders
                },
                {
                    path: 'settings',
                    component: Settings
                },
            ]
        }
    ]
})

// 配置全局路由导航守卫
router.beforeEach((to, from, next) => {
    // 如果是login就放行 白名单
    if (to.path === '/login') return next()
    // 有token也放行
    const tokenStr = localStorage.getItem('token');

    // token不存在 跳转到login页面
    if (!tokenStr) {
        alert('没有权限,请先登录')
        return next('/login')
    }
    // token 存在 放行
    next()
})

// 导出router
export default router