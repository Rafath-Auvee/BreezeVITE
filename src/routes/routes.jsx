import { createBrowserRouter } from "react-router-dom";
import Home from "./../pages/Home";
import RequireAuth from "./../authentication/RequiredAuth";
import Dashboard from "./../pages/Dashboard";
import Layout from "./../layout/Layout";
import Signup from "./../pages/Signup";
import Login from "./../pages/Login";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/signin",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/dashboard",
        element: (
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        ),
      },
    ],
  },
]);

export default routes;
