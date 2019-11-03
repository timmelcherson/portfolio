import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import Lines from './Lines';
import ProjectsDashboard from './ProjectsDashboard';
import './Home.css';

class Home extends Component {
	// constructor(props) {
	// 	super(props);
	// }

	componentDidMount() {
        this.animateCornerLinesEnter();
    }

    animateCornerLinesEnter = () => {
		let cornerLines = document.getElementsByClassName('corner-lines');

		let i;
		setTimeout(() => {
			for (i = 0; i < cornerLines.length; i++) {
				cornerLines[i].style.margin = '4em';
			}
		}, 500);
    };
    
	render() {
		return (
			<main id='home-container'>
                {/* <Lines/> */}
                
                <div id="top-left-lines" className="corner-lines" />
                <div id="top-right-lines" className="corner-lines" />
                <div id="bottom-left-lines" className="corner-lines" />
                <div id="bottom-right-lines" className="corner-lines" />

			</main>
		);
	}
}

// Home.propTypes = {};

export default Home;
