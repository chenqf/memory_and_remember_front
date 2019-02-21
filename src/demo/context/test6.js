import React,{PureComponent,Component} from 'react';

const themes = {
    light: {
        foreground: '#ffffff',
        background: '#222222',
    },
    dark: {
        foreground: '#000000',
        background: '#eeeeee',
    },
};

const ThemeContext = React.createContext({
    theme: themes.dark,
    toggleTheme: () => {},
});

function ThemeTogglerButton() {
    // Theme Toggler 按钮不仅接收 theme 属性
    // 也接收了一个来自 context 的 toggleTheme 函数
    return (
        <ThemeContext.Consumer>
            {({theme, toggleTheme}) => (
                <button
                    onClick={toggleTheme}
                    style={{backgroundColor: theme.background,color:'red'}}>
                    Toggle Theme
                </button>
            )}
        </ThemeContext.Consumer>
    );
}

class App extends Component {
    constructor(props) {
        super(props);

        this.toggleTheme = () => {
            this.setState(state => ({
                theme:
                    state.theme === themes.dark
                        ? themes.light
                        : themes.dark,
            }));
        };
        // State 包含了 updater 函数 所以它可以传递给底层的 context Provider
        this.state = {
            theme: themes.light,
            toggleTheme: this.toggleTheme,
        };
    }

    render() {
        // 入口 state 传递给 provider
        return (
            <ThemeContext.Provider value={this.state}>
                <Content />
            </ThemeContext.Provider>
        );
    }
}

function Content() {
    return (
        <div>
            <ThemeTogglerButton />
        </div>
    );
}


export default App;
