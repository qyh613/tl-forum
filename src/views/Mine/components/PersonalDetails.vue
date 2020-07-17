<template>
    <div class="personalDetails-Box">
        <van-nav-bar
                title="个人主页"
                left-text="返回"

                left-arrow
                @click-left="onClickLeft"

        />

        <h1>欢迎来到天亮论坛</h1>
        <div class="photo">

            <div class="photo-img">

                <img :src="userInfo.avatar">
<!--                <van-icon name="photograph"/>-->
                <p>{{userInfo.userName}} </p></div>
        </div>
        <van-cell title="查看个人信息" is-link to="personalInformation" />

        <van-cell title="修改个人信息" is-link to="changeUserInfo" />
        <van-cell title="我参与的" is-link to="participate" />
        <van-cell title="退出登录" @click="logOut"/>
    </div>
</template>

<script>
    import {getUserInfo} from "../../../api/LogIn-api";
    import {Toast} from "vant";
    import Dialog from "vant/lib/dialog";
    import {mapState} from "vuex";
    // import {mapState} from "vuex";


    export default {
        name: "PersonalDetails",
        data() {
            return {
                userInfo: {}
            }
        },

        created() {
            getUserInfo().then(res => {
                console.log(res)
                this.userInfo = res.data
            })
        },
        methods: {
            onClickLeft() {
                Toast('返回');
                this.$router.push("/index")
            },
            // onClickRight() {
            //     Toast('按钮');
            // },
            logOut(){

                Dialog.alert({
                    title: "退出",
                    message: '确定退出',
                })
                .then(() => {
                    // logOut().then(res => {
                    //     console.log(res)
                    // //     if (res.data.code == 0) {
                    // //         //    退出成功
                    // //         this.$store.commit('changeLogin', {isLogin:false})
                    // //         this.$router.push('/mine')
                    // //
                    // //     }
                    // })

                    //     // on confirm
                    })
                    .catch(() => {
                        // on cancel
                    });
            }
        },
        computed:{
            ...mapState(['isLogin'])
        }
    }
</script>

<style scoped lang="less">
    .personalDetails-Box {
        height: 100vh;
        /*background-color: #f1f9f9;*/

        overflow: hidden;
        h1{
            margin-top: 20px;
            margin-left:10px;
        }
    }

    .photo {
        width: 100%;
        height: 200px;
        /*border: 1px solid black;*/
        text-align: center;
        /*border-bottom: 1px solid #6666;*/

        .photo-img {
            position: relative;

            img {
                height: 100px;
                width: 100px;
                /*border: 1px solid black;*/
                margin-top: 20px;
                border-radius: 20px;
                border-color: transparent;

            }

            i {
                font-size: 20px !important;
            }
        }

        p {
            font-size: 24px;
            color: #222831;
            margin-top: 10px;


        }
    }
    /deep/.van-cell__title{

    }
    /deep/.van-cell{
        font-size: 20px;
        /*border-color: #e1f2fb;*/
        /*border: 1px solid;*/
        border-radius: 5px;
        height: 60px;
      color: black;

    }

    /deep/.van-cell__label {
        margin-top: 4px;
        color: #969799;
        font-size: 16px;
        line-height: 18px;

    }
</style>