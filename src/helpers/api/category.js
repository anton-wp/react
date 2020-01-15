import * as axios from 'axios';
import { API_HOST } from '../../config';


export function getCategories () {
    return axios.get(`${API_HOST}category/all`)
    .then(response => {
        return response.data;
    })
}
export function getCategoryList (_id) {
    return axios.get(`${API_HOST}category/categoryList/${_id}`)
    .then(response => {
        return response.data;
    })
}

export function removeCategorie (_id) {
    return axios.delete(`${API_HOST}category/${_id}`)
}
export function addCategorie (title, parentId) {
    return axios.post(`${API_HOST}category/create`, {
        title: title,
        parentId: parentId
    })
}
export function updateCategorie (title, id, parentId) {
    return axios.put(`${API_HOST}category/update`, {
        _id: id,
        title: title,
        parentId: parentId
    })
}
