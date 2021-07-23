/*
 * @Description:
 * @Date: 2021-06-19 22:58:55
 * @LastEditors: qingmou
 * @LastEditTime: 2021-06-19 23:17:06
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'lib-flexible'
import '@/styles/normalize.css'
import Vant from 'vant'
import 'vant/lib/index.css'
// import 'vant/lib/index.less'
import './assets/iconfont/iconfont.css'
import axios from 'axios'
Vue.prototype.$axios = axios

Vue.use(Vant)

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
