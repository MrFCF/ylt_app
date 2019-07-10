<template>
    <div class="home">
        <mt-header>
            <router-link to="/home" slot="left" class="l_title">
                <h3>主页</h3>
            </router-link>
            <mt-button slot="right" class="right_icon">
                <img src="@/assets/home/seachIcon.png" alt="">
                <img src="@/assets/home/newsIcon.png" alt="">
            </mt-button>
        </mt-header> 
        <mt-loadmore :top-method="loadTop" ref="loadmore" :bottom-method="loadBottom">
            <div class="menu_warp">
                <ul class="menu_list">
                    <li v-for="(list,index) in menu_list" :key="index">
                        <div class="menu_list_warp">
                            <img :src="list.imgUrl" :alt="list.title">
                            <p>{{list.title}}</p>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="banner_warp">
                <img src="@/assets/home/banner.png" alt="">
            </div>
            <div class="news_warp">
                <div class="news_title">
                    <span class="title_text">健康养生</span>
                    <span class="more">更多</span>
                </div>
                <ul class="news_list_warp">
                    <li class="news_list" v-for="(news,index) in news_list" :key="index">
                        <div class="news_img_warp">
                            <img :src="news.imgUrl" alt="">
                        </div>
                        <div class="text_main">
                            <h3>{{news.title}}</h3>
                            <p>{{news.content}}</p>
                            <div class="see_info_warp">
                                <div>
                                    <img src="@/assets/home/see.png" alt="">
                                    <span>{{news.see}}</span>
                                </div>
                                <div>
                                    <img src="@/assets/home/collection.png" alt="">
                                    <span>{{news.collection}}</span>
                                </div>
                                <div class="sign">
                                    {{news.sign}}
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </mt-loadmore>
        <bottomTabBar></bottomTabBar>
    </div>
</template>

<script>
import bottomTabBar from "@/components/bottomTabBar";
export default {
    name:'home',
    data() {
        return {
            news:{imgUrl: require("@/assets/home/news1.png"),title: '会影响宝宝听力发育的四种行为',jumpUrl:'',content: '听力对每一个人都很重要，听力也是我们获',see:'1234',collection: '254',sign:'儿科'},
            menu_list : [
                {imgUrl: require("@/assets/home/icon1.png"),title: '家庭签约',jumpUrl:''},
                {imgUrl: require("@/assets/home/icon2.png"),title: '随访记录',jumpUrl:''},
                {imgUrl: require("@/assets/home/icon3.png"),title: '健康测量',jumpUrl:''},
                {imgUrl: require("@/assets/home/icon4.png"),title: '报告查询',jumpUrl:''},
                {imgUrl: require("@/assets/home/icon5.png"),title: '预约就诊',jumpUrl:''},
                {imgUrl: require("@/assets/home/icon6.png"),title: '体制辨别',jumpUrl:''},
                {imgUrl: require("@/assets/home/icon7.png"),title: '附近药店',jumpUrl:''},
                {imgUrl: require("@/assets/home/icon8.png"),title: '紧急呼救',jumpUrl:''}
            ],
            news_list: [
                {imgUrl: require("@/assets/home/news1.png"),title: '会影响宝宝听力发育的四种行为',jumpUrl:'',content: '听力对每一个人都很重要，听力也是我们获',see:'1234',collection: '254',sign:'儿科'},
                {imgUrl: require("@/assets/home/news2.png"),title: '老人贫血应该多吃什么缓解',jumpUrl:'',content: '随着年龄的增大，越来越多的人身体会出现',see:'1234',collection: '254',sign:'血液科'},
                {imgUrl: require("@/assets/home/news3.png"),title: '为什么换季会皮肤过敏',jumpUrl:'',content: '每到换季身体会出现各种不适。有些人换季',see:'1234',collection: '254',sign:'皮肤科'},
                {imgUrl: require("@/assets/home/news4.png"),title: '跑步后应如何正确拉伸小腿肌肉',jumpUrl:'',content: '跑步在生活中是一项常见的运动方式，很多',see:'1234',collection: '254',sign:'外科'},
                {imgUrl: require("@/assets/home/news1.png"),title: '会影响宝宝听力发育的四种行为',jumpUrl:'',content: '听力对每一个人都很重要，听力也是我们获',see:'1234',collection: '254',sign:'儿科'},
                {imgUrl: require("@/assets/home/news2.png"),title: '老人贫血应该多吃什么缓解',jumpUrl:'',content: '随着年龄的增大，越来越多的人身体会出现',see:'1234',collection: '254',sign:'血液科'},
                {imgUrl: require("@/assets/home/news3.png"),title: '为什么换季会皮肤过敏',jumpUrl:'',content: '每到换季身体会出现各种不适。有些人换季',see:'1234',collection: '254',sign:'皮肤科'},
                {imgUrl: require("@/assets/home/news4.png"),title: '跑步后应如何正确拉伸小腿肌肉',jumpUrl:'',content: '跑步在生活中是一项常见的运动方式，很多',see:'1234',collection: '254',sign:'外科'}
            ]
        }
    },
    methods:{
        loadTop(){
            this.allLoaded = true;
            this.news_list.push(this.news)
            setTimeout(()=>{
                // 加载完成
                this.$refs.loadmore.onTopLoaded();
            },20000)
        },
        loadBottom(){
            setTimeout(()=>{
               this.news_list.push(this.news)
            //    加载完成
               this.$refs.loadmore.onBottomLoaded();
            },2000)
        }
    },
    components:{
        bottomTabBar
    }
}
</script>
<style lang='scss' scoped>
    .home{
        //这里样式就不写了
        /* 加上这个才会有当数据充满整个屏幕，可以进行上拉加载更多的操作 */
        overflow: scroll;
        width: 100%;
        .mint-header{
            background: #ffffff;
            height: $th;
            color: #000000;
            padding: 0 px2rem(40);
            .l_title{
                font-size: px2rem(44);
            }
            .right_icon{
                img{
                    width: px2rem(40);
                    vertical-align:middle;
                }
                img:nth-child(2){
                    margin-left:px2rem(50) 
                }
            }
        }
        .menu_warp{
            padding: 0 px2rem(56);
            .menu_list{
                width: 100%;
                height: px2rem(340);
                text-align: center;
                display: flex;
                flex-flow:row wrap;
                align-content: flex-start; 
                justify-content: space-between;
                
                li{
                    flex: 0 0 22%;
                    font-size: px2rem(24);
                    text-align: center;
                    .menu_list_warp{
                        img{
                            width: px2rem(100);
                        }
                        p{
                            font-size: px2rem(24);
                            color: #404040;
                            position: relative;
                            top: px2rem(-18);
                        }
                    }
                }
            }
        }
        .banner_warp{
            padding: 0 px2rem(40);
            // border-radius: px2rem(12);
            margin-top:px2rem(50); 
            img{
                width: 100%;
            }
        }
        .news_warp{
            padding: 0 px2rem(40);
            margin-top: px2rem(50);
            .news_title{
                display: block;
                width: 100%;
                overflow:hidden;
                .title_text{
                    font-size: $text-size-mid;
                    color:#000000;
                    float: left;
                }
                .more{
                    font-size: px2rem(24);
                    color: #404040;
                    float: right;
                }
            }
            .news_list_warp{
                width: 100%;
                overflow: hidden;
                .news_list{
                    height: px2rem(140);
                    padding: px2rem(35) 0;
                    border-bottom: 1px solid #F5F7FA;
                    .news_img_warp{
                        float: left;
                        margin-right: px2rem(20);
                        img{
                            width: px2rem(160)
                        }
                    }
                    .text_main{
                        // margin-left:px2rem(20); 
                        h3{
                            font-size: $text-size-mid;
                            color: #000000;
                            white-space : nowrap;
                        }
                        p{
                            white-space : nowrap;
                            margin-top: px2rem(14);
                            font-size: px2rem(24);
                            color: #404040;
                            overflow: hidden;
                        }
                    }
                    .see_info_warp{
                        div {
                            display: inline-block;
                            color: #D3D5DB;
                            font-size: px2rem(20);
                            margin-right: px2rem(30);
                            img{
                                width: px2rem(26);
                                vertical-align: middle;
                                margin-right: px2rem(10); 
                            }
                            span{
                                vertical-align: middle;
                                position: relative;
                                top: px2rem(2);
                            }
                        }
                        .sign{
                            float: right;
                            background: #F5F7FA;
                            width: px2rem(80);
                            height: px2rem(32);
                            line-height: px2rem(32);
                            border-radius: px2rem(16);
                            color: #D3D5DB;
                            text-align: center;
                            font-size: px2rem(20);
                            margin-top: px2rem(12);
                            margin-right: 0px;
                        }
                    }
                }
            }
        }
    }
</style>