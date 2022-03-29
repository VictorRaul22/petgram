import { useState } from "react";

const useInitialState = () => {
  const [isAuth, setIsAuth] = useState(
    () => window.sessionStorage.getItem("token") || false
  );
  const activateAuth = (token) => {
    setIsAuth(true);
    window.sessionStorage.setItem("token", token);
  };
  return {
    isAuth,
    activateAuth,
  };
};
export { useInitialState };
