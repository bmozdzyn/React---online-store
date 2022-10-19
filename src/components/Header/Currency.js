import { Query } from "@apollo/client/react/components";
import { Component, Fragment } from "react";

import { GET_CURRENCIES } from "../../api/Queries";

import classes from './Currency.module.css';

class Currency extends Component {
    constructor() {
        super();

        this.state = {
            showCurrencies: false,
            currentCurrency: 'USD',
            currentSymbol: '$'
        };
    }

    toggleUsersHandler() {
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
        const currenciesList = (
            <ul className={classes.currList}>
                <Query query={GET_CURRENCIES}>
                    {({loading, data}) => {
                        if(loading) return "Loading...";
                        const { currencies } = data;

                        return currencies.map((element, index) => 
                            <li 
                                className={classes.listElement} 
                                key={index}
                                onClick={() => this.currencyStateHandler(String(element.label), String(element.symbol))}
                            >
                                    {element.symbol} {element.label} 
                            </li>)
                    }}
                </Query>
            </ul>
        )

        return (
            <Fragment>
                <div className={classes.mainCurrency} 
                    onClick={() => this.toggleUsersHandler()}>
                    {this.state.currentSymbol}
                    {<img className={classes.vector} src={require("../../assets/Vector.png")} alt="vector"/>}
                </div>

               
                {this.state.showCurrencies && currenciesList}

            </Fragment>
        )
    }
};

export default Currency;