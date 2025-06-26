<template>
	<view class="status_bar">
		<!-- 这里是状态栏 -->
	</view>
	<view v-if="nav" :style="'height:'+nav+'px;' "></view>
	<view class="part">
		<navigator class="img" hover-class="none" open-type="switchTab" url="/pages/index/index">
			<image :src="sImgUrl+'score/icon_return(black)@2x.png'"></image>
		</navigator>
		<text>邀请绑定</text>
	</view>
	<view class="coach">
		<view class="title">GC星球</view>
		<view class="user">
			<image :src="imgUrl+info.avatar"></image>
			<view class="right">
				<view class="name">
					<view>{{info.nickName}}</view>
					<text>教练</text>
				</view>
				<view class="dsc">邀请您绑定该教练</view>
			</view>
		</view>
		<view class="bottom">高尔夫宇宙 学院</view>
	</view>
	<view class="btn" @click="submit()">
		<text>我要绑定该教练</text>
	</view>
</template>

<script>
	import index from '../../api/index.js' 
	var that
	const app = getApp()
	export default {
		data() {
			return {
				id:21,
				info:'',
				sImgUrl:app.globalData.sImgUrl,
				imgUrl:uni.getStorageSync('imgUrl')
			}
		},
		methods: {
			submit(){
				index.bindCaoch({id:that.id}).then(res=>{
					uni.showToast({
						title:res.msg,
						icon:'none'
					})
					setTimeout(function(){
						uni.switchTab({
							url:'/pages/index/index'
						})
					},1000)
				}).catch(error=>{
					
				})
			},
			getInfo(){
				index.bindInstructorInfo({id:that.id}).then(res=>{
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
		onLoad(e) {
			that = this
			that.id = e.scene
			var pages = getCurrentPages()
			var page = pages[pages.length - 1];
			uni.setStorage({
				key: 'url',
				data: '/' + page.route+'?scene='+e.scene,
				success: function() { 
					app.isLogin().then(function() {
						that.getInfo()
					})
				}
			})
		}
	}
</script>

<style lang="scss"> 
	@import '@../../../../static/css/bind_coach.scss';
</style>