import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

import './Navigation.css';

class Navigation extends Component {
	constructor(props) {
		super(props);
		console.log('Constructor Navigation Component');

		this.state = {
			links: ['home-link', 'projects-dashboard-link']
		};
	}

	componentDidMount() {
		this.verticallyCenterLinks();
		this.setInitialLink();
		console.log('Navigation Component did mount');
	}


	verticallyCenterLinks = () => {
		this.state.links.forEach(linkId => {
			console.log(document.getElementById(linkId));
			let link = document.getElementById(linkId);
			link.style.top =
				window.innerHeight / 2 - link.clientHeight / 2 + 'px';
		});
	};

	/* Highlight currently rendered component on page refresh / page load */
	setInitialLink = () => {
		let url = window.location.href;
		let link;

		if (url.includes('projects')) {
			link = document.getElementById('home-link');
			link.classList.add('active');
		} else {
			link = document.getElementById('projects-dashboard-link');
			link.classList.add('active');
		}
	};

	/* Highlight currently rendered page component (users current page) */
	setActiveLink = () => {

		// let id = event.target.id;

		// Remove all active styling to reset the elements to default styling
		this.state.links.forEach(function(linkId) {
			let element = document.getElementById(linkId);

			
			if (element.className.includes('active')) {
				element.classList.remove('active');
			} else {
				element.classList.add('active');
			}
		});
	};

	render() {
		return (
			<nav id='nav-link-container'>
				<Link
					id='home-link'
					to='/'
					className={'nav-link-right'}
					onClick={this.setActiveLink}>
					Home
				</Link>
				<Link
					id='projects-dashboard-link'
					to='/projects'
					className={'nav-link-left'}
					onClick={this.setActiveLink}>
					Projects
				</Link>
			</nav>
		);
	}
}

// Navigation.propTypes = {};

export default Navigation;
