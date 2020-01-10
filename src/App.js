import React, { Component } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { BrowserRouter } from 'react-router-dom';
import Conten from './components/Conten/index';

class App extends Component {
    
    
    render() {
        return (
            <BrowserRouter>
                <Header />
                <Conten />
                <Footer />
            </BrowserRouter>
        );
    }
}
export default (App);