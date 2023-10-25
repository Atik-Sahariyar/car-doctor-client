import Root from "../MainLayout/Root";
import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import LogIn from "../Pages/LogIn/LogIn";
import SignUp from "../Pages/SignUp/SignUp";


const routes = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>

            },
            {
                path: "/login",
                element: <LogIn></LogIn>
            },
            {
                path: "/signup",
                element: <SignUp></SignUp>
            }
        ]
    }
])

export default routes;