import * as axios from 'axios';
import { API_HOST } from '../../config';


export function getCategories () {
    return axios.get(`${API_HOST}category/all`)
    .then(response => {
        return response.data;
    })
}
export function removeCategorie (_id) {
    return axios.delete(`${API_HOST}category/${_id}`)
}
export function addCategorie (title) {
    return axios.post(`${API_HOST}category/create`, {
        title: title
      })
}
export function updateCategorie (title, id, parentId) {
    return axios.put(`${API_HOST}category/update`, {
        _id: id,
        title: title,
        parentId: parentId
      })
}