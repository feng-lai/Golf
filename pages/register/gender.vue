<template>
	<view>
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		<view v-if="nav" :style="'height:'+nav+'px;' "></view>
		<view class="next" @click="save()">
			<text>跳过</text>
		</view>
		<view class="chose">选择您的性别</view>
		<view class="pic">
			<image :src="sImgUrl+'man.png'" v-if="sex == 0"></image>
			<image :src="sImgUrl+'woman.png'" v-else></image>
			<view class="right">
				<view class="man">
					<text :class="sex == 0?'active':''" @click="chose(0)">男士</text>
				</view>
				<view>
					<text :class="sex == 1?'active':''" @click="chose(1)">女士</text>
				</view>
			</view>
		</view>
		<view class="btn">
			<text @click="save()">下一步</text> 
		</view>
	</view>
</template>

<script>
	const app = getApp()
	var that
	export default {
		data() {
			return {
				sex:0,
				nav:'',
				sImgUrl:app.globalData.sImgUrl
			}
		},
		methods: {
			chose(type){
				that.sex = type
			},
			save(){
				uni.setStorage({
					key:'sex',
					data:that.sex,
					success() {
						uni.navigateTo({
							url:'/pages/register/score'
						})
					}
				})
			}
		},
		onLoad(e) {
			that = this
			uni.getStorage({
				key:'sex',
				success(res) {
					that.sex = res.data
				}
			})
			// #ifdef MP-WEIXIN
			that.nav = uni.getMenuButtonBoundingClientRect().height
			// #endif
		},
		onShow() {
			
			var pages = getCurrentPages()
			var page = pages[pages.length - 1];
			var that = this; //是否已登录
			uni.setStorage({
				key: 'url',
				data: '/' + page.route,
				success: function() { 
					getApp().isLogin().then(function() {
						getApp().checkLogin2()
						
					})
				}
			})
		}
	}
</script>

<style>
	.next{
		margin-right: 40rpx;
		padding-top: 20rpx;
		display: flex;
		justify-content: flex-end;
	}
	.next text{
		font-size: 32rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #585C66;
	}
	.chose{
		margin-top: 56rpx;
		text-align: center;
		font-size: 48rpx;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: 500;
		color: #1A2233;
	}
	.pic{
		display: flex;
	}
	image{
		width: 520rpx;
		height: 968rpx;
	}
	.man{
		margin: 208rpx 0 80rpx 0;
	}
	.right text{
		display: inline-block;
		text-align: center;
		line-height: 152rpx;
		width: 152rpx;
		height: 152rpx;
		background: #F0F2F5;
		border-radius: 24rpx;
		font-size: 36rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #585C66;
	}
	.right .active{
		color: #FFFFFF;
		background: #00AB64;
	}
	.btn{
		padding: 156rpx 0 108rpx 0;
		display: flex;
		justify-content: center;
	}
	.btn text{
		width: 640rpx;
		height: 80rpx;
		background: #00AB64;
		border-radius: 16rpx;
		font-size: 32rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #FFFFFF;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>