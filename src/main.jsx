import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import CourseContext from "./CourseContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CourseContext>
      <App />
    </CourseContext>
  </React.StrictMode>
);
