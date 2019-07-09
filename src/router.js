import Vue from 'vue'
import Router from 'vue-router'
import loginPw from './views/login/loginPw.vue'
import nofound from './views/nofound/nofound.vue'
import home from './views/home/home.vue'

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
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('./views/login/register.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '*',
      name: 'nofound',
      component: nofound
    },
  ]
})
