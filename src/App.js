import React from "react";
import { Logo } from "@components/Logo";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./styles/GlobalStyles";
import { PhotoCardWithQuery } from "./container/PhotoCardWithQuery";
import { Home } from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Logo />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<PhotoCardWithQuery />} />
        <Route path="/pet/:petId" element={<Home />} />
        <Route path="*" element={<h2>Error</h2>} />
      </Routes>
    </BrowserRouter>
  );
}

export { App };
