// @flow Created by 陈其丰 on 2018/10/17.

export default {
    isCheck:false,
    isLogin:false,
    changeCheck(flg){
        this.isCheck = flg;
    },
    changeLogin(flg){
        console.log('auth 模块 将 登录状态变更为 ' + flg);
        this.isLogin = flg;
    }
}