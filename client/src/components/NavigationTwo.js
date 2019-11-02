import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

import './NavigationTwo.css';

class Navigation extends Component {
	constructor(props) {
		super(props);
		console.log('Constructor Navigation Component');

		this.state = {
			links: ['home-link', 'projects-dashboard-link']
		};
	}

	componentDidMount() {
		console.log('Navigation Component did mount');
	}


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
