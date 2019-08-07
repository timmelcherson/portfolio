import React, {Component} from 'react';
// import PropTypes from 'prop-types';

import "./Lines.css";

class Lines extends Component {
    
    render() {
        return (
            <section id="container">
                <div id="horizontal-line"/>
                <div id="outer-circle"/>
                <div id="inner-circle"/>
            </section>
        );
    }
}

// Lines.propTypes = {};

export default Lines;