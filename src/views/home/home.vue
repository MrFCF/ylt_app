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
                <li class="news_list">
                    <div class="news_img_warp">
                        <img src="@/assets/home/news1.png" alt="">
                    </div>
                    <div class="text_main">
                        <h3>会影响宝宝听力发育的四种行为</h3>
                        <p>听力对每一个人都很重要，听力也是我们获</p>
                        <div></div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>

export default {
    name:'home',
    data() {
        return {
            menu_list : [
                {imgUrl: require("@/assets/home/icon1.png"),title: '家庭签约',jumpUrl:''},
                {imgUrl: require("@/assets/home/icon2.png"),title: '随访记录',jumpUrl:''},
                {imgUrl: require("@/assets/home/icon3.png"),title: '健康测量',jumpUrl:''},
                {imgUrl: require("@/assets/home/icon4.png"),title: '报告查询',jumpUrl:''},
                {imgUrl: require("@/assets/home/icon5.png"),title: '预约就诊',jumpUrl:''},
                {imgUrl: require("@/assets/home/icon6.png"),title: '体制辨别',jumpUrl:''},
                {imgUrl: require("@/assets/home/icon7.png"),title: '附近药店',jumpUrl:''},
                {imgUrl: require("@/assets/home/icon8.png"),title: '紧急呼救',jumpUrl:''}
            ]
        }
    }
}
</script>

<style lang='scss' scoped>
    .home{
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
                }
            }
        }
    }

</style>