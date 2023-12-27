const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  devServer: {
    port: 8080,
    https: false,
    host: 'localhost'
  },
  transpileDependencies: [
    'vuetify'
  ],
  pwa: {
    name: 'Vue Front SPA'
  }
})
