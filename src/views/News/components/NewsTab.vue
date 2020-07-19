<template>
    <van-tabs v-model="active" swipeable>
        <van-tab v-for="(item,index) in NewsTab" :title="item.name" :key="index">
            <TabList :categoryId="item.categoryId"/>
        </van-tab>
    </van-tabs>
</template>

<script>
    import {listCart} from "../../../api/News-api";
    import TabList from "./TabList";

    export default {
        name: "NewsTab",
        components:{
            TabList
        },
        created() {
            // 新闻tab
            listCart(1,13).then(res=>{
                this.NewsTab = res.rows
            })

        },
        data(){
            return{
                NewsTab:[],
                active:0,
            }
        },

    }
</script>

<style scoped lang="less">

</style>