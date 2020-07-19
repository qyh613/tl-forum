<template>
    <div>
        <van-nav-bar title="帖子详情" left-text="返回" left-arrow
                     @click-left="onClickLeft"/>
        <div class="content">
            <div class="title">
                <van-image round width="3rem" height="3rem" :src="postList.avatar"/>
                <span class="postName">{{postList.userName}}</span>
            </div>
            <div>
                <h3>{{postList.intro}}</h3>
                <img :src="postList.coverImgUrl" class="postImg">
            </div>
            <div class="operation">
                <div>
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-zan"></use>
                    </svg>
                </div>
            </div>
        </div>

        <div class="comment">
            <h3>全部回复</h3>
            <ul class="commentList">
                <li v-for="(item,index) in PostComment" :key="index">
                    <div class="title">
                        <van-image round width="3rem" height="3rem" :src="item.avatar"/>
                        <div class="NameTime">
                            <span class="postName">{{item.userName}}</span>
                            <span class="postTime">{{item.updatedTime}}</span>
                        </div>
                    </div>
                    <p class="commentContent">{{item.commentContent}}</p>
                    <p @click="examineReply(item.commentId,item,index)" class="examineReply">查看回复</p>
                </li>
            </ul>
            <van-popup v-model="show" round position="bottom" closeable close-icon-position="top-left"
                       :style="{ height: '91%',backgroundColor:'#fff'}">
                <div class="layer">{{fewLayer}} 楼的回复</div>
                <div class="published">
                    <div class="title">
                        <van-image round width="3rem" height="3rem" :src="comment.avatar"/>
                        <div class="NameTime">
                            <span class="postName">{{comment.userName}}</span>
                            <span class="postTime">{{comment.updatedTime}}</span>
                        </div>
                    </div>
                    <p class="PublishContent">{{comment.commentContent}}</p>
<!--                    <div class="reply">回复</div>-->
                </div>
                <div style="background-color:rgb(242, 238, 238); height: 3px"></div>
                <div class="ReplyContentBox">
                    <div v-for="(item,index) in postReply" :key="index" class="ReplyContent">
                        <div class="title">
                            <van-image round width="3rem" height="3rem" :src="item.avatar"/>
                            <div class="NameTime">
                                <span class="postName">{{item.userName}}</span>
                                <span class="postTime">{{item.updatedTime}}</span>
                            </div>
                        </div>
                        <p class="PublishContent">{{item.commentContent}}</p>
                        <div class="commentsBox">
                            <input type="text" placeholder="回复评论" v-model="replyComments">
                            <button @click="reply(item.parentId,item.postsId)">回复</button>
                        </div>
                    </div>

                </div>

            </van-popup>
        </div>

        <div class="commentsBox">
            <input type="text" placeholder="发表评论" v-model="commentsContent">
            <button @click="release">发布</button>
        </div>
    </div>
</template>

<script>
    // 帖子详情 ****************************************
    import {Toast} from 'vant';
    import {getComments, getPostComment, getPostDetails, getPostReply, getReplyComments} from "../../../api/Index-api";

    export default {
        name: "PostDetails",
        data() {
            return {
                postList: {},
                PostComment: [],
                show:false,
                comment:[],
                postReply:[],
                fewLayer:0,
                commentsContent:"",
                replyComments:"",
            }
        },
        methods: {
            onClickLeft() {
                this.$router.push("/index")
            },
            examineReply(commentId,item,index){
                this.fewLayer= index + 1
                this.show = true
                this.comment = item
                // 帖子评论回复
                getPostReply(commentId).then(res=>{
                    this.postReply = res.rows
                    console.log(this.postReply)
                })
            },
            // 发布评论
            release(){
                console.log(this.commentsContent)
                getComments(this.$route.params.postsId,this.commentsContent).then(res=>{
                    console.log(res)
                    if(res.code !== 0){
                        Toast(res.msg);
                        this.$router.push("/mine/login")
                    }
                    // 帖子评论
                    getPostComment(this.$route.params.postsId).then(res => {
                        if (res.code === 0) {
                            this.PostComment = res.rows
                        }
                    })
                })
            },
            // 回复 评论
            reply(parentId,postsId){
                console.log(this.replyComments)
                console.log(parentId)
                console.log(postsId)
                getReplyComments(postsId,parentId,this.replyComments).then(res=>{
                    console.log(res)
                })
            }
        },
        created() {
            // console.log(this.$route.params.postsId)
            // 帖子详情
            getPostDetails(this.$route.params.postsId).then(res => {
                if (res.code === 0) {
                    this.postList = res.data
                }
            })

            // 帖子评论
            getPostComment(this.$route.params.postsId).then(res => {
                // console.log(res.rows)
                if (res.code === 0) {
                    this.PostComment = res.rows
                }
            })


        }
    }
</script>

<style scoped lang="less">
    /*弹出样式*/
    /deep/.van-overlay{
        background-color:rgba(220,220,220,0.02);
    }
    /* 评论的回复 */
    .published {
        padding: 20px 20px 10px;
        overflow: hidden;
    }
    .PublishContent {
        padding: 5px 0 0px 58px;
    }
    .reply {
        width: 20%;
        border: 1px solid #ccc;
        border-radius: 20px;
        text-align: center;
        float: right;
        height: 30px;
        line-height: 30px;
    }
    /*楼层数*/
    .layer {
        padding-top: 18px;
        text-align: center;
        font-size: 16px;
    }

    .title {
        display: flex;
        align-items: center;
        .NameTime {
            display: flex;
            flex-direction: column;
        }
        .postName {
            display: inline-block;
            font-size: 16px;
            padding: 0px 10px;
        }
        .postTime {
            padding: 0px 10px;
            color: #847a7a;
            display: inline-block;
            margin-top: 3px;
        }
    }

    .content {
        border-bottom: 0.5px solid #ebedf0;
        padding: 10px 20px;

        h3 {
            font-weight: 100;
            color: rgba(0, 0, 0, 0.7);
            font-size: 14px;
            padding: 10px 0;
        }

        .postImg {
            width: 100%;
        }

        .operation {
            display: flex;
            justify-content: flex-end;
            font-size: 25px;
            padding: 20px 10px 10px;;
        }
    }

    .comment {
        h3 {
            font-weight: inherit;
            padding: 20px 20px;
        }

        .commentList {
            padding: 0 20px;

            li {
                width: 100%;
                padding-bottom: 30px;
                .commentContent {
                    padding: 10px 0 10px 58px;
                    font-size: 15px;
                }
                .examineReply {
                    color: #8d8d8d;
                    padding: 10px 0 10px 58px;
                }
            }
        }
        .ReplyContentBox {
            padding: 20px 20px 0;
            .ReplyContent {
                padding: 10px 0;
            }
        }
    }
    .commentsBox{
        position: fixed;
        left: 0;
        bottom: -1px;
        height: 40px;
        width: 100%;
        background-color: #fff;
        border-top: 1px solid #ccc;
        line-height: 40px;
        text-align: center;
        input{
            height: 30px;
            border-top-left-radius: 20px;
            border-bottom-left-radius: 20px;
            width: 50%;
            padding: 0 10px;
            border: 1px solid #ccc;
            vertical-align: middle;
        }
        button{
            width: 20%;
            height: 30px;
            border: 1px solid #ccc;
            line-height: 30px;
            border-top-right-radius: 20px;
            border-bottom-right-radius: 20px;
            vertical-align: middle;
        }
    }
</style>