<template>
	<span :class="'home-tag home-tag-' + props.type">
		{{ tagText.prefix }}
		<span class="home-tag-number" v-if="tagNum">
			{{ num }}
		</span>
		<span class="home-tag-suffix" v-if="tagText.suffix !== ''">
			{{ tagText.suffix }}
		</span>
	</span>
</template>

<script setup lang="ts">
import { formResult } from "@/api/api"
import { computed, ref } from "vue"

let num = ref<number>(-1)
const props = defineProps({
	type: {
		type: String,
		require: false,
		default: "",
	},
	id: {
		type: String,
		require: false,
		default: "",
	},
})

// 根据表单类型确定标签前缀尾缀
const tagText = computed(() => {
	let text = {
		prefix: "",
		suffix: "",
	}
	if (props.type === "collecting" || props.type === "finished") {
		if (props.type === "collecting") {
			text.prefix = "正在收集"
		} else {
			text.prefix = "停止收集"
		}
		text.suffix = " 份"
	} else if (props.type === "draft") {
		text.prefix = "未发布"
	} else {
		text.prefix = "表单"
	}
	return text
})

// 判断是否需要计算收集份数
const tagNum = computed(() => {
	let isShow = false
	if (props.id !== "" && props.type !== "draft") {
		calculateNum()
		isShow = true
	}
	return isShow
})

// 计算收集份数
const calculateNum = async () => {
	try {
		const res = await formResult(props.id)
		if (res.data.stat === "ok") {
			num.value = res.data.data.items.length
		}
	} catch (err) {
		console.trace(err)
	}
}
</script>

<style scoped lang="scss">
@import "@/assets/style/base.scss";

// 基础样式
.home-tag {
	line-height: 12px;
	text-align: center;
	border-radius: 8px;
	font-size: 12px;
	background: rgba(0, 0, 0, 0.1);
	color: #767c85;
	padding: 2px 6px;

	&-collecting,
	&-finished,
	&-draft {
		min-width: 68px;
		height: 20px;
		line-height: 20px;
		border-radius: 10px;
		padding: 0 10px;
	}

	// 停止收集
	&-finished {
		background: rgba(235, 84, 81, 0.05);
		color: #eb5451;
	}

	// 草稿
	&-draft {
		background: #fff5e5;
		color: #ef8d00;
	}

	// 正在收集
	&-collecting {
		background: rgba(20, 136, 237, 0.1);
		color: #1488ed;
	}
}
</style>
