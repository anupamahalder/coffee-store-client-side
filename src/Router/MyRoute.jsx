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
                loader: ()=>fetch('https://coffee-store-server-side-4e2s3g6ma-anupama-halders-projects.vercel.app/coffee')
            },
            {
                path: '/addcoffee',
                element: <AddCoffee></AddCoffee>
            },
            {
                path: '/updatecoffee/:id',
                element: <UpdateCoffee></UpdateCoffee>,
                // destructure params to get id from the url hit
                loader: ({params})=>fetch(`https://coffee-store-server-side-4e2s3g6ma-anupama-halders-projects.vercel.app/coffee/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/user',
                element:<Users></Users>,
                loader: ()=>fetch('https://coffee-store-server-side-4e2s3g6ma-anupama-halders-projects.vercel.app/user')
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])

export default MyRoute;