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
          <mt-button size="large" class="login_btn" @click="login_btn">登录</mt-button>
          <router-link to="/register"><mt-button size="large" class="register_btn">注册</mt-button></router-link>
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
  },
  methods: {
    login_btn(){
      this.$router.push('/home')
    }
  }
}
</script>
<style lang="scss">
  .loginPw{
    .main_warp{
      padding: 0 px2rem(80);
      .title{
        height: px2rem(102);
        line-height: px2rem(102);
        font-size: $text-size-imp;
        font-weight: 700; 
      }
      .form_warp{
        margin-top: px2rem(151);
        .mint-cell-wrapper{
          padding-left: 0px;
          border-bottom: 1px solid #D3D5DB;
          font-size: $text-size-mid;
          ::-webkit-input-placeholder{
            color: #999999;
          }
        }
        .user_warp{
          margin-bottom: px2rem(40);
        }
        p{
          font-size: $text-size-mid;;
        }
        .forget_Pw{
          text-align: right;
          font-size: $text-size-mid;
          margin-top: px2rem(20);
          color: #666666;
        }
        .login_warp{
          margin-top: px2rem(80);
          button{
            border-radius: px2rem(50);
            height: px2rem(80);
          }
          .login_btn{
            background: #4C82FF;
            color: #ffffff;
          }
          .register_btn{
            background: #ffffff;
            color: #4C82FF;
            margin-top: px2rem(20);
          }
        }
      }
    }
  }
</style>

