<template>
    <div>
        <ul class="TheLyrics" ref="lsit">
            <li v-for="(item,index) in geci" :key="index" @click="setProess(item.time)" :class="index==active?'active':''">
                {{item.contentStr}}
            </li>
        </ul>
    </div>
</template>

<script>
    // 播放页歌词组件***********************
    import {mapState} from "vuex";

    export default {
        name: "Lyrics",
        data() {
            return {
                geci: [],
                active: 0,
                noScroll:false,
                timeoutId:null,

            }
        },
        methods:{
            setProess(time){
                this.$store.commit("setProess",{process:time})
            }
        },
        props: {
            content: [String],
        },
        computed: {
            ...mapState(["currentTime"])
        },
        watch: {
            currentTime() {
                // eslint-disable-next-line
                // debugger
                for (let i = 0; i < this.geci.length;i++){

                    if(this.geci[i].time>this.currentTime){
                        if(i>0){
                            this.active = i-1;
                        }

                        if(!this.noScroll){
                            this.$refs.lsit.scrollTop=this.$refs.lsit.children[this.active].offsetTop-60;
                        }
                        break
                    }
                }

            }
        },
        created() {
            let lrcContent = this.content.replace(/\r/g,'').split("\n");

            let reg = /\[\d*:\d*\.\d*\]/g;

            if (!this.content.match(reg)) {
                this.geci = lrcContent.map(item => {
                    return {
                        time: -1,
                        contentStr: item
                    }
                })
                return
            }


            lrcContent.forEach(item => {
                const content = item.match(reg)
                if (content) {
                    content.forEach(timeItem => {
                        // 分钟
                        let min = Number(timeItem.match(/\[\d*/)[0].replace("[", ''));
                        let mec = Number(timeItem.match(/:\d*/)[0].replace(":", ''));
                        let time = min * 60 + mec;

                        let contentStr = item.replace(reg, '')

                        if(contentStr){
                            this.geci.push({
                                time,
                                contentStr,
                            })
                        }
                    })
                }
            })


        },
        mounted() {
            this.$refs.lsit.addEventListener("touchstart",()=>{
                if(this.timeoutId){
                    clearTimeout(this.timeoutId)
                }
                this.noScroll = true;
            });
            this.$refs.lsit.addEventListener("touchend",()=>{
                this.timeoutId = setTimeout(()=>{
                    this.noScroll = false
                },2000)
            });
        }
    }
</script>

<style scoped lang="less">
    .TheLyrics {
        height: 180px;
        text-align: center;
        overflow: scroll;
        margin: 50px 0 0;
        position: relative;
        .active {
            font-size: 18px;
            color:  lightcoral;
        }
    }
</style>