<template>
    <div>
        <van-nav-bar :title="foundName" left-text="返回" left-arrow
                @click-left="onClickLeft" />
        <Recommend :categoryId="categoryId"/>
    </div>
</template>

<script>
//  发现详情页
    import Recommend from "./Recommend";

    export default {
        name: "FoundDetails",
        data(){
          return{
              categoryId:null,
              foundName:null
          }
        },
        methods: {
            onClickLeft() {
               this.$router.push("/index")
            },
        },
        components:{
            Recommend
        },
        created() {
            this.categoryId = this.$route.params.categoryId
            this.foundName = this.$route.params.name
            // console.log(this.$route.params.name)
        }
    }
</script>

<style scoped>

</style>