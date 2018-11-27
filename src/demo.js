import registerServiceWorker from './registerServiceWorker';
import ReactDOM from 'react-dom';
import React,{PureComponent,Component} from 'react';
import { BrowserRouter as Router, Route, Link,MemoryRouter } from "react-router-dom";
import './demo.scss'



function refsHOC(WrappedComponent) {
    return class RefsHOC extends React.Component {
        proc(wrappedComponentInstance) {
            console.log('into ref');
            wrappedComponentInstance.event()
        }

        render() {
            console.log('hoc render');
            const props = Object.assign({}, this.props, {ref: this.proc.bind(this)})
            return <WrappedComponent {...props}/>
        }
    }
}


class P extends Component{
    constructor(props){
        super(props);
        console.log();
        this.state = {
            num:Math.random()
        };
    }
    static getDerivedStateFromProps(nextProps,preState){
        console.log('p','get state from props');
        return null;
    }
    render(){
        console.log('p','render');
        return (
            <div>
                {this.state.num}
            </div>
        )
    }
    componentDidMount(){
        console.log('p','init render over');
    }
    event(){
        console.log('com event');
    }
    // shouldComponentUpdate(nextProps,nextState){
    //     console.log('p','update should component update');
    //     return true;
    // }
    // event(){
    //     this.setState({num:Math.random()})
    // }
    //
    // getSnapshotBeforeUpdate(prevProps,prevState){
    //     console.log('p','update snapshot');
    //     return {};
    // }
    // componentDidUpdate(prevProps,prevState,snapshot){
    //     console.log('p','did update');
    // }
    //
    // componentWillUnmount(){
    //     console.log('p','destroy');
    // }
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



let Com = refsHOC(P);


ReactDOM.render((
    <Com/>
), document.getElementById('root'));
registerServiceWorker();