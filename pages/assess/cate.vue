<template>
	<view>
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		<view class="part" :style="'height:'+nav+'px;' ">
			<navigator class="img" hover-class="none" open-type="navigateBack">
				<image :src="sImgUrl+'icon_return.png'"></image>
			</navigator>
			<text>实战测评</text>
		</view>
		<view class="title">
			测评内容<text>{{title}}</text>
		</view>
		<view class="dsc">主要指标：杆数</view>
		<view class="rule">测试规则: 记录比赛中的结果及主观评价</view>
		<navigator class="btn" hover-class="none" :url="'/pages/assess/save?title='+title">
			<text>开始测试</text>
		</navigator>
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
	@import url('../../static/css/assess_cate.css');
</style>