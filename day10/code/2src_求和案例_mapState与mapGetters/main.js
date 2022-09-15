import Vue from 'vue'
import App from './App.vue'
// 引入store
import store from './store'
// 引入vuex
Vue.config.productionTip = false



const app = new Vue({
  render: h => h(App),
  store
})

app.$mount('#app')
console.log(app);

