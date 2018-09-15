// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from "vue-router"

/****公共组件****************/

//路由组件
import routers  from './router.js'
//UI组件
import ElementUI from 'element-ui'
/******公共样式*************/
//引入公共样式
import './assets/CSS/style.css'

/*****全局变量**************/
Vue.config.productionTip = false
Vue.prototype.$router = VueRouter;

Vue.use(VueRouter)
Vue.use(ElementUI)

/*******局部变量路由********/
const router = new VueRouter({
  mode: 'history',
  routes: routers
})

/* eslint-disable no-new */
new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app')

export default router; //将路由器导出
