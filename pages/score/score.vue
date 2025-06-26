<template>
	<view>
		<view class="top"> 
			<view class="status_bar" :style="'height:'+statusBarHeight+'px;'">
				<!-- 这里是状态栏 -->
			</view>
			<view v-if="nav" :style="'height:'+nav+'px;' "></view>
			<view class="part">
				<navigator class="img" hover-class="none" open-type="navigateBack"><image :src="sImgUrl+'score/icon_return(black)@2x.png'"></image></navigator>
				<text>赚取积分</text>
				<navigator class="rule" hover-class="none" url="/pages/score/rule">规则</navigator>
			</view>
			<view class="text">我的积分</view>
			<view class="num">2586</view>
			<navigator class="btn" hover-class="none" url="/pages/score/detail">积分明细<image :src="sImgUrl+'index/fanhui_next@2x.png'"></image></navigator>
			<view class="sign">
				<view class="title">已连续签到<text>5</text>天</view>
				<view class="box">
					<view class="line"></view>
					<view class="entry">
						<view class="row" v-for="(v,k) in day">
							<view :class="['add_num',v.old,'active']" v-if="v.sign">
								<image :src="sImgUrl+'score/click.png'"></image>
								<text>+{{v.num}}</text>
							</view>
							<view :class="['add_num',v.old]" v-else>+{{v.num}}</view>
							<view>{{v.text}}</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="exchange">
			<view class="title">充值兑换</view>
			<view class="row">
				<view class="left">
					<image :src="sImgUrl+'score/icon@2x(7).png'"></image>
					<view>
						<view>兑换积分</view>
						<view class="rate">比例 1:100</view>
					</view>
				</view>
				<navigator class="right" hover-class="none" url="/pages/score/recharge">去兑换</navigator>
			</view>
		</view>
		<view class="get_score">
			<view class="title">做任务赢积分</view> 
			<view class="entry">
				<view class="part">
					<view class="left">
						<image :src="sImgUrl+'score/sign.png'"></image>
						<view>
							<view>注册登录</view>
							<view class="text">
								<text>奖励30积分</text>
								<image :src="sImgUrl+'score/arr.png'"></image>
							</view>
						</view>
					</view>
					<view class="right">去完成</view>
				</view>
				<view class="part">
					<view class="left">
						<image :src="sImgUrl+'score/info.png'"></image>
						<view>
							<view>完善个人资料</view>
							<view class="text">
								<text>奖励30积分</text>
								<image :src="sImgUrl+'score/arr.png'"></image>
							</view>
						</view>
					</view>
					<view class="right active">已经获取</view>
				</view>
				<view class="part">
					<view class="left">
						<image :src="sImgUrl+'score/file.png'"></image>
						<view>
							<view>完善技术档案</view>
							<view class="text">
								<text>奖励30积分</text>
								<image :src="sImgUrl+'score/arr.png'"></image>
							</view>
						</view>
					</view>
					<view class="right active">去完成</view>
				</view>
				<view class="content">该任务为长期任务，可重复完成获取积分</view>
				<view class="part">
					<view class="left">
						<image :src="sImgUrl+'score/course.png'"></image>
						<view>
							<view>学习公开课</view>
							<view class="text">
								<text>奖励30积分</text>
								<image :src="sImgUrl+'score/arr.png'"></image>
							</view>
						</view>
					</view>
					<view class="right active">去完成</view>
				</view>
				<view class="part">
					<view class="left">
						<image :src="sImgUrl+'score/coach.png'"></image>
						<view>
							<view>绑定教练</view>
							<view class="text">
								<text>奖励30积分</text>
								<image :src="sImgUrl+'score/arr.png'"></image>
							</view>
						</view>
					</view>
					<view class="right active">去完成</view>
				</view>
				<view class="part">
					<view class="left">
						<image :src="sImgUrl+'score/qs.png'"></image>
						<view>
							<view>首次1对1答疑体验</view>
							<view class="text">
								<text>奖励30积分</text>
								<image :src="sImgUrl+'score/arr.png'"></image>
							</view>
						</view>
					</view>
					<view class="right active">去完成</view>
				</view>
				<view class="part">
					<view class="left">
						<image :src="sImgUrl+'score/share.png'"></image>
						<view>
							<view>分享APP到朋友圈获取</view>
							<view class="text">
								<text>奖励30积分</text>
								<image :src="sImgUrl+'score/arr.png'"></image>
							</view>
						</view>
					</view>
					<view class="right active">去完成</view>
				</view>
			</view>
		</view>
		<view style="height: 40rpx;"></view>
	</view>
</template>

<script>
	var that
	const app = getApp()
	export default {
		data() {
			return {
				day:[
					{
						text:'第一天',
						sign:false,
						num:3,
						old:'old'
					},
					{
						text:'第二天',
						sign:false,
						num:3,
						old:'old'
					},
					{
						text:'第三天',
						sign:false,
						num:3,
						old:'old'
					},
					{
						text:'第四天',
						sign:true,
						num:3,
						old:'old'
					},
					{
						text:'第五天',
						sign:false,
						num:3,
						old:''
					},
					{
						text:'第六天',
						sign:false,
						num:3,
						old:''
					},
					{
						text:'第七天',
						sign:false,
						num:3,
						old:''
					}
				],
				nav:'',
				sImgUrl:app.globalData.sImgUrl,
				statusBarHeight:''
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
		},
		mounted(){
			// #ifdef MP-WEIXIN
				that.statusBarHeight = wx.getSystemInfoSync().statusBarHeight
			// #endif
		},
	}
</script>

<style lang="scss" scoped>
	@import '@../../../../static/css/score.scss';
</style>
