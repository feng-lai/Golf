<template>
	<view>
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		<image :src="sImgUrl+'close.png'" class="close" @click="reback()"></image>
		<view>
			<view class="hello">Hello!</view>
			<view class="welcome">欢迎登录，降杆</view>
		</view>
		<view class="form">
			<view :class="login_type == 2?['tab','active']:['tab']">
				<view class="sub" @click="change_type(1)">
					<text>快捷登录</text>
					<view class="line" v-if="login_type == 1"></view>
				</view>
				<view class="sub" @click="change_type(2)">
					<text>验证码登录</text>
					<view class="line" v-if="login_type == 2"></view>
				</view>
			</view>
			<view class="content">
				<view class="phone">
					<input type="number" placeholder="手机号码" placeholder-class="placeholderStyle" v-model="phone"
						@input="check" />
					<image :src="sImgUrl+'icon_Shut.png'" v-if="phone" @click="clear_phone"></image>
				</view>
				<view class="password" v-if="login_type == 1">
					<input :type="!vis?'password':'text'" placeholder="登录密码" placeholder-class="placeholderStyle"
						v-model="password" @input="check" />
					<image :src="sImgUrl+'icon_visible.png'" @click="vis_password()" v-if="!vis"></image>
					<image :src="sImgUrl+'icon_visibles.png'" @click="vis_password()" v-if="vis"></image>
				</view>
				<view class="password" v-if="login_type == 2">
					<input type="number" placeholder="验证码" placeholder-class="placeholderStyle" v-model="code"
						@input="check" />
					<text @click="send_code()" v-if="is_code == 30">获取验证码</text>
					<text v-else>{{is_code}}秒后重新获取</text>
				</view>
				<view class="btn full" v-if="is" @click="login()">登录</view>
				<view class="btn" v-if="!is">登录</view>
				<view class="sign">还没有账号，<text @click="to_register">立即注册</text></view>
				<!--  #ifndef  MP-WEIXIN -->
				<view class="log_text">第三方账号快速登录</view>
				<view class="wx" @click="wechatLogin()">
					<image :src="sImgUrl+'icon_WeChat.png'"></image>
				</view>
				<!--  #endif -->
				<view class="agree">
					登录即表示您同意<text>《用户协议》</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	const app = getApp()
	import index from '@/api/index.js'
	var that
	export default {
		data() {
			return {
				login_type: 1,
				phone: '',
				password: '',
				vis: false,
				is: false,
				code: '',
				is_code: 30,
				sImgUrl:app.globalData.sImgUrl
			}
		},
		methods: {
			wechatLogin() {
				//#ifdef APP-PLUS
				uni.login({
					provider: 'weixin',
					success: function(loginRes) {
						// 登录成功
						uni.getUserInfo({
							provider: 'weixin',
							success: function(info) {
								

								// 获取用户信息成功, info.authResult保存用户信息
							}
						})
					},
					fail: function(err) {
						// 登录授权失败  
						// err.code是错误码
					}
				});
				//#endif

				//#ifdef MP-WEIXIN
				uni.login({
					provider: 'weixin',
					success: function(loginRes) {
						index.getUnionIdWithMiniProgram({
							code: loginRes.code
						}).then(res => {
							uni.setStorageSync('unionId',res.data)
							index.loginWithMiniProgram({
								unionId: res.data
							}).then(ros => {
								uni.setStorage({
									key: 'token',
									data: ros.data.token,
									success() {
										if (ros.data.newUser) {
											uni.navigateTo({
												url: '/pages/register/gender'
											})
										} else {
											uni.getStorage({
												key: 'url',
												success(r) {
													uni.navigateTo({
														url: r.data,
														fail() {
															uni.reLaunch({
																url: r.data
															})
														}
													})
												},
												fail() {
													uni.reLaunch({
														url: '/pages/index/index'
													})
												}
											})
										}
									}
								})
							}).catch(errors => {

							})

						}).catch(error => {

						})
					},
					fail: function(err) {
						// 登录授权失败  
						// err.code是错误码
					}
				});
				//#endif
			},
			geturl() {
				uni.request({
					url: 'https://{云函数Url化域名}/http/uni-id-co/login',
					method: 'POST',
					data: {
						clientInfo: uni.getSystemInfoSync(),
						uniIdToken: '用户Token',
						params: {
							username: "username",
							password: "password"
						}
					},
					header: {
						'Content-Type': 'application/json'
					},
					success: (res) => {
						// 返回值
					}
				})
			},
			getUser() {
				index.getUser().then(res => {
					
				}).catch(error => {

				})
			},
			change_type(type) {
				that.login_type = type
			},
			clear_phone() {
				that.phone = ''
			},
			vis_password() {
				if (that.vis) {
					that.vis = false
				} else {
					that.vis = true
				}
			},
			check() {
				if (that.login_type == 1) {
					if (that.phone && that.password) {
						that.is = true
					} else {
						that.is = false
					}
				} else {
					if (that.phone && that.code) {
						that.is = true
					} else {
						that.is = false
					}
				}

			},
			to_register() {
				uni.navigateTo({
					url: '/pages/register/register'
				})
			},
			reback() {
				uni.navigateBack({
					fail() {
						uni.redirectTo({
							url: '/pages/start/start'
						})
					}
				})
			},
			send_code() {
				if (!that.phone) {
					uni.showToast({
						title: '请填写手机号',
						icon: 'error'
					})
					return;
				}
				var timer = setInterval(function() {
					if (that.is_code == 1) {
						clearInterval(timer)
						that.is_code = 30
					} else {
						that.is_code--
					}
				}, 1000)
				index.sendCode({
					phone: that.phone
				}).catch(error => {

				});

			},
			login() {
				if (!that.phone) {
					uni.showToast({
						title: '请填写手机号',
						icon: 'error'
					})
					return;
				}
				let data = '';
				if (that.login_type == 1) {
					if (!that.password) {
						uni.showToast({
							title: '请填写密码',
							icon: 'error'
						})
						return;
					}
					data = {
						username: that.phone,
						password: that.password
					}
				} else {
					if (!that.code) {
						uni.showToast({
							title: '请填写验证码',
							icon: 'error'
						})
						return;
					}
					data = {
						username: that.phone,
						code: that.code
					}
				}
				
				index.login(data).then(res => {
					uni.setStorageSync('token',res.data.token)
					
					//#ifdef MP-WEIXIN
					uni.request({
						url:app.globalData.url+'/mobile/bindWxMp',
						header:{"Authorization":res.data.token},
						data:{
							unionId: uni.getStorageSync('unionId')
						},
						success(ros) {
							if(ros.data.code == 500){
								uni.setStorageSync('token','')
								uni.showToast({
									title:'失败，该账号已绑定其他微信登录',
									icon:'none'
								})
								return;
							}
							if(ros.data.code == 200){
								if (res.data.newUser) {
									uni.navigateTo({
										url: '/pages/register/gender'
									})
								} else {
									let url = uni.getStorageSync('url')
									if(url){
										uni.navigateTo({
											url: url,
											fail() {
												uni.reLaunch({
													url: url
												})
											}
										})
									}else{
										uni.reLaunch({
											url: '/pages/index/index'
										})
									}
								}
							}
						}
					})
					//#endif
					
					//#ifndef MP-WEIXIN
					if (res.data.newUser) {
						uni.navigateTo({
							url: '/pages/register/gender'
						})
					} else {
						let url = uni.getStorageSync('url')
						if(url){
							uni.navigateTo({
								url: url,
								fail() {
									uni.reLaunch({
										url: url
									})
								}
							})
						}else{
							uni.reLaunch({
								url: '/pages/index/index'
							})
						}
					}
					//#endif
				}).catch(error => {

				})
			}
		},
		onLoad() {
			that = this
			app.getUnioinId().then({})
		}
	}
</script>

<style lang="scss"> 
	page {
		background: #F5F5F5 url($surl +'bg.png') no-repeat; 
		background-size: 750rpx auto;
	}

	.close {
		margin: 20rpx 0 0 24rpx;
		width: 48rpx;
		height: 48rpx;
	}

	.hello {
		margin: 44rpx 0 12rpx 56rpx;
		font-size: 72rpx;
		font-family: HarmonyOS_Sans_SC_Black;
		color: #1A2233;
	}

	.welcome {
		margin-left: 56rpx;
		font-size: 40rpx;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: 500;
		color: #1A2233;
	}

	.form {
		width: 688rpx;
		background: #FFFFFF;
		margin: 0 auto;
		border-radius: 32rpx 32rpx 0rpx 0rpx;
		margin-top: 54rpx;
	}

	.tab {
		height: 92rpx;
		border-radius: 32rpx 32rpx 0rpx 0rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		background: #F5F5F5 url($static_url +'babg.png') no-repeat;
		background-size: 376rpx 92rpx;
	}

	.active {
		background: #F5F5F5 url($static_url +'babgs.png') no-repeat right center;
		background-size: 376rpx 92rpx;
	}

	.tab .sub {
		width: 50%;
		text-align: center;
		font-size: 32rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #8A8F99;
		position: relative;
		height: 92rpx;
		line-height: 92rpx;
	}

	.tab .sub:nth-child(1) {
		font-size: 32rpx;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: 500;
		color: #00AB64;
	}

	.active .sub:nth-child(1) {
		font-size: 32rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #8A8F99;
	}

	.active .sub:nth-child(2) {
		font-size: 32rpx;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: 500;
		color: #00AB64;
	}

	.tab .sub .line {
		position: absolute;
		width: 28rpx;
		height: 6rpx;
		background: #00AB64;
		border-radius: 3rpx;
		bottom: 10rpx;
		left: 50%;
		margin-left: -14rpx;
	}

	.phone {
		margin-top: 80rpx;
		margin-left: 60rpx;
		position: relative;
	}

	.phone image {
		position: absolute;
		width: 48rpx;
		height: 48rpx;
		top: 24rpx;
		right: 84rpx;
		z-index: 9999;
	}

	.password {
		margin-top: 40rpx;
		margin-left: 60rpx;
		position: relative;
	}

	.password image {
		position: absolute;
		width: 48rpx;
		height: 48rpx;
		top: 24rpx;
		right: 84rpx;
		z-index: 999;
	}

	.password text {
		position: absolute;
		right: 84rpx;
		height: 96rpx;
		display: flex;
		align-items: center;
		top: 0;
		font-size: 28rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #00AB64;
		z-index: 999;
	}

	.btn {
		width: 568rpx;
		height: 96rpx;
		background: #F3F5F5;
		border-radius: 16rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-left: 60rpx;
		margin-top: 40rpx;
		font-size: 32rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #A8A8C2;
	}

	.full {
		background: #00AB64;
		color: #FFFFFF;
	}

	input {
		width: 544rpx;
		height: 96rpx;
		background: #F3F5F5;
		border-radius: 24rpx;
		padding-left: 24rpx;
		font-size: 32rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #333336;
	}

	.placeholderStyle {
		color: #999999;
	}

	.sign {
		font-size: 28rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #8A8F99;
		text-align: center;
		margin-top: 60rpx;
	}

	.sign text {
		font-size: 28rpx;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: 500;
		color: #00AB64;
	}

	.log_text {
		font-size: 24rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #8A8F99;
		margin-top: 184rpx;
		text-align: center;
	}

	.wx {
		margin-top: 60rpx;
		display: flex;
		justify-content: center;
	}

	.wx image {
		width: 80rpx;
		height: 80rpx;
	}

	.agree {
		font-size: 24rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #909399;
		text-align: center;
		margin-top: 60rpx;
		padding-bottom: 108rpx;
	}

	.agree text {
		font-size: 24rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #5366FA;
	}
</style>