import React from "react";
import ReactDOM from "react-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  ApolloLink,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { App } from "./App";
import { AppContext } from "./Context/AppContext";

const authMiddleware = new ApolloLink((operation, forward) => {
  const token = window.sessionStorage.getItem("token");
  if (token) {
    operation.setContext({
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  }
  return forward(operation);
});
const errorMiddleware = onError((error) => {
  const { networkError } = error;
  window.console.log(error, networkError, "Error en index");
  if (networkError && networkError.result.code === "invalid_token") {
    window.sessionStorage.removeItem("token");
    window.location = "/user";
  }
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: from([
    errorMiddleware,
    authMiddleware,
    new HttpLink({
      uri: "https://petgram-server-victorr.vercel.app/graphql",
    }),
  ]),
});
// const initialState = useInitialState();
ReactDOM.render(
  <AppContext>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </AppContext>,
  document.getElementById("root")
);
