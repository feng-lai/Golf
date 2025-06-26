<template>
	<view>
		<navigator class="back" hover-class="none" open-type="navigateBack">
			<image :src="sImgUrl+'icon_return.png'"></image>
		</navigator>
		<view class="title">{{info.title}}</view>
		<!--<view class="row">
			<view class="user">
				<image src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng729b13281764760d72ba674440b85fff9e74f8bd0f2c5e870b4ab216db428d0d"></image>
				<text>降杆官方</text>
			</view>
			<view>{{info.createTime}}</view>
		</view>-->
		<view class="content">
			<image class="one" :src="imgUrl+info.coverImage" v-if="info.num == 1"></image>
			<view class="three" v-else>
				<image :src="imgUrl+val" v-for="(val,key) in info.img"></image>
			</view>
			<text>
				{{info.content}}
			</text>
		</view>
		<view class="btn">
			<view class="agree">
				<image :src="sImgUrl+'agree.png'"></image>
				<text>{{info.praiseNum?info.praiseNum:0}}</text>
			</view>
			<button open-type="share">
				<image :src="sImgUrl+'share.png'"></image>
			</button>
		</view>
	</view>
</template>

<script>
	import index from '@/api/index.js'
	const app = getApp()
	var that
	export default {
		data() {
			return {
				id: 4,
				praiseNum: 0,
				remark: "",
				status: "",
				userId: 0,
				imgUrl:uni.getStorageSync('imgUrl'),
				info:{
					title:''
				},
				sImgUrl:app.globalData.sImgUrl
				
			}
		},
		methods: {
			getGameDetail(){
				index.getGameDetail({id:that.id}).then(res=>{
					that.info = res.data
					that.info.img = that.info.coverImage.split(',')
					that.info.num = that.info.img.length
				}).catch(error=>{
					
				})
			}
		},
		onLoad(e) {
			that = this
			that.id = e.id
		},
		onShow() {
			var pages = getCurrentPages()
			var page = pages[pages.length - 1];
			uni.setStorage({
				key: 'url',
				data: '/' + page.route+'?id='+that.id,
				success: function() { 
					getApp().isLogin().then(function() {
						that.getGameDetail();
					})
				}
			})
		},
		onShareAppMessage() {
			if (res.from === 'button') {// 来自页面内分享按钮
				
			}
			return {
			  title: that.info.title,
			  path: '/pages/game/detail?id='+that.id
			}
		},
	}
</script>

<style lang="scss" scoped>
@import url('../../static/css/game.css');
</style>
