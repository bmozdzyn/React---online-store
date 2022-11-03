import { Component, Fragment } from "react";

import Currency from "./Currency";

import classes from "./Header.module.css";
import CartIcon from "./CartIcon";
import Categories from "./Categoies";

class Header extends Component {
    render() {
        return(
            <Fragment>
                <div className={classes.header}>
                    <Categories 
                        currentCategory={this.props.currentCategory} 
                        categoryStateHandler={this.props.categoryStateHandler}
                        
                        isProductPageOpen={this.props.isProductPageOpen}
                        productPageOpenHandler={this.props.productPageOpenHandler}
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
                        <CartIcon 
                            itemsInCart={this.props.itemsInCart}

                            isCartModalOpen={this.props.isCartModalOpen}
                            cartModalHandler={this.props.cartModalHandler}
                        />
                    </div>
                </div>

            </Fragment>
        )
    }
}

export default Header;

