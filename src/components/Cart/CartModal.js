import { render } from "@testing-library/react";
import { Component } from "react";

import classes from './CartModal.module.css';

class CartModal extends Component {
    render() {
        return (
            <div className={`${(this.props.itemsInCart.length == 0) ? classes.modalNoItems : classes.modal}`}>
                <div className={`${(this.props.itemsInCart.length == 0) ? classes.noItems : '' }`}>
                    <div className={classes.title}>
                        <b>My Bag</b>{`, ${(this.props.itemsInCart.length)} ${(this.props.itemsInCart.length == 1) ? 'item' : 'items'}  `}
                    </div>

                    <div className={classes.buttons}>
                        <div className={classes.viewBagBtn}>
                            view bag
                        </div>
                        <div className={classes.checkOutBtn}>
                            check out
                        </div>
                    </div>
                </div>

                <div className={`${(this.props.itemsInCart.length == 0) ? '' : classes.noItems}`}>
                    <div>Your cart is empty</div>
                </div>

            </div>
        )
    }
}

export default CartModal;