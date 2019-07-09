<template>
    <div class="nofound">
        <div>
            <img src="@/assets/nofound.png" alt="">
            <p>找不到该页面o(╥﹏╥)o</p>
        </div>
    </div>
</template>

<script>
export default {
    name:'nofound',
    data() {
        return {
        }
    }
}
</script>

<style lang='scss'>
    .nofound{
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        img{
            width: px2rem(400);
            display: block;
            position: relative;
            top: px2rem(-100);
        }
        p{
            text-align: center;
            color: #666666;
            font-weight: 700;
        }
    }
</style>