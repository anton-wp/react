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
            const newState  = {
                categories: data,
                recipeByCategorie: state.recipeByCategorie,
                recipeById: state.recipeById,
                recipeAll: state.recipeAll
            }
            return newState; 
        case CANGE_CATEGORIE :
            let newState4 = state.categories;
            for(let i = 0; i < newState4.length; i++) {
                if(newState4[i]._id === _id) {
                    newState4[i].isDeleted = !newState4[i].isDeleted;
                }else {
                    newState4[i].isDeleted = false;
                }
            }
            let newState5 = {
                categories: newState4,
                recipeByCategorie: state.recipeByCategorie,
                recipeById: state.recipeById,
                recipeAll: state.recipeAll
            };

            return newState5; 
        case SET_RECIPE_BY_CATEGORIES :
            const newState1  = {
                categories: state.categories,
                recipeByCategorie: recipe,
                recipeById: state.recipeById,
                recipeAll: state.recipeAll
            }
            return newState1; 
        case SET_RECIPE_BY_ID :
            const newState2 = {
                categories: state.categories,
                recipeByCategorie: state.recipeByCategorie,
                recipeById: recipe,
                recipeAll: state.recipeAll
            }
            return newState2;
        case SET_RECIPE_ALL :
            const newState3  = {
                categories: state.categories,
                recipeByCategorie: state.recipeByCategorie,
                recipeById: state.recipeById,
                recipeAll: recipe
            }
            return newState3;
        default:
            return state;
    }
};



export default tasks;



