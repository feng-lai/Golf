<template>
	<view>
		<view class="time">
			<view>开始时间</view>
			<view class="right">
				<uni-datetime-picker type="datetime" v-model="date"/>
			</view>
		</view>
		<view class="num">
			<text>同组人数</text>
			<view class="input">
				<image :src="sImgUrl+'dec.png'" v-if="num == 1"></image>
				<image :src="sImgUrl+'decs.png'" @click="dec()" v-else></image>
				<input type="number" v-model="num"/>
				<image :src="sImgUrl+'inc.png'" @click="inc()"></image>
			</view>
		</view>
		<view class="row" v-for="(v,k) in user">
			<view class="left">{{k+1}}号</view>
			<input type="text" placeholder="输入昵称" placeholder-class="placeholer" :value="v" @input="setUser" :data-k="k"/>
		</view>
		<view class="row">
			<view class="left">球洞</view>
			<picker @change="bindPickerChange" :value="index" :range="array">
				<view class="right">
					<block v-if="hole">
						<text style="color: #333;">{{hole}}</text>
					</block>
					<block v-else>请选择</block>
					<image :src="sImgUrl+'icon_drop-down.png'"></image>
				</view>
			</picker>
		</view>
		<view class="btn" @click="next()">
			<text>确认</text>
		</view>
	</view>
</template>

<script>
	var that
	const app = getApp()
	export default {
		data() {
			return {
				date: '',
				num:1,
				hole:'',
				array:['18洞', '9洞'],
				user:[''],
				sImgUrl:app.globalData.sImgUrl
			}
		},
		methods: {
			setUser(e){
				that.user[e.target.dataset.k] = e.detail.value
			},
			dec(){
				that.num--
				that.user = [];
				for (let i = 0; i < that.num; i++) {
				  that.user.push('')
				}
			},
			inc(){
				that.num++
				that.user = [];
				for (let i = 0; i < that.num; i++) {
				  that.user.push('')
				}
			},
			bindPickerChange(e){
				that.hole = that.array[e.detail.value]
			},
			next(){
				if(!that.date){
					uni.showToast({
						title:'请选择时间',
						icon:'none'
					})
					return
				}
				let is = true
				console.log(that.user)
				that.user.forEach(item => {
					
				    if(!item){
						is = false
					}
				});
				if(!is){
					uni.showToast({
						title:'请填写昵称',
						icon:'none'
					})
					return
				}
				if(!that.hole){
					uni.showToast({
						title:'请选择球洞',
						icon:'none'
					})
					return
				}
				uni.setStorageSync('playData',{user:that.user,date:that.date,hole:that.hole})
				uni.navigateTo({
					url:'/pages/play/count'
				})
			},
		},
		onShow() {
			// #ifdef MP-WEIXIN
			that.nav = uni.getMenuButtonBoundingClientRect().height
			// #endif
		},
		onLoad() {
			that = this
			var pages = getCurrentPages()
			var page = pages[pages.length - 1];
			that = this; //是否已登录
			uni.setStorage({
				key: 'url',
				data: '/' + page.route,
				success: function() { 
					app.isLogin().then(function() {
						app.checkLogin()
						let info = uni.getStorageSync('playData')
						if(info){
							that.user = info.user
							that.hole = info.hole
							that.date = info.date
						}
					})
				}
			})
		}
	}
</script>

<style>
	@import url('../../static/css/play_save.css');
</style>