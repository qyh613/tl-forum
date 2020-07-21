<template>
    <div class="PlayBox">
        <dvi class="PlayBgc"></dvi>
        <PlayHeader :name="songinfo.title"/>
        <MinImg :ImgSrc="songinfo.pic_radio" :rotating="rotating"/>
        <Lyrics :content="Lyricscontent.content" v-if="Lyricscontent.content"/>
        <Operation/>
        <div class="Audio">
            <audio ref="audio" :src="bitrate.show_link" controls></audio>
        </div>
    </div>
</template>

<script>
    // 播放主体内容*************************
    import PlayHeader from "./components/PlayHeader";
    import MinImg from "./components/MinImg";
    import {getLyrics, getSongDetails} from "../../api/Musice-api";
    import Operation from "./components/Operation";
    import Lyrics from "./components/Lyrics";
    import {mapState} from "vuex";

    export default {
        name: "Play",
        components: {
            PlayHeader,
            MinImg,
            Operation,
            Lyrics
        },
        data() {
            return {
                songinfo: {},
                bitrate: {},
                Lyricscontent: {},
                rotating: false
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
            ...mapState(["process","currentTime"])
        },
        watch: {
            process() {
                this.$refs.audio.currentTime = this.process;
            }
        }

    }
</script>

<style scoped lang="less">
    /*.PlayBox {*/
    /*    background-color: #cccccc;*/
    /*}*/
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
        padding: 20px 0px 0px;
        text-align: center;
        position: fixed;
        left: 50%;
        bottom: 21px;
        margin-left: -150px;

    }
</style>