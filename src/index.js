import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
// import { InMemoryCache } from 'apollo-cache-inmemory'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


const client = new ApolloClient({
  uri: "https://api.graph.cool/simple/v1/cjhtn1d652lm7012050nzm91o",
  // cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App/>
  </ApolloProvider>,
  document.getElementById('root'),
)