// @flow Created by 陈其丰 on 2018/9/29.

export default {
    HTTP_BASE_URL:process.env.NODE_ENV === 'production' ? '//45.76.169.7:3001':`//${window.location.hostname}:3001`,
    HTTP_TIME_OUT:20000
}



