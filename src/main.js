import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue/es';
import 'ant-design-vue/dist/antd.css';
import '@/assets/iconfont/iconfont.css';
import '@/assets/iconfont/iconfont';

createApp(App).use(store).use(router).use(Antd).mount('#app')
