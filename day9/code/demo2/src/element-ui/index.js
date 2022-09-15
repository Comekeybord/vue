// elementui 独立模块


import Vue from 'vue'
// 完整引入elementui 和elementui样式
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)



// 按需引入elementui 的 button喝select组件
// import { Button, Input } from 'element-ui';
// 挂载button和select组件
// Vue.component(Button.name, Button);
// Vue.component(Select.name, Select);
// 或写为
// Vue.use(Button)
// Vue.use(Input)



