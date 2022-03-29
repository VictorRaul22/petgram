import React, { useContext } from "react";
import { UserForm } from "@components/UserForm";
import { context } from "../Context/AppContext";

function NotRegisterUser() {
  const { activateAuth } = useContext(context);
  return <UserForm activateAuth={activateAuth} />;
}

export { NotRegisterUser };
