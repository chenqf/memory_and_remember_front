import React,{PureComponent,Component} from 'react';
const Context = React.createContext('defalut value');
const {Consumer,Provider}  = Context;

const Context1 = React.createContext(1);
const {Consumer:Consumer1,Provider:Provider1} = Context1;

function Demo1(props){
    return (
        <div>
            demo1：
            {
                props.value
            }
        </div>
    );
}
function Demo2(props){
    return (
        <div>
            demo2：
            {
                props.value
            }
        </div>
    );
}
function Demo3(props){
    return (
        <div>
            demo3：
            {
                props.value
            }
        </div>
    );
}
function Demo4(props){
    return (
        <div>
            demo4：
            {
                props.value
            }
            <br/>
            <button onClick={props.changeValue}>更改value</button>
        </div>
    );
}
class Demo5 extends PureComponent{
    constructor(props){
        super(props);
        this.state = {};
    }
    static defaultProps = {};
    static propTypes = {};
    render(){
        return (
            <React.Fragment>
                <Consumer>
                    {
                        value => (
                            <Demo6/>
                        )
                    }
                </Consumer>
                <Consumer1>
                    {
                        value =>(
                            <Demo7/>
                        )
                    }
                </Consumer1>
            </React.Fragment>
        )
    }
}

class Demo6 extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }
    static defaultProps = {};
    static propTypes = {};
    render(){
        console.log(6);
        return (
            <div>6</div>
        )
    }
}
class Demo7 extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }
    static defaultProps = {};
    static propTypes = {};
    render(){
        console.log(7);
        return (
            <div>7</div>
        )
    }
}


class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            context_value:'context value'
        };
    }
    changeValue = () => {

        this.setState((prevState,props)=>{
            return {
                context_value:prevState.context_value + '_'
            }
        })
    };
    static defaultProps = {};
    static propTypes = {};
    render(){
        return (
            <React.Fragment>
                <Provider value={'demo 5'}>
                    <Consumer>
                        {
                            value => (
                                <Demo1 value={value}/>
                            )
                        }
                    </Consumer>
                    <Provider value={2222}>
                        <Consumer>
                            {
                                value => (
                                    <Demo2 value={value}/>
                                )
                            }
                        </Consumer>
                        <Provider value={3333}>
                            <Consumer>
                                {
                                    value => (
                                        <Demo3 value={value}/>
                                    )
                                }
                            </Consumer>
                            <Provider value={this.state.context_value}>
                                <Consumer>
                                    {
                                        value => (
                                            <Demo4 value={value} changeValue={this.changeValue}/>
                                        )
                                    }
                                </Consumer>
                                <Demo5/>
                            </Provider>
                        </Provider>
                    </Provider>
                </Provider>
            </React.Fragment>

        )
    }
}

export default App;
