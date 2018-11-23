// @flow Created by 陈其丰 on 2018/11/23.
import React from 'react';
function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}
export default function mapProps(mapFn) {
    return (WrappedComponent)=>{
        return class WithMapProps extends Component{
            constructor(props){
                super(props);
                this.state = {};
            }
            static displayName = `WithMapProps(${getDisplayName(WrappedComponent)})`;
            render() {
                return <WrappedComponent {...mapFn(this.props)}/>
            }
        }
    }
}