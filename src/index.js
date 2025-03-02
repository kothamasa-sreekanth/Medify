import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";
import { AuthProvider } from "./components/Context/AuthContext"; // Ensure correct path
import PrivateRoute from "./components/PrivateRoute"; // Ensure correct path

import App from "./App";
import Search from "./Search/Search";
import Home from "./Home/Home";
import MyBookings from "./MyBookings/MyBookings";
import Login from "./components/Pages/Login"; // Ensure correct path
import Signup from "./components/Pages/SignUp"; // Ensure correct path

// ✅ Define the theme before using it
export const theme = createTheme({
  typography: { fontFamily: "Poppins , sans-serif" },
  palette: {
    primary: { main: "#2AA7FF", green: "#00A500", secondary: "#1B3C74" },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "search", element: <Search /> },
      { path: "/", element: <Home /> },
      { path: "login", element: <Login /> },
      { path: "signup", element: <Signup /> },
      { path: "my-bookings", element: <PrivateRoute><MyBookings /></PrivateRoute> }, 
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </AuthProvider>
  </React.StrictMode>
);
