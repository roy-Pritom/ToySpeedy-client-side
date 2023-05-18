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


  const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
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
          element:<AllToy></AllToy>,
          loader:()=>fetch('http://localhost:5000/allToys')
        },
        {
          path:'/myToys',
          element:<MyToys></MyToys>
    
        }
      ]
    },
  ]);

  export default router