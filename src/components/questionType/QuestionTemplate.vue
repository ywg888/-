<template>
	<div @click.stop="">
		<el-select
			v-model="value"
			class="select"
			placeholder="请选择"
			size="small"
			v-show="activeIndex === questionIndex"
			@change="emits('selectChange', value)"
		>
			<el-option
				v-for="questionType in questionTypes"
				:key="questionType.value"
				:label="questionType.label"
				:value="questionType.value"
			/>
		</el-select>
		<el-card
			class="el-card"
			:shadow="activeIndex === questionIndex ? 'always' : 'nerver'"
		>
			<!-- 中部内容部分 -->
			<!-- <span class="question">{{ questionIndex + '.' }}</span> -->
			<div><slot></slot></div>
			<!-- 底部部分 -->
			<footer
				class="footer"
				v-show="activeIndex === questionIndex"
				@click.stop=""
			>
				<div class="footer-area">
					<el-select
						v-model="value"
						class="footer-select"
						size="small"
						:placeholder="value"
						disabled
					>
						<el-option
							v-for="questionType in questionTypes"
							:key="questionType.value"
							:label="questionType.label"
							:value="questionType.value"
						/>
					</el-select>
					<span> | </span>
					<el-button plain class="button" @click="emits('copy', questionIndex)"
						>复制</el-button
					>
					<span> | </span>
					<el-checkbox
						@click="emits('contentRequired', questionIndex)"
						v-model="requireInput"
						class="checkbox"
						label="必填"
						size="small"
					/>
					<span> | </span>
					<div class="delete">
						<el-popover
							placement="bottom"
							v-model:Visible="delVisible"
							:width="150"
						>
							<div style="text-align: center; margin: 0 10px">
								<p>确定删除？</p>
								<el-button size="small" text @click="delVisible = false"
									>取消</el-button
								>
								<el-button size="small" type="primary" @click="confirmDel"
									>确定</el-button
								>
							</div>
							<template #reference>
								<img
									src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTQgMVYwaDN2MWg0djFIMFYxaDR6TTIgM2g3YTEgMSAwIDAgMSAxIDF2N2ExIDEgMCAwIDEtMSAxSDJhMSAxIDAgMCAxLTEtMVY0YTEgMSAwIDAgMSAxLTF6bTAgMXY3aDdWNEgyem0yIDFoMXY1SDRWNXptMiAwaDF2NUg2VjV6IiBmaWxsPSIjNzY3Qzg1IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4="
									alt="删除"
									style="vertical-align: text-bottom"
									@click="delVisible = true"
								/>
							</template>
						</el-popover>
					</div>
					<div class="delete">
						<el-popover placement="bottom" trigger="click" :width="150">
							<ul class="optList">
								<li>添加文件\图片标题</li>
								<li>添加题目说明</li>
								<li>将此题目添加道常用题</li>
								<li>隐藏题目</li>
								<li>将题目设置为不可设置</li>
							</ul>
							<template #reference>
								<img
									src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTJweCIgaGVpZ2h0PSIxMnB4IiB2aWV3Qm94PSIwIDAgMTIgMTIiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+5pyq5pW055CGLzAx5Zu+5qCHLzEycHgv5pu05aSaPC90aXRsZT4KICAgIDxnIGlkPSLmnKrmlbTnkIYvMDHlm77moIcvMTJweC/mm7TlpJoiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxwYXRoIGQ9Ik0yLDUgQzIuNTUyMjg0NzUsNSAzLDUuNDQ3NzE1MjUgMyw2IEMzLDYuNTUyMjg0NzUgMi41NTIyODQ3NSw3IDIsNyBDMS40NDc3MTUyNSw3IDEsNi41NTIyODQ3NSAxLDYgQzEsNS40NDc3MTUyNSAxLjQ0NzcxNTI1LDUgMiw1IFogTTYsNSBDNi41NTIyODQ3NSw1IDcsNS40NDc3MTUyNSA3LDYgQzcsNi41NTIyODQ3NSA2LjU1MjI4NDc1LDcgNiw3IEM1LjQ0NzcxNTI1LDcgNSw2LjU1MjI4NDc1IDUsNiBDNSw1LjQ0NzcxNTI1IDUuNDQ3NzE1MjUsNSA2LDUgWiBNMTAsNSBDMTAuNTUyMjg0Nyw1IDExLDUuNDQ3NzE1MjUgMTEsNiBDMTEsNi41NTIyODQ3NSAxMC41NTIyODQ3LDcgMTAsNyBDOS40NDc3MTUyNSw3IDksNi41NTIyODQ3NSA5LDYgQzksNS40NDc3MTUyNSA5LjQ0NzcxNTI1LDUgMTAsNSBaIiBpZD0i5b2i54q257uT5ZCIIiBmaWxsPSIjQUVCNUMwIj48L3BhdGg+CiAgICA8L2c+Cjwvc3ZnPg=="
									alt="选项"
									style="vertical-align: text-bottom"
								/>
							</template>
						</el-popover>
					</div>
				</div>
			</footer>
		</el-card>
	</div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue"
import { TProblemType } from "@/api/type"
import store from "@/store/index"
const props = defineProps({
	questionType: {
		type: String,
		required: true,
	},
	questionIndex: {
		type: Number,
		required: true,
	},
})
const emits = defineEmits([
	"selectChange",
	"copy",
	"confirmDel",
	"contentRequired",
])
const questionTypes = ref<{ value: TProblemType; label: string }[]>([
	{
		value: "input",
		label: "填空题",
	},
	{
		value: "singleSelect",
		label: "单选题",
	},
	{
		value: "multiSelect",
		label: "多选题",
	},
	{
		value: "pullSelect",
		label: "下拉题",
	},
	{
		value: "date",
		label: "日期题",
	},
	{
		value: "time",
		label: "时间题",
	},
	{
		value: "score",
		label: "分数题",
	},
])
// 下拉选择框
const value = ref("")
value.value = questionTypes.value.filter(
	(item) => item.value === props.questionType
)[0].label

let activeIndex = computed(() => {
	return store.state.activeIndex
})

// 复制按钮
// 必填
let requireInput = ref(false)
// 删除
const delVisible = ref(false)
const confirmDel = () => {
	delVisible.value = false
	emits("confirmDel", props.questionIndex)
}
// 选项
</script>

<style scoped lang="scss">
@import "@/assets/style/base.scss";
.shadowShow {
	width: 100%;
	min-height: 200px;
	color: $primary-font-color;
}
.select {
	width: 80px;
}
.el-card {
	width: 100%;
	position: relative;
	.question {
		position: absolute;
		top: 5px;
		left: 0;
		z-index: 1;
		color: #3d4757;
		font-weight: initial;
		font-size: 14px;
	}
	.footer {
		display: flex;
		align-items: center;
		flex-direction: row;
		justify-content: flex-end;
		font-size: 14px;
		line-height: 20px;
		color: #949aae;
	}
}
.footer-area {
	display: flex;
	align-items: center;
	flex-direction: row;
	justify-content: space-around;
	height: 24px;
	.footer-select {
		width: 80px;
		padding: 0 8px;
		margin: 0 16px;
	}
	.button {
		font-size: 12px;
		height: 24px;
		border: 1px solid #e2e6ed;
		margin: 0 10px;
		border-radius: 2px;
		cursor: pointer;
		padding: 0 5px;
		color: #3d4757;
	}
	.checkbox {
		font-size: 12px;
		height: 24px;
		margin: 0 10px;
	}
	.delete {
		height: 24px;
		width: 12px;
		margin: 0 10px;
		cursor: pointer;
	}
}
.optList {
	line-height: 30px;
	li:hover {
		background-color: rgb(249, 250, 253);
	}
}
</style>
