import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import loginPw from './views/login/loginPw'
import vCodeLogin from './views/login/vCodeLogin.vue'
import register from './views/login/register.vue'

Vue.use(Router)

let routers =  new Router({
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
      component: vCodeLogin
    },
    {
      path: '/register',
      name: 'register', 
      component: register
    },
    {
      path: '/home',
      name: 'Home', 
      component: Home
    }
  ]
})


routers.beforeEach((to,from,next)=>{
  if(to.path != '/'){
    //判断用户是否登录
    next();
  }else{
    next();
  }
})
export default routers;
