import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home/Home.jsx';
import RegisterForm from './Pages/Authentication/Register.jsx';
import LoginForm from './Pages/Authentication/Login.jsx';
import Detail from './Pages/Detail/Detail.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
      path: "",
      element: <Home/>
      },
      {
        path: "/detail/:id",
        element: <Detail/>
      }
    ]
  },
  {
    path: "/register",
    element: <RegisterForm/>
  },
  {
    path: "/login",
    element: <LoginForm/>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
