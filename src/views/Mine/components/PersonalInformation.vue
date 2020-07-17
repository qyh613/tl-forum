<template>
    <div>
<!--        <router-link to="personalDetails">-->
<!--            <van-icon name="arrow-left" style="margin-top: 20px ; font-size: 20px ;color: #3483f6" />-->
<!--            <span style="color: #3483f6;font-size: 18px">返回</span>-->
<!--        </router-link>-->
        <van-nav-bar
                title="个人详情"
                left-text="返回"

                left-arrow
                @click-left="onClickLeft"

        />
        <div class="photo">

            <div class="photo-img"><img :src="userInfo.avatar">
                <van-icon name="photograph"/>

            </div>
            <div class="cell-box">
                <van-cell title="用户名" :value="userInfo.loginName"/>
                <van-cell title="手机号" :value="userInfo.phonenumber"/>
                <van-cell title="电子邮箱" :value="userInfo.email"/>
                <van-cell title="性别" :value="userInfo.sex==0?'男':'女' "/>

            </div>
        </div>
    </div>
</template>

<script>
    import {getUserInfo} from "../../../api/LogIn-api";
    import {Toast} from "vant";

    export default {
        name: "PersonalInformation",
        data() {
            return {
                userInfo: {}
            }
        },
        created() {
            getUserInfo().then(res => {

                this.userInfo = res.data
                console.log(this.userInfo.sex)
            })
        },
        methods: {
            onClickLeft() {
                Toast('返回');
                this.$router.push("/personalDetails")
            },
        },
    }
</script>

<style scoped lang="less">

    .photo {
        width: 100%;
        height: 200px;
        /*border: 1px solid black;*/
        text-align: center;
        /*border-bottom: 1px solid #6666;*/

        .photo-img {
            position: relative;
            border-radius: 50%;
            border-color: transparent;
            img {
                height: 100px;
                width: 100px;
                /*border: 1px solid black;*/
                margin-top: 20px;


            }

            i {
                font-size: 20px !important;
                color: #3483f6;
            }
        }
    }

    p {
        font-size: 24px;
        color: #222831;
        margin-top: 10px;


    }

    .cell-box {
        /*border: 1px solid black;*/
        margin-top: 50px;
    }

    .van-cell {
        font-size: 16px;
    }
    /deep/.van-cell__title{
        /*width: 50px;*/
        text-align: left;

    }
    /deep/.van-cell__value{
        text-align: left;
    }
</style>