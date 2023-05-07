import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
import Gallery from "./pages/Gallery";
// import HomePage from "./pages/Home";

function App() {
  return (
    <RouterProvider router={router}>
      <Gallery />
    </RouterProvider>
  );
}

export default App;
