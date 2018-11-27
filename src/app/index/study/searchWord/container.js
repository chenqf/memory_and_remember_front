// @flow Created by 陈其丰 on 2018/10/23.

import React,{PureComponent,Component} from 'react';
import {Card,SearchBar,Toast} from 'antd-mobile';
import { connect } from 'react-redux'
import {view as WordItem} from '@component/wordItem';
import {actions} from './index';


const mapStateToProps = (state, ownProps) =>{
    let {study} = state,
        {searchWord} = study,
        {item,loading,error} = searchWord;
    return {item,loading,error}
};

const mapDispatchToProps = dispatch => ({
    queryItem: q => dispatch(actions.fetchQueryItem({q}))
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
        this.props.queryItem(q)
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
                                <WordItem
                                    item={item}
                                    delete={false}
                                />
                            </Card.Body>
                        </Card>
                        :
                        null
                }
            </React.Fragment>
        )
    }
}