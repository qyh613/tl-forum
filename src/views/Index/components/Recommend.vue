<template>
    <div>
        这是推荐也
    </div>
</template>

<script>
    // 推荐页*********************************************8
    import {getPostList} from "../../../api/Index-api";

    export default {
        name: "Recommend",
        created() {
            getPostList().then(res=>{
                console.log(res)
            })
        }
    }
</script>

<style scoped>

</style>