import { createBrowserRouter, Navigate } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../pages/Home/Home";
import DragonNews from "../pages/Shared/DragonNews/DragonNews";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                children: [
                    {
                        path: "",
                        element: <Navigate to={'category/01'}></Navigate>
                    },
                    {
                        path: '/category/:id',
                        element: <DragonNews></DragonNews>,
                        loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
                    }
                ]
            }
        ]
    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/signup',
        element: <Signup></Signup>
    }
])

export default router;