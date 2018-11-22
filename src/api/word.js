// @flow Created by 陈其丰 on 2018/11/22.
import http from '@http'


export default {
    queryRandom:(params = {})=>http.post('/word/queryRandom',params)
}