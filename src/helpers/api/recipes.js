import * as axios from 'axios';
import { API_HOST } from '../../config';



export function getAllRecipe () {
  return axios.get(`${API_HOST}recipe/all`)
  .then(response => {
      return response.data;
  })
}
export function getRecipeByCategories (id) {
  return axios.get(`${API_HOST}recipe/byCategory/${id}`)
  .then(response => {
      return response.data;
  })
}

export function getRecipeById (id) {
  return axios.get(`${API_HOST}recipe/item/${id}`)
  .then(response => {
      return response.data;
  })
}

export function addRecipe (title, text, id) {
    return axios.post(`${API_HOST}recipe/create`, {
        title: title,
        text: text,
        categoryId: id
      })
}
export function removeRecipe (id) {
  return axios.delete(`${API_HOST}recipe/${id}`)
}
export function updateRecipe (id, title, text, categoryId) {
  return axios.put(`${API_HOST}recipe/update`, {
      _id: id,
      title: title,
      text: text,
      categoryId: categoryId
    })
}