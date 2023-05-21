import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AddToy from "../pages/AddToy/AddToy";
import AllToy from "../pages/AllToy/AllToy";
import MyToys from "../pages/MyToys/MyToys";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import ToyDetails from "../pages/ToyDetails/ToyDetails";
import UpdatePage from "../pages/UpdatePage/UpdatePage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Blog from "../pages/Blog/Blog";


  const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element:<Register></Register>
        },
        {
          path:'/addToy',
          element:<PrivateRoute><AddToy></AddToy></PrivateRoute>
        },
        {
          path:'/allToys',
          element:<AllToy></AllToy>
          // loader:()=>fetch('https://assignment-11-server-site-teal.vercel.app/allToys')
        },
        {
          path:'/myToys',
          element:<PrivateRoute><MyToys></MyToys></PrivateRoute>
    
        },

        {
          path:'/details/:id',
          element:<PrivateRoute><ToyDetails></ToyDetails></PrivateRoute>,
          loader:({params})=>fetch(`https://assignment-11-server-site-teal.vercel.app/toys/${params.id}`)
    
        },
        {
          path:'/update/:id',
          element:<UpdatePage></UpdatePage>,
          loader:({params})=>fetch(`https://assignment-11-server-site-teal.vercel.app/toys/${params.id}`)
        },
        {
          path:'/blog',
          element:<Blog></Blog>
        }
      ]
    },
  ]);

  export default router