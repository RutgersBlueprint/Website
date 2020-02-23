import React, { Component } from 'react'
import { render } from 'react-dom'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import './index.css'
import "./style.scss";

import Event from './Event'
import Main from './Main'

import MediaQuery from "react-responsive";

class Site extends Component{ 

    render(){
        return <div id="box">
            <MediaQuery query="(min-device-width: 412px)">
                <div id="d_box">
                    <Event device="desktop"/>
                    <Main />
                </div>
            </MediaQuery>
                
            <MediaQuery query="(max-device-width: 411px)">
                <div id = "m_box">
                    <Main />
                    <Event device="mobile"/>
                </div>
            </MediaQuery>
        </div>
    }
}

render(
    <Site />,
    document.getElementById('root')
);
