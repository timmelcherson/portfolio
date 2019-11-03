import React, {Component} from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';

import Navigation from './components/Navigation';
import ProjectsDashboard from './components/ProjectsDashboard';
import Home from "./components/Home";

class App extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            shouldRender: false
        }
	}

    render() {
        return (
            // <Router>
                <section id="app-main-container">

                    <Navigation />

                    {this.state.shouldRender ? <Home />: <ProjectsDashboard />}

                    {/* <Route exact path='/' component={Home}/> */}
                    {/* <Route exact path='/projects' component={ProjectsDashboard}/> */}
                    
                </section>
            // </Router>

        );
    }
}

export default App;
