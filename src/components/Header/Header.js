import { Component, Fragment } from "react";

import Currency from "./Currency";

import classes from "./Header.module.css";
import CartIcon from "./CartIcon";
import Categories from "./Categoies";

class Header extends Component {
    render() {
        console.log(typeof(this.props.currentSymbol));
        return(
            <Fragment>
                <div className={classes.header}>
                    <Categories 
                        currentCategory={this.props.currentCategory} 
                        categoryStateHandler={this.props.categoryStateHandler} 
                    />

                    <div className={classes.logo}>
                        <img src={require("../../assets/Brand_icon.png")} alt="logo"/>
                    </div>

                    <div className={classes.cartCurrency}>
                        <Currency 
                            currentSymbol={this.props.currentSymbol}
                            currentCurrency={this.props.currentCurrency}
                            showCurrencies={this.props.showCurrencies}
                            currencyStateHandler={this.props.currencyStateHandler}
                            showCurrencyStateHandler={this.props.showCurrencyStateHandler}
                        />
                        <CartIcon />
                    </div>
                </div>

            </Fragment>
        )
    }
}

export default Header;

