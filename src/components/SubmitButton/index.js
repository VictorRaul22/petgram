import React from "react";
import { Button } from "./styles";

function SubmitButton({ children, disabled, onClick }) {
  return (
    <Button type="submit" disabled={disabled} onClick={onClick}>
      {" "}
      {children}
    </Button>
  );
}

export default SubmitButton;
