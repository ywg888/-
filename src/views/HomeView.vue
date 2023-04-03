<template>
	<el-container>
		<!-- 状态栏 -->
		<el-header class="home-header-container">
			<div class="home-header-content">
				<!-- 状态栏-Logo -->
				<a class="home-header-logo" href="/">
					<img
						src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMzBweCIgaGVpZ2h0PSIzMHB4IiB2aWV3Qm94PSIwIDAgMzAgMzAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+MDUg5Zu+5qCHL+agvOW8j+Wbvuaghy/ooajljZUgMzBweC3lk4HniYxAMXg8L3RpdGxlPgogICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IHgxPSI1MCUiIHkxPSI1NC41MjIxMzM2JSIgeDI9IjgzLjUwMTEzMDMlIiB5Mj0iOTkuMjI5MzkyMSUiIGlkPSJsaW5lYXJHcmFkaWVudC0xIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzBENTlEMyIgb2Zmc2V0PSIwJSI+PC9zdG9wPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMDA3NUUzIiBvZmZzZXQ9IjEwMCUiPjwvc3RvcD4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgIDxwYXRoIGQ9Ik05LjgyNDI0MDA3LDEyLjEgTDE3LjE1NTQwNDcsMC4yNzYzMDU5ODIgTDIyLjM5NTg1MjgsLTMuNTI2NTY1NzFlLTEwIEwyMi4zOTU4NTI4LDIxLjE0OTIxODcgQzIyLjM5NTg1MjgsMjEuNjE5MDkyMyAyMi4wMzMwOTA2LDIyIDIxLjU4NTYwMDcsMjIgTDEuMjA2NTM0MzksMjIgQzAuNzU5MDQ0NTQ2LDIyIDAuMzk2MjgyMzU0LDIxLjYxOTA5MjMgMC4zOTYyODIzNTQsMjEuMTQ5MjE4NyBMMC4zOTU4NTI3NTUsMTIuMSBMOS44MjQyNDAwNywxMi4xIFoiIGlkPSJwYXRoLTIiPjwvcGF0aD4KICAgICAgICA8bGluZWFyR3JhZGllbnQgeDE9Ijk2LjQwMTQ4OTQlIiB5MT0iMzMuMzU3OTg4MiUiIHgyPSIyNS4xNzU4NzA5JSIgeTI9IjY0LjMwODkzNTIlIiBpZD0ibGluZWFyR3JhZGllbnQtNCI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMzNEIyRkYiIG9mZnNldD0iMCUiPjwvc3RvcD4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzAwODFGQyIgb2Zmc2V0PSIxMDAlIj48L3N0b3A+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgICAgICA8bGluZWFyR3JhZGllbnQgeDE9IjEwMy4zMzQ2MDElIiB5MT0iMzQuOTMwNjk1MyUiIHgyPSI2Mi44MTYyOTYzJSIgeTI9IjU0LjY3NDQwMzglIiBpZD0ibGluZWFyR3JhZGllbnQtNSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMxMjc1RUMiIG9mZnNldD0iMCUiPjwvc3RvcD4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzA3ODdGQyIgb2Zmc2V0PSIxMDAlIj48L3N0b3A+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KICAgIDxnIGlkPSIwNS3lm77moIcv5qC85byP5Zu+5qCHL+ihqOWNlS0zMHB4LeWTgeeJjCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9Iue8lue7hC0yIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMS4wMDAwMDAsIDQuMDAwMDAwKSI+CiAgICAgICAgICAgIDxnIGlkPSLnvJbnu4QiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQuNjA0MTQ3LCAwLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPG1hc2sgaWQ9Im1hc2stMyIgZmlsbD0id2hpdGUiPgogICAgICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BhdGgtMiI+PC91c2U+CiAgICAgICAgICAgICAgICA8L21hc2s+CiAgICAgICAgICAgICAgICA8dXNlIGlkPSLot6/lvoQiIGZpbGw9InVybCgjbGluZWFyR3JhZGllbnQtMSkiIHhsaW5rOmhyZWY9IiNwYXRoLTIiPjwvdXNlPgogICAgICAgICAgICAgICAgPGltYWdlIGlkPSLot6/lvoQiIG1hc2s9InVybCgjbWFzay0zKSIgeD0iMCIgeT0iMCIgd2lkdGg9IjIyLjY4IiBoZWlnaHQ9IjIxLjYiIHhsaW5rOmhyZWY9ImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQlVBQUFBVUNBWUFBQUJpUzNZekFBQUFCR2RCVFVFQUFMR09mUHRSa3dBQUFFUmxXRWxtVFUwQUtnQUFBQWdBQVlkcEFBUUFBQUFCQUFBQUdnQUFBQUFBQTZBQkFBTUFBQUFCQUFFQUFLQUNBQVFBQUFBQkFBQUFGYUFEQUFRQUFBQUJBQUFBRkFBQUFBQTFlenUrQUFBREdFbEVRVlE0RWFXVXoyNGNSUkRHditxZW5iV3RqZTA0T0pFaUl2a1FjakFTaDJ3azRNZ05DWVVvU0Q3eEdOeTRvTHhHWGlGdndJbG5DRmhDQ2dpUkJPenN2K3p1ek03T2JuZFg4WTJkZU0zTmRscGF6ZlJzOTYrL3F2cXFCUjh3cmgvOHVUV3RaMThCMlRVZ0FRNmx1TlIzVjJXYW1VeVh5MjhNMlJkaXFXdGU3bG5DTGFSV0o3c3FOSC84KzMzVDhBRGlkOGwzTGpxb3BOd01jaVdsTzkrLzJFd2hQUkpwM1JTMWJmVm9neTh3TEVWOGZXbG9FL1prTW44b1R1OG8wbzZLdEVVbEFscUk4K01ZUTNGcGFQdTc1NTh5eEM3TTdjQmt6WmtSYUlXcWpTVHBXeFpzZWlubzdzRmhKNW84Rmk4M1ZkQWhUT0IwNWd3amthd2ZFMGJZWENzdkJSMHQ4SWpWMkNQc2hoUEpHWExnZkVvdkRVUXh4THFmb0ZpZlh4amErdmJYQjdEMHRaai9tQUszWVVwYld1RkZldWEwRjZFRGlCVUk0K1dGb0kzSlZlVUhNZGtUMkVjQ2FhdVRCUlcramFaOUtoK2duYVpZeEJwYldiaVFUNHY1L0VjVDIyY0MyL1MxaWNqTXBWUXdqd09rTUVpSUkzNHZFV1FKN0tjc2UvamJFeFgzQ2J2aWpnSGJsTjVtWk1KRkZDTE5rNDdob01FTnJMRlkxVFNUTTNuRGxqeml5aDdjeG9qblZmaW5DdmdaeXJSd3VkRzR6RG9uN0FkdVlZd25Qek1WUXlJZ2tyb3crSUtoRDdudW1HY2M4WVJlcm40SXJVdThHaTZ4ZjhnTGdEZUJlcHVRTWFUdjJHSlNpeVoyQjYxeWZ0RHg1aEJGZFU1bEkvNzVMenhlMHZMSFZSYkcyTnlwOEZjWjhleEFHWmhsaEJ3bnRtNm1zV1FhT3F4a0Mra2s3Rk9zWi9PQmtXalQzVGJucmpIVXZ4SFIxekc2SG54ZW9PZ3ZzTjlOT0R6ZGtpWG4vdmFLZ2tvNmpIeU53VHA2WmFYVVBKbUprVnN5WnpVdFZhYTBuTUN0RDdDWmo0R3F4UFZ1d0ZPY3FHeXdHWE4vbEJSVHVGYk9qWFFETHhtTEsyaE9wWUZneC9LcEJJU2FWcElLMGMzUXIrYTROMS9nZG5PWk12dnZSb1liN05maFJvRVVNMTVqMUZqUk5HNEZqU3g2TTNOTVFSVVN0bllqeWpxaTB3LzQvTXVBdzJlR3A5MHpZTVBOc0pkWHVFWklzU0dZWllLNlpJRVp5ZnRoSmJCMjYzVFQ3VDhNZTU4cGZtR29uYnZOTjJOeCtGeXBiTFpSdy9sS1Axa3BmQTg5ZS81MFRzMy9JV2RMM3IzOEIrN3RwbDZibCt3MUFBQUFBRWxGVGtTdVFtQ0MiPjwvaW1hZ2U+CiAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPHBhdGggZD0iTTI3LDAgTDE4LjE3MzYzNTUsMTQuNjM0NTQxMiBDMTguMDExOTgzMSwxNC45MDI1Njg4IDE3LjcwODA3NDksMTUuMDM0ODM1NiAxNy40MTQyMjc2LDE0Ljk5MjEgTDEuMjUyMjc4LDE0Ljk5MjM5IEMxLjExMjk0ODcxLDE0Ljk5MjM5IDEsMTQuODgwMzA0OCAxLDE0Ljc0MjA0MDcgQzEsMTQuNjk2MTkzOCAxLjAxMjY4NjczLDE0LjY1MTIyNzIgMS4wMzY2NzY0MSwxNC42MTIwNDU1IEw0LjE1NjgwNTQ0LDkuNDQ4NzU4NjcgQzQuMjk0MDY5NjgsOS4yMjQ1Njg4NyA0LjUzOTI2MjAyLDkuMDg3Njk2NTcgNC44MDM2MTAyMiw5LjA4NzY5NjU3IEwxNC42OTk0MzIzLDkuMDg3NDg1NyBMMTkuOTE1NTMxMiwwLjM2OTQxMjY5OSBDMjAuMDUxNjMzMSwwLjE0MDQ4NzkyOCAyMC4yOTk1Mjk1LDAgMjAuNTY3Mzc0NCwwIEwyNywwIFogTTE1Ljc0NDc0ODEsMCBDMTUuODg1NzE5OCwwIDE2LDAuMTA0NjU5MjU5IDE2LDAuMjMzNzYyOTk5IEMxNiwwLjI3MjQ2MDQ3MSAxNS45ODk1MSwwLjMxMDU1MjY1MiAxNS45Njk0NzEzLDAuMzQ0NjIxODIxIEwxMi44NTk5NzAzLDUuNjMxMjg3NDcgQzEyLjcyNjM5NDQsNS44NTgzODg3MyAxMi40Njc0NjYzLDYgMTIuMTg1ODAwNiw2IEw2LjI1NTI1MTk1LDYgQzYuMTE0MjgwMTksNiA2LDUuODk1MzQwNzQgNiw1Ljc2NjIzNyBDNiw1LjcyODExNDYxIDYuMDEwMTgwNjMsNS42OTA1NzA2OCA2LjAyOTY1NDYzLDUuNjU2ODc3MjcgTDkuMDgzNDg5NjcsMC4zNzMyMDk4IEM5LjIxNjE5NDAyLDAuMTQzNjA4MTA3IDkuNDc2NjE4MDgsMCA5Ljc2MDI4MTYyLDAgTDE1Ljc0NDc0ODEsMCBaIiBpZD0i5b2i54q2IiBmaWxsPSJ1cmwoI2xpbmVhckdyYWRpZW50LTQpIj48L3BhdGg+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik00Ljc5MzMzMTQxLDkuMDg3NDg1NyBMMTQuNjk5NDMyMyw5LjA4NzQ4NTcgTDE0LjY5OTQzMjMsOS4wODc0ODU3IEwxMS41NDkyNTk1LDE1IEwxLjMwOTkwMTY3LDE0Ljk5Mzg4MzkgQzEuMTcwMTA0NjIsMTQuOTkzODAwNCAxLjA1Njg0NDQxLDE0Ljg4MDQwNDggMS4wNTY5Mjc5MSwxNC43NDA2MDc3IEMxLjA1Njk1NDk3LDE0LjY5NTMxNjMgMS4wNjkxMzM2OCwxNC42NTA4NjE2IDEuMDkyMTkzODUsMTQuNjExODgwMyBMNC4xMzk3NTQzNSw5LjQ2MDIyNDY4IEM0LjI3NjQyMzE0LDkuMjI5MTk3MDkgNC41MjQ5MDYxOCw5LjA4NzQ4NTcgNC43OTMzMzE0MSw5LjA4NzQ4NTcgWiIgaWQ9IuefqeW9oiIgZmlsbD0idXJsKCNsaW5lYXJHcmFkaWVudC01KSI+PC9wYXRoPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"
						class="home-header-logo-icon"
					/>
					<div class="home-header-logo-name">金山表单</div>
				</a>
				<!-- 状态栏-登录按钮 -->
				<el-button class="home-header-button" plain @click="login"
					>立即使用</el-button
				>
			</div>
		</el-header>
		<div class="content-container">
			<!-- 主体 -->
			<el-main class="home-main-container">
				<!-- 主体-Banner -->
				<section class="home-main-banner-container">
					<div class="home-main-banner-content">
						<div class="home-main-banner-title">
							金山表单<br />便捷的在线信息收集工具
						</div>
						<div class="home-main-banner-desc">
							人人都会用的在线表单，支持手机电脑多端信息同步<br />随时随地查看收集结果
						</div>
						<el-button
							type="primary"
							class="home-main-banner-button"
							@click="login"
							>立即使用</el-button
						>
					</div>
					<!-- 主体-Banner-引导箭头 -->
					<img
						src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iODNweCIgaGVpZ2h0PSI0MHB4IiB2aWV3Qm94PSIwIDAgODMgNDAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+57yW57uEIDIyPC90aXRsZT4KICAgIDxnIGlkPSLnu4jnqL8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSLpppbpobUxLS3lvJXlr7wiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC05MTkuMDAwMDAwLCAtNjUxLjAwMDAwMCkiIGZpbGw9IiNERkYwRkYiPgogICAgICAgICAgICA8ZyBpZD0i57yW57uELTIyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg5MTkuMDAwMDAwLCA2NTEuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMy42MDkzMDA2NCwxNSBMNzkuNDEzNDIxNCwxNSBDNzkuOTY1NzA2MiwxNSA4MC40MTM0MjE0LDE1LjQ0NzcxNTMgODAuNDEzNDIxNCwxNiBDODAuNDEzNDIxNCwxNi4zNTAwNDk4IDgwLjIzMDM4MzMsMTYuNjc0NjE3IDc5LjkzMDgzMjgsMTYuODU1NzM2OCBMNDIuMTY4NDkyNCwzOS42ODgzMDMzIEM0MS44NTEzNjg1LDM5Ljg4MDA0ODYgNDEuNDU0MjA4MSwzOS44ODA2OTU4IDQxLjEzNjQ2MSwzOS42ODk5ODQ5IEwzLjA5NDY4MDYzLDE2Ljg1NzQxODQgQzIuNjIxMTQxNTQsMTYuNTczMjAxNiAyLjQ2NzY2NTUsMTUuOTU4OTE5MSAyLjc1MTg4MjI5LDE1LjQ4NTM4IEMyLjkzMjYyMjYsMTUuMTg0MjQ1MSAzLjI1ODA4OTQ1LDE1IDMuNjA5MzAwNjQsMTUgWiIgaWQ9IuefqeW9oiIgb3BhY2l0eT0iMC40MDA1NDk2Ij48L3BhdGg+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMy42MDkzMDA2NCwwIEw3OS40MTM0MjE0LDAgQzc5Ljk2NTcwNjIsLTEuMDE0NTMwNjNlLTE2IDgwLjQxMzQyMTQsMC40NDc3MTUyNSA4MC40MTM0MjE0LDEgQzgwLjQxMzQyMTQsMS4zNTAwNDk4MSA4MC4yMzAzODMzLDEuNjc0NjE2OTkgNzkuOTMwODMyOCwxLjg1NTczNjc2IEw0Mi4xNjg0OTI0LDI0LjY4ODMwMzMgQzQxLjg1MTM2ODUsMjQuODgwMDQ4NiA0MS40NTQyMDgxLDI0Ljg4MDY5NTggNDEuMTM2NDYxLDI0LjY4OTk4NDkgTDMuMDk0NjgwNjMsMS44NTc0MTgzNiBDMi42MjExNDE1NCwxLjU3MzIwMTU3IDIuNDY3NjY1NSwwLjk1ODkxOTA2NiAyLjc1MTg4MjI5LDAuNDg1Mzc5OTgzIEMyLjkzMjYyMjYsMC4xODQyNDUwNTkgMy4yNTgwODk0NSwzLjYxNzIzMDEzZS0xNSAzLjYwOTMwMDY0LDAgWiIgaWQ9IuefqeW9ouWkh+S7vS0zIj48L3BhdGg+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg=="
						class="home-main-banner-arrow"
					/>
				</section>
				<!-- 主体-模板应用 -->
				<section class="home-main-templates-container" id="templates">
					<div class="home-main-templates-content">
						<!-- 主体-模板应用-正副标题 -->
						<div class="home-main-templates-title">
							从模板出发，开启金山表单之旅
						</div>
						<a class="home-main-templates-more" @click="login"
							>查看更多模板
							<img
								src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iN3B4IiBoZWlnaHQ9IjEycHgiIHZpZXdCb3g9IjAgMCA3IDEyIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPHRpdGxlPjAx5YWs5YWxLzAx6aG25qCPLzE2eDE2L3B1Yl9tZW51YmFyX0ZvcndhcmQ8L3RpdGxlPgogICAgPGcgaWQ9Iue7iOeovyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IummlumhtTEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMDEyLjAwMDAwMCwgLTQ3MjUuMDAwMDAwKSIgZmlsbD0iIzQxN0ZGOSIgZmlsbC1ydWxlPSJub256ZXJvIj4KICAgICAgICAgICAgPGcgaWQ9Iue8lue7hC0yMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoODk4LjAwMDAwMCwgNDcxMS4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSIwMeWFrOWFsS8wMemhtuagjy8xNngxNi9wdWJfbWVudWJhcl9Gb3J3YXJkIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMDkuMDAwMDAwLCAxMi4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNS45NDcxMzQzOSwxMi4yOTMyMDY1IEM1LjY2NzI0MDA5LDEyLjU5ODU0NTggNS42ODc4NjcyOSwxMy4wNzI5NzEzIDUuOTkzMjA2NTMsMTMuMzUyODY1NiBDNi4yOTg1NDU3NywxMy42MzI3NTk5IDYuNzcyOTcxMywxMy42MTIxMzI3IDcuMDUyODY1NjEsMTMuMzA2NzkzNSBMMTEuNTUyODY1Niw4LjMwNjc5MzQ3IEMxMS44MjQxOTg1LDguMDEwNzkzOTQgMTEuODE0MjY0Myw3LjU1MzYwNDEyIDExLjUzMDMzMDEsNy4yNjk2Njk5MSBMNy4wMzAzMzAwOSwyLjc2OTY2OTkxIEM2LjczNzQzNjg3LDIuNDc2Nzc2NyA2LjI2MjU2MzEzLDIuNDc2Nzc2NyA1Ljk2OTY2OTkxLDIuNzY5NjY5OTEgQzUuNjc2Nzc2NywzLjA2MjU2MzEzIDUuNjc2Nzc2NywzLjUzNzQzNjg3IDUuOTY5NjY5OTEsMy44MzAzMzAwOSBMOS45NjE4OTY2NCw3LjgyMjU1NjgxIEw1Ljk0NzEzNDM5LDEyLjI5MzIwNjUgWiIgaWQ9Iui3r+W+hCI+PC9wYXRoPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4="
								class="home-main-templates-more-btn"
							/>
						</a>
						<!-- 主体-模板应用-模板列表 -->
						<div class="home-main-templates-examples">
							<a
								class="home-main-templates-example"
								@click="login"
								v-for="(tplData, index) in templateData"
								:key="index"
							>
								<div class="home-main-templates-example-name">
									{{ tplData.title }}
								</div>
								<div>
									<div
										class="home-main-templates-children"
										v-for="(tpl, index) in tplData.templateList"
										:key="index"
									>
										{{ tpl }}
									</div>
								</div>
							</a>
						</div>
					</div>
				</section>
			</el-main>
			<!-- 底部栏 -->
			<el-footer class="home-footer-container">
				<div class="home-footer-content">
					<!-- 底部栏-导航 -->
					<div class="home-footer-nav">
						<img
							src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMzBweCIgaGVpZ2h0PSIzMHB4IiB2aWV3Qm94PSIwIDAgMzAgMzAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+MDUg5Zu+5qCHL+agvOW8j+Wbvuaghy/ooajljZUgMzBweC3lk4HniYxAMXg8L3RpdGxlPgogICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IHgxPSI1MCUiIHkxPSI1NC41MjIxMzM2JSIgeDI9IjgzLjUwMTEzMDMlIiB5Mj0iOTkuMjI5MzkyMSUiIGlkPSJsaW5lYXJHcmFkaWVudC0xIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzBENTlEMyIgb2Zmc2V0PSIwJSI+PC9zdG9wPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMDA3NUUzIiBvZmZzZXQ9IjEwMCUiPjwvc3RvcD4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgIDxwYXRoIGQ9Ik05LjgyNDI0MDA3LDEyLjEgTDE3LjE1NTQwNDcsMC4yNzYzMDU5ODIgTDIyLjM5NTg1MjgsLTMuNTI2NTY1NzFlLTEwIEwyMi4zOTU4NTI4LDIxLjE0OTIxODcgQzIyLjM5NTg1MjgsMjEuNjE5MDkyMyAyMi4wMzMwOTA2LDIyIDIxLjU4NTYwMDcsMjIgTDEuMjA2NTM0MzksMjIgQzAuNzU5MDQ0NTQ2LDIyIDAuMzk2MjgyMzU0LDIxLjYxOTA5MjMgMC4zOTYyODIzNTQsMjEuMTQ5MjE4NyBMMC4zOTU4NTI3NTUsMTIuMSBMOS44MjQyNDAwNywxMi4xIFoiIGlkPSJwYXRoLTIiPjwvcGF0aD4KICAgICAgICA8bGluZWFyR3JhZGllbnQgeDE9Ijk2LjQwMTQ4OTQlIiB5MT0iMzMuMzU3OTg4MiUiIHgyPSIyNS4xNzU4NzA5JSIgeTI9IjY0LjMwODkzNTIlIiBpZD0ibGluZWFyR3JhZGllbnQtNCI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMzNEIyRkYiIG9mZnNldD0iMCUiPjwvc3RvcD4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzAwODFGQyIgb2Zmc2V0PSIxMDAlIj48L3N0b3A+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgICAgICA8bGluZWFyR3JhZGllbnQgeDE9IjEwMy4zMzQ2MDElIiB5MT0iMzQuOTMwNjk1MyUiIHgyPSI2Mi44MTYyOTYzJSIgeTI9IjU0LjY3NDQwMzglIiBpZD0ibGluZWFyR3JhZGllbnQtNSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMxMjc1RUMiIG9mZnNldD0iMCUiPjwvc3RvcD4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzA3ODdGQyIgb2Zmc2V0PSIxMDAlIj48L3N0b3A+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KICAgIDxnIGlkPSIwNS3lm77moIcv5qC85byP5Zu+5qCHL+ihqOWNlS0zMHB4LeWTgeeJjCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9Iue8lue7hC0yIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMS4wMDAwMDAsIDQuMDAwMDAwKSI+CiAgICAgICAgICAgIDxnIGlkPSLnvJbnu4QiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQuNjA0MTQ3LCAwLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPG1hc2sgaWQ9Im1hc2stMyIgZmlsbD0id2hpdGUiPgogICAgICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BhdGgtMiI+PC91c2U+CiAgICAgICAgICAgICAgICA8L21hc2s+CiAgICAgICAgICAgICAgICA8dXNlIGlkPSLot6/lvoQiIGZpbGw9InVybCgjbGluZWFyR3JhZGllbnQtMSkiIHhsaW5rOmhyZWY9IiNwYXRoLTIiPjwvdXNlPgogICAgICAgICAgICAgICAgPGltYWdlIGlkPSLot6/lvoQiIG1hc2s9InVybCgjbWFzay0zKSIgeD0iMCIgeT0iMCIgd2lkdGg9IjIyLjY4IiBoZWlnaHQ9IjIxLjYiIHhsaW5rOmhyZWY9ImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQlVBQUFBVUNBWUFBQUJpUzNZekFBQUFCR2RCVFVFQUFMR09mUHRSa3dBQUFFUmxXRWxtVFUwQUtnQUFBQWdBQVlkcEFBUUFBQUFCQUFBQUdnQUFBQUFBQTZBQkFBTUFBQUFCQUFFQUFLQUNBQVFBQUFBQkFBQUFGYUFEQUFRQUFBQUJBQUFBRkFBQUFBQTFlenUrQUFBREdFbEVRVlE0RWFXVXoyNGNSUkRHditxZW5iV3RqZTA0T0pFaUl2a1FjakFTaDJ3azRNZ05DWVVvU0Q3eEdOeTRvTHhHWGlGdndJbG5DRmhDQ2dpUkJPenN2K3p1ek03T2JuZFg4WTJkZU0zTmRscGF6ZlJzOTYrL3F2cXFCUjh3cmgvOHVUV3RaMThCMlRVZ0FRNmx1TlIzVjJXYW1VeVh5MjhNMlJkaXFXdGU3bG5DTGFSV0o3c3FOSC84KzMzVDhBRGlkOGwzTGpxb3BOd01jaVdsTzkrLzJFd2hQUkpwM1JTMWJmVm9neTh3TEVWOGZXbG9FL1prTW44b1R1OG8wbzZLdEVVbEFscUk4K01ZUTNGcGFQdTc1NTh5eEM3TTdjQmt6WmtSYUlXcWpTVHBXeFpzZWlubzdzRmhKNW84Rmk4M1ZkQWhUT0IwNWd3amthd2ZFMGJZWENzdkJSMHQ4SWpWMkNQc2hoUEpHWExnZkVvdkRVUXh4THFmb0ZpZlh4amErdmJYQjdEMHRaai9tQUszWVVwYld1RkZldWEwRjZFRGlCVUk0K1dGb0kzSlZlVUhNZGtUMkVjQ2FhdVRCUlcramFaOUtoK2duYVpZeEJwYldiaVFUNHY1L0VjVDIyY0MyL1MxaWNqTXBWUXdqd09rTUVpSUkzNHZFV1FKN0tjc2UvamJFeFgzQ2J2aWpnSGJsTjVtWk1KRkZDTE5rNDdob01FTnJMRlkxVFNUTTNuRGxqeml5aDdjeG9qblZmaW5DdmdaeXJSd3VkRzR6RG9uN0FkdVlZd25Qek1WUXlJZ2tyb3crSUtoRDdudW1HY2M4WVJlcm40SXJVdThHaTZ4ZjhnTGdEZUJlcHVRTWFUdjJHSlNpeVoyQjYxeWZ0RHg1aEJGZFU1bEkvNzVMenhlMHZMSFZSYkcyTnlwOEZjWjhleEFHWmhsaEJ3bnRtNm1zV1FhT3F4a0Mra2s3Rk9zWi9PQmtXalQzVGJucmpIVXZ4SFIxekc2SG54ZW9PZ3ZzTjlOT0R6ZGtpWG4vdmFLZ2tvNmpIeU53VHA2WmFYVVBKbUprVnN5WnpVdFZhYTBuTUN0RDdDWmo0R3F4UFZ1d0ZPY3FHeXdHWE4vbEJSVHVGYk9qWFFETHhtTEsyaE9wWUZneC9LcEJJU2FWcElLMGMzUXIrYTROMS9nZG5PWk12dnZSb1liN05maFJvRVVNMTVqMUZqUk5HNEZqU3g2TTNOTVFSVVN0bllqeWpxaTB3LzQvTXVBdzJlR3A5MHpZTVBOc0pkWHVFWklzU0dZWllLNlpJRVp5ZnRoSmJCMjYzVFQ3VDhNZTU4cGZtR29uYnZOTjJOeCtGeXBiTFpSdy9sS1Axa3BmQTg5ZS81MFRzMy9JV2RMM3IzOEIrN3RwbDZibCt3MUFBQUFBRWxGVGtTdVFtQ0MiPjwvaW1hZ2U+CiAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPHBhdGggZD0iTTI3LDAgTDE4LjE3MzYzNTUsMTQuNjM0NTQxMiBDMTguMDExOTgzMSwxNC45MDI1Njg4IDE3LjcwODA3NDksMTUuMDM0ODM1NiAxNy40MTQyMjc2LDE0Ljk5MjEgTDEuMjUyMjc4LDE0Ljk5MjM5IEMxLjExMjk0ODcxLDE0Ljk5MjM5IDEsMTQuODgwMzA0OCAxLDE0Ljc0MjA0MDcgQzEsMTQuNjk2MTkzOCAxLjAxMjY4NjczLDE0LjY1MTIyNzIgMS4wMzY2NzY0MSwxNC42MTIwNDU1IEw0LjE1NjgwNTQ0LDkuNDQ4NzU4NjcgQzQuMjk0MDY5NjgsOS4yMjQ1Njg4NyA0LjUzOTI2MjAyLDkuMDg3Njk2NTcgNC44MDM2MTAyMiw5LjA4NzY5NjU3IEwxNC42OTk0MzIzLDkuMDg3NDg1NyBMMTkuOTE1NTMxMiwwLjM2OTQxMjY5OSBDMjAuMDUxNjMzMSwwLjE0MDQ4NzkyOCAyMC4yOTk1Mjk1LDAgMjAuNTY3Mzc0NCwwIEwyNywwIFogTTE1Ljc0NDc0ODEsMCBDMTUuODg1NzE5OCwwIDE2LDAuMTA0NjU5MjU5IDE2LDAuMjMzNzYyOTk5IEMxNiwwLjI3MjQ2MDQ3MSAxNS45ODk1MSwwLjMxMDU1MjY1MiAxNS45Njk0NzEzLDAuMzQ0NjIxODIxIEwxMi44NTk5NzAzLDUuNjMxMjg3NDcgQzEyLjcyNjM5NDQsNS44NTgzODg3MyAxMi40Njc0NjYzLDYgMTIuMTg1ODAwNiw2IEw2LjI1NTI1MTk1LDYgQzYuMTE0MjgwMTksNiA2LDUuODk1MzQwNzQgNiw1Ljc2NjIzNyBDNiw1LjcyODExNDYxIDYuMDEwMTgwNjMsNS42OTA1NzA2OCA2LjAyOTY1NDYzLDUuNjU2ODc3MjcgTDkuMDgzNDg5NjcsMC4zNzMyMDk4IEM5LjIxNjE5NDAyLDAuMTQzNjA4MTA3IDkuNDc2NjE4MDgsMCA5Ljc2MDI4MTYyLDAgTDE1Ljc0NDc0ODEsMCBaIiBpZD0i5b2i54q2IiBmaWxsPSJ1cmwoI2xpbmVhckdyYWRpZW50LTQpIj48L3BhdGg+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik00Ljc5MzMzMTQxLDkuMDg3NDg1NyBMMTQuNjk5NDMyMyw5LjA4NzQ4NTcgTDE0LjY5OTQzMjMsOS4wODc0ODU3IEwxMS41NDkyNTk1LDE1IEwxLjMwOTkwMTY3LDE0Ljk5Mzg4MzkgQzEuMTcwMTA0NjIsMTQuOTkzODAwNCAxLjA1Njg0NDQxLDE0Ljg4MDQwNDggMS4wNTY5Mjc5MSwxNC43NDA2MDc3IEMxLjA1Njk1NDk3LDE0LjY5NTMxNjMgMS4wNjkxMzM2OCwxNC42NTA4NjE2IDEuMDkyMTkzODUsMTQuNjExODgwMyBMNC4xMzk3NTQzNSw5LjQ2MDIyNDY4IEM0LjI3NjQyMzE0LDkuMjI5MTk3MDkgNC41MjQ5MDYxOCw5LjA4NzQ4NTcgNC43OTMzMzE0MSw5LjA4NzQ4NTcgWiIgaWQ9IuefqeW9oiIgZmlsbD0idXJsKCNsaW5lYXJHcmFkaWVudC01KSI+PC9wYXRoPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"
							class="home-footer-nav-logo"
						/>
						<div
							class="home-footer-nav-items"
							v-for="(ftData, index) in footerData"
							:key="index"
						>
							<div class="home-footer-title">{{ ftData.title }}</div>
							<a
								v-for="(itm, index) in ftData.items"
								:key="index"
								target="_blank"
								class="home-footer-nav-item"
								:href="itm.site"
								>{{ itm.item }}</a
							>
						</div>

						<div class="home-footer-nav-items">
							<div class="home-footer-title">联系我们</div>
							<span class="home-footer-nav-item">微信扫码加群反馈</span>
							<img
								src="//kdocs-form.wpscdn.cn/form-4325e390a6c623e5da270645748567da9d4478e0-assets/css/img/55a8891608393e27dd925ae149c32f56.png"
								class="home-footer-qrCode"
							/>
						</div>
					</div>
					<!-- 底部栏-版权 -->
					<div class="home-footer-copyright">
						由金山云提供存储服务<br />© 2008-2018 Kingsoft Office Corporation,
						All Rights Reserved | 粤ICP备19016741号-4 | 珠海优艺科技运营
					</div>
				</div>
			</el-footer>
		</div>
	</el-container>
</template>

<script setup lang="ts">
import router from "@/router"
// import store from '@/store'

// 前往欢迎界面（路由统一拦截）
const login = async () => {
	router.push("/home_page")
}

// 模板数据
const templateData = [
	{
		title: "在线收集",
		templateList: [
			"学生资料收集表",
			"学生健康信息登记表",
			"销售业绩统计表",
			"订单统计表",
			"货物盘点记录表",
			"考勤统计表",
		],
	},
	{
		title: "签到打卡",
		templateList: [
			"开心7天收心打卡",
			"远程办公打卡",
			"考勤+健康情况打卡",
			"外出办公打卡",
			"返校通知书确认",
			"上课签到",
		],
	},
	{
		title: "在线考试",
		templateList: [
			"小学数学试题",
			"高中语文随堂测验",
			"初中英语随堂测试",
			"驾考科目一练习题",
			"教师资格证考试",
			"公务员自测",
		],
	},
]

// 底部栏数据
const footerData = [
	{
		title: "协作应用",
		items: [
			{
				item: "金山文档",
				site: "https://www.kdocs.cn",
			},
			{
				item: "金山日历",
				site: "https://rili.wps.cn",
			},
			{
				item: "金山待办",
				site: "https://todo.wps.cn",
			},
			{
				item: "金山会议",
				site: "https://www.kdocs.cn/meeting/view/homepage",
			},
		],
	},
	{
		title: "服务",
		items: [
			{
				item: "帮助中心",
				site: "/",
			},
			{
				item: "意见反馈",
				site: "/",
			},
		],
	},
	{
		title: "更多",
		items: [
			{
				item: "金山文档·教育",
				site: "https://edu.kdocs.cn/welcome",
			},
			{
				item: "WPS官网",
				site: "https://www.wps.cn",
			},
		],
	},
]
</script>

<style scoped lang="scss">
@import "@/assets/style/base.scss";

$title-color: #3e3e3e; //标题颜色

/* 状态栏 */
.home-header-container {
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #fff;
	box-shadow: 0 0 10px 0 rgb(58 58 58 / 7%);
	position: fixed;
	top: 0;
	left: 0;
	z-index: 100;
	width: 100vw;
	height: 56px;

	.home-header-content {
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 56px;
		width: 80vw;
		flex-shrink: 0;
		position: relative;
	}
}

// 状态栏-Logo
.home-header-logo {
	display: flex;
	align-items: center;
	justify-content: space-between;

	&-icon {
		width: 30px;
		height: 30px;
		margin-right: 10px;
	}

	&-name {
		font-size: 18px;
		font-weight: 500;
		color: #3c414b;
		line-height: 25px;
	}
}

// 状态栏-登录按钮
.home-header-button {
	color: $primary-font-color;
	border-color: $primary-font-color !important;
	width: 96px;
	height: 32px;

	&:hover {
		background-color: #f6fbff !important;
	}
}

/* 主体 */
.home-main-container {
	padding: 0;
}

/* 主体-Banner */
.home-main-banner-container {
	display: flex;
	align-items: center;
	justify-content: center;
	background: url("//kdocs-form.wpscdn.cn/form-422ed140fc02425b994c7954632f9385b50d5a7b-assets/css/img/e99de4c19d42348caa5e265ea96f6f8e.png")
		no-repeat bottom;
	background-size: cover;
	position: relative;

	.home-main-banner-content {
		width: 1160px;
		flex-shrink: 0;
		padding: 130px 0 190px;
		text-align: left;
	}
}

.home-main-banner-title {
	font-size: 32px;
	font-weight: 500;
	color: $title-color;
	line-height: 42px;
}

.home-main-banner-desc {
	width: 43%;
	font-size: 16px;
	font-weight: 400;
	color: #848484;
	line-height: 26px;
	margin: 8px 0 32px;
}

.home-main-banner-button {
	width: 200px;
	height: 48px;
	font-size: 18px;
	font-weight: 500;
}

// 主体-Banner-引导箭头
.home-main-banner-arrow {
	width: 83px;
	height: 40px;
	position: absolute;
	bottom: -90px;
	animation-name: breath;
	animation-duration: 1s;
	animation-timing-function: ease-in-out;
	animation-iteration-count: infinite;
	animation-direction: alternate;
}

@keyframes breath {
	0% {
		transform: scale(0.6);
	}

	50% {
		transform: scale(1.1);
	}

	100% {
		transform: scale(0.6);
	}
}

/* 主体-模板应用 */
.home-main-templates-container {
	display: flex;
	align-items: center;
	margin-top: 120px;
	justify-content: center;
	background-color: rgba(0, 129, 252, 0.03);

	.home-main-templates-content {
		width: 1156px;
		flex-shrink: 0;
		padding: 100px 0 120px;
	}
}

// 主体-模板应用-正副标题
.home-main-templates-more,
.home-main-templates-title {
	display: flex;
	align-items: center;
	justify-content: center;
	height: 40px;
}

.home-main-templates-title {
	flex-direction: column;
	font-size: 36px;
	font-weight: 600;
	color: $title-color;
}

.home-main-templates-more {
	font-size: 18px;
	font-weight: 400;
	margin: 13px 0 45px;
	color: $primary-font-color;
	cursor: pointer;

	&-btn {
		width: 16px;
		height: 16px;
		user-select: none;
	}
}

// 主体-模板应用-模板列表
.home-main-templates-examples {
	display: flex;
	align-items: center;
	justify-content: space-between;

	.home-main-templates-example {
		width: 332px;
		background: #fff;
		box-shadow: 0 15px 20px 0 hsla(0, 0%, 68.2%, 0.1);
		border-radius: 10px;
		padding: 30px 0 66px;
		cursor: pointer;

		&-name {
			display: flex;
			align-items: center;
			width: 210px;
			height: 57px;
			justify-content: center;
			background: #f5f7fa;
			border-radius: 28.5px;
			font-size: 24px;
			font-weight: 500;
			color: $title-color;
			margin: 0 auto 38px;
		}

		.home-main-templates-children {
			font-size: 14px;
			font-weight: 400;
			color: rgba(0, 0, 0, 0.5);
			line-height: 22px;
			text-align: center;

			+ .home-main-templates-children {
				margin-top: 22px;
			}
		}
	}
}

/* 底部栏 */
.home-footer-container {
	display: flex;
	align-items: center;
	margin-top: 150px;
	justify-content: center;
	background-color: #fff;

	.home-footer-content {
		display: flex;
		flex-shrink: 0;
		flex-direction: column;
		padding: 90px 0 32px;
		justify-content: space-between;
		align-items: stretch;
		width: 1160px;
	}
}

// 底部栏-导航
.home-footer-nav {
	display: flex;
	align-items: flex-start;
	justify-content: space-between;

	&-logo {
		width: 77px;
		height: 77px;
	}

	.home-footer-title {
		font-size: 20px;
		color: #3d4757;
		line-height: 39px;
	}

	.home-footer-nav-item {
		display: block;
		font-size: 16px;
		font-weight: 400;
		color: #767c85;
		line-height: 22px;
		margin-top: 16px;
	}

	.home-footer-qrCode {
		margin-top: 6px;
		width: 96px;
		height: 96px;
	}
}

// 底部栏-版权
.home-footer-copyright {
	margin-top: 75px;
	font-size: 14px;
	font-weight: 400;
	color: #c2c4c6;
	line-height: 26px;
	text-align: center;
}
</style>
