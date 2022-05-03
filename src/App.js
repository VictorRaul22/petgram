import React, { useContext } from "react";
import { Logo } from "@components/Logo";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { NavBar } from "@components/NavBar";
import { GlobalStyle } from "./styles/GlobalStyles";
import { Home } from "./pages/Home";
import { Detail } from "./pages/Detail";
import { Favs } from "./pages/Favs";
import { User } from "./pages/Users";
import { NotRegisterUser } from "./pages/NotRegisterUser";
import { context } from "./Context/AppContext";
import NotFound from "./pages/NotFound";

function App() {
  // const isAuth = true;
  const { isAuth } = useContext(context);
  // console.log(isAuth)
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Logo />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pet/:petId" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/favs" element={isAuth ? <Favs /> : <NotRegisterUser />} />
        <Route path="/user" element={isAuth ? <User /> : <NotRegisterUser />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <NavBar />
    </BrowserRouter>
  );
}
export { App };
