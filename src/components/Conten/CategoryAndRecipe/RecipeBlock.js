import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { RemoveRecipeThunk } from '../../../action/actionCreator';
import AddRecipe from '../Recipes/AddRecipe';



class RecipeBlock extends Component {
  
  DeleteRecipe = (id) => {
    this.props.RemoveRecipeThunk(id, this.props.categoryId);
  } 
   
  render(){
    return (
      <div>
          <AddRecipe _id={this.props.categoryId} />
          {this.props.tasks.recipeByCategorie.map(recipe => (
              <div className="categorie" key={recipe._id}>
                <Link to={`/recipe/${recipe._id}`}>
                  <h2>{recipe.title}</h2>
                  <h3>{recipe.text}</h3>
                </Link>
                <button className='delete buttonCategorie' 
                onClick={() => this.DeleteRecipe(recipe._id)}>Delete</button>
              </div>
          ))}
      </div>
    );
  }
}
export default connect(state => ({
  tasks: state.tasks,
}), { RemoveRecipeThunk })(RecipeBlock);