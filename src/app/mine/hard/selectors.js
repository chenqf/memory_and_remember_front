// @flow Created by 陈其丰 on 2018/12/13.
import { createSelector } from 'reselect';

const getWordIds = (state)=>state.hardWord.wordIds;
const getById = (state)=>state.entities.word.byId;

export const getItems = createSelector(
    [getWordIds,getById],
    (wordIds,byId)=>wordIds.filter(id=>byId.hasOwnProperty(id)).map(id=>byId[id])
);