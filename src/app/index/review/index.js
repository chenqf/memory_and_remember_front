// @flow Created by 陈其丰 on 2018/9/29.
import React,{Component} from 'react';
import { Tabs, WhiteSpace ,WingBlank,Toast,SegmentedControl} from 'antd-mobile';
import http from '@http';
import WordList from "@component/wordList";
import RemarkList from "../../../component/remarkList/index";
class Review extends Component {
    constructor(props){
        super(props);
        this.state = {
            over:false,
            tabType:'all',
            items:[],
            remark:[],
            all:{selectedIndex:0},
            one:{selectedIndex:0},
            two:{selectedIndex:0},
            four:{selectedIndex:0},
            seven:{selectedIndex:0},
            fifteen:{selectedIndex:0},
            thirty:{selectedIndex:0}
        };
    }
    getWordAllReview(){
        return http.post('/word/queryAllReview').then(({items})=> {
            return items;
        })
    }
    getRemarkAllReview(){
        return http.post('/remark/queryAllReview').then(({items})=> {
            return items
        })
    }
    componentWillMount(){
        // Toast.loading('加载中...', 0);
        Promise.all([
            this.getWordAllReview(),
            this.getRemarkAllReview()
        ]).then(([items,remark]) =>{
            // Toast.hide();
            this.setState({
                over:true,
                all:{
                    selectedIndex:this.state['all'].selectedIndex,
                    items,
                    remark
                },
                items,
                remark
            });
        })
    }
    onSelectChange = (e)=>{
        let index = e.nativeEvent.selectedSegmentIndex;
        this.setState((prevState, props) => {
            return {
                [prevState.tabType]:{
                    items:prevState[prevState.tabType].items,
                    remark:prevState[prevState.tabType].remark,
                    selectedIndex:index
                }
            }
        });
    }
    changeTabClick = (tab)=>{
        this.setState({
            items:[],
            remark:[]
        });
        let key = tab.key;
        if(this.state[key].items || this.state[key].remark){
            this.setState({
                tabType:key,
                items:this.state[key].items,
                remark:this.state[key].remark
            })
        }else{
            this.setState({
                tabType:key,
                over:false
            });
            // Toast.loading('加载中...', 0);
            Promise.all([
                http.post('/word/queryByPreDate',{pre:tab.pre}),
                http.post('/remark/queryByPreDate',{pre:tab.pre})
            ]).then(([{items},{items:remark}])=>{
                // Toast.hide();
                this.setState({
                    over:true,
                    [key]:{
                        items,
                        remark,
                        selectedIndex:this.state[key].selectedIndex
                    },
                    items,
                    remark
                });
            });
        }
    }
    render() {
        const tabs = [
            { title: '总复习' ,key:'all'},
            { title: '第一天',key:'one',pre:1 },
            { title: '第二天' ,key:'two',pre:2},
            { title: '第四天' ,key:'four',pre:4},
            { title: '第七天' ,key:'seven',pre:7},
            { title: '第十五天' ,key:'fifteen',pre:15},
            { title: '第三十天' ,key:'thirty',pre:30}
        ];
        let hasWord = !!this.state.items.length;
        let hasRemark = !!this.state.remark.length;
        let isWord = this.state[this.state.tabType].selectedIndex === 1;
        let isRemark = this.state[this.state.tabType].selectedIndex === 0;
        return (
            <div>
                <WhiteSpace />
                <WingBlank>
                    <Tabs onTabClick={this.changeTabClick} tabs={tabs}  swipeable={false} renderTabBar={props => <Tabs.DefaultTabBar {...props} page={3} />}>
                        <div style={{ minHeight: '150px', backgroundColor: '#fff'}}>
                            <WhiteSpace />
                            {
                                (hasWord || hasRemark) ?
                                    <React.Fragment>
                                        <SegmentedControl
                                            className={'pl15 pr15'}
                                            onChange={this.onSelectChange}
                                            values={['备注', '单词']}
                                            selectedIndex={this.state[this.state.tabType].selectedIndex
                                        }/>
                                        <WhiteSpace />
                                        <WhiteSpace />
                                        {isRemark? <RemarkList items={this.state.remark}/> : null}
                                        {isWord ? <WordList items={this.state.items}/> : null}
                                    </React.Fragment>
                                    :
                                    <div style={{textAlign:'center',paddingTop:40}}>
                                        {
                                            this.state.over ? '暂无需要复习的内容' : null
                                        }
                                    </div>
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