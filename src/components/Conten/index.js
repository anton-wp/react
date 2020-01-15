import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Categories from './Categories';
import Recipe from './Recipes/Recipe';
import { GetCategoriesThunk, GetRecipeAll } from '../../action/actionCreator';
import { connect } from 'react-redux';
import CategoryAndRecipe from './CategoryAndRecipe/index'

class Conten extends Component {
    
    componentDidMount() {
        this.props.GetCategoriesThunk();
        this.props.GetRecipeAll();
    }
    
    render() {
        return (
            <div className='categories'>
                <Route exact path='/' component={Categories}/>
                <Route exact path="/:categoryId" render={({ match }) => (<CategoryAndRecipe match={match} />)}  />
                <Route exact path="/recipe/:recipeId" component={Recipe} />
            </div>
        );
    }
}

export default connect(state => ({
    tasks: state.tasks,
}), { GetCategoriesThunk, GetRecipeAll }) (Conten);