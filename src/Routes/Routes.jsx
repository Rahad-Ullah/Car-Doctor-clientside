import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import CheckOut from "../Pages/CheckOut/CheckOut";
import CartDetails from "../Pages/CartDetails/CartDetails";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/sign-up',
        element: <SignUp></SignUp>,
      },
      {
        path: '/check-out/:id',
        element: <PrivateRoutes><CheckOut></CheckOut></PrivateRoutes>,
        loader: ({params}) => fetch(`https://car-doctor-serverside.vercel.app/services/${params.id}`)
      },
      {
        path: '/cart-details',
        element: <PrivateRoutes><CartDetails></CartDetails></PrivateRoutes>,
      },
    ]
  },
]);

export default router;