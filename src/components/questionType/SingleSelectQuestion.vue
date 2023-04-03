<template>
	<QuestionTemplate
		:question-index="questionIndex"
		:question-type="'singleSelect'"
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
			<el-radio-group v-model="select" class="select-group">
				<li
					v-for="(item, index) in problemData.setting?.options"
					:key="index"
					class="select"
				>
					<el-radio disabled :label="item.title" size="large" class="label"
						><input
							v-model="item.title"
							:placeholder="'选项' + (index + 1)"
							class="select-input"
						/>
					</el-radio>
					<span
						v-show="activeIndex === questionIndex"
						@click="deleteSelect(index)"
						class="del-icon"
						>X</span
					>
				</li>
			</el-radio-group>
			<div class="footer-opts">
				<div
					v-show="activeIndex === questionIndex"
					class="footer-opt"
					@click="addSelect"
				>
					+ 选项
				</div>
				<div
					v-show="activeIndex === questionIndex"
					class="footer-opt"
					@click="setAnswer"
				>
					预设答案
				</div>
				<el-dialog v-model="dialogFormVisible" title="预设答案">
					<el-select v-model="select" placeholder="请选择">
						<el-option
							v-for="(item, index) in problemData.setting?.options"
							:key="index"
							:label="item.title"
							:value="item.title"
						/>
					</el-select>
					<template #footer>
						<span class="dialog-footer">
							<el-button @click="dialogFormVisible = false">取消</el-button>
							<el-button type="primary" @click="dialogFormVisible = false"
								>确定</el-button
							>
						</span>
					</template>
				</el-dialog>
			</div>
		</div>
	</QuestionTemplate>
</template>

<script setup lang="ts">
import { IProblem, ISelectOption, TProblemType } from "@/api/type"
import store from "@/store"
import { ref, computed, PropType, onBeforeMount, watch } from "vue"
import QuestionTemplate from "./QuestionTemplate.vue"
let activeIndex = computed(() => {
	return store.state.activeIndex
})
const props = defineProps({
	questionIndex: {
		type: Number,
		required: true,
	},
	questionTitle: {
		type: String,
		required: true,
	},
	problem: {
		type: Object as PropType<IProblem<TProblemType>>,
		required: true,
	},
})
// 输入的问题
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
// 单选的选项
const select = ref("")
// 题目的问题
const problemData = ref(props.problem)
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
// 删除选项
const deleteSelect = (index: number) => {
	problemData.value.setting?.options.splice(index, 1)
}
// 必填按钮
const contentRequired = (index: number) => {
	$myemit("contentRequired", index)
}
// 添加选项
const addSelect = () => {
	let length = problemData.value.setting?.options.length as number
	const id = length + ""
	const title = "选项" + (length + 1) + ""
	const option: ISelectOption = { id: id, title: title, status: 1 }
	problemData.value.setting?.options.push(option)
}
// 预设答案
const dialogFormVisible = ref(false)
const setAnswer = () => {
	dialogFormVisible.value = true
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
	// 选项框
	.select-group {
		width: 100%;
		color: #ccd0d7;
	}

	.select {
		margin-top: 18px;
		padding: 0 0 10px 8px;
		font-size: 12px;
		width: 100%;
		box-sizing: border-box;
		.label {
			width: 80%;
			.select-input {
				width: 100%;
				border: none;
				outline: none;
				border-bottom: 1px solid rgba(25, 55, 88, 0.1);
			}
			.select-input::placeholder {
				color: #ccd0d7;
			}
		}
		.label:hover {
			cursor: default;
		}
		.del-icon {
			cursor: pointer;
			display: inline-block;
			margin-left: 10px;
			width: 20px;
			font-size: 14px;
			text-align: center;
		}
	}
	.dialog-footer button:first-child {
		margin-right: 10px;
	}
	.footer-opts {
		margin-top: 10px;
		font-size: 12px;
		.footer-opt {
			color: $primary-font-color;
			margin: 20px 10px;
			cursor: pointer;
		}
	}
}
</style>
<style lang="scss">
.el-radio__label {
	width: 100%;
}
</style>
