import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
import HomeView from "../views/HomeView.vue"

const routes: Array<RouteRecordRaw> = [
	{
		path: "/",
		name: "home",
		component: HomeView,
	},
	{
		path: "/login",
		name: "login",
		component: () =>
			import(/* webpackChunkName: "login" */ "../views/user/UserLogin.vue"),
	},
	{
		path: "/register",
		name: "register",
		component: () =>
			import(
				/* webpackChunkName: "register" */ "../views/user/UserRegister.vue"
			),
	},
	{
		path: "/user_center",
		name: "user_center",
		component: () =>
			import(
				/* webpackChunkName: "user_center" */ "../views/user/UserCenter.vue"
			),
	},
	{
		path: "/home_page",
		name: "home_page",
		meta: { isAuth: true },
		component: () =>
			import(/* webpackChunkName: "home_page" */ "../views/home/HomePage.vue"),
	},
	{
		path: "/form_fill/:id",
		name: "form_fill",
		meta: { isAuth: true },
		component: () =>
			import(/* webpackChunkName: "form_fill" */ "../views/form/FormFill.vue"),
	},
	{
		path: "/new_form",
		name: "new_form",
		meta: { isAuth: true },
		component: () =>
			import(/* webpackChunkName: "new_form" */ "../views/form/NewForm.vue"),
	},
	{
		path: "/form_details",
		name: "form_details",
		meta: { isAuth: true },
		component: () => import("../views/form/FormDetails.vue"),
		children: [
			{
				path: "data_statistics/:id",
				name: "data_statistics",
				component: () => import("../views/form/formDetails/DataStatistics.vue"),
			},
			{
				path: "question/:id",
				name: "question",
				component: () => import("../views/form/formDetails/QuestionForm.vue"),
			},
			{
				path: "share/:id",
				name: "share",
				component: () => import("../views/form/formDetails/ShareForm.vue"),
			},
		],
	},
	{
		path: "/error_page",
		name: "error_page",
		component: () => import("../views/ErrorPage.vue"),
	},
	{
		path: "/no_permission",
		name: "no_permission",
		component: () => import("../views/NoPermission.vue"),
	},
	{
		path: "/:catchAll(.*)",
		redirect: "/error_page",
	},
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
})

router.beforeEach((to, from, next) => {
	const isLogin = localStorage.getItem("token") || null
	// 登录页面直接允许跳转
	if (from.path == "/login") {
		next()
		return
	}
	if (to.meta.isAuth) {
		// 需要登录权限
		if (isLogin) {
			next()
		} else {
			router.push("/no_permission")
		}
	} else {
		// 不需要登录权限
		next()
	}
})
export default router
