// @flow Created by 陈其丰 on 2018/11/15.

const {resolve} = require('path');

module.exports = {
    '@app':resolve(__dirname, '../src/app'),
    '@component':resolve(__dirname, '../src/component'),
    '@hot':resolve(__dirname, '../src/hot'),
    '@library':resolve(__dirname, '../src/library'),
    '@http':resolve(__dirname, '../src/library/http.js'),
    '@api':resolve(__dirname, '../src/api/index.js'),
    '@entities':resolve(__dirname, '../src/store/entities'),
    '@component/wordList':resolve(__dirname, '../src/component/wordList/index.js'),
    '@component/wordItem':resolve(__dirname, '../src/component/wordItem/index.js'),
};