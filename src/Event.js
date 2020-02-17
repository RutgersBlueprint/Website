import React, { Component } from 'react'
import { render } from 'react-dom'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import { FaFacebookF, FaAmericanSignLanguageInterpreting } from 'react-icons/fa'; 
import { FaRegEnvelope } from 'react-icons/fa'; 
import { FaInstagram } from 'react-icons/fa'; 

import styled from 'styled-components';

export class Event extends Component{
    render(){

        const contactStyle = {
            height: '20px',
            width: 'auto',
            margin: '10px'   
        };

        return(
            <div id ="bg-event" ref="bg">
                <div id="leftpanel">
                    <div id="signup"><a href="http://eepurl.com/gMQbx9" target="_blank"><h4>Sign up for our newsletter!</h4></a></div>
                    <div id ="info">
                        <h1>next event</h1>
                        <h2>To be denounced</h2>
                        <h2></h2>
                    </div>
                    <div id="contact">
                        <a href="https://www.facebook.com/rutgersblueprint" target="_blank"><FaFacebookF style={contactStyle}/></a>
                        <a href="https://www.instagram.com/rutgersblueprint/" target="_blank"><FaInstagram style={contactStyle}/></a>
                        <a href="mailto: rutgersblueprint@gmail.com" target="_blank"><FaRegEnvelope style={contactStyle}/></a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Event