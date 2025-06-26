<template>
	<view>
		<view class="top">
			<navigator class="img" hover-class="none" open-type="navigateBack">
				<image :src="sImgUrl+'icon_return.png'"></image>
			</navigator>
			<text>提问</text>
		</view>
		<view class="coach">
			选择教练
			<view class="coach_info">
				<image :src="sImgUrl+'train/coach_head.png'" mode=""></image>
				<text>范晓楠</text> 
				<view class="change">
					<text>修改</text>
				</view>
			</view>
		</view>
		<view class="appear">
			问题现象
			<text class="state"> (请简要选择问题现象)</text>
			<navigator class="row" hover-class="none" url="/pages/train/question_appear">
			<view class="select">
				<image :src="sImgUrl+'train/icon_Add2.png'" mode=""></image>		
				<view class="sg">
					选择
				</view>	
			</view>
			</navigator>
		</view>
		<view class="content"> 
			问题描述
			<input type="text">	
		</view>
		<view class="video">
			添加视频或图片
			<view class="active">
				<image :src="sImgUrl+'ct.png'" mode=""></image>
				<image :src="sImgUrl+'ct.png'" mode=""></image>
				<image :src="sImgUrl+'ct.png'" mode=""></image>
			</view>
		</view>
	</view>

</template>

<script>
	const app = getApp()
	export default {
		data() {
			return {
				sImgUrl:app.globalData.sImgUrl
			}
		},
		methods: {

		}
	}
</script>

<style>
	.top {
		height: 88rpx;
		position: fixed;
		top: 0;
		left: 0;
		width: 702rpx;
		display: flex;
		padding: 0 24rpx;
		padding-top: var(--status-bar-height);
		align-items: center;
		font-size: 32rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #333336;
		background-color: #fff;
		z-index: 999;
		text-align: center;
	}

	.top .img {
		height: 48rpx;
	}

	.top image {
		width: 48rpx;
		height: 48rpx;
	}

	.top text {
		padding-left: 280rpx;
	}

	.coach {
		font-weight: 400;
		margin-left: 50rpx;
	}
		
	.coach .coach_info{
		height: 200rpx;
		display: flex;
	}
	
	.coach .coach_info image{
		width: 100rpx;
		height: 100rpx;
		border-radius: 50%;
		margin-top: 50rpx;
	}
	
	.coach .coach_info text{
		width: 100rpx;
		height: 100rpx;
		margin-top: 75rpx;
		margin-left: 30rpx;
	}
	
	.coach .coach_info .change{
		border: 1px solid #008965;
		border-radius: 20rpx;
		width: 125rpx;
		height: 50rpx;
		margin-top: 75rpx;
		margin-left: 30rpx;
		color: #008965;
	}
	
	.coach .coach_info .change text{
		color: #008965;
	}

	.appear {
		margin: 10rpx 50rpx 0;
		height: 250rpx;
		margin-left: 50rpx;
	}
	
	.appear .state{
		margin-left: 10rpx;
		color: #C4C7CC;
		font-size: 20rpx;
	}
	
	.appear .select{
		display: flex;
		margin-top: 40rpx;
		width: 100%;
		height: 80rpx;
		border: 2px dashed #008965;
		border-radius: 60rpx;
		/* border: 2px dashed transparent;    
		background: linear-gradient(white,white) padding-box, repeating-linear-gradient(-25deg,#008965 0, #008965 .35em,white 0,white .80em); */
	}
	
	.appear .select image{
		height: 66rpx;
		width: 66rpx;
		margin-left: 250rpx;
		margin-top: 8rpx;
	}
	
	.appear .select .sg{
		margin-top: 16rpx;
		color: #008965;
	}
	
	.content {
		margin-left: 50rpx;
		margin-right: 50rpx;
	}
	
	.content input{
		margin-top: 25rpx;
		width: 100%;
		height: 300rpx;
		background-color: #F8F9FA;
		border-radius: 20rpx;
	}

	.video {
		margin-top: 25rpx;
		margin-left: 50rpx;
		margin-right: 50rpx;
		width: 100%;
	}
	
	.video .active{
		display: flex;
		flex-wrap: wrap;
	}
	
	.video .active image{
		padding: 10rpx 10rpx 10rpx;
		width: 200rpx;
		height: 200rpx;
	}
</style>