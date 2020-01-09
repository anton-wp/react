import React, { Component } from 'react';
import './Header.css'
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';


class Nav extends Component {
    click = () => {
        console.log(this.props.tasks) 
    }
    render() {
        return (
            <nav>
                <div>
                    <NavLink to="/">Categories</NavLink>
                </div>
                <button onClick={this.click}>rewrwe</button>
                
            </nav>
        );
    }
}
export default connect(state => ({
    tasks: state.tasks,
})) (Nav);