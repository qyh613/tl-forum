<template>
    <div>
        <div class="headNav">
            <div class="HeaderTab">
                <van-tabs v-model="active" animated>
                    <van-tab title="新闻">
                        <NewsList />
                    </van-tab>
                    <van-tab title="推荐">
                        <Recommend categoryId=""/>
                    </van-tab>
                    <van-tab title="发现">
                        <Found />
                    </van-tab>
                    <van-tab title="音乐">
                        <Study />
                    </van-tab>
                </van-tabs>
            </div>
            <router-link tag="div" class="search" to="search">
                <van-icon name="search" />
            </router-link>

            <!--        <router-view></router-view>-->
        </div>
        <van-share-sheet :value="showShare" title="立即分享给好友" :options="options" @cancel="cancel"
                         @click-overlay="clickOverlay"/>


            <div class="Indexswipe" v-show="isCancel" >
                <a href="https://alimarket.tmall.com/markets/alimama/mingdian?ali_trackid=19_d756e2df449bbc24ed1bb28f4fadff8e&spm=a21bo.2017.201863-2.1" target="_blank" >
                    <img src="https://aecpm.alicdn.com/simba/img/TB1X6uHLVXXXXcCXVXXSutbFXXX.jpg"></a>
                <div class="cancel" @click="cancelAdv">
                    <van-icon name="close"/>
                </div>
            </div>



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
        data() {
            return {
                active: 1,
                isCancel:true,
                options: [
                    [
                        { name: '微信好友', icon: 'wechat' },
                        { name: '朋友圈', icon: 'wechat' },
                        { name: 'QQ好友', icon: 'qq' },
                        { name: 'QQ空间', icon: 'qq' },
                        { name: '新浪微博', icon: 'weibo' },
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
            NewsList,
            Recommend,
            Found,
            Study
        },
        computed:{
            ...mapState(["showShare"])
        },
        methods: {
            cancelAdv() {
                this.isCancel = false
            },
            cancel() {
                this.$store.commit("changeShare", {showShare: false})
            },
            clickOverlay() {
                this.$store.commit("changeShare", {showShare: false})
            }
        }
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

    .Indexswipe {
        position: fixed;
        bottom: 60px;
        left: 0;
        background-color: #2c3e50;
        width: 100%;
        height: 140px;
        /*background: url("");*/
        img{
            width: 100%;
            height: 100%;
        transition: t;
        }

        .cancel {
            position: absolute;
            z-index: 100;
            top: 0;
            left: 0;
            i{
                font-size: 25px;
            }
        }
    }
</style>