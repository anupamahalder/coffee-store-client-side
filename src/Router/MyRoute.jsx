import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AddCoffee from "../components/AddCoffee";
import UpdateCoffee from "../components/UpdateCoffee";

const MyRoute = createBrowserRouter([
    {
        path: '/',
        element:<App></App>
    },
    {
        path: '/addcoffee',
        element: <AddCoffee></AddCoffee>
    },
    {
        path: '/updatecoffee',
        element: <UpdateCoffee></UpdateCoffee>
    }
])

export default MyRoute;