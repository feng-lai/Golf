<template>
	<view>
		<view class="fixed">
			<view class="status_bar" :style="'height:'+statusBarHeight+'px;'">
				<!-- 这里是状态栏 -->
			</view>
			<view class="part" :style="'margin-top:'+nav+'px; height:'+height_top+'px;' ">
				<navigator class="img" hover-class="none" open-type="navigateBack">
					<image :src="sImgUrl+'icon_return.png'"></image>
				</navigator>
				<text>训练课程</text>
			</view>
			<view class="option">
				<view :class="!type?['row','active']:['row']" @click="change_type(0)">
					私教课<text v-if="!type"></text>
				</view>
				<view :class="type == 1?['row','active']:['row']" @click="change_type(1)">
					公开课<text v-if="type == 1"></text>
				</view>
				<view :class="type == 2?['row','active']:['row']" @click="change_type(2)">
					1对1答疑<text v-if="type == 2"></text>
				</view>
			</view>
		</view>
		<swiper class="swiper" :indicator-dots="indicatorDots" :style="'height:'+s_height+'px; padding-top:'+heights+'px;'" @change="change" :circular="circular"
			:current="type">
			<swiper-item>
				<view class="person" :style="'height:'+height+'px;'">
					<view class="search">
						<input placeholder="输入课程关键词搜索" placeholder-class="placeholder" />
						<image :src="sImgUrl+'find/search.png'"></image>
					</view>
					<view class="info">
						<view class="coach">
							<view :class="v.instructorId == instructorId?['row','active']:['row']" v-for="(v,k) in coach" @click="chose_coach(v.instructorId)">
								<view class="line" v-if="v.instructorId == instructorId"></view>
								<image :src="imgUrl+v.instructorAvatar"></image>
								<view>
									<view>{{v.instructorName}}</view>
									<view class="tag">教练</view>
								</view>
							</view>
						</view>
						<view class="line"></view>
						<view class="right">
							<view class="qa">
								<view>训练遇到难题？咨询教练</view>
								<view class="msg">发起消息</view>
							</view>
							<view class="entry">
								<view class="step">
									<view class="top">
										<view class="tag">
											<view>第一阶段</view>
										</view>
										<view>高尔夫基础</view>
									</view>
									<view class="lesson">
										<view class="rows">
											<view class="text">第一课<text>发力</text></view>
											<view>2023-04-23</view>
										</view>
										<view class="rows">
											<view class="text">第二课<text>发力</text></view>
											<view class="dis">未排课</view>
										</view>
									</view>
								</view>
								<view class="step">
									<view class="top">
										<view class="tag">
											<view>第一阶段</view>
										</view>
										<view>高尔夫基础</view>
									</view>
									<view class="lesson">
										<view class="rows">
											<view class="text">第一课<text>发力</text></view>
											<view>2023-04-23</view>
										</view>
										<view class="rows">
											<view class="text">第二课<text>发力</text></view>
											<view>已完成</view>
										</view>
									</view>
								</view>
							</view>
						</view>
					</view>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="open">
					<view class="entry" :style="'height:'+height+'px;'">
						<navigator class="row" hover-class="none" url="/pages/course/detail">
							<image src="https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/49a93cdf948b409b961ad6ccc6aa79bb_mergeImage.png"></image>
							<view class="right">
								<view>劈击球技术分析及练习</view>
								<view class="second">
									<view>课程: 65</view>
									<view class="line"></view>
									<view>兑换: <text>免费</text></view>
								</view>
								<view class="bottom">
									<view class="left">
										<image src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng729b13281764760d72ba674440b85fff9e74f8bd0f2c5e870b4ab216db428d0d"></image>
										<text>慕容教练</text>
									</view>
									<view class="other">
										<image :src="sImgUrl+'index/icon_drop-down@2x.png'"></image>
										<text>5693</text>
									</view>
								</view>
							</view>
						</navigator>
						<navigator class="row" hover-class="none" url="/pages/course/detail">
							<image src="https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/49a93cdf948b409b961ad6ccc6aa79bb_mergeImage.png"></image>
							<view class="right">
								<view>劈击球技术分析及练习</view>
								<view class="second">
									<view>课程: 65</view>
									<view class="line"></view>
									<view>兑换: <text>免费</text></view>
								</view>
								<view class="bottom">
									<view class="left">
										<image src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng729b13281764760d72ba674440b85fff9e74f8bd0f2c5e870b4ab216db428d0d"></image>
										<text>慕容教练</text>
									</view>
									<view class="other">
										<image :src="sImgUrl+'index/icon_drop-down@2x.png'"></image>
										<text>5693</text>
									</view>
								</view>
							</view>
						</navigator>
						<navigator class="row" hover-class="none" url="/pages/course/detail">
							<image src="https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/49a93cdf948b409b961ad6ccc6aa79bb_mergeImage.png"></image>
							<view class="right">
								<view>劈击球技术分析及练习</view>
								<view class="second">
									<view>课程: 65</view>
									<view class="line"></view>
									<view>兑换: <text>免费</text></view>
								</view>
								<view class="bottom">
									<view class="left">
										<image src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng729b13281764760d72ba674440b85fff9e74f8bd0f2c5e870b4ab216db428d0d"></image>
										<text>慕容教练</text>
									</view>
									<view class="other">
										<image :src="sImgUrl+'index/icon_drop-down@2x.png'"></image>
										<text>5693</text>
									</view>
								</view>
							</view>
						</navigator>
						<navigator class="row" hover-class="none" url="/pages/course/detail">
							<image src="https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/49a93cdf948b409b961ad6ccc6aa79bb_mergeImage.png"></image>
							<view class="right">
								<view>劈击球技术分析及练习</view>
								<view class="second">
									<view>课程: 65</view>
									<view class="line"></view>
									<view>兑换: <text>免费</text></view>
								</view>
								<view class="bottom">
									<view class="left">
										<image src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng729b13281764760d72ba674440b85fff9e74f8bd0f2c5e870b4ab216db428d0d"></image>
										<text>慕容教练</text>
									</view>
									<view class="other">
										<image :src="sImgUrl+'index/icon_drop-down@2x.png'"></image>
										<text>5693</text>
									</view>
								</view>
							</view>
						</navigator>
						<navigator class="row" hover-class="none" url="/pages/course/detail">
							<image src="https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/49a93cdf948b409b961ad6ccc6aa79bb_mergeImage.png"></image>
							<view class="right">
								<view>劈击球技术分析及练习</view>
								<view class="second">
									<view>课程: 65</view>
									<view class="line"></view>
									<view>兑换: <text>免费</text></view>
								</view>
								<view class="bottom">
									<view class="left">
										<image src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng729b13281764760d72ba674440b85fff9e74f8bd0f2c5e870b4ab216db428d0d"></image>
										<text>慕容教练</text>
									</view>
									<view class="other">
										<image :src="sImgUrl+'index/icon_drop-down@2x.png'"></image>
										<text>5693</text>
									</view>
								</view>
							</view>
						</navigator>
						<navigator class="row" hover-class="none" url="/pages/course/detail">
							<image src="https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/49a93cdf948b409b961ad6ccc6aa79bb_mergeImage.png"></image>
							<view class="right">
								<view>劈击球技术分析及练习</view>
								<view class="second">
									<view>课程: 65</view>
									<view class="line"></view>
									<view>兑换: <text>免费</text></view>
								</view>
								<view class="bottom">
									<view class="left">
										<image src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng729b13281764760d72ba674440b85fff9e74f8bd0f2c5e870b4ab216db428d0d"></image>
										<text>慕容教练</text>
									</view>
									<view class="other">
										<image :src="sImgUrl+'index/icon_drop-down@2x.png'"></image>
										<text>5693</text>
									</view>
								</view>
							</view>
						</navigator>
						<navigator class="row" hover-class="none" url="/pages/course/detail">
							<image src="https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/49a93cdf948b409b961ad6ccc6aa79bb_mergeImage.png"></image>
							<view class="right">
								<view>劈击球技术分析及练习</view>
								<view class="second">
									<view>课程: 65</view>
									<view class="line"></view>
									<view>兑换: <text>免费</text></view>
								</view>
								<view class="bottom">
									<view class="left">
										<image src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng729b13281764760d72ba674440b85fff9e74f8bd0f2c5e870b4ab216db428d0d"></image>
										<text>慕容教练</text>
									</view>
									<view class="other">
										<image :src="sImgUrl+'index/icon_drop-down@2x.png'"></image>
										<text>5693</text>
									</view>
								</view>
							</view>
						</navigator>
					</view>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="answer">
					<view class="btn">
						<text class="active">未解答</text>
						<text>已解答</text>
					</view>
					<view class="content" :style="'height:'+height+'px;'">
						<view style="height: 30rpx;"></view>
						<view class="tip">
							<view>
								<view>打不好 有难题</view>
								<view class="text">来试试1对1答疑</view>
								<view @click="to_answer()"><text>发起答疑</text></view>
							</view>
							<image :src="sImgUrl+'kl.png'"></image>
						</view>
						<view>
							<view class="row">
								<view class="top">
									<view class="left">
										<image :src="sImgUrl+'qas.png'"></image>
										<text>关于左曲球打不好的问题</text>
									</view>
									<view>未解答</view>
								</view>
								<view class="detail">
									<image :src="sImgUrl+'bj.png'"></image>
									<view>
										<view class="name">刘教练</view>
										<view class="cate">问题领域：1号木 开球</view>
										<view class="cate">问题现象：打不远 打不中</view>
										<view class="time">2023-6-25</view>
									</view>
								</view>
							</view>
							<view class="row">
								<view class="top">
									<view class="left">
										<image :src="sImgUrl+'qas.png'"></image>
										<text>关于左曲球打不好的问题</text>
									</view>
									<view class="already">已解答</view>
								</view>
								<view class="detail">
									<image :src="sImgUrl+'bj.png'"></image>
									<view>
										<view class="name">刘教练</view>
										<view class="cate">问题领域：1号木 开球</view>
										<view class="cate">问题现象：打不远 打不中</view>
										<view class="time">2023-6-25</view>
									</view>
								</view>
							</view>
						</view>
					</view>
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>


<script>
	import index from '../../api/index.js' 
	var that
	const app = getApp()
	export default {
		data() {
			return {
				indicatorDots: false,
				circular: false,
				type: 0,
				height: '500px',
				s_height: '',
				t_height: '',
				is_answer:1,
				sImgUrl:app.globalData.sImgUrl,
				imgUrl:uni.getStorageSync('imgUrl'),
				coach:[],
				instructorId:'',
				course:[],
				statusBarHeight:'',
				height_top:'',
				heights:''
			}
		},
		methods: {
			to_answer(){
				uni.navigateTo({
					url:'/pages/question/save'
				})
			},
			change_type(type) {
				that.type = type
			},
			change(res) {
				that.type = res.detail.current
			},
			chose_coach(id){
				that.instructorId = id
			},
			getCoach(){
				index.getCoach().then(res=>{
					that.coach = res.data.rows
				}).catch(error=>{
					
				})
			},
			courseOnlyStu(){
				index.courseOnlyStu().then(res=>{
					that.course = res.data.rows
				}).catch(error=>{
					
				})
			}
		},
		onShow() {
			
		},
		onLoad(e) {
			that = this
			that.type = e.type
			const query = uni.createSelectorQuery().in(this);
			query.select('.fixed').boundingClientRect(data => {
				that.heights = data.height
			}).exec();
		},
		mounted() {
			that.t_height = uni.getSystemInfoSync().windowBottom
			const query = uni.createSelectorQuery().in(this);
			query.select('.top').boundingClientRect(data => {
				let height = data.height
				that.s_height = uni.getSystemInfoSync().screenHeight - height - that.t_height
				uni.createSelectorQuery().in(this).select('.search').boundingClientRect(res => {
					that.height = that.s_height - res.height * 2
				}).exec();
			}).exec();
			
		},
		onShow(){
			// #ifdef MP-WEIXIN
			that.nav = uni.getMenuButtonBoundingClientRect().top-wx.getSystemInfoSync().statusBarHeight
			that.height_top = uni.getMenuButtonBoundingClientRect().height
			that.statusBarHeight = wx.getSystemInfoSync().statusBarHeight
			// #endif
			
			var pages = getCurrentPages()
			var page = pages[pages.length - 1];
			uni.setStorage({
				key: 'url',
				data: '/' + page.route,
				success: function() { 
					getApp().isLogin().then(function() {
						that.getCoach()
						that.courseOnlyStu()
					})
				}
			})
		}
	}
</script>
<style>
	@import url('../../static/css/course_entry.css');
</style>