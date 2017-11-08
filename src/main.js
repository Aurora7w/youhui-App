import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App.vue'

import MintUI from 'mint-ui'
import '../node_modules/mint-ui/lib/style.css'


Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(MintUI)


import routers from './js/router.js'

//全局过滤器，可以在任何一个页面使用,购物车界面
Vue.filter("money",function(value,type){
	return "￥" + value.toFixed(2)+type;
})


new Vue({
  el: '#app',
  render: h => h(App),
  router:routers,
})
