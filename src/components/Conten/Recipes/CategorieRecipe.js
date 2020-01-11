import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddRecipe from './AddRecipe';
import { NavLink } from 'react-router-dom';
import { GetRecipeByCategorieThunk, RemoveRecipeThunk, 
  SetCategoryListThunk } from '../../../action/actionCreator';
import arrow from '../../../img/back.svg';


class CategorieRecipe extends Component {
  state = {
    title: '',
  }
  componentDidMount() {
    this.props.GetRecipeByCategorieThunk(this.props.match.params.categoryId);
    this.props.SetCategoryListThunk(this.props.match.params.categoryId);
  }
  DeleteRecipe = (id) => {
    this.props.RemoveRecipeThunk(id, this.props.match.params.categoryId);
  } 
   
  render(){
    return (
      <div>
        <NavLink to="/"><img className="Back" src={arrow} alt="Back"/></NavLink>
        <h3 className="TitleCategoryRecipe">{this.props.tasks.categoryList}</h3>
        <AddRecipe _id={this.props.match.params.categoryId} />
        <div>
          {this.props.tasks.recipeByCategorie.map(recipe => (
            <div className="categorie" key={recipe._id}>
              <NavLink to={`/recipe/${recipe._id}`}>
                <h2>{recipe.title}</h2>
                <h3>{recipe.text}</h3>
              </NavLink>
              <button className='delete buttonCategorie' 
              onClick={() => this.DeleteRecipe(recipe._id)}>Delete</button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default connect(state => ({
  tasks: state.tasks,
}), { GetRecipeByCategorieThunk, RemoveRecipeThunk, SetCategoryListThunk })(CategorieRecipe);