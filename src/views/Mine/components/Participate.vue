<template>
    <div>
        <van-nav-bar
                title="我参与的"

                left-arrow
                @click-left="onClickLeft"


        />


        <div class="postList" v-for="(item,index) in list" :key="index">
            <div class="content">
                <router-link :to="'/mine/post/details/'+item.postsId" tag="div">
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
                    <div>
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-xiaoxi"></use>
                        </svg>
                    </div>
                    <div >
<!--                        <van-icon name="delete" ></van-icon>-->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {deletepost, getMyParticipate} from "../../../api/LogIn-api";
    // import {Toast} from "vant";

    export default {
        name: "Participate",
        data() {
            return {
                list: [],

            }
        },
        created() {
            getMyParticipate().then(res => {
                console.log(res)
                this.list = res.rows
            })
        },
        methods: {
            onClickLeft() {
                this.$router.push("/mine/personalDetails")
            },
            deletePost() {
                console.log(this.$route.params.postsId)
                deletepost(this.$route.params.postsId).then(res=>{
                    console.log(res)
                })
            },
            // showPopup() {
            //     this.show = true;
            // },
            BBSShare() {
                this.$store.commit("changeShare",{showShare:true})
            },
        }
    }
</script>

<style scoped lang="less">




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