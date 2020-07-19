<template>
    <div>
        <NewsListSwipe />
        <NewsTab />
    </div>
</template>

<script>
    // 这是新闻页***************************************************************

    import NewsListSwipe from "./components/NewsListSwipe";
    import NewsTab from "./components/NewsTab";
    export default {
        name: "NewsList",
        components:{
            NewsListSwipe,
            NewsTab
        },

    }
</script>

<style scoped lang="less">

</style>