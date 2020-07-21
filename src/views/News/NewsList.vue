<template>
    <div>
        <NewsListSwipe />
        <NewsTab />
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
    // 这是新闻页***************************************************************

    import NewsListSwipe from "./components/NewsListSwipe";
    import NewsTab from "./components/NewsTab";
    export default {
        name: "NewsList",
        data(){
            return{
                isCancel:true,
            }
        },
        methods:{
            cancelAdv() {
                this.isCancel = false
            },
        },
        components:{
            NewsListSwipe,
            NewsTab

        },

    }
</script>

<style scoped lang="less">
    .Indexswipe {
        position: fixed;
        /*bottom: 60px;*/
        top: 40%;
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