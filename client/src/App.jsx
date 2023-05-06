import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
import HomePage from "./pages/Home";

function App() {
  return (
    <RouterProvider router={router}/>
    // <HomePage />
  );
}

export default App;
