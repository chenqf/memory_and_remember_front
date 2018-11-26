// @flow Created by 陈其丰 on 2018/11/6.
import React,{PureComponent,Component} from 'react';
import Header from '../component/header/index';

function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

const DEFAULT_OPTION = {
    title:'记忆大师',
    back:false
};

export default (options)=> {
    let {title,back} = {...DEFAULT_OPTION,...options};
    return (WrappedComponent)=> {
        return class WithHeader extends Component{
            static displayName = `WithHeader(${getDisplayName(WrappedComponent)})`;
            render(){
                return (
                    <React.Fragment>
                        <Header title={title} back={back}/>
                        <WrappedComponent {...this.props}/>
                    </React.Fragment>
                )
            }
        }
    }
}