<template>
    <div>
        <van-tabs v-model="active" animated scrollspy>
            <van-tab title="关注" to="Attention"></van-tab>
            <van-tab title="推荐" to="Recommend"></van-tab>
            <van-tab title="关注" to="Attention"></van-tab>
            <van-tab title="推荐" to="Recommend"></van-tab>
            <van-tab title="关注" to="Attention"></van-tab>
            <van-tab title="推荐" to="Recommend"></van-tab>
            <van-tab title="关注" to="Attention"></van-tab>
            <van-tab title="推荐" to="Recommend"></van-tab>
            <van-tab title="关注" to="Attention"></van-tab>
            <van-tab title="推荐" to="Recommend"></van-tab>
            <van-tab title="关注" to="Attention"></van-tab>
            <van-tab title="推荐" to="Recommend"></van-tab>
        </van-tabs>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "Index",
        data() {
            return {
                active:1
            }
        },
    }
</script>

<style scoped lang="less">

</style>