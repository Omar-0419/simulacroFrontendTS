import { createBrowserRouter } from "react-router";

/*Public*/
import { Login } from "../pages/public/Login";
import { NotFound } from "../pages/public/NotFound";

/*Private*/
import { Categories } from "../pages/private/Categories";
import { CategoryDetail } from "../pages/private/CategoryDetail";
import { CreateCategory } from "../pages/private/CreateCategory";
import { Favorites } from "../pages/private/Favorites";
import { Home } from "../pages/private/Home";
import { ProductDetail } from "../pages/private/ProductDetail";
import { Products } from "../pages/private/Products";
import { requirsAuth } from "../loaders/authLoader";

import { MainLayout } from "../layouts/MainLayout"; 


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Login/>
    },

    {
        element: <MainLayout/>,
        loader: requirsAuth,

        children: [
            {
                path: '/categories',
                element: <Categories/>
            },

            {
                path: '/categories/:id',
                element: <CategoryDetail/>
            },

            {
                path: '/createCategory',
                element: <CreateCategory/>
            },

            {
                path: '/favorites',
                element: <Favorites/>
            },

            {
                path: '/products',
                element: <Products/>
            },

            {
                path: '/products/:id',
                element: <ProductDetail/>
            }, 

            {
                path: '/home',
                element: <Home/>
            }
        ]
    },

    {
        path: '*',
        element: <NotFound/>
    }
]) 