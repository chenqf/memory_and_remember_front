// @flow Created by 陈其丰 on 2018/11/19.

import * as actionTypes from './actionTypes';

const defaultState = {
    byId:{},
    allIds:[]
};

export default (state = defaultState,action)=>{
    let {byId,allIds} = state;
    switch (action.type){
        case actionTypes.ADD:{
            let item = action.item,
                id = item.id;
            if(!byId.hasOwnProperty(id)){
                return state;
            }
            return {byId:{...byId,[id]:item},allIds:[...allIds,id]};
        }
        case actionTypes.ADD_LIST:{
           let items = action.items.filter((item)=>allIds.indexOf(item.id)<0);
           let addById = {};
           let addAllIds = [];
            items.forEach((item)=>{
                addById[item.id] = item;
                allIds.push(item.id)
            });
            return {byId:{...byId,...addById},allIds:[...allIds,...addAllIds]};
        }
        case actionTypes.UPDATE:{
            let item = action.item,
                id = item.id;
            return {...state,byId:{...byId,[id]:item}}
        }
        default:{
            return state;
        }
    }
}