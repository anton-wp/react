import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Categories from './Categories';
import CategorieRecipe from './Recipes/CategorieRecipe';
import { connect } from 'react-redux';
import Recipe from './Recipes/Recipe';

class Conten extends Component {

    render() {
        return (
            <div className='categories'>
                <Route exact path='/' component={Categories}/>
                {this.props.tasks[0].map(category => (
                    <div key={category._id}>
                        <Route path={'/' + category._id}
                        render={(props)=><CategorieRecipe _id={category._id} {...props}/>}/>   
                    </div>   
                ))}
                {this.props.tasks[3].map(recipe => (
                    <div key={recipe._id}>
                        <Route path={'/' + recipe._id}
                        render={(props)=><Recipe categoryId={recipe.categoryId} _id={recipe._id} {...props}/>}/>   
                    </div>   
                ))}
            </div>
        );
    }
}

export default connect(state => ({
    tasks: state.tasks,
})) (Conten);