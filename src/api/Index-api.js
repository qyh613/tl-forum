


import request from '../utils/http'

//  帖子列表
export function getPostList(){
    // const formData = new  FormData()
    // formData.append("")
    return request
        .post("/api/bbs/bbsPosts/open/list")
}