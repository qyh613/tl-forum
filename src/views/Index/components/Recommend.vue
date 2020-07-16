<template>
    <div class="postBox">
        <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
            <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
                <router-link :to="'/post/details/'+item.postsId" tag="div" class="postList" v-for="(item,index) in postList"
                    :key="index">
                    <div class="content">
                        <div class="title">
                            <van-image round width="3rem" height="3rem" :src="item.avatar" />
                            <span class="postName">{{item.userName}}</span>
                        </div>
                        <div>
                            <h3>{{item.intro}}</h3>
                            <img :src="item.coverImgUrl" class="postImg">
                        </div>
                        <div class="operation">
                            <div>
                                <svg class="icon" aria-hidden="true">
                                    <use xlink:href="#icon-fenxiang"></use>
                                </svg>
                            </div>
                            <div>
                                <svg class="icon" aria-hidden="true">
                                    <use xlink:href="#icon-xiaoxi"></use>
                                </svg>
                            </div>
                            <div>
                                <svg class="icon" aria-hidden="true">
                                    <use xlink:href="#icon-zan"></use>
                                </svg>
                            </div>
                        </div>
                    </div>
                </router-link>
            </van-list>
        </van-pull-refresh>
    </div>
</template>

<script>
    // 推荐页*********************************************8
    import {
        getPostList
    } from "../../../api/Index-api";

    export default {
        name: "Recommend",
        data() {
            return {
                postList: [],
                loading: false,
                finished: false,
                refreshing: false,
                pageNum: 0
            }
        },
        methods: {
            onLoad() {
                getPostList(this.pageNum, 10).then(res => {
                    this.postList = this.postList.concat(res.rows)
                    this.loading = false
                    console.log(res.rows)
                })
                this.pageNum += 1;
            },
            onRefresh() {
                this.pageNum = 0;
                this.postList = [];
                this.refreshing = false
                this.onLoad();
            },
        },
    }
</script>

<style scoped lang="less">
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
            }
        }
    }
</style>