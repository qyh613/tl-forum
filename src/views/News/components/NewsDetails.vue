<template>
    <div>
        <van-nav-bar :title="NewsData.title" left-text="返回" left-arrow
                @click-left="onClickLeft" style="background-color: #efeff4;"/>
        <div class="allContent">
            <p class="tiele">{{NewsData.title}}</p>
            <p class="from">来自{{NewsData.articleSource}}</p>
            <div v-html="NewsData.content" class="contentBox"></div>
        </div>
        <div class="operation">
            <div @click="praise">
                <van-icon name="good-job-o" />
                <p>点赞</p>
            </div>
            <div @click="collection">
                <van-icon name="star-o" />
                <p>收藏</p>
            </div>

            <div>
                <van-icon name="comment-o" />
                <p>评论</p>
            </div>



        </div>
    </div>
</template>

<script>
    import {newsDetail} from "../../../api/News-api";



    import Vue from 'vue';
    import { Toast } from 'vant';
    Vue.use(Toast);



    export default {
        name: "NewsDetails",
        methods: {
            onClickLeft() {
                this.$router.push("/index")
            },
            praise(){
                Toast('点赞成功');
            },
            collection(){
                Toast('收藏成功');
            }
        },
        created() {
            newsDetail(this.$route.params.articleId).then(res=>{
                this.NewsData = res.data
            })
        },
        data(){
            return{
                NewsData:{}
            }
        },

    }
</script>

<style scoped lang="less">
    .allContent {
        padding: 20px;
        .tiele {
            color: #2c3e50;
        }
        .from {
            color: #2c3e50;
            margin: 14px 0;
        }
        .contentBox{
            /deep/.art_p {
                color: #000;
                font-size: 14px;
                text-indent: 2em;
                margin: 15px 0;
            }
            /deep/ h2{
                font-weight: 100;
            }
        }

        /deep/figure {
            margin: 14px 20px;
            /deep/ img{
                width: 100% !important;
            }
        }

    }
    .operation {
        padding: 20px;
        display: flex;
        justify-content: space-around;
        div{
            width: 30%;
            text-align: center;
        }
    }
</style>