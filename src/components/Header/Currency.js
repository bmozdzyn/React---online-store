import { Query } from "@apollo/client/react/components";
import React, { Component, Fragment } from "react";

import { GET_CURRENCIES } from "../../api/Queries";

import classes from './Currency.module.css';

class Currency extends Component {
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
                                onClick={() => this.props.currencyStateHandler(String(element.label), String(element.symbol))}
                            >
                                {element.symbol} {element.label} 
                            </li>)
                    }}
                </Query>
            </ul>
        )

        console.log(typeof(this.props.currentSymbol));

        return (
            <Fragment>
                <div className={classes.mainCurrency} 
                    onClick={() => this.props.showCurrencyStateHandler(this.props.currentCurrency)}>
                        {this.props.currentSymbol}
                        {<img className={classes.vector} src={require("../../assets/Vector.png")} alt="vector"/>}
                </div>

               
                {this.props.showCurrencies && currenciesList}

            </Fragment>
        )
    }
};

export default Currency;