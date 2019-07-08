<template>
  <div class="loginPw">
    <top-header :Header_r="Header_r" :goUrl="goUrl"></top-header>
    <div class="main_warp">
      <h3 class="title">欢迎来到联医群</h3>
      <div class="form_warp">
        <div class="user_warp">
          <p>账号</p>
          <mt-field label="" placeholder="请输入账号" v-model="login.userName"></mt-field>
        </div>
        <div class="PW_warp">
          <p>密码</p>
          <mt-field label="" placeholder="请输入密码" v-model="login.PW_warp"></mt-field>
        </div>
        <div class="forget_Pw">忘记密码</div>
        <div class="login_warp">
          <mt-button size="large" class="login_btn">登录</mt-button>
          <mt-button size="large" class="register_btn">注册</mt-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'loginPw',
  data() {
    return {
      goUrl:'vCodeLogin',
      Header_r: '验证码登录>',
      login:{
        userName: '',
        PW_warp: ''
      }
    }
  }
}
</script>

