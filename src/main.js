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
import {
    Button,
    Cell,
    CellGroup,
    CountDown,
    Field,
    Form,
    Icon,
    Overlay,
    Search, Swipe, SwipeItem,
    Tab,
    Tabbar,
    TabbarItem,
    Tabs,
    Uploader
} from 'vant';

Vue.use(VueAxios, axios)

Vue.use(Search).use(Form).use(Field).use(CountDown).use(Uploader);

Vue.use(Cell);
Vue.use(CellGroup);
import { RadioGroup, Radio } from 'vant';
import {
  Image as VanImage,
  List,
  PullRefresh,
 NavBar, Popup, ShareSheet
} from 'vant';
Vue.use(Button).use(Icon).use(Tabbar).use(TabbarItem).use(Overlay).use(Tab).use(Tabs).use(Search).use(VanImage)
    .use(List).use(PullRefresh).use(Cell).use(NavBar).use(Popup).use(ShareSheet).use(Swipe).use(SwipeItem);

/* 导入icon */
import './assets/font/iconfont'

Vue.use(Radio);
Vue.use(RadioGroup);
import { Toast } from 'vant';

Vue.use(NavBar);
Vue.use(Toast);
import { Dialog } from 'vant';


Vue.use(Dialog);
// import { Dialog } from 'vant';

// import { Overlay } from 'vant';

Vue.use(Overlay);
import { ActionSheet } from 'vant';

Vue.use(ActionSheet);
// import { Uploader } from 'vant';
//
// Vue.use(Uploader);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
