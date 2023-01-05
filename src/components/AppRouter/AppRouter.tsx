import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'
import {privateRoutes, publicRoutes, RoutePath} from "../../router";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "../../firebase";

const AppRouter = () => {
    const [userData, userLoading] = useAuthState(auth)

    if(userLoading){
        return <h1>Загрузка</h1>
    }


    if (userData) {
        return(
            <Routes>
                {privateRoutes.map(route =>
                    <Route
                        element={route.element}
                        path={route.path}
                        key={route.path}
                    />
                )}
                <Route path={"*"} element={<Navigate to={RoutePath.home}/>} />
            </Routes>
        )
    }
    else {
        return (
            <Routes>
                {publicRoutes.map(route =>
                    <Route
                        element={route.element}
                        path={route.path}
                        key={route.path}
                    />
                )}
                <Route path={"*"} element={<Navigate to={RoutePath.auth}/>} />
            </Routes>
        )
    }
};

export default AppRouter;