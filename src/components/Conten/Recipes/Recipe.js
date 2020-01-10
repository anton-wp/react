import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import ChangeRecipe from './ChangeRecipe';
import { GetRecipeById } from '../../../action/actionCreator'


class Recipe extends Component {
    state = {
        change: false,
    }
    
    componentDidMount() {
        this.props.GetRecipeById(this.props.match.params.recipeId);
        
    }
    click = () => {
        this.setState({
            change: !this.state.change
        })
    }
    render(){
        return (
        <div>
            <h2>{this.props.tasks.recipeById.title}</h2>
            <h3>{this.props.tasks.recipeById.text}</h3>
            {this.state.change ? <ChangeRecipe click={this.click} /> : null}
            <button onClick={this.click}>click</button>
            <NavLink to={`/categorie/${this.props.tasks.recipeById.categoryId}`}>
            назад
            </NavLink>
        </div>
        );
    }
}
export default connect(state => ({
  tasks: state.tasks,
}), { GetRecipeById })(Recipe);