import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloProvider,
} from "@apollo/client";

const client = new ApolloClient({
  // inMemoryCache es para guardar los datos en el cliente y que no tenga que hacer peticiones al servidor otra vez
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "http://localhost:4000/",
  }),
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
