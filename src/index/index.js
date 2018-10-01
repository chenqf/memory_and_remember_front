// @flow Created by 陈其丰 on 2018/9/29.

import React,{Component} from 'react';
import {TabBar,NavBar,Icon,NoticeBar} from 'antd-mobile';
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

class Index extends Component{
    constructor(props){
        super(props);
        this.state = {
            selectedTab:''
        };
    }
    render(){
        return (
            <div>
                <NavBar
                    style={{background:'#222222'}}
                    mode="dark"
                    // leftContent="Back"
                    // rightContent={[
                    //     <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                    //     <Icon key="1" type="ellipsis" />,
                    // ]}
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