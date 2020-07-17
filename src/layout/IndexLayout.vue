<template>

    <!-- 通用样式 +++++ 路由的跳转 -->
    <div>
        <router-view/>

        <van-tabbar route>
            <van-tabbar-item replace to="/index" icon="home-o">
                首页
            </van-tabbar-item>
            <van-tabbar-item replace icon="add">
                发布
            </van-tabbar-item>
<!--                        <van-tabbar-item replace to="/mine" icon="friends-o">-->
            <van-tabbar-item replace icon="friends-o" @click="IsLogIn">
                我的
            </van-tabbar-item>
        </van-tabbar>
    </div>

</template>

<script>
    import {mapState} from "vuex";

    export default {
        name: "IndexLayout",
        data() {
            return {
                show: false
            }
        },
        methods: {
            IsLogIn() {
                if(this.isLogin){
                    this.$router.push("/mine/personalDetails")
                }else {
                    this.$router.push("/mine/login")
                }
            }
        },

        computed:{
            ...mapState(["isLogin"])
        }
    }
</script>

<style scoped lang="less">
    /deep/ .van-icon-add::before {
        color: #3483f6;
        font-size: 35px;
    }
</style>