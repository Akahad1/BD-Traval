import { BrowserRouter, createBrowserRouter } from "react-router-dom";
import Main from "../Componet/Main/Main";
import Home from "../Componet/Home/Home";
import Blogs from "../Componet/Home/Blogs/Blogs";
import SingUp from "../Authentication/SingUP/SingUp";
import LogIn from "../Authentication/LogIn/LogIn";

const router=createBrowserRouter([
    {path:'/',element:<Main></Main>,children:[
        {path:'/',element: <Home></Home>},
        {path:'/blogs',element: <Blogs></Blogs>},
        {path:'/singup',element: <SingUp></SingUp>},
        {path:'/login',element: <LogIn></LogIn>}
    ]}
])

export default router;