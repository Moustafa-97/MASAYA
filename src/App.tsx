import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import ErrorPage from "./ErrorPage";
import HomePage from "./pages/Home/HomePage";
import Reserve from "./pages/reserve/Reserve";
import About from "./pages/about/About";
import NavFooter from "./pages/NavFooter/NavFooter";
import MenuPage from "./pages/Menu/MenuPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <NavFooter />,
      errorElement: <ErrorPage />,

      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/about_us",
          element: <About />,
        },
        {
          path: "/our_menu",
          element: <MenuPage />,
        },
        {
          path: "/reserve",
          element: <Reserve />,
        },
      ],
    },
    {
      path: "about",
      element: <Reserve />,
      errorElement: <ErrorPage />,
    },
  ]);

  return (
    <>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </>
  );
}

export default App;
