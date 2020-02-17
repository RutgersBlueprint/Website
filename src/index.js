import React, { Component } from 'react'
import { render } from 'react-dom'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import './index.css'
import Event from './Event'
import Main from './Main'

// function Event(props){
//     return (
//         <div className="panel">
//             <div className="panel">
//                 <h1>next event</h1>
//                 <h2>Monday, Feb 10</h2>
//                 <h2>9-10pm @ CASC 411</h2>
//             </div>
//             {props.children}
//         </div>
//     );
// }

// function Contact(){
//     return (
//         <Event>
//             <i className="fab fa-facebook-f"></i>
//             <i className="far fa-envelope"></i>
//             <i className="fab fa-instagram"></i>
//         </Event>
//     );
// }

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
