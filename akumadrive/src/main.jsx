import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Browse from "./pages/Browse/Browse.jsx";
// import Profile from "./pages/Profile/Profile.jsx";
// import Recommendations from "./pages/Recommendations/Recommendations.jsx";
// import Sign_in from "./pages/Sign-in/Sign_in.jsx";
// import Sign_up from "./pages/Sign-up/Sign_up.jsx";
import "./index.css";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//   },
//   {
//     path: "browse",
//     element: <Browse />,
//   },
//   {
//     path: "profile",
//     element: <Profile />,
//   },
//   {
//     path: "recommendations",
//     element: <Recommendations />,
//   },
//   {
//     path: "Sign_in",
//     element: <Sign_in />,
//   },
//   {
//     path: "Sign_up",
//     element: <Sign_up />,
//   },
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    {/* <RouterProvider router={router} /> */}
  </React.StrictMode>
);
