/*
 * @Description: 
 * @Autor: Huang Yingming
 * @LastEditors: Huang Yingming
 * @LastEditTime: 2021-09-02 09:46:40
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    account: 'undefined',
    name: 'undefined',
    roomId: 'undefined',
    url: 'localhost:40001',
    key: "",
    tipShow: false
  },
  mutations: {
    changeAccount(store, accountIndex) {
      store.account = accountIndex.account;
      store.name = accountIndex.name;
    },
    changeRoomId(store, id) {
      store.roomId = id
    },
    changeUrl(store, url) {
      store.url = url;
    },
    changeKey(store, msg) {
      msg = JSON.parse(JSON.stringify(msg))
      store.key = msg.key
    },
    changeTipShow(store, msg) {
      store.tipShow = msg
    }
  },
  actions: {
  },
  modules: {},
  getters: {
    getUrl: state => {
      return state.url;
    }
  }
})