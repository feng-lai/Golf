import request from '@/api/request.js'
export default {
	//获取字典内容
	getDictionary(data) {
		// 传入的data对象  {ip:'121.00.00.01'}; 
		return request.get("/dictionary/get", {
			params: data
		});
	},
	//post请求
	postData(data) {
		// 传入的data对象  {ip:'xxxxxx'}; 
		return request.post("/ip/getIpInfo.php", data);
	},
	//put请求
	putData(data) {
		// 传入的data对象  {ip:'xxxxxx'}; 
		//put方法大部分会以拼接地址的形式使用 如:request.put("/test/getInfo.php?id="+4)
		return request.put("/ip/getIpInfo.php", data);
	},
	//delete请求
	deleteData(data) {
		// 传入的data对象  {ip:'xxxxxx'}; 
		//delete方法大部分会以拼接地址的形式使用 如:request.delete("/test/getInfo.php?id="+4)
		return request.delete("/ip/getIpInfo.php", data);
	},

	//注册
	register(data) {
		// 传入的data对象  {ip:'xxxxxx'}; 
		return request.post("/mobile/register", data);
	},

	//发送验证码
	sendCode(data) {
		// 传入的data对象  {ip:'xxxxxx'}; 
		return request.get("/mobile/sendCode", {
			params: data
		});
	},

	//登录
	login(data) {
		return request.post("/mobile/login", data);
	},

	updateInstructorInfo(data) {
		return request.post("/mobile/updateInstructorInfo", data);
	},

	getGameDetail(data) {
		return request.get("/mobile/student/index/article/detail/" + data.id, data);
	},

	//获取近期赛事
	getGame(data) {
		return request.get("/mobile/student/index/articles", {
			params: data
		});
	},
	//获取即将训练课程
	getCourse(data) {
		return request.get("/mobile/student/index/myCourse", {
			params: data
		});
	},
	//获取近期完成的训练课程
	getFinishCourse(data) {
		return request.get("/mobile/student/index/finishCourse", {
			params: data
		});
	},
	//获取我的教练
	getCoach(data) {
		return request.get("/mobile/student/index/myInstructor", {
			params: data
		});
	},
	//获取公开课
	getOpenCourse(data) {
		return request.get("/mobile/student/index/openCourse", {
			params: data
		});
	},
	//获取当前登录用户信息
	getUser(data) {
		return request.get("/mobile/userInfo", {
			params: data
		});
	},
	//获取微信小程序 unionid
	getUnionIdWithMiniProgram(data) {
		return request.get("/mobile/getUnionIdWithMiniProgram", {
			params: data
		});
	},
	//微信授权登录
	loginWithMiniProgram(data) {
		return request.get("/mobile/loginWithMiniProgram", {
			params: data
		});
	},
	//微信小程序用户绑定账号
	bindWxMp(data) {
		return request.get("/mobile/bindWxMp", {
			params: data
		});
	},
	//启动页
	start(data) {
		return request.get("/mobile/index/banner", {
			params: data
		});
	},
	//获取公有上传资源token
	getPublicUploadToken(data) {
		return request.get("/mobile/oss/getPublicUploadToken", {
			params: data
		});
	},
	//获取公开url地址
	getPublicUrl(data) {
		return request.get("/mobile/oss/getPublicUrl", {
			params: data
		});
	},

	//我的训练总计
	myCourse_center(data) {
		return request.get("/mobile/student/center/myCourse", {
			params: data
		});
	},

	//添加计分记录
	scoreRecord(data) {
		return request.post("/mobile/student/index/scoreRecord", data);
	},

	//教练详情
	coachDetail(data) {
		return request.get("/mobile/student/index/instructor/detail/"+data);
	},
	
	//邀请信息教练详情
	bindInstructorInfo(data){
		return request.get("/mobile/instructor/stu/stu/bindInstructorInfo",{
			params: data
		});
	},
	
	//绑定教练
	bindCaoch(data){
		return request.get("/mobile/instructor/stu/stu/bindStu", {
			params: data
		});
	},
	
	//历史计分
	historyPlay(data){
		return request.get("/mobile/student/index/scoreRecord/page", {
			params: data
		});
	},
	
	//计分详情
	playDetail(data){
		return request.get("/mobile/student/index/scoreRecord/"+data);
	},
	
	//我的测评统计
	evaluationStatistics(data){
		return request.get("/mobile/stu/evaluation/statistics");
	},
	
	//获取图片地址
	getImgUrl(){
		return request.get("/dictionary/get?name=sys_config_values");
	},
	
	//获取所有公开课包
	storehouseAllPackagePage(data){
		return request.get("/storehouse/allPackagePage", {
			params: data
		});
	},
	
	//获取公开课标签
	getTag(){
		return request.get("/dictionary/get?name=open_class_tags");
	},
	
	//训练时间
	getTrainCourse(data){
		return request.get("/mobile/student/center/coursePage", {
			params: data
		});
	},
	
	//编辑用户昵称
	userInfoSubmit(data){
		return request.post("/mobile/instructor/center/userInfoSubmit", data);
	},
	
	//获取审核信息
	userInfoCheck(){
		return request.get("/mobile/instructor/center/userInfoCheck");
	},
	
	//私教课列表
	courseOnlyStu(data){
		return request.get("/storehouse/courseOnlyStu",{
			params: data
		});
	},
	//获取设置
	setting(data){
		return request.get("/mobile/setting",{
			params: data
		});
	}
	
}