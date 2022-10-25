// 导入模块
import Vue from 'vue'
import VueRouter from 'vue-router'
// 导入 组件
// 导入 Login 组件
import login from '@/components/MyLogin.vue'
import home from '@/components/MyHome.vue'

import users from '@/components/menus/MyUsers.vue'
import rights from '@/components/menus/MyRights.vue'
import goods from '@/components/menus/MyGoods.vue'
import orders from '@/components/menus/MyOrders.vue'
import settings from '@/components/menus/MySettings.vue'
import userTop from '@/components/menus/userTop.vue'
// 安装插件
Vue.use(VueRouter)

// 挂载 
const router = new VueRouter({
  routes: [
    //登录 Login 的路由规则
    { path: '/', redirect: '/login' },
    { path: '/login', component: login },
    {
      path: '/home', component: home, children: [
        { path: 'users', component: users },
        { path: 'rights', component: rights },
        { path: 'goods', component: goods },
        { path: 'orders', component: orders },
        { path: 'settings', component: settings },
        { path: 'userTop/:id', component: userTop, props: true }
      ]
    },
  ]
})

// 路由拦截  前置守卫
router.beforeEach((to, from, next) => {
  const arrPath = ['/home', '/Home']

  if (arrPath.indexOf(to.path) !== -1) {
    const token = localStorage.getItem('token')
    if (token) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }

})

//导出
export default router
