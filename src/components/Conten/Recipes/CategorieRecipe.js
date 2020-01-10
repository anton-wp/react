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
    this.props.GetRecipeByCategorieThunk(this.props.match.params.categoryId);
    for(let i = 0; i < this.props.tasks.categories.length; i++) {
      if(this.props.tasks.categories[i]._id === this.props.match.params.categoryId) {
        this.setState({
          title: this.props.tasks.categories[i].title
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
          {this.props.tasks.recipeByCategorie.map(recipe => (
            <div className="categorie" key={recipe._id}>
              <NavLink to={`/recipe/${recipe._id}`}>
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