


import request from '../utils/http'

//  帖子列表
export function getPostList(pageNum,pageSize,categoryId){
    const formData = new  FormData()
    formData.append("pageNum",pageNum)
    formData.append("pageSize",pageSize)
    formData.append("categoryId",categoryId)
    return request
        .post("/api/bbs/bbsPosts/open/list",formData)
}




// 帖子详情
export function getPostDetails(postsId){
    return request
        .get(`/api/bbs/bbsPosts/open/detail/${postsId}`)
}

// 帖子评论
export function getPostComment(postsId){
    const PostComment = new  FormData()
    PostComment.append("postsId",postsId)
    return request
        .post('/api/bbs/bbsComment/open/list',PostComment)
}


// 帖子评论回复
export function getPostReply(parentId) {
    const PostReply = new  FormData()
    PostReply.append("parentId",parentId)
    return request
        .post('/api/bbs/bbsComment/open/reply/list',PostReply)
}



// 发现页
export function getFound(pageNum,pageSize) {
    const Found = new  FormData()
    Found.append("pageNum",pageNum)
    Found.append("pageSize",pageSize)
    return request.post('/api/bbs/bbsCategory/open/list',Found)
}