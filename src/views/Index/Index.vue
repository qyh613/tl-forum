<template>
    <div>
        <div class="headNav">
            <van-tabs v-model="active" animated scrollspy>
                <!--            <van-tab title="关注" to="/index/Attention"></van-tab>-->
                <!--            <van-tab title="推荐" to="/index/Recommend"></van-tab>-->
                <van-tab title="关注">
                    <Attention />
                </van-tab>
                <van-tab title="推荐">
                    <Recommend />
                </van-tab>
                <van-tab title="热榜">
                    <HotList />
                </van-tab>
            </van-tabs>
            <router-link tag="div" class="search" to="search">
                <van-icon name="search" />
            </router-link>

            <!--        <router-view></router-view>-->
        </div>
    </div>
</template>

<script>
    import Attention from "./components/Attention";
    import Recommend from "./components/Recommend";
    import HotList from "./components/HotList";

    export default {
        name: "Index",
        data() {
            return {
                active: 1
            }
        },
        components: {
            Attention,
            Recommend,
            HotList
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