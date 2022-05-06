import PropTypes from "prop-types";
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
SubmitButton.propTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};
SubmitButton.defaultProps = {
  disabled: false,
  onClick: () => null,
};
export default SubmitButton;
