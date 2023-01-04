import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../layout/Main';
import Home from '../../Pages/Home/Home';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            // {
            //     path: '/login',
            //     element: <Login></Login>
            // },
            // {
            //     path: '/register',
            //     element: <Register></Register>
            // },
        ]
    },
    // {
    //     path: '/dashboard',
    //     element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
    //     errorElement: <ErrorPage />,
    //     children: [
    //         {
    //             path: '/dashboard',
    //             element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
    //         },
    //         {
    //             path: '/dashboard/myorders/',
    //             element: <PrivateRoute> <MyOrders></MyOrders></PrivateRoute>
    //         },
    //         {
    //             path: '/dashboard/addproduct/',
    //             element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
    //         },
    //     ]
    // }

])