<template>
    <div>

        <!--            <router-link to="personalDetails">-->
        <!--                <van-icon name="arrow-left" style="margin-top: 20px ; font-size: 20px ;color: #3483f6"/>-->
        <!--                <span style="color: #3483f6;font-size: 18px">返回</span>-->
        <!--            </router-link>-->
        <van-nav-bar
                title="修改个人信息"
                left-text="返回"

                left-arrow
                @click-left="onClickLeft"

        />
        <div class="change-box">
            <h2>修改个人信息</h2>
            <div class="photo">

                <div class="photo-img">
                    <van-image
                            round
                            width="5rem"
                            height="5rem"
                            :src="userInfo.avatar"
                            @click="changeAvatar"
                    />

                    <input type="file" style="display: none" @change="uploadImg" ref="img"> <van-icon name="photograph"/>
                    <p style="font-size: 16px">

                    </p>
                </div>
                <div class="cell-box">
                    <van-field label="昵称" v-model="userInfo.userName"/>
                    <van-field label="手机号" :value="userInfo.phonenumber"/>
                    <van-field label="电子邮箱" v-model="userInfo.email"/>

                    <van-radio-group v-model="radio" direction="horizontal">
                        <van-radio name="0">男</van-radio>
                        <van-radio name="1">女</van-radio>
                    </van-radio-group>

                </div>
                <button class="sumbit" @click="onSumbit">提交</button>
            </div>
        </div>
    </div>
</template>


<script>
    import {changeImg, changeUserInfo, getUserInfo} from "../../../api/LogIn-api";
    import {Toast} from "vant";
    // import {Toast} from "vant";

    export default {
        name: "ChangeUserInfo",
        data() {
            return {
                userInfo: {},
                radio: '',
            }
        },
        // methods:{
        //
        // },
        created() {
            // 获取个人信息
            getUserInfo().then(res => {
                // console.log(res.data.sex)
                this.userInfo = res.data
                this.radio = res.data.sex
            })
            // changeUserInfo().then(res => {
            //     console.log(res)
            // })
        },
        methods: {
            onClickLeft() {
                // Toast('返回');
                this.$router.push("/mine/personalDetails")
            },

            onSumbit() {
                // 修改个人信息接口

                // console.log(this.radio)
                this.userInfo.sex = this.radio

                // console.log(this.userInfo.sex)
                // eslint-disable-next-line
                // debugger
                changeUserInfo(this.userInfo).then(res => {
                    // console.log(res)
                    if (res.code == 0) {
                        getUserInfo().then(res => {
                            // console.log(res.data)
                            this.userInfo = res.data
                            Toast('修改成功');
                        })
                    }
                })
            },
            //图片
            changeAvatar() {
                this.$refs.img.click()
            },
            uploadImg(e){
                // console.log(e)
                // console.log(e.target.files[0])
                changeImg(e.target.files[0]).then(()=>{
                    // console.log(res)
                    getUserInfo().then(res => {

                        this.userInfo = res.data
                        // console.log(this.userInfo.sex)
                    })
                })
            }
        },

    }
</script>

<style scoped lang="less">
    .change-box {
        text-align: center;

    }

    h2 {
        margin-top: 50px;

    }

    .photo {
        /*width: 100%;*/
        height: 200px;
        /*border: 1px solid black;*/
        text-align: center;
        /*border-bottom: 1px solid #6666;*/

        .photo-img {
            margin-top: 20px;
            /*position: relative;*/

            border-color: transparent;

            img {
                height: 100px;
                width: 100px;
                /*border: 1px solid black;*/
                margin-top: 20px;
                border-radius: 5px;


            }

            i {
                font-size: 20px !important;
                color: #3483f6;
            }
        }
    }

    /deep/ .van-radio__icon {
        margin-left: 100px;

    }

    /deep/ .van-radio-group--horizontal {
        margin-top: 20px;
    }

    .sumbit {
        width: 250px;
        height: 30px;
        background-color: #3483f6;
        outline: none;
        border-radius: 10px;
        border: none;
        /*margin-left: 55px;*/
        margin-top: 20px;
        color: #ffffff;
        cursor: pointer;
    }

</style>