import React, { Component } from 'react';
import CategorieRecipe from './CategorieRecipe'



class CategoryAndRecipe extends Component {

  render(){
    return (
      <div>
        <CategorieRecipe categoryId={this.props.match.params.categoryId} 
        url={this.props.match.url}  />
      </div>
    );
  }
}
export default (CategoryAndRecipe);