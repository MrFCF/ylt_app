import axios from "axios"
axios.defaults.baseURL = '/api/'
axios.defaults.timeout = 5000
axios.defaults.headers.post['content-Type'] = 'application/json;charset=UTF-8'


/**
 * post方法,对应post请求
 * @desc 登录页
 * @param {string} url [请求的url地址]
 * @param {Object} data [请求的携带的参数]
 * 
 * */

export function loginPw(data){
    return axios({
		url:`/loginPw`,
		method:'post',
		params:data
	})
}