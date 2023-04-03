<template>
	<div class="input-fill-box" style="position: relative">
		<div class="input-box">
			<span class="input-index">{{ questionIndex + 1 + "." }}</span>
			<input class="input-question" disabled :value="questionTitle" />
		</div>
		<!-- 填写页面 -->
		<div v-show="!isLooking">
			<el-select
				v-model="problemResult"
				placeholder="填写者选择区"
				size="large"
				@change="singleSelectChange"
				@blur="contentRequired"
			>
				<el-option
					v-for="(item, index) in problemData"
					:key="index"
					:label="item.title"
					:value="item.title"
				/>
			</el-select>
			<div
				v-show="requiredFlag"
				style="color: red; position: absolute; bottom: 0; font-size: 12px"
			>
				此题为必选，请输入
			</div>
		</div>

		<!-- 非填写页面 -->
		<div v-show="isLooking">
			<el-select v-model="answerSelect" placeholder="填写者选择区" size="large">
				<el-option
					v-for="(item, index) in problemData"
					:key="index"
					:label="item.title"
					:value="item.title"
					:disabled="isLooking"
				/>
			</el-select>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { IProblem, TProblemType } from "@/api/type"
import { ref, PropType, watch } from "vue"

const props = defineProps({
	problem: {
		type: Object as PropType<IProblem<TProblemType>>,
		required: true,
	},
	questionIndex: {
		type: Number,
		required: true,
	},
	questionTitle: {
		type: String,
		required: true,
	},
	questionAnswer: {
		type: String,
		required: false,
	},
	isLooking: {
		default: false,
		type: Boolean,
		required: false,
	},
})
let $myemit = defineEmits(["singleSelectChange"])
// 题目的问题
const problemData = ref(props.problem.setting?.options)
// 题目的结果
const problemResult = ref(props.problem.result?.value)
// 选项改变时
const singleSelectChange = (val: string) => {
	$myemit("singleSelectChange", val, props.questionIndex)
}
// 选择答案
const answerSelect = ref(props.questionAnswer)
watch(
	() => props.questionAnswer,
	(val) => {
		answerSelect.value = val
	},
	{
		immediate: true,
	}
)
// 必选提示flag
let requiredFlag = ref<boolean>(false)
const contentRequired = () => {
	if (props.problem.required) {
		if (answerSelect.value) {
			requiredFlag.value = false
		} else {
			requiredFlag.value = true
		}
	}
}
</script>

<style lang="scss" scoped>
@import "../../assets/style/base.scss";
.input-fill-box {
	.input-box {
		position: relative;
		height: 40px;
		.input-index {
			position: absolute;
			z-index: 10;
			font-size: 14px;
			font-weight: bold;
			top: 11px;
			color: #3d4757;
			left: 2px;
		}
		.input-question {
			position: absolute;
			font-size: 14px;
			font-weight: bold;
			left: 0;
			width: 100%;
			color: #3d4757;
			padding: 8px 0 5px 20px;
			box-sizing: border-box;
			border: none;
			outline: none;
		}
	}
	.select-group {
		display: flex;
		align-items: center;
		justify-content: space-around;
		.select {
			padding: 4px 10px;
		}
	}
}
</style>
