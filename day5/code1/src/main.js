//导入创建实例的方法
import { createApp } from 'vue';

//导入App组件
// import App from './components/1Count/App.vue';
// import App from './components/2Computed/App.vue';
// import App from './components/3customEvent/App.vue';
import App from './components/4v-model/App.vue';

//创建实例
const app = createApp(App);

//渲染app
app.mount('#app');