<template>
	<view>
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		<view v-if="nav" :style="'height:'+nav+'px;' "></view>
		<view class="top">
			<navigator class="img" hover-class="none" open-type="navigateBack"><image :src="sImgUrl+'icon_return.png'"></image></navigator>
			<view>积分规则</view>
			<view class="img"><image :src="sImgUrl+'find/search.png'"></image></view>
		</view>
		<view class="content">
			<rich-text :nodes="content"></rich-text>
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
				content:'积分回馈是降杆APP答谢用户长期以来的支持与厚爱而特别推出的一项用户服务。用户在使用降杆App进行各项行为时可获得相应的积分奖励，可用于兑换积分商城中的丰富奖品，获得超值回报!',
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
	@import url('../../static/css/score_rule.css');
</style>