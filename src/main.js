import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
Vue.config.productionTip = false

//导入样式模块
import './assets/css/bootstrap.css'
import './index.css'

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
