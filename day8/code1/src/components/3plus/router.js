// 导入createRouter创建router方法
// 导入createWebHashHistory指定hash指定方法
import { createRouter, createWebHashHistory } from 'vue-router'

// 导入组件
import Home from './MyHome.vue'
import About from './MyAbout.vue'
import Movie from './MyMovie.vue'

// 导入about的子路由模块
import Tab1 from './tabs/Tab1.vue'
import Tab2 from './tabs/Tab2.vue'

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
        {
            // 通过children指定子路由的匹配方式
            path: '/about',
            component: About,
            // 重定向到子路由tab1 一点进来就是tab1界面  
            redirect: '/about/tab1',
            children: [{
                path: 'tab1', component: Tab1
            }, {
                path: 'tab2', component: Tab2
            }
            ]
        },
        // 通过:id的方式动态路由匹配
        // props:true 开启动态传参
        // 路由的name一定不能重复
        { path: '/movie/:id', component: Movie, props: true, name: 'mov' },
    ]
})

// 声明全局导航守卫
// to表示目标路由对象
// from表示起始路由对象
router.beforeEach((to, from) => {
    // console.log(to);
    console.log(from);
    console.log('ok');
})

// 共享路由模块
export default router;