import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Component/Home';
// import About from './Component/About';
import Contactus from './Component/Contactus';
import Services from './Component/Services';
import Product1 from './Component/Product1';
import Nav from './Component/Nav';
import Error from './Component/Error';
import Productdetail from './Component/Productdetail';
// import { ThemeContext } from './Context/ThemeContext';
import ThemeProvider from './Context/ThemeContext';


const About = React.lazy(()=> import('./Component/About'))
   const router = createBrowserRouter([
  {
    path: '/',
    element: <Nav />,
    errorElement:<Error/>,
    children: [
        {
            index:'/home',
            element: <Home />
        },
      {
        path: '/home',
        element: <Home />
      },
      {
        path: '/about',
        element: <React.Suspense> 
          <About />
        </React.Suspense> 
      },
      {
        path: '/contact',
        element: <Contactus />
      },
      {
        path: '/services',
        element: <Services />
      },
      {
        path: '/product',
        element: <Product1 />
      },
      ,
      {
        path: '/product/:id',
        element: <Productdetail />
      },{
        path:'*',
         element: <Error />
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  

  <ThemeProvider> 
     <RouterProvider router={router}>
      </RouterProvider></ThemeProvider>
 
);

reportWebVitals();