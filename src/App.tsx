import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React, { useEffect } from "react";
import ErrorPage from "./ErrorPage";
import HomePage from "./pages/Home/HomePage";
import Reserve from "./pages/reserve/Reserve";
import About from "./pages/about/About";
import NavFooter from "./pages/NavFooter/NavFooter";
import MenuPage from "./pages/Menu/MenuPage";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Customize animation duration (in ms)
      easing: "ease-in-out", // Animation timing function
      once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);
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
