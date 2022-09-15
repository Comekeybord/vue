const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {//配置proxy代理
    proxy: 'https://www.escook.cn'
  }
})
