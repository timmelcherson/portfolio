import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
// import PropTypes from 'prop-types';

import './Navigation.css';

class Navigation extends Component {
	constructor(props) {
		super(props);
		console.log('Constructor Navigation Component');

		this.state = {
			links: ['home-link', 'projects-dashboard-link'],
			menuExpanded: false,
			navLinkInProp: false
		};
	}

	componentDidMount() {
		console.log('Navigation Component did mount');
	}

	toggleMenu = () => {
		let menu = document.getElementById('nav-link-container');
		let arrow = document.getElementById('menu-down-arrow');
		let links = document.querySelectorAll('.nav-link');

		if (this.state.menuExpanded) {
			menu.style.height = '0px';
			arrow.style.transform = 'rotate(45deg)';
			arrow.style.marginBottom = '-40px';
			this.animateCornerLinesExit();
			this.setState({
				menuExpanded: false,
				navLinkInProp: !this.state.navLinkInProp
			});
		} else {
			menu.style.height = '40vh';
			arrow.style.transform = 'rotate(225deg)';
			arrow.style.margin = '0px';
			this.setState({
				menuExpanded: true,
				navLinkInProp: !this.state.navLinkInProp
			});
		}
	};

	animateCornerLinesExit = () => {
		let cornerLines = document.getElementsByClassName('corner-lines');

		let i;
		for (i = 0; i < cornerLines.length; i++) {
			cornerLines[i].style.margin = '4em';
		}
	};

	render() {
		return (
			<nav id='nav-link-container'>
				<div id='nav-inner-container'>
					<CSSTransition
						in={this.state.navLinkInProp}
						timeout={800}
						mountOnEnter
						unmountOnExit
						classNames='nav-link'>
						<div
							to='/'
							className={'nav-link'}
							onClick={this.toggleMenu}>
							Home
						</div>
					</CSSTransition>
					<CSSTransition
						in={this.state.navLinkInProp}
						timeout={800}
						mountOnEnter
						unmountOnExit
						classNames='nav-link'>
						<div
							to='/projects'
							className={'nav-link'}
							onClick={this.toggleMenu}>
							Projects
						</div>
					</CSSTransition>
				</div>

				<div id='menu-down-arrow' onClick={this.toggleMenu} />
			</nav>
		);
	}
}

// Navigation.propTypes = {};

export default Navigation;
