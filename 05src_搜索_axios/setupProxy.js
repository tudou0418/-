const proxy = require('http-proxy-middleware')


module.exports = function (app) {
    app.use(
        proxy('/api1', {//遇见api1 前缀的请求 就会触发 该代理配置
            target:'http://localhost:5000',//请求 转发 给谁
            changeOrigin: true,//默认值false  控制服务器收到的响应头中Host字段的值
            pathRewrite:{'^/api1':''}//重写请求路径（必须）
        }),

    )
}