<template>
    <div class="postBox">

        <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
            <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad" >
                <div class="postList" v-for="(item,index) in postList" :key="index">
                    <div class="content">
                        <router-link :to="'/post/details/'+item.postsId" tag="div">
                            <div class="title">
                                <van-image round width="3rem" height="3rem" :src="item.avatar"/>
                                <span class="postName">{{item.userName}}</span>
                            </div>
                            <div>
                                <h3>{{item.intro}}</h3>
                                <img :src="item.coverImgUrl" class="postImg">
                            </div>
                        </router-link>
                        <div class="operation">
                            <div @click="BBSShare">
                                <svg class="icon" aria-hidden="true">
                                    <use xlink:href="#icon-fenxiang"></use>
                                </svg>
                            </div>
                            <div @click="commentsList(item.postsId)">
                                <svg class="icon" aria-hidden="true">
                                    <use xlink:href="#icon-xiaoxi"></use>
                                </svg>
                            </div>
                            <div @click="praise" :class="pointPraise?'praise':''">
                                <van-icon name="good-job-o" />
                            </div>
                        </div>
                    </div>
                </div>
            </van-list>
        </van-pull-refresh>
        <van-share-sheet :value="showShare" title="立即分享给好友" :options="options" @cancel="cancel"
                         @click-overlay="clickOverlay"/>
    </div>
</template>

<script>
    // 推荐页*********************************************8
    import {
        getPostList, getPostSearch
    } from "../../../api/Index-api";
    import {mapState} from "vuex";
    import Vue from 'vue';
    import { Toast } from 'vant';
    Vue.use(Toast);
    export default {
        name: "Recommend",
        data() {
            return {
                postList: [],
                loading: false,
                finished: false,
                refreshing: false,
                pageNum: 1,
                options: [
                    [
                        { name: '微信好友', icon: 'wechat' },
                        { name: '朋友圈', icon: 'wechat' },
                        { name: 'QQ好友', icon: 'qq' },
                        { name: 'QQ空间', icon: 'qq' },
                        { name: '新浪微博', icon: 'weibo' },
                    ],
                    [
                        { name: '复制链接', icon: 'link' },
                        { name: '分享海报', icon: 'poster' },
                        { name: '二维码', icon: 'qrcode' },
                    ],
                ],
                pointPraise:false,
            }
        },
        props: {
            categoryId: [Number, String],
            keyWord: [Number, String],
        },
        methods: {
            onLoad() {
                if (this.categoryId !== undefined){
                    getPostList(this.pageNum, 10, this.categoryId).then(res => {
                        this.postList = this.postList.concat(res.rows)
                        this.loading = false
                        if(this.postList.length == res.total){
                            this.finished = true
                        }
                    })
                }
                this.pageNum += 1;
            },
            onRefresh() {
                this.pageNum = 0;
                this.postList = [];
                this.refreshing = false
                this.onLoad();
            },
            BBSShare() {
                this.$store.commit("changeShare",{showShare:true})
            },
            cancel(){
                console.log(1)
                this.$store.commit("changeShare",{showShare:false})
            },
            clickOverlay(){
                this.$store.commit("changeShare",{showShare:false})
            },
            // 点赞 情提示
            praise(){

                if(this.pointPraise){
                    Toast('取消点赞');
                    this.pointPraise = false
                }else {
                    Toast('点赞成功');
                    this.pointPraise = true
                }

            },
            // 点击评论
            commentsList(postsId){
                this.$router.push("/post/details/"+postsId)
            }
        },
        computed:{
            ...mapState(["showShare"])
        },
        watch:{
            keyWord(){
                getPostSearch(this.keyWord).then(res=>{
                    let list = [];
                    this.postList = list.concat(res.rows)
                    this.loading = false
                    if(this.postList.length == res.total){
                        this.finished = true
                    }
                })
            }
        }

    }
</script>

<style scoped lang="less">
    /*赞*/
    .praise {
        color: red;
    }


    .postBox {
        padding-bottom: 50px;
    }

    .postList {
        padding: 10px 20px;

        .content {
            border-bottom: 0.5px solid #ebedf0;
            padding: 0 0 10px;

            .title {
                display: flex;
                align-items: center;

                .postName {
                    display: inline-block;
                    font-size: 16px;
                    padding: 0px 10px;
                }
            }

            h3 {
                font-weight: 100;
                color: rgba(0, 0, 0, 0.7);
                font-size: 14px;
                padding: 10px 0 0;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 3;
                overflow: hidden;
            }

            .postImg {
                width: 200px;
                margin-top: 10px;
            }

            .operation {
                display: flex;
                justify-content: space-between;
                font-size: 20px;
                padding: 10px;
                div{
                    &:hover{
                        cursor: pointer;
                    }
                }
            }
        }
    }


</style>