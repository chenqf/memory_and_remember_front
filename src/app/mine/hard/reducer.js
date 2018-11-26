// @flow Created by 陈其丰 on 2018/11/14.


import * as actionTypes from './actionTypes';

const defaultState = {
    wordIds:[],
    loading:true,
    loadWordError:null
};
export default (state = defaultState,action)=>{
    switch (action.type){
        //正在加载数据
        case actionTypes.FETCH_WORD_LIST_REQUEST:{
            return {...state,loading:true,loadWordError:null}
        }
        //加载数据成功
        case actionTypes.FETCH_WORD_LIST_SUCCESS:{
            return {wordIds:action.payload,loading:false,loadWordError:null}
        }
        //加载数据失败
        case actionTypes.FETCH_WORD_LIST_FAILURE:{
            return {...state,loading:false,loadWordError:action.payload}
        }
        case actionTypes.EMPTY_WORD_LIST:{
            return {wordIds:[],loading:false,loadWordError:null}
        }
        default:{
            return state;
        }
    }
}