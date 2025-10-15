import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import RootLayout from "./Components/RootLayout";
import router from "./Routes/Route";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}>
      <RootLayout></RootLayout>
    </RouterProvider>
  </StrictMode>
);
