// @flow Created by 陈其丰 on 2018/10/18.
import React,{Component} from 'react';
import {NavBar} from 'antd-mobile';

class Header extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }
    render(){
        return (
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
            >{this.props.title}</NavBar>
        )
    }
}

export default Header;