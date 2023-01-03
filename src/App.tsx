import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import {Provider,} from "react-redux";
import {store} from './reduxToolkit'
import AppRouter from "./components/AppRouter/AppRouter";

const App = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <AppRouter/>
            </Provider>
        </BrowserRouter>
    );
};

export default App;