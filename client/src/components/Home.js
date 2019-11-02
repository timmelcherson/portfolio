import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import Lines from './Lines';
import './Home.css';
import NavigationTwo from './NavigationTwo';

class Home extends Component {
	constructor(props) {
		super(props);

		this.state = {
			menuExpanded: false
		};
	}

	componentDidMount() {}

	toggleMenu = () => {
		let menu = document.getElementById('top-thing');
		let arrow = document.getElementById('menu-down-arrow');

		if (this.state.menuExpanded) {
            menu.style.height = '0px';
            arrow.style.transform = 'rotate(45deg)';
            arrow.style.marginBottom = '-40px';
			this.setState({
				menuExpanded: false
			});
		} else {
            menu.style.height = '40vh';
            arrow.style.transform = 'rotate(225deg)';
            arrow.style.marginBottom = '0px';
			this.setState({
				menuExpanded: true
			});
		}
	};

	render() {
		return (
			<main id='home-container'>
				{/* <Lines/> */}

				<div id='top-thing'>
					<div id='menu-down-arrow' onClick={this.toggleMenu} />

                    <NavigationTwo />
				</div>
			</main>
		);
	}
}

// Home.propTypes = {};

export default Home;
