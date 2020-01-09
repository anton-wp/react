import { SET_CATEGORIES, CANGE_CATEGORIE, SET_RECIPE_BY_CATEGORIES, 
    SET_RECIPE_BY_ID, SET_RECIPE_ALL } from '../config';



const tasks = (state = [[],[],[],[]], { data, type, _id, recipe}) => {
    switch (type) { 
        case SET_CATEGORIES :
            let store = [data, [], [], state[3]]       
        return store;
        case CANGE_CATEGORIE :
            let stor = state[0];
            for(let i = 0; i < stor.length; i++) {
                if(stor[i]._id === _id) {
                    stor[i].isDeleted = !stor[i].isDeleted;
                }else {
                    stor[i].isDeleted = false;
                }
            }
            return [stor, state[1], state[2], state[3]];
        case SET_RECIPE_BY_CATEGORIES :
            let recipeCategorie = [state[0], recipe, [], state[3]]   
        return recipeCategorie;
        case SET_RECIPE_BY_ID :
            let recipeCategorieId = [state[0], state[1], recipe, state[3]]   
        return recipeCategorieId;
        case SET_RECIPE_ALL :
            let recipeAll = [state[0], state[1], state[2], recipe]  
        return recipeAll;

        default:
            return state;
    }
};



export default tasks;



