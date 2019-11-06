import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
import PresentationPopup from './PresentationPopup';

import './Home.css';

class Home extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isPresentationHovered: false,
			showElements: true
		};
	}

	componentDidMount() {
		// this.animateCornerLinesEnter();
	}

	showPresentationPopup = () => {
		let popup = document.getElementById('popup-container');
		popup.style.visibility = 'visible';
		popup.style.opacity = '1';
	};

	hidePresentationPopup = () => {
		let popup = document.getElementById('popup-container');
		popup.style.visibility = 'hidden';
		popup.style.opacity = '0';
	};

	render() {
		return (
			<main id='home-container'>
				<Fade delay={150} bottom opposite distance={'1em'}>
					<div id='home-presentation'>
						<p>This is </p>
						<p
							id='home-presentation-me'
							onMouseEnter={this.showPresentationPopup}
							onMouseLeave={this.hidePresentationPopup}>
							me.
						</p>
					</div>
				</Fade>
				<Fade delay={300}>
					<div id='home-page-title'>
						<p>Home</p>
					</div>
				</Fade>
				<Fade delay={450} bottom opposite distance={'1em'}>
					<div id='home-coordinates-container'>
						<p>I live here</p>
						<p id='home-latitude'>59° 51' 31.75" N</p>
						<p id='home-longitude'>17° 38' 20.00" E</p>
					</div>
				</Fade>

				<PresentationPopup />
			</main>
		);
	}
}

// Home.propTypes = {};

export default Home;
