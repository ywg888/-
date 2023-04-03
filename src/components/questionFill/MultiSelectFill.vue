<template>
	<div class="input-fill-box" style="position: relative">
		<div class="input-box">
			<span class="input-index">{{ questionIndex + 1 + "." }}</span>
			<input class="input-question" disabled :value="questionTitle" />
		</div>
		<!-- 填写页面 -->
		<el-checkbox-group
			v-show="!isLooking"
			v-model="problemResult"
			class="select-group"
			@change="singleSelectChange"
			@blur="contentRequired"
		>
			<li v-for="(item, index) in problemData" :key="index" class="select">
				<el-checkbox :label="item.title" size="large" class="label"
					>{{ item.title }}
				</el-checkbox>
			</li>
		</el-checkbox-group>
		<!-- 非填写页面 -->
		<el-checkbox-group
			v-show="isLooking"
			v-model="answerSelect"
			class="select-group"
			@change="singleSelectChange"
		>
			<li v-for="(item, index) in problemData" :key="index" class="select">
				<el-checkbox
					:label="item.title"
					size="large"
					class="label"
					checked=""
					:disabled="isLooking"
					>{{ item.title }}
				</el-checkbox>
			</li>
		</el-checkbox-group>
		<div
			v-show="requiredFlag"
			style="color: red; position: absolute; bottom: 0; font-size: 12px"
		>
			此题为必选，请输入
		</div>
	</div>
</template>

<script lang="ts" setup>
import { IProblem, TProblemType, ISelectOption } from "@/api/type"
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
		type: Array as PropType<Omit<ISelectOption, "status">[]>,
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
const answerSelect = ref(
	props.questionAnswer as Omit<ISelectOption, "status">[]
)
watch(
	() => props.questionAnswer,
	(val) => {
		answerSelect.value = val as Omit<ISelectOption, "status">[]
	},
	{
		immediate: true,
		deep: true,
	}
)

// 必选提示flag
let requiredFlag = ref<boolean>(false)
const contentRequired = () => {
	if (props.problem.required) {
		console.log("开始验证")
		if (answerSelect.value) {
			console.log("no")
			requiredFlag.value = false
		} else {
			if (answerSelect.value) {
				requiredFlag.value = false
			} else {
				requiredFlag.value = true
			}
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
