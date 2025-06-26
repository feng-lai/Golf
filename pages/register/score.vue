<template>
	<view>
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		<view v-if="nav" :style="'height:'+nav+'px;' "></view>
		<navigator class="next" hover-class="none" url="/pages/register/target" >
			<text>跳过</text>
		</navigator>
		<view class="chose">您的历史平均杆</view>
		<view class="content">
			<view :class="v.dictValue == hisAvg?['row','active']:['row']" v-for="(v,k) in info" @click="chose(v.dictValue)">{{v.dictLabel}}</view>
		</view>
		<view class="bottom">
			<navigator class="btn" hover-class="none" url="/pages/register/gender">上一步</navigator>
			<view class="n btn" @click="save()">下一步</view>
		</view>
	</view>
</template>

<script>
	import index from '@/api/index.js' 
	var _that
	export default { 
		data() {
			return {
				info:'',
				hisAvg:'',
			}
		},
		methods: {
			chose(id){ 
				_that.hisAvg = id
			},
			save(){
				uni.setStorage({
					key: 'hisAvg',
					data: _that.hisAvg,
					success() {
						uni.navigateTo({
							url:'/pages/register/target'
						})
					}
				});
			},
			getInfo(){
				index.getDictionary({name:'his_average'}).then(res => {
					_that.info = res.data
				}).catch(error=>{
				        
				});
			}
		},
		onLoad() {
			_that = this
			uni.getStorage({
				key:'hisAvg',
				success(res) {
					_that.hisAvg = res.data
				}
			})
			// #ifdef MP-WEIXIN
			_that.nav = uni.getMenuButtonBoundingClientRect().height
			// #endif
		},
		onShow() {
			var pages = getCurrentPages()
			var page = pages[pages.length - 1];
			var _that = this; //是否已登录
			uni.setStorage({
				key: 'url',
				data: '/' + page.route,
				success: function() { 
					getApp().isLogin().then(function() {
						getApp().checkLogin2()
						_that.getInfo()
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
	.content{
		margin-top: 80rpx;
		display: flex;
		justify-content: flex-start;
		flex-wrap: wrap;
		padding: 0 60rpx;
	}
	.content .row{
		width: 196rpx;
		height: 88rpx;
		background: #F0F2F5;
		border-radius: 16rpx;
		font-size: 32rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #585C66;
		margin-right: 20rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 20rpx;
	}
	.content .row:nth-child(3n){
		margin-right: 0;
	}
	.content .active{
		background: #00AB64;
		color: #FFFFFF;
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
	.bottom{
		position: fixed;
		left: 0;
		width: 100%;
		bottom: 108rpx;
		height: 80rpx;
		display: flex;
		justify-content: center;
	}
	.bottom .btn{
		width: 300rpx;
		height: 80rpx;
		background: #E8EFED;
		border-radius: 16rpx;
		margin-right: 40rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 32rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #00AB64;
	}
	.bottom .btn:hover{
		background: #00AB64;
		color: #FFFFFF;
	}
	.bottom .n{
		margin-right: 0;
	}
	
</style>