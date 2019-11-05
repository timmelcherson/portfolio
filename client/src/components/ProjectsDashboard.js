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

	onProjectImageEnter = () => {
        console.log("enter");
		let imageContainer = document.getElementById('project-image-container');
		let imageOverlay = document.getElementById('project-image-overlay');
		let image = document.getElementById('project-image');

        image.style.transform = 'scale(1.1)';
        imageOverlay.style.visibility = 'visible';
        imageOverlay.style.opacity = '1';
	};

	onProjectImageLeave = () => {
        console.log("leave");
        let imageContainer = document.getElementById('project-image-container');
		let imageOverlay = document.getElementById('project-image-overlay');
		let image = document.getElementById('project-image');

        image.style.transform = 'scale(1)';
        imageOverlay.style.visibility = 'hidden';
        imageOverlay.style.opacity = '0';
    };

	render() {
		return (
			<section id='projects-dashboard-container'>
				<Fade delay={600}>
					<div id='project-viewholder'>
						<aside id='project-side-panel'>
							<p>Orkney Folklore Trails Orkney Folklore Trails</p>
						</aside>
						<div
							id='project-image-container'
							onMouseEnter={this.onProjectImageEnter}
							onMouseLeave={this.onProjectImageLeave}>
							<div id='project-image-overlay'>
								<h3>Android App</h3>
								<p>
									This is an app I developed together with
									people from RGU and Orkneyology.com.
								</p>
							</div>
							<img
								id='project-image'
								src='images/orkney_icon_1.png'
								alt=''
							/>
						</div>
					</div>
				</Fade>
			</section>
		);
	}
}

// ProjectsDashboard.propTypes = {};

export default ProjectsDashboard;
