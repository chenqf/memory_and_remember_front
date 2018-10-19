// Created by 陈其丰 on 2018/10/19.
import React,{PureComponent,Component} from 'react';
class Test extends Component{
    constructor(props){
        super(props);
        this.state = {
            count:0
        };
    }
    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('compare test');
    //     return this.props.num !== nextProps.num;
    // }
    xxxx(){
        this.setState((prevState,props)=>{
            return {
                count:prevState.count  + 1
            }
        })
    }
    render(){
        console.log('in test render')
        return (
            <div>
                {this.props.num}
                <button onClick={this.xxxx.bind(this)}>test count</button>
            </div>
        )
    }
}

class Pure extends Component{
    constructor(props){
        super(props);
        this.state = {
            count:0
        };
    }
    xxxx(){
        this.setState((prevState,props)=>{
            return {
                count:prevState.count  + 1
            }
        })
    }
    render(){
        console.log('in Pure render');
        return (
            <div>
                {this.props.num}
                <button onClick={this.xxxx.bind(this)}>test count {this.state.count}</button><br/>
                <D1 d={this.state.count}/>
            </div>
        )
    }
}

function D1(props){
    return (
        <D2 {...props}/>
    );
}
function D2(props){
    return (
        <D3 {...props}/>
    );
}
function D3(props){
    return (
        <div>d3333333333333333333333333333:{props.d}</div>
    );
}

class Demo extends Component{
    constructor(props){
        super(props);
        this.state = {
            test:0,
            pure:0
        };
    }
    click1(){
        this.setState((prevState,props)=>{
            return {
                test:prevState.test + 1
            }
        })
    }
    click2(){
        this.setState((prevState,props)=>{
            return {
                pure:prevState.pure + 1
            }
        })
    }
    render(){
        console.log('in demo render');
        return (
            <div>
                <button onClick={this.click1.bind(this)}>test</button><br/>
                <button onClick={this.click2.bind(this)}>pure</button><br/>
                <Test num={this.state.test}/>
                <Pure num={this.state.pure}/>
            </div>
        )
    }
}






export default Demo;