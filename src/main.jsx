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
import Error from './components/Error/Error.jsx';
import AuthProviders from './AuthProviders/AuthProviders.jsx';
import PrivateRoutes from './Routes/PrivetRoute.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("https://assignment-10-server-murex.vercel.app/allData")
      },
      {
        path: "/blog",
        element: <Blog />,
        loader: () => fetch("/question.json")
      },
      {
        path: "/chefs",
        element: <Chefs />,
        loader: () => fetch("https://assignment-10-server-murex.vercel.app/allData")
      },
      {
        path: "/chef/:id/view_recipies",
        element: <PrivateRoutes><ChefDetails /></PrivateRoutes>,
        loader: () => fetch("https://assignment-10-server-murex.vercel.app/allData")
      },
      { path: "user/login", element: <Login /> },
      { path: "user/registration", element: <Registration /> }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router}></RouterProvider>
    </AuthProviders>
  </React.StrictMode>,
)
