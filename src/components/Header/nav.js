import React, { Component } from 'react';
import './Header.css'
import { NavLink } from 'react-router-dom';


export default class Nav extends Component {

    render() {
        return (
            <nav>
                <div>
                    <NavLink to="/">Categories</NavLink>
                </div>
                
            </nav>
        );
    }
}