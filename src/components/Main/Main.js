import { Component, Fragment } from "react";
import Elements from "./Elements";

import classes from './Main.module.css';

class Main extends Component {
    constructor() {
        super();

        this.state = {
            itemsChosen: [],
        }

        this.chosenItemHandler = this.chosenItemHandler.bind(this);
    }

    chosenItemHandler(newItem) {
        this.setState(() => {
            return this.state.itemsChosen.push(newItem);
        })
    }

    render() {
        return(
            <Fragment>
                <p className={classes.categoryName}>{this.props.categoryName}</p>

                <div className={classes.elements}>
                    <Elements 
                        category={this.props.categoryName}
                        currency={this.props.currentCurrency}
                        symbol={this.props.currentSymbol}

                        itemsChosen={this.state.itemsChosen}
                        chosenItemHandler={this.chosenItemHandler}

                        itemsInCart={this.props.itemsInCart}
                        itemsInCartHandler={this.props.itemsInCartHandler}
                    />
                </div>
            </Fragment>
        )
    }
}

export default Main;