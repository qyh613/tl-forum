<template>
    <div>
        <form action="/">
            <van-search v-model="keyWord" show-action placeholder="请输入搜索关键词"
                    @cancel="onCancel" autofocus type="search" @search="search"/>
        </form>
        <div class="history">
            <div v-for="(item,index) in list" :key="index">
                <span>{{item}}</span>
                <van-icon name="delete" @click="delRecord(index)"/>
            </div>
            <div class="all"><span @click="removeAll">清除全部</span></div>
        </div>
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
                list:[]
            };
        },
        methods: {
            onCancel() {
                this.$router.push("/index")
            },
            search(){
                console.log(this.keyWord)
                this.list.push(this.keyWord)
                console.log(this.list)
                localStorage.setItem("keyWord",JSON.stringify(this.list))
            },
            // 删除一个
            delRecord(index){
                this.list.splice(index,1)
                localStorage.setItem("keyWord",JSON.stringify(this.list))
            },
            // 删除所有
            removeAll(){
                localStorage.removeItem("keyWord")
                this.list=[]
            }
        },
        created() {
            this.list=JSON.parse(localStorage.getItem("keyWord"))
            if(this.list==null){
                this.list=[]
            }
        }
    }
</script>

<style scoped lang="less">
    .history {
        padding: 0 12px;
        i{
            float: right;
            &:hover{
                cursor: pointer;
            }
        }
    }
    .all {
        text-align: center;
        padding: 10px 0;
        span{
            &:hover{
                cursor: pointer;
            }
        }
    }
</style>