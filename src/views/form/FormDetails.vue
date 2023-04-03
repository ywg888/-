<template>
	<div class="details-page">
		<BaseHeader>
			<div class="nav-left-box" @click="$router.replace({ name: 'home_page' })">
				<img
					class="nav-back-img"
					width="20"
					height="20"
					src="../../assets/img/form/小于号.svg"
				/>
				<img
					class="nav-form-img"
					src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyNHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+5paH5qGj5qC85byP5Zu+5qCHL+ihqOWNlS8yNDwvdGl0bGU+CiAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSIgaWQ9ImxpbmVhckdyYWRpZW50LTEiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMzBBOEZGIiBvZmZzZXQ9IjAlIj48L3N0b3A+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMxMjdDRjEiIG9mZnNldD0iMTAwJSI+PC9zdG9wPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8L2RlZnM+CiAgICA8ZyBpZD0i5paH5qGj5qC85byP5Zu+5qCHL+ihqOWNlS8yNCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IuihqOWNlSI+CiAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUtMTkiIGZpbGw9InVybCgjbGluZWFyR3JhZGllbnQtMSkiIHg9IjAiIHk9IjAiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgcng9IjIiPjwvcmVjdD4KICAgICAgICAgICAgPGcgaWQ9Iue8lue7hC0xOCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNC43MTg3NTAsIDUuNTYyNTAwKSIgZmlsbD0iI0ZGRkZGRiI+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTMuMjUsMC40NTAwNjgxOTQgQzEzLjgxMDUwMzMsMC40NTAwNjgxOTQgMTQuMjY2NTY1NSwwLjg5NzIzMzUyOSAxNC4yODA5MDI0LDEuNDU0Mjc5OTkgTDE0LjI4MTI1LDEuNDgxMzE4MTkgTDE0LjI4MTI1LDEyLjQwODQxMzIgQzE0LjI4MTI1LDEyLjk2ODkxNjUgMTMuODM0MDg0NywxMy40MjQ5Nzg3IDEzLjI3NzAzODIsMTMuNDM5MzE1NyBMMi4yOTEzMTk5NSwxMy40Mzk2NjMyIEMxLjczMDgxNjY4LDEzLjQzOTY2MzIgMS4yNzQ3NTQ0NiwxMi45OTI0OTc5IDEuMjYwNDE3NTIsMTIuNDM1NDUxNCBMMS4yNjAwNjk5NSw2LjQ0NDg2NTcxIEwzLjI2OTA5NzAyLDYuNDQ0ODY1NzEgTDMuMjY5MDk3MDIsMTEuNDMyODU5MSBMMTIuMjgxMTg2OSwxMS40MzI4NTkxIEwxMi4yODExODY5LDIuNDYwODg3MyBMOS4xMTI1LDIuNDYwODg3MyBMNy40NTAyNTI4NCw0Ljk5NjY2Nzg4IEM3LjI4NDE5Njk0LDUuMjYxNzc3NTcgNi45OTcyOTE4Miw1LjQyNjAyMTc5IDYuNjg1OTQ2MTUsNS40MzYwMjgxNiBMNi42NTU3NDI4Niw1LjQzNjUxMzIzIEwwLjIwMjkxNjA2Niw1LjQzNjA2ODE5IEwxLjM0ODkxNjA3LDMuNDQ5MDY4MTkgTDYuMjQwNDY4NzUsMy40NDkzNDEzOCBMNy45MDI4NTYxOCwwLjg4OTkxMzU0NiBDOC4wNjg5MTIwNywwLjYyNDgwMzg2MiA4LjM1NTgxNzE5LDAuNDYwNTU5NjM2IDguNjY3MTYyODcsMC40NTA1NTMyNjkgTDEzLjI1LDAuNDUwMDY4MTk0IFoiIGlkPSLlvaLnirbnu5PlkIgiIGZpbGwtcnVsZT0ibm9uemVybyI+PC9wYXRoPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTUuODA3NzM5NTgsMC40Mzc1IEw1LjgwNzI1LDAuNDcyNSBMNC42NzYyNSwyLjQzMDUgTDEuMjgxMjUsMi40MzA1IEwyLjQzMjI1LDAuNDM3NSBMNS44MDc3Mzk1OCwwLjQzNzUgWiIgaWQ9IuW9oueKtue7k+WQiCI+PC9wYXRoPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4="
					width="30"
					height="30"
				/>
				<div class="nav-text">{{ title }}</div>
			</div>
		</BaseHeader>
		<div class="nav-big-box">
			<el-menu
				:default-active="activeIndex"
				class="el-menu-demo nav-container"
				mode="horizontal"
				@select="handleSelect"
			>
				<router-link :to="{ name: 'data_statistics', params: { id: id } }"
					><el-menu-item index="1" class="nav-item"
						><span>数据统计&分析</span
						><span
							:class="[activeIndex === '1' ? 'bottom-active-line' : null]"
						></span></el-menu-item
				></router-link>
				<router-link :to="{ name: 'question', params: { id: id } }"
					><el-menu-item index="2" class="nav-item"
						><span>表单问题</span
						><span
							:class="[activeIndex === '2' ? 'bottom-active-line' : null]"
						></span></el-menu-item
				></router-link>
				<router-link :to="{ name: 'share', params: { id: id } }"
					><el-menu-item index="3" class="nav-item"
						><span>分享</span
						><span
							:class="[activeIndex === '3' ? 'bottom-active-line' : null]"
						></span></el-menu-item
				></router-link>
			</el-menu>
		</div>
		<div class="middle-gap"></div>
		<div class="content-container">
			<div class="content">
				<router-view></router-view>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { formResult } from "@/api/api"
import BaseHeader from "@/components/BaseHeader.vue"
import { ElMenuItem } from "element-plus"
import { onBeforeMount, ref } from "vue"
import { onBeforeRouteUpdate, useRoute } from "vue-router"
let activeIndex = ref("1")
const handleSelect = (key: string, keyPath: string[]) => {
	activeIndex.value = keyPath[0]
}

// 获取传来的id
const route = useRoute()
let id = ref<string>("")
id.value = route.params.id as string
if (route.params.to === "question") {
	activeIndex.value = "2"
} else if (route.params.to === "share") {
	activeIndex.value = "3"
} else {
	activeIndex.value = "1"
}

// 根据id获取表单
let title = ref<string>("")
onBeforeMount(async () => {
	try {
		const res = await formResult(id.value)
		if (res.status === 200) {
			title.value = res.data.data.info.title
		}
	} catch (error) {
		console.log(error)
		console.log("请求服务器出错")
	}
})

// 路由要变的时候
onBeforeRouteUpdate((to, from, next) => {
	if (to.name === "data_statistics") {
		activeIndex.value = "1"
	}
	if (to.name === "question") {
		activeIndex.value = "2"
	}
	if (to.name === "share") {
		activeIndex.value = "3"
	}
	next()
})
</script>

<style scoped lang="scss">
// 整个详情页面
.details-page {
	width: 100vw;
	height: calc(100vh - 125px);
}
.nav-left-box {
	display: flex;
	align-items: center;
	cursor: pointer;
	* {
		margin-right: 10px;
	}
	.nav-text {
		font-size: 18px;
		font-weight: 500;
		color: #3c414b;
	}
}

// 导航部分的内容
.nav-big-box {
	border-bottom: 1px solid #e2e6ed;
	position: fixed;
	height: 52px;
	top: 56px;
	left: 0;
	right: 0;
	margin: auto;
	z-index: 100;
	background-color: #fff;
	.nav-container {
		width: 944px;
		height: 53px;
		display: flex;
		margin: 0 auto;
		.nav-item {
			display: flex;
			flex-direction: column;
			position: relative;
			.bottom-active-line {
				background-color: #1890ff;
				width: 100%;
				height: 2px;
				position: absolute;
				bottom: 4px;
			}
		}
	}
}
// 中间内容部分
.middle-gap {
	height: 125px;
	background-color: #f2f4f7;
}
.content-container {
	background-color: #f2f4f7;
	width: 100%;
	height: 100%;
	.content {
		width: 944px;
		background-color: #fff;
		margin: 0 auto;
	}
}
</style>
