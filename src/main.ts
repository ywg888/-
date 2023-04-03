import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"

// 引入通用样式
import "./assets/style/base.scss"
// 单独引入el图标
import * as ElIcons from "@element-plus/icons-vue"
// 单独引入ElMessage样式
import "element-plus/theme-chalk/src/message.scss"
// 单独引入loading样式
import "element-plus/theme-chalk/el-loading.css"
// 中文
import ElementPlus from "element-plus"
import zhCn from "element-plus/es/locale/lang/zh-cn"

// 导入请求拦截器
import { Request } from "@/api/request"
import VueAxios from "vue-axios"

const app = createApp(App)
for (const name in ElIcons) {
	app.component(name, (ElIcons as any)[name])
}

createApp(App)
	.use(store)
	.use(router)
	.use(VueAxios, Request.init())
	.use(ElementPlus, {
		locale: zhCn,
	})
	.mount("#app")
