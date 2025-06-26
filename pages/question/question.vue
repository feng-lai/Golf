<template>
	<view>
		<view class="content">
			<view class="left">
				<view class="row">擅长领域</view>
				<view class="row active">全部</view>
				<view class="row">攻果岭</view>
			</view>
			<view class="line"></view>
			<view class="right">
				<view class="one">第一步：选择高手</view>
				<view>
					<view class="row">
						<view class="user">
							<image :src="sImgUrl+'AI.png'"></image>
							<view>
								<view class="img">AI教练<text>人工智能教你打球</text></view>
								<view class="tag">擅长: <text>开球</text><text>救球</text></view>
							</view>
						</view>
						<view class="auth">
							<view>已认证</view>
							<text class="score">消耗积分: 10个</text>
						</view>
						<image class="more" :src="sImgUrl+'index/fanhui_next@2x.png'"></image>
					</view>
					<view class="lines"></view>
					<view class="row">
						<view class="user">
							<image :src="sImgUrl+'AI.png'"></image>
							<view>
								<view class="img">AI教练<image :src="sImgUrl+'br.png'"></image></view>
								<view class="tag">擅长: <text>开球</text><text>救球</text></view>
							</view>
						</view>
						<view class="auth">
							<view>已认证</view>
							<text class="score">消耗积分: 10个</text>
						</view>
						<image class="more" :src="sImgUrl+'index/fanhui_next@2x.png'"></image>
					</view>
					<view class="lines"></view>
					<view class="row">
						<view class="user">
							<image :src="sImgUrl+'AI.png'"></image>
							<view>
								<view class="img">AI教练<image :src="sImgUrl+'br.png'"></image></view>
								<view class="tag">擅长: <text>开球</text><text>救球</text></view>
							</view>
						</view>
						<view class="auth">
							<view>已认证</view>
							<text class="score">消耗积分: 10个</text>
						</view>
						<image class="more" :src="sImgUrl+'index/fanhui_next@2x.png'"></image>
					</view>
					<view class="lines"></view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	const app = getApp()
	var that
	export default {
		data() {
			return {
				nav: '',
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
	@import url('../../static/css/question.css');
</style>