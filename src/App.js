import React, {Component} from "react";
import { ApolloProvider } from "@apollo/client";

import client from "./api/ApolloConfig";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

export class App extends Component {
  constructor() {
    super();

    this.state = {
        currentCategory: 'all',
        
        showCurrencies: false,
        currentCurrency: 'USD',
        currentSymbol: '$',

        itemsInCart: [],

        isCartModalOpen: false
    }

    this.categoryStateHandler = this.categoryStateHandler.bind(this);
    this.showCurrencyStateHandler = this.showCurrencyStateHandler.bind(this);
    this.currencyStateHandler = this.currencyStateHandler.bind(this);
    this.itemsInCartHandler = this.itemsInCartHandler.bind(this);
    this.cartModalHandler = this.cartModalHandler.bind(this);
  }

categoryStateHandler(currentCategory) {
    this.setState(() => {
        return {currentCategory: currentCategory}
    })
}

showCurrencyStateHandler() {
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

itemsInCartHandler(itemID) {
  this.setState(() => {
    return this.state.itemsInCart.push(itemID);
  })
}

cartModalHandler() {
  this.setState((curState) => {
    return {isCartModalOpen: !curState.isCartModalOpen};
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

          itemsInCart={this.state.itemsInCart}

          isCartModalOpen={this.state.isCartModalOpen}
          cartModalHandler={this.cartModalHandler}
        />
        <Main 
          categoryName={this.state.currentCategory}

          currentSymbol={this.state.currentSymbol}  
          currentCurrency={this.state.currentCurrency}

          itemsInCart={this.state.itemsInCart}
          itemsInCartHandler={this.itemsInCartHandler}

          isCartModalOpen={this.state.isCartModalOpen}
        />
      </ApolloProvider>
    );
  }
}

export default App;
