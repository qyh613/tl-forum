<template>
    <!--    忘记密码-->
    <div>
        <!--        <router-link to="mine">-->
        <!--            <van-icon name="arrow-left" style="margin-top: 20px ; font-size: 20px ;color: #3483f6" />-->
        <!--            <span style="color: #3483f6;font-size: 18px">返回</span>-->
        <!--        </router-link>-->
        <van-nav-bar
                title="找回密码"
                left-text="返回"

                left-arrow
                @click-left="onClickLeft"

        />
        <div class="forget-box">

            <h1>找回密码</h1>
            <div class="content">
                <!--                <van-field v-model="userName" label="用户名"/>-->
                <van-field v-model="loginName" label="账号"/>
                <!-- 输入密码 -->
                <van-field v-model="password" type="password" label="新密码"/>
                <!--                <van-field v-model="passwordOne" type="password" label="确认密码"/>-->
                <!-- 输入手机号，调起手机号键盘 -->
                <van-field
                        v-model="tel"
                        center
                        clearable
                        label="短信验证码"
                        placeholder="请输入手机号"
                >
                    <template #button>
                        <van-button size="small" type="primary" @click="onCode">{{texts}}</van-button>
                    </template>
                </van-field>
                <!--                <van-field v-model="tel" type="tel" label="手机号" class="tel"/>-->
                <!--                <button class="getCode" @click="onCode">获取验证码</button>-->
                <!-- 允许输入正整数，调起纯数字键盘 -->
                <van-field v-model="code" type="number" label="验证码"/>

                <!-- 允许输入数字，调起带符号的纯数字键盘 -->
                <!--            <van-field v-model="number" type="number" label="数字"/>-->
                <button @click="forget" class="regist">找回密码</button>
                <!--                <p style="margin-top: 10px">我已阅读并接受《天亮论坛用户服务协议》、《隐私政策》</p>-->


            </div>
        </div>
    </div>
</template>

<script>
    import {getCode, getForget} from "../../../api/LogIn-api";
    import {Toast} from "vant";

    export default {
        name: "Forget",
        data() {
            return {

                loginName: '',

                password: '',
                // passwordOne: '',
                tel: '',
                code: '',
                count: '',
                timer: null,
                texts: '获取验证码',

            }
        },
        methods: {
            onClickLeft() {
                // Toast('返回');
                this.$router.push("/mine")
            },
            onCode() {

                getCode(this.tel).then(res => {
                    if (res.code == 0) {
                        const TIME_COUNT = 60;
                        if (!this.timer) {
                            this.count = TIME_COUNT;
                            this.texts = this.count + 'S后重新获取';
                            this.timer = setInterval(() => {
                                if (this.count > 0 && this.count <= TIME_COUNT) {
                                    this.count--;
                                    this.texts = this.count + 'S后重新获取';

                                } else {
                                    clearInterval(this.timer);
                                    this.timer = null;
                                    this.texts = '重新获取';
                                }
                            }, 1000)
                        }

                        Toast.success('获取验证码成功');
                        // this.$router.push("personalDetails")
                    } else {
                        Toast.success('请输入手机号或手机号以被注册');
                    }

                    // console.log(res)

                })
            },

            // loginName,phonenumber, code, password,
            forget() {
                getForget(this.loginName, this.tel, this.code, this.password).then(res => {
                    console.log(res)
                    if (res.code == 0) {
                        Toast.success('找回密码成功');
                        // this.$router.push("personalDetails")
                    }else {
                        Toast.success(res.msg);
                    }

                })

            }
        }
    }
</script>

<style scoped lang="less">
    .forget-box {
        text-align: center;
        overflow: hidden;

        h1 {
            margin-top: 20px;
        }
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

</style>