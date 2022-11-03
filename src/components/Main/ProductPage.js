import { Component } from "react";

import { Query } from "@apollo/client/react/components";
import { GET_PRODUCT_BY_ID } from "../../api/Queries";


import classes from './ProductPage.module.css';

class ProductPage extends Component {
    constructor() {
        super()

        this.state = {
            chosenImgToDisplay: '',

            productData: [],

            // attribute: '',
        }
    }

    chosenImgToDisplayHandler(newUrl) {
        this.setState(() => {
            return {chosenImgToDisplay: newUrl}
        })
    }

    render() {
        // console.log(this.props.productPageItem);
        // console.log(this.state.productData);
        console.log(this.props.chosenProductAttributes);
        return(
            <Query query={GET_PRODUCT_BY_ID} 
                variables={ {productId: this.props.productPageItem} } 
            >
                {({loading, data, error}) => {
                    if (loading) return "Loading...";
                    if (error) return console.log(error);
                    if (data === undefined) return null;

                    return(
                        <div className={classes.mainComponent}>
                            <div className={classes.photos}>
                               
                               {data.product.gallery.map(
                                (element, index) => 
                                    <img className={classes.singlePhoto} key={index} src={element} onClick={() => {this.chosenImgToDisplayHandler(element)}}/>
                               )}
                            </div>
                            <div>
                                <img className={classes.mainPhoto} src={`${(this.state.chosenImgToDisplay === '') ? data.product.gallery[0] : this.state.chosenImgToDisplay}`}/>
                            </div>
                            <div className={classes.info}>
                                <div className={classes.itemNameBrand}>
                                    <div className={classes.itemBrand}>
                                        {data.product.brand}
                                    </div>
                                    <div className={classes.itemName}>
                                        {data.product.name}
                                    </div>
                                </div>

                               {(data.product.attributes.length > 0) && (data.product.attributes.map(
                                (element, index) => {
                                    return (
                                        <div key={index} className={classes.size}>
                                            <p className={classes.sizeTitle}>{element.name}</p>
                                            <div className={classes.sizes}>
                                                {element.items.map(
                                                    (attribute, index) => {
                                                        return <div key={index} 
                                                            className={`
                                                                ${classes.sizesElement} 
                                                                ${
                                                                    this.state.productData.map(
                                                                        (dataAttribute, index) => {
                                                                            if(dataAttribute == attribute.displayValue) return (classes.attributeSelected)
                                                                        }
                                                                    )
                                                                }
                                                            `} 
                                                            onClick={() => {
                                                                console.log(this.props.chosenProductAttributes);
                                                                if(this.props.chosenProductAttributes.length > 0) {
                                                                    console.log('123');
                                                                    this.props.chosenProductAttributes.forEach(element => {
                                                                        if(element[0] !== element.id) {
                                                                            this.props.attributesForCartHandler([element.id, attribute.displayValue]);
                                                                            console.log('Value is chosen for the first time');
                                                                        }
                                                                    });
                                                                }
                                                                else {
                                                                    this.props.attributesForCartHandler([element.id, attribute.displayValue]);
                                                                }
                                                                // console.log(this.state.productData.length);
                                                                /* if(this.state.productData.length < data.product.attributes.length ) {
                                                                    if(this.state.productData.length === 0) {
                                                                        this.props.attributesForCartHandler([element.id, attribute.displayValue]);
                                                                    }
                                                                    else {
                                                                        this.state.productData.map(
                                                                            (existingAttribute, index) => {
                                                                                console.log(index);
                                                                                if(existingAttribute != attribute.displayValue) {
                                                                                    this.props.attributesForCartHandler([element.id, attribute.displayValue]);
                                                                                }
                                                                            }
                                                                        )   
                                                                    }
                                                                    console.log(this.state.productData);
                                                                } */
                                                            }}
                                                            style={element.id==='Color' ? {backgroundColor: attribute.displayValue} : {}}
                                                            > {/* attribute.displayValue */ element.id === 'Color' ? '' : attribute.displayValue}
                                                        </div>
                                                    }
                                                )}
                                            </div>
                                        </div>
                                    )
                                }
                               ))}

                                <div className={classes.price}>
                                    <p className={classes.priceTitle}>price:</p>

                                    <div className={classes.priceValue}>
                                        {this.props.currentSymbol}
                                        {data.product.prices.map(
                                            (element) => {
                                                return (this.props.currentSymbol === element.currency.symbol) && element.amount;

                                            }
                                        )}
                                    </div>
                                </div>

                                <button className={`${classes.addToCartBtn} ${!data.product.inStock && classes.btnDisabled}`} onClick={() => {this.props.itemsInCartHandler()}}>ADD TO CART</button>
                            
                                <div className={classes.description} dangerouslySetInnerHTML={{__html: data.product.description}}>
                                </div>
                            </div>
                        </div>
                    )
                }}
            </Query>
        )
    }
}

export default ProductPage;