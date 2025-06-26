<template>
	<view>
		<view class="form">
			<view class="row" @click="clear()">
				<view>清理缓存</view>
				<view class="right">
					<image :src="sImgUrl+'index/fanhui_next@2x.png'"></image>
				</view>
			</view>
			<view class="row" @click="set()">
				<view>推送设置</view>
				<view class="right">
					<image :src="sImgUrl+'index/fanhui_next@2x.png'"></image>
				</view>
			</view>
			<!-- #ifndef MP-WEIXIN -->
			<view class="row" @click="logout()">
				<view>退出登录</view>
				<view class="right">
					<image :src="sImgUrl+'index/fanhui_next@2x.png'"></image>
				</view>
			</view>
			 <!-- #endif -->
			<view class="row" @click="upgrade()">
				<view>升级检查</view>
				<view class="right">
					<image :src="sImgUrl+'index/fanhui_next@2x.png'"></image>
				</view>
			</view>
			<view class="row" @click="view('当前版本:'+info.version_code)">
				<view>关于</view>
				<view class="right">
					<image :src="sImgUrl+'index/fanhui_next@2x.png'"></image>
				</view>
			</view>
		</view>
		<!-- 对话框 -->
		<uni-popup ref="popup" type="dialog">
			<view class="content">{{content}}</view>
		</uni-popup>
		<!-- 提示窗示例 -->
		<uni-popup ref="alertDialog" type="dialog">
			<uni-popup-dialog cancelText="关闭" confirmText="开启" title="是否开启推送设置"
				@confirm="dialogConfirm(1)" @close="dialogConfirm(0)"></uni-popup-dialog>
		</uni-popup>
		<!-- 提示窗示例 -->
		<uni-popup ref="logout" type="dialog">
			<uni-popup-dialog cancelText="否" confirmText="是" title="是否退出登录"
				@confirm="login_out()"></uni-popup-dialog>
		</uni-popup>
	</view>
</template>


<script>
	const app = getApp()
	import index from '../../api/index.js'
	var that
	export default {
		data() {
			return {
				info: '',
				imgUrl: uni.getStorageSync('imgUrl'),
				sImgUrl: app.globalData.sImgUrl,
				content: ''
			}
		},
		methods: {
			view(content) {
				that.content = content
				this.$refs.popup.open('center')
			},
			getInfo() {
				index.setting().then(res => {
					that.info = res.data
				}).catch(error => {

				})
			},
			dialogConfirm(e){
				index.setting({type:1,tag:e}).then(res => {
					uni.showToast({
						title:res.msg
					})
				}).catch(error => {
				
				})
			},
			set(){
				this.$refs.alertDialog.open('center')
			},
			logout(){
				this.$refs.logout.open('center')
			},
			login_out(){
				uni.clearStorageSync()
				uni.navigateTo({
					url:'/pages/start/start'
				})
			},
			clear(){
				let token = uni.getStorageSync('token')
				uni.clearStorageSync()
				uni.setStorageSync('token',token)
				uni.showToast({
					title:'清理成功'
				})
			},
			upgrade(){
				// #ifdef  MP-WEIXIN
				const updateManager = uni.getUpdateManager();
				updateManager.onCheckForUpdate(function (res) {
				  // 请求完新版本信息的回调
				  console.log(res.hasUpdate);
				  if(!res.hasUpdate){
					  uni.showToast({
					  	title:'当前已经是最新版本',
						icon:'none'
					  })
				  }
				});

				updateManager.onUpdateReady(function() {
					uni.showModal({
						title: '更新提示',
						content: '新版本已经准备好，是否重启应用？',
						success(res) {
							if (res.confirm) {
								// 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
								updateManager.applyUpdate();
							}
						}
				
					});
				});
				// #endif
			}
		},
		onReady() {

		},
		onLoad() {
			that = this
		},
		onShow() {
			var pages = getCurrentPages()
			var page = pages[pages.length - 1];
			uni.setStorage({
				key: 'url',
				data: '/' + page.route,
				success: function() {
					getApp().isLogin().then(function() {
						that.getInfo()
					})
				}
			})
		}
	}
</script>

<style>
	@import url('../../static/css/set.css');
</style>