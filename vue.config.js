module.exports={
    devServer: {
        open: true,
        contentBase: 'src',
        port: 4000,
        hot: true,
        proxy: {
            "/api": {
                target: "http://59.111.104.104:8086",
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            },

        }
    },

}