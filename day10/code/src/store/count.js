// 求和相关配置
export default {
    // 配置了namespaced之后才能在map中访问
    namespaced: true,
    actions: {
        // 业务逻辑都写在actions中
        // 定义动作函数
        // 第二个参数是传过来的值
        // 第一个参数是上下文对象 包含可能要用到的方法 如commit等
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
    },
    mutations: {
        // 第一个参数是state对象 第二个参数是传过来的参数
        ADD(state, value) {
            console.log('mutations中的add被调用了');
            state.sum += value;
        },
        DECREMENT(state, value) {
            console.log('mutations中的DECREMENT被调用了');
            state.sum -= value;
        },
    },
    state: {
        sum: 0, //总和
        school: '尚硅谷',
        object: '前端',
    },
    getters: {
        // 用法类似于计算属性
        bigSum(state) {
            return state.sum * 10
        }
    }
}