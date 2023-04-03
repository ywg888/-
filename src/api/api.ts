import { Request } from "./request" //导入请求拦截器request
import * as type from "./type"
// 注册
export function register(parameter: type.IRegisterReq) {
	//导出方法
	return Request.axiosInstance({
		url: "/auth/register",
		method: "post",
		data: parameter,
	})
}
// 登录
export function login(parameter: type.ILoginReq) {
	//导出方法
	return Request.axiosInstance({
		url: "/auth/login",
		method: "post",
		data: parameter,
	})
}
// 登出
export function logout() {
	//导出方法
	return Request.axiosInstance({
		url: "/auth/logout",
		method: "post",
	})
}
// 获取用户信息
export function getInfo() {
	//导出方法
	return Request.axiosInstance({
		url: "/user/getInfo",
		method: "get",
	})
}
// 设置用户信息
export function setInfo(parameter: type.ISetUserInfoReq) {
	//导出方法
	return Request.axiosInstance({
		url: "/user/setInfo",
		method: "post",
		data: parameter,
	})
}
// 修改密码
export function changePwd(parameter: type.IChangePwdReq) {
	//导出方法
	return Request.axiosInstance({
		url: "/user/changePwd",
		method: "post",
		data: parameter,
	})
}
// 获取列表
export function getList(parameter: type.IListReq) {
	//导出方法
	return Request.axiosInstance({
		url: "/form/list",
		method: "post",
		data: parameter,
	})
}
// 创建表单(参数为表单请求类型)
export function createForm(parameter: type.ICreateFormReq) {
	//导出方法
	return Request.axiosInstance({
		url: "/form/create",
		method: "post",
		data: parameter,
	})
}
// 获取表单(参数为表单id)
export function getForm(parameter: string) {
	//导出方法
	return Request.axiosInstance({
		url: "/form/get",
		method: "post",
		data: { id: parameter },
	})
}
// 删除表单(参数为表单id)
export function delForm(parameter: type.ICancelStarReq) {
	//导出方法
	return Request.axiosInstance({
		url: "/form/delete",
		method: "post",
		data: parameter,
	})
}
// 标星收藏表单
export function starForm(parameter: type.ICancelStarReq) {
	//导出方法
	return Request.axiosInstance({
		url: "/form/star",
		method: "post",
		data: parameter,
	})
}
// 取消收藏
export function cancelStarForm(parameter: type.ICancelStarReq) {
	//导出方法
	return Request.axiosInstance({
		url: "/form/cancelStar",
		method: "post",
		data: parameter,
	})
}
// 填写表单
export function inputForm(parameter: type.IInputReq) {
	//导出方法
	return Request.axiosInstance({
		url: "/form/input",
		method: "post",
		data: parameter,
	})
}
// 获取表单填写详情(传入的是表单id)
export function formResult(parameter: string) {
	//导出方法
	return Request.axiosInstance({
		url: `/form/formResult/${parameter}`,
		method: "get",
	})
}
// 获取表单单个填写详情(这里也是传入id，但是是每个填写详情的id)
export function formDetail(parameter: string) {
	//导出方法
	return Request.axiosInstance({
		url: `/form/detail/${parameter}`,
		method: "post",
	})
}
// 开始收集表单
export function startCollectForm(parameter: type.ICancelStarReq) {
	//导出方法
	return Request.axiosInstance({
		url: "/form/start",
		method: "post",
		data: parameter,
	})
}
// 结束收集表单
export function endCollectForm(parameter: type.ICancelStarReq) {
	//导出方法
	return Request.axiosInstance({
		url: "/form/end",
		method: "post",
		data: parameter,
	})
}
// 获取基础题目类型
export function listType() {
	//导出方法
	return Request.axiosInstance({
		url: "/problem/listType",
		method: "get",
	})
}
// 获取基础题目
export function listBasic() {
	//导出方法
	return Request.axiosInstance({
		url: "/problem/listBasic",
		method: "get",
	})
}
// 获取收藏的题目
export function listStar() {
	//导出方法
	return Request.axiosInstance({
		url: "/problem/listStar",
		method: "post",
	})
}
// 收藏题目
export function starProblem(parameter: type.IProblem<type.TProblemType>) {
	//导出方法
	return Request.axiosInstance({
		url: "/problem/star",
		method: "post",
		data: parameter,
	})
}
// 取消收藏题目
export function endCollectStar(parameter: type.ICancelStarReq) {
	//导出方法
	return Request.axiosInstance({
		url: "/problem/end",
		method: "post",
		data: parameter,
	})
}
