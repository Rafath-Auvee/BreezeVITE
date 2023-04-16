import React from "react";
import routes from "./routes/routes";
import { RouterProvider } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
function App() {
  return (
    <div>
      <Toaster />
      <RouterProvider router={routes} />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
