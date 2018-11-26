// @flow Created by 陈其丰 on 2018/11/6.
import React,{PureComponent,Component} from 'react';
import './index.scss'

function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

export default () => WrappedComponent => {
    return class WithTime extends Component{
        constructor(props){
            super(props);
            this.everyTimeId = 0;
            this.state = {
                flg:true,
                history:0,
                start:Date.now(),
                now:Date.now()
            };
            this.hiddenProperty = 'hidden' in document ? 'hidden' :
                'webkitHidden' in document ? 'webkitHidden' :
                    'mozHidden' in document ? 'mozHidden' :
                        null;
            this.visibilityChangeEvent = this.hiddenProperty.replace(/hidden/i, 'visibilitychange');
        }
        static displayName = `WithTime(${getDisplayName(WrappedComponent)})`;
        addListener = ()=>{
            this.setState({start:Date.now(),now:Date.now()});
            this.everyTimeId = setInterval(()=>{
                this.setState({now:Date.now()})
            },5000);
        };
        removeListener = ()=>{
            this.setState((prevState,props)=>{
                return {history:prevState.history + prevState.now - prevState.start}
            });
            window.clearInterval(this.everyTimeId);
        };
        onVisibilityChange = ()=>{
            if (!document[this.hiddenProperty]) {
                this.addListener();
            }else{
                this.removeListener();
            }
        };
        componentDidMount(){
            this.addListener();
            document.addEventListener(this.visibilityChangeEvent, this.onVisibilityChange);
        }
        componentWillUnmount(){
            window.clearInterval(this.everyTimeId);
            document.removeEventListener(this.visibilityChangeEvent, this.onVisibilityChange);
        }
        change = ()=>{
            this.setState((prevState,props)=>{
                return {flg:!prevState.flg}
            })
        };
        getTime = (time)=>{
            let s = 1000,
                m = 60 * s,
                h = 60 * m,
                d = 24 * h,
                str = '';
            if(time >= d){
                str = ~~(time / d) + '天';
                time = time % d;
            }
            if(time >= h){
                str = ~~(time / h) + '小时';
                time = time % h;
            }
            if(time >= m){
                str = ~~(time / m) + '分钟';
                time = time % m;
            }
            // if(time >= s){
            //     str = ~~(time / s) + '秒';
            //     time = time % s;
            // }
            return str ? str : '0分钟';
        };
        render(){
            let time = this.getTime(this.state.history + this.state.now - this.state.start);
            return (
                <React.Fragment>
                    {
                        this.state.flg ? <span className="ball" onClick={this.change}/> : <span onClick={this.change} className="ball ball-text">{time}</span>
                    }
                    <WrappedComponent/>
                </React.Fragment>
            )
        }
    }
}