import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AddRecipeByCategorieThunk } from '../../../action/actionCreator'



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
    this.props.AddRecipeByCategorieThunk(this.state.titleRecipe, this.state.textRecipe, this.props._id);
    this.setState({
        titleRecipe: '',
        textRecipe: '', 
    })
  }
    
  render(){
    return (
        <div>
            <input type="text" value={this.state.titleRecipe} onChange={this.handleChangeTitle} placeholder="title"/>
            <input type="text" value={this.state.textRecipe} onChange={this.handleChangeText} placeholder="text"/>
            <button className='buttonAdd' onClick={this.AddRecipe}>add</button>
        </div>
    );
  }
}
export default connect(state => ({
  tasks: state.tasks,
}), { AddRecipeByCategorieThunk }) (AddRecipe);