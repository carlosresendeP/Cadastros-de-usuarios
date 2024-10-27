import {createBrowserRouter} from "react-router-dom"
import Home from "./pages/home"
import ListUsers from "./pages/ListUsers/index"

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },

    {
        path: '/lista-de-usuarios',
        element: <ListUsers />
    }
])

export default Router