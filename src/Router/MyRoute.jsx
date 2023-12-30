import { createBrowserRouter } from "react-router-dom";
import AddCoffee from "../components/AddCoffee";
import UpdateCoffee from "../components/UpdateCoffee";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";
import Users from "../components/Users/Users";

const MyRoute = createBrowserRouter([
    {
        path: '/',
        element:<MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                // load data 
                loader: ()=>fetch('http://localhost:5000/coffee')
            },
            {
                path: '/addcoffee',
                element: <AddCoffee></AddCoffee>
            },
            {
                path: '/updatecoffee/:id',
                element: <UpdateCoffee></UpdateCoffee>,
                // destructure params to get id from the url hit
                loader: ({params})=>fetch(`http://localhost:5000/coffee/${params.id}`)
            },
            {
                path: '/user',
                element:<Users></Users>,
                loader: ()=>fetch('http://localhost:5000/user')
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    },
    {
        path: '/login',
        element: <Login></Login>
    },
])

export default MyRoute;