<template>
	<view>
		<view class="title">选择教练</view>
		<view class="chose_coach" v-if="!coach"  @click="chose(1)"><image :src="sImgUrl+'add.png'"></image>选择教练</view>
		<view class="coach" v-if="coach">
			<image :src="sImgUrl+'bj.png'"></image>
			<text>{{coach}}</text>
			<text class="edit" @click="chose(1)">修改</text>
		</view>
		<view class="title">
			问题现象<text>(请简要选择问题现象)</text>
			<view class="edit"><image :src="sImgUrl+'edit.png'" @click="chose(2)"></image></view>
		</view>
		<view class="chose_coach" v-if="!tag"><image :src="sImgUrl+'add.png'"></image>选择</view>
		<view class="tag" v-if="tag">
			<view v-for="(v,k) in tag">{{v}}</view>
		</view>
		<view class="title">问题描述</view>
		<textarea placeholder="说点什么" placeholder-class="placeholder" v-model="content"></textarea>
		<view class="title">添加视频或图片</view>
		<view class="file">
			<image :src="v" v-for="(v,k) in img"></image>
			<view class="add"><image :src="sImgUrl+'add.png'"></image></view>
		</view>
		<view class="sub">
			<text>确认提交</text>
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
				coach:'',
				tag:['3-7号求道木','3-7号求道木','3-7号求道木','3-7号求道木','3-7号求道木','3-7号求道木'],
				sImgUrl:app.globalData.sImgUrl,
				img:[
					app.globalData.sImgUrl+'AI.png',
					app.globalData.sImgUrl+'AI.png',
					app.globalData.sImgUrl+'AI.png',
					app.globalData.sImgUrl+'AI.png',
				],
				content:''
			}
		},
		methods: {
			chose(type){
				let url = '/pages/question/question'
				if(type == 2){
					url = '/pages/question/sub_question'
				}
				uni.navigateTo({
					url:url
				})
			}
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
	@import url('../../static/css/question_save.css');
</style>