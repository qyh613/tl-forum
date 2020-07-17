<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>

  // import { loginApi} from "./api/LogIn-api";
  export default {
    name:'app',
    // created() {
    //   loginApi().then(res=>{
    //     if (res.code==0){
    //       this.$store.commit('changeLogin', {isLogin:true})
    //       // this.$router.push("/mine/personalDetails")
    //     }else{
    //       this.$store.commit('changeLogin', {isLogin:false})
    //       // this.$router.push("/mine/login")
    //     }
    //   })
    // }
  }
</script>
<style scoped lang="less">
</style>