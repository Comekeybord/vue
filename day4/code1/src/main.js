//按需导入createApp函数
import { createApp } from 'vue';

//导入组件模板
// import App from './App.vue';
// import App from './components/03.style/App.vue';
// import App from './components/04.props/App.vue';
// import App from './components/05.class&style/App.vue';
import App from './components/App.vue';

//导入需要全局注册的组件
import Swiper from './components/01.globalReg/Swiper.vue';
import Test from './components/01.globalReg/Test.vue';

//创建app实例
const app = createApp(App);

//调用app.component创建全局组件
//可以直接用export default里的name作为名称
app.component(Swiper.name, Swiper);
app.component(Test.name, Test);

//通过 把模板渲染到指定的el区域
app.mount('#app');