// @flow Created by 陈其丰 on 2018/10/18.
import React,{Component} from 'react';

export default ({isLoading, error}) => {
    if (isLoading) {
        return <div>Loading...</div>;
    }
    else if (error) {
        return <div>Sorry, there was a problem loading the page.</div>;
    }
    else {
        return null;
    }
}