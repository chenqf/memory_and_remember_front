import React,{PureComponent,Component} from 'react';
const Context = React.createContext('defalut value');
const {Consumer,Provider}  = Context;

function Demo(props){
    return (
        <div>
            {
                props.value
            }
            <br/>
            <button onClick={props.changeValue}>更改value</button>
        </div>
    );
}

function Demo1(props){
    return (
        <div>
            {
                props.value
            }
        </div>
    );
}


function Demo2(props){
    return (
        <div>
            {
                props.value
            }
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
                <Provider value={this.state.context_value}>
                    <Consumer>
                        {
                            value => (
                                <Demo value={value} changeValue={this.changeValue}/>
                            )
                        }
                    </Consumer>
                </Provider>
                <Provider value={1111}>
                    <Consumer>
                        {
                            value => (
                                <Demo1 value={value}/>
                            )
                        }
                    </Consumer>
                </Provider>
                <Provider value={2222}>
                    <Consumer>
                        {
                            value => (
                                <Demo1 value={value}/>
                            )
                        }
                    </Consumer>
                </Provider>
            </React.Fragment>

        )
    }
}

export default App;
