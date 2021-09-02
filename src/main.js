/*
 * @Description: 
 * @Autor: Huang Yingming
 * @LastEditors: Huang Yingming
 * @LastEditTime: 2021-09-02 19:27:20
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueSocketIO from 'vue-socket.io';
import SocketIO from 'socket.io-client'
import VueVideoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(VueVideoPlayer)
Vue.use(VueAxios, axios);
Vue.use(ElementUI);

Vue.use(new VueSocketIO({
  debug: true,
  connection: SocketIO('ws://121.36.10.13:40001')
}))

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')