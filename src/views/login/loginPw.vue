<template>
    <div class="loginPw">
        <topHeader :goUrl="urlData">
            <div slot="l" class="l">
                <span></span>
            </div>
            <div slot="c" class="c">
                <span></span>
            </div>
            <div slot="r" class="r" @click="vCodeLogin">
                <span>验证码登录</span>
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
            <el-form ref="formLogin" :model="formLogin" :rules="rulesLogin" label-width="0">
                <p class="input_label">账号</p>
                <el-form-item prop="name">
                    <el-input type="text" v-model="formLogin.name" placeholder="请输入账号"></el-input>
                </el-form-item>
                <p class="input_label">密码</p>
                <el-form-item class="input_Pw" prop="passWd">
                    <el-input type="password" v-model="formLogin.passWd" placeholder="请输入密码"></el-input>
                </el-form-item>
                <p class="forget_passWd">忘记密码</p>
                <el-form-item class="login_btn_warp">
                    <el-button type="primary" @click="submitForm('rulesLogin')">登录</el-button>
                    <el-button class="register" @click="resetForm('rulesLogin')">立即注册</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>

</template>

<script>
import { loginPw } from '@/service/index'
export default {
    name:'loginPw',
    data() {  
        return {
            urlData: '',
            formLogin: {
                name: '',
                passWd: ''
            },
            rulesLogin:{
                name: [
                    { required: true, message: '请输入活动名称', trigger: 'blur' }
                ],
                passWd: [
                    {required: true, message: '请输入密码', trigger: 'blur'}
                ]
            }
        }
    },
    methods:{
        vCodeLogin(){
            this.$router.push('/vCodeLogin');
        },
        loginBtn(){
            
            // loginPw(this.form).then(res =>{
            //     sessionStorage.setItem('userLogin',JSON.stringify(res.data));
            //     sessionStorage.setItem('userToken',res.data.token);
            //     this.$router.push('/home');
            // }).catch(err=>{
            //     console.log(err)
            // })
        },
        registerBtn(){
            this.$router.push('/register');
        }
    }
}
</script>

<style lang='scss'>
    .loginPw{
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
            .el-form{
                .el-form-item{
                    .el-input__inner{
                        border: none;
                        border-radius:0px; 
                        border-bottom: 1px solid #D3D5DB;
                        padding-left: 0px;
                    }
                }
                .input_Pw{
                    margin-bottom:px2rem(20); 
                }
                .input_label{
                    font-size: $text-size-mid;
                    color: #000000;
                }
                .forget_passWd{
                    text-align: right;
                    font-size: $text-size-mid;
                    color: #000000;
                }
                .login_btn_warp{
                    margin-top: px2rem(75);
                    .el-button{
                        display: block;
                        width: 100%;
                        border-radius: px2rem(50);
                    }
                    .register{
                        margin-left: 0px;
                        margin-top: px2rem(50);
                        border: none;
                    }
                }
            }
        }
    }
    
    
    
</style>