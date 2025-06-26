<template>
	<view>
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		<view class="part" :style="'height:'+nav+'px;' ">
			<navigator class="img" hover-class="none" open-type="navigateBack">
				<image :src="sImgUrl+'icon_return.png'"></image>
			</navigator>
			<text>我的测评</text>
		</view>
		<view class="collect">
			<view class="title">全部测评：{{info.total}}次</view>
			<view class="detail">
				<view class="row">
					<view>
						<view><text>{{info.skillNum}}</text>次</view>
						<view class="text">技能测评</view>
					</view>
				</view>
				<view class="row">
					<view>
						<view><text>{{info.seniorNum}}</text>次</view>
						<view class="text">高级测评</view>
					</view>
				</view>
				<view class="row">
					<view>
						<view><text>{{info.actualNum}}</text>次</view>
						<view class="text">实战测评</view>
					</view>
				</view>
				<view class="row">
					<view>
						<view><text>{{info.selfNum}}</text>次</view>
						<view class="text">自测评</view>
					</view>
				</view>
			</view>
		</view>
		<view class="self">
			<view class="title">实战自测<text>(可多次测评)</text></view>
			<view class="detail">
				<navigator class="text" hover-class="none" url="/pages/assess/cate?title=比赛">比赛</navigator>
				<navigator class="text" hover-class="none" url="/pages/assess/cate?title=训练">训练</navigator>
				<navigator class="text" hover-class="none" url="/pages/assess/cate?title=场地">场地</navigator>
			</view>
		</view>
		<view class="history">
			<view class="title">
				<text>历史测评</text>
				<text class="btn">加载更多</text>
			</view>
			<view class="cate">
				<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" display-multiple-items="4">
					<swiper-item>
						<view :class="!type?['text','active']:['text']">全部</view>
					</swiper-item>
					<swiper-item>
						<view :class="type == 1?['text','active']:['text']">技能测评</view>
					</swiper-item>
					<swiper-item>
						<view :class="type == 2?['text','active']:['text']">高级测评</view>
					</swiper-item>
					<swiper-item>
						<view :class="type == 3?['text','active']:['text']">实战测评</view>
					</swiper-item>
					<swiper-item>
						<view :class="type == 4?['text','active']:['text']">学员自测</view>
					</swiper-item>
				</swiper>
			</view>
			<view class="time">
				<view class="row"><input placeholder="开始时间" placeholder-class="placehoder" />
					<image :src="sImgUrl+'time.png'"></image>
				</view>
				<view style="margin: 0 10rpx;">-</view>
				<view class="row"><input placeholder="结束时间" placeholder-class="placehoder" />
					<image :src="sImgUrl+'time.png'"></image>
				</view>
			</view>
			<view class="result">
				<view class="row">
					<view class="left">
						<image :src="sImgUrl+'doc1.png'"></image>
						<view>
							<view class="name">技能测评<text>开球</text></view>
							<view class="times">2023-03-11</view>
						</view>
					</view>
					<view class="right">
						<view class="rate">
							评分:4
							<image :src="sImgUrl+'starts.png'"></image>
							<image :src="sImgUrl+'starts.png'"></image>
							<image :src="sImgUrl+'starts.png'"></image>
							<image :src="sImgUrl+'starts.png'"></image>
							<image :src="sImgUrl+'start.png'"></image>
						</view>
						<view class="view">查看<image :src="sImgUrl+'train/fanhui_next.png'"></image></view>
					</view>
				</view>
				<view class="row">
					<view class="left">
						<image :src="sImgUrl+'doc1.png'"></image>
						<view>
							<view class="name">技能测评<text>开球</text></view>
							<view class="times">2023-03-11</view>
						</view>
					</view>
					<view class="right">
						<view class="rate">
							评分:4
							<image :src="sImgUrl+'starts.png'"></image>
							<image :src="sImgUrl+'starts.png'"></image>
							<image :src="sImgUrl+'starts.png'"></image>
							<image :src="sImgUrl+'starts.png'"></image>
							<image :src="sImgUrl+'start.png'"></image>
						</view>
						<view class="view">查看<image :src="sImgUrl+'train/fanhui_next.png'"></image></view>
					</view>
				</view>
				<view class="row">
					<view class="left">
						<image :src="sImgUrl+'doc2.png'"></image>
						<view>
							<view class="name">技能测评<text>开球</text></view>
							<view class="times">2023-03-11</view>
						</view>
					</view>
					<view class="right">
						<view class="rate">
							评分:4
							<image :src="sImgUrl+'starts.png'"></image>
							<image :src="sImgUrl+'starts.png'"></image>
							<image :src="sImgUrl+'starts.png'"></image>
							<image :src="sImgUrl+'starts.png'"></image>
							<image :src="sImgUrl+'start.png'"></image>
						</view>
						<view class="view">查看<image :src="sImgUrl+'train/fanhui_next.png'"></image></view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>


<script>
	import index from '../../api/index.js'
	const app = getApp()
	var that
	export default {
		data() {
			return {
				nav:'',
				date: '',
				num: 2,
				cate: [
					'全部',
					'技能测评',
					'高级测评',
					'实战测评',
					'学员自测'
				],
				indicatorDots: false,
				autoplay: false,
				type: 1,
				info:'',
				sImgUrl:app.globalData.sImgUrl
			}
		},
		methods: {
			getInfo(){
				index.evaluationStatistics().then(res=>{
					that.info = res.data
				}).catch(error=>{
					
				})
			}
		},
		onShow() {
			// #ifdef MP-WEIXIN
			that.nav = uni.getMenuButtonBoundingClientRect().height
			// #endif
		},
		onLoad() {
			var pages = getCurrentPages()
			var page = pages[pages.length - 1];
			that = this; //是否已登录
			uni.setStorage({
				key: 'url',
				data: '/' + page.route,
				success: function() { 
					getApp().isLogin().then(function() {
						that.getInfo()
					})
				}
			})
		}
	}
</script>

<style>
	@import url('../../static/css/assess.css');
</style>