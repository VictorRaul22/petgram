import React, { useContext, Suspense } from "react";
import { Logo } from "@components/Logo";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { NavBar } from "@components/NavBar";
import { GlobalStyle } from "./styles/GlobalStyles";
import { context } from "./Context/AppContext";

const Favs = React.lazy(() =>
  import(/* webpackChunkName: "Favs" */ "./pages/Favs").then((module) => ({
    default: module.Favs,
  }))
);

const Home = React.lazy(() =>
  import(/* webpackChunkName: "Home" */ "./pages/Home").then((module) => ({
    default: module.Home,
  }))
);

const Detail = React.lazy(() =>
  import(/* webpackChunkName: "Detail" */ "./pages/Detail").then((module) => ({
    default: module.Detail,
  }))
);

const User = React.lazy(() =>
  import(/* webpackChunkName: "User" */ "./pages/Users").then((module) => ({
    default: module.User,
  }))
);

const NotRegisterUser = React.lazy(() =>
  import(
    /* webpackChunkName: "NotRegisterUser" */ "./pages/NotRegisterUser"
  ).then((module) => ({ default: module.NotRegisterUser }))
);

const NotFound = React.lazy(() =>
  import(/* webpackChunkName: "NotFound" */ "./pages/NotFound")
);

function App() {
  const { isAuth } = useContext(context);
  // console.log(isAuth)

  return (
    <Suspense fallback={<h1>Cargando....</h1>}>
      <BrowserRouter>
        <GlobalStyle />
        <Logo />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pet/:petId" element={<Home />} />;
          <Route path="/detail/:id" element={<Detail />} />
          <Route
            path="/favs"
            element={isAuth ? <Favs /> : <NotRegisterUser />}
          />
          <Route
            path="/user"
            element={isAuth ? <User /> : <NotRegisterUser />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <NavBar />
      </BrowserRouter>
    </Suspense>
  );
}
export { App };
