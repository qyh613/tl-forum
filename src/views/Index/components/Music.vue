<template>
    <div>
        <BillList type='2' :size='18'/>
    </div>
</template>

<script>
    import BillList from "./BillList";

    export default {
        name: "Music",
        components:{
            BillList
        }
    }
</script>

<style scoped lang="less">

</style>