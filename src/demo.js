import registerServiceWorker from './registerServiceWorker';
import ReactDOM from 'react-dom';
import React,{PureComponent,Component} from 'react';
import { BrowserRouter as Router, Route, Link,MemoryRouter } from "react-router-dom";
import './demo.scss'


class P extends Component{
    constructor(props){
        super(props);
        this.state = {
            num:Math.random()
        };
    }
    static getDerivedStateFromProps(nextProps,preState){
        console.log('p','get state from props');
        return null;
    }
    shouldComponentUpdate(nextProps,nextState){
        console.log('p','update should component update');
        return true;
    }
    event(){
        this.setState({num:Math.random()})
    }
    render(){
        console.log('p','render');
        return (
            <div>
                {this.state.num}
                <button onClick={this.event.bind(this)}>test</button>
                <C1/>
                {!this.state.a ?<C2/>:null}
            </div>
        )
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('p','update snapshot');
        return {};
    }
    componentDidUpdate(prevProps,prevState,snapshot){
        console.log('p','did update');
    }
    componentDidMount(){
        console.log('p','init render over');
    }
    componentWillUnmount(){
        console.log('p','destroy');
    }
}
class C1 extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }
    static getDerivedStateFromProps(nextProps,preState){
        console.log('c1','get state from props');
        return null;
    }
    shouldComponentUpdate(nextProps,nextState){
        console.log('c1','update should component update');
        return true;
    }
    event(){
        this.setState({a:Math.random()})
    }
    render(){
        console.log('c1','render');
        return (
            <div>
                1
            </div>
        )
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('c1','update snapshot');
        return {};
    }
    componentDidUpdate(prevProps,prevState,snapshot){
        console.log('c1','did update');
    }
    componentDidMount(){
        console.log('c1','init render over');
    }
    componentWillUnmount(){
        console.log('c1','destroy');
    }
}

class C2 extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }
    render(){
        return (
            <div/>
        )
    }
}





ReactDOM.render((
    <P/>
), document.getElementById('root'));
registerServiceWorker();