import React, { Component } from 'react'
import { render } from 'react-dom'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import './index.css'
import Event from './Event'
import Main from './Main'

class Site extends Component{
    render(){
        return (
            <div className="box">
                <Event />
                <Main />
            </div>
        );
    }
}

render(
    <Site />,
    document.getElementById('root')
);
