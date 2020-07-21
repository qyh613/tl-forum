module.exports={
    devServer: {
        open: true,
        contentBase: 'src',
        port: 4000,
        hot: true,
        proxy: {
            "/api": {
                target: "https://showme.myhope365.com",
                changeOrigin: true,
            },
            "/v1/restserver/ting": {
                target: "http://tingapi.ting.baidu.com",
                changeOrigin: true,
            },
            "/music":{
                target:"http://music.taihe.com",
                changeOrigin: true,
                pathRewrite: {
                    '^/music': ''
                }
            },
        }
    },

}