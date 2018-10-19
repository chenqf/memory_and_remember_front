// @flow Created by 陈其丰 on 2018/10/18.
import React,{Component} from 'react';
import {NavBar} from 'antd-mobile';
import PropTypes from 'prop-types';
import {
    HashRouter as Router,
    Route,
    Link,
    Switch,
    Redirect,
    withRouter
} from "react-router-dom";

class Header extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }
    back(){
        this.props.history.goBack();
    }
    render(){
        let {back} = this.props;
        return (
            <NavBar
                style={{background:'#222222'}}
                mode="dark"
                leftContent={back ? <i onClick={this.back.bind(this)} className="fa fa-angle-left fa-2x pl15 pr15" style={{marginLeft:-15}}/> : null}
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

Header.propTypes = {
    title:PropTypes.string,
    back: PropTypes.bool,
    // back: PropTypes.oneOfType([
    //     PropTypes.bool,
    //     PropTypes.element
    // ]),
};
Header.defaultProps = {
    title:'记忆大师',
    back:false
};

export default withRouter(Header);