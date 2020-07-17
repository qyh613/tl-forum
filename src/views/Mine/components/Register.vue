<template>
    <div>
<!--        <router-link to="mine">-->
<!--            <van-icon name="arrow-left" style="margin-top: 20px ; font-size: 20px ;color: #3483f6" />-->
<!--            <span style="color: #3483f6;font-size: 18px">返回</span>-->
<!--        </router-link>-->
        <van-nav-bar
                title="注册"
                left-text="返回"

                left-arrow
                @click-left="onClickLeft"

        />

        <h1 class="header">欢迎注册论坛账号</h1>


        <!-- 输入任意文本 -->
        <div class="content">
            <van-field v-model="userName" label="用户名"/>
            <van-field v-model="loginName" label="账号"/>
            <!-- 输入密码 -->
            <van-field v-model="password" type="password" label="密码"/>
            <van-field v-model="passwordOne" type="password" label="确认密码"/>
            <!-- 输入手机号，调起手机号键盘 -->
            <van-field
                    v-model="tel"
                    center
                    clearable
                    label="短信验证码"
                    placeholder="请输入手机号"
            >
                <template #button>
                    <van-button size="small" type="primary"  @click="onCode">发送验证码</van-button>
                </template>
            </van-field>
<!--            <van-field v-model="tel" type="tel" label="手机号" class="tel"/>-->
<!--            <button class="getCode" @click="onCode">获取验证码</button>-->
            <!-- 允许输入正整数，调起纯数字键盘 -->
            <van-field v-model="code" type="number" label="验证码"/>

            <!-- 允许输入数字，调起带符号的纯数字键盘 -->
            <!--            <van-field v-model="number" type="number" label="数字"/>-->
            <button class="regist" @click="onRegist">立即注册</button>
        </div>
    </div>
</template>

<script>
    import {getCode, getRegister} from "../../../api/LogIn-api";
    import {Toast} from "vant";


    export default {
        name: "Register",

        data() {
            return {
                userName: '',
                loginName: '',

                password: '',
                passwordOne: '',
                tel: '',
                code: '',

            };

        },

        methods: {

            onClickLeft() {
                Toast('返回');
                this.$router.push("/mine")
            },
            onRegist(){
                // loginName,phonenumber, code, password, userName
                getRegister(this.loginName,this.tel,this.code,this.password,this.userName,).then(res=>{
                    if (res.code==0){
                        Toast.success('注册成功');
                        this.$router.push("mine")
                    }

                })
            },
            onCode(){
                getCode(this.tel).then(res=>{
                    if (res.code==0){
                        Toast.success('获取验证码成功');
                        // this.$router.push("personalDetails")
                    }

                    console.log(res)

                })
            }
        }
    }
</script>

<style scoped lang="less">
    .header {
        margin-top: 30px;
        font-size: 36px;
        margin-left: 3px;
        overflow: hidden;
    }

    .content {
        margin-top: 20px;
    }

    /deep/ .van-field__control {
        border: 1px solid black;
        border-radius: 5px;
        height: 30px;
        width: 80%;
        padding-left: 5px;

    }

    /deep/ .van-field__label {
        font-size: 18px;
        width: 6.2em;
        margin-right: 12px;
        color: #646566;
        text-align: right
    }

    .regist {
        width: 250px;
        height: 30px;
        background-color: #3483f6;
        outline: none;
        border-radius: 10px;
        border: none;
        margin-left: 55px;
        margin-top: 20px;
        color: #ffffff;
    }
    .getCode{
        width: 100px;
        height: 30px;
        /*background-color: #3483f6;*/
        outline: none;
        border-radius: 2px;
        /*border: none;*/
        float: right;
        margin-right: 40px;
        /*margin-top: 20px;*/
    }

</style>