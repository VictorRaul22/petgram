import React, { useContext } from "react";
import { context } from "../Context/AppContext";
import SubmitButton from "../components/SubmitButton";

function User() {
  const { removeAuth } = useContext(context);
  const onClick = (e) => {
    e.preventDefault();
    removeAuth();
  };
  return (
    <>
      <h1>users</h1>
      <SubmitButton onClick={onClick}>Cerrar session</SubmitButton>
    </>
  );
}

export { User };
