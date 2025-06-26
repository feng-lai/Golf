<template>
	<view>
		<view class="status_bar" :style="'height:'+statusBarHeight+'px;'"> 
			<!-- 这里是状态栏 -->
		</view>
		<text class="title" :style="'margin-top:'+nav+'px; height:'+height+'px;'">首页</text>
		<view class="icon">
			<navigator class="row" hover-class="none" url="/pages/course/entry">
				<image :src="sImgUrl+'index/icon1.png'"></image>
				<view>私教课</view>
			</navigator>
			<navigator class="row" hover-class="none" url="/pages/course/entry?type=1">
				<image :src="sImgUrl+'index/icon2.png'"></image>
				<view>线上公开课</view>
			</navigator>
			<navigator class="row" hover-class="none" url="/pages/play/play">
				<image :src="sImgUrl+'index/icon3.png'"></image>
				<view>计分工具</view>
			</navigator>
			<navigator class="row" hover-class="none" url="/pages/assess/assess">
				<image :src="sImgUrl+'index/icon4.png'"></image>
				<view>我的测评</view>
			</navigator>
			<navigator class="row" hover-class="none" url="/pages/course/entry?type=2">
				<image :src="sImgUrl+'index/icon5.png'"></image>
				<view>1对1答疑</view>
			</navigator>
		</view>
		<view class="coach">
			<view class="top">
				<view class="left">我的教练</view>
				<navigator class="more" hover-class="none" url="../mine/coach">更多</navigator>
			</view>
			<view class="entry" v-if="coach.length">
				<view class="row" v-for="(v,k) in coach" @click="to_train(v.instructorId)">
					<image :src="imgUrl+v.instructorAvatar"></image>
					<view>
						<view class="name">{{v.instructorName}}</view>
						<view class="dsc">
							<text>训练课程 {{v.courseNum}}</text>
							<view class="line"></view>
							<text>已学课程 {{v.studyNum}}</text>
						</view>
					</view>
				</view>
			</view>
			<view class="empty" v-else>
				<view>
					<image :src="sImgUrl+'index/pc@2x.png'"></image>
				</view>
				<view>暂未绑定教练</view>
			</view>
		</view>
		<view class="train">
			<view class="top">
				<view class="left"><image :src="sImgUrl+'index/text@2x.png'"></image></view>
				<navigator class="more" hover-class="none" url="/pages/course/entry">更多</navigator>
			</view>
			<view class="entry">
				<view class="row" v-for="(v,k) in course">
					<view class="part">
						<view class="left">
							<image :src="sImgUrl+'index/icon@2x.png'"></image>
							<text>{{v.name}}</text>
						</view>
						<view class="time">{{v.beginTime}}</view>
					</view>
					<view class="part2">
						<view>第1阶段：一号木打远</view>
						<view class="right">
							<view>教练: 朱斤梁</view>
							<image :src="sImgUrl+'index/fanhui_next@2x.png'"></image>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="train trains">
			<view class="top">
				<view class="left">近期完成训练</view>
				<navigator class="more" hover-class="none" url="/pages/course/entry">更多</navigator>
			</view>
			<view class="entry">
				<view class="row">
					<view class="part">
						<view class="left">
							<image :src="sImgUrl+'index/icon@2x.png'"></image>
							<text>攻果岭课程</text>
						</view>
						<view class="time">2023-3-14</view>
					</view>
					<view class="part2">
						<view>第1阶段：一号木打远</view>
						<view class="right">
							<view>教练: 朱斤梁</view>
							<image :src="sImgUrl+'index/fanhui_next@2x.png'"></image>
						</view>
					</view>
					<view class="part3">
						<image src="https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/48a91a808bfb44479936dcb5a70c3a83_mergeImage.png"></image>
						<image src="https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/48a91a808bfb44479936dcb5a70c3a83_mergeImage.png"></image>
						<image src="https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/48a91a808bfb44479936dcb5a70c3a83_mergeImage.png"></image>
					</view>
				</view>
				<view class="line"></view>
				<view class="row">
					<view class="part">
						<view class="left">
							<image :src="sImgUrl+'index/icon@2x.png'"></image>
							<text>攻果岭课程</text>
						</view>
						<view class="time">2023-3-14</view>
					</view>
					<view class="part2">
						<view>第1阶段：一号木打远</view>
						<view class="right">
							<view>教练: 朱斤梁</view>
							<image :src="sImgUrl+'index/fanhui_next@2x.png'"></image>
						</view>
					</view>
					<view class="part3">
						<image src="https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/ca1fedf7b57e4d2e9be05912f1bec3b4_mergeImage.png" class="one"></image>
					</view>
				</view>
			</view>
		</view>
		<view class="course">
			<view class="top">
				<view class="left">精品公开课</view>
				<navigator class="more" hover-class="none" url="/pages/find/find?type=0" open-type="reLaunch">更多</navigator>
			</view>
			<view class="entry">
				<navigator class="row" v-for="(v,k) in openCourse" :url="'/pages/course/detail?id='" hover-class="none">
					<image :src="imgUrl+v.coverImage"></image>
					<view class="right">
						<view>{{v.name}}</view>
						<view class="second">
							<view>课程: {{v.duration}}</view>
							<view class="line"></view>
							<view>兑换: <text>{{v.exchange}}</text></view>
						</view>
						<view class="bottom">
							<view class="left">
								<image :src="imgUrl+v.instructorAvatar"></image>
								<text>{{v.instructorName}}</text>
							</view>
							<view class="other">
								<image :src="sImgUrl+'index/icon_drop-down@2x.png'"></image>
								<text>{{v.praiseNum}}</text>
							</view>
						</view>
					</view>
				</navigator>
				<view class="row">
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
				</view>
			</view>
		</view>
		<view class="game">
			<view class="top">
				<view class="left">近期赛事</view> 
				<navigator class="more" hover-class="none" url="/pages/find/find?type=1" open-type="reLaunch">更多</navigator>
			</view>
			<view class="entry">
				<navigator class="row" v-for="(v,k) in game" hover-class="none" :url="'/pages/game/detail?id='+v.id">
					<view class="text">{{v.title}}</view>
					<view class="dsc">{{v.content}}</view>
					<image class="one" :src="imgUrl+v.coverImage" v-if="v.img.length == 1"></image>
					<view class="three" v-else>
						<image :src="imgUrl+val" v-for="(val,key) in v.img"></image>
					</view>
				</navigator>
			</view>
		</view>
	</view>
</template>

<script>
	import index from '../../api/index.js' 
	var that
	const app = getApp()
	export default {
		data() {
			return {
				coach:[],
				game:[],
				course:[],
				finishCourse:[],
				openCourse:[],
				imgUrl:uni.getStorageSync('imgUrl'),
				sImgUrl:app.globalData.sImgUrl,
				nav:'',
				height:'',
				statusBarHeight:''
			}
		},
		onLoad() { 
			that = this
		}, 
		methods: {
			//近期赛事
			getGame(){ 
				index.getGame().then(res=>{
					that.game = res.data.rows
					for(let i in that.game){
						that.game[i].img = that.game[i].coverImage.split(',')
					}
				}).catch(error=>{
					
				})
			},
			//即将训练课程
			getCourse(){
				index.getCourse().then(res=>{
					that.course = res.data.rows
				}).catch(error=>{
					
				})
			},
			//近期完成的课程
			getFinishCourse(){
				index.getFinishCourse().then(res=>{
					that.finishCourse = res.data.rows
				}).catch(error=>{
					
				})
			},
			//我的教练
			getCoach(){
				index.getCoach().then(res=>{
					that.coach = res.data.rows
				}).catch(error=>{
					
				})
			},
			//公开课
			getOpenCourse(){
				index.getOpenCourse().then(res=>{
					that.openCourse = res.data.rows
				}).catch(error=>{
					
				})
			},
			to_train(id){
				uni.setStorageSync('train_id',id)
				uni.switchTab({
					url:'/pages/train/train'
				})
			}
		},
		onShow() {
			var pages = getCurrentPages()
			var page = pages[pages.length - 1];
			uni.setStorage({
				key: 'url',
				data: '/' + page.route,
				success: function() { 
					getApp().isLogin().then(function() {
						that.getGame()
						that.getCourse()
						that.getCoach()
						that.getOpenCourse()
					})
				}
			})
			
		},
		mounted(){
			// #ifdef MP-WEIXIN
				that.nav = uni.getMenuButtonBoundingClientRect().top-wx.getSystemInfoSync().statusBarHeight
				that.height = uni.getMenuButtonBoundingClientRect().height
				that.statusBarHeight = wx.getSystemInfoSync().statusBarHeight
			// #endif
		},
		onShareAppMessage() {
			
		}
	}
</script>

<style lang="scss">
	@import '@../../../../static/css/index.scss';
</style>
