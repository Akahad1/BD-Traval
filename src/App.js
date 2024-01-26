import { BrowserRouter, Link, NavLink, Route, RouterProvider, Routes } from 'react-router-dom';
import router from './Router/Router';


function App() {
  return (
    <div className='  min-h-screen'>
     

     

     <RouterProvider router={router}>

     </RouterProvider>
     

     
    
    </div>
  );
}

export default App;
