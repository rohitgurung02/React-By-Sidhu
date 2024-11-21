import React from 'react'
import Home from './components/Home';
import About from './components/About';
import Dashboard from './components/Dashboard';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Navbar from './components/Navbar';
import Reports from "./components/Reports"
import Courses from "./components/Courses"
import MockTest from "./components/MockTest"
import NotFound from './components/NotFound';

const router = createBrowserRouter([
  {
    path: "/",
    element:
      <div>
        <Navbar />
        <Home />
      </div>,
  },
  {
    path: "/about",
    element: <div>
      <Navbar />
      <About />
    </div>,
  },
  {
    path: "/dashboard",
    element: <div>
      <Navbar />
      <Dashboard />
    </div>,
    children: [
      {
        path: 'courses',
        element: <Courses />
      },
      {
        path: 'mock-tests', 
        element: <MockTest />
      },
      {
        path: 'reports',
        element: <Reports />
      },
      {
        path: '*',
        element: <NotFound />
      },
    ]
  },
]);

const App = () => {

  return (
    <div>
      <RouterProvider router={router} />
    </div>

  )
}

export default App