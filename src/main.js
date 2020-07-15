import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'



// 导入全局css样式
import "./style/base.css"


import {Button, Icon} from 'vant';


Vue.use(Button).use(Icon)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
