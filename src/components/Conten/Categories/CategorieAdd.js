import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AddCategorieThunk } from '../../../action/actionCreator';


class CategorieAdd extends Component {
    state = {
        title: '',
        border: true
    }
    handleChange = ({target: {value} }) => {
        this.setState({
            title: value,
            border: true
        })
    }
    Add = ({ key }) => {
        if ( key === 'Enter' || !key ) {
            if(this.state.title !== '') {
                this.props.AddCategorieThunk(this.state.title);
                this.setState({
                    title: ''
                })
            } else {
                alert('Введите название категории');
                this.setState({
                    border: false
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
                onKeyPress={this.Add} 
                className={this.state.border ? "inputAdd" : "inputAdd redBorder"}/>
                <button onClick={this.Add}
                className="buttonAdd">Add</button>
            </div>
        );
    }
}
export default connect(state => ({
    tasks: state.tasks,
}), { AddCategorieThunk }) (CategorieAdd);