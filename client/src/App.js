import React, {Component} from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';

import Navigation from './components/Navigation';
import NavigationTwo from './components/NavigationTwo';
import ProjectsDashboard from './components/ProjectsDashboard';
import Home from "./components/Home";

class App extends Component {

    render() {
        return (
            <Router>
                <section id="app-main-container">

                    <NavigationTwo/>

                    <Route exact path='/' component={Home}/>
                    <Route exact path='/projects' component={ProjectsDashboard}/>
                    
                </section>
            </Router>

        );
    }
}

export default App;
