// @flow Created by 陈其丰 on 2018/9/29.

import React,{Component} from 'react';
import {TabBar,NavBar,Icon,NoticeBar,Popover} from 'antd-mobile';
import FontAwesome from 'react-fontawesome';
import { withCookies, Cookies } from 'react-cookie';
import {
    HashRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
} from "react-router-dom";
import Mine from '../mine/index'
import Study from '../study/index'
import Test from '../test/index'
import Review from '../review/index'
import './index.css'
const Item = Popover.Item;

class Index extends Component{
    constructor(props){
        super(props);
        this.state = {
            startTime:0,
            visible:false,
            selectedTab:''
        };
    }
    handleVisibleChange = (visible) => {
        this.setState({
            visible,
        });
    };
    onSelect = (opt) => {
        if(opt.props.value === 'start'){
            this.setState({
                visible:false,
                startTime:Date.now()
            })
        }else{
            let startTime = this.state.startTime;
            let now = Date.now();
            this.setState({
                visible:false,
                startTime:0
            });
            let time = now - startTime;

        }
    };
    render(){
        return (
            <div>
                <NavBar
                    style={{background:'#222222'}}
                    mode="dark"
                    // leftContent="Back"
                    /*rightContent={
                        <Popover
                                 overlayClassName="index-page"
                                 overlayStyle={{ background:'#222',color: '#000' }}
                                 visible={this.state.visible}
                                 overlay={[
                                     (<Item key="0" value="start" icon={<i className="fa fa-hourglass-start"/>} data-seed="logId">开始学习</Item>),
                                     (<Item key="1" value="end" icon={<i className="fa fa-hourglass-end"/>} data-seed="logId">结束学习</Item>),
                                 ]}
                                 align={{
                                     overflow: { adjustY: 0, adjustX: 0 },
                                     offset: [-10, 0],
                                 }}
                                 onVisibleChange={this.handleVisibleChange}
                                 onSelect={this.onSelect}
                        >
                            <div style={{
                                height: '100%',
                                padding: '0 15px',
                                marginRight: '-15px',
                                display: 'flex',
                                alignItems: 'center',
                            }}
                            >
                                <Icon type="ellipsis" />
                            </div>
                        </Popover>
                    }*/
                >记忆大师</NavBar>
                <NoticeBar marqueeProps={{ loop: true, style: { padding: '0 7.5px' } }}>
                    Nothing is impossible to a willing heart
                </NoticeBar>
                <div>
                    <Route path="/study" component={Study} />
                    <Route path="/review" component={Review} />
                    <Route path="/test" component={Test} />
                    <Route path="/mine" component={Mine} />
                </div>

                <footer style={ {position: 'fixed', width: '100%', bottom: 0}}>
                    <TabBar
                        unselectedTintColor="#949494"
                        tintColor="#00b500"
                        barTintColor="white"
                    >
                        <TabBar.Item
                            title="学习"
                            key="study"
                            icon={<i className="fa fa-book fa-2x"/>}
                            selectedIcon={<i className="fa fa-book fa-2x" style={{color:'#00b500'}}/> }
                            // badge={1}
                            selected={this.state.selectedTab === 'study'}
                            onPress={() => {
                                this.setState({selectedTab:'study'});
                                this.props.history.replace('/study')
                            }}
                            data-seed="logId"
                        >
                        </TabBar.Item>
                        <TabBar.Item
                            icon={<i className="fa fa-bell-o fa-2x"/>}
                            selectedIcon={<i className="fa fa-bell fa-2x" style={{color:'#00b500'}}/> }
                            title="复习"
                            key="Koubei"
                            // badge={'new'}
                            selected={this.state.selectedTab === 'review'}
                            onPress={() => {
                                this.setState({selectedTab:'review'});
                                this.props.history.replace('/review')
                            }}
                            data-seed="logId1"
                        >
                        </TabBar.Item>
                        <TabBar.Item
                            icon={<i className="fa fa-pencil-square fa-2x"/>}
                            selectedIcon={<i className="fa fa-pencil-square fa-2x" style={{color:'#00b500'}}/> }
                            title="测验"
                            key="test"
                            // dot
                            selected={this.state.selectedTab === 'test'}
                            onPress={() => {
                                this.setState({selectedTab:'test'});
                                this.props.history.replace('/test')
                            }}
                        >
                        </TabBar.Item>
                        <TabBar.Item
                            icon={<i className="fa fa-user fa-2x"/>}
                            selectedIcon={<i className="fa fa-user fa-2x" style={{color:'#00b500'}}/> }
                            title="我"
                            key="my"
                            selected={this.state.selectedTab === 'my'}
                            onPress={() => {
                                this.setState({selectedTab:'my'});
                                this.props.history.replace('/mine')
                            }}
                        >
                        </TabBar.Item>
                    </TabBar>
                </footer>
            </div>
        )
    }
}

export default withCookies(Index);