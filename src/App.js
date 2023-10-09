import { createHashRouter, RouterProvider } from 'react-router-dom';
import React from 'react'
import './App.css';
import Layout from './Components/Layout/Layout';
import Home from './Components/home/Home';
import About from './Components/About/About';
import Portfolio from './Components/Portfolio/Portfolio';
import Contacts from './Components/Contacts/Contacts';

let routers = createHashRouter([
  {
    path: '', element: <Layout />, children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About />},
      { path: 'portfolio', element: <Portfolio />},
      { path: 'contacts', element: <Contacts />}
    ]
  }
])

function App() {

  return <RouterProvider router={routers}> </RouterProvider>
}

export default App;
