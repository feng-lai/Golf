<template>
	<view>
		<view class="coach">
			<image :src="sImgUrl+'AI.png'"></image>
			<text>唐教练</text>
		</view>
		<view class="course_detail">
			<view class="row">
				<view class="title">
					<view class="left">
						<image :src="sImgUrl+'ask.png'"></image>问题现象
					</view>
					<text>已解答</text>
				</view>
				<view class="content">
					<view>一号木：打不远</view>
					<view class="text">
						<view class="line"></view>
						<text>提问描述</text>
					</view>
					<view class="dsc">手臂弯曲问题影响击球发力，需要特别的训练总是打不远</view>
					<video src="" :poster="sImgUrl+'ask.png'"></video>
					<view class="img">
						<image :src="sImgUrl+'bj.png'"></image>
						<image :src="sImgUrl+'bj.png'"></image>
					</view>
				</view>
			</view>
			<view class="row">
				<view class="title">
					<view class="left">
						<image :src="sImgUrl+'answer.png'"></image>教练解答
					</view>
					<text class="edit">编辑</text>
				</view>
				<view class="content">
					<view class="dsc">手臂弯曲问题影响击球发力，需要特别的训练总是打不远</view>
					<video src="" :poster="sImgUrl+'ask.png'"></video>
					<view class="img">
						<image :src="sImgUrl+'bj.png'"></image>
						<image :src="sImgUrl+'bj.png'"></image>
					</view>
				</view>
			</view>
			<view class="row">
				<view class="title">
					<view class="left">
						<image :src="sImgUrl+'ask2.png'"></image>解决方案
					</view>
				</view>
				<view class="content">
					<view class="btn">
						<view>1. 击球训练</view>
						<image :src="sImgUrl+'edit.png'"></image>
					</view>
					<view class="text">
						<view class="line"></view>
						<text>指导教学</text>
					</view>
					<view class="dsc">手臂弯曲问题影响击球发力，需要特别的训练总是打不远</view>
					<video src="" :poster="sImgUrl+'ask.png'"></video>
					<view class="img">
						<image :src="sImgUrl+'bj.png'"></image>
						<image :src="sImgUrl+'bj.png'"></image>
					</view>
				</view>
			</view>
		</view>
		<view class="sub">
			<text>新的提问</text>
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
	@import url('../../static/css/question_detail.css');
</style>