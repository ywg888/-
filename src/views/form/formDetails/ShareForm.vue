<template>
	<link
		rel="stylesheet"
		type="text/css"
		href="https://at.alicdn.com/t/font_3434962_aiqqkbntj1v.css"
	/>
	<div class="share-page">
		<div>
			<h3 class="share-title">分享邀请其他人填写</h3>
			<div class="qrCode-box">
				<div class="qrCode-title">{{ form.title }}</div>
				<div class="qrCode" id="qrCode" ref="qrCodeDiv"></div>
				<span class="qrCode-tips">微信扫码或长按识别，填写内容</span>
			</div>
			<div class="qrCode-download" @click="getDownload">下载二维码</div>

			<div class="btn-box">
				<el-button plain class="copy-btn">
					<span class="iconfont icon-lianjie"></span>
					<span class="copy-text tag-read" @click="copyLink">复制链接</span>
				</el-button>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { formResult } from "@/api/api"
import { IForm } from "@/api/type"
import QRCode from "qrcodejs2"
import { getCurrentInstance, onBeforeMount, onMounted, ref } from "vue"
import { useRoute } from "vue-router"
import Clipboard from "clipboard"
import { ElMessage } from "element-plus"
// 获取id
let id = ref<string>("")
const route = useRoute()
id.value = route.params.id as string

// 表单
let form = ref<IForm>({
	id: "",
	title: "",
	subTitle: "",
	problems: [],
	status: 1,
	isStar: false,
	utime: 0,
	ctime: 0,
	author: "",
})

// 根据id获取表单
onBeforeMount(async () => {
	try {
		const res = await formResult(id.value)
		if (res.status === 200) {
			form.value = res.data.data.info as IForm
		}
	} catch (error) {
		console.log(error)
		console.log("请求服务器出错")
	}
})

// 复制链接
const copyLink = () => {
	let link = ref<string>("http://www.wps.net/form_fill/" + id.value)
	var clipboard = new Clipboard(".tag-read", {
		text: () => link.value,
	})
	clipboard.on("success", () => {
		ElMessage.success("复制成功")
		// 释放内存
		clipboard.destroy()
	})
	clipboard.on("error", () => {
		// 不支持复制
		ElMessage.error("该浏览器不支持复制")
		// 释放内存
		clipboard.destroy()
	})
}

// 绑定二维码
const bindQRCode = () => {
	new QRCode(getCurrentInstance()?.refs.qrCodeDiv, {
		text: "http://www.wps.net/form_fill/" + id.value,
		width: 130,
		height: 130,
		colorDark: "#333333",
		colorLight: "#ffffff",
		correctLevel: QRCode.CorrectLevel.L,
	})
}

// 下载二维码
const getDownload = () => {
	let img = document.querySelector(".qrCode img") as HTMLImageElement
	let url = img.src as string
	let a = document.createElement("a") as unknown as HTMLAreaElement
	let event = new MouseEvent("click")
	a.href = url
	a.download = "填写表单二维码.png"
	a.dispatchEvent(event)
	ElMessage.success("开始下载")
}

onMounted(() => {
	bindQRCode()
})
</script>

<style scoped lang="scss">
.share-page {
	background-color: #fff;
	padding: 25px 40px;
	.share-title {
		font-size: 18px;
		color: #3d4757;
		margin-left: 0;
	}
	.qrCode-box {
		border: 1px solid #ececec;
		width: 190px;
		height: 230px;
		display: flex;
		margin: 40px auto;
		flex-direction: column;
		justify-content: space-evenly;
		align-items: center;
		.qrCode-title {
			color: #535252;
			font-size: 13px;
		}
		.qrCode-tips {
			color: #9b9b9b;
			font-size: 12px;
		}
	}
	.qrCode-download {
		font-size: 14px;
		margin-top: 20px;
		text-align: center;
		color: #1890ff;
		cursor: pointer;
	}
	.btn-box {
		text-align: center;
		margin-top: 20px;
		.copy-btn {
			color: #3d4757 !important;
			border: 1px solid #e2e4e8;
			.iconfont {
				color: #000000;
			}
			.copy-text {
				color: #3d4757;
				margin-left: 12px;
			}
		}
	}
}
</style>
