import { createBrowserRouter } from "react-router";

// components
import MainLayout from './../layouts/MainLayout';
import Home from "../pages/Home";

export const router = createBrowserRouter( [
  {
    path: "/",
    element: <MainLayout/>,
    children: [
      {
        index: true,
        element: <Home/>
      }
    ]
  },
] );