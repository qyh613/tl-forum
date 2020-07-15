



import axios from 'axios'

const instance = axios.create({
    baseURL: '',
    timeout: 100000,
    // headers: { 'X-Custom-Header': 'foobar' }
});



// 添加请求拦截器
instance.interceptors.request.use(function (config) {
    return config;
}, function (error) {
    return Promise.reject(error);
});



// 添加响应拦截器
instance.interceptors.response.use(function (response) {
    if (response.status === 200) {
        return response.data
    }
    return response;
}, function (error) {
    return Promise.reject(error);
});


export default instance