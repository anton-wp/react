import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AddCategorieThunk } from '../../../action/actionCreator';


class CategorieAdd extends Component {
    state = {
        title: '',
    }
    handleChange = ({target: {value} }) => {
        this.setState({
            title: value,
        })
    }
    Add = ({ key }) => {
        if(this.state.title !== '') {
            if ( key === 'Enter' || !key ) {
                this.props.AddCategorieThunk(this.state.title);
                this.setState({
                    title: ''
                })
            }
        }
    }

    render() {
        return (
            <div className="Add">
                <h1>Category :</h1>
                <input onChange={this.handleChange}
                value={this.state.title} type='text' 
                onKeyPress={this.Add} className="inputAdd"/>
                <button onClick={this.Add}
                className="buttonAdd">Add</button>
            </div>
        );
    }
}
export default connect(state => ({
    tasks: state.tasks,
}), { AddCategorieThunk }) (CategorieAdd);