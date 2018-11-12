import React,{Component} from 'react';
import {
    BrowserRouter as Router,
    // HashRouter as Router,
    Route,
    Link,
    Switch,
    Redirect,
    withRouter
} from "react-router-dom";
import PrivateRoute from './privateRoute';
import Auth from './auth';
import Login from './user/login/index';
import ErrorBoundary from './errorBoundary';
import {ScrollToTop} from '../component/scroll/index';
import {Modal} from 'antd-mobile';
import 'react-fontawesome';
import '../library/http';
import './index.scss'

const supportsHistory = 'pushState' in window.history;
const getConfirmation = (message, callback) => {
    Modal.alert('提示', message, [
        { text: 'Cancel', onPress: () => {
            callback(false)
        }, style: 'default' },
        { text: 'OK', onPress: () => {
            callback(true)
        } },
    ]);
};

class Container extends Component{
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
    addListener = ()=>{
        this.setState({start:Date.now(),now:Date.now()});
        this.everyTimeId = setInterval(()=>{
            this.setState({now:Date.now()})
        },10000);
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
            console.log('显示',Date.now());
        }else{
            this.removeListener();
            console.log('关闭',Date.now());
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
                {this.props.children}
            </React.Fragment>
        )
    }
}

const App = () => (

        <Router
            forceRefresh={!supportsHistory}
            getUserConfirmation={getConfirmation} // 切换页面时，提示是否切换
        >
            <Container>
                <ScrollToTop>
                    <ErrorBoundary>
                        <Switch>
                            {/*登录页面*/}
                            <Route exact path="/user/login" component={Login} />
                            {/*具有登录权限才可进入*/}
                            <PrivateRoute path="/" component={Auth} />
                        </Switch>
                    </ErrorBoundary>
                </ScrollToTop>
            </Container>
        </Router>
);


export default App;