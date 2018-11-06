import registerServiceWorker from './registerServiceWorker';
import ReactDOM from 'react-dom';
import React,{PureComponent,Component} from 'react';
import { BrowserRouter as Router, Route, Link,MemoryRouter } from "react-router-dom";
import './demo.scss'


class Demo extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }
    clickEvent(){
        debugger
    }
    render(){
        return (
            <div>
            <form id="form">
                <input type="file" name="file" id="file"/>
            </form>
                <button onClick={this.clickEvent.bind(this)}>demo</button>
            </div>
        )
    }
}





ReactDOM.render((
    <Demo/>
), document.getElementById('root'));
registerServiceWorker();