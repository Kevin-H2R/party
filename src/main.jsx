import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './routes/home.jsx' 
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './routes/login.jsx'
import Register from './routes/register.jsx'
import NewParty from './routes/new-party.jsx'
import axios from 'axios'
import JoinParty from './routes/join-party.jsx'
import Logout from './routes/logout.jsx'
import Dashboard from './routes/dashboard.jsx'

axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem('token')
  if (token === null) {
    return config
  }
  config.headers.Authorization =  token;
   
  return config;
});

axios.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  localStorage.clear()
  window.location.href = "/login"
  return Promise.reject(error);
});

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  // {
  //   path: "/toto",
  //   element: <App />,
  // },
  {
    path: "/join/:salt",
    element: <JoinParty />
  }, 
]

const isLoggedIn = localStorage.getItem('token') !== null
if (!isLoggedIn) {
  routes.push({path: "/login", element: <Login />})
  routes.push({path: "/register", element: <Register />})
} else {
  routes.push({path: "/party", element: <NewParty />})
  routes.push({path: "/logout", element: <Logout />})
  routes.push({path: "/dashboard", element: <Dashboard />})
  
}

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
