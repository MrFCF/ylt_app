module.exports = {
    css: {
      loaderOptions: {
        // 给 sass-loader 传递选项
        sass: {
          // @/ 是 src/ 的别名
          // 所以这里假设你有 `src/variables.scss` 这个文件
          // data: `@import "./src/lib/hotcss/px2rem.scss";`
          data: `@import "./src/assets/style/main.scss";`
        }
      }
    },
    devServer: {
      // 设置主机地址
      host: 'localhost',
      // 设置默认端口
      port: 8080,
      // 设置代理
      open:true,
      proxy: {
          '/api': {
              // 目标 API 地址
              target: 'http://yapi.demo.qunar.com',
              // 如果要代理 websockets
              ws: true,
              // 将主机标头的原点更改为目标URL
              changeOrigin: true,
              pathRewrite: {
                '^/api': '/mock/76265/'
              }
          }
      }
  }
}