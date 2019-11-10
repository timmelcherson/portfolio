import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
// import PropTypes from 'prop-types';

import './Navigation.css';

class Navigation extends Component {
	constructor(props) {
		super(props);

		this.state = {
			links: ['home-link', 'projects-dashboard-link'],
			menuExpanded: false,
			navLinkInProp: false,
			activeLink: 'nav-link-home'
		};
	}

	// componentDidMount() {
	// 	console.log('Navigation Component did mount');
	// }

	toggleMenu = event => {
		let id = event.target.id;
		if (id === 'nav-link-projects' || id === 'nav-link-home') {
			this.setState({
				activeLink: id
			});
		}
		let menu = document.getElementById('nav-link-container');
		let arrow = document.getElementById('menu-down-arrow');

		if (this.state.menuExpanded) {
			menu.style.height = '0px';
			arrow.style.transform = 'rotate(-135deg)';
			arrow.style.bottom = '-40px';

			if (id === 'nav-link-projects' || id === 'nav-link-home') {
				this.setState({
					activeLink: id
				});

				this.animateCornerLines(id);
			}

			this.setState({
				menuExpanded: false,
				navLinkInProp: !this.state.navLinkInProp
			});
		} else {
			menu.style.height = '40vh';
			arrow.style.transform = 'rotate(45deg)';
			arrow.style.bottom = '0px';
			this.setState({
				menuExpanded: true,
				navLinkInProp: !this.state.navLinkInProp
			});
		}
	};

	animateCornerLines = id => {
		let cornerLines = document.getElementsByClassName('corner-lines');
		let projectSidepanel = document.getElementById('project-side-panel');
		let projectImageContainer = document.getElementById(
			'project-image-container'
		);
		let i;

		switch (id) {
			case 'nav-link-home':
				if (this.state.activeLink === 'nav-link-projects') {
					projectSidepanel.style.opacity = '0';
					projectImageContainer.style.opacity = '0';
				}
				if (window.matchMedia('(max-width: 1024px)').matches) {
					for (i = 0; i < cornerLines.length; i++) {
						cornerLines[i].style.margin = '8.33vh 0';
					}
				}
				else if (window.matchMedia('(min-width: 1024px)').matches) {
					for (i = 0; i < cornerLines.length; i++) {
						cornerLines[i].style.margin = '0';
					}
				}

				setTimeout(() => {
					for (i = 0; i < cornerLines.length; i++) {
						cornerLines[i].classList.remove('extend-corner-lines');
					}
				}, 100);
				setTimeout(() => {
					this.navCallback(id);
				}, 400);
				break;

			case 'nav-link-projects':
				if (window.matchMedia('(max-width: 600px)').matches) {
					for (i = 0; i < cornerLines.length; i++) {
						cornerLines[i].style.margin = `${2*8.33}vh 0`;
					}
				}
				else if (window.matchMedia('(min-width: 601px) and (max-width: 1024px)').matches) {
					for (i = 0; i < cornerLines.length; i++) {
						cornerLines[i].style.margin = `${2*8.33}vh 8.33%`;
					}
				}
				else if (window.matchMedia('(min-width: 1024px)').matches) {
					for (i = 0; i < cornerLines.length; i++) {
						cornerLines[i].style.margin = `8.33vh 8.33%`;
					}
				}
				

				setTimeout(() => {
					for (i = 0; i < cornerLines.length; i++) {
						cornerLines[i].classList.add('extend-corner-lines');
					}
				}, 100);
				this.navCallback(id);
				break;

			default:
				break;
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
