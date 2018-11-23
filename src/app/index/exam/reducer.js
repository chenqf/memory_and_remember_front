// @flow Created by 陈其丰 on 2018/11/14.


import * as actionTypes from './actionTypes';

const defaultState = {
    wordIds:[],
    loadingWord:false,
    loadWordError:null
};
export default (state = defaultState,action)=>{
    switch (action.type){
        //正在加载数据
        case actionTypes.FETCH_WORD_LIST_REQUEST:{
            return {wordIds:[],loadingWord:true,loadWordError:null}
        }
        //加载数据成功
        case actionTypes.FETCH_WORD_LIST_SUCCESS:{
            return {wordIds:action.payload,loadingWord:false,loadWordError:null}
        }
        //加载数据失败
        case actionTypes.FETCH_WORD_LIST_FAILURE:{
            return {...state,loadingWord:false,loadWordError:action.payload}
        }
        default:{
            return state;
        }
    }
}