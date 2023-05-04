import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import Blog from './components/Blog/Blog.jsx';
import Chefs from './components/Chefs/Chefs.jsx';
import Login from './components/Login/Login.jsx';
import Registration from './components/Login/Registration.jsx';
import ChefDetails from './components/Chefs/ChefDetails.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/data.json")
      },
      { path: "/blog", element: <Blog /> },
      {
        path: "/chefs",
        element: <Chefs />,
        loader: () => fetch("/data.json")
      },
      {
        path: "/chef/:id/view_recipies",
        element: <ChefDetails />,
        loader: () => fetch("/data.json")
      },
      { path: "user/login", element: <Login /> },
      { path: "user/registration", element: <Registration /> }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
