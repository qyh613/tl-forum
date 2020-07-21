




import request from "../utils/http";

export function getBillList(type,size=6,offset=0){
    return request
        .get(`/v1/restserver/ting?method=baidu.ting.billboard.billList&size=${size}&type=${type}&offset=${offset}`)
        .then(res=>{
            return {
                ...res,
                list:res.song_list
            }
        })
}


// 歌曲详情lyrics
export function getSongDetails(songid){
    return request
        .get(`/v1/restserver/ting?method=baidu.ting.song.play&songid=${songid}`)
}

// 歌词详情
export function getLyrics(lrclink){
    return request
        .get(`/music/data/song/lrc?lrc_link=${lrclink}`)
}