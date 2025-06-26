<script>
	//1. 导入统一身份信息管理模块
	import uniIdPagesInit from '@/uni_modules/uni-id-pages/init.js';
	//2. 导入uniIm的Utils工具类
	import uniImUtils from '@/uni_modules/uni-im/common/utils.js';
	import index from '@/api/index.js';
	export default {
		onLaunch: async function() {
			this.getImgUrl()
			//#ifdef MP-WEIXIN
			this.getUnioinId()
			//#endif
			uniIdPagesInit();
			//4. 初始化uniIm
			uniImUtils.init();
			
		},
		onShow: function() {
			console.log('App Show')
			
		},
		onHide: function() {
			console.log('App Hide')
		},
		globalData:{
			url: 'https://api.jgtygolf.com',
			token: '',
			phone:'',
			imgUrl:'',
			sImgUrl:'http://static.jgtygolf.com/pics/'
		},
		methods:{
			//检查是否登录
			checkLogin: function() {
				if (!this.globalData.token) {
					uni.showModal({
						content: '请先登录',
						success(res) {
							if (res.confirm) {
								uni.navigateTo({
									url: '/pages/login/login'
								});
							} else {
								uni.switchTab({
									url: '/pages/index/index'
								});
							}
						}
			
					});
					return;
				}
			},
			//检查是否登录
			checkLogin2: function() {
				if (!this.globalData.token) {
					uni.showModal({
						content: '请先登录',
						success(res) {
							if (res.confirm) {
								uni.navigateTo({
									url: '/pages/login/login'
								});
							}
						}
			
					});
					return;
				}
			},
			getUnioinId(){
				return new Promise(function(resolve, reject) {
					uni.login({
						provider: 'weixin',
						success: function(loginRes) {
							index.getUnionIdWithMiniProgram({
								code: loginRes.code
							}).then(res => {
								uni.setStorageSync('unionId',res.data)
								resolve();
							}).catch(error=>{
								
							})
						}
					})
				})
			},
			/**
			isLogin() {
				var that = this
				return new Promise(function(resolve, reject) {
					that.globalData.token = wx.getStorageSync('token')
					resolve();
				})
			},
			**/
			isLogin() {
				var that = this
				return new Promise(function(resolve, reject) {
					var token = wx.getStorageSync('token')
					if(token){
						that.globalData.token = token
						resolve();
					}else{
						//#ifdef MP-WEIXIN
						this.getUnioinId.then({
							uni.request({
								header:{"Authorization":uni.getStorageSync('token')},
								data:{
									unionId: uni.getStorageSync('unionId')
								},
								url:that.globalData.url+'/mobile/loginWithMiniProgram',
								success(ros) {
									if(ros.data.code == 200){
										uni.setStorageSync('token',ros.data.data.token)
										if (ros.data.newUser) {
											uni.navigateTo({
												url: '/pages/register/gender'
											})
										}
									}else{
										uni.navigateTo({
											url: '/pages/login/login'
										})
									}
									resolve();
								}
							})
						})
						
						//#endif
					}
				})
			},
			getImgUrl(){
				var that = this
				index.getImgUrl().then(res=>{
					that.globalData.imgUrl = res.data[0].dictValue
					uni.setStorageSync('imgUrl',res.data[0].dictValue)
				}).catch(error=>{
					
				})
			},
			
		}
	}
</script>

<style>
	/*每个页面公共css */
	.status_bar {
		height: var(--status-bar-height);
		width: 100%;
	}
</style>
