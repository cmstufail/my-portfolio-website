import { createBrowserRouter } from "react-router-dom";

// components
import MainLayout from '../layouts/MainLayout';
import Home from "../pages/Home";
import About from "../pages/About";
import Skills from "../pages/Skills";
import Education from "../pages/Education";
import Experience from "../pages/Experience";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import ErrorPage from "../components/ErrorPage";

export const router = createBrowserRouter( [
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "skills",
        element: <Skills />
      },
      {
        path: "education",
        element: <Education />
      },
      {
        path: "experience",
        element: <Experience />
      },
      {
        path: "projects",
        element: <Projects />
      },
      {
        path: "contact",
        element: <Contact />
      },
    ]
  },
] );