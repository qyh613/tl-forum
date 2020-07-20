import request from "../utils/http";

//登录
export function loginApi(userName, password) {
    const formData = new FormData();
    formData.append("username", userName)
    formData.append("password", password)


    formData.append("rememberMe", "false")
    return request.post("/api/login", formData)
}

//获取用户信息
export function getUserInfo() {
    return request.get('/api/login-user/info')
}


//修改个人信息接口
export function changeUserInfo(userInfo) {
    const formData = new FormData();
    formData.append("userName", userInfo.userName);
    formData.append("email", userInfo.email);
    formData.append("phonenumber", userInfo.phonenumber);
    formData.append("sex", userInfo.sex);
    formData.append("remark", userInfo.remark);

    return request.post('/api/system/user/profile/update', formData)
}
//注册
export function getRegister(loginName,phonenumber, code, password, userName) {
    const formData = new FormData();
    formData.append("userName", userName)
    formData.append("password", password)
    formData.append('loginName', loginName)
    formData.append("code", code)
    formData.append("phonenumber",phonenumber)
    return request.post("/api/registry/", formData)
}

//获取验证码
export function getCode(mobile) {
    return request.get(`/api/short-message/vcode/${mobile}`)
}
//找回密码

export function getForget(loginName,phonenumber, code, password,) {
    const formData = new FormData();

    formData.append("password", password)
    formData.append('loginName', loginName)
    formData.append("code", code)
    formData.append("phonenumber",phonenumber)
    return request.post("/api/password/forget/", formData)
}
//修改头像
export function changeImg(file) {
    const formData = new FormData();
    formData.append("avatarfile", file);
    return request.post('/api/system/user/profile/update/avatar/nos', formData)
}
//退出登录
export function  logOut() {
    return request.get(`/api/logout`)
}
//我参与的
export function  getMyParticipate() {
    return request.post(`/api/bbs/bbsPosts/join/list`)
}
//修改帖子
export  function  changePost(postsId,title) {
    const formData = new FormData();
    formData.append("postsId", postsId);
    formData.append("title", title);
    // return request.post('/api/system/user/profile/update/avatar/nos', formData)
    return request.post(`/api/bbs/bbsPosts/site/edit?`,formData)

}
//删除帖子

export function deletepost(ids) {
    const formData=new FormData();
    formData.append('ids',ids);
    return request.post('/api/bbs/bbsPosts/site/remove',formData)
}


//上传图片
export  function uploadPictures (file,fileUseForEnum) {
    const formData=new FormData();
    formData.append('file',file);
    formData.append('fileUseForEnum',fileUseForEnum);
    return request.post('/api/nos/upload/image',formData)
}