import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AddRecipeByCategorieThunk, GetRecipeAll } from '../../../action/actionCreator'



class AddRecipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleRecipe: '',
      textRecipe: '',
      borderTitle: true,
      borderText: true,
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
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
        alert('Все поля необходимо заполнить');
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
          <input type="text" value={this.state.titleRecipe} onChange={this.handleChange} 
            placeholder="title" name="titleRecipe" className=
            {this.state.borderTitle ? "inputAdd inputAddRecipe" : "inputAdd inputAddRecipe redBorder"}/>
          <input type="text" value={this.state.textRecipe} onChange={this.handleChange} 
            placeholder="text" name="textRecipe" className=
            {this.state.borderText ? "inputAdd inputAddRecipe" : "inputAdd inputAddRecipe redBorder"}/>
          <button className='buttonAdd' onClick={this.AddRecipe}>Add</button>
      </div>
    );
  }
}
export default connect(state => ({
  tasks: state.tasks,
}), { AddRecipeByCategorieThunk, GetRecipeAll }) (AddRecipe);