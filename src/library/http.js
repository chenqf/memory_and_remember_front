// @flow Created by 陈其丰 on 2018/9/29.
import {Toast} from 'antd-mobile';
import axios from 'axios';
import Qs from 'qs';
import setting from '../config/index';
import auth from './auth';

axios.interceptors.request.use(function (config) {
    // let token = getToken();
    // 在发送请求之前做些什么
    config.baseURL = setting.HTTP_BASE_URL;
    config.withCredentials = true;
    config.timeout = setting.HTTP_TIME_OUT;
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
    config.data = Qs.stringify(config.data);
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});
// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    let data = response.data;
    let code = data.code;
    if(data.success){
        return data.data;
    }else{
        if(code === 888){
            auth.changeLogin(false);
        }
        // 对响应错误做点什么
        return Promise.reject(new Error(data.message));
    }
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error)
});

export default {
    post(url,params = {}){
        return  new Promise((resolve,reject)=>{
            axios.post(url, params).then((data)=>{
                resolve(data)
            }).catch((error)=>{
                reject(error);
            })
        })
    },
    get(url,params = {}){
        return new Promise((resolve,reject)=>{
            return axios.get(url, params).then((data)=>{
                resolve(data)
            })
        }).catch(function (error) {
            Toast.fail(error.message, 1);
        })
    }
}