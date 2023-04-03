<template>
	<!-- 状态栏 -->
	<base-header>
		<!-- 状态栏-Logo -->
		<div class="base-header-logo" @click="returnHome">
			<div class="base-header-logo-icon">
				<img
					src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMzBweCIgaGVpZ2h0PSIzMHB4IiB2aWV3Qm94PSIwIDAgMzAgMzAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+MDUg5Zu+5qCHL+agvOW8j+Wbvuaghy/ooajljZUgMzBweC3lk4HniYxAMXg8L3RpdGxlPgogICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IHgxPSI1MCUiIHkxPSI1NC41MjIxMzM2JSIgeDI9IjgzLjUwMTEzMDMlIiB5Mj0iOTkuMjI5MzkyMSUiIGlkPSJsaW5lYXJHcmFkaWVudC0xIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzBENTlEMyIgb2Zmc2V0PSIwJSI+PC9zdG9wPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMDA3NUUzIiBvZmZzZXQ9IjEwMCUiPjwvc3RvcD4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgIDxwYXRoIGQ9Ik05LjgyNDI0MDA3LDEyLjEgTDE3LjE1NTQwNDcsMC4yNzYzMDU5ODIgTDIyLjM5NTg1MjgsLTMuNTI2NTY1NzFlLTEwIEwyMi4zOTU4NTI4LDIxLjE0OTIxODcgQzIyLjM5NTg1MjgsMjEuNjE5MDkyMyAyMi4wMzMwOTA2LDIyIDIxLjU4NTYwMDcsMjIgTDEuMjA2NTM0MzksMjIgQzAuNzU5MDQ0NTQ2LDIyIDAuMzk2MjgyMzU0LDIxLjYxOTA5MjMgMC4zOTYyODIzNTQsMjEuMTQ5MjE4NyBMMC4zOTU4NTI3NTUsMTIuMSBMOS44MjQyNDAwNywxMi4xIFoiIGlkPSJwYXRoLTIiPjwvcGF0aD4KICAgICAgICA8bGluZWFyR3JhZGllbnQgeDE9Ijk2LjQwMTQ4OTQlIiB5MT0iMzMuMzU3OTg4MiUiIHgyPSIyNS4xNzU4NzA5JSIgeTI9IjY0LjMwODkzNTIlIiBpZD0ibGluZWFyR3JhZGllbnQtNCI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMzNEIyRkYiIG9mZnNldD0iMCUiPjwvc3RvcD4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzAwODFGQyIgb2Zmc2V0PSIxMDAlIj48L3N0b3A+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgICAgICA8bGluZWFyR3JhZGllbnQgeDE9IjEwMy4zMzQ2MDElIiB5MT0iMzQuOTMwNjk1MyUiIHgyPSI2Mi44MTYyOTYzJSIgeTI9IjU0LjY3NDQwMzglIiBpZD0ibGluZWFyR3JhZGllbnQtNSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMxMjc1RUMiIG9mZnNldD0iMCUiPjwvc3RvcD4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzA3ODdGQyIgb2Zmc2V0PSIxMDAlIj48L3N0b3A+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KICAgIDxnIGlkPSIwNS3lm77moIcv5qC85byP5Zu+5qCHL+ihqOWNlS0zMHB4LeWTgeeJjCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9Iue8lue7hC0yIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMS4wMDAwMDAsIDQuMDAwMDAwKSI+CiAgICAgICAgICAgIDxnIGlkPSLnvJbnu4QiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQuNjA0MTQ3LCAwLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPG1hc2sgaWQ9Im1hc2stMyIgZmlsbD0id2hpdGUiPgogICAgICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BhdGgtMiI+PC91c2U+CiAgICAgICAgICAgICAgICA8L21hc2s+CiAgICAgICAgICAgICAgICA8dXNlIGlkPSLot6/lvoQiIGZpbGw9InVybCgjbGluZWFyR3JhZGllbnQtMSkiIHhsaW5rOmhyZWY9IiNwYXRoLTIiPjwvdXNlPgogICAgICAgICAgICAgICAgPGltYWdlIGlkPSLot6/lvoQiIG1hc2s9InVybCgjbWFzay0zKSIgeD0iMCIgeT0iMCIgd2lkdGg9IjIyLjY4IiBoZWlnaHQ9IjIxLjYiIHhsaW5rOmhyZWY9ImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQlVBQUFBVUNBWUFBQUJpUzNZekFBQUFCR2RCVFVFQUFMR09mUHRSa3dBQUFFUmxXRWxtVFUwQUtnQUFBQWdBQVlkcEFBUUFBQUFCQUFBQUdnQUFBQUFBQTZBQkFBTUFBQUFCQUFFQUFLQUNBQVFBQUFBQkFBQUFGYUFEQUFRQUFBQUJBQUFBRkFBQUFBQTFlenUrQUFBREdFbEVRVlE0RWFXVXoyNGNSUkRHditxZW5iV3RqZTA0T0pFaUl2a1FjakFTaDJ3azRNZ05DWVVvU0Q3eEdOeTRvTHhHWGlGdndJbG5DRmhDQ2dpUkJPenN2K3p1ek03T2JuZFg4WTJkZU0zTmRscGF6ZlJzOTYrL3F2cXFCUjh3cmgvOHVUV3RaMThCMlRVZ0FRNmx1TlIzVjJXYW1VeVh5MjhNMlJkaXFXdGU3bG5DTGFSV0o3c3FOSC84KzMzVDhBRGlkOGwzTGpxb3BOd01jaVdsTzkrLzJFd2hQUkpwM1JTMWJmVm9neTh3TEVWOGZXbG9FL1prTW44b1R1OG8wbzZLdEVVbEFscUk4K01ZUTNGcGFQdTc1NTh5eEM3TTdjQmt6WmtSYUlXcWpTVHBXeFpzZWlubzdzRmhKNW84Rmk4M1ZkQWhUT0IwNWd3amthd2ZFMGJZWENzdkJSMHQ4SWpWMkNQc2hoUEpHWExnZkVvdkRVUXh4THFmb0ZpZlh4amErdmJYQjdEMHRaai9tQUszWVVwYld1RkZldWEwRjZFRGlCVUk0K1dGb0kzSlZlVUhNZGtUMkVjQ2FhdVRCUlcramFaOUtoK2duYVpZeEJwYldiaVFUNHY1L0VjVDIyY0MyL1MxaWNqTXBWUXdqd09rTUVpSUkzNHZFV1FKN0tjc2UvamJFeFgzQ2J2aWpnSGJsTjVtWk1KRkZDTE5rNDdob01FTnJMRlkxVFNUTTNuRGxqeml5aDdjeG9qblZmaW5DdmdaeXJSd3VkRzR6RG9uN0FkdVlZd25Qek1WUXlJZ2tyb3crSUtoRDdudW1HY2M4WVJlcm40SXJVdThHaTZ4ZjhnTGdEZUJlcHVRTWFUdjJHSlNpeVoyQjYxeWZ0RHg1aEJGZFU1bEkvNzVMenhlMHZMSFZSYkcyTnlwOEZjWjhleEFHWmhsaEJ3bnRtNm1zV1FhT3F4a0Mra2s3Rk9zWi9PQmtXalQzVGJucmpIVXZ4SFIxekc2SG54ZW9PZ3ZzTjlOT0R6ZGtpWG4vdmFLZ2tvNmpIeU53VHA2WmFYVVBKbUprVnN5WnpVdFZhYTBuTUN0RDdDWmo0R3F4UFZ1d0ZPY3FHeXdHWE4vbEJSVHVGYk9qWFFETHhtTEsyaE9wWUZneC9LcEJJU2FWcElLMGMzUXIrYTROMS9nZG5PWk12dnZSb1liN05maFJvRVVNMTVqMUZqUk5HNEZqU3g2TTNOTVFSVVN0bllqeWpxaTB3LzQvTXVBdzJlR3A5MHpZTVBOc0pkWHVFWklzU0dZWllLNlpJRVp5ZnRoSmJCMjYzVFQ3VDhNZTU4cGZtR29uYnZOTjJOeCtGeXBiTFpSdy9sS1Axa3BmQTg5ZS81MFRzMy9JV2RMM3IzOEIrN3RwbDZibCt3MUFBQUFBRWxGVGtTdVFtQ0MiPjwvaW1hZ2U+CiAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPHBhdGggZD0iTTI3LDAgTDE4LjE3MzYzNTUsMTQuNjM0NTQxMiBDMTguMDExOTgzMSwxNC45MDI1Njg4IDE3LjcwODA3NDksMTUuMDM0ODM1NiAxNy40MTQyMjc2LDE0Ljk5MjEgTDEuMjUyMjc4LDE0Ljk5MjM5IEMxLjExMjk0ODcxLDE0Ljk5MjM5IDEsMTQuODgwMzA0OCAxLDE0Ljc0MjA0MDcgQzEsMTQuNjk2MTkzOCAxLjAxMjY4NjczLDE0LjY1MTIyNzIgMS4wMzY2NzY0MSwxNC42MTIwNDU1IEw0LjE1NjgwNTQ0LDkuNDQ4NzU4NjcgQzQuMjk0MDY5NjgsOS4yMjQ1Njg4NyA0LjUzOTI2MjAyLDkuMDg3Njk2NTcgNC44MDM2MTAyMiw5LjA4NzY5NjU3IEwxNC42OTk0MzIzLDkuMDg3NDg1NyBMMTkuOTE1NTMxMiwwLjM2OTQxMjY5OSBDMjAuMDUxNjMzMSwwLjE0MDQ4NzkyOCAyMC4yOTk1Mjk1LDAgMjAuNTY3Mzc0NCwwIEwyNywwIFogTTE1Ljc0NDc0ODEsMCBDMTUuODg1NzE5OCwwIDE2LDAuMTA0NjU5MjU5IDE2LDAuMjMzNzYyOTk5IEMxNiwwLjI3MjQ2MDQ3MSAxNS45ODk1MSwwLjMxMDU1MjY1MiAxNS45Njk0NzEzLDAuMzQ0NjIxODIxIEwxMi44NTk5NzAzLDUuNjMxMjg3NDcgQzEyLjcyNjM5NDQsNS44NTgzODg3MyAxMi40Njc0NjYzLDYgMTIuMTg1ODAwNiw2IEw2LjI1NTI1MTk1LDYgQzYuMTE0MjgwMTksNiA2LDUuODk1MzQwNzQgNiw1Ljc2NjIzNyBDNiw1LjcyODExNDYxIDYuMDEwMTgwNjMsNS42OTA1NzA2OCA2LjAyOTY1NDYzLDUuNjU2ODc3MjcgTDkuMDgzNDg5NjcsMC4zNzMyMDk4IEM5LjIxNjE5NDAyLDAuMTQzNjA4MTA3IDkuNDc2NjE4MDgsMCA5Ljc2MDI4MTYyLDAgTDE1Ljc0NDc0ODEsMCBaIiBpZD0i5b2i54q2IiBmaWxsPSJ1cmwoI2xpbmVhckdyYWRpZW50LTQpIj48L3BhdGg+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik00Ljc5MzMzMTQxLDkuMDg3NDg1NyBMMTQuNjk5NDMyMyw5LjA4NzQ4NTcgTDE0LjY5OTQzMjMsOS4wODc0ODU3IEwxMS41NDkyNTk1LDE1IEwxLjMwOTkwMTY3LDE0Ljk5Mzg4MzkgQzEuMTcwMTA0NjIsMTQuOTkzODAwNCAxLjA1Njg0NDQxLDE0Ljg4MDQwNDggMS4wNTY5Mjc5MSwxNC43NDA2MDc3IEMxLjA1Njk1NDk3LDE0LjY5NTMxNjMgMS4wNjkxMzM2OCwxNC42NTA4NjE2IDEuMDkyMTkzODUsMTQuNjExODgwMyBMNC4xMzk3NTQzNSw5LjQ2MDIyNDY4IEM0LjI3NjQyMzE0LDkuMjI5MTk3MDkgNC41MjQ5MDYxOCw5LjA4NzQ4NTcgNC43OTMzMzE0MSw5LjA4NzQ4NTcgWiIgaWQ9IuefqeW9oiIgZmlsbD0idXJsKCNsaW5lYXJHcmFkaWVudC01KSI+PC9wYXRoPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"
				/>
			</div>
			<h1 class="base-header-logo-title">金山表单</h1>
		</div>
	</base-header>
	<div class="home-container">
		<!-- 侧边栏 -->
		<aside class="home-sidebar-container">
			<!-- 侧边栏-按钮 -->
			<el-button class="home-sidebar-button" type="primary" @click="newForm">
				<img
					class="home-sidebar-button-icon"
					src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAXklEQVRYR+2XQQoAIAgE2/8/2uhQRNBBMSSYzqbDFCyqFR8Vz29hADOzHV5SqFfo0hgMAAYwgAEMpBs4G74OqZkdKwsAKDfgffP0TwgABjCAAQx8Z8ALfKsP74ZZAB3ic3AhrCWTvQAAAABJRU5ErkJggg=="
				/>
				新建
			</el-button>
			<!-- 侧边栏-菜单 -->
			<el-menu class="home-sidebar-menu" default-active="1">
				<el-menu-item class="home-sidebar-menu-item">
					<img
						class="home-sidebar-menu-icon"
						src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4IiB2aWV3Qm94PSIwIDAgMTYgMTYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+5Zu+5qCHLzE2cHgv5oiR5Yib5bu655qEPC90aXRsZT4KICAgIDxnIGlkPSLlm77moIcvMTZweC/miJHliJvlu7rnmoQiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxwYXRoIGQ9Ik0xMC41LDEgTDE0LDQuNSBMMTQsMTMgQzE0LDE0LjEwNDU2OTUgMTMuMTA0NTY5NSwxNSAxMiwxNSBMNCwxNSBDMi44OTU0MzA1LDE1IDIsMTQuMTA0NTY5NSAyLDEzIEwyLDMgQzIsMS44OTU0MzA1IDIuODk1NDMwNSwxIDQsMSBMMTAuNSwxIFogTTksNiBMNyw2IEw3LDcuOTk5IEw1LDggTDUsMTAgTDcsOS45OTkgTDcsMTIgTDksMTIgTDksOS45OTkgTDExLDEwIEwxMSw4IEw5LDcuOTk5IEw5LDYgWiIgaWQ9IuW9oueKtue7k+WQiCIgZmlsbD0iI0E1QjVDRSI+PC9wYXRoPgogICAgPC9nPgo8L3N2Zz4="
					/>
					<template #title>我创建的</template>
				</el-menu-item>
			</el-menu>
		</aside>
		<!-- 主体 -->
		<main class="home-main">
			<!-- 主体-状态栏 -->
			<div class="home-main-bar">
				<!-- 主体-状态栏-标题 -->
				<div class="home-main-bar-title">我创建的</div>
				<!-- 主体-状态栏-显示星标 -->
				<div
					class="home-main-bar-star"
					:class="{ active: isStarredOnly }"
					@click="toggleStarredList"
				>
					<span class="home-main-bar-star-icon"></span>
					<span class="home-main-bar-star-text">仅展示星标</span>
				</div>
			</div>
			<!-- 主体-表单列表 -->
			<section class="home-main-list">
				<home-list-item
					v-for="(itm, index) in formData"
					:key="itm.id"
					:formData="itm"
					:index="index"
					@delete-item="deleteItem"
					@copey-item="copyItem"
					@refresh="getAllList"
				>
				</home-list-item>
			</section>
		</main>
	</div>
</template>

<script setup lang="ts">
import { ElMenuItem } from "element-plus"
import { onBeforeMount, ref } from "vue"
import HomeListItem from "@/components/HomeListItem.vue"
import BaseHeader from "@/components/BaseHeader.vue"
import { getForm, getList } from "@/api/api"
import router from "@/router"
import { IForm, IListReq } from "@/api/type"

const formData = ref<IForm[]>()
const isStarredOnly = ref<boolean>(false)

// 加载全部表单
onBeforeMount(() => {
	getAllList()
})

// 获取表单
const getAllList = async () => {
	let length = 0
	let offset = 0
	const limit = 20
	let formListData = [] as IForm[]
	let params = { offset: offset, limit: limit } as IListReq
	// 根据isStarredOnly判断是否仅获取星标
	if (isStarredOnly.value) {
		params = { offset: offset, limit: limit, isStar: true }
	}
	// 循环取出所有表单
	do {
		try {
			const res = await getList(params)
			if (res.data.stat === "ok") {
				formListData.push.apply(formListData, res.data.data.items)
				length = res.data.data.total
			}
		} catch (err) {
			console.trace(err)
		}
		offset += limit
	} while (length === limit)
	formData.value = formListData
}

// 是否仅显示星标
const toggleStarredList = () => {
	isStarredOnly.value = !isStarredOnly.value
	getAllList()
}

// 删除表单回调
const deleteItem = async (deleteIndex: number) => {
	formData.value?.splice(deleteIndex, 1)
}

// 复制表单回调
const copyItem = async (copyId: string) => {
	try {
		const res = await getForm(copyId)
		if (res.data.stat === "ok") {
			formData.value?.push(res.data.data.item)
		}
	} catch (err) {
		console.trace(err)
	}
}

// 转跳欢迎界面
const returnHome = () => {
	router.push("/")
}

// 转跳新建表单
const newForm = () => {
	router.push("/new_form")
}
</script>

<style scoped lang="scss">
@import "@/assets/style/base.scss";

$border-color: #e2e6ed; // 边界颜色
$item-text-color: #3d4757; // 菜单字体颜色

// 状态栏-Logo
.base-header-logo {
	display: flex;
	align-items: center;
	line-height: 25px;
	justify-content: center;
	cursor: pointer;

	&-icon {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-right: 8px;
		width: 30px;
		height: 30px;
	}

	&-title {
		font-size: 18px;
		font-weight: 500;
		color: #3c414b;
		margin: 0.67em 0;
	}
}

/* 侧边栏 & 主体 */
.home-container {
	display: flex;
	flex-direction: row;
	padding-top: 60px;
	width: 100vw;
	overflow-x: auto;
}

/* 侧边栏 */
.home-sidebar-container {
	padding: 45px 15px 10px;
	border-right: 1px solid $border-color;
	min-width: 230px;
	height: calc(100vh - 120px);
	width: 170px;
}

// 侧边栏-按钮
.home-sidebar-button {
	height: 36px;
	display: flex;
	width: 100%;
	padding: 10px 15px;
	border-radius: 2px;

	&-icon {
		width: 16px;
		height: 16px;
		margin-right: 8px;
	}
}

// 侧边栏-菜单
.home-sidebar-menu {
	margin-top: 45px;
	justify-content: flex-start;
	border: none;

	&-item {
		height: 42px;
		color: #767c85;
		background-color: #f2f5fa;
		font-size: 12px;
		align-items: center;
		border-radius: 2px;
	}

	&-icon {
		width: 16px;
		height: 16px;
		margin-right: 12px;
	}
}

/* 主体 */
.home-main {
	width: calc(100vw - 300px);
	min-width: 1000px;
}

// 主体-状态栏
.home-main-bar {
	display: flex;
	align-items: center;
	justify-content: space-between;
	position: relative;
	margin: 30px 60px 0 40px;
	height: 54px;
	border-bottom: 1px solid $border-color;

	// 主体-状态栏-标题
	&-title {
		font-size: 16px;
		color: $item-text-color;
		min-width: none;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
}

// 主体-状态栏-显示星标
.home-main-bar-star {
	display: flex;
	align-items: center;
	flex-shrink: 0;
	cursor: pointer;

	&:hover:not(.active) {
		.home-main-bar-star-icon {
			background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEt0lEQVRYR8WWbWwUVRiFz5nZbVlo6X7NQiipUYkIwWhoI2qLoEL4YTBKhGAiGr8giiJCu1siP4wxsrPYCiR+oCExUTRB0RiMRgKiUYxCq5AUo5FApKS0nd2ZbSFtabvzmlksQr/YWQH37857znPvfe95L/E///hf/DXdfAVFgbixkmfy1ckbIFJn3Wz3yS8kNhix4PqrDhCOp/YCuJtEt9eDqS1rQ835QOS1AxN0676M2J+fNyS3J2PBh68KQPlW8Z6wzCYBbgCVOoq9UshCj6rOaq0uOegWwvUOaLq1SsTeDOKPGbcGZxw5YL0sIutI7jdiwaorClD2ZjrQddo+CpEgFC5MRoNfTNWl2BTzTwEmUMESIxr62A2Eqx3Q9NTrIlgNYm8yFpo3YBROpJbDxlaSx0t8gWlHV/FsrhA5AUzaKmP7LXO2Te6CQFW8nNm+NnB4wGTxDlG/PWb9KpCboDABb+Gm5AvjTuUCMQRgcr34ejPmLWKzHJAKgOUCTIOI6giS2GbEQk8OFo/o6fm2ZHb/ezPQArABZCMhDQq9DW01xe2D67IAmp5+AshUZs0E0wHxXPQh2UfgiCPIQu/69tVFbcOtTtPNdSIyz9EBpGTIN8TJrAbQoCjedx2gLEBEtxbZkB3nVkmbRBNEGkg2KlAbinzjD7s5VxFhZGPnFLEz5SArIFJOSIUARVkocrsRDSwjKeePIBxPPQXgnSyAIkvddvNo5z25vqu0p69nP0SuIfllmT9wf+MK9mVZLizU4matQDYA7FVU5d72Gv+eXBppdPOOYE9v//cAppP80esPzG9Zwa6BmiFNGNGtOlvsNQTOqPTc0xorOZAvxISNMs62zT0iuI1kk69YufPEM37rQr0hANnz0633BPIIwZTX46lqqR7/u1uIbGSnrV0issDJBykorBzuag6bA3P3iafpZ+tTQBaCbC7wSKWbafeSiPJGwtouIksJtKHAU2WsKTk63CJGDCInD872WV+LyGwCu43a0IJcd0FLWI+LbW8D0ElFmWNEA4dGqh01CbVEarHY2EHgM6M2tChXgHDcXArIRyQ+MWKhxaPVjQoQjqfWAKgjsNmoDa3OFSAST91hA/tBHEjGQrPyBtDiqU0CPK8Q1e2xUF2uAKV61+Sz0t1M4JRRG5qUP4Ce2imCRSONWS1uVqE4cGjwo9QZTvuOWT0g1Mi1gTG/LWFvXj0Q1lMHIahQ6bm9LVbykyPiXK/mjvRDIlIjIjNApgm8BRZsMaJFrQNG4bj5FyBlqqpe11bjP54XgBZPtToPDR/HlBb6xp7p7DKX24DTC6X/CHYCGH8u3p03AN/3qmqdkxuabv4gIpVQlLnJaOA71wBTtkhhutvqPlfIeojtzIoBsyaAr5X5/R+e7OycaWf6awR8ABAFpADYBREHslxRuay9JviBa4BIIn29bWcuDg9yHwUbjdrgV4MFtfqOKdKXWUvIoyLwnc96hS8a0eCrrgEm6tZd/WJ/AzJDYKeoSiJZ7W+81E2YuOW0Znf1PivgSoGEQL6djAWfdg2g6ekHAXuOoij1ozXRSMLOM66vw3oMghuNWPA51wCXWunl+j+nR+nlMnM1jK6k6YXafwNA+vswyJnq/AAAAABJRU5ErkJggg==");
		}

		.home-main-bar-star-text {
			color: $primary-font-color;
		}
	}

	&-icon {
		background-size: 16px 16px;
		background-position: 50%;
		background-repeat: no-repeat;
		width: 16px;
		height: 16px;
		background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAE0UlEQVRYR8WWfWxTVRjGn/fcu64IGwHiR8RgokQZwWjYEtBtbUGwt44tSqy9BYYBZIlRFFESifyxGCMGHYImfsyQkOyjHXMSKKwtYa7rxCwwFJIZMJgQGRGGMUJXB1vb85pbGMK+aCvC+fPe8z7v77znnOe8hDs86L/kt9jd74vcSR+GGj+PZqqTMcC8Rcsej8fjPxLTpnDQs/G2A1g0vYWZ54NwibLp0fBub3cmEBlVwKLpZcy8ezAhEerCgYZltwWgoqIi6/jpSBeYHyGgCqBXGZwtSJ3TFqg7nC5E2hWwavrrknkbCL8oc/NmcceJ9yTzBhAOtgcaiv5XgJKSJZMi8cSvACYrCkpDzQ17y8pW5lzo7zvJ4HsF4cW2QENjOhBpVcBid33CwFoQtbQHvAsGE1k0VwUzviLg1HhxT57f/1l/qhApAZSWVtx1IRYtBksfCIqqqrNb99YeG0zidO5UenqbfmLGYxDYDJm1tT1YezYViGEATueb4873nntCkswnpgIw54OQxwzFECSi7eGA9+Wh4tZn3QtlQu7/9zv9ToROIj7CrHSaxymd+3fVnB8alwSwaPoqZi4EUT4xz2RAvXEixQj8syGomsTGlj2enpFWV6y5NxB4gQHNwMRhyYjOMHMnCXSazaavDaCrAK7FAHYmV0kkAXQRG/R0RKrUOSEx5Vg6+8rMZC1dOl3EkS85UcBXFlbAwIQrVURdm99bTkR8bQusDn21lFxtAAiwnu5pHmu/5y9aPjUWHzgI5geJ0Dxj2sTnqqurY0mY6wMtmusdZmwCYUBhpSQUrD+QykEaa47duWpyX2+0HYyZBPphoil3oc9X3XfNRYcGF2vuKrBcR0CUs5Sn2/fWH8oU4pny8vGX/xg4wIy5BHTlqIpl3776v67XG3YLkvun6TsYWE6gP4WJikI+z4l0IQzLPnH6oo8ZdsMfGFmFI13NEX3AVlmpyo7j3zKjlEDdMKMwndeusrJStHQcrwNDJ1CPyFaLQntqDQcdNkY1IsMPenrPBpm5mIj2hwNee6pVsDj0lSx5O4giihDWUHP90dFix3RCq+ZySsZOItoVDniNq5rSsGlL9AQnPCD6pj3gdY4VdDOAdZJRRUJsC/s9a1PKbhhbif4Ux/kggQ6Fg945GQNYHO6tLOUbJMTbYb+nKlUAm2PpAwkZ7yais+GA9/7MATS9iZkXj/bM2jR3EXImHR3alCYfp0jTZQaU+3LzzI2NlQMZnQGLph9m5gJFqE+G/HUdhkjyenVH3ZCJ9QzMIuACEX1BwvxpqHnHucFExXbXbwCmkcn0UNhXcyozALt+zmg0zNk0VY0p0b+RqADzWmZMTQoSRcCce9Xf+wmooSxRZfhGseb6HoxCVQhbq9/TljaAw7EmOyrPX7rq11uYaPW1ZEAXSHw8Y1pO/ckzkdmJBK9noufBLAAwEfmY2YDMV0iUhwKe2rQB5jtcD8ckbjAPAlpJ4KM2f4N/qKCtbNl0GYu/xcwvgTFu8L8AvdsW9H6QNoC1ZMk8GU98R4QEQE2KIja37qs/crOb4HCsuDsqL79GYKNbnkKCvgz7va+kDWBz6C9ICStMWVvGOkSjCRtt3MWByAoAM8JB75q0AW620lv1P6Wm9FYlG0nnjgP8AwdCFj9G8DUXAAAAAElFTkSuQmCC");
	}

	&-text {
		color: $primary-font-color;
		font-size: 14px;
		color: #949aae;
		margin-left: 4px;
		line-height: 16px;
	}
}

.active {
	.home-main-bar-star-icon {
		background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADPUlEQVRYR8WXTWgcdRjGn2e6O7M1VawHPw47m2pCd1ZpkQQ/ULQUQXuQelBQFEVLL1URCj30YI1eFKUnKwXBIIJevJSoCILoRTyYohTNbJukZifa2B6MlGp3ZjP/RzaSkI/dnY9gO6dl3vd9nt//P//3nVniKl+8yv7IDRD67hF7y5ZjLE/8uZFF5AJoTt86yHDhFxLHbS945YoDhBPuCUF7CbbEwh0l7+yZvBCZd6Dl9++KFX+zZEhyzPGCvVcEQBqxIn90XNCdKw03WdbuYrWxDJUFJtMORPX+542JR9caEPzJ9l4YIkdMFvN2bmoA/bGjL5z/axLSLZ1MLMvaZ1cb6+CSgFIDhL77uqQjXQXJOWfr9YO8+dTfSaYr44kAmr1388KlubuN4i8EXNNTnHjPsTa/ye1nfk8LsQpAkwNOy8Q7EZthwQyBGIZQE1BIK/hfHs+TGAcwLuCkI46z1pjrpMGw7j4j4EEaDAO4XVAxm1nKbPIcgZNtKLtgj3Jw6rdF1Fa9/xFjzNj/ZryGj8AJ27vncfLTeLkLQr//KSD+WErfFSnXvTqN+NYpbdrDbTPN5UG29CPyKy8ZmXdzCacoIvijXbR3cXDqYtcuCH13RNJrKfQypRCYtG37fg5MX1g/xNbcafrlYxBezOTQK5k858C6j97MTMcuWHtzcd7XP2ifhyc3CkFwHig+4NSmf+6m1XEQSUPFsH7hMwgP54Ug8I9F66Gi1/i+5wZ1C7bbMzbxl3kBQH5V8oLEBXQdxZHv7jfS+3kBCPpOLagl1XcFCOvlN2TwapJAj2d7yanNXptU3x3Adz+U9FySQK+408cbWAnmc52Bpu9+DWn3RgBoFXY61V9P5QOYKE8CGOi6xeRFSdf1BCQfLXnB55kBJDGqVy5LctZNLvI0gaPFgv1RC62aFswhCE90emVbFg7Y1dnj2QGmbrsxjKLzqwrJ70i9Y28PxkhqZUxnt1VaYXxQ0j4BfUsxkm85XnA4M0BULw8bgx9IGAhjFq23kwZK20QNd2t0WQdk+DKgm0h84nizT2cGaJ6u7IHRY0DhaJ4/HYtfVgvRs4a4q1QN9mcG2MjJz1qb+FGaVTBr/r+FizEw88IfcAAAAABJRU5ErkJggg==");
	}

	.home-main-bar-star-text {
		color: $primary-font-color !important;
	}
}

// 主体-表单列表
.home-main-list {
	max-height: 70vh;
	overflow-y: auto;
	overflow-x: hidden;

	&::-webkit-scrollbar {
		width: 8px;
	}

	&::-webkit-scrollbar-track {
		background-color: none;
	}

	&::-webkit-scrollbar-thumb {
		border-radius: 10px;
		background-color: #f3f3f3;
	}
}
</style>
