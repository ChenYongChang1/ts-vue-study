import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;
import 'ant-design-vue/dist/antd.css';

import { Input, Select, Button } from 'ant-design-vue';


Vue.use(Button);
Vue.use(Input);
Vue.use(Select);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
