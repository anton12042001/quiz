import React from 'react';
import {Routes, Route} from 'react-router-dom'
import {publicRoutes} from "../../router";


const AppRouter = () => {
    return (
        <Routes>
            {publicRoutes.map(route =>
                <Route
                    element={route.element}
                    path={route.path}
                    key={route.path}
                />
            )}
        </Routes>
    );
};

export default AppRouter;