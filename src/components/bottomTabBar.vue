<template>
    <div class="tabBar">
        <mt-tabbar v-model="selected" :fixed="isFixed">
            <mt-tab-item id="home">
                <img slot="icon" src="@/assets/home/home.png" v-show="!home">
                <img slot="icon" src="@/assets/home/homeActive.png" v-show="home">
                <span>首页</span>
            </mt-tab-item>
            <mt-tab-item id="info">
                <img slot="icon" src="@/assets/home/info.png" v-show="!info">
                <img slot="icon" src="@/assets/home/infoActive.png" v-show="info">
                <span>咨询</span>
            </mt-tab-item>
            <mt-tab-item id="me">
                <img slot="icon" src="@/assets/home/me.png" v-show="!me">
                <img slot="icon" src="@/assets/home/meActive.png" v-show="me">
                <span>我的</span>
            </mt-tab-item>
        </mt-tabbar>
    </div>
</template>

<script>
export default {
    name:'tabBar',
    data() {
        return {
            home: true,
            info: false,
            me: false,
            Record: 'home',
            selected:'home',
            isFixed: true,
        }
    },
    watch: {
        selected(val){
            console.log(val)
            // 将上一个选中的tabbar的值设为false
            this[this.Record] = !this[this.Record];
            // 获取当前选中的值
            this.Record = val;
            // 将当前的tabbar值设为true
            this[this.Record] = !this[this.Record];

        }
    }
}
</script>

<style lang='scss'>
.tabBar{
    span{
        color: #000000;
    }
}
</style>