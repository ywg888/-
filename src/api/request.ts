import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios" //导入axios 和钩子
import { ElLoading, ElMessage } from "element-plus" //导入ElLoading
import { LoadingInstance } from "element-plus/lib/components/loading/src/loading"
// 初始化loading

export class Request {
	public static axiosInstance: AxiosInstance
	public static loading?: LoadingInstance //loading实例 挂载到公共的静态属性上 方便获取

	public static init() {
		// 创建axios实例
		this.axiosInstance = axios.create({
			baseURL: "/api", //转接
			timeout: 6000,
		})
		// 初始化拦截器
		this.initInterceptors()
		return axios
	}

	// 初始化拦截器
	public static initInterceptors() {
		// 设置post请求头
		this.axiosInstance.defaults.headers.post["Content-Type"] =
			"application/x-www-form-urlencoded"
		/**
		 * 请求拦截器
		 * 每次请求前，如果存在token则在请求头中携带token
		 */

		this.axiosInstance.interceptors.request.use(
			(config: AxiosRequestConfig) => {
				//  loading打开
				this.loading = ElLoading.service({
					lock: true,
					text: "正在请求数据，请稍后...",
					background: "rgba(0,0,0,0.4)",
					target: document.querySelector("body") as HTMLElement,
				})

				const token = localStorage.getItem("token") //保存token到localStorage中
				if (token) {
					(config as any).headers.Authorization = token //携带请求头
					// ;(config as any).headers.Authorization = sessionStorage.token
				}
				return config
			},
			(error: any) => {
				console.log(error)
			}
		)

		// 响应拦截器
		this.axiosInstance.interceptors.response.use(
			// 请求成功
			(response: AxiosResponse) => {
				this.loading?.close() //将loading移除

				if (response.status === 200) {
					// return Promise.resolve(response.data);
					return response
				} else {
					Request.errorHandle(response)
					// return Promise.reject(response.data);
					return response
				}
			},
			// 请求失败
			(error: any) => {
				const { response } = error
				this.loading?.close() //将loading移除
				if (response) {
					// 请求已发出，但是不在2xx的范围
					Request.errorHandle(response)
					return Promise.reject(response.data)
				} else {
					// 处理断网的情况
					// eg:请求超时或断网时，更新state的network状态
					// network状态在app.vue中控制着一个全局的断网提示组件的显示隐藏
					// 关于断网组件中的刷新重新获取数据，会在断网组件中说明
					// message.warn('网络连接异常,请稍后再试!')
					ElMessage.error("网络连接异常,请稍后再试!")
				}
			}
		)
	}

	/**
	 * http握手错误
	 * @param res 响应回调,根据不同响应进行不同操作
	 */
	private static errorHandle(res: any) {
		// 状态码判断
		switch (res.status) {
			case 401:
				break
			case 403:
				break
			case 404:
				// message.warn('请求的资源不存在'),
				this.loading?.close() //将loading移除
				ElMessage.warning("请求的资源不存在")
				break
			default:
				// message.warn('连接错误')
				this.loading?.close() //将loading移除
			// ElMessage.error('发生错误')
		}
	}
}
