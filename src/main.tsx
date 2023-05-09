import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
// 1. Import `createTheme`
import { createTheme, NextUIProvider } from "@nextui-org/react"
import { router } from "./router";

// 2. Call `createTheme` and pass your custom theme values
const theme = createTheme({
  type: "dark", // it could be "light" or "dark"
  theme: {
    colors: {
      primary: '#2b92ff',
      secondary: '#F9CB80',
      error: '#FCC5D8',
    },
  }
})

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <NextUIProvider theme={theme}>
      <RouterProvider router={router} />
    </NextUIProvider>
  </React.StrictMode>
);
