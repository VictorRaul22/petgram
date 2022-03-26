import React from "react";
import { useDispatch } from "react-redux";
import { iniciarSession } from "../actions";

function NotRegisterUser() {
  const dispatch = useDispatch();
  const onclick = () => {
    dispatch(iniciarSession());
  };
  return (
    <div>
      <h1>NotRegisterUser</h1>
      <button type="button" onClick={onclick}>
        Inciar Session
      </button>
    </div>
  );
}

export { NotRegisterUser };
