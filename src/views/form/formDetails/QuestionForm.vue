<template>
	<div>
		<div class="question-page">
			<div class="content-box">
				<div class="main-title">{{ form.title }}</div>
				<div class="sub-title">{{ form.subTitle }}</div>
				<div class="problems-container">
					<component
						v-for="(item, index) in form.problems"
						:key="item.id"
						:questionIndex="index"
						:problem="item"
						:questionTitle="item.title"
						:isLooking="false"
						:is="
							item.type == 'input'
								? InputFill
								: item.type == 'date'
								? DateFill
								: item.type == 'multiSelect'
								? MultiSelectFill
								: item.type == 'pullSelect'
								? PullSelectFill
								: item.type == 'singleSelect'
								? SingleSelectFill
								: item.type == 'time'
								? TimeFill
								: ScoreFill
						"
					></component>
				</div>
			</div>
			<div class="bottom-box">
				<span class="bottom-box-text" @click="toFormFill">填写表单</span>
				<div class="bottom-shadow"></div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
// 填写表单问题组件
import InputFill from "@/components/questionFill/InputFill.vue"
import SingleSelectFill from "@/components/questionFill/SingleSelectFill.vue"
import MultiSelectFill from "@/components/questionFill/MultiSelectFill.vue"
import PullSelectFill from "@/components/questionFill/PullSelectFill.vue"
import DateFill from "@/components/questionFill/DateFill.vue"
import TimeFill from "@/components/questionFill/TimeFill.vue"
import ScoreFill from "@/components/questionFill/ScoreFill.vue"
import { onBeforeMount, ref } from "vue"
import { getForm } from "@/api/api"
import { IForm } from "@/api/type"
import { useRouter, useRoute } from "vue-router"

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

// 获取id
let id = ref<string>("")
const route = useRoute()
id.value = route.params.id as string

// 根据id获取表单
onBeforeMount(async () => {
	try {
		const res = await getForm(id.value)
		if (res.data.stat === "ok") {
			form.value = res.data.data.item
		}
	} catch (error) {
		console.log(error)
		console.log("请求服务器出错")
	}
})

// 前往表单填写页面
const router = useRouter()
const toFormFill = () => {
	router.replace({ name: "form_fill", params: { id: id.value as string } })
}
</script>

<style scoped lang="scss">
@import "../../../assets/style/base.scss";
.question-page {
	background-color: #f2f4f7;
	display: flex;
	flex-direction: column;
	align-items: center;
	box-sizing: border-box;
	position: relative;
	.content-box {
		width: 100%;
		min-height: 100vh;
		background-color: white;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 48px 102px 90px;
		box-sizing: border-box;
		overflow: auto;
		.main-title {
			color: #3d4757;
			font-size: 20px;
			font-weight: bold;
			padding: 0 0 22px;
		}
		.sub-title {
			padding: 0 0 10px;
			color: #767c85;
			font-size: 14px;
		}
		.problems-container {
			width: 100%;
			box-sizing: border-box;
			font-size: 22px;
			margin-top: 0;
			* {
				padding: 24px 0;
			}
		}
	}
	.bottom-box {
		position: fixed;
		bottom: 0;
		background-color: #fff;
		width: 944px;
		height: 70px;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 20px 0 0;
		box-sizing: border-box;
		.bottom-box-text {
			color: $primary-font-color;
			font-size: 14px;
			cursor: pointer;
		}
		.bottom-shadow {
			width: 100%;
			position: absolute;
			bottom: 0;
			box-shadow: 0 0 10px 3px rgba($color: #000000, $alpha: 0.5);
		}
	}
}
@media screen and (max-width: 850px) {
	.question-page {
		align-items: flex-start;
	}
}
</style>
