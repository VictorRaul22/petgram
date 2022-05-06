import React from "react";
import { gql } from "@apollo/client";
import { Mutation } from "@apollo/client/react/components";
import PropType from "prop-types";

const Login = gql`
  mutation login($input: UserCredentials!) {
    login(input: $input)
  }
`;
function LoginMutation({ children }) {
  return <Mutation mutation={Login}>{children}</Mutation>;
}
LoginMutation.propTypes = {
  children: PropType.func.isRequired,
};
export { LoginMutation };
