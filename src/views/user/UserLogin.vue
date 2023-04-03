<template>
	<div>
		<div class="header">
			<img src="../../assets/img/user/wps_logo.png" height="20" alt="" />
		</div>
		<div class="main">
			<div class="box">
				<!-- 导航栏：切换普通登录和快捷登录 -->
				<div v-show="onNav" class="nav">
					<span
						class="tab margin-r"
						:class="{ 'tab-active': onShow }"
						@click="exNav"
						>账号登录</span
					>
					<span class="tab" :class="{ 'tab-active': offShow }" @click="exNav"
						>快速登录</span
					>
				</div>
				<!-- 导航栏：显示登录方式和回退按钮 -->
				<div v-show="state.showTop" class="top">
					<img
						@click="toDefault"
						src="../../assets/img/user/register_return.svg"
						width="20"
						style="cursor: pointer"
					/>
					<span class="title">{{ state.name }}</span>
				</div>
				<!-- 账号密码登录 -->
				<div v-show="state.showLog" class="login">
					<el-input
						class="margin"
						v-model="account"
						placeholder="账号、手机或邮箱"
						size="large"
					/>
					<el-input
						class="margin"
						v-model="pwd"
						placeholder="密码"
						size="large"
						type="password"
						show-password
					/>
					<el-button
						@click="loginMain"
						style="width: 100%; margin-bottom: 20px"
						size="large"
						type="primary"
						>立即登录
					</el-button>
					<div class="log-bottom">
						<router-link style="text-decoration: none" to="/register">
							<el-button type="primary" link size="small">注册新账号</el-button>
						</router-link>
					</div>
				</div>
				<!-- 更多方式登录 -->
				<div v-show="state.showMore" class="more">
					<el-button
						@click="toLog('账号密码登录')"
						v-for="(button, index) in buttons"
						:key="button.text"
						:class="'btn-wechat margin-btns btn-log' + (index + 1)"
						:style="button.style"
						:color="button.color"
						style="color: #fff"
						size="large"
						type="primary"
						>{{ button.text }}
					</el-button>
					<div class="ques">
						没有账号？
						<router-link style="text-decoration: none" to="/register">
							<el-button type="primary" link size="small">立即注册</el-button>
						</router-link>
					</div>
				</div>
				<!-- 普通登录 -->
				<div v-show="onNormal" class="normal">
					<el-button
						@click="toLog('账号密码登录')"
						class="btn-wechat margin"
						style="width: 100%; color: #fff"
						color="#38b54a"
						size="large"
						type="primary"
					>
						微信登录
					</el-button>
					<el-button
						@click="toLog('账号密码登录')"
						class="btn-message"
						style="width: 100%; margin: 0"
						color="#fff"
						size="large"
						type="primary"
					>
						短信验证码登录
					</el-button>
					<div class="qq">
						<img
							@click="toLog('账号密码登录')"
							style="margin-right: 5px"
							src="../../assets/img/user/qq.svg"
							width="20"
						/><span @click="toLog('账号密码登录')" style="margin-right: 20px"
							>QQ</span
						>
						<a @click="toLog('更多登录方式')" style="">更多</a
						><img
							@click="toLog('更多登录方式')"
							style="margin-right: 95px"
							src="../../assets/img/user/more.svg"
							width="12"
						/>
						<router-link style="text-decoration: none" to="/register">
							<el-button type="primary" link size="small">注册新账号</el-button>
						</router-link>
					</div>
					<el-checkbox v-model="checkedArgee" size="small"
						>已阅读并同意
						<a
							style="color: #606266"
							href="https://privacy.wps.cn/policies/privacy/wps-office"
							>隐私协议</a
						>和
						<a style="color: #606266" href="https://www.wps.cn/privacy/account/"
							>在线服务协议</a
						>
					</el-checkbox>
				</div>
				<!-- 快速登录 -->
				<div v-show="onQuick" class="quick">
					<div class="content margin">
						<img
							class="qrcode"
							src="../../assets/img/user/code.png"
							width="120"
							height="120"
						/>
						<img
							src="../../assets/img/user/tips.png"
							width="120"
							height="120"
						/>
					</div>
					<div class="tip">
						请使用<a href="https://mo.wps.cn/pc-app/office.html" class="rto"
							>WPS手机版</a
						>扫码登录
					</div>
					<div class="ques">
						没有账号？
						<router-link style="text-decoration: none" to="/register">
							<el-button type="primary" link size="small">立即注册</el-button>
						</router-link>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { login, getInfo } from "@/api/api"
import { IUser } from "@/api/type"
import { ElMessage } from "element-plus"
import { ref } from "vue"
import { reactive } from "vue"
import { useRouter } from "vue-router"
import { useStore } from "vuex"

// 更多登录方式
const buttons = [
	{ text: "账号密码", style: "", color: "#76767a" },
	{ text: "钉钉账号", style: "", color: "#3195fa" },
	{ text: "Apple账号", style: "", color: "#000000" },
	{ text: "小米账号", style: "", color: "#ff7c23" },
	{ text: "微博账号", style: "", color: "#ed4b4b" },
	{ text: "教育云账号", style: "", color: "#0096e6" },
	{ text: "第三方企业登录", style: "margin-bottom:30px;", color: "#9088df" },
] as const
// 导航栏样式切换
const onShow = ref<boolean>(true)
const offShow = ref<boolean>(false)
// 两种登陆状态样式切换
const onNormal = ref<boolean>(true)
const onQuick = ref<boolean>(false)
// 登录状态和登录导航栏设置
const state = reactive({
	name: "", // 当前登录方式
	showTop: false, //
	showLog: false,
	showMore: false,
})
// nav显示与隐藏
const onNav = ref<boolean>(true)
// 同意条款勾选
const checkedArgee = ref<boolean>(false)
// 输入账号和密码
const account = ref<string>("")
const pwd = ref<string>("")
const router = useRouter()
// 切换导航栏中的普通登录和快捷登录
const exNav = () => {
	onShow.value = !onShow.value
	offShow.value = !offShow.value
	onNormal.value = !onNormal.value
	onQuick.value = !onQuick.value
}
// 跳转登录界面并将登录方式传递给nav以显示登录方式
const toLog = (name: string) => {
	if (checkedArgee.value == false) ElMessage.warning("请勾选相应条款")
	else {
		state.name = name
		state.showTop = true
		state.showLog = name !== "更多登录方式" ? true : false
		state.showMore = name !== "更多登录方式" ? false : true
		onNav.value = false
		onNormal.value = false
		onQuick.value = false
	}
}
// 恢复默认登录界面(初始登录界面)
const toDefault = () => {
	onShow.value = true
	offShow.value = false
	onNormal.value = true
	onQuick.value = false
	onNav.value = true
	state.name = ""
	state.showTop = false
	state.showLog = false
	state.showMore = false
}
// 获取store
const store = useStore()
// 登录请求
const loginMain = () => {
	if (account.value == "" || pwd.value == "")
		ElMessage.warning("账号或密码不能为空")
	else {
		login({
			account: account.value,
			pwd: pwd.value,
		})
			.then((res) => {
				if (res.status == 200) {
					router.push("/home_page")
					setCookie()
				}
			})
			.catch((err) => {
				ElMessage.warning(err.msg || "服务器错误")
			})
	}
}
// 保存登录信息,将用户id写入vuex
const setCookie = async () => {
	try {
		const res = await getInfo()
		if (res.status == 200) {
			const user: IUser = res.data.data.user
			const id: string = res.data.data.user.id
			store.commit("setUserInfo", user)
			localStorage.setItem("token", id)
		}
	} catch {
		ElMessage.error("用户信息写入失败")
	}
}
</script>

<style scoped>
/* 头部wps图标 */
.header {
	display: flex;
	height: 10vh;
	align-items: center;
}

.header > img {
	margin-left: 64px;
}

/* 除导航栏以外背景设置 */
.main {
	background-color: #f7f7f7;
	height: 90vh;
	position: relative;
}

/* 登录板块：相对main居中对齐 */
.box {
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	width: 260px;
	background-color: #fff;
	border: 1px solid #d8d8d8;
	border-radius: 2px;
	padding: 45px 50px;
}

/* 切换普通登录和快捷登录导航栏 */
.nav {
	margin-bottom: 55px;
	text-align: center;
}

/* 导航栏未选中状态 */
.tab {
	font-size: 18px;
	color: #a1a3a1;
	cursor: pointer;
}

/* 导航栏选中状态 */
.tab-active {
	font-size: 18px;
	color: #000;
	padding-bottom: 7px;
	border-bottom: 2px solid #000;
	cursor: default;
}

/* 微信登录按钮背景 */
.btn-wechat {
	background-image: url(../../assets/img/user/wechat2.svg);
	background-repeat: no-repeat;
	background-size: contain;
	background-position: 13px 1px;
	width: 100%;
	margin: 0;
}

/* 7中更多登录方式背景 */
.btn-log1 {
	background-image: url(../../assets/img/user/log_01.svg);
	background-size: 33px;
	background-position: 16px 3.5px;
}

.btn-log2 {
	background-image: url(../../assets/img/user/log_02.svg);
	background-size: 31px;
	background-position: 15px 4px;
}

.btn-log3 {
	background-image: url(../../assets/img/user/log_03.svg);
	background-size: 28px;
	background-position: 17px 4px;
}

.btn-log4 {
	background-image: url(../../assets/img/user/log_04.svg);
	background-size: 29px;
	background-position: 16px 5px;
}

.btn-log5 {
	background-image: url(../../assets/img/user/log_05.svg);
	background-size: 30px;
	background-position: 16px 6px;
}

.btn-log6 {
	background-image: url(../../assets/img/user/log_06.svg);
	background-size: 27px;
	background-position: 16px 5px;
}

.btn-log7 {
	background-image: url(../../assets/img/user/log_07.svg);
	background-size: 30px;
	background-position: 15px 4px;
}

/* 更多登录按钮间距设置 */
.margin-btns {
	margin-bottom: 10px;
}

/* 短信登录按钮背景 */
.btn-message {
	background-image: url(../../assets/img/user/message.svg);
	background-repeat: no-repeat;
	background-size: 56px;
	background-position: 1px 5px;
	border: 1px solid #d8d8d8;
}

.btn-message:hover {
	border: 1px solid #d8d8d8;
}

.qq {
	display: flex;
	align-items: center;
	justify-content: flex-end;
	margin: 30px 0 40px 0;
	cursor: pointer;
}

.content {
	display: flex;
	justify-content: space-evenly;
}

.tip {
	font-size: 15px;
	margin-bottom: 45px;
	text-align: center;
}

.ques {
	text-align: center;
}

.rto {
	text-decoration: none;
	color: #417ff9;
	cursor: pointer;
}

.top {
	display: flex;
	justify-content: flex-start;
	align-items: center;
	position: relative;
	font-size: large;
	margin-bottom: 50px;
}

.log-bottom {
	display: flex;
	justify-content: flex-end;
}

.title {
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
}

.margin {
	margin-bottom: 20px;
}

.margin-r {
	margin-right: 60px;
}
</style>
