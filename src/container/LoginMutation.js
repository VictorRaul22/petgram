import React from "react";
import { gql } from "@apollo/client";
import { Mutation } from "@apollo/client/react/components";

const Login = gql`
  mutation login($input: UserCredentials!) {
    login(input: $input)
  }
`;
function LoginMutation({ children }) {
  return <Mutation mutation={Login}>{children}</Mutation>;
}

export { LoginMutation };
