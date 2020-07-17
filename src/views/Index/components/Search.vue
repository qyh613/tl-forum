<template>
    <div>
        <form action="/">
            <van-search v-model="keyWord" show-action placeholder="请输入搜索关键词"
                    @cancel="onCancel" autofocus type="search" @focus="value"/>
        </form>
        <Recommend :keyWord="keyWord"/>
    </div>
</template>

<script>
    // 搜索页****************************************

    // import { getPostSearch} from "../../../api/Index-api";
    import Recommend from "./Recommend";

    export default {
        name: "Search",
        components:{
            Recommend
        },
        data() {
            return {
                keyWord: '',
            };
        },
        methods: {
            onCancel() {
                this.$router.push("/index")
                // console.log(input)

            },
            value(){
                // console.log(this.keyWord)
                // getPostSearch(value).then(res=>{
                //     console.log(res)
                // })
            }

        },
    }
</script>

<style scoped lang="less">

</style>