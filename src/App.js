import React, { Component } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { BrowserRouter } from 'react-router-dom';
import Conten from './components/Conten/index';
import { GetCategoriesThunk, GetRecipeAll } from './action/actionCreator';
import { connect } from 'react-redux';



class App extends Component {
    
    componentDidMount() {
        this.props.GetCategoriesThunk();
        this.props.GetRecipeAll();
    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header />
                    <Conten />
                    <Footer />
                </div>
            </BrowserRouter>
        );
    }
}
export default connect(state => ({
    tasks: state.tasks,
}), { GetCategoriesThunk, GetRecipeAll })(App);