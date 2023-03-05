import React from "react";
import Header from "./modules/header/Header";
import Example from "./modules/example/Example";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./modules/login/login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Example />
            </>
          }
        />
        <Route path="/login*" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
