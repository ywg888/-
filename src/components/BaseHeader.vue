<template>
	<div class="base-header">
		<div class="base-header-slot">
			<slot></slot>
		</div>
		<!-- 状态栏-头像及下拉菜单 -->
		<el-dropdown class="base-header-user" trigger="click">
			<!-- 状态栏-头像及下拉菜单-头像 -->
			<el-avatar :src="store.state.userInfo.avatar" shape="circle" :size="28">{{
				nickname
			}}</el-avatar>
			<!-- 状态栏-头像及下拉菜单-下拉菜单 -->
			<template #dropdown>
				<el-dropdown-menu>
					<div class="base-header-user-nickname">
						{{ nickname }}
					</div>
					<ul>
						<el-dropdown-item
							class="base-header-dropdown-item"
							@click="userCenter"
						>
							个人中心
						</el-dropdown-item>
						<el-dropdown-item class="base-header-dropdown-item" @click="logOut">
							退出账号
						</el-dropdown-item>
					</ul>
				</el-dropdown-menu>
			</template>
		</el-dropdown>
	</div>
</template>

<script setup lang="ts">
import { logout, getInfo } from "@/api/api"
import router from "@/router"
import store from "@/store"
import { onMounted, ref } from "vue"

// 用户昵称
const nickname = ref<string>("")
// 获取个人信息
const getUserInfo = () => {
	getInfo()
		.then((res) => {
			nickname.value = res.data.data.user.nickname
		})
		.catch((err) => {
			console.trace(err)
		})
}

onMounted(getUserInfo)

// 转跳用户中心
const userCenter = () => {
	router.push("/user_center")
}

// 登出
const logOut = async () => {
	try {
		const res = await logout()
		if (res.data.stat === "ok") {
			localStorage.removeItem("token")
			store.commit("setUserInfo", null)
			router.push("/")
		}
	} catch (err) {
		console.trace(err)
	}
}
</script>

<style scoped lang="scss">
@import "@/assets/style/base.scss";

$border-color: #e2e6ed; // 边界颜色
$item-text-color: #3d4757; // 菜单字体颜色

// 状态栏
.base-header {
	width: 100vw;
	height: 56px;
	display: flex;
	align-items: center;
	border-bottom: 1px solid $border-color;
	justify-content: space-between;
	z-index: 100;
	background-color: #fff;
	position: fixed;

	// 状态栏-插槽
	&-slot {
		margin-left: 30px;
	}

	// 状态栏-头像
	&-user {
		margin-right: 40px;
		// 状态栏-下拉菜单

		&-nickname {
			min-width: 100px;
			max-width: 150px;
			padding: 0 0 5px;
			margin: 10px 15px;
			font-size: 14px;
			color: $item-text-color;
			line-height: 14px;
			margin-bottom: 4px;
			font-weight: 600;
			text-align: left;
			border-bottom: 1px solid $border-color;
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
		}

		.base-header-dropdown-item {
			padding: 0 15px;
			font-size: 12px;
			line-height: 30px;
			color: $item-text-color;
			white-space: nowrap;
			margin-top: 4px;
		}
	}
}
</style>
