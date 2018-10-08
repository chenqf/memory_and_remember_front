// @flow Created by 陈其丰 on 2018/9/29.
import React,{Component} from 'react';
import { Tabs, WhiteSpace } from 'antd-mobile';
import http from '../http';
import WordList from "../component/wordList/index";
class Review extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            allItems:Array.from({length:6}).map(()=>[]),
            items:[]
        };
    }
    componentWillMount(){
        http.post('/word/queryReviewNum',(data)=> {
            this.setState({
                allItems:data.items,
                items:data.items[0]
            });
        })
    }
    changeTabClick(tab,index){
        this.setState({
            items:this.state.allItems[index]
        })
    }
    render() {
        const tabs = [
            { title: '1st Day' },
            { title: '2nd Day' },
            { title: '4rd Day' },
            { title: '7th Day' },
            { title: '15th Day' },
            { title: '30th Day' }
        ];

        return (
            <div>
                <WhiteSpace />
                <Tabs onTabClick={this.changeTabClick.bind(this)} tabs={tabs} renderTabBar={props => <Tabs.DefaultTabBar {...props} page={3} />}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                        <WordList items={this.state.items}/>
                    </div>
                </Tabs>
                <WhiteSpace />
            </div>
        );
    }
}
export default Review;