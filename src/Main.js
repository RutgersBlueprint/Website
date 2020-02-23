import React, { Component } from 'react'
import { render, unstable_batchedUpdates } from 'react-dom'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import logo from './logo.svg';

export class Main extends Component{

    componentDidMount(){
        const canvas = this.refs.canvas;
        const ctx = canvas.getContext("2d");

        var width = 0; 
        var height = 0; 

        var main = this.refs.main;
        var canvasdiv = this.refs.canvas_div;

        function resizeCanvas(){
            width = canvas.width = canvasdiv.getBoundingClientRect().width;
            height = canvas.height = canvasdiv.getBoundingClientRect().height;
        }

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        function Square(posx, posy, accelx){
            this.posx = posx; 
            this.posy = posy; 
            this.accelx = accelx; 

            ctx.strokeStyle = "#52A5E0";
            ctx.lineWidth = 0.5; 
            
            if (window.innerWidth > 411){
                ctx.strokeRect(posx, posy, 120, 120); 
            } else{
                ctx.strokeRect(posx, posy, 80, 80); 
            }
        }

        var objects = [];

        var x; 
        var y; 
        var rand; 
        var vx = 0; 
        var vy = 1.3;
        
        var startTime;
        canvas.onmousemove = function(e){       
            rand = Math.random(-0.0007, 0.0007);

            x = e.screenX - main.offsetLeft; 
            y = e.screenY - main.offsetTop;  
            
            var timeInterval = .1;
            var numOfSecondsSince = (Date.now() - startTime) / 1000;

            if (numOfSecondsSince > timeInterval) {
                objects.push(new Square(x, y, rand)); 
                startTime = Date.now();
            }
        }

        function animate() {
            ctx.clearRect(0, 0, width, height);
            for (var i = 0; i < objects.length; i++) { 
                var o = objects[i]
                new Square(o.posx, o.posy, o.accelx);
                o.posx += o.accelx
                o.posy += vy    

                vx = 0;
                vy = 1.3; 
            }
            requestAnimationFrame(animate);
        }

        startTime = Date.now();
        animate();
    }
    
    render(){
        return(
            <div id="main_bg" ref="main">
                <div id="header">
                    <img ref="image" src={logo}></img>
                    <h3>student design at rutgers university</h3> 
                </div>  
                <div id = "canvas_div" ref="canvas_div">       
                    <canvas ref="canvas"></canvas>  
                </div>
            </div>
        )
    }
}

export default Main