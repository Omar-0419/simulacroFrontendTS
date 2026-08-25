import { createBrowserRouter } from "react-router";

import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { NotFound } from "../pages/NotFound";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Login/>
    },
    {
        path: '/home',
        element: <Home/>
    },


    {
        path: '*',
        element: <NotFound/>
    }
]) 