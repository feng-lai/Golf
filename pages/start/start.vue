<template>
	<view>
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		<view class="img">
			<image :src="sImgUrl+'ct.png'"></image>
		</view>
		<view class="text">
			<text>你的高尔夫专属教练</text>
		</view>
		<navigator class="btn" url="../index/index" open-type="switchTab" hover-class="none">
			<text>开启降杆之旅</text>
		</navigator>
	</view>
</template>

<script>
	var that
	import index from '@/api/index.js'
	const app = getApp()
	export default {
		data() {
			return {
				sImgUrl:app.globalData.sImgUrl
			}
		},
		methods: {
			
		},
		onShow() {
			var pages = getCurrentPages()
			var page = pages[pages.length - 1];
			uni.setStorage({
				key: 'url',
				data: '/' + page.route,
				success: function() { 
					app.isLogin().then(function() {
						if(!uni.getStorageSync('token')){
							uni.navigateTo({
								url:'/pages/login/login'
							})
							return
						}
						if(uni.getStorageSync('view_start')){
							uni.switchTab({
								url:'/pages/index/index'
							})
						}else{
							uni.setStorageSync('view_start',1)
						}
					})
				}
			})
		},
		onLoad() {
			that = this
		}
	}
</script>

<style>
.page {
  background-color: #ffffff;
  flex: 1;
  height: 100vh;
  overflow: hidden;
}
.img{
	padding-top: 140rpx;
	display: flex;
	justify-content: center;
}
.img image{
	width: 520rpx;
	height: 496rpx;
}
.text{
	text-align: center;
	margin-top: 40rpx;
}
.text text{
	font-size: 40rpx;
	font-family: 'AlimamaShuHeiTi';
	color: #1A2233;
}
.btn{
	position: fixed;
	left: 0;
	bottom: 128rpx;
	display: flex;
	justify-content: center;
	width: 100%;
}
.btn text{
	display: inline-block;
	width: 520rpx;
	height: 96rpx;
	background: #00AB64;
	border-radius: 16rpx;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 32rpx;
	font-family: PingFangSC-Regular, PingFang SC;
	font-weight: 400;
	color: #FFFFFF;
}
</style>
