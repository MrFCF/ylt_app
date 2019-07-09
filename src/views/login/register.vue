<template>
    <div class="register">
        <top-header :Header_l="Header_l"></top-header>
        <div class="main_warp">
            <h3 class="title">注册</h3>
            <div class="form_warp">
                <mt-field class="input_warp" label="" placeholder="请输入账号" v-model="login.userName"></mt-field>
                <mt-field class="input_warp" label="" placeholder="请输入身份证号" v-model="login.ID"></mt-field>
                <mt-field class="input_warp" label="" placeholder="请选择是否为户主" v-model="login.houseHolder">
                    <span :class="[isTrue ? 'is_householder' : null]" @click="is_householder">是</span>&nbsp;&nbsp;&nbsp;&nbsp;
                    <span :class="[!isTrue ? 'is_householder' : null]" @click="no_householder">否</span>
                </mt-field>
                <mt-field class="input_warp" label="" placeholder="请输入手机号" v-model="login.iphone"></mt-field>
                <mt-field class="input_warp" label="" placeholder="请输入密码" v-model="login.passWd"></mt-field>
                <mt-field class="input_warp" label="" placeholder="请再次输入密码" v-model="login.passWdS"></mt-field>
            </div>
            <div class="login_warp">
                <mt-button size="large" class="register_btn">注册</mt-button>
                <div class="login_btn">
                    已有账号?<router-link to="/">立即登录</router-link>    
                </div>  
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'register',
    data() {
        return {
            isTrue: true,
            Header_l:true,
            login: {
                userName: '',
                ID: '',
                houseHolder: '是',
                iphone: '',
                passWd: '',
                passWds: ''
            }
        }
    },
    methods:{
        is_householder(){
            this.isTrue = true;
            this.login.houseHolder = "是"
        },
        no_householder(){
            this.isTrue = false;
            this.login.houseHolder = "否"
        }
    }
}
</script>

<style lang='scss' scoped>
    .register{
        .main_warp{
            padding: 0 px2rem(80);
            .title{
                height: px2rem(102);
                line-height: px2rem(102);
                font-size: $text-size-imp;
            }
            .form_warp {
                margin-top: px2rem(25);
                .input_warp{
                    border-bottom: 1px solid #D3D5DB;
                    margin-top: px2rem(20);
                }
                ::-webkit-input-placeholder{
                    color: #999999;
                    font-size: $text-size-mid;
                }
            }
            .login_warp{
                margin-top: px2rem(60);
                .register_btn{
                    background: #4C82FF;
                    color: #ffffff;
                    font-size: px2rem(32);
                    border-radius: px2rem(50);
                }
                .login_btn{
                    margin-top: px2rem(48);
                    text-align: center;
                    font-size: $text-size-mid;
                    color: #666666;
                    a{
                        color: #4C82FF;
                    }
                }
            }
        }
    }
    .is_householder{
        color: #4C82FF;
        position: relative;
    }
    .is_householder::after{
        content: "";
        background: #4C82FF;
        width: 5px;
        height: 5px;
        border-radius: 50%;
        position: absolute;
        bottom: -10px;
        left: 0px;
        right: 0px;
        margin: 0 auto;
    }
</style>