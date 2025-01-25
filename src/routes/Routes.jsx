import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home";
import Statistics from "../pages/Statistics";
import Dashboard from "../pages/Dashboard";
import Cards from "../components/Cards";
import CardDetails from "../components/CardDetails";
import DashboardCart from "../components/DashboardCart";
import DashboardWishlist from "../components/DashboardWishlist";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayouts></MainLayouts>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('../productCategory.json'),
                children: [
                    {
                        path: '/',
                        element: <Cards></Cards>,
                        loader: () => fetch('../products.json')

                    },
                    {
                        path: '/category/:category',
                        element: <Cards></Cards>,
                        loader: () => fetch('../products.json')

                    },

                ],

            },
            {
                path: '/details/:id',
                element: <CardDetails></CardDetails>,
                loader: () => fetch('../products.json')

            },
            {
                path: '/statistics',
                element: <Statistics></Statistics>
            },
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>,
                // children: [
                //     {
                //         path: '/cart',
                //         element: <DashboardCart></DashboardCart>
                //     },
                //     {
                //         path: '/wishlist',
                //         element: <DashboardWishlist></DashboardWishlist>
                //     }
                // ]
            },
        ]
    }
])

export default router