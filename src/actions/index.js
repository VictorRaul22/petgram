import { TOGGLE_AUTH } from "../const/types";

export const iniciarSession = () => ({
  type: TOGGLE_AUTH,
  payload: true,
});
