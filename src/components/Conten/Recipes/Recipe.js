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
        this.props.GetRecipeById(this.props._id);
    }
    click = () => {
        console.log(this.props.tasks[3])
        this.setState({
            change: !this.state.change
        })
    }
    render(){
        return (
        <div>
            <h2>{this.props.tasks[2].title}</h2>
            <h3>{this.props.tasks[2].text}</h3>
            {this.state.change ? <ChangeRecipe click={this.click} /> : null}
            <button onClick={this.click}>click</button>
            <NavLink to={this.props.categoryId}>
            назад
            </NavLink>
        </div>
        );
    }
}
export default connect(state => ({
  tasks: state.tasks,
}), { GetRecipeById })(Recipe);