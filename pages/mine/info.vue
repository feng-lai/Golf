<template>
	<view>
		<view class="form">
			<view class="row">
				<view>头像</view>
				<view class="right" @click="change_avatar()">
					<image :src="imgUrl+'/'+user.avatar" class="user"></image>
					<image :src="sImgUrl+'index/fanhui_next@2x.png'"></image>
				</view>
			</view>
			<view class="row">
				<view>昵称</view>
				<view class="right" @click="change(2)">
					<text>{{user.nickName}}</text>
					<image :src="sImgUrl+'index/fanhui_next@2x.png'"></image>
				</view>
			</view>

			<view class="row">
				<view>性别</view>
				<view class="right">
					<text v-if="user.sex == 0">未知</text>
					<text v-if="user.sex == 1">男</text>
					<text v-if="user.sex == 2">女</text>
				</view>
			</view>
			<view class="row">
				<view>手机号码</view>
				<view class="right">
					<text>{{user.phonenumber}}</text>
				</view>
			</view>
			<view class="row">
				<view>生日</view>
				<picker mode="date" :value="user.birthday" @change="bindDateChange">
					<view class="right">
						<text>{{user.birthday}}</text>
						<image :src="sImgUrl+'index/fanhui_next@2x.png'"></image>
					</view>
				</picker>
			</view>
			<view class="row">
				<view>居住地</view>
				<view class="right" @click="change(6)">
					<text>{{user.expertiseArea}}</text>
					<image :src="sImgUrl+'index/fanhui_next@2x.png'"></image>
				</view>
			</view>
			<view class="row">
				<view>个人简介</view>
				<view class="right" @click="change(7)">
					<text>{{user.introduce}}</text>
					<image :src="sImgUrl+'index/fanhui_next@2x.png'"></image>
				</view>
			</view>
		</view>
		<!-- 输入框弹窗 -->
		<uni-popup ref="inputDialog" type="dialog">
			<uni-popup-dialog ref="inputClose" mode="input" :title="text" placeholder="请输入"
				@confirm="dialogInputConfirm"></uni-popup-dialog>
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
				user: '',
				imgUrl: uni.getStorageSync('imgUrl'),
				sImgUrl: app.globalData.sImgUrl,
				type: 1,
				ossToken: '',
				array:['未知','男','女'],
				text:'修改昵称'
			}
		},
		methods: {
			change_avatar(){
				uni.chooseImage({
					count: 1, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album', 'camera'], //从相册选择
					success: function(res) {
						let Imgsrc = res.tempFilePaths[0];// 第一张图片
						let fileName = that.getFileName('sys/', Imgsrc); // 自定义上传后的文件名称
						that.upload("image",Imgsrc, fileName)
						that.type = 1
						that.dialogInputConfirm(fileName)
					}
				})
			},
			upload(type, path, stroeAs){
				index.getPublicUploadToken().then(res=>{
					var data = res.data;
					uni.uploadFile({
						url: data.host, //后台返回的阿里云存储的上传地址
						filePath: path,
						fileType: type,
						name: 'file',
						formData: {
							key: stroeAs, //文件名
							policy: data.policy, //后台获取超时时间
							OSSAccessKeyId: data.key, //后台获取临时ID
							success_action_status: '200', //让服务端返回200,不然，默认会返回204
							signature: data.signature //后台获取签名
						},
						success: res => {
							uni.showToast({
								title: '上传成功',
								icon: 'success',
								duration: 2000
							});
						},
						fail: err => {
							uni.showModal({
								content: err.errMsg,
								showCancel: false
							});
						}
					});
				}).catch(error=>{
					
				})
			},
			// 自定义文件夹（file）
			getFileName(file, filename) {
			    return (
			        file + Math.random()
			        .toString(36)
			        .substring(3, 20) + new Date().getTime() +
			        that.getSuffix(filename)
			    );
			},
			// 添加文件名后缀方法，例如 .png
			getSuffix(filename) {
			    let pos = filename.lastIndexOf('.');
			    let suffix = '';
			    if (pos != -1) {
			        suffix = filename.substring(pos);
			    }
				if(!suffix){
					suffix = '.png'
				}
			    return suffix;
			},
			bindPickerChange(e){
				that.type = 3
				that.dialogInputConfirm(e.detail.value)
			},
			bindDateChange(e){
				that.type = 5
				that.dialogInputConfirm(e.detail.value)
			},
			change(e) {
				switch (e) {
					case 2:
						that.text = '修改昵称'
						break;
					case 4:
						that.text = '修改手机号'
						break;
					case 6:
						that.text = '修改居住地'
						break;
					case 7:
						that.text = '修改个人简介'
						break;
				}
				that.type = e
				this.$refs.inputDialog.open()
			},
			getUserInfo() {
				index.userInfoCheck().then(res => {
					that.user = res.data
				}).catch(error => {

				})
			},
			dialogInputConfirm(val) {
				let data = '';
				switch (that.type) {
					case 1:
						data = {
							avatar: val
						}
						break;
					case 2:
						data = {
							nickName: val
						}
						break;
					case 3:
						data = {
							sex: val
						}
						break;
					case 4:
						data = {
							phonenumber: val
						}
						break;
					case 5:
						data = {
							birthday: val
						}
						break;
					case 6:
						data = {
							expertiseArea: val
						}
						break;
					case 7:
						data = {
							introduce: val
						}
						break;
				}
				index.userInfoSubmit(data).then(res => {
					that.getUserInfo()
				}).catch(error => {

				})
			},
			getPublicUploadToken() {
				index.getPublicUploadToken().then(res => {
					that.ossToken = res.data
				}).catch(error => {

				})
			}
		},
		onReady() {

		},
		onLoad() {
			that = this
		},
		onShow() {
			var pages = getCurrentPages()
			var page = pages[pages.length - 1];
			uni.setStorage({
				key: 'url',
				data: '/' + page.route,
				success: function() {
					getApp().isLogin().then(function() {
						that.getUserInfo()
						that.getPublicUploadToken()
					})
				}
			})
		}
	}
</script>

<style>
	@import url('../../static/css/mine_info.css');
</style>