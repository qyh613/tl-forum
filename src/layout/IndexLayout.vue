<template>

    <!-- 通用样式 +++++ 路由的跳转 -->
    <div>
        <router-view/>

        <van-tabbar route>
            <van-tabbar-item replace to="/index" icon="home-o">
                首页
            </van-tabbar-item>
            <van-tabbar-item replace icon="add" @click="popUp">
                发布
            </van-tabbar-item>
            <!--                        <van-tabbar-item replace to="/mine" icon="friends-o">-->
            <van-tabbar-item replace icon="friends-o" @click="IsLogIn">
                我的
            </van-tabbar-item>
        </van-tabbar>

        <van-overlay :show="release" @click="release = false">
            <div style="margin-top: 500px;margin-left: 45%">
              <router-link to="/publish"><van-icon name="comment" class="messageIcon" /></router-link>
            </div>
        </van-overlay>

    </div>

</template>

<script>
    import {mapState} from "vuex";

    export default {
        name: "IndexLayout",
        data() {
            return {
                show: false,
                release: false
            }
        },
        methods: {
            IsLogIn() {
                if (this.isLogin) {
                    this.$router.push("/mine/personalDetails")
                } else {
                    this.$router.push("/mine/login")
                }
            },
            popUp() {
                console.log(1)
                this.release = true
            }
        },

        computed: {
            ...mapState(["isLogin"])
        }
    }
</script>

<style scoped lang="less">
    /deep/ .van-icon-add::before {
        color: #3483f6;
        font-size: 35px;

    }

    .messageIcon {
        color: #3483f6;
        font-size: 48px;
    }
    /deep/.van-tabbar--fixed {
        position: fixed;
        bottom: -1px;
        left: 0;
        height: 65px;
    }
</style>