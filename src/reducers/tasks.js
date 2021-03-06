import { SET_CATEGORIES, CANGE_CATEGORIE, SET_RECIPE_BY_CATEGORIES, 
    SET_RECIPE_BY_ID, SET_RECIPE_ALL, SET_CATEGORY_LIST } from '../config';

let store = {
    categories: [],
    recipeByCategorie: [],
    recipeById: [],
    recipeAll: [],
    categoryList: []
}



const tasks = (state = store, { data, type, _id, recipe}) => {
    switch (type) { 
        case SET_CATEGORIES :
            return {...state, categories: data} ; 
        case CANGE_CATEGORIE :
            return {...state, categories: state.categories.map(category =>
                category._id === _id ? 
                {...category, isDeleted: !category.isDeleted} :
                {...category, isDeleted: false}
                )};
        case SET_RECIPE_BY_CATEGORIES :
            return {...state, recipeByCategorie: recipe}; 
        case SET_CATEGORY_LIST :
            return {...state, categoryList: data}; 
        case SET_RECIPE_BY_ID :
            return {...state, recipeById: recipe};
        case SET_RECIPE_ALL :
            return {...state, recipeAll: recipe};
        default:
            return state;
    }
};



export default tasks;



