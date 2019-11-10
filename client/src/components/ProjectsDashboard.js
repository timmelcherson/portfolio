import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
// import PropTypes from 'prop-types';

import './ProjectsDashboard.css';
import './Animations.css';

class ProjectsDashboard extends Component {
	constructor(props) {
		super(props);

		this.state = {
			showOverlay: false,
			projectUrl: '',
			projectUrlText: '',
			projectDescription: '',
			projectTitle: '',
			projectSidepanelText: '',
			projectImage: '',
			projects: [],
			currentProjectIndex: 0
		};
	}

	componentDidMount() {
		this.fetchProjects();
	}

	fetchProjects = () => {
		fetch('api/projects')
			.then(response => response.json())
			.then(data => {
				let projects = [];

				data.map(entity => {
					projects.push(entity);
					return null;
				});

				this.setState({
					projects: projects,
					projectUrl: encodeURI(projects[0].projectUrl),
					projectUrlText: projects[0].projectUrlText,
					projectDescription: projects[0].projectDescription,
					projectTitle: projects[0].projectTitle,
					projectSidepanelText: projects[0].projectSidepanelText,
					projectImg: projects[0].projectImg,
					currentProjectIndex: 0
				});
				return data;
			})
			.catch((err, response) => {
				console.log(err, response);
			});
	};

	onProjectImageEnter = () => {
		// console.log('enter');
		// let imageContainer = document.getElementById('project-image-container');
		// let imageOverlay = document.getElementById('project-image-overlay');
		let image = document.getElementById('project-image');

		image.style.transform = 'scale(1.1)';
		this.setState({
			showOverlay: true
		});
	};

	onProjectImageLeave = () => {
		// console.log('leave');
		// let imageContainer = document.getElementById('project-image-container');
		// let imageOverlay = document.getElementById('project-image-overlay');
		let image = document.getElementById('project-image');

		image.style.transform = 'scale(1)';
		this.setState({
			showOverlay: false
		});
    };
    
	projectScrollUp = () => {
		let projects = this.state.projects;
		let newIndex = this.state.currentProjectIndex - 1;
		let upArrow = document.getElementById('aside-arrow-up');
		let downArrow = document.getElementById('aside-arrow-down');

		if (newIndex === 0) {
			upArrow.style.display = 'none';
		}

		if (newIndex !== projects.length - 1) {
			downArrow.style.display = 'inline-block';
		}

		this.setState({
			projectUrl: encodeURI(projects[newIndex].projectUrl),
			projectUrlText: projects[newIndex].projectUrlText,
			projectDescription: projects[newIndex].projectDescription,
			projectTitle: projects[newIndex].projectTitle,
			projectSidepanelText: projects[newIndex].projectSidepanelText,
			projectImg: projects[newIndex].projectImg,
			currentProjectIndex: newIndex
		});
	};

	projectScrollDown = () => {
		let projects = this.state.projects;
		let newIndex = this.state.currentProjectIndex + 1;
		let upArrow = document.getElementById('aside-arrow-up');
		let downArrow = document.getElementById('aside-arrow-down');

		if (newIndex !== 0) {
			upArrow.style.display = 'inline-block';
		}

		if (newIndex === projects.length - 1) {
			downArrow.style.display = 'none';
		}

		this.setState({
			projectUrl: encodeURI(projects[newIndex].projectUrl),
			projectUrlText: projects[newIndex].projectUrlText,
			projectDescription: projects[newIndex].projectDescription,
			projectTitle: projects[newIndex].projectTitle,
			projectSidepanelText: projects[newIndex].projectSidepanelText,
			projectImg: projects[newIndex].projectImg,
			currentProjectIndex: newIndex
		});
	};

	projectWheelScroll = event => {
		if (window.matchMedia('(min-width: 1024px)').matches) {
			if (event.deltaY < 0) {
				if (this.state.currentProjectIndex !== 0) {
					this.projectScrollUp();
				}
			} else if (event.deltaY > 0) {
				if (
					this.state.currentProjectIndex + 1 !==
					this.state.projects.length
				) {
					this.projectScrollDown();
				}
			}
		}
	};

	render() {
		const {
			projectSidepanelText,
			projectTitle,
			projectDescription,
			projectUrl,
			projectUrlText,
			projectImg,
			projects
		} = this.state;
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
							<div
								id='aside-arrow-up'
								className='aside-arrow'
								onClick={this.projectScrollUp}
							/>
							<p>{projectSidepanelText}</p>
							<div
								id='aside-arrow-down'
								className='aside-arrow'
								onClick={this.projectScrollDown}
							/>
						</aside>
						<div
							id='project-image-container'
							onMouseEnter={this.onProjectImageEnter}
							onMouseLeave={this.onProjectImageLeave}
							onWheel={this.projectWheelScroll}
                            >
							<Fade
								duration={300}
								opposite
								when={this.state.showOverlay}>
								<div id='project-image-overlay'>
									<h3>{projectTitle}</h3>
									<p>{projectDescription}</p>
									<a id='project-url' href={projectUrl}>
										{projectUrlText}
									</a>
								</div>
							</Fade>
                            <div id='project-overlay-scroll-down-container'>
									<div id='project-overlay-mouse'>
										<div id='project-overlay-scrollwheel' />
									</div>
									<i id='project-overlay-scroll-down-arrow' />
								</div>
							<img id='project-image' src={projectImg} alt='' />
						</div>
					</div>
				</Fade>
			</section>
		);
	}
}

// ProjectsDashboard.propTypes = {};

export default ProjectsDashboard;
