// @flow Created by 陈其丰 on 2018/10/26.
import React,{PureComponent,Component} from 'react';
import Loadable from "react-loadable";
import AsyncLoading from '../component/asyncLoading/index'


export default (loader)=>Loadable({
    loader,
    loading: AsyncLoading
});
