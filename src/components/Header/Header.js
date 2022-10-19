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
                    <Categories />

                    <div className={classes.logo}>
                        <img src={require("../../assets/Brand_icon.png")} alt="logo"/>
                    </div>

                    <div className={classes.cartCurrency}>
                        <Currency />
                        <CartIcon />
                    </div>
                </div>

            </Fragment>
        )
    }
}

export default Header;

