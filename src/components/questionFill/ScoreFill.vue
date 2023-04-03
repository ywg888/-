<template>
	<div class="input-fill-box" style="position: relative">
		<div class="input-box">
			<span class="input-index">{{ questionIndex + 1 + "." }}</span>
			<input class="input-question" disabled :value="questionTitle" />
		</div>
		<div class="star-box">
			<el-rate
				v-model="value"
				:texts="['1.0分', '2.0分', '3.0分', '4.0分', '5.0分']"
				show-text
				@change="innerContentChange"
				v-show="!isLooking"
				@blur="contentRequired"
			/>
			<el-rate
				v-model="value"
				v-show="isLooking"
				disabled
				show-score
				text-color="#ff9900"
				score-template="{value} 分"
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
import { onBeforeMount, PropType, ref, watch } from "vue"

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
		type: Number,
		required: false,
	},
	isLooking: {
		default: false,
		type: Boolean,
		required: false,
	},
})
let value = ref<number>()
onBeforeMount(() => {
	watch(
		() => props.questionAnswer,
		(val) => (value.value = val),
		{
			immediate: true,
		}
	)
})

let $myemit = defineEmits(["innerContentChange"])
const innerContentChange = () => {
	$myemit("innerContentChange", value.value, props.questionIndex)
}
// 必选提示flag
let requiredFlag = ref<boolean>(false)
const contentRequired = () => {
	if (props.problem.required) {
		if (value.value) {
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
			opacity: 1;
			width: 100%;
			color: black;
			opacity: 1;
			padding: 8px 0 5px 20px;
			box-sizing: border-box;
			border: none;
			outline: none;
		}
	}
	.star-box {
		padding-left: 15px;
	}
}
</style>
