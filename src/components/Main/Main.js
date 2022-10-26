import { Component, Fragment } from "react";
import Elements from "./Elements";

import classes from './Main.module.css';
import ProductPage from "./ProductPage";

class Main extends Component {
    constructor() {
        super();

        this.state = {
            itemsChosenCart: [],
            productPageItem: '123'
        }

        this.chosenItemCartHandler = this.chosenItemCartHandler.bind(this);
        this.productPageItemHandler = this.productPageItemHandler.bind(this);
    }

    chosenItemCartHandler(newItem) {
        this.setState(() => {
            return this.state.itemsChosenCart.push(newItem);
        })
    }

    productPageItemHandler(item) {
        console.log(item);
        this.setState(() => {
            return {
                productPageItem: item
            }
        })
    }

    render() {
        console.log(this.props.isProductPageOpen);
        return(
            <Fragment>
            {!this.props.isProductPageOpen &&
                <Fragment> 
                    <p className={classes.categoryName}>{this.props.categoryName}</p>
    
                    <div className={classes.elements}>
                        <Elements 
                            category={this.props.categoryName}
                            currency={this.props.currentCurrency}
                            symbol={this.props.currentSymbol}
    
                            itemsChosenCart={this.state.itemsChosenCart}
                            chosenItemCartHandler={this.chosenItemCartHandler}
                            
                            itemsInCart={this.props.itemsInCart}
                            itemsInCartHandler={this.props.itemsInCartHandler}
                            
                            isProductPageOpen={this.props.isProductPageOpen}
                            productPageOpenHandler={this.props.productPageOpenHandler}
                            
                            productPageItem={this.state.productPageItem}
                            productPageItemHandler={this.productPageItemHandler}
                        />
                    </div>
                </Fragment>
            }

            {this.props.isProductPageOpen &&
                <Fragment>
                    <ProductPage productPageItem={this.state.productPageItem} 
                            isProductPageOpen={this.props.isProductPageOpen} />
                </Fragment>
            }
            </Fragment>        

        )
    }
}

export default Main;