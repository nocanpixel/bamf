import { createBrowserRouter } from "react-router-dom";
import { Main } from "../pages/content/main";
import { App } from "../pages/main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/content",
        element: <Main/>
      },
      {
        path: "/content/:page",
        element: <Main/>
      }
    ]
  },
]);