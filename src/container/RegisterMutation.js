import React from "react";
import { Mutation } from "@apollo/client/react/components";
import { gql } from "@apollo/client";
import PropType from "prop-types";

const REGISTER = gql`
  mutation signup($input: UserCredentials!) {
    signup(input: $input)
  }
`;
function RegisterMutation({ children }) {
  return <Mutation mutation={REGISTER}>{children}</Mutation>;
}
RegisterMutation.propTypes = {
  children: PropType.func.isRequired,
};
export { RegisterMutation };
