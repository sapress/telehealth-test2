import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './Home';
import List from './List';
import { NavLink, withRouter } from 'react-router-dom';
import NavBar from './NavBar';

class App extends Component {
    render() {
        const App = () => (
            <div className="ui container">
                <BrowserRouter>
                    <NavBar />
                    <Route exact path="/" component={Home} />
                    <Route path="/list" component={List} />
                </BrowserRouter>
            </div>
        );
        return (
            <Switch>
                <App />
            </Switch>
        );
    }
}

export default App;

// function App() {
//     return (
//         <div className="App">
//             <header className="App-header">
//                 <img src={logo} className="App-logo" alt="logo" />
//                 <p>
//                     Edit <code>src/App.js</code> and save to reload.
//                 </p>
//                 <a
//                     className="App-link"
//                     href="https://reactjs.org"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                 >
//                     Learn React
//                 </a>
//             </header>
//         </div>
//     );
// }

// export default App;
