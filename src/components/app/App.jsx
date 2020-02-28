import React from 'react';
import Header from '../header/Header';
import Main from '../main/Main';
import Footer from '../footer/Footer';
import About from '../about/About';
import Search from '../search/Search';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

import './app.scss';

function App() {
    return (
        <div className="container">
            <Header/>
            <Router>
                <div className="container container-nav">
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/search">Search</Link>
                            </li>
                        </ul>
                    </nav>
                    <Switch>
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route path="/search">
                            <Search />
                        </Route>
                        <Route path="/">
                            <Main />
                        </Route>
                    </Switch>
                </div>
            </Router>
            <Footer/>
        </div>
    )
}

export default App;