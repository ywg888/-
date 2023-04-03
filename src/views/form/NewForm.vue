<template>
	<div @click="cancelActive">
		<div class="top-nav-box">
			<BaseHeader>
				<div class="nav-left-box" @click="router.back()">
					<img
						class="nav-back-img"
						width="20"
						height="20"
						src="../../assets/img/form/小于号.svg"
					/>
					<img
						class="nav-form-img"
						src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyNHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+5paH5qGj5qC85byP5Zu+5qCHL+ihqOWNlS8yNDwvdGl0bGU+CiAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSIgaWQ9ImxpbmVhckdyYWRpZW50LTEiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMzBBOEZGIiBvZmZzZXQ9IjAlIj48L3N0b3A+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMxMjdDRjEiIG9mZnNldD0iMTAwJSI+PC9zdG9wPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8L2RlZnM+CiAgICA8ZyBpZD0i5paH5qGj5qC85byP5Zu+5qCHL+ihqOWNlS8yNCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IuihqOWNlSI+CiAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUtMTkiIGZpbGw9InVybCgjbGluZWFyR3JhZGllbnQtMSkiIHg9IjAiIHk9IjAiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgcng9IjIiPjwvcmVjdD4KICAgICAgICAgICAgPGcgaWQ9Iue8lue7hC0xOCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNC43MTg3NTAsIDUuNTYyNTAwKSIgZmlsbD0iI0ZGRkZGRiI+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTMuMjUsMC40NTAwNjgxOTQgQzEzLjgxMDUwMzMsMC40NTAwNjgxOTQgMTQuMjY2NTY1NSwwLjg5NzIzMzUyOSAxNC4yODA5MDI0LDEuNDU0Mjc5OTkgTDE0LjI4MTI1LDEuNDgxMzE4MTkgTDE0LjI4MTI1LDEyLjQwODQxMzIgQzE0LjI4MTI1LDEyLjk2ODkxNjUgMTMuODM0MDg0NywxMy40MjQ5Nzg3IDEzLjI3NzAzODIsMTMuNDM5MzE1NyBMMi4yOTEzMTk5NSwxMy40Mzk2NjMyIEMxLjczMDgxNjY4LDEzLjQzOTY2MzIgMS4yNzQ3NTQ0NiwxMi45OTI0OTc5IDEuMjYwNDE3NTIsMTIuNDM1NDUxNCBMMS4yNjAwNjk5NSw2LjQ0NDg2NTcxIEwzLjI2OTA5NzAyLDYuNDQ0ODY1NzEgTDMuMjY5MDk3MDIsMTEuNDMyODU5MSBMMTIuMjgxMTg2OSwxMS40MzI4NTkxIEwxMi4yODExODY5LDIuNDYwODg3MyBMOS4xMTI1LDIuNDYwODg3MyBMNy40NTAyNTI4NCw0Ljk5NjY2Nzg4IEM3LjI4NDE5Njk0LDUuMjYxNzc3NTcgNi45OTcyOTE4Miw1LjQyNjAyMTc5IDYuNjg1OTQ2MTUsNS40MzYwMjgxNiBMNi42NTU3NDI4Niw1LjQzNjUxMzIzIEwwLjIwMjkxNjA2Niw1LjQzNjA2ODE5IEwxLjM0ODkxNjA3LDMuNDQ5MDY4MTkgTDYuMjQwNDY4NzUsMy40NDkzNDEzOCBMNy45MDI4NTYxOCwwLjg4OTkxMzU0NiBDOC4wNjg5MTIwNywwLjYyNDgwMzg2MiA4LjM1NTgxNzE5LDAuNDYwNTU5NjM2IDguNjY3MTYyODcsMC40NTA1NTMyNjkgTDEzLjI1LDAuNDUwMDY4MTk0IFoiIGlkPSLlvaLnirbnu5PlkIgiIGZpbGwtcnVsZT0ibm9uemVybyI+PC9wYXRoPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTUuODA3NzM5NTgsMC40Mzc1IEw1LjgwNzI1LDAuNDcyNSBMNC42NzYyNSwyLjQzMDUgTDEuMjgxMjUsMi40MzA1IEwyLjQzMjI1LDAuNDM3NSBMNS44MDc3Mzk1OCwwLjQzNzUgWiIgaWQ9IuW9oueKtue7k+WQiCI+PC9wYXRoPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4="
						width="30"
						height="30"
					/>
					<div class="nav-text">新建表单</div>
				</div>
			</BaseHeader>
			<div class="nav-bottom-line"></div>
			<div class="middle-gap"></div>
		</div>
		<div class="container">
			<div class="left">
				<div class="add-problem">添加题目</div>
				<div class="select-box">
					<el-Button
						class="btn"
						size="small"
						plain
						v-for="(item, index) in problemType"
						:key="index"
						@click.stop="addProblem(index)"
						>{{ item.title }}</el-Button
					>
				</div>
				<div class="problem-template">题目模板</div>
				<div class="select-box">
					<el-Button
						class="btn"
						size="small"
						plain
						v-for="(item, index) in problemTemplate"
						:key="index"
						>{{ item }}</el-Button
					>
				</div>
				<div class="problem-often">我的常用题</div>
			</div>
			<div class="center">
				<input
					class="main-title"
					v-model="formMainTitle"
					type="text"
					placeholder="输入表单标题"
				/>
				<input
					class="sub-title"
					v-model="formSubTitle"
					type="text"
					placeholder="点击设置描述"
				/>
				<div class="problems-container">
					<component
						v-for="(item, index) in problemsArr"
						:key="item.id + componentKey"
						:questionIndex="index"
						:questionType="item.type"
						:questionTitle="item.title"
						:problem="item"
						@innerContentChange="questionChange"
						@selectChange="(val:string) => selectChange(val,item.type,item.title,index)"
						@copy="copy"
						@confirmDel="confirmDel"
						@contentRequired="contentRequired"
						:is="
							item.type == 'input'
								? InputQuestion
								: item.type == 'date'
								? DateQuestion
								: item.type == 'multiSelect'
								? MultiSelectQuestion
								: item.type == 'pullSelect'
								? PullSelectQuestion
								: item.type == 'singleSelect'
								? SingleSelectQuestion
								: item.type == 'time'
								? TimeQuestion
								: ScoreQuestion
						"
					></component>
				</div>
				<div class="bottom-info">
					<div class="jinshan-form">
						<img
							class="jinshan-form-img"
							width="23"
							height="23"
							src="../../assets/img/form/金山icon.svg"
							alt=""
						/>
						<span class="jinshan-form-text">金山表单</span>
					</div>
					<div class="describe">
						<span>百万数据收视量</span>
						<span class="describe-line">|</span>
						<span>可视化结果分析</span>
					</div>
				</div>
			</div>
			<div class="right">
				<div class="form-other-function-box">
					<el-Button
						plain
						class="btn form-other-function-btn"
						@click.stop="toPreview"
						>预览</el-Button
					>
					<el-Button
						plain
						class="btn form-other-function-btn"
						@click.stop="save"
						>保存草稿</el-Button
					>
				</div>
				<el-Button
					type="primary"
					@click.stop="submitForm"
					class="submit-form-button"
					>提交</el-Button
				>
			</div>
		</div>
		<div class="preview-mask" v-show="isPreview">
			<div class="preview-content-box">
				<div class="main-title">{{ formMainTitle }}</div>
				<div class="sub-title">{{ formSubTitle }}</div>
				<div class="problems-container">
					<component
						v-for="(item, index) in problemsArr"
						:key="item.id + componentKey"
						:questionIndex="index"
						:questionTitle="item.title"
						:questionItem="item"
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
			<div class="preview-bottom-btn-box">
				<el-button plain size="large" class="btn" @click="keepEditor"
					>继续编辑</el-button
				>
				<el-button type="primary" size="large" @click="submitForm"
					>完成创建</el-button
				>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import BaseHeader from "@/components/BaseHeader.vue"
import { createForm, getForm, listType, startCollectForm } from "@/api/api"
import {
	ESelectOptionStatus,
	ICreateFormReq,
	IInputResult,
	IProblem,
	IProblemType,
	TProblemType,
	TResult,
	TSetting,
} from "@/api/type"
import { useRouter, useRoute } from "vue-router"
import { onBeforeMount, Ref, ref } from "vue"
// 编辑表单问题组件
import InputQuestion from "@/components/questionType/InputQuestion.vue"
import SingleSelectQuestion from "@/components/questionType/SingleSelectQuestion.vue"
import MultiSelectQuestion from "@/components/questionType/MultiSelectQuestion.vue"
import PullSelectQuestion from "@/components/questionType/PullSelectQuestion.vue"
import DateQuestion from "@/components/questionType/DateQuestion.vue"
import TimeQuestion from "@/components/questionType/TimeQuestion.vue"
import ScoreQuestion from "@/components/questionType/ScoreQuestion.vue"
import store from "@/store/index"
// 填写表单问题组件
import InputFill from "@/components/questionFill/InputFill.vue"
import SingleSelectFill from "@/components/questionFill/SingleSelectFill.vue"
import MultiSelectFill from "@/components/questionFill/MultiSelectFill.vue"
import PullSelectFill from "@/components/questionFill/PullSelectFill.vue"
import DateFill from "@/components/questionFill/DateFill.vue"
import TimeFill from "@/components/questionFill/TimeFill.vue"
import ScoreFill from "@/components/questionFill/ScoreFill.vue"
import { ElMessage } from "element-plus"

const cancelActive = () => {
	store.commit("setAcitveIndex", -1)
}

// 题目数组
let problemsArr = ref<(IProblem<TProblemType> & { isNew: boolean })[]>([
	{
		type: "input",
		title: "",
		required: false,
		setting: null,
		isNew: true,
		result: {} as IInputResult,
	},
])
// 新建的表单
const formMainTitle = ref("")
const formSubTitle = ref("")
let newForm = ref<ICreateFormReq>({
	title: "",
	subTitle: "",
	problems: [],
})

// 获取传来的表单id(使用query传值，可传可不传)
let id = ref<string>("")
const route = useRoute()
if (route.query.id) {
	id.value = route.query.id as string
	// 根据id获取表单
	onBeforeMount(async () => {
		try {
			const res = await getForm(id.value)
			if (res.data.stat === "ok") {
				newForm.value = res.data.data.item
				problemsArr.value = newForm.value.problems
				formMainTitle.value = newForm.value.title
				formSubTitle.value = newForm.value.subTitle
			}
		} catch (error) {
			console.log(error)
			console.log("请求服务器出错")
		}
	})
}
// 点击添加题目到本地题目数组
const addProblem = (index: number) => {
	let activeIndex = store.state.activeIndex
	if (activeIndex === -1) {
		activeIndex = problemsArr.value.length - 1
	}
	// 选项，根据index添加指定题目类型
	if (index === 0) {
		problemsArr.value.splice(activeIndex + 1, 0, {
			type: "input",
			title: "",
			result: {} as TResult<"input">,
			required: false,
			setting: null as TSetting<"input">,
			isNew: true,
		})
	} else if (index === 1) {
		problemsArr.value.splice(activeIndex + 1, 0, {
			type: "singleSelect",
			title: "",
			result: {} as TResult<"singleSelect">,
			required: false,
			setting: {
				options: [
					{ id: "0", title: "选项1", status: ESelectOptionStatus.normal },
					{ id: "1", title: "选项2", status: ESelectOptionStatus.normal },
				],
			} as TSetting<"singleSelect">,
			isNew: true,
		})
	} else if (index === 2) {
		problemsArr.value.splice(activeIndex + 1, 0, {
			type: "multiSelect",
			title: "",
			result: {} as TResult<"multiSelect">,
			required: false,
			setting: {
				options: [
					{ id: "0", title: "选项1", status: ESelectOptionStatus.normal },
					{ id: "1", title: "选项2", status: ESelectOptionStatus.normal },
				],
			} as TSetting<"multiSelect">,
			isNew: true,
		})
	} else if (index === 3) {
		problemsArr.value.splice(activeIndex + 1, 0, {
			type: "pullSelect",
			title: "",
			result: {} as TResult<"pullSelect">,
			required: false,
			setting: {
				options: [
					{ id: "0", title: "选项1", status: ESelectOptionStatus.normal },
					{ id: "1", title: "选项1", status: ESelectOptionStatus.normal },
				],
			} as TSetting<"pullSelect">,
			isNew: true,
		})
	} else if (index === 4) {
		problemsArr.value.splice(activeIndex + 1, 0, {
			type: "date",
			title: "",
			result: {} as TResult<"date">,
			required: false,
			setting: null as TSetting<"date">,
			isNew: true,
		})
	} else if (index === 5) {
		problemsArr.value.splice(activeIndex + 1, 0, {
			type: "time",
			title: "",
			result: {} as TResult<"time">,
			required: false,
			setting: null as TSetting<"time">,
			isNew: true,
		})
	} else if (index === 6) {
		problemsArr.value.splice(activeIndex + 1, 0, {
			type: "score",
			title: "",
			result: {} as TResult<"score">,
			required: false,
			setting: null as TSetting<"score">,
			isNew: true,
		})
	}

	store.commit("setAcitveIndex", activeIndex + 1)
}
// 题目类型
let problemType = ref<IProblemType[]>([])
// 题目模板
let problemTemplate = ref<string[]>(["姓名", "性别"])
//获取题目类型
onBeforeMount(async () => {
	try {
		let res = await listType()
		if (res.data.stat === "ok") {
			problemType.value = res.data.data.problemTypes
		} else {
			console.log("数据传输有误")
		}
	} catch (error) {
		console.log(error)
		console.log("服务器出错")
	}
})

// 预览
const isPreview = ref<boolean>(false)
const toPreview = () => {
	newForm = ref<ICreateFormReq>({
		title: formMainTitle.value,
		subTitle: formSubTitle.value == "" ? "  " : formSubTitle.value,
		problems: problemsArr.value,
	})
	if (!newForm.value.title) {
		ElMessage.warning("请输入表单标题")
	} else {
		let problemsTitleIsNull = ref<boolean>(false)
		let nullTitleProblemIndex = ref<number>(0)
		newForm.value.problems.forEach((item, index) => {
			if (!item.title) {
				problemsTitleIsNull.value = true
				nullTitleProblemIndex.value = index
			}
		})
		if (problemsTitleIsNull.value) {
			ElMessage.warning("问题不能为空，请输入")
			store.commit("setAcitveIndex", nullTitleProblemIndex)
		} else {
			isPreview.value = true
		}
	}
}
// 继续编辑
const keepEditor = () => {
	isPreview.value = false
}
// 保存
const save = async () => {
	newForm = ref<ICreateFormReq>({
		title: formMainTitle.value,
		subTitle: formSubTitle.value == "" ? "  " : formSubTitle.value,
		problems: problemsArr.value.map((item) => {
			if (!item.title) {
				item.title = "  "
			}
			return item
		}),
	})
	try {
		if (!newForm.value.title) {
			ElMessage("想保存，至少给个标题吧亲~")
		} else {
			let res = await createForm(newForm.value)
			if (res.statusText === "OK") {
				ElMessage.success("草稿保存成功")
			}
		}
	} catch (error) {
		console.log(error)
		console.log("服务器出错")
	}
}
// 提交
const router = useRouter()
const submitForm = async () => {
	newForm = ref<ICreateFormReq>({
		title: formMainTitle.value,
		subTitle: formSubTitle.value == "" ? "  " : formSubTitle.value,
		problems: problemsArr.value,
	})
	try {
		if (!newForm.value.title) {
			ElMessage.warning("请输入表单标题")
		} else {
			let problemsTitleIsNull = ref<boolean>(false)
			let nullTitleProblemIndex = ref<number>(0)
			newForm.value.problems.forEach((item, index) => {
				if (!item.title) {
					problemsTitleIsNull.value = true
					nullTitleProblemIndex.value = index
				}
			})
			if (problemsTitleIsNull.value) {
				ElMessage.warning("问题不能为空，请输入")
				store.commit("setAcitveIndex", nullTitleProblemIndex)
			} else {
				let res = await createForm(newForm.value)
				if (res.statusText === "OK") {
					ElMessage.success("创建成功，可邀请编写")
					// 开始收集
					let collectRes = await startCollectForm({ id: res.data.data.id })
					if (collectRes.data.stat === "ok") {
						router.replace({
							name: "share",
							params: { id: res.data.data.id as string, to: "share" },
						})
					}
				}
			}
		}
	} catch (error) {
		console.log(error)
		console.log("服务器出错")
	}
}

// 问题部分
// 问题组件中问题输入框改变
const questionChange = (
	inputContent: Ref<string>,
	questionIndex: number
): void => {
	problemsArr.value[questionIndex].title = inputContent.value
}
// 选择题目类型改变
const componentKey = ref("")
const selectChange = (
	val: string,
	type: string,
	title: string,
	index: number
) => {
	type = val
	// 先将标题保留，然后删除原来的题目，在指定位置添加新的题目，带上题目标题
	let newProblem = ref<IProblem<TProblemType> & { isNew: boolean }>({
		type: type as TProblemType,
		title: title as string,
		required: false,
		setting: null,
		isNew: true,
		result: {} as IInputResult,
	})
	if (
		type === "singleSelect" ||
		type === "multiSelect" ||
		type === "pullSelect"
	) {
		newProblem.value.setting = {
			options: [
				{ id: "0", title: "选项1", status: ESelectOptionStatus.normal },
			],
		} as TSetting<"singleSelect">
	}
	problemsArr.value.splice(index, 1, newProblem.value)
}

// 复制按钮
const copy = (index: number) => {
	console.log("复制")
	problemsArr.value.splice(index + 1, 0, { ...problemsArr.value[index] })
	store.commit("setAcitveIndex", index + 1)
}

// 删除按钮
const confirmDel = (index: number) => {
	problemsArr.value.splice(index, 1)
}

// 必填按钮
const contentRequired = (index: number) => {
	if (event?.target.tagName === "SPAN") {
		problemsArr.value[index].required = !problemsArr.value[index].required
	}
}
</script>

<style scoped lang="scss">
// 顶部导航栏部分
.top-nav-box {
	height: 100%;
	background-color: #f2f4f7;
	.nav-left-box {
		display: flex;
		align-items: center;
		cursor: pointer;
		* {
			margin-right: 10px;
		}
		.nav-text {
			font-size: 18px;
			font-weight: 500;
			color: #3c414b;
		}
	}
	.nav-bottom-line {
		position: fixed;
		top: 56px;
		height: 20px;
		width: 100%;
		z-index: 100;
		background-color: #f2f4f7;
	}
	.middle-gap {
		height: 66px;
		background-color: #f2f4f7;
	}
}
// 内容容器
.container {
	display: flex;
	background-color: #f2f4f7;
	min-width: 1520px;
	justify-content: center;
	margin-top: 10px;
}
@media screen and (max-width: 1500px) {
	.container {
		justify-content: flex-start;
	}
}

/* 左边区 */
.left {
	background-color: #ffffff;
	border: 1px solid #e7e9eb;
	min-width: 212px;
	max-width: 212px;
	max-height: 600px;
	margin-left: 16px;
	margin-right: 10px;
	padding: 24px 16px 0;
	overflow: 0 auto;
	text-align: left;
	border: 1px solid #e7e9eb;
	.add-problem,
	.problem-template,
	.problem-often {
		font-weight: bold;
		font-size: 14px;
		margin-bottom: 20px;
	}
	.select-box {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-auto-rows: 35px;
		gap: 10px;
		font-size: 12px !important;
		* {
			margin-left: 0;
		}
	}
	.problem-template,
	.problem-often {
		margin-top: 50px;
	}
	.btn {
		color: #3d4757 !important;
	}
}
// 中间区
.center {
	background-color: #fff;
	min-width: 776px;
	min-height: calc(100vh - 150px);
	height: fit-content;
	padding: 50px 88px;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	align-items: center;
	border: 1px solid #e7e9eb;
	border-radius: 2px;
	position: relative;
	.main-title,
	.sub-title {
		border: none;
		outline: none;
		height: 20px;
		text-align: center;
	}
	.main-title {
		color: #3d4757;
		font-size: 20px;
		font-weight: bold;
		padding: 5px 0 0;
	}
	.sub-title {
		padding: 35px 0;
	}
	.main-title::placeholder {
		color: #3d4757;
		font-size: 20px;
		font-weight: bold;
	}
	.sub-title::placeholder {
		color: #aeb5c0;
	}
	.main-title:focus::placeholder,
	.sub-title:focus::placeholder {
		opacity: 0;
	}
	.main-title:focus {
		width: fit-content;
	}

	.problems-container {
		width: 100%;
		font-size: 20px;
		* {
			padding: 10px 0;
		}
	}
	// 中间的底部信息
	.bottom-info {
		display: flex;
		flex-direction: column;
		height: 80px;
		align-items: center;
		justify-content: center;
		position: absolute;
		bottom: -80px;
		* {
			margin-top: 5px;
		}
		.jinshan-form {
			display: flex;
			align-items: center;
			.jinshan-form-text {
				font-size: 14px;
				font-weight: bold;
				color: #3d4757;
				margin-left: 6px;
			}
		}
		.describe {
			color: #767c85;
			font-size: 13px;
			.describe-line {
				margin: 0 6px;
			}
		}
	}
}

@media screen and (max-width: 1217px) {
	.center {
		min-width: 663px;
	}
}

// 右边区
.right {
	min-width: 290px;
	margin-left: 16px;
	margin-right: 10px;
	.form-other-function-box {
		margin-top: 20px;
		display: flex;
		justify-content: space-between;
		.form-other-function-btn {
			width: 48%;
			margin: 0;
		}
	}
	.submit-form-button {
		width: 100%;
		margin-top: 20px;
	}
}

// 预览的遮罩
.preview-mask {
	position: fixed;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	z-index: 99;
	background-color: #f2f4f7;
	display: flex;
	flex-direction: column;
	align-items: center;
	box-sizing: border-box;
	.preview-content-box {
		width: 780px;
		height: calc(100vh - 172px);
		background-color: white;
		margin-top: 78px;
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
			font-size: 22px;
			margin-top: 0;
			* {
				padding: 24px 0;
			}
		}
	}
	.preview-bottom-btn-box {
		width: 350px;
		display: flex;
		justify-content: space-between;
		margin-top: 20px;
		margin: auto;
		* {
			width: 156px;
			font-size: 16px;
			height: 36px;
		}
	}
}
@media screen and (max-width: 850px) {
	.preview-mask {
		align-items: flex-start;
	}
}
</style>
