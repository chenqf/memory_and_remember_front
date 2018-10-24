import React,{Component} from 'react';
import {  TextareaItem ,Flex,Button ,Toast} from "antd-mobile";
import http from '../../library/http';
import './index.scss'

class Remark extends Component {

    constructor(props){
        super(props);
        this.state = {
            content:''
        }
    }
    submitRemark(){
        let value = this.state.content;
        if(!value){
            return false;
        }
        http.post('/remark/insert',{content:value}).then((id)=>{
            if(typeof id !== 'number'){
                return false;
            }
            this.setState({
                content:''
            });
            Toast.success('添加成功~',1.5)
        });

    }
    changeRemark(value){
        this.setState({
            content:value
        })
    }
    render() {
        return (
            <div className={this.props.className ? `${this.props.className } remark`:'remark' }>
                {
                    this.props.items.map((item,index)=>
                        <Flex align="around" className="remark-item" key={index}>
                            <Flex.Item>{item.content}</Flex.Item>
                            {/*<i className="right fa fa-trash-o"/>*/}
                        </Flex>
                    )
                }
                {
                    this.props.add ?
                        <Flex align="start" className="border-b">
                            <Flex.Item>
                                <TextareaItem
                                    value={this.state.content}
                                    onChange={this.changeRemark.bind(this)}
                                    className="remark"
                                    placeholder="请输入备注"
                                    autoHeight
                                />
                            </Flex.Item>
                            <Button style={{marginLeft:5,marginTop:8}} type="primary" icon="check" size="small" onClick={this.submitRemark.bind(this)}>添加</Button>
                        </Flex>
                        :
                        null
                }

            </div>
        );
    }
}


export default Remark;