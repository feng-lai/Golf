<template>
	<view class="top">
		<navigator class="img" hover-class="none" open-type="navigateBack">
			<image :src="sImgUrl+'icon_return.png'"></image>
		</navigator>
		<text>选择问题现象标签</text>
	</view>
	<view class="selected">
		<view class="text">
			<view class="left">
				已选中描述标签
			</view>
			<view class="right">
				清除
			</view>
		</view>
		<view class="bg">
			<view class="bg_text" v-for="(text,index_bg) in selected" :key="index_bg">
				{{text}}
				<image :src="sImgUrl+'train/icon_x.png'" mode="" @click="deleteContent(index_bg)"></image>
			</view>
		</view>
	</view>
	<view class="options">
		<view class="option_noselect" :class="{'option_select':activeVar==index_option}"
			v-for="(option,index_option) in options" :key="index_option" @click="activeFun(option,index_option)">
			{{option}}
			<image :src="sImgUrl+'train/fanhui_next.png'" mode=""></image>
		</view>
	</view>
	<view>
		<!-- <button type="primary" @click="confirmShare">分享模版示例</button> -->
		<uni-popup ref="popupShare" type="share">
			<uni-popup-share title="选择" :option="option" @select="select"></uni-popup-share>
		</uni-popup>
	</view>
</template>

<script>
	const app = getApp()
	export default {
		data() {
			return {
				selected: [
					'膝盖弯曲错误问题',
					'左曲球打不远',
					'右曲球',
					'瞄球方向错误',
					'右曲球',
				],
				options: [
					'1号木',
					'3-7号球道木',
					'3-7号铁木干',
					'2-5号长铁杆',
					'6-P中铁杆',
					'推杆',
					'S杆(54°-64°)',
					'p杆(48°-52°)',
				],
				activeVar: 0,
				option:null,
				sImgUrl:app.globalData.sImgUrl
			}
		},
		methods: {
			// 点击x号删除当前元素
			deleteContent(index_bg) {
				this.selected.splice(index_bg, 1);
			},
			activeFun(option, index_option) {
				this.option = option;
				this.activeVar = index_option;
				this.$refs.popupShare.open();	
			},
			confirmShare() {
				this.$refs.popupShare.open()
			},
			select(e) {
				uni.showToast({
					title: `您选择了第${e.index+1}项：${e.item.text}`,
					icon: 'none'
				})
			}
		},

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
		padding-left: 180rpx;
	}

	.selected {
		margin: 200rpx 40rpx 20rpx;
	}

	.selected .text {
		display: flex;
	}

	.selected .text .left {
		width: 300rpx;
		font-weight: bold;
	}

	.selected .text .right {
		width: 100rpx;
		display: flex;
		padding-left: 300rpx;
		color: red;
	}

	.selected .bg {
		display: flex;
		flex-wrap: wrap;
		margin-top: 20rpx;
		width: 100%;
		background-color: #F3F5F5;
		border-radius: 30rpx;
	}

	.selected .bg .bg_text {
		border-radius: 20rpx;
		margin: 15rpx 20rpx 10rpx;
		padding: 15rpx 20rpx 10rpx;
		height: 40rpx;
		background-color: #FFFFFF;
		text-align: center;
		line-height: 30rpx;
		font-size: 26rpx;
	}

	.selected .bg .bg_text image {
		z-index: 999;
		width: 25rpx;
		height: 25rpx;
	}

	.options {
		display: flex;
		flex-wrap: wrap;
		width: 100%;
		margin: 20rpx 30rpx 40rpx;
	}

	.options .option_noselect {
		border: 1px solid #E8EAED;
		border-radius: 20rpx;
		width: 35%;
		padding: 15rpx 30rpx 24rpx;
		margin: 20rpx 10rpx 10rpx;
		font-size: 28rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		height: auto;
		line-height: auto;
		display: flex;
		flex-wrap: nowrap;
	}

	.options .option_select {
		color: #00AB64;
		background-color: #E6F5ED;
	}

	.options .option_noselect image {
		width: 35rpx;
		height: 35rpx;
		margin-left: auto;
		margin-top: 5rpx;
	}

	.options .option_select image {
		width: 35rpx;
		height: 35rpx;
		margin-left: auto;
		margin-top: 5rpx;
	}
</style>