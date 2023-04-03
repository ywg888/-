import { createStore } from "vuex"
import { IUser, IForm, IFormResult } from "../api/type"

// 题目列表
export interface IFormList {
	form: IForm
	formResult: IFormResult[]
}

export default createStore({
	// 统一定义管理公共数据
	state: {
		// 用户数据
		userInfo: {} as IUser,
		// 题目列表
		formlist: {} as IFormList,
		// 当前点击的题目类型
		activeIndex: 0,
	},
	// 类似于vue中的计算属性
	getters: {
		getUserInfo(state) {
			return state.userInfo
		},
		getFormList(state) {
			return state.formlist
		},
	},
	// 使用它来修改数据
	mutations: {
		setUserInfo(state, user: IUser) {
			state.userInfo = user
		},
		setFormList(state, formlist: IFormList) {
			state.formlist = formlist
		},
		setAcitveIndex(state, index) {
			state.activeIndex = index
		},
	},
	// 类似于methods,用于发起异步请求,比如axios
	actions: {},
	// 模块拆分
	modules: {},
})
