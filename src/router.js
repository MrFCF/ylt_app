import Vue from 'vue'
import Router from 'vue-router'
import loginPw from './views/login/loginPw.vue'
// import vCodeLogin from './views/login/vCodeLogin.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'loginPw',
      component: loginPw
    },
    {
      path: '/vCodeLogin',
      name: 'vCodeLogin',
      component: () => import('./views/login/vCodeLogin.vue')
    }
  ]
})
