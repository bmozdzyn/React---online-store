import React, {Component} from "react";
import { ApolloProvider } from "@apollo/client";

import client from "./api/ApolloConfig";

import classes from'./App.module.css';
import Card from "./components/Main/Card";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

export class App extends Component {
  constructor() {
    super();

    this.state = {
        currentCategory: 'all',
        
        showCurrencies: false,
        currentCurrency: 'USD',
        currentSymbol: '$'
    }

    this.categoryStateHandler = this.categoryStateHandler.bind(this);
    this.showCurrencyStateHandler = this.showCurrencyStateHandler.bind(this);
    this.currencyStateHandler = this.currencyStateHandler.bind(this);
  }

categoryStateHandler(currentCategory) {
    this.setState(() => {
        return {currentCategory: currentCategory}
    })
}

showCurrencyStateHandler(curState) {
  console.log('showCurrencyStateHanfler');
  this.setState((curState) => {
      return {showCurrencies: !curState.showCurrencies };
  })
}

currencyStateHandler(currentCurrency, currentSymbol) {
  this.setState(() => {
      return {
          currentCurrency: currentCurrency,
          currentSymbol: currentSymbol
      }
  })
}
  
  render() {
    return (
      <ApolloProvider client={client}>
        <Header 
          currentCategory={this.state.currentCategory}
          categoryStateHandler={this.categoryStateHandler}

          currentSymbol={this.state.currentSymbol}
          currentCurrency={this.state.currentCurrency}
          showCurrencies={this.state.showCurrencies}
          currencyStateHandler={this.currencyStateHandler}
          showCurrencyStateHandler={this.showCurrencyStateHandler}

        />
        <Main categoryName={this.state.currentCategory}/>
      </ApolloProvider>
    );
  }
}

export default App;
