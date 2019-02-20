import React,{PureComponent,Component} from 'react';
const Context = React.createContext('defalut value');
const {Consumer,Provider}  = Context;

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
                <Provider value={1111}>
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
                            </Provider>
                        </Provider>
                    </Provider>
                </Provider>
            </React.Fragment>

        )
    }
}

export default App;
