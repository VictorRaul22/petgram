import React from "react";
import SubmitButton from "@components/SubmitButton";
import PropTypes from "prop-types";
import { useInputValue } from "../../hooks/useInputValue";
import {
  Figure,
  Figcaption,
  Text,
  ButtonR,
  Image,
  Form,
  Input,
  Card,
  Error,
} from "./styles";
//
function CardForm({
  title,
  registered,
  setRegistered,
  onSubmit,
  errorMsg,
  disabled,
}) {
  const email = useInputValue("");
  const password = useInputValue("");
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email: email.value, password: password.value });
  };
  return (
    <Card front={registered} back={!registered}>
      <Figure>
        <Image src="../login.webp" alt="logo en imagen de petgram" />
        <Figcaption>
          <Text>
            {" "}
            {title} en petgram para poder seleccionar fotos como favoritos
          </Text>
        </Figcaption>
      </Figure>
      <Form onSubmit={handleSubmit}>
        <Input
          placeholder="Email"
          type="email"
          value={email.value}
          disabled={disabled}
          onChange={email.onChange}
        />
        <Input
          placeholder="Password"
          type="password"
          value={password.value}
          disabled={disabled}
          onChange={password.onChange}
        />
        <SubmitButton disabled={disabled}>{title}</SubmitButton>
      </Form>
      {!!errorMsg && <Error>{errorMsg}</Error>}
      <Text>
        ¿{!registered ? "Tienes" : "No tienes"} una cuenta?
        <ButtonR type="button" onClick={() => setRegistered(!registered)}>
          {!registered ? "Iniciar Sesion" : "Registrate"}
        </ButtonR>
      </Text>
    </Card>
  );
}
CardForm.propTypes = {
  title: PropTypes.string.isRequired,
  registered: PropTypes.bool.isRequired,
  setRegistered: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
  errorMsg: PropTypes.string,
};
CardForm.defaultProps = {
  errorMsg: null,
};
export { CardForm };
