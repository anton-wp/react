import React, { Component } from 'react';
import { connect } from 'react-redux';
import { UpdateCategorieThunk } from '../../../action/actionCreator';


class ChangeCategories extends Component {
    state = {
        title: '',
        parentId: ''
    }
     
    componentDidMount() {
        this.setState({
            title: this.props.title,
        });
    } 
    handleChange = ({target: {value} }) => {
        this.setState({
            title: value,
        })
    }
    Edit = () => {
        this.props.UpdateCategorieThunk(this.state.title, this.props.id, this.state.parentId);
    }
   
    render() {
        return (
            <div>
                <input type="text" className="Change" onChange={this.handleChange} value={this.state.title}/>
                <button className='app' onClick={() => this.Edit()} >Edit</button>
            </div>
        );
    }
}

export default connect(state => ({
    tasks: state.tasks,
}), { UpdateCategorieThunk }) (ChangeCategories);