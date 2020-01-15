import React from 'react';
import Header from './components/Header/Header';
import Footer  from './components/Footer/Footer';
import { BrowserRouter } from 'react-router-dom';
import Conten from './components/Conten/index';

function App () {
    return (
        <BrowserRouter>
            <Header />
            <Conten />
            <Footer />
        </BrowserRouter>
    );
}
export default (App);