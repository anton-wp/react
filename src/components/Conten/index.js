import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Categories from './Categories';
import CategorieRecipe from './Recipes/CategorieRecipe';
import Recipe from './Recipes/Recipe';
import { GetCategoriesThunk, GetRecipeAll } from '../../action/actionCreator';
import { connect } from 'react-redux';
import Test from './Recipes/test'

class Conten extends Component {
    
    componentDidMount() {
        this.props.GetCategoriesThunk();
        this.props.GetRecipeAll();
    }


    render() {
        return (
            <div className='categories'>
                <Route exact path='/' component={Categories}/>
                {/* <Route exact path="/categorie/:categoryId" component={Test}/> */}
                <Route exact path="/:categoryId" render={({ match }) => (<Test match={match} />)}  />
                {/* <Route path="/categorie/5e15a853f226f004002ac6d8/categorie/:categoryId" component={CategorieRecipe} /> */}
                
              

                {/* <Route exact path={`${this.props.tasks.url}/categorie/:categoryId`} component={CategorieRecipe} /> */}
                <Route exact path="/recipe/:recipeId" component={Recipe} />
            </div>
        );
    }
}

export default connect(state => ({
    tasks: state.tasks,
}), { GetCategoriesThunk, GetRecipeAll }) (Conten);