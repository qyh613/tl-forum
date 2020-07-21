<template>
    <div>
        <ul>
            <router-link :to="{name:'FoundDetails',params:{categoryId:item.categoryId,name:item.name}}" tag="li" v-for="item in category" :key="item.categoryId">
                <img :src="item.cover" alt="" class="shopImg">
                <p>{{item.name}}</p>
            </router-link>
        </ul>
    </div>
</template>

<script>
    // 发现页**********************************************
    import {getFound} from "../../../api/Index-api";

    export default {
        name: "Found",
        data() {
            return {
                category: []
            }
        },
        created() {
            getFound(1, 15).then(res => {
                if (res.code == 0) {
                    this.category = res.rows
                    // console.log(this.category)
                }
            })
        }
    }
</script>

<style scoped lang="less">
    ul {
        display: flex;
        flex-wrap: wrap;
        padding: 20px 20px 60px;
        justify-content: space-between;

        li {
            padding: 10px 0;

            .shopImg {
                width: 100px;
                height: 100px;
                border-radius: 20px;
            }

            p {
                text-align: center;
            }
        }
    }

</style>