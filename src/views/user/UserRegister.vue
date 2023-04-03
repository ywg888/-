<template>
	<div>
		<div class="header">
			<img src="../../assets/img/user/wps_logo.png" height="20" alt="" />
		</div>
		<div class="main">
			<div class="box">
				<!-- 顶部导航栏(含退出按钮) -->
				<div class="top">
					<router-link to="/login">
						<img
							src="../../assets/img/user/register_return.svg"
							width="20"
							style="cursor: pointer"
						/>
					</router-link>
					<span class="title">账号注册</span>
				</div>
				<!-- 注册输入框 -->
				<el-input
					class="margin"
					v-model="account"
					placeholder="手机号"
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
				<el-input
					class="margin"
					v-model="confirmPwd"
					placeholder="密码确认"
					size="large"
					type="password"
					show-password
				/>
				<div class="desp" :class="{ red: red }">
					密码为8-16位大小写字母、数字3种组合
				</div>
				<el-button
					@click="registerMain"
					style="width: 100%; margin-bottom: 20px"
					size="large"
					type="primary"
					>立即注册
				</el-button>
				<!-- 同意条款勾选 -->
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
		</div>
	</div>
</template>

<script setup lang="ts">
import { register } from "@/api/api"
import { ElMessage } from "element-plus"
import { ref, watch } from "vue"
import { useRouter } from "vue-router"
// 账号、密码、确认密码
const account = ref<string>("")
const pwd = ref<string>("")
const confirmPwd = ref<string>("")
// 注册提示样式显示
const red = ref<boolean>(false)
// 是否勾选同意条款
const checkedArgee = ref(false)
// 路由器
const router = useRouter()
// 验证密码是否符合规范
const regex = /(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/
// 注册请求
const registerMain = () => {
	if (red.value === true) ElMessage.warning("您输入的密码不符合规范")
	else {
		register({
			account: account.value,
			pwd: pwd.value,
			confirmPwd: confirmPwd.value,
		})
			.then((res) => {
				if (res.status == 200) {
					if (checkedArgee.value == true) {
						ElMessage.success("恭喜注册成功, 正在跳往登录界面")
						setTimeout(() => {
							router.push("/login")
						}, 3000)
					} else {
						ElMessage.warning("请勾选相应条款")
					}
				}
			})
			.catch((err) => {
				ElMessage.error(
					err.msg == "参数缺失" ? "请注意：以下三项为必填项" : err.msg
				)
			})
	}
}
watch(pwd, () => {
	red.value = regex.exec(pwd.value) ? false : true
})
</script>

<style scoped>
.header {
	display: flex;
	height: 10vh;
	align-items: center;
}

.header > img {
	margin-left: 64px;
}

.main {
	background-color: #f7f7f7;
	height: 90vh;
	position: relative;
}

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

.top {
	display: flex;
	justify-content: flex-start;
	align-items: center;
	position: relative;
	font-size: large;
	margin-bottom: 50px;
}

.title {
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
}

.desp {
	font-size: 5px;
	color: #aaa;
	margin-bottom: 20px;
	text-align: left;
}

.red {
	color: red;
}

.margin {
	margin-bottom: 20px;
}
</style>
