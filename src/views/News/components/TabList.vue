<template>
    <div class="Box">
        <div v-for="(item,index) in lsit" :key="index" class="NewsTabList" @click="linkDetails(item.articleId)">
            <div class="ImgBox">
                <img :src="item.bannerImgUrl" alt="">
            </div>
            <div class="contentBox">
                <h4 class="title">{{item.title}}</h4>
                <p>来源：{{item.articleSource}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import {listDetail} from "../../../api/News-api";

    export default {
        name: "TabList",
        props: {
            categoryId: [Number]
        },
        data() {
            return {
                lsit: []
            }
        },
        created() {
            // tab 详情
            listDetail(1, 10, this.categoryId).then(res => {
                this.lsit = res.rows
            })
        },
        methods:{
            linkDetails(articleId){
                this.$router.push("newsDetails/"+articleId)
            }
        }
    }
</script>

<style scoped lang="less">
    .Box {
        padding-bottom: 50px;
        .NewsTabList {
            display: flex;
            padding: 5px 10px;
            .ImgBox {
                width: 30%;
                height: 70px;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
            .contentBox {
                width: 70%;
                padding-left: 5px;
                .title {
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
            }
        }
    }


</style>