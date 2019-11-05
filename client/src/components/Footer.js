import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import './Footer.css';

class Footer extends Component {
	constructor(props) {
        super(props);
        
        this.state = {
            copyrightSymbol: '\u00A9',
        };
	}

	render() {
		return (
			<div id='footer-container'>
				<p>{String(this.state.copyrightSymbol)} Tim Melcherson</p>
			</div>
		);
	}
}

// Footer.propTypes = {};

export default Footer;
