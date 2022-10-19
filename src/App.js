import React, {Component} from "react";
import { ApolloProvider } from "@apollo/client";

import client from "./api/ApolloConfig";

import classes from'./App.module.css';
import Card from "./components/Card";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

export class App extends Component {
  
  
  render() {
    return (
      <ApolloProvider client={client}>
        <Header />
        <Main categoryName={'category'}/>
      </ApolloProvider>
    );
  }
}

export default App;
