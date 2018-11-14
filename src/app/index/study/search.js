// @flow Created by 陈其丰 on 2018/10/23.

import React,{PureComponent,Component} from 'react';
import {Card,SearchBar} from 'antd-mobile';
import WordItem from '../../../component/wordItem/index'
import http from '../../../library/http';

class SearchContent extends Component{
    constructor(props){
        super(props);
        this.state = {
            wordInfo:{}
        };
    }
    searchWordHandler = (q)=>{
        http.post('/word/search', {q}).then((data)=> {
            this.setState({
                wordInfo:data
            });
        })
    }
    render(){
        let {wordInfo} = this.state;
        return (
            <React.Fragment>
                <Card>
                    <Card.Header
                        title={<span className="p5">单词搜索</span>}
                        thumb={<i className="blue fa fa-search-plus fa-lg"/>}
                        // extra={<span>this is extra</span>}
                    />
                    <Card.Body>
                        <SearchBar
                            placeholder="search English word"
                            onSubmit={this.searchWordHandler}
                        />
                    </Card.Body>
                </Card>
                {
                    wordInfo.text ?
                        <Card style={{marginTop:15}}>
                            <Card.Header
                                title={<span className="p5">基本释义</span>}
                                thumb={<i className="blue fa fa-star-o fa-lg"/>}
                            />
                            <Card.Body style={{minHeight:0}}>
                                <WordItem wordInfo={wordInfo}/>
                            </Card.Body>
                        </Card>
                        :
                        null
                }
            </React.Fragment>
        )
    }
}
export default SearchContent;