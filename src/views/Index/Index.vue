<template>
    <div>
        <div class="headNav">
            <div class="HeaderTab">
                <van-tabs v-model="active" animated @change="changeActive">
                    <van-tab title="新闻">
                        <NewsList/>
                    </van-tab>
                    <van-tab title="推荐">
                        <Recommend categoryId=""/>
                    </van-tab>
                    <van-tab title="发现">
                        <Found/>
                    </van-tab>
                    <van-tab title="音乐">
                        <Study/>
                    </van-tab>
                </van-tabs>
            </div>
            <router-link tag="div" class="search" to="search">
                <van-icon name="search"/>
            </router-link>

            <!--        <router-view></router-view>-->
        </div>
        <van-share-sheet :value="showShare" title="立即分享给好友" :options="options" @cancel="cancel"
                         @click-overlay="clickOverlay"/>
    </div>
</template>

<script>
    import Recommend from "./components/Recommend";
    import Found from "./components/Found";
    import {mapState} from "vuex";
    import NewsList from "../News/NewsList";
    import Study from "./components/Music";

    export default {
        name: "Index",
        created() {
            // eslint-disable-next-line no-debugger
            // debugger
            if(this.$route.query.active){
                this.active = Number(this.$route.query.active)
            }
        },
        data() {
            return {
                active: 1,

                options: [
                    [
                        {name: '微信好友', icon: 'wechat'},
                        {name: '朋友圈', icon: 'wechat'},
                        {name: 'QQ好友', icon: 'qq'},
                        {name: 'QQ空间', icon: 'qq'},
                        {name: '新浪微博', icon: 'weibo'},
                    ],
                    [
                        {name: '复制链接', icon: 'link'},
                        {name: '分享海报', icon: 'poster'},
                        {name: '二维码', icon: 'qrcode'},
                    ],
                ],
            }
        },
        components: {
            NewsList,
            Recommend,
            Found,
            Study
        },
        computed: {
            ...mapState(["showShare"])
        },
        methods: {

            cancel() {
                this.$store.commit("changeShare", {showShare: false})
            },
            clickOverlay() {
                this.$store.commit("changeShare", {showShare: false})
            },
            changeActive(){
                    this.$router.push({query: {active: this.active}})
            }
        },

    }
</script>

<style scoped lang="less">
    .headNav {
        /*display: flex;*/
        position: relative;

        .HeaderTab {
            /deep/ .van-tabs--line .van-tabs__wrap {
                /*height: 44px;*/
                padding-right: 60px;
            }
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