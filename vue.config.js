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

        }
    },

}