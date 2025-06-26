<template>
	<view>
		<view class="part">
			<navigator class="img" hover-class="none" open-type="navigateBack">
				<image :src="sImgUrl+'icon_return.png'"></image>
			</navigator>
			<text>比赛计分</text>
		</view>
		<view class="table" v-if="hole_data.hole == '9洞'">
			<view class="tr" v-for="(v,k) in info">
				<view class="td" v-for="(vv,kk) in v">
					<text v-if="k>1 && kk!=0 && kk<10" @click="open(k,kk,1)">{{vv}}</text>
					<text v-else>{{vv}}</text>
				</view>
			</view>
		</view>
		<view class="table table2" v-if="hole_data.hole == '18洞'">
			<view class="tr" v-for="(v,k) in info">
				<view class="td" v-for="(vv,kk) in v">
					<text v-if="k>1 && kk>0 && kk != 10 && kk != 11 && kk<21" @click="open(k,kk)">{{vv}}</text>
					<text v-else>{{vv}}</text>
				</view>
			</view>
		</view>
		<view class="btn" @click="submit">
			<text>结束比赛</text>
		</view>
		<uni-popup ref="popup">
			<view class="content">
				<slider class="slider" min="1" max="20" :value="num" @change="getNum" backgroundColor="#ccc"
					block-color="#fff" :show-value="true" :activeColor="blue"></slider>

			</view>
			<view @click="close" class="close">
				<text>确定</text>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	const app = getApp()
	import index from '../../api/index.js' 
	var that
	export default {
		data() {
			return {
				info: [

				],
				hole_data: '',
				num: 1,
				k: '',
				kk: '',
				type: 1,
				sImgUrl:app.globalData.sImgUrl
			}
		},
		methods: {
			close() {
				that.info[that.k][that.kk] = that.num
				this.$refs.popup.close()
				that.getSum()
				that.num = 1
			},
			open(k, kk) {
				// 通过组件定义的ref调用uni-popup方法 ,如果传入参数 ，type 属性将失效 ，仅支持 ['top','left','bottom','right','center']
				this.$refs.popup.open('center')
				that.k = k
				that.kk = kk
			},
			getNum(e) {
				that.num = e.detail.value

			},
			getInfo(user, type) {
				let data = ['球洞', '1', '2', '3', '4', '5', '6', '7', 8, 9, 'OUT', '总差', '总杆']
				let defalut = ['标准杆', 5, 4, 3, 4, 4, 5, 4, 3, 4, 36, '', 36]
				if (type == 2) {
					data = ['球洞', '1', '2', '3', '4', '5', '6', '7', 8, 9, 'OUT', '', 10, 11, 12, 13, 14, 15, 16, 17, 18,
						'IN', '总差', '总杆'
					]
					defalut = ['标准杆', 5, 4, 3, 4, 4, 5, 4, 3, 4, 36, '', 4, 4, 5, 4, 4, 3, 5, 4, 3, 36, '', 72]
				}
				that.info.push(data)
				that.info.push(defalut)
				for (let k in user) {
					let arr = []
					if (type == 1) {
						for (var i = 0; i < 13; i++) {
							if (i < 1) {
								arr.push(parseInt(k) + 1 + '号成绩')
							} else {
								arr.push('')
							}

						}
					} else {
						for (var i = 0; i < 24; i++) {
							if (i < 1) {
								arr.push(parseInt(k) + 1 + '号成绩')
							} else {
								arr.push('')
							}

						}
					}
					that.info.push(arr)
				}
			},
			getSum() {
				if (that.hole_data.hole == '9洞') {
					for (let i in that.info) {
						if (i > 1) {
							let infos = that.info[i]
							let num = 0;
							for (let e in infos) {
								if (e > 0 && e < 10 && infos[e]) {
									num += parseInt(infos[e])
								}
							}
							if (num) {
								that.info[i][10] = that.info[i][12] = num
								that.info[i][11] = 36 - num
							}

						}
					}
				} else {
					for (let i in that.info) {
						if (i > 1) {
							let infos = that.info[i]
							let num = 0
							let num2 = 0
							for (let e in infos) {
								if (e > 0 && e < 10 && infos[e]) {
									num += parseInt(infos[e])
								}
								if (e > 10 && e < 21 && infos[e]) {
									num2 += parseInt(infos[e])
								}
							}
							if (num) {
								that.info[i][10] = num
							} else {
								num = 0
							}
							if (num2) {
								that.info[i][21] = num2
							} else {
								num2 = 0
							}
							let num3 = num + num2
							
							if (num3) {
								that.info[i][23] = num3
								that.info[i][22] = 36 - num3
							}
							
						}
					}
				}
			},
			submit(){
				let data = {
					beginTime:that.hole_data.date,
					names:that.hole_data.user.join(','),
					num:that.hole_data.user.length,
					title:that.hole_data.hole+'比赛',
					result:JSON.stringify(that.info),
					hole:that.hole_data.hole
				}
				index.scoreRecord(data).then(res=>{
					uni.navigateTo({
						url:'/pages/play/play'
					})
				}).catch(error=>{
					
				})
			},
			dateStrChangeTimeTamp(dateStr){
				let date = new Date(Date.parse(dateStr.replace(/-/g, "/")));
			   return date.getTime();
			   
			}
		},
		onShow() {
			// #ifdef MP-WEIXIN
			that.nav = uni.getMenuButtonBoundingClientRect().height
			// #endif
		},
		onLoad() {
			var pages = getCurrentPages()
			var page = pages[pages.length - 1];
			that = this; //是否已登录
			uni.setStorage({
				key: 'url',
				data: '/' + page.route,
				success: function() { 
					getApp().isLogin().then(function() {
						let info = uni.getStorageSync('playData')
						that.hole_data = info
						if (info.hole == '9洞') {
							that.getInfo(info.user, 1)
						} else {
							that.getInfo(info.user, 2)
						}
					})
				}
			})
		}
	}
</script>

<style>
	@import url('../../static/css/play_count.css');
</style>