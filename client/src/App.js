import React, { Component } from 'react';
import './App.css';

import Navigation from './components/Navigation';
import ProjectsDashboard from './components/ProjectsDashboard';
import Home from './components/Home';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			shouldHomeRender: true,
			shouldProjectsDashboardRender: false
		};
    }
    
    componentDidMount() {
        console.log("mounted");
    }

	navCallback = clickedLinkId => {
		console.log(clickedLinkId);
		switch (clickedLinkId) {
			case 'nav-link-home':
				console.log('case 1');
				this.setState({
					shouldHomeRender: true,
					shouldProjectsDashboardRender: false
				});
				break;

			case 'nav-link-projects':
				console.log('case 2');
				this.setState({
					shouldHomeRender: false,
					shouldProjectsDashboardRender: true
				});
				break;
		}
	};

	render() {
		const { shouldHomeRender, shouldProjectsDashboardRender } = this.state;
		return (
			<section id='app-main-container'>
				<Navigation navClickListener={this.navCallback} />

				<div id='top-left-lines' className='corner-lines' />
				<div id='top-right-lines' className='corner-lines' />
				<div id='bottom-left-lines' className='corner-lines' />
				<div id='bottom-right-lines' className='corner-lines' />

				{shouldHomeRender ? <Home /> : null}

				{shouldProjectsDashboardRender ? <ProjectsDashboard /> : null}
			</section>
		);
	}
}

export default App;
