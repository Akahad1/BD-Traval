import { BrowserRouter, Link, NavLink, Route, RouterProvider, Routes } from 'react-router-dom';
// import Navber from './Componet/Navber/Navber';
import router from './Router/Router';
import Home from './Componet/Home/Home';

function App() {
  return (
    <div className='  min-h-screen'>
     

     {/* <BrowserRouter> */}
     {/* <Routes>
      <Route path='/' element={<Home></Home>}></Route>
     </Routes> */}

     <RouterProvider router={router}>

     </RouterProvider>
     {/* </BrowserRouter> */}

     
    
    </div>
  );
}

export default App;
