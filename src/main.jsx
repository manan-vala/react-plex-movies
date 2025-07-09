import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Section from "./Section";
import MovieDetails from "./MovieDetails";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Section />} />
          <Route path="/movies/:id" element={<MovieDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
