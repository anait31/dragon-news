import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../pages/Home/Home";
import DragonNews from "../pages/Shared/DragonNews/DragonNews";

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
                        path: '/category/:id',
                        element: <DragonNews></DragonNews>,
                        loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
                    }
                ]
            }
        ]
    }
])

export default router;