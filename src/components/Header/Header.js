import React, { Component } from 'react';
import './Header.css'
import Nav from './nav';


export default class Header extends Component {

    render() {
        return (
            <div className='header'>
               Header
               <Nav />
            </div>
        );
    }
}