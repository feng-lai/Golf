<template>
	<view>
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		<view v-if="nav" :style="'height:'+nav+'px;' "></view>
		<view class="top">
			<navigator class="img" hover-class="none" open-type="navigateBack"><image :src="sImgUrl+'icon_return.png'"></image></navigator>
			<text>详情</text>
			<view class="img"><image :src="sImgUrl+'share.png'"></image></view>
		</view>
		<view class="content">
			<image src="https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/7347bfd97e4449b085dc38a5bb05029f_mergeImage.png"></image>
			<view>
				<view class="title">挥杆方法</view>
				<view class="dsc">握杆分为 3 种方式，不同的握杆方式其不同点就在于右手1重餐式。其方…</view>
				<view class="text">
					<text>2000分</text>
					<text class="num">已有12.6W人学习</text>
				</view>
				<view class="entry">
					<text>开球</text>
					<text>1号木</text>
					<text>初级</text>
				</view>
			</view>
		</view>
		<view class="detail">
			<view :class="v.vis?['row','active']:['row']" @click="change(k)" v-for="(v,k) in info">
				<view class="title">
					<view class="bg">
						<text>{{v.text}}</text>
						<image :src="sImgUrl+'icon_drop-down.png'"></image>
					</view>
				</view>
				<view class="entry">
					<view class="rows" v-for="(val,key) in v.dsc">{{val}}</view>
				</view>
			</view>
		</view>
		<view class="use">
			<view>使用说明</view>
			<view class="text">
				<view>1. 公开课包默认使用期限为长期</view>
				<view>2. 如违反国家规定的内容将下架处理</view>
				<view>3. 最终解释权为降杆APP所有</view>
			</view>
		</view>
		<view class="btn">
			<text>立即兑换</text>
		</view>
	</view>
</template>

<script>
	const app = getApp()
	var that
	export default {
		data() {
			return {
				nav:'',
				info:[
					{
						text:'1. 初级高尔夫教学计划',
						dsc:[
							'瞄球方向错误的纠正方法',
							'瞄球姿势错误的纠正方法'
						],
						vis:true
					},
					{
						text:'2. 头部过分移动的纠正方法',
						dsc:[
							'瞄球方向错误的纠正方法',
							'瞄球姿势错误的纠正方法'
						],
						vis:false
					},
					{
						text:'3. 手臂与身体不能协调一致的纠正方法',
						dsc:[
							'瞄球方向错误的纠正方法',
							'瞄球姿势错误的纠正方法'
						],
						vis:false
					}
				],
				sImgUrl:app.globalData.sImgUrl
			}
		},
		methods: {
			change(k){
				for(let i in that.info){
					if(i == k){
						if(that.info[i].vis){
							that.info[i].vis = false
						}else{
							that.info[i].vis = true
						}
					}
				}
			}
		},
		onLoad(){
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
@import url(/static/css/course.css);
</style>
