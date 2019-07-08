<template>
  <mt-header :title="title">
    <mt-button v-if="Header_l" icon="back" slot="left" @click="backBtn"></mt-button>
    <mt-button slot="right" @click="jumpUrl">{{Header_r}}</mt-button>
  </mt-header>
</template>

<script>
export default {
  name: 'topHeader',
  props: ["Header_r","Header_l","title","goUrl","backUrl"],
  mounted(){
    if(!this.Header_l){
      
    }
  },
  methods: {
    jumpUrl(){
      if(this.goUrl){
        this.$router.push('/'+this.goUrl)
      }
    },
    backBtn(){
      this.$router.back(-1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .mint-header{
    height: $th;
    background-color: #ffffff;
    color: #424242;
    font-size: px2rem(28);
    padding: 0 px2rem(40);
    button{
      font-weight: 700;
    }
  }
</style>
