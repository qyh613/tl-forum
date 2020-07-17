<template>
    <div class="mine-box">
        <!--        这是我的页面-->
        <!--        <p>测试</p>-->

        <p>天亮论坛</p>


        <van-form @submit="onSubmit">
            <van-field
                    v-model="username"
                    name="用户名"
                    label="用户名"
                    placeholder="用户名"
                    :rules="[{ required: true, message: '请填写用户名' }]"

            />
            <van-field
                    v-model="password"
                    type="password"
                    name="密码"
                    label="密码"
                    placeholder="密码"
                    :rules="[{ required: true, message: '请填写密码' }]"
            />
            <div style="margin: 16px;">
                <div style="margin-bottom: 10px; font-size: 16px">
                    <router-link style="margin-right: 50px" to="register">注册</router-link>
                    <router-link to="Forget">忘记密码</router-link></div>
                <van-button round block type="info" native-type="submit">
                    登录
                </van-button>
            </div>
        </van-form>


    </div>
</template>

<script>

    import { Toast } from 'vant';
    import {loginApi} from "../../../api/LogIn-api";

    export default {
        name: "Login",
        data() {
            return {
                username: '',
                password: '',
            };
        },
        methods: {
            onSubmit() {
                loginApi(this.username, this.password).then(res => {
                    console.log(res)
                    if (res.code==0){
                        Toast.success('登陆成功');
                        this.$router.push("personalDetails")
                    }

                })
            },

        }

    }
</script>
<style scoped lang="less">
    .mine-box {
        background-color: #f2f2f2;
        width: 100%;
        height: 100vh;
        text-align: center;
        overflow: hidden;

        p {
            margin-top: 50px;
            font-size: 32px;
            margin-bottom: 30px;
        }

    }


    .submit {
        background-color: #3483f6;
    }

    .reset {
        border: 1px solid #999999;
    }

    .van-cell__value {
        border-radius: 10px;
        border: 1px solid black;
    }

</style>

