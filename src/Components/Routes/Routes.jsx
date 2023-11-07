import { createBrowserRouter,Link,RouterProvider } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Order/Order";
import Login from "../Auth/Login";
import Registr from "../Auth/Registr";
import ForgotPassowrd from "../Auth/ForgotPassowrd";
import PrivateRoute from "../Auth/PrivateRoute";

const router = createBrowserRouter([
    {
        path:"/",
        element:<Main/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"/menu",
                element:<Menu/>
            },
            {
                path:"/order",
                element:<PrivateRoute><Order/></PrivateRoute>
            },
            {
                path:"/order/:category",
                element:<PrivateRoute><Order/></PrivateRoute>
            },
            {
                path:"/login",
                element:<Login/>
            },
            {
                path:"/register",
                element:<Registr/>
            },
            {
                path:"/forgotpassword",
                element:<ForgotPassowrd/>
            }
        ]

    }

])

export default router