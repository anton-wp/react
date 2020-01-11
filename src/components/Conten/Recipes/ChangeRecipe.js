import React, { Component } from 'react';
import { connect } from 'react-redux';
import { UpdateRecipeThunk } from '../../../action/actionCreator'


class ChangeRecipe extends Component {
    state = {
        title: '',
        text: '',
        
    }
    componentDidMount() {
        this.setState({
            title: this.props.tasks.recipeById.title,
            text: this.props.tasks.recipeById.text,
        });
    } 
    handleChangeTitle = ({target: {value} }) => {
        this.setState({
            title: value,
        }) 
    }
    handleChangeText = ({target: {value} }) => {
        this.setState({
            text: value,
        }) 
    }
    ChangeRecipe = () => {
        this.props.click();
        this.props.UpdateRecipeThunk(this.props.tasks.recipeById._id, this.state.title, 
            this.state.text, this.props.tasks.recipeById.categoryId) 
    }
    render(){
        return (
        <div className="ChangeRecipe">
            <input type="text" onChange={this.handleChangeTitle} 
            value={this.state.title} className="inputAdd inputAddRecipe" />
            <input type="text" onChange={this.handleChangeText} 
            value={this.state.text} className="inputAdd inputAddRecipe"/>
            <button onClick={this.ChangeRecipe} className="app">Edit</button>
            <button onClick={this.props.click} className="app">Back</button>
        </div>
        );
    }
}
export default connect(state => ({
  tasks: state.tasks,
}), { UpdateRecipeThunk })(ChangeRecipe);