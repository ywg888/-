<template>
	<div class="input-fill-box" style="position: relative">
		<div class="input-box">
			<span class="input-index">{{ questionIndex + 1 + "." }}</span>
			<input class="input-question" disabled :value="questionTitle" />
		</div>
		<!-- 填写页面 -->
		<div v-show="!isLooking">
			<el-time-picker
				v-model="answerInput"
				type="date"
				placeholder="请输入"
				size="large"
				@change="singleSelectChange"
				@blur="contentRequired"
			/>
		</div>

		<!-- 非填写页面 -->
		<div v-show="isLooking">
			<el-time-picker
				v-show="isLooking"
				disabled
				v-model="answerSelect"
				type="date"
				placeholder="请输入"
				size="large"
				@change="singleSelectChange"
			/>
		</div>
		<div
			v-show="requiredFlag"
			style="color: red; position: absolute; bottom: 0; font-size: 12px"
		>
			此题为必选，请输入
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
		if (answerInput.value) {
			requiredFlag.value = false
		} else {
			requiredFlag.value = true
		}
	}
}
const answerInput = ref("")
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
			opacity: 1;
			width: 100%;
			color: black;
			padding: 8px 0 5px 20px;
			box-sizing: border-box;
			border: none;
			outline: none;
		}
	}
}
.el-input__wrapper {
	width: 100%;
	box-shadow: none;
}
</style>
