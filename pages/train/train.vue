<template>
	<view class="bg">
		<!-- 上面的背景图 -->
		<image :src="sImgUrl+'train/bg.png'"></image>
	</view>
	<view>
		<view class="coach">
			<image :src="sImgUrl+'train/jk.png'" class="bgs"></image>
			<!-- 教练的头像 -->
			<view class="coach_head">
				<!-- 头像的图片 -->
				<image :src="sImgUrl+'train/coach_head.png'" mode="heightFix"></image>
				<!-- 点击发送信息给教练 -->
				<view class="message" @click="sendMessage">
					<image :src="sImgUrl+'train/icon_tj.png'" mode=""></image>
					<text>
						发送消息
					</text>
				</view>
			</view>
			<!--  -->
			<view class="coach_info">
				<view class="coach_up">
					<view class="coach_name">
						唐教练
					</view>
					<image :src="sImgUrl+'train/br.png'" mode=""></image>
				</view>

				<view class="coach_dowm">
					现任“四川云岭湾高尔夫球场管理公司”/首席顾问/专业教练；现任TPGA台湾长春职业高尔夫协会/职业选手/专业教练
				</view>
			</view>

			<!-- 分段器 -->
			<view class="lessons">
				<view class="option">
					<view v-for="(v,k) in items" :class="{active:k == current}" @click="change_items(k)">{{v}}<view class="line" v-if="k==current"></view></view>
				</view>
				<view class="divider2" />

				<view class="lessons_content">
					<!-- 私教课 -->
					<view class="private_lesson" v-show="current === 0">
						<view class="detail">
							<view class="lesson_title">
								<view class="state_bar">
									第1阶段
								</view>
								<text class="title_text">高飞球的打法</text>
							</view>

							<view :class="v.vis?['row','active']:['row']" @click="change_private(k)"
								v-for="(v,k) in info">
								<view class="title">
									<view class="bg">
										<text class="text_text">
											{{v.text}}
										</text>
										<image :src="sImgUrl+'icon_drop-down.png'"></image>
										<text class="text_date">{{v.date}}</text>
										<text class="done"> 已结束 </text>
									</view>
								</view>
								<view class="entry">
									<view class="rows" v-for="(val,key) in v.dsc">{{val}}</view>
								</view>
							</view>
						</view>

						<view class="blank">
							111
						</view>

						<view class="detail">
							<view class="lesson_title">
								<view class="state_bar">
									第1阶段
								</view>
								<text class="title_text">高飞球的打法</text>
							</view>
							<view :class="v.vis?['row','active']:['row']" @click="change_private(k)"
								v-for="(v,k) in info">
								<view class="title">
									<view class="bg">
										<text class="text_text">{{v.text}}</text>
										<image :src="sImgUrl+'icon_drop-down.png'"></image>
										<text class="text_date">{{v.date}}</text>
										<text class="not_done"> 未开始 </text>
									</view>
								</view>
								<view class="entry">
									<view class="rows" v-for="(val,key) in v.dsc">{{val}}</view>
								</view>
							</view>
						</view>
					</view>

					<!-- 公开课 -->
					<view class="public_lesson" v-show="current === 1">
						<view class="entry" :style="'height:'+height+'px;'">
							<navigator class="row" hover-class="none" url="/pages/course/detail">
								<image :src="sImgUrl+'train/class1.png'"></image>
								<view class="right">
									<view>劈击球技术分析及练习</view>
									<view class="second">
										<view>课程: 65</view>
										<view class="line"></view>
										<view>兑换: <text>免费</text></view>
									</view>
									<view class="bottom">
										<view class="left">
											<image :src="sImgUrl+'train/coach_head.png'"></image>
											<text>慕容教练</text>
										</view>
										<view class="other">
											<image :src="sImgUrl+'index/icon_drop-down@2x.png'"></image>
											<text>5693</text>
										</view>
									</view>
								</view>
							</navigator>
							<navigator class="row" hover-class="none" url="/pages/course/detail">
								<image
									src="https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/49a93cdf948b409b961ad6ccc6aa79bb_mergeImage.png">
								</image>
								<view class="right">
									<view>劈击球技术分析及练习</view>
									<view class="second">
										<view>课程: 65</view>
										<view class="line"></view>
										<view>兑换: <text>免费</text></view>
									</view>
									<view class="bottom">
										<view class="left">
											<image
												src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng729b13281764760d72ba674440b85fff9e74f8bd0f2c5e870b4ab216db428d0d">
											</image>
											<text>慕容教练</text>
										</view>
										<view class="other">
											<image :src="sImgUrl+'index/icon_drop-down@2x.png'"></image>
											<text>5693</text>
										</view>
									</view>
								</view>
							</navigator>
							<navigator class="row" hover-class="none" url="/pages/course/detail">
								<image
									src="https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/49a93cdf948b409b961ad6ccc6aa79bb_mergeImage.png">
								</image>
								<view class="right">
									<view>劈击球技术分析及练习</view>
									<view class="second">
										<view>课程: 65</view>
										<view class="line"></view>
										<view>兑换: <text>免费</text></view>
									</view>
									<view class="bottom">
										<view class="left">
											<image
												src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng729b13281764760d72ba674440b85fff9e74f8bd0f2c5e870b4ab216db428d0d">
											</image>
											<text>慕容教练</text>
										</view>
										<view class="other">
											<image :src="sImgUrl+'index/icon_drop-down@2x.png'"></image>
											<text>5693</text>
										</view>
									</view>
								</view>
							</navigator>
							<navigator class="row" hover-class="none" url="/pages/course/detail">
								<image
									src="https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/49a93cdf948b409b961ad6ccc6aa79bb_mergeImage.png">
								</image>
								<view class="right">
									<view>劈击球技术分析及练习</view>
									<view class="second">
										<view>课程: 65</view>
										<view class="line"></view>
										<view>兑换: <text>免费</text></view>
									</view>
									<view class="bottom">
										<view class="left">
											<image
												src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng729b13281764760d72ba674440b85fff9e74f8bd0f2c5e870b4ab216db428d0d">
											</image>
											<text>慕容教练</text>
										</view>
										<view class="other">
											<image :src="sImgUrl+'index/icon_drop-down@2x.png'"></image>
											<text>5693</text>
										</view>
									</view>
								</view>
							</navigator>
							<navigator class="row" hover-class="none" url="/pages/course/detail">
								<image :src="sImgUrl+'train/class1.png'"></image>
								<view class="right">
									<view>劈击球技术分析及练习</view>
									<view class="second">
										<view>课程: 65</view>
										<view class="line"></view>
										<view>兑换: <text>免费</text></view>
									</view>
									<view class="bottom">
										<view class="left">
											<image
												src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng729b13281764760d72ba674440b85fff9e74f8bd0f2c5e870b4ab216db428d0d">
											</image>
											<text>慕容教练</text>
										</view>
										<view class="other">
											<image :src="sImgUrl+'index/icon_drop-down@2x.png'"></image>
											<text>5693</text>
										</view>
									</view>
								</view>
							</navigator>
							<navigator class="row" hover-class="none" url="/pages/course/detail">
								<image
									src="https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/49a93cdf948b409b961ad6ccc6aa79bb_mergeImage.png">
								</image>
								<view class="right">
									<view>劈击球技术分析及练习</view>
									<view class="second">
										<view>课程: 65</view>
										<view class="line"></view>
										<view>兑换: <text>免费</text></view>
									</view>
									<view class="bottom">
										<view class="left">
											<image
												src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng729b13281764760d72ba674440b85fff9e74f8bd0f2c5e870b4ab216db428d0d">
											</image>
											<text>慕容教练</text>
										</view>
										<view class="other">
											<image :src="sImgUrl+'index/icon_drop-down@2x.png'"></image>
											<text>5693</text>
										</view>
									</view>
								</view>
							</navigator>
							<navigator class="row" hover-class="none" url="/pages/course/detail">
								<image
									src="https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/49a93cdf948b409b961ad6ccc6aa79bb_mergeImage.png">
								</image>
								<view class="right">
									<view>劈击球技术分析及练习</view>
									<view class="second">
										<view>课程: 65</view>
										<view class="line"></view>
										<view>兑换: <text>免费</text></view>
									</view>
									<view class="bottom">
										<view class="left">
											<image
												src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng729b13281764760d72ba674440b85fff9e74f8bd0f2c5e870b4ab216db428d0d">
											</image>
											<text>慕容教练</text>
										</view>
										<view class="other">
											<image :src="sImgUrl+'index/icon_drop-down@2x.png'"></image>
											<text>5693</text>
										</view>
									</view>
								</view>
							</navigator>
						</view>
					</view>

					<!-- 提问列表 -->
					<view class="questions_list" v-show="current === 2">
						<view class="ask">
							<image :src="sImgUrl+'train/icon_search.png'"></image>
							<view class="ask_content">训练遇到困难？向教练提问</view>
							<navigator hover-class="none" url="/pages/train/question">
								<view class="ask_send">
									<text>提问</text>
								</view>
							</navigator>
						</view>
						<view class="search">
							<input placeholder="输入问题关键词" v-model="word" placeholder-class="placeholder" />
							<image :src="sImgUrl+'find/search.png'"></image>
						</view>
						<view class="entry" v-for="item in msg">
							<navigator class="row" hover-class="none" url="/pages/msg/detail">
								<image
									src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng729b13281764760d72ba674440b85fff9e74f8bd0f2c5e870b4ab216db428d0d">
								</image>
								<view class="right">
									<view class="part1">
										<view>{{item.content}}</view>
									</view>
									<view class="part2">
										<view class="name">{{item.name}}</view>
										<view :class="item.solve=='已解答'?'solved':'not_solved'">{{item.solve}}</view>
									</view>
								</view>
							</navigator>
						</view>
					</view>
				</view>
			</view>
		</view>


	</view>


</template>

<script>
	var that;
	const app = getApp()
	export default {
		data() {
			return {
				items: ['私教课', '公开课', '提问列表'],
				info: [

					{
						text: '第1课 初级高尔夫教学计划',
						dsc: [
							'瞄球方向错误的纠正方法',
							'瞄球姿势错误的纠正方法'
						],
						date: '2023年12月25日（周日）',
						vis: true
					},
					{
						text: '第2课 头部过分移动的纠正方法',
						dsc: [
							'瞄球方向错误的纠正方法',
							'瞄球姿势错误的纠正方法'
						],
						date: '2023年12月25日（周日）',
						vis: false
					},
					{
						text: '第3课 手臂与身体不能协调一致的纠正方法',
						dsc: [
							'瞄球方向错误的纠正方法',
							'瞄球姿势错误的纠正方法'
						],
						date: '2023年12月25日（周日）',
						vis: false
					}
				],
				current: 0,
				indicatorDots: false,
				autoplay: false,
				interval: 2000,
				duration: 500,
				circular: false,
				type: 0,
				word: '',
				game: [],
				msg: [{
						content: '劈击球技术分析及练习，当球被打到果岭之后，要用哪种球杆打球？',
						name: "一号木",
						solve: '已解答',
					},
					{
						content: '劈击球技术分析及练习，当球被打到....',
						name: "二号木",
						solve: '已解答',
					},
					{
						content: '劈击球技术分析及练习，当球被打到....',
						name: "三号木",
						solve: '待解答',
					},
				],
				sImgUrl: app.globalData.sImgUrl,
				id: ''
			}
		},
		methods: {
			sendMessage() {

			},
			change_items(k){
				that.current = k
			},
			change_private(k) {
				for (let i in that.info) {
					if (i == k) {
						if (that.info[i].vis) {
							that.info[i].vis = false
						} else {
							that.info[i].vis = true
						}
					}
				}
			},
		},
		onLoad() {
			that = this

		},
		onShow() {
			that.id = uni.getStorageSync('train_id')
		},
		mounted() {

		},
		onPullDownRefresh() {
			setTimeout(() => function() {
				uni.stopPullDownRefresh()
			}, 1000)
		}
	}
</script>


<style lang="scss">
	@import '../../static/css/train.scss';
</style>