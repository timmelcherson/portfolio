import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import './Footer.css';

class Footer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			copyrightSymbol: '\u00A9'
		};
	}

	render() {
		return (
			<div id='footer-container'>
				<div id='footer-contact-icons-container'>
					<a
						id='contact-icon-gmail'
						href='https://mail.google.com/mail/u/0/?view=cm&fs=1&to=email@domain.com&tf=1'
						className='contact-icon'
						src='icons/gmail.svg'>
						<img
							src='icons/gmail.svg'
							alt=''
							className='contact-icon-img'
						/>
					</a>
					<a
						id='contact-icon-linkedin'
						href='https://www.linkedin.com/in/tim-melcherson-085087131/'
						className='contact-icon'>
						<img
							src='icons/linkedin.svg'
							alt=''
							className='contact-icon-img'
						/>
					</a>
				</div>

				<p>{String(this.state.copyrightSymbol)} Tim Melcherson</p>
			</div>
		);
	}
}

// Footer.propTypes = {};

export default Footer;
