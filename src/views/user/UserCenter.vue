<template>
	<div>
		<div class="center">
			<!-- 个人中心头部框 -->
			<div class="tag">
				<span style="margin-left: 24px"><strong>WPS</strong>个人中心</span>
			</div>
			<div class="back">
				<!-- 退出登录栏 -->
				<div class="tag quit">
					<span class="exit" @click="dialogQuitVisible = true">退出账号</span>
				</div>
				<div class="label label-img">
					<div class="la-des"><span>已使用WPS 云服务 1000天</span></div>
					<!-- 头像、姓名、昵称、状态 -->
					<div class="la-user">
						<div
							@mouseover="showAvatar = true"
							@mouseleave="showAvatar = false"
							class="avatar"
						>
							<img
								:src="
									user.avatar == '' || user.avatar == '??'
										? require('../../assets/img/user/defaultAvatar.svg')
										: user.avatar
								"
							/>
							<div
								v-show="showAvatar"
								@click="dialogAvatarVisible = true"
								class="mask"
							>
								修改头像
							</div>
						</div>
						<div class="u-name">{{ user.nickname }}</div>
						<div class="u-id">
							<div class="ui-i">ID {{ user.account }}</div>
							<div class="ui-u">
								<img src="../../assets/img/user/vip.svg" />{{
									user.status == 2 ? "普通用户" : "vip用户"
								}}
							</div>
						</div>
						<div class="u-score" @click="dialogScoreVisible = true">
							<img src="../../assets/img/user/safe.svg" alt="" />
							<span>当前账号安全评分：</span>
							<span class="yellow">60分</span>
							<img src="../../assets/img/user/reload.svg" />
						</div>
					</div>
				</div>
				<!-- nickname -->
				<div class="label margin-t">
					<div class="first padding">使用真实姓名，让工作伙伴认识你</div>
					<div class="second padding">
						<span v-show="!rewrite" class="s-span">
							<span>{{ user.nickname }}</span>
						</span>
						<el-input
							v-show="rewrite"
							v-model="rename"
							:placeholder="user.nickname"
							style="width: 150px"
						/>
						<div class="s-div">
							<div></div>
							<el-button
								@click="rewriteContent('修改')"
								v-show="!rewrite"
								style="font-size: 14px"
								type="primary"
								link
								size="small"
								>修改</el-button
							>
							<div v-show="rewrite">
								<el-button @click="rewrite = !rewrite">取消</el-button>
								<el-button @click="renameNick" type="primary">确定</el-button>
							</div>
						</div>
					</div>
				</div>
				<!-- 密码设置 -->
				<div class="label margin-t">
					<div class="first padding">密码设置</div>
					<div class="second padding">
						<span class="s-span">
							<div class="s-icon small green">
								<img class="s-icon" src="../../assets/img/user/right.svg" />
							</div>
							<span>您已设置密码</span>
						</span>
						<div class="s-div">
							<div></div>
							<el-button
								@click="rewriteContent('修改密码')"
								style="font-size: 14px"
								type="primary"
								link
								size="small"
								>修改密码
							</el-button>
						</div>
					</div>
				</div>
				<!-- 静态数据 -->
				<div v-for="(item, index) in labels" :key="index">
					<div class="label margin-t">
						<div class="first padding">
							{{ item.des }}
						</div>
						<div v-for="content in item.contents" :key="content.name">
							<div class="second padding">
								<span class="s-span">
									<div
										v-if="content.icon"
										class="s-icon"
										:class="content.background"
									>
										<img
											class="s-icon"
											:src="require('../../assets/img/user/' + content.src)"
										/>
									</div>
									<span>{{ content.name }}</span>
								</span>
								<div class="s-div">
									<div>
										{{ content.background == "blue" ? "berrybear" : "" }}
									</div>
									<el-button
										@click="rewriteContent(content.btn)"
										v-show="content.btn == '修改' ? !rewrite : true"
										style="font-size: 14px"
										:type="content.type"
										link
										size="small"
										>{{
											content.background == "blue" ? "取消绑定" : content.btn
										}}</el-button
									>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="ques brown">
					遇到帐号问题？请前往
					<a
						style="text-decoration: none"
						href="https://account.wps.cn/help#index"
					>
						<el-button type="primary" link size="small">帮助中心</el-button>
					</a>
					<img src="../../assets/img/user/plane.svg" />
				</div>
			</div>
		</div>
		<!-- 显示账号安全评分对话框 -->
		<el-dialog v-model="dialogScoreVisible" title="帐号安全评分">
			<div v-for="score in scores" :key="score.name">
				<div class="second padding">
					<span class="s-span">
						<div class="s-icon small" :class="score.background">
							<img
								class="s-icon"
								:src="require('../../assets/img/user/' + score.src)"
							/>
						</div>
						<span>{{ score.name }}</span>
					</span>
					<el-button
						style="font-size: 14px"
						:type="score.type"
						link
						size="small"
						>{{ score.btn }}</el-button
					>
				</div>
			</div>
		</el-dialog>
		<!-- 确定退出登录对话框 -->
		<el-dialog v-model="dialogQuitVisible" title="退出登录">
			下次使用本帐号访问，可以继续访问你的个人数据
			<template #footer>
				<span class="dialog-footer">
					<el-button @click="dialogQuitVisible = false">取消</el-button>
					<el-button type="primary" @click="logoutMain">确定</el-button>
				</span>
			</template>
		</el-dialog>
		<!-- 修改密码对话框(含输入框) -->
		<el-dialog v-model="dialogPwdVisible" title="修改密码">
			<div class="tip">{{ tip }}</div>
			<el-form>
				<el-form-item label="旧密码" label-width="100px">
					<el-input
						v-model="oldPwd"
						placeholder="请输入您的旧密码"
						size="default"
						type="password"
						show-password
					/>
				</el-form-item>
				<el-form-item label="新密码" label-width="100px">
					<el-input
						v-model="pwd"
						placeholder="请输入您的新密码"
						size="default"
						type="password"
						show-password
					/>
				</el-form-item>
				<el-form-item label="确认新密码" label-width="100px">
					<el-input
						v-model="confirmPwd"
						placeholder="请确认您的新密码"
						size="default"
						type="password"
						show-password
					/>
				</el-form-item>
			</el-form>
			<template #footer>
				<span class="dialog-footer">
					<el-button @click="dialogPwdVisible = false">取消</el-button>
					<el-button type="primary" @click="confirmNewPwd">确定</el-button>
				</span>
			</template>
		</el-dialog>
		<!-- 上传新头像对话框 -->
		<el-dialog v-model="dialogAvatarVisible" title="上传新头像">
			<el-upload action="#" list-type="picture" :limit="1" :auto-upload="false">
				<el-button>点击上传头像</el-button>
				<template #file="{ file }">
					<div>
						<img
							class="el-upload-list__item-thumbnail"
							:src="file.url"
							alt=""
						/>
					</div>
				</template>
			</el-upload>
			<template #footer>
				<span class="dialog-footer">
					<el-button @click="dialogAvatarVisible = false">取消</el-button>
					<el-button type="primary" @click="uploadAvatar">确定</el-button>
				</span>
			</template>
		</el-dialog>
	</div>
</template>

<script setup lang="ts">
import { getInfo, logout, changePwd, setInfo } from "@/api/api"
import { IUser } from "@/api/type"
import { ElMessage } from "element-plus"
import { ref, reactive, onMounted, watch } from "vue"
import { useRouter } from "vue-router"
import { useStore } from "vuex"
// 静态数据
const labels = [
	{
		des: "绑定手机，让登录使用更安全",
		contents: [
			{
				name: "123***456",
				icon: false,
				background: "",
				src: "",
				btn: "更换手机",
				type: "primary",
			},
		],
	},
	{
		des: "绑定微信帐号，查看、分享文档更方便",
		contents: [
			{
				name: "微信帐号",
				icon: true,
				src: "v.svg",
				background: "grey",
				btn: "立即设置",
				type: "primary",
			},
			{
				name: "QQ账号",
				icon: true,
				src: "q.svg",
				background: "blue",
				btn: "立即设置",
				type: "primary",
			},
			{
				name: "钉钉账号",
				icon: true,
				src: "d.svg",
				background: "grey",
				btn: "立即设置",
				type: "primary",
			},
		],
	},
	{
		des: "实名认证",
		contents: [
			{
				name: "3玛卡巴卡的腿毛",
				icon: true,
				background: "",
				src: "real_name.svg",
				btn: "修改实名信息",
				type: "primary",
			},
		],
	},
	{
		des: "安全设置",
		contents: [
			{
				name: "两步验证",
				icon: false,
				background: "",
				src: "",
				btn: "设置",
				type: "primary",
			},
			{
				name: "当前在线设备",
				icon: false,
				background: "",
				src: "",
				btn: "设置",
				type: "primary",
			},
		],
	},
	{
		des: "管理已授权过权限的应用",
		contents: [
			{
				name: "授权应用管理",
				icon: false,
				background: "",
				src: "",
				btn: "查看",
				type: "primary",
			},
		],
	},
	{
		des: "查看与导出个人信息文件",
		contents: [
			{
				name: "个人信息查询与导出",
				icon: false,
				background: "",
				src: "",
				btn: "查看",
				type: "primary",
			},
		],
	},
	{
		des: "删除所有数据，永久注销WPS帐号",
		contents: [
			{
				name: "永久删除帐号",
				icon: false,
				background: "",
				src: "",
				btn: "删除",
				type: "danger",
			},
		],
	},
]
const scores = [
	{
		name: "设置帐号密码",
		background: "red",
		src: "err.svg",
		type: "primary",
		btn: "立即设置",
	},
	{
		name: "绑定手机",
		background: "green",
		src: "right.svg",
		type: "success",
		btn: "已完成",
	},
	{
		name: "绑定微信",
		background: "red",
		src: "err.svg",
		type: "primary",
		btn: "立即绑定",
	},
	{
		name: "开启两步验证",
		background: "green",
		src: "right.svg",
		type: "success",
		btn: "已完成",
	},
	{
		name: "下线临时设备",
		background: "green",
		src: "right.svg",
		type: "success",
		btn: "已完成",
	},
]
// 设置路由
const router = useRouter()
// 显示账号评分弹框
const dialogScoreVisible = ref<boolean>(false)
// 显示登出确定弹框
const dialogQuitVisible = ref<boolean>(false)
// 显示修改密码弹框
const dialogPwdVisible = ref<boolean>(false)
// 显示修改头像弹框
const dialogAvatarVisible = ref<boolean>(false)
// 显示修改昵称弹框
const rewrite = ref<boolean>(false)
// 显示修改头像
const showAvatar = ref<boolean>(false)
// 保存个人信息
const user = reactive<IUser>({} as IUser)
// 新填入的昵称
const rename = ref<string>("")
// 旧密码
const oldPwd = ref<string>("")
// 新密码
const pwd = ref<string>("")
// 确认的新密码
const confirmPwd = ref<string>("")
// 修改密码的err提示
const tip = ref<string>("")
// 获取store
const store = useStore()
// 获取个人信息，检测用户登录状态并提示
onMounted(() => {
	getInfo()
		.then((res) => {
			Object.assign(user, res.data.data.user)
		})
		.catch((err) => {
			ElMessage.warning(err.msg + ", 正在跳转至主页")
			setTimeout(() => {
				router.push("/")
			}, 1500)
		})
})
// 将tip值置为空字符串
const defaultTip = () => {
	tip.value = ""
}
// 登出请求
const logoutMain = () => {
	logout()
		.then((res) => {
			if (res.status == 200) {
				localStorage.removeItem("token")
				store.commit("setUserInfo", null)
				ElMessage.success("已登出")
				setTimeout(() => {
					router.push("/")
				}, 1500)
			}
		})
		.catch((err) => {
			ElMessage.warning(err.msg + ", 正在跳转至主页")
			setTimeout(() => {
				router.push("/")
			}, 1500)
		})
}
// 控制修改显示样式
const rewriteContent = (btn: string) => {
	if (btn == "修改") {
		rewrite.value = true
	}
	if (btn == "修改密码") {
		dialogPwdVisible.value = true
	}
}
// 修改密码请求
const confirmNewPwd = () => {
	changePwd({
		oldPwd: oldPwd.value,
		pwd: pwd.value,
		confirmPwd: confirmPwd.value,
	})
		.then((res) => {
			if (res.status == 200) {
				ElMessage.success("修改密码成功, 正在跳往登录界面")
				setTimeout(() => {
					router.push("/login")
				}, 1500)
			}
		})
		.catch((err) => {
			tip.value =
				"提示：" + (err.msg == "参数缺失" ? "以下三项为必填项" : err.msg)
		})
}
// 修改头像(服务器无图片存储功能)
const uploadAvatar = () => {
	dialogAvatarVisible.value = false
}
// 将修改的用户信息写入store
const setChangeInfo = async () => {
	try {
		const res = await getInfo()
		if (res.status === 200) {
			store.commit("setUserInfo", res.data.data.user)
		}
	} catch {
		ElMessage.error("用户信息写入失败")
	}
}
// 修改昵称
const renameNick = () => {
	rewrite.value = false
	setInfo({
		nickname: rename.value,
		avatar: user.avatar == "" ? "??" : user.avatar,
	})
		.then((res) => {
			if (res.status == 200) {
				ElMessage.success("修改成功")
				setChangeInfo()
				router.go(0)
			}
		})
		.catch(() => {
			ElMessage.error("修改失败，请尝试刷新或重新修改")
		})
}

// 监视修改密码情况
watch(oldPwd, defaultTip)
watch(pwd, defaultTip)
watch(confirmPwd, defaultTip)
</script>

<style scoped>
.center {
	cursor: default;
}

strong {
	font-weight: 700;
	margin-right: 3px;
}

.tag {
	display: flex;
	align-items: center;
	font-size: larger;
	background-color: #fafafa;
	height: 46px;
	border-bottom: 1.5px solid #dbdbdb;
}

.quit {
	background-color: #f5f5f5;
	justify-content: flex-end;
	border-bottom: 1.2px solid #e7e9eb;
	width: 910px;
	margin: auto;
}

.exit {
	padding: 0 16px;
	color: #969696;
	font-size: smaller;
	cursor: pointer;
}

.back {
	background-color: #f5f5f5;
}

.label {
	background-color: #fff;
	border: 1px solid #e7e9eb;
	border-radius: 2px;
	width: 880px;
	margin: auto;
	padding: 15px 22px;
}

.label-img {
	background-image: url(../../assets/img/user/center.png);
	background-repeat: no-repeat;
	background-size: contain;
	background-position-x: right;
}

.la-des {
	display: flex;
	justify-content: flex-end;
	color: #afafaf;
	font-size: smaller;
}

.la-user {
	text-align: center;
}

.avatar {
	position: relative;
	width: 72px;
	height: 72px;
	margin: 40px auto 45px auto;
}

/* 头像图片 */
.avatar > img {
	width: 100%;
	height: 100%;
	border-radius: 50%;
}

.mask {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 100%;
	height: 100%;
	border-radius: 50%;
	background-color: rgba(0, 0, 0, 0.6);
	color: #fff;
	font-size: 13px;
	font-weight: bold;
	text-align: center;
	line-height: 72px;
	letter-spacing: 1px;
}

.u-name {
	font-size: 15px;
	font-weight: 700;
	margin-bottom: 15px;
}

.u-id {
	display: flex;
	margin-bottom: 10px;
}

.ui-i {
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	margin-right: 18px;
	color: #666666;
}

.ui-u {
	flex: 1;
	display: flex;
	align-items: center;
	border-left: 1px solid #e7e9eb;
	text-align: start;
	padding-left: 18px;
	letter-spacing: 1px;
}

.u-score {
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	width: 200px;
	height: 30px;
	border-radius: 15px;
	border: 1px solid #e7e9eb;
	margin-left: auto;
	margin-right: auto;
	margin-bottom: 20px;
	font-size: smaller;
	letter-spacing: 0.3px;
	cursor: pointer;
}

.first {
	display: flex;
	font-size: 15px;
	color: #9b9b9b;
	letter-spacing: 0.5px;
}

.second {
	display: flex;
	justify-content: space-between;
	font-size: 15px;
}

.s-span {
	display: flex;
	align-items: center;
}

.s-icon {
	position: relative;
	width: 30px;
	height: 30px;
	border-radius: 15px;
	margin-right: 10px;
}

.s-icon > img {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 20px;
}

.s-div {
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 150px;
}

.ques {
	position: relative;
	padding: 15px 0 22px 0;
	text-align: center;
}

.ques > img {
	position: absolute;
	top: 45%;
	transform: translateY(-50%);
	margin-left: 2px;
}

.preview {
	display: flex;
	justify-content: space-between;
	margin-top: 25px;
}

.pre-box {
	position: relative;
	width: 250px;
	height: 250px;
	border: 1.5px solid #e3e3e3;
	border-radius: 2px;
	background-color: #f7f7f7;
	text-align: center;
	line-height: 250px;
}

.pre-box > img {
	width: 100%;
	height: 100%;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}

.pre-img {
	width: 100px;
	height: 100px;
	border: 1.5px solid #e3e3e3;
	border-radius: 2px;
}

.pre-img > img {
	width: 100%;
	height: 100%;
}

.yellow {
	color: #f8d61d;
}

.brown {
	color: #9b9b9b;
}

.margin-b {
	margin-bottom: 15px;
}

.margin-t {
	margin-top: 15px;
}

.padding {
	padding: 10px 0;
}

.red {
	background-color: #e97663;
}

.green {
	background-color: #3cbb7b;
}

.grey {
	background-color: #e7e9eb;
}

.blue {
	background-color: #28abe3;
}

/* 设置标签字体样式 */
.f-small {
	font-size: 12px;
	margin-left: 8px;
}

.small {
	width: 25px;
	height: 25px;
	border-radius: 12.5px;
}

.tip {
	height: 14px;
	font-size: 12px;
	color: red;
	text-align: left;
	margin-left: 16px;
	margin-bottom: 19px;
}
</style>
