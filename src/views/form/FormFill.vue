<template>
	<div class="form-fill-page">
		<BaseHeader>
			<div class="nav-left-box" @click="$router.replace({ name: 'home_page' })">
				<img
					class="nav-form-img"
					src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyNHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+5paH5qGj5qC85byP5Zu+5qCHL+ihqOWNlS8yNDwvdGl0bGU+CiAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSIgaWQ9ImxpbmVhckdyYWRpZW50LTEiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMzBBOEZGIiBvZmZzZXQ9IjAlIj48L3N0b3A+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMxMjdDRjEiIG9mZnNldD0iMTAwJSI+PC9zdG9wPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8L2RlZnM+CiAgICA8ZyBpZD0i5paH5qGj5qC85byP5Zu+5qCHL+ihqOWNlS8yNCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IuihqOWNlSI+CiAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUtMTkiIGZpbGw9InVybCgjbGluZWFyR3JhZGllbnQtMSkiIHg9IjAiIHk9IjAiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgcng9IjIiPjwvcmVjdD4KICAgICAgICAgICAgPGcgaWQ9Iue8lue7hC0xOCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNC43MTg3NTAsIDUuNTYyNTAwKSIgZmlsbD0iI0ZGRkZGRiI+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTMuMjUsMC40NTAwNjgxOTQgQzEzLjgxMDUwMzMsMC40NTAwNjgxOTQgMTQuMjY2NTY1NSwwLjg5NzIzMzUyOSAxNC4yODA5MDI0LDEuNDU0Mjc5OTkgTDE0LjI4MTI1LDEuNDgxMzE4MTkgTDE0LjI4MTI1LDEyLjQwODQxMzIgQzE0LjI4MTI1LDEyLjk2ODkxNjUgMTMuODM0MDg0NywxMy40MjQ5Nzg3IDEzLjI3NzAzODIsMTMuNDM5MzE1NyBMMi4yOTEzMTk5NSwxMy40Mzk2NjMyIEMxLjczMDgxNjY4LDEzLjQzOTY2MzIgMS4yNzQ3NTQ0NiwxMi45OTI0OTc5IDEuMjYwNDE3NTIsMTIuNDM1NDUxNCBMMS4yNjAwNjk5NSw2LjQ0NDg2NTcxIEwzLjI2OTA5NzAyLDYuNDQ0ODY1NzEgTDMuMjY5MDk3MDIsMTEuNDMyODU5MSBMMTIuMjgxMTg2OSwxMS40MzI4NTkxIEwxMi4yODExODY5LDIuNDYwODg3MyBMOS4xMTI1LDIuNDYwODg3MyBMNy40NTAyNTI4NCw0Ljk5NjY2Nzg4IEM3LjI4NDE5Njk0LDUuMjYxNzc3NTcgNi45OTcyOTE4Miw1LjQyNjAyMTc5IDYuNjg1OTQ2MTUsNS40MzYwMjgxNiBMNi42NTU3NDI4Niw1LjQzNjUxMzIzIEwwLjIwMjkxNjA2Niw1LjQzNjA2ODE5IEwxLjM0ODkxNjA3LDMuNDQ5MDY4MTkgTDYuMjQwNDY4NzUsMy40NDkzNDEzOCBMNy45MDI4NTYxOCwwLjg4OTkxMzU0NiBDOC4wNjg5MTIwNywwLjYyNDgwMzg2MiA4LjM1NTgxNzE5LDAuNDYwNTU5NjM2IDguNjY3MTYyODcsMC40NTA1NTMyNjkgTDEzLjI1LDAuNDUwMDY4MTk0IFoiIGlkPSLlvaLnirbnu5PlkIgiIGZpbGwtcnVsZT0ibm9uemVybyI+PC9wYXRoPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTUuODA3NzM5NTgsMC40Mzc1IEw1LjgwNzI1LDAuNDcyNSBMNC42NzYyNSwyLjQzMDUgTDEuMjgxMjUsMi40MzA1IEwyLjQzMjI1LDAuNDM3NSBMNS44MDc3Mzk1OCwwLjQzNzUgWiIgaWQ9IuW9oueKtue7k+WQiCI+PC9wYXRoPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4="
					width="30"
					height="30"
				/>
				<div class="nav-text">{{ form.title }}</div>
			</div>
		</BaseHeader>
		<div class="middle-gap"></div>
		<div class="form-card">
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
					@innerContentChange="answerChange"
					@singleSelectChange="singleSelectChange"
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
				<div class="bottom-btn-box">
					<el-button
						class="submit-button"
						size="small"
						type="primary"
						@click="submit"
						>提交</el-button
					>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { getForm, inputForm } from "@/api/api"
import {
	IForm,
	IInputReq,
	IInputResult,
	IProblem,
	ISelectOption,
	TProblemType,
} from "@/api/type"
import BaseHeader from "@/components/BaseHeader.vue"
import { onBeforeMount, ref } from "vue"
import { useRouter, useRoute } from "vue-router"
// 填写表单问题组件
import InputFill from "@/components/questionFill/InputFill.vue"
import SingleSelectFill from "@/components/questionFill/SingleSelectFill.vue"
import MultiSelectFill from "@/components/questionFill/MultiSelectFill.vue"
import PullSelectFill from "@/components/questionFill/PullSelectFill.vue"
import DateFill from "@/components/questionFill/DateFill.vue"
import TimeFill from "@/components/questionFill/TimeFill.vue"
import ScoreFill from "@/components/questionFill/ScoreFill.vue"
import { ElMessage } from "element-plus"

// 获取传来的id
const route = useRoute()
let id = ref<string>("")
id.value = route.params.id as string

// 获取的表单
let form = ref<IForm>({
	id: "",
	title: "",
	subTitle: "",
	problems: [
		{
			id: "",
			title: "",
			type: "input",
			result: {} as IInputResult,
			required: true,
			setting: null,
		},
	],
	status: 1,
	isStar: false,
	utime: 0,
	ctime: 0,
	author: "",
})

// 根据id获取表单
onBeforeMount(async () => {
	try {
		const res = await getForm(id.value)
		if (res.data.stat === "ok") {
			form.value = res.data.data.item
			problemsArr.value = form.value.problems as Required<
				IProblem<TProblemType>
			>[]
		}
	} catch (error) {
		console.log(error)
		console.log("请求服务器出错")
	}
})

// 填写的问题数组
let problemsArr = ref<Required<IProblem<TProblemType>>[]>(
	form.value.problems as Required<IProblem<TProblemType>>[]
)
const answerChange = (
	innerContent:
		| string
		| number
		| Omit<ISelectOption, "status">
		| Omit<ISelectOption, "status">[],
	questionIndex: number
): void => {
	problemsArr.value[questionIndex].result.value = innerContent
}

// 单选题选项改变
const singleSelectChange = (
	answerValue: string,
	questionIndex: number
): void => {
	problemsArr.value[questionIndex].result.value = answerValue
}

//完成填写
const router = useRouter()
const submit = async () => {
	// 确认框
	ElMessageBox.confirm("提交后不可修改，确认提交?", "提交内容", {
		confirmButtonText: "确认",
		cancelButtonText: "取消",
		type: "",
	})
		.then(async () => {
			// 待提交的已填写的表单
			let submitForm = ref<IInputReq>({
				formId: form.value.id,
				problems: problemsArr.value,
			})
			let flag = true
			submitForm.value.problems.forEach((item) => {
				if (item.required) {
					// eslint-disable-next-line
					flag = !!item.result.value ? true : false
				}
			})
			if (flag) {
				ElMessage({
					type: "success",
					message: "提交成功",
				})
				try {
					const res = await inputForm(submitForm.value)
					if (res.status === 200) {
						router.replace({ name: "home_page" })
					}
				} catch (error) {
					console.log(error)
					console.log("服务器出错")
				}
			} else {
				ElMessage({
					type: "warning",
					message: "请先完成必填项",
				})
			}
		})
		.catch(() => {
			console.log("取消")
		})
}
</script>

<style scoped lang="scss">
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
.form-fill-page {
	background-color: #fff;
	box-sizing: border-box;
	width: 100%;
	min-height: 100vh;
	.middle-gap {
		height: 66px;
		background-color: #f2f4f7;
	}
	// 以移动优先的方式开始适配
	.form-card {
		width: 90%;
		margin: 0 auto;
		padding: 15px 20px;
		box-sizing: border-box;
		min-height: calc(100vh - 88px);
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
		.bottom-btn-box {
			padding: 0;
			.submit-button {
				width: 100%;
				font-size: 20px;
			}
		}
	}
	// 平板，电脑
	@media screen and (min-width: 641px) {
		background-color: #f2f4f7;
		.form-card {
			width: 776px;
			padding: 48px 102px 90px;
			.sub-title {
				padding: 22px 0 10px;
			}
			.problems-container {
				* {
					padding: 24px 0;
				}
			}
			.bottom-btn-box {
				text-align: center;
				.submit-button {
					width: 80px !important;
					padding: 0px;
					height: 40px;
					font-size: 16px;
				}
			}
		}
	}
}
</style>
