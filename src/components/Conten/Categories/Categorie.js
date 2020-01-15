import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RemoveCategorieThunk, ChangeCategorie } from '../../../action/actionCreator';
import ChangeCategories from './ChangeCategories';
import { Link } from 'react-router-dom';



class Categorie extends Component {
    
    DeleteCategorie = (_id) => {
        this.props.RemoveCategorieThunk(_id);
        
    }
    ChangeCategorie = (_id) => {
        this.props.ChangeCategorie(_id);
    }
    render() { 
        const parentId = this.props._id ? this.props._id : null;
        const result =  this.props.tasks.categories.filter(category => category.parentId === parentId);
        return (
            <div>
                {result.map(category => (
                    <div className='categorie' key={category._id}>
                        <Link to={`/${category._id}`}>
                            <h4 className='title'>{category.title}</h4>
                        </Link>    
                        {category.isDeleted ? <ChangeCategories parentId={this.props._id} id={category._id} title={category.title}/>  : null}
                        <button className='delete buttonCategorie' onClick={() => this.DeleteCategorie(category._id)}>Delete</button>
                        {!category.isDeleted ? <button className='change buttonCategorie' onClick={() => this.ChangeCategorie(category._id)}>Edit</button> : null}
                    </div>
                ))}    
            </div>
        );
    }
}

export default connect(state => ({
    tasks: state.tasks,
}), { RemoveCategorieThunk, ChangeCategorie }) (Categorie);