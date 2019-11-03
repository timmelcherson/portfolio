import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
// import PropTypes from 'prop-types';

import './ProjectsDashboard.css';

class ProjectsDashboard extends Component {
	// constructor(props) {
	//     super(props);

	// }

	componentDidMount() {
		// this.animateCornerLinesEnter();
	}

	// animateCornerLinesEnter = () => {
	// 	let cornerLines = document.getElementsByClassName('corner-lines');

	// 	let i;
	// 	setTimeout(() => {
	// 		for (i = 0; i < cornerLines.length; i++) {
	//             cornerLines[i].style.margin = '10%';
	// 		}
	// 	}, 200);
	// };

	render() {
		return (
			<section id='projects-dashboard-container'>
				<Fade delay={400}>
					<div id='project-viewholder'>
						<aside id='project-side-panel'>
							<p>Project title goes here</p>
						</aside>
						<div id='project-image'></div>
					</div>
				</Fade>
			</section>
		);
	}
}

// ProjectsDashboard.propTypes = {};

export default ProjectsDashboard;
