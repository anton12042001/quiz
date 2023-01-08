import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import {Provider,} from "react-redux";
import {store} from './reduxToolkit'
import AppRouter from "./components/AppRouter/AppRouter";
import Header from "./components/Header/Header";

const App = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <Header/>
                <AppRouter/>
            </Provider>
        </BrowserRouter>
    );
};

export default App;