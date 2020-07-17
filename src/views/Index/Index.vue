<template>
    <div>
        <div class="headNav">
            <van-tabs v-model="active" animated >
                <van-tab title="关注">
                    <Attention />
                </van-tab>
                <van-tab title="推荐">
                    <Recommend categoryId=""/>
                </van-tab>
                <van-tab title="发现">
                    <Found />
                </van-tab>
            </van-tabs>
            <router-link tag="div" class="search" to="search">
                <van-icon name="search" />
            </router-link>

            <!--        <router-view></router-view>-->
        </div>
        <van-share-sheet v-model="share" title="立即分享给好友" :options="options" @cancel="cancel"/>
    </div>
</template>

<script>
    import Attention from "./components/Attention";
    import Recommend from "./components/Recommend";
    import Found from "./components/Found";
    import {mapState} from "vuex";

    export default {
        name: "Index",
        data() {
            return {
                active: 1,
                options: [
                    [
                        { name: '微信', icon: 'wechat' },
                        { name: '微博', icon: 'weibo' },
                        { name: 'QQ', icon: 'qq' },
                    ],
                    [
                        { name: '复制链接', icon: 'link' },
                        { name: '分享海报', icon: 'poster' },
                        { name: '二维码', icon: 'qrcode' },
                    ],
                ],
            }
        },
        components: {
            Attention,
            Recommend,
            Found
        },
        computed:{
            ...mapState(["share"])
        },
        methods:{
            cancel(){
                console.log(1)
                // this.$store.commit("changeShare",{share:false})
            }
        }
    }
</script>

<style scoped lang="less">
    .headNav {
        /*display: flex;*/
        position: relative;

        /deep/ .van-tabs--line .van-tabs__wrap {
            height: 44px;
            padding-right: 60px;

        }

        .search {
            position: absolute;
            top: 0;
            right: 0;
            font-size: 30px;
            height: 44px;
            width: 40px;
            line-height: 50px;
            text-align: center;
            color: #6e6d6d;
        }
    }
</style>