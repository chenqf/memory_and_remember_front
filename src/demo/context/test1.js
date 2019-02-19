import React,{PureComponent,Component} from 'react';
const Context = React.createContext('defalut value');
const {Consumer,Provider}  = Context;

function Demo(props){
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
        this.state = {};
    }
    static defaultProps = {};
    static propTypes = {};
    render(){
        return (
            <Consumer>
                {
                    value => (
                        <Demo value={value}/>
                    )
                }
            </Consumer>
        )
    }
}

export default App;
