import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddRecipe from './AddRecipe';
import { NavLink } from 'react-router-dom';
import { GetRecipeByCategorieThunk, RemoveRecipeThunk } from '../../../action/actionCreator'


class CategorieRecipe extends Component {
  state = {
    title: '',
  }
  componentDidMount() {
    this.props.GetRecipeByCategorieThunk(this.props._id);
    for(let i = 0; i < this.props.tasks[0].length; i++) {
      if(this.props.tasks[0][i]._id === this.props._id) {
        this.setState({
          title: this.props.tasks[0][i].title
        })
      }
    }
  }
  DeleteRecipe = (id) => {
    this.props.RemoveRecipeThunk(id, this.props._id);
  }    
  render(){
    return (
      <div>
        <h3>{this.state.title}</h3>
        <AddRecipe _id={this.props._id} />
        <div>
          {this.props.tasks[1].map(recipe => (
            <div className="categorie" key={recipe._id}>
              <NavLink to={recipe._id}>
                <h2>{recipe.title}</h2>
                <h3>{recipe.text}</h3>
              </NavLink>
              <button className='delete' 
              onClick={() => this.DeleteRecipe(recipe._id)}>delete</button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default connect(state => ({
  tasks: state.tasks,
}), { GetRecipeByCategorieThunk, RemoveRecipeThunk })(CategorieRecipe);