import { BrowserRouter, createBrowserRouter } from "react-router-dom";
import Main from "../Componet/Main/Main";
import Home from "../Componet/Home/Home";
import Blogs from "../Componet/Home/Blogs/Blogs";
import SingUp from "../Authentication/SingUP/SingUp";
import LogIn from "../Authentication/LogIn/LogIn";
import CountryData from "../Componet/CountryData/CountryData";
import SpecificSoprtData from "../Componet/SportData/SpecificSoprtData";

const router=createBrowserRouter([
    {path:'/',element:<Main></Main>,children:[
        {path:'/',element: <Home></Home>},
        {path:'/blogs',element: <Blogs></Blogs>},
        {path:'/singup',element: <SingUp></SingUp>},
        {path:'/login',element: <LogIn></LogIn>},
        {path:'/countrydata',element:<CountryData></CountryData>,loader:async()=>fetch(`https://jsonplaceholder.typicode.com/albums`)},
        {path:'/:id',element:<SpecificSoprtData></SpecificSoprtData>,loader:async({params})=>fetch(`http://localhost:5000/sportdata/${params.id}`)}
    ]}
])

export default router;