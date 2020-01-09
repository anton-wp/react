import React, { Component } from 'react';
import { connect } from 'react-redux';
import { UpdateRecipeThunk } from '../../../action/actionCreator'


class ChangeRecipe extends Component {
    state = {
        title: '',
        text: '',
        
    }
    componentDidMount() {
        this.setState({
            title: this.props.tasks[2].title,
            text: this.props.tasks[2].text,
        });
    } 
    handleChangeTitle = ({target: {value} }) => {
        this.setState({
            title: value,
        }) 
    }
    handleChangeText = ({target: {value} }) => {
        this.setState({
            text: value,
        }) 
    }
    ChangeRecipe = () => {
        console.log(this.props.tasks[3])
        this.props.click();
        this.props.UpdateRecipeThunk(this.props.tasks[2]._id, this.state.title, 
            this.state.text, this.props.tasks[2].categoryId) 
    }
    render(){
        return (
        <div>
            <input type="text" onChange={this.handleChangeTitle} value={this.state.title}/>
            <input type="text" onChange={this.handleChangeText} value={this.state.text}/>
            <button onClick={this.ChangeRecipe}>click</button>
        </div>
        );
    }
}
export default connect(state => ({
  tasks: state.tasks,
}), { UpdateRecipeThunk })(ChangeRecipe);