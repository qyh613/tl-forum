<template>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(item,index) in NewsSwipedata"
                        :style="'background-image: url('+item.bannerImgUrl+')'" :key="index">
            <p>{{item.title}}</p>
        </van-swipe-item>
    </van-swipe>
</template>

<script>
    import {NewsSwipe} from "../../../api/News-api";

    export default {
        name: "NewsListSwipe",
        data(){
          return {
              NewsSwipedata:[]
          }
        },
        created() {
            NewsSwipe().then(res=>{
                this.NewsSwipedata = res.rows
            })
        }
    }
</script>

<style scoped lang="less">
    .my-swipe .van-swipe-item {
        height: 200px;
        background-size: 100% 100%;
        p{
            width: 100%;
            height: 30px;
            background-color: #fff;
            text-align: center;
            line-height: 30px;
            color: #4b90f3;
            font-size: 12px;
        }
    }
</style>