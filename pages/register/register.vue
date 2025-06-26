<template>
	<view>
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		<image :src="sImgUrl+'icon_return.png'" class="close" @click="reback()"></image>
		<view>
			<view class="hello">Hello!</view>
			<view class="welcome">欢迎注册，降杆</view>
		</view>
		<view class="form">
			<view class="content">
				<view class="phone">
					<input type="number" placeholder="手机号码" placeholder-class="placeholderStyle" v-model="phone" @input="check()"/>
					<image :src="sImgUrl+'icon_Shut.png'" v-if="phone" @click="clear_phone"></image>
				</view>
				<view class="password">
					<input :type="!vis?'password':'text'" placeholder="登录密码" placeholder-class="placeholderStyle" v-model="password"  @input="check"/>
					<image :src="sImgUrl+'icon_visible.png'" @click="vis_password" v-if="!vis"></image>
					<image :src="sImgUrl+'icon_visibles.png'" @click="vis_password" v-if="vis"></image>
				</view>
				<view class="password">
					<input type="number" placeholder="验证码" placeholder-class="placeholderStyle" v-model="code"  @input="check()"/>
					<text @click="send_code()" v-if="is_code == 30">获取验证码</text>
					<text v-else>{{is_code}}秒后重新获取</text>
				</view>
				<view class="btn full" v-if="is" @click="register()">注册</view>
				<view class="btn" v-if="!is">注册</view>
				<view class="agree">
					点击注册即表示您同意<text>《用户协议》</text>
				</view>
			</view>
		</view>
	</view>
</template> 

<script>
	const app = getApp()
	import index from '@/api/index.js' 
	var that
	export default {
		data() {
			return {
				phone:'',
				vis:false,
				is:false,
				code:'',
				is_code:30,
				password:'',
				sImgUrl:app.globalData.sImgUrl
			}
		},
		methods: {
			vis_password(){
				if(that.vis){
					that.vis = false
				}else{
					that.vis = true
				}
			},
			clear_phone(){
				that.phone = ''
			},
			vis_password(){
				if(that.vis){
					that.vis = false
				}else{
					that.vis = true
				}
			},
			check(){
				if(that.phone && that.code){
					that.is = true
				}else{
					that.is = false
				}
			},
			reback(){
				uni.navigateBack()
			},
			register(){
				if(!that.phone){
					uni.showToast({
						title:'请填写手机号',
						icon:'error'
					})
					return;
				}
				if(!that.password){
					uni.showToast({
						title:'请填写密码',
						icon:'error'
					})
					return;
				}
				if(!that.code){
					uni.showToast({
						title:'请填写验证码',
						icon:'error'
					})
					return;
				}
				index.register({code:that.code,type:1,username:that.phone,password:that.password}).then(res => {
					uni.setStorage({
						key: 'token',
						data: res.data.token,
						success() {
							//绑定微信
							let unionId = uni.getStorageSync('unionId')
							if(unionId){
								index.bindWxMp({
									unionId: unionId
								}).then(res => {
									
								}).catch(error=>{
									
								})
							}
						}
					});
					uni.navigateTo({
						url:'/pages/register/gender'
					})
				}).catch(error=>{
				        
				});
				
			},
			send_code(){
				if(!that.phone){
					uni.showToast({
						title:'请填写手机号',
						icon:'error'
					})
					return;
				}
				var timer = setInterval(function(){
					if(that.is_code == 1){
						clearInterval(timer)
						that.is_code = 30
					}else{
						that.is_code --
					}
				},1000)
				index.sendCode({phone:that.phone}).then(res=>{
					console.log(res)
				}).catch(error=>{
				        
				});
				
			}
		},
		onLoad() {
			that = this
			app.getUnioinId().then({})
		},
		onShow() {
			
		}
	}
</script>

<style lang="scss">
page{
	background:#F5F5F5 url('https://www.golf-jg.cn/ftpupload/bg.png') no-repeat;
	background-size: 750rpx auto;
}
.close{
	margin: 20rpx 0 0 24rpx;
	width: 48rpx;
	height: 48rpx;
}
.hello{
	margin: 44rpx 0 12rpx 56rpx;
	font-size: 72rpx;
	font-family: HarmonyOS_Sans_SC_Black;
	color: #1A2233;
}
.welcome{
	margin-left:56rpx;
	font-size: 40rpx;
	font-family: PingFangSC-Medium, PingFang SC;
	font-weight: 500;
	color: #1A2233;
}
.form{
	width: 688rpx;
	background: #FFFFFF;
	margin: 0 auto;
	border-radius: 32rpx 32rpx 0rpx 0rpx;
	margin-top: 54rpx;
}
.phone{
	padding-top: 80rpx;
	margin-left: 60rpx;
	position: relative;
}
.phone image{
	position: absolute;
	width: 48rpx;
	height: 48rpx;
	top: 104rpx;
	right: 84rpx;
}
.password{
	margin-top: 40rpx;
	margin-left: 60rpx;
	position: relative;
}
.password image{
	position: absolute;
	width: 48rpx;
	height: 48rpx;
	top: 24rpx;
	right: 84rpx;
	z-index: 999;
}
.password text{
	position: absolute;
	right: 84rpx;
	height: 96rpx;
	display: flex;
	align-items: center;
	top: 0;
	font-size: 28rpx;
	font-family: PingFangSC-Regular, PingFang SC;
	font-weight: 400;
	color: #00AB64;
	z-index: 999;
}
.btn{
	width: 568rpx;
	height: 96rpx;
	background: #F3F5F5;
	border-radius: 16rpx;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-left: 60rpx;
	margin-top: 40rpx;
	font-size: 32rpx;
	font-family: PingFangSC-Regular, PingFang SC;
	font-weight: 400;
	color: #A8A8C2;
}
.full{
	background: #00AB64;
	color: #FFFFFF;
}
input{
	width: 544rpx;
	height: 96rpx;
	background: #F3F5F5;
	border-radius: 24rpx;
	padding-left: 24rpx;
	font-size: 32rpx;
	font-family: PingFangSC-Regular, PingFang SC;
	font-weight: 400;
	color: #333336;
}
.placeholderStyle{
	color: #999999;
}
.sign{
	font-size: 28rpx;
	font-family: PingFangSC-Regular, PingFang SC;
	font-weight: 400;
	color: #8A8F99;
	text-align: center;
	margin-top: 60rpx;
}
.sign text{
	font-size: 28rpx;
	font-family: PingFangSC-Medium, PingFang SC;
	font-weight: 500;
	color: #00AB64;
}
.log_text{
	font-size: 24rpx;
	font-family: PingFangSC-Regular, PingFang SC;
	font-weight: 400;
	color: #8A8F99;
	margin-top: 184rpx;
	text-align: center;
}
.wx{
	margin-top: 60rpx;
	display: flex;
	justify-content: center;
}
.wx image{
	width: 80rpx;
	height: 80rpx;
}
.agree{
	font-size: 24rpx;
	font-family: PingFangSC-Regular, PingFang SC;
	font-weight: 400;
	color: #909399;
	text-align: center;
	margin-top: 610rpx;
	padding-bottom: 108rpx;
}
.agree text{
	font-size: 24rpx;
	font-family: PingFangSC-Regular, PingFang SC;
	font-weight: 400;
	color: #5366FA;
}
</style>
