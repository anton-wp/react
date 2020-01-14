import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddRecipe from './AddRecipe';
import Categorie from '../Categories/Categorie';
import CategorieAdd from '../Categories/CategorieAdd';
import { Link } from 'react-router-dom';
import { GetRecipeByCategorieThunk, RemoveRecipeThunk, 
  SetCategoryListThunk } from '../../../action/actionCreator';
import arrow from '../../../img/back.svg';


class CategorieRecipe extends Component {
  state = {
    title: '',
    key: ''
  }
  componentDidUpdate(){
    // console.log(this.props)
    // console.log(prevProps)
    if (this.props.tasks.categoryListId !== this.props.categoryId){
    this.props.GetRecipeByCategorieThunk(this.props.categoryId);
    this.props.SetCategoryListThunk(this.props.categoryId);
    
    }
  }
  componentDidMount() {
    console.log('2')
    this.props.GetRecipeByCategorieThunk(this.props.categoryId);
    this.props.SetCategoryListThunk(this.props.categoryId);
  }
  DeleteRecipe = (id) => {
    this.props.RemoveRecipeThunk(id, this.props.categoryId);
  } 
   
  render(){

    return (
      <div>
        <Link to="/"><img className="Back" src={arrow} alt="Back"/></Link>
        <h3 className="TitleCategoryRecipe">{this.props.tasks.categoryListTitle}</h3>
        <CategorieAdd parentId={this.props.categoryId} />
        <Categorie  url={this.props.url} _id={this.props.categoryId} />
        <AddRecipe _id={this.props.categoryId} />
        <div>
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
      </div>
    );
  }
}
export default connect(state => ({
  tasks: state.tasks,
}), { GetRecipeByCategorieThunk, RemoveRecipeThunk, SetCategoryListThunk })(CategorieRecipe);