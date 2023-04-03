<template>
	<QuestionTemplate
		:question-index="questionIndex"
		:question-type="'input'"
		@select-change="selectChange"
		@copy="copy"
		@confirm-del="confirmDel"
		@content-required="contentRequired"
	>
		<div class="problem-box" @click.stop="beActive">
			<div class="input-box">
				<span class="input-index">{{ questionIndex + 1 + "." }}</span>
				<input
					@input="innerContentChange"
					class="input-question"
					v-model="questionInput"
					placeholder="请输入问题"
				/>
			</div>
			<el-icon color="#47a1f0" class="icon"><Clock /></el-icon>
			<el-select v-model="selectDate" :placeholder="selectDate">
				<el-option
					v-for="item in options"
					:key="item.value"
					:label="item.label"
					:value="item.value"
				/>
			</el-select>
			<input class="answer-input" disabled :placeholder="selectDate" />
		</div>
	</QuestionTemplate>
</template>

<script setup lang="ts">
import store from "@/store"
import { onBeforeMount, ref, watch } from "vue"
import QuestionTemplate from "./QuestionTemplate.vue"
import { Clock } from "@element-plus/icons-vue"

const props = defineProps({
	questionIndex: {
		type: Number,
		required: true,
	},
	questionTitle: {
		type: String,
		required: true,
	},
})
const questionInput = ref("")
// 获取传来的数据
onBeforeMount(() => {
	if (props.questionTitle) {
		questionInput.value = props.questionTitle
	}
})

// 监听父组件传来的数据
watch(
	() => props.questionTitle,
	(val) => {
		questionInput.value = val
	}
)
// 选中的日期类型
const selectDate = ref(" 时 分")
const options = [
	{
		label: "时间： 时 分",
		value: " 时 分",
	},
	{
		label: "时长： 时 分 秒",
		value: " 时 分 秒",
	},
]
// 点击选中的方法
const beActive = () => {
	store.commit("setAcitveIndex", props.questionIndex)
}
let $myemit = defineEmits([
	"innerContentChange",
	"myDel",
	"selectChange",
	"copy",
	"confirmDel",
	"contentRequired",
])
// 问题输入框的值发生改变
const innerContentChange = () => {
	$myemit("innerContentChange", questionInput, props.questionIndex)
}
// 下拉选择框
const selectChange = (val: string) => {
	$myemit("selectChange", val)
}
// 复制按钮
const copy = (index: number) => {
	$myemit("copy", index)
}
// 删除按钮
const confirmDel = (index: number) => {
	$myemit("confirmDel", index)
}
// 必填按钮
const contentRequired = (index: number) => {
	$myemit("contentRequired", index)
}
</script>

<style scoped lang="scss">
@import "../../assets/style/base.scss";
.problem-box {
	padding: 5px;
	// 输入问题的盒子
	.input-box {
		width: 100%;
		height: 35px;
		position: relative;
		.input-index {
			position: absolute;
			z-index: 10;
			font-size: 14px;
			top: 10px;
			left: 5px;
			color: #3d475c;
		}
		.input-question {
			position: absolute;
			left: 0;
			width: 100%;
			color: #3d4757;
			font-size: 14px;
			font-weight: bold;
			padding: 8px 0 5px 25px;
			box-sizing: border-box;
			border: none;
			outline: none;
		}
		.input-question::placeholder {
			color: #aeb5c0;
		}
		.input-question:hover {
			border-bottom: 1px solid rgba(25, 55, 88, 0.1);
		}
		.input-question:focus {
			border-bottom: 1px solid $primary-font-color;
		}
	}
	// 用户填写输入框
	.answer-input {
		margin-top: 18px;
		padding: 0 0 10px 8px;
		font-size: 12px;
		width: 100%;
		box-sizing: border-box;
		border: none;
		outline: none;
		border-bottom: 1px solid rgba(25, 55, 88, 0.1);
	}
	.answer-input::placeholder {
		color: #aeb5c0;
	}
	.icon {
		vertical-align: text-bottom;
		margin-right: 10px;
	}
}
</style>
