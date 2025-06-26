<template>
	<view>
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		<view v-if="nav" :style="'height:'+nav+'px;' "></view>
		<view class="part">
			<navigator class="img" hover-class="none" open-type="navigateBack">
				<image :src="sImgUrl+'icon_return.png'"></image>
			</navigator>
			<text>比赛计分</text>
			<button open-type="share">
				<image :src="sImgUrl+'share.png'"></image>
			</button>
		</view>
		<view class="result">
			<view class="title">{{info.title}}</view>
			<view class="time">2023-3-14  10:23-23:12</view>
			<view class="entry">
				<view class="row" v-for="(v,k) in user">
					{{k+1}}号：<text>{{num[k]}} 杆</text>
				</view>
			</view>
		</view>
		<view class="table" v-if="info.hole == '9洞'">
			<view class="tr" v-for="(v,k) in JSON.parse(info.result)">
				<view class="td" v-for="(vv,kk) in v">
					<text v-if="k>1 && kk!=0 && kk<10" @click="open(k,kk,1)">{{vv}}</text>
					<text v-else>{{vv}}</text>
				</view>
			</view>
		</view>
		<view class="table table2" v-if="info.hole == '18洞'">
			<view class="tr" v-for="(v,k) in JSON.parse(info.result)">
				<view class="td" v-for="(vv,kk) in v">
					<text v-if="k>1 && kk>0 && kk != 10 && kk != 11 && kk<21" @click="open(k,kk)">{{vv}}</text>
					<text v-else>{{vv}}</text>
				</view>
			</view>
		</view>
		<view style="height: 60rpx;"></view>
	</view>
</template>

<script>
	import index from '../../api/index.js' 
	const app = getApp()
	var that
	export default {
		data() {
			return {
				id:'',
				info:[
					
				],
				num:[],
				user:[],
				sImgUrl:app.globalData.sImgUrl
			}
		},
		methods: {
			getInfo(){
				index.playDetail(that.id).then(res=>{
					that.info = res.data
					that.user = res.data.names.split(',')
					let data = JSON.parse(res.data.result)
					for(let i in data){
						if(res.data.hole == '9洞' && i>1){
							that.num.push(data[i][12])
						}
						if(res.data.hole == '18洞' && i>1){
							that.num.push(data[i][23])
						}
					}
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
			that.id = e.id
			that.getInfo()
		},
		onShareAppMessage(){
			return {
			  title: that.info.title,
			  path: '/pages/game/detail?id='+that.id
			}
		}
	}
</script>

<style>
	@import url('../../static/css/play_count.css');
</style>