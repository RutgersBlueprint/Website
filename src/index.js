import React, { Component } from 'react'
import { render } from 'react-dom'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import './index.css'
import "./style.scss";

import Event from './Event'
import Main from './Main'

class Site extends Component{ 
    constructor(props){
        super(props); 
        let width = window.innerWidth;
        
        this.state = {};

        if (width > 375){
            this.state.renderComponent = (
                <div className="d_box">
                    <Event />
                    <Main />
                </div>
            )
        } else { //small screens
            this.state.renderComponent = (
                <div className = "m_box">
                    <Event />
                    <Main />
                </div>
            )
        }
    }

    render(){
        return this.state.renderComponent; 
    }
}

render(
    <Site />,
    document.getElementById('root')
);
