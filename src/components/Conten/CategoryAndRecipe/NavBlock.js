import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';




class NavBlock extends Component {

    render(){
        return (
            <div>
                <Link to="/">Home/</Link>
                {this.props.tasks.categoryList.map(nav => (
                    <Link key={nav._id} to={`/${nav._id}`}>{nav.title}/</Link> 
                ))}
            </div>
        );
    }
}
export default connect(state => ({
  tasks: state.tasks,
}))(NavBlock);