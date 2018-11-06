// @flow Created by 陈其丰 on 2018/11/6.
import React,{PureComponent,Component} from 'react';
import Header from '../component/header/index';

export default (title = '记忆大师',back=false)=> {
    return (WrappedComponent)=> {
        return class extends Component{
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