// 本文件用于创建vuex最核心的store

// 引入vue
import Vue from 'vue'
// 引入vuex
import Vuex from 'vuex'
// 准备actions 用于响应组件中的动作
const actions = {
    // 业务逻辑都写在actions中
    // 定义动作函数
    // 第二个参数是传过来的值
    // 第一个参数是上下文对象 包含可能要用到的方法 如commit等
    // add(content, value) {
    //     console.log('actions中的add被调用了');
    //     // 用commit提交到mutations节点
    //     content.commit('ADD', value)//用大写ADD是用来区分mutations还是actions中的函数
    // },
    // decrement(content, value) {
    //     console.log('actions中的decrement被调用了');
    //     // 用commit提交到mutations节点
    //     content.commit('DECREMENT', value)//用大写ADD是用来区分mutations还是actions中的函数
    // },
    addOdd(content, value) {
        console.log('actions中的addOdd被调用了');
        console.log('actions中的addOdd处理了一些事情');
        // 传给下一个方法处理
        content.dispatch('demo1', value)

        // 用commit提交到mutations节点
        // if (content.state.sum % 2) {
        //     content.commit('ADD', value)
        // }
    },
    demo1(content, value) {
        console.log('actions中的demo1处理了一些事情');
        // 交给demo2处理
        content.dispatch('demo2', value)
    },
    demo2(content, value) {
        console.log('actions中的demo2处理了一些事情');
        // 提交给mutations
        if (content.state.sum % 2) {
            content.commit('ADD', value)
        }
    },
    addWait(content, value) {
        console.log('actions中的addWait被调用了');
        // 用commit提交到mutations节点
        setTimeout(() => {
            content.commit('ADD', value)
        }, 500);
    },
}
// 准备mutations 用于操作数据
const mutations = {
    // 第一个参数是state对象 第二个参数是传过来的参数
    ADD(state, value) {
        console.log('mutations中的add被调用了');
        state.sum += value;
    },
    DECREMENT(state, value) {
        console.log('mutations中的DECREMENT被调用了');
        state.sum -= value;
    }
}
// 准备store 用于存储数据
const state = {
    sum: 0, //总和
    school: '尚硅谷',
    object: '前端'
}
// 准备getters 用于将state中的数据进行加工
const getters = {
    // 用法类似于计算属性
    bigSum(state) {
        return state.sum * 10
    }
}

// 挂载vuex
// 把vue.use放到store中 因为引入的文件会先被执行
Vue.use(Vuex)//只有引用并且挂载了，才能访问到store
// 创建并暴露store
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})