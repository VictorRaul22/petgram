import React, { useState } from "react";
import { CardForm } from "@components/CardForm";
import PropType from "prop-types";
import { WraperUserForm, Cards } from "./styles";
import { RegisterMutation } from "../../container/RegisterMutation";
import { LoginMutation } from "../../container/LoginMutation";

function UserForm({ activateAuth }) {
  const [registered, setRegistered] = useState(true);
  return (
    <WraperUserForm>
      <Cards flip={!registered}>
        <LoginMutation>
          {(register, { loading, error }) => {
            const onSubmit = ({ email, password }) => {
              const input = { email, password };
              const variables = { input };
              register({ variables }).then(({ data }) => {
                const { login } = data;
                activateAuth(login);
              });
            };
            const errorMsg = error && "Error al iniciar session";
            return (
              <CardForm
                title="Iniciar Session"
                registered
                setRegistered={setRegistered}
                onSubmit={onSubmit}
                errorMsg={errorMsg}
                disabled={loading}
              />
            );
          }}
        </LoginMutation>

        <RegisterMutation>
          {(register, { loading, error }) => {
            const onSubmit = ({ email, password }) => {
              const input = { email, password };
              const variables = { input };
              register({ variables }).then(({ data }) => {
                const { signup } = data;
                activateAuth(signup);
              });
            };
            const errorMsg =
              error && "El usuario ya existe o hay algun problema .";
            return (
              <CardForm
                title="Registrate"
                registered={false}
                setRegistered={setRegistered}
                onSubmit={onSubmit}
                errorMsg={errorMsg}
                disabled={loading}
              />
            );
          }}
        </RegisterMutation>
      </Cards>
    </WraperUserForm>
  );
}
UserForm.propTypes = {
  activateAuth: PropType.func.isRequired,
};
export { UserForm };
