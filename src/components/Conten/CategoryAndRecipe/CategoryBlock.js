import React, { Component } from 'react';
import { connect } from 'react-redux';
import Categorie from '../Categories/Categorie';
import CategorieAdd from '../Categories/CategorieAdd';
import { Link } from 'react-router-dom';
import { GetRecipeByCategorieThunk, RemoveRecipeThunk, 
  SetCategoryListThunk } from '../../../action/actionCreator';
import arrow from '../../../img/back.svg';


class CategoryBlock extends Component {

    componentDidUpdate(){
        if (this.props.tasks.categoryListId !== this.props.categoryId){
            this.props.GetRecipeByCategorieThunk(this.props.categoryId);
            this.props.SetCategoryListThunk(this.props.categoryId);
        }
    }
    componentDidMount() {
        this.props.GetRecipeByCategorieThunk(this.props.categoryId);
        this.props.SetCategoryListThunk(this.props.categoryId);
    }
    DeleteRecipe = (id) => {
        this.props.RemoveRecipeThunk(id, this.props.categoryId);
    } 
    
    render(){
        const category = this.props.tasks.categories.filter(category => category._id === this.props.categoryId);
        let url = ''
        if(category[0]) {
        url = category[0].parentId ? category[0].parentId : '' ;
        } 
        return (
        <div>
            <Link to={`/${url}`}><img className="Back" src={arrow} alt="Back"/></Link>
            <h3 className="TitleCategoryRecipe">{this.props.tasks.categoryListTitle}</h3>
            <div className="blockCategory">
                <CategorieAdd parentId={this.props.categoryId} />
                <Categorie  url={this.props.url} _id={this.props.categoryId} />
            </div>
        </div>
        );
    }
}
export default connect(state => ({
  tasks: state.tasks,
}), { GetRecipeByCategorieThunk, RemoveRecipeThunk, SetCategoryListThunk })(CategoryBlock);