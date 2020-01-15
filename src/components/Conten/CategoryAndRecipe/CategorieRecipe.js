import React, { Component } from 'react';
import RecipeBlock from './RecipeBlock'
import CategoryBlock from './CategoryBlock';


class CategorieRecipe extends Component {
  
  render(){
    return (
      <div>
        <CategoryBlock categoryId={this.props.categoryId} url={this.props.url} />
        <RecipeBlock categoryId={this.props.categoryId} />
      </div>
    );
  }
}
export default (CategorieRecipe);