import React, {Component} from 'react';
import {Link} from 'react-router-dom';
// import PropTypes from 'prop-types';

import './Navigation.css';

class Navigation extends Component {
    constructor(props) {
        super(props);
        console.log("Constructor Navigation Component");
    }

    componentDidMount() {
        this.setInitialLink();
        console.log("Navigation Component did mount");
    }

    /* Highlight currently rendered component on page refresh / page load */
    setInitialLink = () => {
        let url = window.location.href;

        if (url.includes('projects')) {
            document
                .getElementById('home-link')
                .classList
                .add('active')
        } else {
            document
                .getElementById('projects-dashboard-link')
                .classList
                .add('active');
        }
    };

    /* Highlight currently rendered page component (users current page) */
    setActiveLink = event => {
        let links = ['home-link', 'projects-dashboard-link'];

        let id = event.target.id;

        
        // Remove all active styling to reset the elements to default styling
        links.forEach(function (id) {
            console.log("id: " + id);
            let element = document.getElementById(id);
            if (element.className.includes('active')) {
                document
                    .getElementById(id)
                    .classList
                    .remove('active');
            }
            else {
                document
                    .getElementById(id)
                    .classList
                    .add('active');
            }
        });

        // Highlight the clicked link
        switch (id) {
            case 'link-one':
                document
                    .getElementById(id)
                    .classList
                    .add('active');
                break;

            case 'link-two':
                document
                    .getElementById(id)
                    .classList
                    .add('active');
                break;

            case 'link-three':
                document
                    .getElementById(id)
                    .classList
                    .add('active');
                break;

            default:
                return;
        }

        // Close the navbar when clicking a link after a 100ms delay if in mobile mode
        setTimeout(() => {
            document
                .getElementById('navbar')
                .classList
                .remove('open');
        }, 100);
    };

    render() {
        return (
            <nav id="nav-link-container">
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