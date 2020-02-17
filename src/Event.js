import React, { Component } from 'react'
import { render } from 'react-dom'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import { FaFacebookF, FaAmericanSignLanguageInterpreting } from 'react-icons/fa'; 
import { FaRegEnvelope } from 'react-icons/fa'; 
import { FaInstagram } from 'react-icons/fa'; 

import Tooltip from 'react-bootstrap/Tooltip'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'

export class Event extends Component{

    render(){
        function renderTooltip(props) {
        return <Tooltip {...props}>Copied!</Tooltip>;
        }
          
        function copyToClipboard() {
            navigator.permissions.query({name: "clipboard-write"}).then(result => {
                if (result.state == "granted" || result.state == "prompt") {
                    function updateClipboard(newClip) {
                        navigator.clipboard.writeText(newClip).then(function() {
                          /* clipboard successfully set */
                        }, function() {
                          /* clipboard write failed */
                        });
                      }
                    updateClipboard("rutgersblueprint@gmail.com");
                }
              });
          }
          
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
                        <h2>to be denounced</h2>
                        <h2></h2>
                    </div>
                    <div id="contact">
                        <a href="https://www.facebook.com/rutgersblueprint" target="_blank"><FaFacebookF style={contactStyle}/></a>
                        <a href="https://www.instagram.com/rutgersblueprint/" target="_blank"><FaInstagram style={contactStyle}/></a>
                        <OverlayTrigger trigger="focus" placement="top" delay={{ show: 250, hide: 400 }} overlay={renderTooltip}><a href="javascript:void(0)" onClick={copyToClipboard}><FaRegEnvelope style={contactStyle}/></a></OverlayTrigger>
                    </div>
                </div>
            </div>
        )
    }
}

export default Event