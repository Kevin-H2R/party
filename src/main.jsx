import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './routes/home.jsx' 
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './routes/login.jsx'
import Register from './routes/register.jsx'


const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/toto",
    element: <App />,
  },
]

const isLoggedIn = localStorage.getItem('token') !== null
if (!isLoggedIn) {
  routes.push({path: "/login", element: <Login />})
  routes.push({path: "/register", element: <Register />})
}

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
