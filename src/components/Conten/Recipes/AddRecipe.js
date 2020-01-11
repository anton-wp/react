import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AddRecipeByCategorieThunk, GetRecipeAll } from '../../../action/actionCreator'



class AddRecipe extends Component {
  state = {
    titleRecipe: '',
    textRecipe: '',
  }

  handleChangeTitle = ({target: {value} }) => {
    this.setState({
      titleRecipe: value,
    })
  }
  handleChangeText = ({target: {value} }) => {
    this.setState({
      textRecipe: value,
    })
  }
  AddRecipe = () => {
    if(this.state.titleRecipe && this.state.textRecipe) { 
      this.props.AddRecipeByCategorieThunk(this.state.titleRecipe, this.state.textRecipe, this.props._id);
      this.setState({
          titleRecipe: '',
          textRecipe: '', 
      })
    }
  }
    
  render(){
    return (
        <div className="Add">
            <h1>Recipe add :</h1>
            <input type="text" value={this.state.titleRecipe} onChange={this.handleChangeTitle} 
            placeholder="title" className="inputAdd inputAddRecipe"/>
            <input type="text" value={this.state.textRecipe} onChange={this.handleChangeText} 
            placeholder="text" className="inputAdd inputAddRecipe"/>
            <button className='buttonAdd' onClick={this.AddRecipe}>Add</button>
        </div>
    );
  }
}
export default connect(state => ({
  tasks: state.tasks,
}), { AddRecipeByCategorieThunk, GetRecipeAll }) (AddRecipe);