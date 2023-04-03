<template>
	<div class="data-statistics-container">
		<div class="data-statistics-page" v-show="showData">
			<div class="top-total-count-text">
				共收集&nbsp;&nbsp;<span>{{ totalPageCount }}</span
				>&nbsp;&nbsp;份数据<span
					>&nbsp;&nbsp;({{ form.status === 3 ? "正在收集" : "停止收集" }})</span
				>
			</div>
			<div class="pagination-box">
				<img
					class="pagination-box-icon"
					width="10"
					height="10"
					src="../../../assets/img/form/小于号.svg"
					alt=""
					@click="toPrePagination"
				/>
				<span class="pagination-box-text"
					>第<input
						class="pagination-box-number"
						@change="paginationFill"
						v-model="currentPagination"
					/>份</span
				>
				<img
					class="pagination-box-icon"
					width="10"
					height="10"
					src="../../../assets/img/form/大于号.svg"
					alt=""
					@click="toNextPagination"
				/>
			</div>
			<div class="submit-time">提交时间：{{ submitTime }}</div>
			<div class="form-fill-container">
				<div class="main-title">{{ form.title }}</div>
				<div class="sub-title">{{ form.subTitle }}</div>
				<div class="problems-container">
					<component
						v-for="(item, index) in currentPageContent?.result"
						:key="item.id"
						:questionIndex="index"
						:questionTitle="item.title"
						:isLooking="true"
						:questionAnswer="item.result.value"
						:problem="item"
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
		</div>
		<div class="null-result-mask" v-show="!showData">
			<img
				src="data:image/png;base64,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"
				width="100"
				height="100"
			/>
			<span class="no-result-text"
				>暂无收集结果
				<span class="invite-to-fill" @click="$router.replace({ name: 'share' })"
					>邀请填写</span
				></span
			>
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
import { onBeforeMount, ref, watch } from "vue"
import { formResult } from "@/api/api"
import { IForm, IFormFillRes, IInputResult } from "@/api/type"
import { useRoute } from "vue-router"

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

// 表单填写详情数组
let formFilledArr = ref<IFormFillRes[]>([
	{
		formAuthor: "",
		formId: "",
		id: "",
		result: [
			{
				id: "",
				type: "input",
				title: "",
				required: false,
				setting: null,
				result: {} as IInputResult,
			},
		],
	},
])

// 是否存在数据
let showData = ref<boolean>(true)

// 获取id
let id = ref<string>("")
const route = useRoute()
id.value = route.params.id as string

// 获取提交时间
let submitTime = ref<string>("")
// 当前表单的数据
let currentPageContent = ref<IFormFillRes>()

// 根据id获取表单
onBeforeMount(async () => {
	try {
		const res = await formResult(id.value)
		if (res.status === 200) {
			form.value = res.data.data.info as IForm
			formFilledArr.value = res.data.data.items
			totalPageCount.value = formFilledArr.value.length
			submitTime.value = new Date(form.value.ctime).toLocaleString()
			currentPageContent.value =
				formFilledArr.value[currentPagination.value - 1]
			showData.value = res.data.data.items.length > 0 ? true : false
		}
	} catch (error) {
		console.log(error)
		console.log("请求服务器出错")
	}
})

// 总页数
let totalPageCount = ref<number>(1)

// 当前页码
let currentPagination = ref<number>(1)
// 输入页码
const paginationFill = () => {
	if (currentPagination.value <= 0) {
		currentPagination.value = 1
	} else if (currentPagination.value > totalPageCount.value) {
		currentPagination.value = totalPageCount.value
	}
}
// 点击前往上一页
const toPrePagination = () => {
	if (currentPagination.value > 1) {
		currentPagination.value--
	}
}
// 点击前往下一页
const toNextPagination = () => {
	if (currentPagination.value < totalPageCount.value) {
		currentPagination.value++
	}
}
// 监听页码，页数改变的时候更换表单填写详情内容
watch(
	() => currentPagination.value,
	() => {
		currentPageContent.value = formFilledArr.value[currentPagination.value - 1]
	}
)
</script>

<style scoped lang="scss">
.data-statistics-container {
	position: relative;
}
.data-statistics-page {
	width: 944px;
	margin: 0 auto -1px;
	padding: 24px 40px;
	box-sizing: border-box;
	min-height: calc(100vh - 130px);
	// 顶部表单填写份数
	.top-total-count-text {
		margin-top: 16px;
		font-size: 20px;
		color: #3d4757;
	}
	// 分页盒子
	.pagination-box {
		height: 40px;
		display: flex;
		margin-top: 10px;
		align-items: center;
		.pagination-box-icon {
			background-color: #f2f4f7;
			padding: 5px;
			border-radius: 2px;
			cursor: pointer;
		}
		.pagination-box-text {
			margin: 0 16px;
			font-size: 14px;
			line-height: 40px;
			.pagination-box-number {
				background-color: #f2f4f7;
				width: 45px;
				border: none;
				outline: none;
				padding: 2px;
				text-align: center;
				border-radius: 2px;
				margin: 0 4px;
			}
		}
	}
	// 提交时间
	.submit-time {
		margin-top: 10px;
		padding: 16px 0;
		border-top: 1px solid rgba(25, 55, 88, 0.1);
		font-size: 14px;
		color: #767c85;
	}
	// 填写表单内容
	.form-fill-container {
		width: 90%;
		margin: 0 auto;
		padding: 15px 10px;
		min-height: calc(100vh - 320px);
		box-sizing: border-box;
		background-color: #fff;
		display: flex;
		flex-direction: column;
		overflow: auto;
		.main-title {
			line-height: 22px;
			font-size: 20px;
			text-align: center;
			color: #3d4757;
			font-weight: 700;
		}
		.sub-title {
			margin: 0;
			padding: 8px 0 5px;
			line-height: 20px;
			text-align: center;
			font-size: 14px;
			color: #767c85;
		}
		.problems-container {
			* {
				padding: 24px 0;
			}
		}
	}
}
// 没有数据的时候显示的遮罩
.null-result-mask {
	width: 944px;
	min-height: calc(100vh - 130px);
	margin: 0 auto -1px;
	padding: 24px 40px;
	box-sizing: border-box;
	background-color: #ffffff;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	.no-result-text {
		font-size: 14px;
		color: #3d4757;
		text-align: center;
		margin-top: 16px;
		font-weight: 400;
		.invite-to-fill {
			cursor: pointer;
			font-size: 12px;
			display: block;
			color: #1488ed;
			margin-top: 4px;
			font-weight: 400;
		}
	}
}
</style>
