<template>
	<view>
		<view class="status_bar" :style="'height:'+statusBarHeight+'px;'">
			<!-- 这里是状态栏 -->
		</view>
		<view v-if="nav" :style="'height:'+nav+'px;background-color:#fff'"></view>
		<view class="part">
			<navigator class="img" hover-class="none" open-type="navigateBack">
				<image :src="sImgUrl+'icon_return.png'"></image>
			</navigator>
			<text>兑换积分</text>
			<navigator class="rule_text" hover-class="none" url="/pages/score/recharge_detail">兑换记录</navigator>
		</view>
		<view class="content">
			<view class="title">需要兑换的金额</view>
			<view class="price">
				<view>￥</view>
				<view><input placeholder="请输入金额" placeholder-class="placeholderStyle" /></view>
			</view>
			<view class="title">选择要兑换积分的金额</view>
			<view class="option">
				<view :class="price==6?['item','active']:['item']" @click="chose_price(6)">
					<view class="text">6<text>元</text></view>
				</view>
				<view :class="price==128?['item','active']:['item']" @click="chose_price(128)">
					<view class="text">128<text>元</text></view>
				</view>
				<view :class="price==648?['item','active']:['item']" @click="chose_price(648)">
					<view class="text">648<text>元</text></view>
				</view>
			</view>
		</view>
		<view class="pay">
			<view class="title">充值方式</view>
			<view class="type">
				<view class="left">
					<image :src="sImgUrl+'icon_Alipay@2x.png'"></image>
					<view>支付宝充值</view>
				</view>
				<image :src="sImgUrl+'index/fanhui_next@2x.png'"></image>
			</view>
			<view class="type">
				<view class="left">
					<image :src="sImgUrl+'icon_WeChat@2x.png'"></image>
					<view>微信充值</view>
				</view>
				<image :src="sImgUrl+'index/fanhui_next@2x.png'"></image>
			</view>
		</view>
		<view class="rule">
			<view class="title">规则</view>
			<view class="detail">
				<view>1. 金额与积分的兑换比例为1: 100</view>
				<view>2. 积分可用于APP内服务消费及兑换</view>
				<view>3. 最终解释权归降杆所有;</view>
			</view>
		</view>
		<view class="btn">
			<text>确认充值</text>
		</view>
	</view>
</template>

<script>
	var that
	const app = getApp()
	export default {
		data() {
			return {
				nav: '',
				price: 6,
				sImgUrl:app.globalData.sImgUrl,
				statusBarHeight:''
			}
		},
		methods: {
			chose_price(price) {
				that.price = price
			}
		},
		onLoad() {
			that = this
		},
		onShow() {
			// #ifdef MP-WEIXIN
			that.nav = uni.getMenuButtonBoundingClientRect().height
			// #endif
		},
		mounted(){
			// #ifdef MP-WEIXIN
				that.statusBarHeight = wx.getSystemInfoSync().statusBarHeight
			// #endif
		},
	}
</script>

<style>
	@import url('../../static/css/score_recharge.css');
</style>