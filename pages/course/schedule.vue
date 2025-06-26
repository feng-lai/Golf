<template>
	<view>
		<view class="date">
			<view class="left">{{date.split('-')[0]}}年{{parseInt(date.split('-')[1])}}月<image :src="sImgUrl+'score/arr.png'" @click="open()"></image></view>
			<text>授课预约</text>
		</view>
		<view class="calendar">
			<view v-for="(v,k) in calendar" :class="v.active?'active':''" @click="change_date(k)">
				<view class="w">{{v.week}}</view>
				<view class="d">{{v.day}}</view>
			</view>
		</view>
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
						<view class="name">王楠<text>|</text>100-108杆</view>
						<view class="lesson">第1课 果岭技能</view>
					</view>
				</view>
				<view class="view disabled">查看</view>
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
				<view class="view">授课</view>
			</view>
		</view>
		<uni-calendar 
		:date="date"
		ref="calendar"
		:insert="false"
		@confirm="confirm"
		 />
	</view>
</template>

<script>
	import index from '../../api/index.js'
	var that
	const app = getApp()
	export default {
		data() {
			return {
				nav:'',
				top:'',
				calendar: [{
						week: '周日',
						day: '02',
						active: true
					},
					{
						week: '周一',
						day: '03',
						active: false
					},
					{
						week: '周二',
						day: '04',
						active: false
					},
					{
						week: '周三',
						day: '05',
						active: false
					},
					{
						week: '周四',
						day: '06',
						active: false
					},
					{
						week: '周五',
						day: '07',
						active: false
					},
					{
						week: '周六',
						day: '08',
						active: false
					}
				],
				sImgUrl:app.globalData.sImgUrl,
				date:''
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
			open(){
				this.$refs.calendar.open();
			},
			confirm(e) {
				that.date = e.fulldate
				for(let i in that.calendar){
					
					if(parseInt(that.calendar[i].date.split('-')[0]) == parseInt(e.fulldate.split('-')[0]) && parseInt(that.calendar[i].date.split('-')[1]) == parseInt(e.fulldate.split('-')[1]) && parseInt(that.calendar[i].date.split('-')[2]) == parseInt(e.fulldate.split('-')[2])){
						that.calendar[i].active = true
					}else{
						that.calendar[i].active = false
					}
				}
			},
			getDate() {
				var new_Date = new Date()
			
				var timesStamp = new_Date.getTime();
			
				var currenDay = new_Date.getDay();
			
				var dates = [];
				
				var week = ['周日','周一','周二','周三','周四','周五','周六']
			
				for (var i = 0; i < 7; i++) {
					//var time = new Date(timesStamp + 24 * 60 * 60 * 1000 * (i - (currenDay + 7) % 7)).toLocaleDateString().replace(/[年月]/g, '-').replace(/[日上下午]/g, '').replace(/\//g, '-')
					var time = new Date(timesStamp + 24 * 60 * 60 * 1000 * (i - (currenDay + 7) % 7))
					time = time.getFullYear()+'-'+time.getMonth()+'-'+time.getDate()
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
			},
			getTrainCourse(){
				index.getTrainCourse({startDate:that.date,endDate:that.date}).then(res=>{
					
				}).catch(error=>{
					
				})
			}
		},
		onShow() {
			// #ifdef MP-WEIXIN
			that.nav = uni.getMenuButtonBoundingClientRect().height
			that.top = uni.getMenuButtonBoundingClientRect().top-wx.getSystemInfoSync().statusBarHeight
			// #endif
		},
		onLoad() {
			that = this
			that.getDate()
			that.getTrainCourse()
		}
	}
</script>

<style>
	@import url('../../static/css/course_schedule.css');
</style>