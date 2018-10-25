// @flow Created by 陈其丰 on 2018/10/25.
import React,{PureComponent,Component} from 'react';
import {TabBar} from 'antd-mobile';
import {
    HashRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
} from "react-router-dom";
const nav = [
    {
        title:'学习',
        key:'study',
        icon:<i className="fa fa-book fa-2x"/>,
        selectedIcon:<i className="fa fa-book fa-2x" style={{color:'#00b500'}}/>,
        path:'/index/study'
    },
    {
        title:'复习',
        key:'review',
        icon:<i className="fa fa-bell fa-2x"/>,
        selectedIcon:<i className="fa fa-bell fa-2x" style={{color:'#00b500'}}/>,
        path:'/index/review'
    },
    {
        title:'测验',
        key:'test',
        icon:<i className="fa fa-pencil-square fa-2x"/>,
        selectedIcon:<i className="fa fa-pencil-square fa-2x" style={{color:'#00b500'}}/>,
        path:'/index/test'
    },
    {
        title:'我的',
        key:'mine',
        icon:<i className="fa fa-user fa-2x"/>,
        selectedIcon:<i className="fa fa-user fa-2x" style={{color:'#00b500'}}/>,
        path:'/index/mine'
    }
];

class Footer extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }
    // TODO TabBar 组件下不能接收 Route 组件，很蛋疼啊
    render(){
        return (
            <footer className="index-footer">
                {
                    nav.map((item)=>{
                        return (
                            <Route
                                key={item.key}
                                path={item.path}
                                children={({ match }) =>{
                                    if(!match){
                                        return null;
                                    }
                                    return (
                                        <TabBar
                                            unselectedTintColor="#949494"
                                            tintColor="#00b500"
                                            barTintColor="white"
                                        >
                                            {
                                                nav.map((i)=><TabBar.Item
                                                    icon={i.icon}
                                                    selectedIcon={i.selectedIcon }
                                                    title={i.title}
                                                    key={i.key}
                                                    selected={i.path === match.path}
                                                    onPress={() => {
                                                        this.props.history.replace(i.path)
                                                    }}
                                                />)
                                            }
                                        </TabBar>
                                    )
                                }}

                            />
                        )
                    })
                }
            </footer>
        )
    }
}
export default withRouter(Footer);