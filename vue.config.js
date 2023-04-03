const { defineConfig } = require('@vue/cli-service')
// element-plus配置
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

module.exports = defineConfig({
	transpileDependencies: true,
	// element-plus配置
	configureWebpack: {
		plugins: [
			AutoImport({
				resolvers: [ElementPlusResolver()],
			}),
			Components({
				resolvers: [ElementPlusResolver()],
			}),
		],
	},
	// 跨域代理设置
	devServer: {
		proxy: {
			'/api': {
				target: 'http://localhost:3000/',
				changOrigin: true,
			},
		},
		allowedHosts: ['www.wps.net'],
	},
	chainWebpack: (config) => {
		config.plugin('html').tap((args) => {
			args[0].title = '金山表单'
			return args
		})
	}
})

