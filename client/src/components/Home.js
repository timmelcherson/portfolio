import React, {Component} from 'react';
// import PropTypes from 'prop-types';

import Lines from "./Lines";
import "./Home.css";

class Home extends Component {
    // constructor(props) {
    //     super(props);
    // }

    componentDidMount() {}

    render() {
        return (
            <main id="home-container">

                <Lines/>

            </main>
        );
    }
}

// Home.propTypes = {};

export default Home;