<template>
	<view>
		<view class="top">
			<view>已选中描述标签</view>
			<view class="clear">清除</view>
		</view>
		<view class="result">
			<view v-for="(v,k) in tag">{{v}}<image :src="sImgUrl+'find/icon_Shut.png'"></image></view>
		</view>
		<view class="entry">
			<view v-for="(v,k) in info" :class="parseInt(cate) == k?'active':''">{{v}}<image :src="sImgUrl+'train/fanhui_next.png'"></image></view>
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
				coach:'范晓楠',
				tag:['3-7号求道木','3-7号','3-道木','3-7号求道木','3-7号求道木','3-7号求道木'],
				info:[
					'1号木',
					'3-7号球道木',
					'3-7号铁木干',
					'2-5号长铁杆',
					'6-P中铁杆',
					'推杆'
				],
				cate:1,
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
	@import url('../../static/css/sub_question.css');
</style>