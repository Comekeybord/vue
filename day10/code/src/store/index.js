// 本文件用于创建vuex最核心的store


// 引入业务模块
import countOptions from './count'
import personOptions from './person'
// 引入vue
import Vue from 'vue'
// 引入vuex
import Vuex from 'vuex'
// 准备actions 用于响应组件中的动作

// 挂载vuex
// 把vue.use放到store中 因为引入的文件会先被执行
Vue.use(Vuex)//只有引用并且挂载了，才能访问到store
// 创建并暴露store
export default new Vuex.Store({
    modules: {
        countOptions,
        personOptions
    }
})