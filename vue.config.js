const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  devServer: {
    port: 8081 ,
    proxy: {
    '/ShoppingWebService': {
      target: 'https://shopping.yahooapis.jp',
      changeOrigin: true,
      pathRewrite: { '^/ShoppingWebService': '/ShoppingWebService/V3/itemSearch' },
    },
  },
},
transpileDependencies: true,

}
