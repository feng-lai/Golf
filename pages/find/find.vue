<template>
	<view>
		<view class="fixed">
			<view class="status_bar" :style="'height:'+statusBarHeight+'px;'">
				<!-- 这里是状态栏 -->
			</view>
			<view class="top" :style="'margin-top:'+nav+'px; height:'+height_top+'px;'">
				<view class="title">发现</view>
				<view class="option">
					<view :class="!type?['row','active']:['row']" @click="change_type(0)">公开课</view>
					<view :class="type?['row','active']:['row']" @click="change_type(1)">赛事</view>
				</view>
			</view>
		</view>
		<swiper class="swiper" :indicator-dots="indicatorDots" :style="'height:'+s_height+'px;padding-top:'+heights+'px;'" @change="change" :current="type"> 
			<swiper-item>
				<view class="search">
					<input v-model="word" placeholder="输入关键字" placeholder-class="placeholderStyle" @input="input"/>
					<image :src="sImgUrl+'find/search.png'"></image>
				</view>
				<view class="select">
					<view class="word">
						<view class="row" v-for="(v,k) in choseTag">
							<text :title="v">{{v.slice(0,3)+'...'}}</text>
							<image :src="sImgUrl+'find/icon_Shut.png'" @click="close(k)"></image>
						</view>
					</view>
					<view class="right">	
						<picker @change="bindPickerChange" :value="index" :range="tag">
							<text>筛选</text>
							<image :src="sImgUrl+'find/select.png'"></image>
						</picker>
					</view>
				</view>
				<view class="entry" :style="'height:'+height+'px;'">
					<navigator class="row" hover-class="none" url="/pages/course/detail" v-for="(v,k) in openCourse">
						<image :src="imgUrl+v.material"></image>
						<view class="right">
							<view>{{v.name}}</view>
							<view class="second">
								<view>课程: {{v.duration}}</view>
								<view class="line"></view>
								<view>兑换: <text>{{v.exchange?v.exchange:'免费'}}</text></view>
							</view>
							<view class="bottom">
								<view class="left">
									<image :src="imgUrl+v.instrutorAvatar"></image>
									<text>{{v.instrutorName}}</text>
								</view>
								<!--<view class="other">
									<image src="../../static/index/icon_drop-down@2x.png"></image>
									<text>5693</text>
								</view>-->
							</view>
						</view>
					</navigator>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="game" :style="'height:'+s_height+'px;'">
					<view class="entrys">
						<navigator class="row" hover-class="none" :url="'/pages/game/detail?id='+v.id" v-for="(v,k) in game">
							<view class="text">{{v.title}}</view>
							<view class="dsc">{{v.content}}</view>
							<image class="one" :src="imgUrl+v.coverImage" v-if="v.img.length == 1"></image>
							<view class="three" v-else>
								<image :src="imgUrl+val" v-for="(val,key) in v.img"></image>
							</view>
							<view class="user">
								<view class="user_info">
									<image src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng729b13281764760d72ba674440b85fff9e74f8bd0f2c5e870b4ab216db428d0d"></image>
									<text>王楠</text>
								</view>
								<view>{{v.createTime}}</view>
							</view>
						</navigator>
						
					</view>
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import index from '@/api/index.js'
	const app = getApp()
	var that
	export default {
		data() {
			return {
				indicatorDots: false,
				type:0,
				word:'',
				game:[],
				height:'500px',
				s_height:'',
				t_height:'',
				nav:'',
				openCourse:[],
				imgUrl:uni.getStorageSync('imgUrl'),
				tag:[],
				game:[],
				name:'',
				choseTag:[],
				sImgUrl:app.globalData.sImgUrl,
				statusBarHeight:'',
				heights:'',
				height_top:''
				
			}
		},
		methods: {
			input(e){
				that.name = e.detail.value
				that.getCourse()
			},
			bindPickerChange(e){
				if(that.choseTag.indexOf(that.tag[e.detail.value]) == -1){
					that.choseTag.push(that.tag[e.detail.value])
				}
				that.getCourse()
			},
			close(k){
				that.choseTag.splice(k,1)
				that.getCourse()
			},
			change_type(type){
				that.type = type
			},
			change(res){
				console.log(res)
				that.type = res.detail.current
			},
			getCourse(){
				index.storehouseAllPackagePage({name:that.name,descriptionTag:that.choseTag.join(',')}).then(res=>{
					that.openCourse = res.data.rows
				}).catch(error=>{
					
				})
			},
			getTag(){
				index.getTag().then(res=>{
					for(let i in res.data){
						that.tag.push(res.data[i].dictLabel)
					}
					console.log(that.tag)
				}).catch(error=>{
					
				})
			},
			getGame(){
				index.getGame().then(res=>{
					that.game = res.data.rows
					for(let i in that.game){
						that.game[i].img = that.game[i].coverImage.split(',')
					}
				}).catch(error=>{
					
				})
			}
		},
		onLoad(e){
			that = this
			that.type = e.type
			
			const query = uni.createSelectorQuery().in(this);
			query.select('.fixed').boundingClientRect(data => {
				that.heights = data.height
			}).exec();
			
		},
		onShow() {
			var pages = getCurrentPages()
			var page = pages[pages.length - 1];
			uni.setStorage({
				key: 'url',
				data: '/' + page.route,
				success: function() { 
					app.isLogin().then(function() {
						that.getCourse()
						that.getTag()
						that.getGame()
					})
				}
			})
		},
		mounted(){
			// #ifdef MP-WEIXIN
				that.nav = uni.getMenuButtonBoundingClientRect().top-wx.getSystemInfoSync().statusBarHeight
				that.height_top = uni.getMenuButtonBoundingClientRect().height
				that.statusBarHeight = wx.getSystemInfoSync().statusBarHeight
			// #endif
			that.t_height = uni.getSystemInfoSync().windowBottom
			const query = uni.createSelectorQuery().in(this);
			query.select('.top').boundingClientRect(data => {
			  let height = data.height
			  that.s_height = uni.getSystemInfoSync().screenHeight - height - that.t_height
			  uni.createSelectorQuery().in(this).select('.search').boundingClientRect(res => {
					that.height = that.s_height - res.height*2
			  }).exec();
			}).exec();
			// #ifdef MP-WEIXIN
			
			// #endif
		},
		onPullDownRefresh(){
			setTimeout(function(){
				uni.stopPullDownRefresh()
			},1000)
		}
	}
</script>

<style lang="scss" scoped>
	@import '@../../../../static/css/find.scss';
</style>
