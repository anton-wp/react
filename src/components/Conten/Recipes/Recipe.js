import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ChangeRecipe from './ChangeRecipe';
import { GetRecipeById } from '../../../action/actionCreator';
import arrow from '../../../img/back.svg';


class Recipe extends Component {
    state = {
        change: false,
    }
    
    componentDidMount() {
        this.props.GetRecipeById(this.props.match.params.recipeId);
        
    }
    edit = () => {
        this.setState({
            change: !this.state.change
        })
    }
    render(){
        return (
        <div>
            <Link to={`/${this.props.tasks.recipeById.categoryId}`}>
                <img className="Back" src={arrow} alt="Back"/>
            </Link>
            <h3 className="TitleCategoryRecipe">{this.props.tasks.recipeById.title}</h3>
            <h3 className="TextRecipe">{this.props.tasks.recipeById.text}</h3>
            {this.state.change ? <ChangeRecipe click={this.edit} /> : null}
            {!this.state.change ? <button onClick={this.edit} 
            className="app EditRecipe">Add description</button> : null}
            
        </div>
        );
    }
}
export default connect(state => ({
  tasks: state.tasks,
}), { GetRecipeById })(Recipe);