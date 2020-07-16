<template>
    <div>
        <form action="/">
            <van-search v-model="value" show-action placeholder="请输入搜索关键词"
                    @cancel="onCancel" autofocus type="search"/>
        </form>
    </div>
</template>

<script>
    // 搜索页****************************************
    // import { Toast } from 'vant';
    export default {
        name: "Search",
        data() {
            return {
                value: '',
            };
        },
        methods: {
            onCancel() {
                this.$router.push("/index")
            },
        },
    }
</script>

<style scoped lang="less">

</style>