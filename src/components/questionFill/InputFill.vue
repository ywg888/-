<template>
	<div class="input-fill-box" style="position: relative">
		<div class="input-box">
			<span class="input-index">{{ questionIndex + 1 + "." }}</span>
			<input class="input-question" disabled :value="questionTitle" />
		</div>
		<input
			class="answer-input"
			v-model="answerInput"
			placeholder="请输入"
			@input="innerContentChange"
			v-show="!isLooking"
			@blur="contentRequired"
		/>
		<input
			class="answer-input"
			v-show="isLooking"
			:value="questionAnswer"
			disabled
		/>
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
import { PropType, ref } from "vue"

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
const answerInput = ref("")
let $myemit = defineEmits(["innerContentChange"])
// 答案填写框的值发生改变
const innerContentChange = () => {
	$myemit("innerContentChange", answerInput.value, props.questionIndex)
}
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
			font-weight: bolder;
			left: 0;
			width: 100%;
			color: black;
			opacity: 1;
			padding: 8px 0 5px 20px;
			box-sizing: border-box;
			border: none;
			outline: none;
		}
	}
	.answer-input {
		width: 100%;
		box-sizing: border-box;
		border: none;
		outline: none;
		border-bottom: 1px solid rgba(25, 55, 88, 0.1);
		padding: 8px 0 5px 15px;
		font-size: 14px;
		color: #3d4757;
	}
	.answer-input:focus {
		border-bottom: 1px solid $primary-font-color;
	}
	.answer-input::placeholder {
		color: #aeb5c0;
	}
}
</style>
