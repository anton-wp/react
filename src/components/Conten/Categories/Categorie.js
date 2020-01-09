import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GetCategoriesThunk, RemoveCategorieThunk,
     ChangeCategorie, GetRecipeAll } from '../../../action/actionCreator';
import ChangeCategories from './ChangeCategories';
import { NavLink } from 'react-router-dom';



class Categorie extends Component {
    state = {
        tasks: '',
    }
    componentDidMount() {
        // this.props.GetCategoriesThunk();
        this.props.GetRecipeAll();
    } 
    DeleteCategorie = (_id) => {
        this.props.RemoveCategorieThunk(_id);
    }
    ChangeCategorie = (_id) => {
        this.props.ChangeCategorie(_id);
        
    } 

    render() { 
        return (
            <div >
                {this.props.tasks[0].map(category => (
                    <div className='categorie' key={category._id}>
                        <NavLink to={category._id}>
                            <h4 className='title'>{category.title}</h4>
                        </NavLink>    
                        {category.isDeleted ? <ChangeCategories id={category._id} title={category.title}/>  : null}
                        <button className='delete' onClick={() => this.DeleteCategorie(category._id)}>delete</button>
                        {!category.isDeleted ? <button className='change' onClick={() => this.ChangeCategorie(category._id)}>change</button> : null}
                    </div>
                ))}
            </div>
        );
    }
}

export default connect(state => ({
    tasks: state.tasks,
}), { GetCategoriesThunk, RemoveCategorieThunk, ChangeCategorie, GetRecipeAll }) (Categorie);