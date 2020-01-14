import { SET_CATEGORIES, CANGE_CATEGORIE, SET_RECIPE_BY_CATEGORIES, SET_RECIPE_BY_ID, SET_RECIPE_ALL, SET_CATEGORY_LIST } from '../config';
import { getCategories, removeCategorie, addCategorie, 
    updateCategorie, getCategoryList } from '../helpers/api/category';
import { getRecipeByCategories, addRecipe, removeRecipe, updateRecipe, 
    getRecipeById, getAllRecipe } from '../helpers/api/recipes';


export const SetCategories = (data) => ({
    type: SET_CATEGORIES,
    data
});
export const SetCategoryList = (data, id) => ({
    type: SET_CATEGORY_LIST,
    data,
    id
});
export const ChangeCategorie = (_id) => ({
    type: CANGE_CATEGORIE,
    _id
});
export const SetCategoryListThunk = (id) => {
    return (dispatch) => {
        getCategoryList(id).then(data => {
            dispatch(SetCategoryList(data, id));
        });
    }
}
export const GetCategoriesThunk = () => {
    return (dispatch) => {
        getCategories().then(data => {
            dispatch(SetCategories(data));
        });
    }
}
export const RemoveCategorieThunk = (_id) => {
    return (dispatch) => {
        removeCategorie(_id).then(() => {
            dispatch(GetCategoriesThunk());
        });
    }
}
export const AddCategorieThunk = (title, parentId) => {
    return (dispatch) => {
        addCategorie(title, parentId).then(() => {
            dispatch(GetCategoriesThunk());
        });
    }
}
export const UpdateCategorieThunk = (title, _id, parentId) => {
    return (dispatch) => {
        updateCategorie(title, _id, parentId).then(() => {
            dispatch(GetCategoriesThunk());
        });
    }
}
//////RECIPE

export const SetRecipeAll = (recipe) => ({
    type: SET_RECIPE_ALL,
    recipe
})
export const SetRecipeById = (recipe) => ({
    type: SET_RECIPE_BY_ID,
    recipe
})

export const SetRecipeByCategories = (recipe) => ({
    type: SET_RECIPE_BY_CATEGORIES,
    recipe
})
export const GetRecipeAll = () => {
    return (dispatch) => {
        getAllRecipe().then(recipe => {
            dispatch(SetRecipeAll(recipe));
        });
    }
}
export const GetRecipeById = (id) => {
    return (dispatch) => {
        getRecipeById(id).then(recipe => {
            dispatch(SetRecipeById(recipe));
        });
    }
}
export const GetRecipeByCategorieThunk = (id) => {
    return (dispatch) => {
        getRecipeByCategories(id).then(recipe => {
            dispatch(SetRecipeByCategories(recipe));
            dispatch(SetRecipeAll(recipe));
        });
    }
}
export const AddRecipeByCategorieThunk = (title, text, id) => {
    return (dispatch) => {
        addRecipe(title, text, id).then(() => {
            dispatch(GetRecipeByCategorieThunk(id));
        });
    }
}
export const RemoveRecipeThunk = (id, idCategorie) => {
    return (dispatch) => {
        removeRecipe(id).then(() => {
            dispatch(GetRecipeByCategorieThunk(idCategorie));
        });
    }
}
export const UpdateRecipeThunk = (id, title, text, categoryId) => {
    return (dispatch) => {
        updateRecipe(id, title, text, categoryId).then(() => {
            dispatch(GetRecipeById(id));
        });
    }
}
