// @flow Created by 陈其丰 on 2018/9/30.

import React,{Component} from 'react';
import WordItem from '../wordItem/index';
class WordList extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }
    render(){
        return (
            <div>
                {
                    this.props.items.map((item)=>{
                        return <WordItem test={this.props.test} key={item.id} wordInfo={item}/>
                    })
                }
            </div>
        )
    }
}
export default WordList;