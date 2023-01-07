import HomePage from "../page/HomePage";
import AuthPage from "../page/AuthPage";



interface Routes {
    path: string
    element: JSX.Element
}

export enum RoutePath {
    home = "/home",
    auth = "/auth",
}

export const publicRoutes: Array<Routes> = [
    {path: RoutePath.auth, element: <AuthPage/>},
]
export const privateRoutes: Array<Routes> = [
    {path: RoutePath.home, element: <HomePage/>},
]