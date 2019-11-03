import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import './ProjectsDashboard.css';

class ProjectsDashboard extends Component {
	// constructor(props) {
	//     super(props);

	// }

	componentDidMount() {
		this.animateCornerLinesEnter();
	}

	animateCornerLinesEnter = () => {
		let cornerLines = document.getElementsByClassName('corner-lines');

		let i;
		setTimeout(() => {
			for (i = 0; i < cornerLines.length; i++) {
				cornerLines[i].style.margin = '12em';
			}
		}, 500);
	};

	

	componentWillReceiveProps(nextProps) {}

	componentWillUpdate(nextProps, nextState) {}

    componentDidUpdate(prevProps, prevState) {}
    
    componentWillUnmount() {
        setTimeout(() => {
            console.log("Component unmounting");
        }, 2000);
    }

	render() {
		return (
			<section id='projects-dashboard-container'>
				<div id='top-left-lines' className='corner-lines' />
				<div id='top-right-lines' className='corner-lines' />
				<div id='bottom-left-lines' className='corner-lines' />
				<div id='bottom-right-lines' className='corner-lines' />
			</section>
		);
	}
}

// ProjectsDashboard.propTypes = {};

export default ProjectsDashboard;
