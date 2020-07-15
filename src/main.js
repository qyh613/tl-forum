import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


/* 导入 axios */
import axios from './utils/http'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

/* 导入全局css样式 */
import "./style/base.css"


/* vant 样式导入 */
import {Button, Icon, Overlay, Tab, Tabbar, TabbarItem, Tabs} from 'vant';
Vue.use(Button).use(Icon).use(Tabbar).use(TabbarItem).use(Overlay).use(Tab).use(Tabs);



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
