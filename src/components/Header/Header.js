import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import logo from '../../img/logo.png';

class Header extends Component {

    render() {
        return (
            <div className='header'>
                <img className="logo" src={logo} alt="logo"/>
                {/* <button onClick={() => console.log(this.props.tasks)}>click</button> //проверка стора */} 
            </div>
        );
    }
}
export default connect(state => ({
    tasks: state.tasks,
  }))(Header);