import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import './PresentationPopup.css';

class PresentationPopup extends Component {
	// constructor(props) {
	//     super(props);
	// }

	closePopupWindow = () => {
		let popup = document.getElementById('popup-container');
		popup.style.visibility = 'hidden';
		popup.style.opacity = '0';
	};

	render() {
		return (
			<div id='popup-container'>
				<img
					id='popup-container-image'
					alt=''
					src='images/profpic_bw.jpg'
				/>
				<div id='popup-container-info'>
					<p>Name: Tim</p>
					<p>Age: 25</p>
				</div>
				<div id='popup-close-btn' onClick={this.closePopupWindow} />
			</div>
		);
	}
}

// PresentationPopup.propTypes = {

// };

export default PresentationPopup;
