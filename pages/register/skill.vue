<template>
	<view>
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		<view v-if="nav" :style="'height:'+nav+'px;' "></view>
		<view class="next" @click="save()">
			<text>跳过</text>
		</view>
		<view class="chose">您想重点学习哪方面的技术</view>
		<view class="content">
			<view :class="v.dictValue == learn_focus?['row','active']:['row']" v-for="(v,k) in info" @click="chose(v.dictValue)">{{v.dictLabel}}</view>
		</view>
		<view class="btn" @click="save()">
			<text>完成</text>
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
				learn_focus:'',
				sex:'',
				hisAvg:'',
				target_grades:''
			}
		},
		methods: {
			chose(id){
				_that.learn_focus = id
			},
			save(){
				index.updateInstructorInfo({sex:_that.sex,hisAvg:_that.hisAvg,targetGrades:_that.target_grades,learnFocus:_that.learn_focus}).then(res=>{
					uni.reLaunch({
						url:'/pages/index/index'
					})
				}).catch(error=>{
					
				}) 
			}, 
			getInfo(){
				index.getDictionary({name:'learn_focus'}).then(res=>{
					_that.info = res.data
				}).catch(error=>{
				        
				})
			}
		},
		onLoad() {
			_that = this
			_that.sex = uni.getStorageSync('sex')
			_that.hisAvg = uni.getStorageSync('hisAvg')
			_that.target_grades = uni.getStorageSync('target_grades')
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