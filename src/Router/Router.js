import { BrowserRouter, createBrowserRouter } from "react-router-dom";
import Main from "../Componet/Main/Main";
import Home from "../Componet/Home/Home";
import Blogs from "../Componet/Home/Blogs/Blogs";

const router=createBrowserRouter([
    {path:'/',element:<Main></Main>,children:[
        {path:'/',element: <Home></Home>},
        {path:'/blogs',element: <Blogs></Blogs>}
    ]}
])

export default router;