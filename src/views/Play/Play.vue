<template>
    <div class="PlayBox">
        <div class="PlayBgc"></div>
        <PlayHeader :nameTitle="songinfo.title"/>
        <MinImg :ImgSrc="songinfo.pic_radio" :rotating="rotating"/>
        <Lyrics :content="Lyricscontent.content" v-if="Lyricscontent.content"/>
        <div class="Audio">
            <audio ref="audio" :src="bitrate.show_link" controls></audio>
        </div>
        <div class="Operation">
            <van-icon :name="pitch?'like-o':'like'" @click="active" :class="pitch?'':'colorRed'"/>
            <van-icon name="play-circle-o" @click="startPlaying" v-show="Playing" class="fontSize"/>
            <van-icon name="pause-circle-o" @click="suspendedPlaying" v-show="!Playing" class="fontSize"/>
            <a :download="songinfo.title" :href="bitrate.file_link" @click.prevent="download(bitrate.file_link)" >
                <van-icon name="down"/>
            </a>
        </div>
    </div>
</template>

<script>
    // 播放主体内容*************************
    import PlayHeader from "./components/PlayHeader";
    import MinImg from "./components/MinImg";
    import {getLyrics, getSongDetails} from "../../api/Musice-api";
    import Lyrics from "./components/Lyrics";
    import {mapState} from "vuex";
    import {Dialog, Toast} from "vant";

    export default {
        name: "Play",
        components: {
            PlayHeader,
            MinImg,
            Lyrics
        },
        data() {
            return {
                songinfo: {},
                bitrate: {},
                Lyricscontent: {},
                rotating: false,
                pitch: true,
                Playing: true
            }
        },
        created() {
            getSongDetails(this.$route.params.songid).then(res => {
                this.songinfo = res.songinfo
                this.bitrate = res.bitrate
                getLyrics(res.songinfo.lrclink).then(res => {
                    this.Lyricscontent = res
                })
            });
        },
        mounted() {
            this.$refs.audio.addEventListener("timeupdate", () => {
                // console.log(this.$refs.audio.currentTime)
                this.$store.commit("setCurrentTime", {currentTime: this.$refs.audio.currentTime})
            });
            this.$refs.audio.addEventListener("play", () => {
                this.rotating = true
            });
            this.$refs.audio.addEventListener("pause", () => {
                this.rotating = false
            });
        },
        computed: {
            ...mapState(["process", "currentTime"])
        },
        watch: {
            process() {
                this.$refs.audio.currentTime = this.process;
            }
        },
        methods: {
            startPlaying() {
                this.$refs.audio.play()
                this.Playing = !this.Playing
            },
            suspendedPlaying() {
                this.$refs.audio.pause()
                this.Playing = !this.Playing
            },
            active() {
                if (this.pitch) {
                    this.pitch = !this.pitch
                    Toast({
                        message: '收藏成功',
                        icon: 'like-o',
                    });
                } else {
                    Dialog.confirm({
                        message: '您确定要取消收藏吗',
                    })
                        .then(() => {
                            this.pitch = !this.pitch
                        })
                        .catch(() => {
                        });
                }
            },
            async download (url){
                let response = await fetch(url)
                // 内容转变成blob地址
                let blob = await response.blob()
                // 创建隐藏的可下载链接
                let objectUrl = window.URL.createObjectURL(blob)
                let a = document.createElement('a')
                //地址
                a.href = objectUrl
                //修改文件名
                a.download = this.songinfo.title
                // 触发点击
                document.body.appendChild(a)
                a.click()
                //移除
                setTimeout(() => document.body.removeChild(a), 1000)
            }
        }

    }
</script>

<style scoped lang="less">

    .PlayBgc {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        background-color: #f1f3f4;
    }

    .Audio {
        audio {
            display: none;
        }
    }

    /*.OperationBox {*/
    /*    */
    /*}*/
    .Operation {
        position: fixed;
        left: 0;
        bottom: 0;
        display: flex;
        justify-content: space-around;
        font-size: 28px;
        padding: 10px;
        width: 100%;
        margin-bottom: 5px;

        .fontSize {
            font-size: 32px;
        }

        .colorRed {
            color: red;
        }
    }

</style>