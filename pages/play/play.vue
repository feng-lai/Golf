<template>
	<view>
		<view class="bg">
			<navigator class="add" hover-class="none" url="/pages/play/save">
				<image :src="sImgUrl+'add.png'"></image>新建比赛
			</navigator>
		</view>
		<view class="entry">
			<view class="title">历史比赛</view>
			<view>
				<navigator class="row" v-for="(v,k) in info" hover-class="none" :url="'/pages/play/detail?id='+v.id">
					<view class="text">
						<view class="left">洞球<text></text></view>：
						<view>{{v.hole}}</view>
					</view>
					<view class="text">
						<view class="left">时间<text></text></view>：
						<view>{{v.createTime}}</view>
					</view>
					<view class="text">
						<view class="left">比赛人数<text></text></view>：
						<view>{{v.num}}人</view>
					</view>
				</navigator>
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
				info:'',
				sImgUrl:app.globalData.sImgUrl
			}
		},
		methods: {
			getInfo(){
				index.historyPlay().then(res=>{
					console.log(res)
					that.info = res.data.rows
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
			that = this
			that.getInfo()
		}
	}
</script>

<style>
@import url('../../static/css/play.css');
</style>
