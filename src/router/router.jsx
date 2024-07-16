import { createBrowserRouter } from "react-router-dom";
import Register from "../components/Register";
import SignUp from "../components/SignUp";

const router = createBrowserRouter([
  {
    path:'/',
    element:<SignUp></SignUp>
  },
    {
      path: "/register",
      element: <Register></Register>,
    },
  ]);

export default router;