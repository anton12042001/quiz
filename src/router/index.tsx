import HomePage from "../page/HomePage";
import AuthPage from "../page/AuthPage";


interface Routes {
    path: string
    element: JSX.Element
}

export const publicRoutes: Array<Routes> = [
    {path: '/home', element: <HomePage/>},
    {path: '/auth', element: <AuthPage/>},
]