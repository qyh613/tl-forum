<template>
    <div class="OperationBtn">
        <div class="Operation">
            <van-icon :name="pitch?'like-o':'like'" @click="active"/>
            <van-icon name="down"/>
        </div>
    </div>
</template>

<script>
    import {Dialog, Toast} from 'vant';

    export default {
        name: "Operation",
        data() {
            return {
                pitch: true,

            }
        },
        methods: {
            active() {
                if (this.pitch) {
                    this.pitch = !this.pitch
                    Toast({
                        message: '收藏成功',
                        icon: 'like-o',
                    });
                } else {
                    Dialog.confirm({
                        message: '您确定要取消关注吗',
                    })
                        .then(() => {
                            this.pitch = !this.pitch
                        })
                        .catch(() => {
                        });
                }
            },
        },
    }
</script>


<style scoped lang="less">
    .OperationBtn {
        position: fixed;
        left: 0;
        bottom: 30px;
        width: 100%;
        .Operation {
            display: flex;
            justify-content: space-between;
            font-size: 25px;
            padding: 10px;
            margin-top: 25px;
        }
    }

</style>
