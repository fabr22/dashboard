import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Home from "./pages/home/home";
import List from "./pages/list/list";
import Login from "./pages/login/login";
import Settings from "./pages/settings/settings";
import { AuthProvider } from "./hoc/authProvider";
import PrivateRoutes from "./hoc/privateRoutes";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route
        path="/"
        element={
          <AuthProvider>
            <App />
          </AuthProvider>
        }
      >
        <Route element={<PrivateRoutes />}>
          <Route path="home" element={<Home />} />
          <Route path="list" element={<List />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Route>
      <Route
        path="login"
        element={
          <AuthProvider>
            <Login />
          </AuthProvider>
        }
      ></Route>
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
