// @flow Created by 陈其丰 on 2018/11/19.

import * as actionTypes from './actionTypes';

const defaultState = {
    byId:{},
    allIds:[],
    allNum:0,
    hardNum:0
};

export default (state = defaultState,action)=>{
    let {byId,allIds} = state;
    switch (action.type){
        case actionTypes.ADD:{
            let item = action.payload;
            let id = item.id,
                newer = item.new;
            if(byId.hasOwnProperty(id)){
                return state;
            }
            let {allNum} = state;
            if(allNum && newer){
                allNum++
            }
            return { ...state,byId:{...byId,[id]:item},allIds:[...allIds,id] ,allNum};
        }
        case actionTypes.ADD_LIST:{
            let items = action.payload.filter((item)=>!byId.hasOwnProperty(item.id));
            let addById = {};
            let addAllIds = [];
            items.forEach((item)=>{
                addById[item.id] = item;
                addAllIds.push(item.id)
            });
            return {...state,byId:{...byId,...addById},allIds:[...allIds,...addAllIds]};
        }
        case actionTypes.UPDATE:{
            let {hardNum,byId} = state;
            let item = action.payload,
                id = item.id,
                level = item.level;
            let oldItem = byId[id],
                oldLevel = oldItem.level;
            if(hardNum && oldLevel !== level){
                hardNum = hardNum + (level ? 1 : -1);
            }
            return {...state,byId:{...byId,[id]:item},hardNum}
        }
        case actionTypes.DELETE:{
            let {payload:id} = action;
            let {byId,allIds,allNum,hardNum} = state;
            let item = byId[id];
            delete byId[id];
            let ids = allIds.filter((i)=>i !== id);
            allNum && (allNum = allNum - 1);
            hardNum && item.level === 1 && (hardNum = hardNum - 1);
            return {...state,byId:{...byId},allIds:[...ids],allNum,hardNum};
        }
        case actionTypes.UPDATE_ALL_COUNT:{
            let {payload} = action;
            return {...state,allNum:payload}
        }
        case actionTypes.UPDATE_HARD_COUNT:{
            let {payload} = action;
            return {...state,hardNum:payload}
        }
        default:{
            return state;
        }
    }
}