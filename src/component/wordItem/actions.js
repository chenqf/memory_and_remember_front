// @flow Created by 陈其丰 on 2018/11/14.

import * as actionTypes from './actionTypes';
import {word as wordApi} from '@api';
import {actions as wordAction } from '../../store/entities/word/index';


/*
 * 更新级别
 * */
export const fetchUpdateLevel = (item) => dispatch => {
    let level = item.level === 0 ? 1 : 0;
    let id = item.userWordId;
    dispatch({type:actionTypes.UPDATE_LEVEL_REQUEST});
    wordApi.updateLevel({level,id}).then(()=>{
        dispatch({type:actionTypes.UPDATE_LEVEL_SUCCESS});
        dispatch(wordAction.update({...item,level}));
    }).catch((error)=>{
        dispatch({type:actionTypes.UPDATE_LEVEL_FAILURE,payload:error});
    });
};

/*
 * 更新时间
 * */
export const fetchUpdateTime = (item,createTime) => dispatch => {
    dispatch({type:actionTypes.UPDATE_TIME_REQUEST});
    wordApi.updateCreateTime({id:item.userWordId,createTime}).then(()=>{
        dispatch({type:actionTypes.UPDATE_TIME_SUCCESS});
        dispatch(wordAction.update({...item,createTime}))
    }).catch((error)=>{
        dispatch({type:actionTypes.UPDATE_TIME_FAILURE,payload:error});
    });
};
/*
 * 删除
 * */
export const fetchDeleteItem = (wordId) => dispatch => {
    dispatch({type:actionTypes.DELETE_ITEM_REQUEST});
    wordApi.deleteItem({wordId}).then(()=>{
        dispatch(wordAction.deleteItem(wordId));
        dispatch({type:actionTypes.DELETE_ITEM_SUCCESS});
    }).catch((error)=>{
        dispatch({type:actionTypes.DELETE_ITEM_FAILURE,payload:error});
    });
};