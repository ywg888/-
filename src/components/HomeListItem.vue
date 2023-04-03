<template>
	<div class="list-item">
		<!-- 左侧 -->
		<div class="list-item-left" @click="clickAction[itemState.itemType]">
			<!-- 左侧-表单标签 -->
			<home-tag></home-tag>
			<!-- 左侧-标题 -->
			<div class="list-item-left-name">
				<span class="list-item-left-name-title">{{ formData?.title }}</span>
				<span class="list-item-left-name-subtitle">
					{{ " " + formData?.subTitle }}
				</span>
			</div>
		</div>
		<!-- 右侧 -->
		<div class="list-item-right">
			<!-- 右侧-表单信息 -->
			<div class="list-item-right-info">
				<!-- 右侧-表单信息-表单状态 -->
				<home-tag :type="itemState.itemType" :id="props.formData?.id">
				</home-tag>
				<!-- 右侧-表单信息-表单时间 -->
				<div class="list-item-right-info-date">
					<span class="list-item-right-info-date-time"> {{ formatDate }}</span>
					<span class="list-item-right-info-date-suffix">
						{{ itemState.dateSuffix }}
					</span>
				</div>
			</div>
			<!-- 右侧-表单操作 -->
			<div class="list-item-right-action">
				<!-- 右侧-表单操作-自动显隐 -->
				<div class="list-item-right-action-toggle">
					<!-- 右侧-表单操作-自动显隐-按钮 -->
					<el-button
						class="list-item-right-action-toggle-button"
						@click="buttonData[itemState.itemType].action"
					>
						<img
							class="list-item-right-action-toggle-button-icon"
							:src="buttonData[itemState.itemType].icon"
						/>
						<span class="home-button-text">
							{{ buttonData[itemState.itemType].text }}
						</span>
					</el-button>
					<!-- 右侧-表单操作-自动显隐-标星 -->
					<div
						class="list-item-right-action-toggle-star"
						:class="{
							active: isFormStarred,
							invisible: !isFormStarred,
						}"
						@click="toggleStar"
					></div>
				</div>
				<!-- 右侧-表单操作-下拉菜单 -->
				<el-dropdown class="list-item-right-action-dropdown" trigger="click">
					<img
						class="list-item-right-action-dropdown-icon"
						src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTJweCIgaGVpZ2h0PSIxMnB4IiB2aWV3Qm94PSIwIDAgMTIgMTIiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDYzLjEgKDkyNDUyKSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT7mnKrmlbTnkIYvMDHlm77moIcvMTJweC/mm7TlpJo8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0i5pyq5pW055CGLzAx5Zu+5qCHLzEycHgv5pu05aSaIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8cGF0aCBkPSJNMiw1IEMyLjU1MjI4NDc1LDUgMyw1LjQ0NzcxNTI1IDMsNiBDMyw2LjU1MjI4NDc1IDIuNTUyMjg0NzUsNyAyLDcgQzEuNDQ3NzE1MjUsNyAxLDYuNTUyMjg0NzUgMSw2IEMxLDUuNDQ3NzE1MjUgMS40NDc3MTUyNSw1IDIsNSBaIE02LDUgQzYuNTUyMjg0NzUsNSA3LDUuNDQ3NzE1MjUgNyw2IEM3LDYuNTUyMjg0NzUgNi41NTIyODQ3NSw3IDYsNyBDNS40NDc3MTUyNSw3IDUsNi41NTIyODQ3NSA1LDYgQzUsNS40NDc3MTUyNSA1LjQ0NzcxNTI1LDUgNiw1IFogTTEwLDUgQzEwLjU1MjI4NDcsNSAxMSw1LjQ0NzcxNTI1IDExLDYgQzExLDYuNTUyMjg0NzUgMTAuNTUyMjg0Nyw3IDEwLDcgQzkuNDQ3NzE1MjUsNyA5LDYuNTUyMjg0NzUgOSw2IEM5LDUuNDQ3NzE1MjUgOS40NDc3MTUyNSw1IDEwLDUgWiIgaWQ9IuW9oueKtue7k+WQiCIgZmlsbD0iI0FFQjVDMCI+PC9wYXRoPgogICAgPC9nPgo8L3N2Zz4="
					/>
					<template #dropdown>
						<el-dropdown-menu class="list-item-right-action-dropdown-menu">
							<ul>
								<el-dropdown-item
									class="list-item-right-action-dropdown-item"
									v-for="(itm, index) in menuData[itemState.itemType]"
									:key="index"
									@click="itm.action"
									>{{ itm.text }}
								</el-dropdown-item>
								<el-dropdown-item
									class="list-item-right-action-dropdown-item"
									@click="copyForm"
									>创建副本
								</el-dropdown-item>
								<el-dropdown-item
									class="list-item-right-action-dropdown-item delete"
									@click="deleteForm"
									>删除
								</el-dropdown-item>
							</ul>
						</el-dropdown-menu>
					</template>
				</el-dropdown>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { PropType, computed, reactive, ref } from "vue"
import HomeTag from "@/components/HomeTag.vue"
import {
	EFormStatus,
	ICancelStarReq,
	ICreateFormReq,
	IForm,
	IProblem,
	TProblemType,
} from "@/api/type"
import {
	cancelStarForm,
	createForm,
	delForm,
	endCollectForm,
	starForm,
	startCollectForm,
} from "@/api/api"
import router from "@/router"
import { ElMessage } from "element-plus"

const emit = defineEmits(["deleteItem", "copeyItem", "refresh"])
const props = defineProps({
	formData: {
		type: Object as PropType<IForm>,
		require: true,
	},
	index: {
		type: Number,
		require: true,
	},
})
const isFormStarred = ref<boolean>(props.formData?.isStar as boolean)

// 按钮数据
const buttonData = {
	collecting: {
		icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABrElEQVRYR+2Wv07CYBTFz6UtEmMQQUgUo6Ojgy/gpINPoC9g/LOoiTBJcAITdfFPfAF9AgedfAEHR0eNaAJSkRiD0HJNSUjQ0oY0X1sHujbt+X333nO+S/D5IZ/10QcQWoFk/muigdo+M88ZrSWiWwWhnUJq8Nmq1cIADPFv1O7BHP0lRqQOIDRjBSEMIJFXL5rMS91OGiC6LKaiy93eCQOI58ovDIxZiLyW0rFxlwHUIoPjngMkj6ux+qeWZWAV4IBnLZg9Z+Xpo7LGTc4APAIiHcwNACHXh3A0py6C+ACM6ZbdgBtJDm5KulQVYkMrP+uSHtb1xiEzL7ROSXgA0/ZbOnrlNNJNLrD0M1ADSAZYBugdRHtTkcjJ3QoZZXf8mADs/AxQk4Cz4JCcKWyEy45VOz40Adj7mUqldDQhQrj9j/8H4HsLbIeQSAGzZAwhBSg7ORw5FT6ERm9sbajVjxiYd82GvQyYKYiIriVJ2RIWRL1AGFH8WKmsg3m3FcUgDWDNkyjuBPTtMvpbpXjOp+u4DeL7QuL7Sub7UmqXH56s5b1Y19WltA/gtAI/oTEPMCyFkkcAAAAASUVORK5CYII=",
		text: "邀请填写",
		action: () => {
			router.push({
				name: "share",
				params: { id: props.formData?.id, to: "share" },
			})
		},
	},
	draft: {
		icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACVElEQVRYR+2VXWvTUBjHn39aVhGHJm2CV0683QfwZky98QMIKooow/mCddI5mgTEWVGkicPhC2MwylBREMHP4JV6K3jjzaiosDZLMhHvtvNI0c6uJl2zJuxm5zKQ5/c7z/mf84C2eGGL+bQtkGgHNMsrMvMkERZBfK5uZt+1H3liAprllgTTrTUg6GeK0kdrxu4PrRKJCOwtu4MrwEdiTq3bMfDV0eUBANz8nohAo7hquyeZ8WKdBMApSe6vFfErEYH90/6e6ri83CzeLgFQxTGyo4kcQSNwgmgs3YfhxXG52i4B5jeDB5XTb49gJXYBzXInBNNUozAIC5m+HcPfru/8viZR9oYOH5Dfvz6B1dhvQc7yC8Rien3Y6LOUyRyqF3bVNnppewqhavtjLMSjIAiAT/1MQwum8qOTxKYFVNvLs+AnYcVBeJY35JESIGIX0CzvsiCaIebADQA0n9eV0Y3gfzITceVs9yIxZjvAK3VdudD62MTWAdVaPs8k5sLgEjBX0+VL3cIjdUC1/BEmroTBCZh1dPlKFHjXAprtnxWC54lYCkn8TF2Xr0aFdyWg3ffOiFV6GgonPHZM5VrEKLUMyQ5/5mzvFDE9/2+q/f0HRA8dM1vYLLxjBwKnWQtJgvSgbsgTvcBDBVTbPc4CL4k4HQiQMLWkK8Ve4YECmuUfE8yvwuAALMdQzDjggQK5sveFiPcFpp1wzzGVG3HBIwmA6K5jZm/GCe9aQALdrhvZUtzwYAHLqxLzwL+LKk0uGfKdJOBdPURJgZt1I0/DuIW2BX4D3jjdIUIdzwEAAAAASUVORK5CYII=",
		text: "继续编辑",
		action: () => {
			router.push({
				name: "new_form",
				params: { id: props.formData?.id },
			})
		},
	},
	finished: {
		icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACV0lEQVRYR+2Xu2sUURTGv2+zMQlGkp2HRIkWKRMw/4IKCim18NmKIAYxQXbnT5hdMEmRIARLH2hnFUghVlY2BoyNpIhLFOcRggq7eeyRSdzX7JDNzKyuQqade8/3O98999x7iTZ/bLM+GgB00x0TyjwEgy2FI/IU3rYMZaE2bgOAlnU+t1y8rEjk7Yx6an8A05GWZu4LZhtqXdKNDvxrAH7isO5ovoRCO3AI8N870Kxmmu6CuA78cYAB0xnZIW6J4CKB056gAKskFjsEj78a6of9ICI7MPxSjlgr61MC3AEkESzCEoFH+lBqcvkKN4PGRALwxL+tuF5PP9/M4t//Xx8fUsaCICIB6KY7K5C7BxTfHUZwzjKUcf+c0ADemm+DS3W2E3mQaXR2vdkV2CqehUiu/lBjKQk546+J0AB61pkWwf1KJkS+uzM5mp/sc2uzG5zaUApb2+9rIUjMWBl1ItRp6N+Gmul4VT1cCZLgDTutPA9aDi3nXkdJntX8W7YNdSQWgG463wXorQTp6j5pTxz9Eggw/fMEioW16nUAPyxDPdY2AIAbtqH0xwKIswQkl6yMMhoLIE4RgomHdib1IBZA9G0IMMFxK63MxQLwJkdpRHvdiDuk3LTS6ouawqyv32ZXKG90hFZcFfFBNG1E/u1V7gsHPIw2SXkl4GWIdFSbV9WJyADlYA3HMVkA8JEi75LgzJqhrOo556oIn/ohkuCF0A+TqBcUPwTJhb6e1KXQT7OoAJ5jmuleA/GEwKIn/ukei3/9cTqQXT/X29P/1hPfO6bb/P0CBWV0vRqjF5oAAAAASUVORK5CYII=",
		text: "查看结果",
		action: () => {
			router.push({
				name: "data_statistics",
				params: { id: props.formData?.id },
			})
		},
	},
}
// 下拉菜单选项数据
const menuItemData = {
	stopCollecting: {
		text: "停止收集",
		action: async () => {
			try {
				await endCollectForm({ id: props.formData?.id } as ICancelStarReq)
				emit("refresh")
			} catch (err) {
				console.trace(err)
			}
		},
	},
	continueCollecting: {
		text: "继续收集",
		action: async () => {
			try {
				await startCollectForm({ id: props.formData?.id } as ICancelStarReq)
				emit("refresh")
			} catch (err) {
				console.trace(err)
			}
		},
	},
	fillForm: {
		text: "填写表单",
		action: () => {
			router.push({ name: "form_fill", params: { id: props.formData?.id } })
		},
	},
	editForm: {
		text: "修改表单",
		action: () => {
			router.push({ name: "new_form", query: { id: props.formData?.id } })
		},
	},
	resultForm: {
		text: "查看结果",
		action: buttonData.finished.action,
	},
}
// 下拉菜单数据
const menuData = {
	draft: [{ text: "发布表单", action: menuItemData.continueCollecting.action }],
	collecting: [
		menuItemData.stopCollecting,
		menuItemData.editForm,
		menuItemData.fillForm,
		menuItemData.resultForm,
	],
	finished: [menuItemData.editForm, menuItemData.continueCollecting],
}

// 单击表单操作
const clickAction = {
	draft: menuItemData.editForm.action,
	collecting: menuItemData.resultForm.action,
	finished: menuItemData.resultForm.action,
}

// 表单状态判断并选择对应时间尾缀
const itemState = computed(() => {
	let state = reactive({
		itemType: "" as "collecting" | "finished" | "draft",
		dateSuffix: "",
	})
	if (
		props.formData?.status === EFormStatus.ing ||
		props.formData?.status === EFormStatus.end
	) {
		if (props.formData?.status === EFormStatus.ing) {
			state.itemType = "collecting"
		} else {
			state.itemType = "finished"
		}
		state.dateSuffix = "发布"
	} else if (props.formData?.status === EFormStatus.normal) {
		state.itemType = "draft"
		state.dateSuffix = "保存"
	}
	return state
})

// 时间戳转换
const formatDate = computed(() => {
	let x = ""
	let date: number
	// 选择最新的时间戳显示
	if (props.formData?.ctime === props.formData?.utime) {
		date = props.formData?.ctime as number
	} else {
		date = props.formData?.ctime as number
	}
	const now = new Date(date),
		y = now.getFullYear(),
		m = now.getMonth() + 1,
		d = now.getDate()
	// 如果为同年则不显示年份
	if (y !== new Date().getFullYear()) {
		x = y + "-"
	}
	x +=
		(m < 10 ? "0" + m : m) +
		"-" +
		(d < 10 ? "0" + d : d) +
		" " +
		now.toTimeString().substr(0, 5)
	return x
})

// 收藏/取消收藏表单
const toggleStar = async () => {
	// 收藏
	if (!isFormStarred.value) {
		try {
			const res = await starForm({ id: props.formData?.id } as ICancelStarReq)
			if (res.data.stat === "ok") {
				ElMessage.success({ message: "收藏成功", center: true })
			}
		} catch (err) {
			console.trace(err)
		}
	} else {
		//取消收藏
		try {
			const res = await cancelStarForm({
				id: props.formData?.id,
			} as ICancelStarReq)
			if (res.data.stat === "ok") {
				ElMessage.success({ message: "取消收藏成功", center: true })
			}
		} catch (err) {
			console.trace(err)
		}
	}
	isFormStarred.value = !isFormStarred.value
}

// 删除表单
const deleteForm = async () => {
	try {
		await delForm({ id: props.formData?.id } as ICancelStarReq)
	} catch (err) {
		console.trace(err)
	}

	emit("deleteItem", props.index)
}

// 复制表单
const copyForm = async () => {
	let newForm: ICreateFormReq = {
		title: props.formData?.title as string,
		subTitle: (props.formData?.subTitle as string) + "-副本",
		problems: props.formData?.problems as (IProblem<TProblemType> & {
			isNew: boolean
		})[],
	}
	// 复制表单状态
	try {
		const res = await createForm(newForm)
		if (res.data.stat === "ok") {
			if (props.formData?.status === EFormStatus.ing) {
				try {
					await startCollectForm({
						id: res.data.data.id,
					} as ICancelStarReq)
				} catch (err) {
					console.trace(err)
				}
			} else if (props.formData?.status === EFormStatus.end) {
				try {
					endCollectForm({ id: res.data.data.id } as ICancelStarReq)
				} catch (err) {
					console.trace(err)
				}
			}

			emit("copeyItem", res.data.data.id)
		}
	} catch (err) {
		console.trace(err)
	}
}
</script>

<style scoped lang="scss">
@import "@/assets/style/base.scss";

$border-color: #e2e6ed; // 边界颜色
$item-text-color: #3d4757; // 菜单字体颜色

.list-item {
	display: flex;
	align-items: center;
	margin: 0 40px;
	height: 66px;
	border-bottom: 1px solid $border-color;
	justify-content: space-between;
	cursor: pointer;
	padding-left: 16px;

	// 右侧-表单操作-悬浮显示
	&:hover {
		&,
		.list-item-right-action-toggle-button {
			background-color: #f9fafd;
		}

		.list-item-right-action-toggle-button,
		.list-item-right-action-toggle-star {
			opacity: 1;
		}
	}
}

/* 左侧 */
.list-item-left {
	display: flex;
	align-items: center;
	flex-direction: row;
	flex: 1 1 auto;
	white-space: nowrap;
	width: 100%;

	// 左侧-标题
	&-name {
		font-size: 14px;
		line-height: 20px;
		color: $item-text-color;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		width: 100%;
		max-width: 350px;
		padding-left: 14px;
	}
}

/* 右侧 */
.list-item-right {
	display: flex;
	align-items: center;
	min-width: 500px;
	flex: 1;
	padding: 0 16px;

	// 右侧-表单信息
	&-info {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;

		// 右侧-表单信息-表单时间
		&-date {
			font-size: 12px;
			color: #949aae;
			min-width: 100px;
			display: flex;
			align-items: center;
			justify-content: center;

			&-suffix {
				margin-left: 2px;
			}
		}
	}
}

// 右侧-表单操作
.list-item-right-action {
	display: flex;
	align-items: center;
	flex-direction: row;
	justify-content: space-evenly;
	width: 100%;
}

// 右侧-表单操作-默认隐藏
.list-item-right-action-toggle {
	display: flex;
	align-items: center;
	flex-direction: row;
	justify-content: space-evenly;
	width: 100%;

	// 右侧-表单操作-自动显隐-按钮
	&-button {
		min-width: 94px;
		height: 29px;
		color: $item-text-color;
		border: 1px solid $border-color;
		border-radius: 2px;
		font-size: 12px;
		text-align: center;
		cursor: pointer;
		align-items: center;
		justify-content: center;
		opacity: 0;

		&:hover {
			background-color: #f5f5f9 !important;
			color: $item-text-color;
		}

		&-icon {
			width: 16px;
			height: 16px;
			margin-right: 6px;
		}
	}
}

// 右侧-表单操作-自动显隐-标星
.list-item-right-action-toggle-star {
	margin-left: 16px;
	background-size: 16px 16px;
	background-position: 50%;
	background-repeat: no-repeat;
	width: 16px;
	height: 16px;
	background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAE0UlEQVRYR8WWfWxTVRjGn/fcu64IGwHiR8RgokQZwWjYEtBtbUGwt44tSqy9BYYBZIlRFFESifyxGCMGHYImfsyQkOyjHXMSKKwtYa7rxCwwFJIZMJgQGRGGMUJXB1vb85pbGMK+aCvC+fPe8z7v77znnOe8hDs86L/kt9jd74vcSR+GGj+PZqqTMcC8Rcsej8fjPxLTpnDQs/G2A1g0vYWZ54NwibLp0fBub3cmEBlVwKLpZcy8ezAhEerCgYZltwWgoqIi6/jpSBeYHyGgCqBXGZwtSJ3TFqg7nC5E2hWwavrrknkbCL8oc/NmcceJ9yTzBhAOtgcaiv5XgJKSJZMi8cSvACYrCkpDzQ17y8pW5lzo7zvJ4HsF4cW2QENjOhBpVcBid33CwFoQtbQHvAsGE1k0VwUzviLg1HhxT57f/1l/qhApAZSWVtx1IRYtBksfCIqqqrNb99YeG0zidO5UenqbfmLGYxDYDJm1tT1YezYViGEATueb4873nntCkswnpgIw54OQxwzFECSi7eGA9+Wh4tZn3QtlQu7/9zv9ToROIj7CrHSaxymd+3fVnB8alwSwaPoqZi4EUT4xz2RAvXEixQj8syGomsTGlj2enpFWV6y5NxB4gQHNwMRhyYjOMHMnCXSazaavDaCrAK7FAHYmV0kkAXQRG/R0RKrUOSEx5Vg6+8rMZC1dOl3EkS85UcBXFlbAwIQrVURdm99bTkR8bQusDn21lFxtAAiwnu5pHmu/5y9aPjUWHzgI5geJ0Dxj2sTnqqurY0mY6wMtmusdZmwCYUBhpSQUrD+QykEaa47duWpyX2+0HYyZBPphoil3oc9X3XfNRYcGF2vuKrBcR0CUs5Sn2/fWH8oU4pny8vGX/xg4wIy5BHTlqIpl3776v67XG3YLkvun6TsYWE6gP4WJikI+z4l0IQzLPnH6oo8ZdsMfGFmFI13NEX3AVlmpyo7j3zKjlEDdMKMwndeusrJStHQcrwNDJ1CPyFaLQntqDQcdNkY1IsMPenrPBpm5mIj2hwNee6pVsDj0lSx5O4giihDWUHP90dFix3RCq+ZySsZOItoVDniNq5rSsGlL9AQnPCD6pj3gdY4VdDOAdZJRRUJsC/s9a1PKbhhbif4Ux/kggQ6Fg945GQNYHO6tLOUbJMTbYb+nKlUAm2PpAwkZ7yais+GA9/7MATS9iZkXj/bM2jR3EXImHR3alCYfp0jTZQaU+3LzzI2NlQMZnQGLph9m5gJFqE+G/HUdhkjyenVH3ZCJ9QzMIuACEX1BwvxpqHnHucFExXbXbwCmkcn0UNhXcyozALt+zmg0zNk0VY0p0b+RqADzWmZMTQoSRcCce9Xf+wmooSxRZfhGseb6HoxCVQhbq9/TljaAw7EmOyrPX7rq11uYaPW1ZEAXSHw8Y1pO/ckzkdmJBK9noufBLAAwEfmY2YDMV0iUhwKe2rQB5jtcD8ckbjAPAlpJ4KM2f4N/qKCtbNl0GYu/xcwvgTFu8L8AvdsW9H6QNoC1ZMk8GU98R4QEQE2KIja37qs/crOb4HCsuDsqL79GYKNbnkKCvgz7va+kDWBz6C9ICStMWVvGOkSjCRtt3MWByAoAM8JB75q0AW620lv1P6Wm9FYlG0nnjgP8AwdCFj9G8DUXAAAAAElFTkSuQmCC");

	&:hover:not(.active) {
		background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEt0lEQVRYR8WWbWwUVRiFz5nZbVlo6X7NQiipUYkIwWhoI2qLoEL4YTBKhGAiGr8giiJCu1siP4wxsrPYCiR+oCExUTRB0RiMRgKiUYxCq5AUo5FApKS0nd2ZbSFtabvzmlksQr/YWQH37857znPvfe95L/E///hf/DXdfAVFgbixkmfy1ckbIFJn3Wz3yS8kNhix4PqrDhCOp/YCuJtEt9eDqS1rQ835QOS1AxN0676M2J+fNyS3J2PBh68KQPlW8Z6wzCYBbgCVOoq9UshCj6rOaq0uOegWwvUOaLq1SsTeDOKPGbcGZxw5YL0sIutI7jdiwaorClD2ZjrQddo+CpEgFC5MRoNfTNWl2BTzTwEmUMESIxr62A2Eqx3Q9NTrIlgNYm8yFpo3YBROpJbDxlaSx0t8gWlHV/FsrhA5AUzaKmP7LXO2Te6CQFW8nNm+NnB4wGTxDlG/PWb9KpCboDABb+Gm5AvjTuUCMQRgcr34ejPmLWKzHJAKgOUCTIOI6giS2GbEQk8OFo/o6fm2ZHb/ezPQArABZCMhDQq9DW01xe2D67IAmp5+AshUZs0E0wHxXPQh2UfgiCPIQu/69tVFbcOtTtPNdSIyz9EBpGTIN8TJrAbQoCjedx2gLEBEtxbZkB3nVkmbRBNEGkg2KlAbinzjD7s5VxFhZGPnFLEz5SArIFJOSIUARVkocrsRDSwjKeePIBxPPQXgnSyAIkvddvNo5z25vqu0p69nP0SuIfllmT9wf+MK9mVZLizU4matQDYA7FVU5d72Gv+eXBppdPOOYE9v//cAppP80esPzG9Zwa6BmiFNGNGtOlvsNQTOqPTc0xorOZAvxISNMs62zT0iuI1kk69YufPEM37rQr0hANnz0633BPIIwZTX46lqqR7/u1uIbGSnrV0issDJBykorBzuag6bA3P3iafpZ+tTQBaCbC7wSKWbafeSiPJGwtouIksJtKHAU2WsKTk63CJGDCInD872WV+LyGwCu43a0IJcd0FLWI+LbW8D0ElFmWNEA4dGqh01CbVEarHY2EHgM6M2tChXgHDcXArIRyQ+MWKhxaPVjQoQjqfWAKgjsNmoDa3OFSAST91hA/tBHEjGQrPyBtDiqU0CPK8Q1e2xUF2uAKV61+Sz0t1M4JRRG5qUP4Ce2imCRSONWS1uVqE4cGjwo9QZTvuOWT0g1Mi1gTG/LWFvXj0Q1lMHIahQ6bm9LVbykyPiXK/mjvRDIlIjIjNApgm8BRZsMaJFrQNG4bj5FyBlqqpe11bjP54XgBZPtToPDR/HlBb6xp7p7DKX24DTC6X/CHYCGH8u3p03AN/3qmqdkxuabv4gIpVQlLnJaOA71wBTtkhhutvqPlfIeojtzIoBsyaAr5X5/R+e7OycaWf6awR8ABAFpADYBREHslxRuay9JviBa4BIIn29bWcuDg9yHwUbjdrgV4MFtfqOKdKXWUvIoyLwnc96hS8a0eCrrgEm6tZd/WJ/AzJDYKeoSiJZ7W+81E2YuOW0Znf1PivgSoGEQL6djAWfdg2g6ekHAXuOoij1ozXRSMLOM66vw3oMghuNWPA51wCXWunl+j+nR+nlMnM1jK6k6YXafwNA+vswyJnq/AAAAABJRU5ErkJggg==");
	}
}

.active {
	background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADPUlEQVRYR8WXTWgcdRjGn2e6O7M1VawHPw47m2pCd1ZpkQQ/ULQUQXuQelBQFEVLL1URCj30YI1eFKUnKwXBIIJevJSoCILoRTyYohTNbJukZifa2B6MlGp3ZjP/RzaSkI/dnY9gO6dl3vd9nt//P//3nVniKl+8yv7IDRD67hF7y5ZjLE/8uZFF5AJoTt86yHDhFxLHbS945YoDhBPuCUF7CbbEwh0l7+yZvBCZd6Dl9++KFX+zZEhyzPGCvVcEQBqxIn90XNCdKw03WdbuYrWxDJUFJtMORPX+542JR9caEPzJ9l4YIkdMFvN2bmoA/bGjL5z/axLSLZ1MLMvaZ1cb6+CSgFIDhL77uqQjXQXJOWfr9YO8+dTfSaYr44kAmr1388KlubuN4i8EXNNTnHjPsTa/ye1nfk8LsQpAkwNOy8Q7EZthwQyBGIZQE1BIK/hfHs+TGAcwLuCkI46z1pjrpMGw7j4j4EEaDAO4XVAxm1nKbPIcgZNtKLtgj3Jw6rdF1Fa9/xFjzNj/ZryGj8AJ27vncfLTeLkLQr//KSD+WErfFSnXvTqN+NYpbdrDbTPN5UG29CPyKy8ZmXdzCacoIvijXbR3cXDqYtcuCH13RNJrKfQypRCYtG37fg5MX1g/xNbcafrlYxBezOTQK5k858C6j97MTMcuWHtzcd7XP2ifhyc3CkFwHig+4NSmf+6m1XEQSUPFsH7hMwgP54Ug8I9F66Gi1/i+5wZ1C7bbMzbxl3kBQH5V8oLEBXQdxZHv7jfS+3kBCPpOLagl1XcFCOvlN2TwapJAj2d7yanNXptU3x3Adz+U9FySQK+408cbWAnmc52Bpu9+DWn3RgBoFXY61V9P5QOYKE8CGOi6xeRFSdf1BCQfLXnB55kBJDGqVy5LctZNLvI0gaPFgv1RC62aFswhCE90emVbFg7Y1dnj2QGmbrsxjKLzqwrJ70i9Y28PxkhqZUxnt1VaYXxQ0j4BfUsxkm85XnA4M0BULw8bgx9IGAhjFq23kwZK20QNd2t0WQdk+DKgm0h84nizT2cGaJ6u7IHRY0DhaJ4/HYtfVgvRs4a4q1QN9mcG2MjJz1qb+FGaVTBr/r+FizEw88IfcAAAAABJRU5ErkJggg==");
}

.invisible {
	opacity: 0;
}

// 右侧-表单操作-下拉菜单
.list-item-right-action-dropdown {
	cursor: pointer;
	position: relative;
	margin-left: 16px;

	&-icon {
		width: 16px;
		height: 16px;
	}
}
</style>
<!-- Element UI 样式自定义 -->
<style lang="scss">
@import "@/assets/style/base.scss";

$border-color: #e2e6ed; // 边界颜色
$item-text-color: #3d4757; // 菜单字体颜色

.list-item-right-action-dropdown-menu {
	width: 148px;
}

.list-item-right-action-dropdown-item {
	color: $item-text-color;
	margin: 4px;
	display: flex;
	align-items: center;
	font-size: 12px;
	padding: 0 12px;
	line-height: 30px;

	&:hover {
		background-color: #fafafa !important;
	}
}

.delete {
	color: #eb5451;
	border-top: 1px solid $border-color;
}
</style>
