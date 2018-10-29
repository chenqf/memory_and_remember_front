import registerServiceWorker from './registerServiceWorker';
import ReactDOM from 'react-dom';


import React from "react";
import { BrowserRouter as Router, Route, Link,MemoryRouter } from "react-router-dom";
const refCallback = node => {
    debugger
    // `node` refers to the mounted DOM element or null when unmounted
}
function BasicExample() {
    return (
        <MemoryRouter>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>&nbsp;&nbsp;&nbsp;
                        <Link
                            to={{
                                pathname: "/about",
                                search: "?sort=name",
                                hash: "#the-hash",
                                state: { fromDashboard: true }
                            }}
                        >About</Link>
                    </li>
                    <li>
                        <Link to="/topics" replace innerRef={refCallback}>Topics</Link>
                    </li>
                </ul>

                <hr />

                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/topics" component={Topics} />
            </div>
        </MemoryRouter>
    );
}

function Home() {
    return (
        <div>
            <h2>Home</h2>
        </div>
    );
}

function About(props) {
    console.log(props);
    return (
        <div>
            <h2>About</h2>
        </div>
    );
}

function Topics({ match }) {
    return (
        <div>
            <h2>Topics</h2>
            <ul>
                <li>
                    <Link to={`${match.url}/rendering`}>Rendering with React</Link>
                </li>
                <li>
                    <Link to={`${match.url}/components`}>Components</Link>
                </li>
                <li>
                    <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
                </li>
            </ul>

            <Route path={`${match.path}/:topicId`} component={Topic} />
            <Route
                exact
                path={match.path}
                render={() => <h3>Please select a topic.</h3>}
            />
        </div>
    );
}

function Topic({ match }) {
    return (
        <div>
            <h3>{match.params.topicId}</h3>
        </div>
    );
}

ReactDOM.render(<BasicExample />, document.getElementById('root'));
registerServiceWorker();