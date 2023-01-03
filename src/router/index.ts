import HomePage from "../page/HomePage";
import AuthPage from "../page/AuthPage";

type ArrayRoute = Record<string, { path: string, element: JSX.Element}>

type ArrayRoutes = Array<ArrayRoute>

export const publicRoutes = [
    {path: '/home', element: <HomePage/>},
    {path: '/auth', element: <AuthPage/>},
]