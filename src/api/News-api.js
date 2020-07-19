

import request from "../utils/http";


//  轮播图
export function NewsSwipe() {
    return request.post("/api/cms/article/open/banner/list")
}


//  新闻tab切换列表
export function listCart(pageNum,pageSize) {
    const listCart = new FormData
    listCart.append("pageNum",pageNum)
    listCart.append("pageSize",pageSize)
    return request.post(`/api/cms/category/open/list`,listCart)
}



//列表分类
export function listDetail(pageNum,pageSize,categoryId) {
    const url=`/api/cms/article/open/list?pageNum=${pageNum}&pageSize=${pageSize}&categoryId=${categoryId}`;
    return request.post(url)
}


//新闻详情
export function newsDetail(articleId) {
    return request.get(`/api/cms/article/open/detail/${articleId}`)
}

