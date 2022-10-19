import { Component } from "react";

import classes from './CartIcon.module.css';

class CartIcon extends Component {
    render() {
        return (
            <img src={require("../../assets/Empty_Cart.png")} alt="cart" className={classes.icon}/>
        )
    }
}

export default CartIcon;