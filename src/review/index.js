// @flow Created by 陈其丰 on 2018/9/29.
import React,{Component} from 'react';
import { Tabs, WhiteSpace ,WingBlank} from 'antd-mobile';
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
        http.post('/word/queryReview',({items})=> {
            this.setState({
                allItems:items
            });
        });
        http.post('/word/queryAll',({items})=> {
            this.setState({
                allDataItems:items,
                items
            });
        })
    }
    changeTabClick(tab,index){
        if(index){
            this.setState({
                items:this.state.allItems[index - 1]
            })
        }else{
            this.setState({
                items:this.state.allDataItems
            })
        }

    }
    render() {
        const tabs = [
            { title: '总复习' },
            { title: '第一天' },
            { title: '第二天' },
            { title: '第四天' },
            { title: '第七天' },
            { title: '第十五天' },
            { title: '第三十天' }
        ];

        return (
            <div>
                <WhiteSpace />
                <WingBlank>
                    <Tabs onTabClick={this.changeTabClick.bind(this)} tabs={tabs}  swipeable={false} renderTabBar={props => <Tabs.DefaultTabBar {...props} page={3} />}>
                        <div style={{ minHeight: '150px', backgroundColor: '#fff' ,paddingLeft:15,paddingRight:15}}>
                            <WhiteSpace />
                            {
                                this.state.items.length
                                    ?
                                    <WordList items={this.state.items}/>
                                    :
                                    <div style={{textAlign:'center',paddingTop:40}}>暂无需要复习的内容</div>
                            }
                            <WhiteSpace />
                        </div>
                    </Tabs>
                </WingBlank>
                <WhiteSpace />
            </div>
        );
    }
}
export default Review;