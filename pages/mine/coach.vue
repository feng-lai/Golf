<template>
	<view>
		<view class="entry">
			<navigator class="row" v-for="(v,k) in coach" hover-class="none" :url="'/pages/train/train?id='+v.instructorId" open-type="switchTab">
				<image :src="imgUrl+v.instructorAvatar" class="user"></image>
				<view>
					<view>{{v.instructorName}}</view>
					<view class="content">
						<text>训练课程 {{v.courseNum}}</text>
						<view class="line"></view>
						<text>已学课程 {{v.coursesLearnedNum}}</text>
					</view>
				</view>
			</navigator>
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
				coach:[],
				imgUrl:uni.getStorageSync('imgUrl'),
				sImgUrl:app.globalData.sImgUrl
			}
		},
		onLoad() { 
			that = this
		}, 
		methods: {
			//我的教练
			getCoach(){
				index.getCoach().then(res=>{
					that.coach = res.data.rows
				}).catch(error=>{
					
				})
			},
		},
		onShow() {
			var pages = getCurrentPages()
			var page = pages[pages.length - 1];
			var that = this; //是否已登录
			uni.setStorage({
				key: 'url',
				data: '/' + page.route,
				success: function() { 
					getApp().isLogin().then(function() {
						that.getCoach()
					})
				}
			})
		}
	}
</script>

<style>
	@import url('../../static/css/mine_coach.css');
</style>