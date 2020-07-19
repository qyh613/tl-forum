<template>
    <div></div>
</template>

<script>
    import {changePost} from "../../../api/LogIn-api";

    export default {
        name: "changePost",
        created() {
            changePost().then(res=>{
                console.log(res)
            })
        }
    }
</script>

<style scoped>

</style>