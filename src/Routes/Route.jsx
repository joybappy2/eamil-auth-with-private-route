import { createBrowserRouter } from "react-router";
import RootLayout from "../Components/RootLayout";
import Home from "../Components/Home";
import Login from "../Components/Login";
import Signup from "../Components/Signup";
import Orders from "../Components/Orders";
import PrivateRout from "./PrivateRout";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },

      {
        path: '/login',
        Component: Login
      },

      {
        path: '/signup',
        Component: Signup
      },

      {
        path: '/orders',
        element: <PrivateRout><Orders></Orders></PrivateRout>
      }
    ],
  },
]);

export default router;
