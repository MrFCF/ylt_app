<template>
    <div class="vCodeLogin">
        <topHeader :goUrl="urlData">
            <div slot="l" class="l" @click="login">
                <img src="@/assets/icon/back.png" alt="">
            </div>
            <div slot="c" class="c">
            </div>
            <div slot="r" class="r">
            </div>
        </topHeader>
        <div class="main_warp">
            <el-row class="title_warp">
                <el-col :span="24">
                    <div class="grid-content">
                        欢迎来到联医群   
                    </div>
                </el-col>
            </el-row>
            <el-row ref="form" :model="form" label-width="0" class="login_warp">
                <el-col>
                    <p class="input_label">账号</p>
                    <input type="text" v-model="form.name" placeholder="请输入账号">
                </el-col>
                <el-col class="input_Pw">
                    <p class="input_label">密码</p>
                    <input class="Pw" type="password" v-model="form.passWd" placeholder="请输入密码">
                    <span>获取验证码</span>
                </el-col>
                <el-col class="login_btn_warp">
                    <input type="button" class="login_btn" value="登录" @click="loginBtn">
                    <input type="button" class="register" value="立即注册" @click="registerBtn">
                </el-col>
            </el-row>
        </div>
    </div>

</template>

<script>
export default {
    name:'vCodeLogin',
    data() {  
        return {
            urlData: '',
            form: {
                name: '',
                passWd: ''
            }
        }
    },
    methods:{
        login(){
            this.$router.push('/');
        },
        loginBtn(){
            this.$router.push('/home');
        },
        registerBtn(){
            this.$router.push('/register');
        }
    }
}
</script>

<style lang='scss'>
    .vCodeLogin{
        background: #fff;
        height: 100%;
        .r{
            height: 100%;
            span{
                margin-right:px2rem(20); 
            }
            span::after{
                content: "";
                display: inline-block;
                height: px2rem(18);
                width: px2rem(12);
                background: url(../../assets/icon/right-arrow.png) no-repeat;
                background-size: 100%;
                position: relative;
                right: px2rem(-20);
            }
        }
        .main_warp{
            padding: 0 px2rem(80);
            .title_warp{
                height: px2rem(102);
                line-height: px2rem(102);
                font-size: $text-size-imp;
                color: #000000;
                margin-bottom: px2rem(155);
            }
            .login_warp{
                .el-col{
                    input{
                        width: 100%;
                        border: none;
                        padding: px2rem(30) 0px;
                        border-bottom: 1px solid #D3D5DB;
                        color: #999999;
                    }
                    input::-webkit-input-placeholder {
                        /* placeholder颜色  */
                        color: #999999;
                    }
                }
                .input_Pw{
                    margin-top: px2rem(20);
                    position: relative;
                    span{
                        position: absolute;
                        right: 0px;
                        top: 32px;
                        font-size: $text-size-mid;
                        color: #000000;
                    }
                }
                .input_label{
                    color: #000000;
                    font-size: $text-size-mid;
                }
                .forget_passWd{
                    text-align: right;
                    margin-top:px2rem(20); 
                    color: #000000;
                    font-size: $text-size-mid;
                }
                .login_btn_warp{
                    margin-top: px2rem(80);
                    .login_btn{
                        background: #4C82FF;
                        border-radius: px2rem(60);
                        color: #ffffff;
                        font-size: px2rem(32);
                    }
                    .register{
                        background: #ffffff;
                        color: #4C82FF;
                        border: none;
                        margin-top: px2rem(20);
                        font-size: $text-size-mid;
                    }
                }
            }
        }
    }
    
    
    
</style>