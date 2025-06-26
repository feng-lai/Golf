<template>
	<view>
		<view class="status_bar" :style="'height:'+statusBarHeight+'px;'">
			<!-- 这里是状态栏 -->
		</view>
		<view class="part" :style="'height:'+nav+'px;' ">
			<navigator class="img" hover-class="none" open-type="navigateBack">
				<image :src="sImgUrl+'icon_return.png'"></image>
			</navigator>
			<text>私教课详情</text>
		</view>
		<view class="pro">
			<view class="row">问题1：<text>正确的握杆方式是怎样的？</text></view>
			<view class="row">问题2：<text>正确的握杆方式是怎样的？</text></view>
		</view>
		<view class="detail first">
			<view class="row">
				<view class="title">问题1</view>
				<view>当球被打到果岭之后，要用那种球杆打球?</view>
				<view class="result">关联解决方案 2 个</view>
			</view>
			<view class="row">
				<view class="title">描述</view>
				<view>手臂弯曲问题影响击球发力，需要特别特别特别的训练总是打不远</view>
				<video src=""></video>
				<view class="img">
					<image :src="sImgUrl+'bj.png'"></image>
					<image :src="sImgUrl+'bj.png'"></image>
				</view>
			</view>
			<view class="row">
				<view class="title">问题效果描述</view>
				<view class="tag">
					<text>打不远</text>
					当球被打到果岭之后，要用那种球杆打球?
				</view>
				<view class="tag">
					<text>0基础</text>
				</view>
			</view>
			<view class="row reason">
				<view class="title">问题原因</view>
				<view class="tag">
					<text>击球原理</text>
					一号木，球低脚高，泥地，二级草-陷入
				</view>
				<view class="tag">
					<text>击球角度</text>
					过平
				</view>
			</view>
			<view class="row">
				<view class="title">点评与总结</view>
				<view>1.  注意胳膊</view>
				<view>2. 注意手臂挥舞及形体转角的发力</view>
			</view>
			<view class="plan">
				<view class="title">解决方案</view>
				<view class="entry">
					<view class="rows">
						<view class="top">
							<text>1. 击球训练</text>
							<image :src="sImgUrl+'edit.png'"></image>
						</view>
						<view class="teach">
							<view class="text">
								<view class="line"></view>
								<text>指导教学</text>
							</view>
							<view>手臂弯曲问题影响击球发力，需要特别的训练总是打不远</view>
						</view>
						<video src="" :poster="sImgUrl+'bj.png'"></video>
						<view class="img">
							<image :src="sImgUrl+'bj.png'"></image>
							<image :src="sImgUrl+'bj.png'"></image>
						</view>
						<view class="teach">
							<view class="text">
								<view class="line"></view>
								<text>训练要点</text>
							</view>
							<view>1.  注意胳膊</view>
							<view>2. 注意手臂挥舞及形体转角的发力</view>
						</view>
					</view>
					<view class="rows">
						<view class="top">
							<text>2. 击球训练</text>
							<image :src="sImgUrl+'edit.png'"></image>
						</view>
						<view class="teach">
							<view class="text">
								<view class="line"></view>
								<text>指导教学</text>
							</view>
							<view>手臂弯曲问题影响击球发力，需要特别的训练总是打不远</view>
						</view>
						<video src="" :poster="sImgUrl+'bj.png'"></video>
						<view class="img">
							<image :src="sImgUrl+'bj.png'"></image>
							<image :src="sImgUrl+'bj.png'"></image>
						</view>
						<view class="teach">
							<view class="text">
								<view class="line"></view>
								<text>训练要点</text>
							</view>
							<view>1.  注意胳膊</view>
							<view>2. 注意手臂挥舞及形体转角的发力</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="detail">
			<view class="row">
				<view class="title">问题2</view>
				<view>当球被打到果岭之后，要用那种球杆打球?</view>
				<view class="result">关联解决方案 2 个</view>
			</view>
			<view class="row">
				<view class="title">描述</view>
				<view>手臂弯曲问题影响击球发力，需要特别特别特别的训练总是打不远</view>
				<video src="" :poster="sImgUrl+'bj.png'"></video>
				<view class="img">
					<image :src="sImgUrl+'bj.png'"></image>
					<image :src="sImgUrl+'bj.png'"></image>
				</view>
			</view>
			<view class="row">
				<view class="title">问题效果描述</view>
				<view class="tag">
					<text>打不远</text>
					当球被打到果岭之后，要用那种球杆打球?
				</view>
				<view class="tag">
					<text>0基础</text>
				</view>
			</view>
			<view class="row reason">
				<view class="title">问题原因</view>
				<view class="tag">
					<text>击球原理</text>
					一号木，球低脚高，泥地，二级草-陷入
				</view>
				<view class="tag">
					<text>击球角度</text>
					过平
				</view>
			</view>
			<view class="row">
				<view class="title">点评与总结</view>
				<view>1.  注意胳膊</view>
				<view>2. 注意手臂挥舞及形体转角的发力</view>
			</view>
			<view class="plan">
				<view class="title">解决方案</view>
				<view class="entry">
					<view class="rows">
						<view class="top">
							<text>1. 击球训练</text>
							<image :src="sImgUrl+'edit.png'"></image>
						</view>
						<view class="teach">
							<view class="text">
								<view class="line"></view>
								<text>指导教学</text>
							</view>
							<view>手臂弯曲问题影响击球发力，需要特别的训练总是打不远</view>
						</view>
						<video src="" :poster="sImgUrl+'bj.png'"></video>
						<view class="img">
							<image :src="sImgUrl+'bj.png'"></image>
							<image :src="sImgUrl+'bj.png'"></image>
						</view>
						<view class="teach">
							<view class="text">
								<view class="line"></view>
								<text>训练要点</text>
							</view>
							<view>1.  注意胳膊</view>
							<view>2. 注意手臂挥舞及形体转角的发力</view>
						</view>
					</view>
					<view class="rows">
						<view class="top">
							<text>2. 击球训练</text>
							<image :src="sImgUrl+'edit.png'"></image>
						</view>
						<view class="teach">
							<view class="text">
								<view class="line"></view>
								<text>指导教学</text>
							</view>
							<view>手臂弯曲问题影响击球发力，需要特别的训练总是打不远</view>
						</view>
						<video src="" :poster="sImgUrl+'bj.png'"></video>
						<view class="img">
							<image :src="sImgUrl+'bj.png'"></image>
							<image :src="sImgUrl+'bj.png'"></image>
						</view>
						<view class="teach">
							<view class="text">
								<view class="line"></view>
								<text>训练要点</text>
							</view>
							<view>1.  注意胳膊</view>
							<view>2. 注意手臂挥舞及形体转角的发力</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	var that
	const app = getApp()
	export default {
		data() {
			return {
				nav:'',
				sImgUrl:app.globalData.sImgUrl,
				statusBarHeight:''
			}
		},
		methods: {
			
		},
		onShow() {
			// #ifdef MP-WEIXIN
			that.nav = uni.getMenuButtonBoundingClientRect().height
			that.statusBarHeight = wx.getSystemInfoSync().statusBarHeight
			// #endif
		},
		onLoad() {
			that = this
		}
	}
</script>

<style>
	@import url('../../static/css/course_detail.css');
</style>