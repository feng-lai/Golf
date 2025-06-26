<template>
	<view>
		<view class="entry">
			<view>
				<view class="date">2023年3月</view>
				<view class="info">
					<view class="row">
						<view>
							<view>积分兑换</view>
							<view class="time">2023-6-25</view>
						</view>
						<view class="score">128元</view>
					</view>
					<view class="row">
						<view>
							<view>积分兑换</view>
							<view class="time">2023-6-25</view>
						</view>
						<view class="score">128元</view>
					</view>
					<view class="row">
						<view>
							<view>积分兑换</view>
							<view class="time">2023-6-25</view>
						</view>
						<view class="score">128元</view>
					</view>
					<view class="row">
						<view>
							<view>积分兑换</view>
							<view class="time">2023-6-25</view>
						</view>
						<view class="score">128元</view>
					</view>
				</view>
			</view>
			<view>
				<view class="date">2023年3月</view>
				<view class="info">
					<view class="row">
						<view>
							<view>积分兑换</view>
							<view class="time">2023-6-25</view>
						</view>
						<view class="score">128元</view>
					</view>
					<view class="row">
						<view>
							<view>积分兑换</view>
							<view class="time">2023-6-25</view>
						</view>
						<view class="score">128元</view>
					</view>
					<view class="row">
						<view>
							<view>积分兑换</view>
							<view class="time">2023-6-25</view>
						</view>
						<view class="score">128元</view>
					</view>
					<view class="row">
						<view>
							<view>积分兑换</view>
							<view class="time">2023-6-25</view>
						</view>
						<view class="score">128元</view>
					</view>
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
		onLoad() {
			that = this
		},
		onShow() {
			// #ifdef MP-WEIXIN
			that.nav = uni.getMenuButtonBoundingClientRect().height
			// #endif
		}
	}
</script>

<style>
@import url('../../static/css/score_detail.css');
</style>