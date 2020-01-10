import { SET_CATEGORIES, CANGE_CATEGORIE, SET_RECIPE_BY_CATEGORIES, 
    SET_RECIPE_BY_ID, SET_RECIPE_ALL } from '../config';

let store = {
    categories: [],
    recipeByCategorie: [],
    recipeById: [],
    recipeAll: []
}



const tasks = (state = store, { data, type, _id, recipe}) => {
    switch (type) { 
        case SET_CATEGORIES :
            return {...state, categories: data} ; 
        case CANGE_CATEGORIE :
            // let newState4 = state.categories;
            // for(let i = 0; i < newState4.length; i++) {
            //     if(newState4[i]._id === _id) {
            //         newState4[i].isDeleted = !newState4[i].isDeleted;
            //     }else {
            //         newState4[i].isDeleted = false;
            //     }
            // }
            // let newState5 = {
            //     categories: newState4,
            //     recipeByCategorie: state.recipeByCategorie,
            //     recipeById: state.recipeById,
            //     recipeAll: state.recipeAll
            // };
            
            return {...state, categories: state.categories.map(category =>
                category._id === _id ? 
                {...category, isDeleted: !category.isDeleted} :
                {...category, isDeleted: false}
                )}
                ;
            
             
        case SET_RECIPE_BY_CATEGORIES :
            return {...state, recipeByCategorie: recipe}; 
        case SET_RECIPE_BY_ID :
            return {...state, recipeById: recipe};
        case SET_RECIPE_ALL :
            return {...state, recipeAll: recipe};
        default:
            return state;
    }
};



export default tasks;



