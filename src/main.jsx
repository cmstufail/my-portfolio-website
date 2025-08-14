import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { router } from './routes/router';
import { RouterProvider } from "react-router";

// components
import ThemeProvider from './context/ThemeProvider';



createRoot( document.getElementById( 'root' ) ).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={ router } />
    </ThemeProvider>
  </StrictMode>,
)
