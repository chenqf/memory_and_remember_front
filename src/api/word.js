// @flow Created by 陈其丰 on 2018/11/22.
import http from '@http'


export default {
    //查询单个单词
    searchItem:(params = {})=>http.post('/word/search',params),
    //查询今日单词
    queryTodayWordList:(params = {})=>http.post('/word/queryByPreDate',params),
    //随机获取单词
    queryRandom:(params = {})=>http.post('/word/queryRandom',params),
    //更新单词创建时间
    updateCreateTime:(params = {})=>http.post('/word/updateCreateTime',params),
    //更新单词难以级别
    updateLevel:(params = {})=>http.post('/word/updateLevel',params),
    //删除单词
    deleteItem:(params = {})=>http.post('/word/delete',params),
    //查询所有单词
    queryAll:(params = {})=>http.post('/word/queryAll',params),
    //查询所有重点单词
    queryHard:(params = {})=>http.post('/word/queryHard',params),
    //获取所有单词数量
    queryAllCount:(params = {})=>http.post('/word/queryAllCount',params),
    //获取所有难词数量
    queryHardCount:(params = {})=>http.post('/word/queryHardCount',params),
}