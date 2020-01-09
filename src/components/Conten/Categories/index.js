import React, { Component } from 'react';
import CategorieAdd from './CategorieAdd';
import Categorie from './Categorie';
import './index.css'


export default class Categories extends Component {

    render() {
        return (
            <div>
                <CategorieAdd />
                <Categorie />
            </div>
        );
    }
}