import { Component } from "react";

import { Query } from "@apollo/client/react/components";
import { GET_PRODUCTS_BY_CATEGORY } from "../../api/Queries";

import cartIcon from "./../../assets/svg/cartIcon.svg";

import classes from "./Elements.module.css";

class Elements extends Component {
    chosenProduct(productID) {
        this.props.productPageOpenHandler(this.props.isProductPageOpen);

        this.props.productPageItemHandler(productID);
    }

    addToCart(productID) {
        this.props.itemsInCartHandler(productID);
    }

    render() {
        return (
            <Query query={GET_PRODUCTS_BY_CATEGORY}
                variables={ {input: {title: String(this.props.category)}} }
            >
                 {({loading, data, error}) => {

                    if (loading) return "Loading...";
                    if (error) return console.log(error);
                    if (data.category === undefined) return null;

                        return data.category.products.map(
                            (element, index) => 
                            <div 
                                className={`
                                    ${classes.element}
                                    ${(element.inStock > 0) ? null : classes.outOfStock } `} 
                                key={index} >
                                
                                <div onClick={() => {this.chosenProduct(element.id)}} className={classes.elementImg} style={
                                    {
                                        backgroundImage: `url(${element.gallery[0]})`,
                                        backgroundSize: 'contain',
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'center',
                                    }
                                }>
                                    <p className={classes.oosTitle}>{`${(element.inStock > 0) ? '' : 'Out of stock'}`}</p>

                                </div>

                                <div className={classes.helper}>
                                    {
                                        (element.inStock > 0) ? 
                                            <div onClick={() => this.addToCart(element.id)} className={classes.cartIconContainer}>
                                                <img className={classes.cartIcon} src={cartIcon} />
                                            </div> 
                                            :
                                            null       
                                    }
                                </div>

                                <div onClick={() => {this.chosenProduct(element.id)}} className={classes.elementName}>{element.name}</div>

                                <div onClick={() => {this.chosenProduct(element.id)}} className={classes.elementPrice}>
                                    {element.prices.map(element => {
                                        if(element.currency.label == this.props.currency) {
                                            return [element.currency.symbol, element.amount];
                                        }
                                    })}
                                </div>
                            </div>
                        );
                    }}
            </Query>
        )
    }
}

export default Elements;