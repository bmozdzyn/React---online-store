import { Component, Fragment } from "react";

import CartModal from "../Cart/CartModal";

import classes from './CartIcon.module.css';

class CartIcon extends Component {

    render() {
        console.log(this.props.isCartModalOpen);

        return (
            <Fragment>
                <div 
                    onClick={() => this.props.cartModalHandler(this.props.isCartModalOpen)}
                    className={classes.wholeIcon}
                >
                    <img src={require("../../assets/Empty_Cart.png")} alt="cart" className={classes.icon}/>
                    
                    <div className={`${(this.props.itemsInCart.length > 0) && classes.numOfItems}`}>
                        {(this.props.itemsInCart.length > 0) && this.props.itemsInCart.length}
                    </div>
                </div>
                {(this.props.isCartModalOpen == true) && <CartModal itemsInCart={this.props.itemsInCart}/>}
            </Fragment>
        )
    }
}

export default CartIcon;