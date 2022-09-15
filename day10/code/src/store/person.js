// 用户相关配置
// 引入axios
import axios from 'axios'
import { nanoid } from 'nanoid';
export default {
    namespaced: true,
    actions: {
        personNameWang(content, value) {
            // 姓名为王的加入
            if (value.name.indexOf('王') === 0) {
                content.commit('ADD_PERSON', value)
            } else {
                alert('添加的人必须姓王');
            }
        },
        async addPersonServer(content) {
            // const { data: res } = await axios.get('https://v2.jinrishici.com/one.json');
            const { data: res } = await axios.get('http://127.0.0.1:8080/one.json');
            // console.log(res.data.content);
            let userName = res.data.content;
            content.commit('ADD_PERSON', {
                id: nanoid(),
                name: userName
            })
        }
    },
    mutations: {
        ADD_PERSON(state, personObj) {
            console.log('mutations中的ADD_PERSEN被调用了');
            state.personList.unshift(personObj)
        }
    },
    state: {
        personList: [
            {
                id: 1,
                name: 'zs'
            }
        ]
    },
    getters: {
        firstPersonName(state) {
            return state.personList[0].name;
        }
    }
}