<template>
    <div>
        <van-nav-bar
                title="发布帖子"
                left-text="返回"

                right-text="发布"
                left-arrow
                @click-left="onClickLeft"
                @click-right="onClickRight"

        />
        <van-cell-group>
            <van-field v-model="title" placeholder="请输入标题"/>
        </van-cell-group>
        <van-field
                v-model="intro"
                rows="2"
                autosize

                type="textarea"
                maxlength="500"
                placeholder="来吧尽情的发挥吧……"
                show-word-limit
        >

        </van-field>
        <van-uploader v-model="fileList" :after-read="afterRead" multiple/>
        <!--        专题列表-->
        <ul class="specialBox">
            <li v-for="(item,index) in list" :key="index" :class="{active:index==isActive}"
                @click="activeSpecial(index,item.categoryId)">{{item.name}}
            </li>
        </ul>


    </div>
</template>

<script>
    import {Toast} from "vant";
    import {createPost, getFound} from "../../api/Index-api";
    import {getMyParticipate, uploadPictures} from "../../api/LogIn-api";

    export default {
        name: "Publish",
        data() {
            return {

                list: [],
                isActive: -1,
                categoryId: "",
                title: "",
                intro: "",
                coverImgUrl: {},
                fileList: []

            }
        },

        methods: {

            afterRead(file) {
                // 此时可以自行将文件上传至服务器

                this.coverImgUrl = file

            },
            onClickLeft() {
                // Toast('返回');
                this.$router.push("/index")
            },
            onClickRight() {
                uploadPictures(this.coverImgUrl.file, "BBS").then(res => {

                    console.log(res)
                    // categoryId, title, intro, coverImgUrl
                    createPost(this.categoryId, this.title, this.intro, res.url).then(res => {
                        // console.log(this.categoryId)
                        // console.log( res)

                        if (res.code == 0) {
                            getMyParticipate().then(res => {
                                console.log(res)
                                // this.list = res.rows
                            })
                            Toast('发布成功');
                            this.$router.push("/index")
                        } else {
                            console.log(res)
                            Toast('发布失败');
                        }

                    })
                })

            },
            //单击变色
            activeSpecial(index, categoryId) {

                this.isActive = index

                this.categoryId = categoryId
                console.log(this.categoryId)
            }
        },
        created() {
            getFound(1, 15).then(res => {
                // console.log(res)
                if (res.code == 0) {
                    this.list = res.rows

                }
            })


        }
    }
</script>

<style scoped lang="less">
    /deep/ .van-field__body {
        input {
            border: 1px solid #666666;
            border-radius: 5px;
            height: 35px;
        }
    }

    /deep/ .van-uploader {
        margin-left: 20px;
    }

    /deep/ .van-field__contro {
        color: #666666;
    }

    /deep/ .van-cell__value--alone {
        color: #666666;
    }

    .specialBox {
        /*display: flex;*/
        width: 100%;
        /*flex-direction: row;*/

        border: 1px solid black;
        border-color: transparent;
        margin-top: 20px;
        overflow: hidden;

        li {
            height: 40px;
            width: 15%;
            border: 1px solid #84a9ac;
            float: left;

            text-align: center;
            line-height: 40px;
            font-size: 16px;


            margin: 0px 15px 10px 5px;
            border-radius: 5px;

        }
    }

    .active {
        background-color: #3b6978;
        color: #e4e3e3;
    }
</style>