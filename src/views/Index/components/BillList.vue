<template>
    <div>
        <div class="billBox">
            <ul>
                <router-link v-for="item in songList" :key="item.song_id" :to="'/play/'+item.song_id" tag="li">
                    <img :src="item.pic_big">
                    <p>{{item.title}}</p>
                </router-link>
            </ul>
        </div>
    </div>
</template>


<script>
    /* 音乐 */
    import {getBillList} from "../../../api/Musice-api";

    export default {

        props: {
            type: {
                type: String
            },
            size: {
                type: Number,
                default: 6
            }
        },
        data() {
            return {
                songList: [],
                // songid:''
            }
        },
        created() {
            getBillList(this.type, this.size).then(res => {
                this.songList = res.list
            })
        },

    }
</script>


<style lang="less" scoped>
    .billBox {
        padding: 5px 10px;
        margin-bottom: 10px;
        background-color: #fff;

        ul {
            display: flex;
            flex-wrap: wrap;

            li {
                padding: 5px;
                width: calc(100% / 3);
                box-sizing: border-box;
                font-size: 13px;
                color: #696969;

                img {
                    width: 100%;
                }

                p {
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                }
            }
        }
    }
</style>