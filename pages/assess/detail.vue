<template>
	<image :src="sImgUrl+'bj_02.png'" class="bg"></image>
	<view class="content">
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		<view class="part" :style="'height:'+nav+'px;' ">
			<navigator class="img" hover-class="none" open-type="navigateBack">
				<image :src="sImgUrl+'icon_return.png'"></image>
			</navigator>
			<text>球员测评</text>
		</view>
		<view class="title">
			测评内容<text>比赛</text>
		</view>
		<view class="dsc">主要指标：杆数</view>
		<view class="dsc">测评球员：吴梦琦</view>
		<view class="rule">测试规则: 记录比赛中的结果及主观评价</view>
		<view class="detail">
			<view class="name">成绩结果</view>
			<view class="table">
				<view class="th tr">
					<view class="td">测评项目</view>
					<view class="td">值</view>
				</view>
				<view class="tr">
					<view class="td"><view class="text">开球: 上球道数</view></view>
					<view class="td">72</view>
				</view>
			</view>
		</view>
		<view class="detail detail2">
			<view class="name">详细结果</view>
			<view class="table">
				<view class="th tr">
					<view class="td">测评项目</view>
					<view class="td">值</view>
					<view class="td">评分</view>
					<view class="td">失误点</view>
				</view>
				<view class="tr">
					<view class="td"><view class="text">开球: 上球道数</view></view>
					<view class="td">72</view>
					<view class="td">
						<image :src="sImgUrl+'starts.png'"></image>
						<image :src="sImgUrl+'starts.png'"></image>
						<image :src="sImgUrl+'starts.png'"></image>
						<image :src="sImgUrl+'start.png'"></image>
						<image :src="sImgUrl+'start.png'"></image>
					</view>
					<view class="td">短推</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	var that
	const app = getApp()
	export default {
		data() {
			return {
				nav:'',
				sImgUrl:app.globalData.sImgUrl
			}
		},
		methods: {
			
		},
		onShow() {
			// #ifdef MP-WEIXIN
			that.nav = uni.getMenuButtonBoundingClientRect().height
			// #endif
		},
		onLoad() {
			that = this
		}
	}
</script>

<style>
	@import url('../../static/css/assess_detail.css');
</style>