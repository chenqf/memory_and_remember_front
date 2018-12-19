// @flow Created by 陈其丰 on 2018/12/13.
import { createSelector } from 'reselect';
import * as R from 'ramda';

let getById = R.path(['entities', 'word', 'byId']);
let getWordIds = R.path(['allWord', 'wordIds']);

export const getItems = createSelector(
    [getWordIds,getById],
    (wordIds,byId)=>wordIds.filter(id=>byId.hasOwnProperty(id)).map(id=>byId[id])
);