import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import MainLayout from "../layouts/MainLayout/MainLayout";
import Blog from "../pages/Blog/Blog";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import MyToys from "../pages/MyToys/MyToys";
import ItemDetails from "../pages/shared/ItemDetails/ItemDetails";
import AddAToy from "../pages/AddAToy/AddAToy";
import AllToys from "../pages/AllToys/AllToys";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import PrivateRoute from "./PrivateRoute";

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/blog',
                element: <Blog />
            },
            {
                path: '/all-toys',
                element: <AllToys />,
                loader: () => fetch('https://play-time-ca.onrender.com/animal-toys?length=true')
            },
            {
                path: '/my-toys',
                element: <PrivateRoute><MyToys /></PrivateRoute>
            },
            {
                path: '/add-a-toy',
                element: <PrivateRoute><AddAToy /></PrivateRoute>
            },
            {
                path: '/toys/:id',
                element: <PrivateRoute><ItemDetails /></PrivateRoute>,
                loader: ({params}) => fetch(`https://play-time-ca.onrender.com/animal-toys?id=${params.id}`)
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/registration',
                element: <Registration />
            }
        ]
    }
])

export default Routes;