<template>
	<view>
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
			测评内容<text>{{title}}</text>
		</view>
		<view class="dsc">主要指标：杆数</view>
		<view class="rule">测试规则: 记录比赛中的结果及主观评价</view>
		<view class="line"></view>
		<view class="table">
			<view class="th tr">
				<view class="td">测评项目</view>
				<view class="td">值</view>
				<view class="td">评分</view>
				<view class="td">失误点</view>
			</view>
			<view class="tr">
				<view class="td"><view class="text">总杆数</view></view>
				<view class="td"><text>72</text>杆</view>
				<view class="td">
					<image :src="sImgUrl+'starts.png'"></image>
					<image :src="sImgUrl+'starts.png'"></image>
					<image :src="sImgUrl+'starts.png'"></image>
					<image :src="sImgUrl+'starts.png'"></image>
					<image :src="sImgUrl+'starts.png'"></image>
				</view>
				<view class="td"></view>
			</view>
			<view class="tr">
				<view class="td"><view class="text">推杆</view></view>
				<view class="td">100-50码<image :src="sImgUrl+'icon_drop-down.png'"></image></view>
				<view class="td">
					<image :src="sImgUrl+'starts.png'"></image>
					<image :src="sImgUrl+'starts.png'"></image>
					<image :src="sImgUrl+'starts.png'"></image>
					<image :src="sImgUrl+'starts.png'"></image>
					<image :src="sImgUrl+'starts.png'"></image>
				</view>
				<view class="td">短推<image :src="sImgUrl+'icon_drop-down.png'"></image></view>
			</view>
			<view class="tr">
				<view class="td"><view class="text">开球: 上球道数</view></view>
				<view class="td"><text>72</text>杆</view>
				<view class="td">
					<image :src="sImgUrl+'starts.png'"></image>
					<image :src="sImgUrl+'starts.png'"></image>
					<image :src="sImgUrl+'starts.png'"></image>
					<image :src="sImgUrl+'starts.png'"></image>
					<image :src="sImgUrl+'starts.png'"></image>
				</view>
				<view class="td"></view>
			</view>
		</view>
		<view class="bottom">
			<navigator class="btn left" hover-class="none" url="/pages/assess/detail">保存</navigator>
			<view class="btn">完成测试</view>
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
				title:'',
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
		onLoad(e) {
			that = this
			that.title = e.title
		}
	}
</script>

<style>
	@import url('../../static/css/assess_save.css');
</style>