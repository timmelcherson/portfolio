import React, { Component } from 'react';
import './Test.css';

class Test extends Component {

    handleClick = (event) => {

        console.log(event.clientX);
        console.log(event.clientY);
    }

    handleMouseMove = (event) => {
        console.log(document.getElementById("thing").style.left);
        console.log(document.getElementById("thing").style.top);

        document.getElementById("thing").style.left = event.clientX + 'px';
        document.getElementById("thing").style.top = event.clientY + 'px';

        
    }

    render() {
        return (
            <section className="container" onClick={this.handleClick} onMouseMove={this.handleMouseMove}>
                <div id="thing" />
            </section>
        );
    }
}

export default Test;