module.exports = {
	root: true,
	env: {
		node: true,
		'vue/setup-compiler-macros': true,
	},
	extends: [
		'plugin:vue/vue3-essential',
		'eslint:recommended',
		'@vue/typescript/recommended',
	],
	parserOptions: {
		ecmaVersion: 2020,
	},
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    "@typescript-eslint/no-explicit-any": ["off"],
	},
	globals:{
		defineEmits: "readonly",
      defineProps: "readonly",
      defineExpose: "readonly",
      withDefaults: "readonly",
      WeixinJSBridge: "readonly",
      ElMessage: "readonly",
      ElMessageBox: "readonly",
      ElLoading: "readonly",
	}
}

