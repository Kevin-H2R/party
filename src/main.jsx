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
import NewParty from './routes/new-party.jsx'
import axios from 'axios'
import JoinParty from './routes/join-party.jsx'

axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem('token')
  if (token === null) {
    return config
  }
  config.headers.Authorization =  token;
   
  return config;
});

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/toto",
    element: <App />,
  },
  {
    path: "/join/:salt",
    element: <JoinParty />
  }
]

const isLoggedIn = localStorage.getItem('token') !== null
if (!isLoggedIn) {
  routes.push({path: "/login", element: <Login />})
  routes.push({path: "/register", element: <Register />})
} else {
  routes.push({path: "/party", element: <NewParty />})
}

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
