// @flow Created by 陈其丰 on 2018/9/29.
import React,{Component} from 'react';
import { Tabs, WhiteSpace ,WingBlank,Badge,Pagination,Toast} from 'antd-mobile';
import http from '../../library/http';
import WordList from "../../component/wordList/index";
import Remark from "../../component/remark/index";
class Review extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentPage:1,
            pageCount:10,
            allCount:'',
            type:'all',
            allItems:[],
            items:[],
            remark:[],
            over:false,
            all:{},
            one:{},
            two:{},
            four:{},
            seven:{},
            fifteen:{},
            thirty:{}
        };
    }
    getAllData(page){
        let {pageCount} = this.state;
        let startNum = (page - 1) * pageCount;
        http.post('/word/queryAll',{hold:true,startNum,pageCount},({items,count:allCount})=> {
            window.scrollTo(0,0);
            this.setState({
                allCount,
                over:true,
                all:items,
                items
            });
        })
    }
    paginationChange(page){
        this.setState({currentPage:page});
        this.getAllData(page)
    }
    componentWillMount(){
        this.getAllData(1);
    }
    changeTabClick(tab){
        this.setState({
            items:[],
            remark:[]
        });
        if(tab.key === 'all'){
            this.setState({
                type:'all',
                items:this.state.all
            })
        }else{
            let key = tab.key;
            if(this.state[key].items || this.state[key].remark){
                this.setState({
                    type:key,
                    items:this.state[key].items,
                    remark:this.state[key].remark
                })
            }else{
                this.setState({
                    type:key,
                    over:false
                });
                Promise.all([
                    http.post('/word/queryByPreDate',{pre:tab.pre}),
                    http.post('/remark/queryByPreDate',{pre:tab.pre})
                ]).then(([{items},{items:remark}])=>{
                    this.setState({
                        over:true,
                        [key]:{
                            items,
                            remark
                        },
                        items,
                        remark
                    });
                });
            }
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
        let total = Math.ceil(this.state.allCount / this.state.pageCount),
            current = this.state.currentPage;
        return (
            <div>
                <WhiteSpace />
                <WingBlank>
                    <Tabs onTabClick={this.changeTabClick.bind(this)} tabs={tabs}  swipeable={false} renderTabBar={props => <Tabs.DefaultTabBar {...props} page={3} />}>
                        <div style={{ minHeight: '150px', backgroundColor: '#fff' ,paddingLeft:15,paddingRight:15}}>
                            <WhiteSpace />
                            {/*当前备注内容*/}
                            {
                                this.state.remark.length ? <Remark className="darkBlue" items={this.state.remark}/> : null
                            }

                            {
                                this.state.type === 'all'
                                    ?
                                    (
                                        this.state.items.length ?
                                        (
                                            <React.Fragment>
                                                <WordList count={this.state.allCount} items={this.state.items}/>
                                                <WhiteSpace />
                                                <Pagination
                                                    onChange={this.paginationChange.bind(this)}
                                                    className="custom-pagination-with-icon"
                                                    total={total}
                                                    current={current}
                                                />
                                            </React.Fragment>
                                        ) : null
                                    )
                                    :
                                    this.state.items.length ? <WordList items={this.state.items}/> : null
                            }
                            {/*缺省情况*/}
                            {
                                !this.state.items.length && !this.state.remark.length && this.state.over
                                    ?
                                    <div style={{textAlign:'center',paddingTop:40}}>暂无需要复习的内容</div>
                                    :
                                    null
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