<template>
	<view>
		<view class="status_bar"  :style="'height:'+statusBarHeight+'px;'">
			<!-- 这里是状态栏 -->
		</view>
		<view class="top">
			<view class="user" v-if="user">
				<navigator class="left" hover-class="none" url="/pages/mine/info">
					<image :src="imgUrl+user.avatar" class="img"></image>
					<view>
						<view class="name">
							<text style="max-width: 350rpx;">{{user.nickName}}</text>
							<image :src="sImgUrl+'mine/man.png'" v-if="user.sex == 1"></image>
							<image :src="sImgUrl+'mine/woman.png'" v-if="user.sex == 2"></image>
						</view>
						<view class="id">ID: {{user.userId}}</view>
					</view>
				</navigator>
				<navigator class="right" hover-class="none" url="/pages/mine/info">
					编辑
				</navigator>
			</view>
			<view class="user" v-if="!user">
				<view class="left">
					<view class="img">
						<image
							src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng35687f3c383408ea9d9b8f602d4a417d6badce3c1074ab897ce8fea659bc4be9">
						</image>
					</view>
					<view>注册/登录</view>
				</view>
			</view>
			<view class="dsc" v-if="!user">这家伙很懒什么也没留下~</view>
			<view class="dsc" v-if="user && user.dsc">{{user.dsc}}</view>
			<view class="sum" v-if="!user">
				<view class="score">
					积分:<text>0</text>
				</view>
				<view class="right">
					<view>0<text>/0</text></view>
					<view class="line"></view>
				</view>
			</view>
			<view class="sum" v-if="user">
				<view class="score">
					积分:<text>{{user.integral}}</text>
				</view>
				<view class="right rights">
					<view>16<text>/23</text></view>
					<view class="line">
						<view class="percent" :style="'width:'+ persent+'rpx'"></view>
					</view>
					<image :src="sImgUrl+'mine/dj.png'"></image>
				</view>

			</view>
			<view class="icon">
				<view class="icon_row">
					<navigator hover-class="none" url="/pages/course/schedule">
						<image :src="sImgUrl+'mine/icon1.png'"></image>
						<view>训练时间表</view>
					</navigator>
				</view>
				<view class="icon_row">
					<image :src="sImgUrl+'mine/icon2.png'"></image>
					<view>技术档案</view>
				</view>
				<view class="icon_row">
					<navigator hover-class="none" url="../score/score">
						<image :src="sImgUrl+'mine/icon3.png'"></image>
						<view>赚取积分</view>
					</navigator>
				</view>
				<view class="icon_row">
					<navigator hover-class="none" url="/pages/mine/set">
						<image :src="sImgUrl+'mine/icon4.png'"></image>
						<view>设置</view>
					</navigator>
				</view>
			</view>
		</view>
		<view class="count">
			<view class="title">我的训练</view>
			<view class="entry">
				<navigator class="row" hover-class="none" url="/pages/mine/coach">
					<view>专属训练</view>
					<view class="sub">{{my_train.instructorNum}}</view>
				</navigator>
				<navigator class="row" hover-class="none" url="/pages/course/entry">
					<view>训练课程</view>
					<view class="sub">已完成{{my_train.courseFinishNum}}节 | 未开始{{my_train.courseStarterNum}}节</view>
				</navigator>
				<view class="row">
					<view>我的提问</view>
					<view class="sub">已解答{{my_train.questionAnswerNum}} | 未解答{{my_train.questionNotAnswerNum}}</view>
				</view>
				<view class="row">
					<view>我的测评</view>
					<view class="sub">已测评{{my_train.evaluationNum}}个 | 未测评{{my_train.notEvaluationNum}}个</view>
				</view>
			</view>
		</view>
		<view class="train">
			<view class="train_time">
				<view class="part">
					<view>训练时间</view>
					<navigator class="more" hover-class="none" url="/pages/course/schedule">
						更多时间
					</navigator>
				</view>
				<view class="calendar">
					<view v-for="(v,k) in calendar" :class="v.active?'active':''" @click="change_date(k)">
						<view class="w">{{v.week}}</view>
						<view class="d">{{v.day}}</view>
					</view>
				</view>
				<!--<view class="empty">
					<view>
						<image src="../../static/mine/course.png"></image>
						<view>登录后可享受更多好课</view>
					</view>
				</view>-->
				<view class="entry">
					<view class="row">
						<view class="part">
							<view>09:00</view>
							<view class="time">15:00结束</view>
						</view>
						<view class="part2">
							<image
								src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng729b13281764760d72ba674440b85fff9e74f8bd0f2c5e870b4ab216db428d0d">
							</image>
							<view>
								<view class="name">王楠</view>
								<view class="lesson">第1课 果岭技能</view>
							</view>
						</view>
					</view>
					<view class="row">
						<view class="part">
							<view>09:00</view>
							<view class="time">15:00结束</view>
						</view>
						<view class="part2">
							<image
								src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng729b13281764760d72ba674440b85fff9e74f8bd0f2c5e870b4ab216db428d0d">
							</image>
							<view>
								<view class="name">王楠</view>
								<view class="lesson">第1课 果岭技能</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="analysis">
			<view class="part">成绩分析</view>
			<view class="part1">
				<view>单位：<text>杆</text></view>
				<view class="right">
					<view :class="a_type == 1?['date','active']:['date']" @click="change_type(1)">
						<view class="lines" v-if="a_type == 1"></view>年度
					</view>
					<view class="line"></view>
					<view :class="a_type == 2?['date','active']:['date']" @click="change_type(2)">
						<view class="lines" v-if="a_type == 2"></view>月度
					</view>
				</view>
			</view>
			<view class="charts-box">
				<qiun-data-charts type="tarea" :opts="opts" :chartData="chartData" />
			</view>
		</view>
	</view>
</template>

<script>
	const app = getApp()
	import index from '../../api/index.js'
	var that
	export default {
		data() {
			return {
				statusBarHeight:'',
				a_type: 1,
				user: {},
				calendar: [],
				date:'',
				persent: 115,
				chartData: {},
				opts: {
					fontColor: "#8A8F99",
					dataLabel: false,
					dataPointShape: false,
					color: ["#FFAC00"],
					padding: [15, 10, 0, 15],
					enableScroll: false,
					legend: {
						show: false
					},
					xAxis: {
						disableGrid: true,
						boundaryGap: "justify",
						format: "formatterMonth",
						fontColor: "#8A8F99",
						marginTop: 10,
						calibration: true,
						itemCount: 5,
						axisLabel: {
							interval: 1
						}
					},
					yAxis: {
						gridType: "solid",
						dashLength: 2,
						data: [{
							min: 0,
							max: 150
						}]
					},
					extra: {
						area: {
							type: "curve",
							opacity: 0.7,
							addLine: true,
							width: 4,
							gradient: true,
							activeType: "hollow"
						}
					}
				},
				my_train: '',
				imgUrl: uni.getStorageSync('imgUrl'),
				sImgUrl: app.globalData.sImgUrl
			}
		},
		methods: {
			change_date(k){
				for(let i in that.calendar){
					that.calendar[i].active = false
					if(i == k){
						that.calendar[i].active = true
						that.date = that.calendar[i].date
						that.getTrainCourse()
					}
				}
			},
			change_type(type) {
				this.a_type = type
			},
			getServerData() {
				//模拟从服务器获取数据时的延时
				setTimeout(() => {
					//模拟服务器返回数据，如果数据格式和标准格式不同，需自行按下面的格式拼接
					let res = {
						categories: ["1", "2", "3", "4", "5"],
						series: [{
							data: [0, 30, 35, 80, 105]
						}]
					};
					this.chartData = JSON.parse(JSON.stringify(res));
				}, 500);
			},
			getUserInfo() {
				index.getUser().then(res => {
					that.user = res.data
				}).catch(error => {

				})
			},
			getMyTrain() {
				index.myCourse_center().then(res => {
					that.my_train = res.data
				}).catch(error => {

				})
			},
			getDate() {
				var new_Date = new Date()

				var timesStamp = new_Date.getTime();
				
				var currenDay = new_Date.getDay();
			
				var dates = [];
				
				var week = ['周日','周一','周二','周三','周四','周五','周六']

				for (var i = 0; i < 7; i++) {
					var time = new Date(timesStamp + 24 * 60 * 60 * 1000 * (i - (currenDay + 7) % 7))
					time = time.getFullYear()+'-'+time.getMonth()+'-'+time.getDate()
					//var time = new Date(timesStamp + 24 * 60 * 60 * 1000 * (i - (currenDay + 7) % 7)).toLocaleDateString().replace(/[年月]/g, '-').replace(/[日上下午]/g, '').replace(/\//g, '-')
					let num = time.split('-')[2]
					if(num < 10){ 
						num = '0'+num
					}
					if(i == 0){
						that.date = time
					}
					dates.push({date:time,day:num,week:week[i],active:i==0?true:false});
				}
				that.calendar = dates
				console.log(that.calendar)
			},
			getTrainCourse(){
				index.getTrainCourse({startDate:that.date,endDate:that.date}).then(res=>{
					
				}).catch(error=>{
					
				})
			}
		},
		onReady() {
			this.getServerData();
		},
		onLoad() {
			that = this
		},
		onShow() {
			var pages = getCurrentPages()
			var page = pages[pages.length - 1];
			uni.setStorage({
				key: 'url',
				data: '/' + page.route,
				success: function() { 
					getApp().isLogin().then(function() {
						that.getUserInfo()
						that.getMyTrain()
						that.getDate()
						that.getTrainCourse()
					})
				}
			})
		},
		mounted(){
			// #ifdef MP-WEIXIN
				that.statusBarHeight = wx.getSystemInfoSync().statusBarHeight
			// #endif
		},
	}
</script>

<style>
	@import url('../../static/css/mine.css');
</style>