import React from "react";
import ReactDOM from "react-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { compose, createStore } from "redux";
import { Provider } from "react-redux";
import { App } from "./App";
import { rootReducer } from "./reducer/rootReducer";

const client = new ApolloClient({
  uri: "https://petgram-server-victorr.vercel.app/graphql",
  cache: new InMemoryCache(),
});
const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const composeEnhacer = composeAlt();
const store = createStore(rootReducer, composeEnhacer);
ReactDOM.render(
  <Provider store={store}>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Provider>,
  document.getElementById("root")
);
