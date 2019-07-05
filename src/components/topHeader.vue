<template>
    <div class="top_header">
        <div class="grid-content th-back" @click="backUrl">
            <slot name="l"></slot>    
        </div>
        <div class="grid-content th-title">
            <slot name="c"></slot>    
        </div>
        <div class="grid-content th-r">
            <slot name="r"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name:'top_header',
    props:['goUrl'],
    data() {
        return {
        }
    },
    methods:{
        backUrl(){
            if(this.backUrl){
                this.$router.push(this.backurl)
            }else{
                this.$router.push(-1)
            }
        }
    }
}
</script>

<style lang='scss'>
    .top_header{
        height: $th;
        font-size: $text-size-mid;
        padding: 0 px2rem(40);
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #000000;
        .th-back{
            height: px2rem(34);
            width: px2rem(19);
            img{
                height: 100%;
                width: 100%;
            }
        }
    }
</style>
