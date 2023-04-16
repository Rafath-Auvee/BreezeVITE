import React from "react";
// import Home from "./pages/Home";
// import login from "./pages/login";
// import signup from "./pages/signup";
// import Dashboard from "./pages/Dashboard";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
import { RouterProvider } from "react-router-dom";
function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <RouterProvider router={routes} />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
