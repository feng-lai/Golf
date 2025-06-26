import Request from '@/js_sdk/luch-request/luch-request/index.js' 
//注意uni_modules文件夹有两层luch-request

import {
	TOKEN,
    BASE_URL,
    MP_API_URL,
    USER_INFO,
    SYSTEM_CONFIG
} from '@/api/config.js';

const http = new Request({
  baseURL: MP_API_URL, 
  timeout: 300000, //超时时长5分钟,
  header: {
    'Content-Type': 'application/json;charset=UTF-8;'
  }
})

//请求拦截器
http.interceptors.request.use((config) => { // 可使用async await 做异步操作
	uni.showLoading()
  const token = uni.getStorageSync(TOKEN);
  if (token) {
    config.header={
      "Authorization":token
    }
  }
  if (config.method === 'POST') {
    config.data = JSON.stringify(config.data);
  }
  return config
}, error => {
  return Promise.resolve(error)
})

// 响应拦截器
http.interceptors.response.use((response) => {
	uni.hideLoading()
  var code = response.statusCode.toString();
  var startChar = code.charAt(0);
  if (startChar == '2') {
    if(response.data.code == 200){
      return response.data
    }else if(response.data.code == 401){
      uni.clearStorageSync();
	  let url = uni.getStorageSync('url')
	  if(url){
		  uni.navigateTo({
		    url: url
		  })
	  }else{
		  uni.navigateTo({
		    url: '/pages/start/start'
		  })
	  }
      
      return Promise.resolve(error)
    }else{
		uni.showToast({
			title:response.data.msg,
			icon:'none'
		})
		return Promise.resolve(error)
    }
  } 
  
}, (error) => {
  return Promise.resolve(error)
})
export default http;