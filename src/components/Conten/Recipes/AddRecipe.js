import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AddRecipeByCategorieThunk, GetRecipeAll } from '../../../action/actionCreator'



class AddRecipe extends Component {
  state = {
    titleRecipe: '',
    textRecipe: '',
    borderTitle: true,
    borderText: true,
  }
  handleChangeTitle = ({target: {value} }) => {
    this.setState({
      titleRecipe: value,
      borderTitle: true,
    })
  }
  handleChangeText = ({target: {value} }) => {
    this.setState({
      textRecipe: value,
      borderText: true,
    })
  }
  AddRecipe = () => {
    if(this.state.titleRecipe && this.state.textRecipe) { 
      this.props.AddRecipeByCategorieThunk(this.state.titleRecipe, this.state.textRecipe, this.props._id);
      this.setState({
        titleRecipe: '',
        textRecipe: '', 
        borderTitle: true,
        borderText: true,
      })
    } else{
        alert('Все поля необходимо заполнить')
    }
    if (!this.state.titleRecipe){
      this.setState({
        borderTitle: false
      })
    }
    if (!this.state.textRecipe){
      this.setState({
        borderText: false
      })
    }
  }
    
  render(){
    return (
      <div className="Add">
          <h1>Recipe add :</h1>
          <input type="text" value={this.state.titleRecipe} onChange={this.handleChangeTitle} 
          placeholder="title" className=
          {this.state.borderTitle ? "inputAdd inputAddRecipe" : "inputAdd inputAddRecipe redBorder"}/>
          <input type="text" value={this.state.textRecipe} onChange={this.handleChangeText} 
          placeholder="text" className=
          {this.state.borderText ? "inputAdd inputAddRecipe" : "inputAdd inputAddRecipe redBorder"}/>
          <button className='buttonAdd' onClick={this.AddRecipe}>Add</button>
      </div>
    );
  }
}
export default connect(state => ({
  tasks: state.tasks,
}), { AddRecipeByCategorieThunk, GetRecipeAll }) (AddRecipe);