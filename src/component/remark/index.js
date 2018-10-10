import React,{Component} from 'react';
import {  TextareaItem ,Flex,Button } from "antd-mobile";
import http from '../../http';
import './index.css'

class Remark extends Component {

    constructor(props){
        super(props);
    }
    submitRemark(){
        let value = document.getElementById('remark-content').value;
        if(!value){
            return false;
        }
        http.post('/remark/insert',{content:value}).then((id)=>{
            if(typeof id !== 'number'){
                return false;
            }
            window.location.reload();
        });

    }
    render() {
        return (
            <div className="remark">
                {
                    this.props.list.map((item,index)=>
                        <Flex align="around" className="remark-item" key={index}>
                            <Flex.Item>{item.content}</Flex.Item>
                            {/*<i className="right fa fa-trash-o"/>*/}
                        </Flex>
                    )
                }
                {
                    this.props.add ?
                        <Flex align="start" className="borderb">
                            <Flex.Item>
                                <TextareaItem
                                    className="remark"
                                    id="remark-content"
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