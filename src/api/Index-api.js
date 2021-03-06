import request from '../utils/http'

//  帖子列表
export function getPostList(pageNum, pageSize, categoryId) {
    const formData = new FormData()
    formData.append("pageNum", pageNum)
    formData.append("pageSize", pageSize)
    formData.append("categoryId", categoryId)
    formData.append("orderByColumn", "postsId")
    formData.append("isAsc", "desc")
    return request
        .post("/api/bbs/bbsPosts/open/list", formData)
}
export function getPostSearch(title){
    const Search = new  FormData()
    // Search.append("pageNum",pageNum)
    // Search.append("pageSize",pageSize)
    Search.append("title",title)
    return request
        .post("/api/bbs/bbsPosts/open/list",Search)
}


// 帖子详情
export function getPostDetails(postsId) {
    return request
        .get(`/api/bbs/bbsPosts/open/detail/${postsId}`)
}

// 帖子评论
export function getPostComment(postsId) {
    const PostComment = new FormData()
    PostComment.append("postsId", postsId)
    return request
        .post('/api/bbs/bbsComment/open/list', PostComment)
}


// 帖子评论回复
export function getPostReply(parentId) {
    const PostReply = new FormData()
    PostReply.append("parentId", parentId)
    return request
        .post('/api/bbs/bbsComment/open/reply/list', PostReply)
}


// 回复评论
export function getReplyComments(postsId,parentId,commentContent) {
    const Reply = new  FormData()
    Reply.append("postsId",postsId)
    Reply.append("parentId",parentId)
    Reply.append("commentContent",commentContent)
    return request
        .post('/api/bbs/bbsComment/site/reply/add',Reply)
}


//  发布回复
export function getComments(postsId,commentContent) {
    const Comments = new  FormData()
    Comments.append("postsId",postsId)
    Comments.append("commentContent",commentContent)
    return request
        .post('/api/bbs/bbsComment/site/add',Comments)
}

// 发现页    专题列表
export function getFound(pageNum, pageSize) {
    const Found = new FormData()
    Found.append("pageNum", pageNum)
    Found.append("pageSize", pageSize)
    return request.post('/api/bbs/bbsCategory/open/list', Found)
}


//创建帖子  Create a post    Create a post    /api/bbs/bbsPosts/site/add
export function createPost(categoryId, title, intro, coverImgUrl) {
    const formData = new FormData()
    formData.append("categoryId", categoryId)
    formData.append("title", title)
    formData.append("intro", intro)
    formData.append("coverImgUrl", coverImgUrl)
    return request
        .post('/api/bbs/bbsPosts/site/add',formData)
}