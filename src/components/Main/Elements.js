import { Component } from "react";

import { Query } from "@apollo/client/react/components";
import { GET_PRODUCTS_BY_CATEGORY } from "../../api/Queries";

import cartIcon from "./../../assets/svg/cartIcon.svg";

import classes from "./Elements.module.css";

class Elements extends Component {
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
                                
                                <div className={classes.elementImg} style={
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
                                    <div className={classes.cartIconContainer}>
                                        <img className={classes.cartIcon} src={cartIcon} />
                                    </div>
                                </div>

                                <div className={classes.elementName}>{element.name}</div>
                                <div className={classes.elementPrice}>{element.prices[0].amount} {element.prices[0].currency.symbol}</div>
                            </div>
                        );
                    }}
            </Query>
        )
    }
}

export default Elements;