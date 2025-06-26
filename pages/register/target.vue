<template>
	<view>
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		<view v-if="nav" :style="'height:'+nav+'px;' "></view>
		<navigator class="next" hover-class="none" url="/pages/register/skill">
			<text>跳过</text>
		</navigator>
		<view class="chose">您的目标成绩</view>
		<view class="content">
			<view :class="v.dictValue == target_grades?['row','active']:['row']" v-for="(v,k) in info" @click="chose(v.dictValue)">
				<view class="title">{{v.dictLabel}}</view>
				<view class="line"></view>
				<view class="dsc">{{v.remark}}</view>
			</view>
		</view>
		<view class="bottom">
			<navigator class="btn" hover-class="none" url="/pages/register/score">上一步</navigator>
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
				target_grades:''
			}
		},
		methods: {
			chose(id){
				_that.target_grades = id
			},
			save(){
				uni.setStorage({
					key: 'target_grades',
					data: _that.target_grades,
					success() {
						uni.navigateTo({
							url:'/pages/register/skill'
						})
					}
				});
			},
			getInfo(){
				index.getDictionary({name:'target_grades'}).then(res=>{
					_that.info = res.data
				}).catch(error=>{
					
				})
			}
		},
		onLoad() {
			_that = this
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
		padding: 0 60rpx;
	}
	.content .row{
		height: 108rpx;
		background: #F0F2F5;
		border-radius: 16rpx;
		display: flex;
		align-items: center;
		margin-bottom: 20rpx;
		color: #1A2233;
	}
	.content .active{
		background: #00AB64;
		color: #ffffff;
	}
	.content .row .title{
		width: 208rpx;
		text-align: center;
		font-size: 32rpx;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: 500;
	}
	.content .row .line{
		width: 2rpx;
		height: 60rpx;
		background: #E1E3E6;
		border-radius: 16rpx;
		margin-right: 24rpx;
	}
	.content .row .dsc{
		width: 348rpx;
		font-size: 24rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #585C66;
	}
	.content .active .dsc{
		color: #ffffff;
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