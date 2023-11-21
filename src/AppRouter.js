// AppRouter.js
import React from "react";
import { BrowserRouter as Route, Router } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Home from "./Home";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Router>
        <Route path="/" element={<Home />} />
      </Router>
    </BrowserRouter>
  );
};

export default AppRouter;
