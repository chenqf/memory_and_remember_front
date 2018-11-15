// @flow Created by 陈其丰 on 2018/10/23.

import React,{PureComponent,Component} from 'react';
import {Card,SearchBar} from 'antd-mobile';
import { connect } from 'react-redux'
import WordItem from '../../../../../component/wordItem/index'
import {actions as searchWordActions} from '../index';
import {actions as todayWordActions} from '../../todayWord/index';
import http from '../../../../../library/http';


const mapStateToProps = (state, ownProps) => ({
    item: state.searchWord.item
});

const mapDispatchToProps = dispatch => ({
    updateItem: item => dispatch(searchWordActions.updateSearchWord(item)),
    insertItemToTodayWord: item => dispatch(todayWordActions.insertTodayWordItem(item)),
});

@connect(
    mapStateToProps,
    mapDispatchToProps
)
export default class SearchContent extends Component{
    constructor(props){
        super(props);
    }
    searchWordHandler = (q)=>{
        http.post('/word/search', {q}).then((item)=> {
            this.props.updateItem(item);
            if(item.new){
                this.props.insertItemToTodayWord(item)
            }
        })
    };
    render(){
        let {item} = this.props;
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
                    item.text ?
                        <Card style={{marginTop:15}}>
                            <Card.Header
                                title={<span className="p5">基本释义</span>}
                                thumb={<i className="blue fa fa-star-o fa-lg"/>}
                            />
                            <Card.Body style={{minHeight:0}}>
                                <WordItem item={item} delete={false}/>
                            </Card.Body>
                        </Card>
                        :
                        null
                }
            </React.Fragment>
        )
    }
}