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
                        <p>楼主{{item.userName}}</p>

                    </div>
                    <p><span  class="postName">{{'《'+item.title+'》'}}</span><span>发布时间{{item.sendTime}}</span></p>
                    <div>
                        <h3>{{item.intro}}</h3>
                        <img :src="item.coverImgUrl" class="postImg">
                    </div>
                </router-link>

<!--                <router-link :to="'/mine/changePost/'+item.postsId+'/'+item.title" tag="div" class="change">-->
<!--                    <van-icon name="records"/>-->
<!--                </router-link>-->

            </div>

        </div>

    </div>
</template>

<script>
    import {deletepost, getMyParticipate} from "../../../api/LogIn-api";


    export default {
        name: "Participate",
        data() {
            return {
                list: [],


            }
        },
        created() {
            getMyParticipate().then(res => {
                // console.log(res)
                this.list = res.rows
            })
        },
        methods: {
            onClickLeft() {
                this.$router.push("/mine/personalDetails")
            },
            deletePost() {
                // console.log(this.$route.params.postsId)
                deletepost(this.$route.params.postsId).then(() => {
                    // console.log(res)
                })
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

    .change {
        color: black;
        font-size: 20px;
        text-align: center;
    }
    .postName {

        font-size: 18px;
        padding: 10px 10px;
    }
</style>