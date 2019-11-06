import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
// import PropTypes from 'prop-types';

import './ProjectsDashboard.css';

class ProjectsDashboard extends Component {
	constructor(props) {
		super(props);

		this.state = {
			showOverlay: false
		};
	}

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
		// console.log('enter');
		let imageContainer = document.getElementById('project-image-container');
		let imageOverlay = document.getElementById('project-image-overlay');
		let image = document.getElementById('project-image');

		image.style.transform = 'scale(1.10)';
		this.setState({
			showOverlay: true
		});
	};

	onProjectImageLeave = () => {
		// console.log('leave');
		let imageContainer = document.getElementById('project-image-container');
		let imageOverlay = document.getElementById('project-image-overlay');
		let image = document.getElementById('project-image');

		image.style.transform = 'scale(1)';
		this.setState({
			showOverlay: false
		});
	};

	render() {
		return (
			<section id='projects-dashboard-container'>
                <Fade delay={300}>
					<div id='project-page-title'>
						<p>Projects</p>
					</div>
				</Fade>
				<Fade delay={600}>
					<div id='project-viewholder'>
						<aside id='project-side-panel'>
							<p>Orkney Folklore Trails Orkney Folklore Trails</p>
						</aside>
						<div
							id='project-image-container'
							onMouseEnter={this.onProjectImageEnter}
							onMouseLeave={this.onProjectImageLeave}>
							<Fade duration={300} opposite when={this.state.showOverlay}>
								<div id='project-image-overlay'>
									<h3>Android App</h3>
									<p>
										This is an app I developed together with
										people from RGU and Orkneyology.com.
									</p>
								</div>
							</Fade>
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
