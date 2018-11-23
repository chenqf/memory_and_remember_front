// @flow Created by 陈其丰 on 2018/11/23.
import React from 'react';
function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}
/**
 * 应对新老组件切换
 * 新老组件props 不同
 * 使用 convertProps 作为适配器
 * 转换props
 */
export default function convertProps(mapFn) {
    return (Com)=>{
        return class ConvertProps extends Component{
            constructor(props){
                super(props);
                this.state = {};
            }
            static displayName = `ConvertProps(${getDisplayName(Com)})`;
            render() {
                return <Com {...mapFn(this.props)}/>
            }
        }
    }
}