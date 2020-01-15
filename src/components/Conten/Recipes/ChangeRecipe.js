import React, { Component } from 'react';
import { connect } from 'react-redux';
import { UpdateRecipeThunk } from '../../../action/actionCreator'


class ChangeRecipe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            text: '',   
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        })
    } 
    componentDidMount() {
        this.setState({
            title: this.props.tasks.recipeById.title,
            text: this.props.tasks.recipeById.text,
        });
    } 
    ChangeRecipe = () => {
        if(this.state.title !== '' && this.state.text !== '') {
            this.props.click();
            this.props.UpdateRecipeThunk(this.props.tasks.recipeById._id, this.state.title, 
                this.state.text, this.props.tasks.recipeById.categoryId) 
        }else {
            alert('Все поля необходимо заполнить');
        }
    }
    render(){
        return (
            <div className="ChangeRecipe">
                <input type="text" onChange={this.handleChange} name="title"
                    value={this.state.title} className="inputAdd inputAddRecipe" />
                <input type="text" onChange={this.handleChange} name="text" 
                    value={this.state.text} className="inputAdd inputAddRecipe"/>
                <button onClick={this.ChangeRecipe} className="app">Edit</button>
                <button onClick={this.props.click} className="app">Back</button>
            </div>
        );
    }
}
export default connect(state => ({
  tasks: state.tasks,
}), { UpdateRecipeThunk })(ChangeRecipe);