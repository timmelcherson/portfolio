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

	toggleMenu = event => {
		let id = event.target.id;
		let menu = document.getElementById('nav-link-container');
		let arrow = document.getElementById('menu-down-arrow');
		let cornerLines = document.getElementsByClassName('corner-lines');
		let i;

		if (this.state.menuExpanded) {
			menu.style.height = '0px';
			arrow.style.transform = 'rotate(45deg)';
			arrow.style.marginBottom = '-40px';

			if (id === 'nav-link-projects') {
				setTimeout(() => {
					for (i = 0; i < cornerLines.length; i++) {
						cornerLines[i].style.margin = '10vh 10vw';
					}
				}, 200);
				this.navCallback(id);
			}
			if (id === 'nav-link-home') {
				for (i = 0; i < cornerLines.length; i++) {
					cornerLines[i].style.margin = '5vh 5vw';
				}
				setTimeout(() => {
					this.navCallback(id);
				}, 200);
			}

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

	navCallback = clickedLinkId => {
		this.props.navClickListener(clickedLinkId);
	};

	render() {
		return (
			<nav id='nav-link-container'>
				<div id='nav-inner-container'>
					<CSSTransition
						in={this.state.navLinkInProp}
						timeout={200}
						mountOnEnter
						unmountOnExit
						classNames='nav-link'>
						<div
							id='nav-link-home'
							className={'nav-link'}
							onClick={this.toggleMenu}>
							Home
						</div>
					</CSSTransition>
					<CSSTransition
						in={this.state.navLinkInProp}
						timeout={200}
						mountOnEnter
						unmountOnExit
						classNames='nav-link'>
						<div
							id='nav-link-projects'
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
