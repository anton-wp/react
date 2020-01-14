import React, { Component } from 'react';
import CategorieRecipe from './CategorieRecipe'



class Test extends Component {
  state = {
    title: '',
    key: ''
  }
 
   
  render(){

    return (
      <div>
        <CategorieRecipe categoryId={this.props.match.params.categoryId} 
        url={this.props.match.url}  />
      </div>
    );
  }
}
export default (Test);