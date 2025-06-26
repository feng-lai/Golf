<template>
	<view class="top">
		<image :src="sImgUrl+'icon_return.png'"></image>
		<text>唐教练</text>
	</view>
	<view class="content">
		<view class="time">12月23日  12:23</view>
		<view class="left row">
			<image src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng729b13281764760d72ba674440b85fff9e74f8bd0f2c5e870b4ab216db428d0d"></image>
			<view class="dsc">你好，欢迎使用降杆!</view>
		</view>
		<view class="left row">
			<image src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng729b13281764760d72ba674440b85fff9e74f8bd0f2c5e870b4ab216db428d0d"></image>
			<view class="dsc">
				<video src="" poster=""></video>
				<view>击球打远方案</view>
			</view>
		</view>
		<view class="left row">
			<image src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng729b13281764760d72ba674440b85fff9e74f8bd0f2c5e870b4ab216db428d0d"></image>
			<view class="dsc">
				<view class="audio">
					<image :src="sImgUrl+'audio.png'"></image>
					<view class="second">
						<text>20</text>
						<image src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng70fedec5db0dfc6b7f1546ffe05c0373470f45aef2a37cdc37bf3aa2e2a77de5" class="img"></image>
					</view>
				</view>
			</view>
			<view class="circle"></view>
		</view>
		<view class="left row">
			<image src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng729b13281764760d72ba674440b85fff9e74f8bd0f2c5e870b4ab216db428d0d"></image>
			<view class="dsc">
				提问解答
			</view>
		</view>
		<view class="right row">
			<view class="dsc">你好，欢迎使用降杆!</view>
			<image src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng729b13281764760d72ba674440b85fff9e74f8bd0f2c5e870b4ab216db428d0d"></image>
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
	@import url('../../static/css/msg.css');
	page{
		background-color: #F5F5F5;
	}
</style>