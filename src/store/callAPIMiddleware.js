// @flow Created by 陈其丰 on 2018/12/13.


export default ({dispatch,getState})=> next => action =>{
    const {
        params = {},
        types,
        callAPI,
        shouldCallApi = ()=>true,
        beforeDispatchSuccess = ()=>{},
        afterDispatchSuccess = ()=>{},
        pickPayload = (data)=>data
    } = action;

    if (!types) {
        // Normal action: pass it on
        return next(action)
    }
    if (
        !Array.isArray(types) ||
        types.length !== 3 ||
        !types.every(type => typeof type === 'string')
    ) {
        throw new Error('Expected an array of three string types.')
    }

    if (typeof callAPI !== 'function') {
        throw new Error('Expected callAPI to be a function.')
    }
    if (!shouldCallApi(getState())) {
        return
    }
    const [ requestType, successType, failureType ] = types;
    dispatch({
        type: requestType
    });
    return callAPI(params).then((data)=>{
        beforeDispatchSuccess(data,dispatch);
        dispatch({
            type:successType,
            payload:pickPayload(data)
        });
        afterDispatchSuccess(data,dispatch);
    }).catch((err)=>{
        dispatch({
            type:failureType,
            payload:err
        })
    });
}