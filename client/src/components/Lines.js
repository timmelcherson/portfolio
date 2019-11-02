import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import './Lines.css';

class Lines extends Component {
	componentDidMount() {
		this.drawCircle();
	}

	draw = () => {
		console.log('draw function');
		var canvas = document.getElementById('sine-canvas');
		var context = canvas.getContext('2d');
	};

	drawCircle = () => {
		console.log('drawing circle');
		var c = document.getElementById('sine-canvas');
		var ctx = c.getContext('2d');
		ctx.beginPath();
        ctx.arc(300, 300, 200, 0, 2 * Math.PI);
        ctx.strokeStyle="white";
        ctx.stroke();
        
	};

	plotSine = () => {
		console.log('Plotting sine');

		let y;
		let height;
		let amplitude;
		let x;
		let frequency;

		y = height / 2 + amplitude * Math.sin(x / frequency);
    };
    
    /* function plotSine(ctx, xOffset, yOffset) {
        var width = ctx.canvas.width;
        var height = ctx.canvas.height;
        var scale = 20;
        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.strokeStyle = "rgb(66,44,255)";
        // console.log("Drawing point...");
        // drawPoint(ctx, yOffset+step);
        
        var x = 4;
        var y = 0;
        var amplitude = 40;
        var frequency = 20;
        //ctx.moveTo(x, y);
        ctx.moveTo(x, 50);
        while (x < width) {
            y = height/2 + amplitude * Math.sin((x+xOffset)/frequency);
            ctx.lineTo(x, y);
            x++;
            // console.log("x="+x+" y="+y);
        }
        ctx.stroke();
        ctx.save();
        console.log("Drawing point at y=" + y);
        drawPoint(ctx, y);
        ctx.stroke();
        ctx.restore();
    } */

	render() {
		return (
			<section id='container'>
				<div id='horizontal-line' />
				<div id='outer-circle' />
				<div id='inner-circle' />
				<canvas id='sine-canvas' height='600px' width='600px' />
			</section>
		);
	}
}

// Lines.propTypes = {};

export default Lines;
