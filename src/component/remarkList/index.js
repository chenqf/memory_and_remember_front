import React,{Component} from 'react';
import { Flex } from "antd-mobile";
import './index.scss'

class RemarkList extends Component {

    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className='remark-list'>
                {
                    this.props.items.map((item,index)=>
                        <Flex align="around" className="remark-list-item" key={index}>
                            <Flex.Item>{item.content}</Flex.Item>
                            {/*<i className="right fa fa-trash-o"/>*/}
                        </Flex>
                    )
                }
            </div>
        );
    }
}


export default RemarkList;