import { Component } from "react";

import { Query } from "@apollo/client/react/components";
import { GET_PRODUCT_BY_ID } from "../../api/Queries";


import classes from './ProductPage.module.css';

class ProductPage extends Component {
    constructor() {
        super()

        this.state = {
            chosenImgToDisplay: '',
        }
    }

    chosenImgToDisplayHandler() {
        this.setState(() => {

        })
    }


    render() {
        return(
            <Query query={GET_PRODUCT_BY_ID} 
                variables={ {productId: this.props.productPageItem} } 
            >
                {({loading, data, error}) => {
                    if (loading) return "Loading...";
                    if (error) return console.log(error);
                    if (data === undefined) return null;

                    console.log(data.product.attributes[0].items);

                    return(
                        <div className={classes.mainComponent}>
                            <div className={classes.photos}>
                               
                               {data.product.gallery.map(
                                (element, index) => 
                                    <img className={classes.singlePhoto} key={index} src={element} />
                               )}
                            </div>
                            <div>
                                <img className={classes.mainPhoto} src={data.product.gallery[0]}/>
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

                                <div className={classes.size}>
                                    <p className={classes.sizeTitle}>{data.product.attributes[0].name}</p>
                                    <div className={classes.sizes}>
                                        {data.product.attributes[0].items.map(
                                            (element, index) => {
                                                
                                                return <div key={index} className={classes.sizesElement}> {element.displayValue}
                                                </div>
                                            }
                                        )}
                                    </div>
                                </div>
                                
                                {(data.product.attributes[1]) && (data.product.attributes[1].id == 'Color') && (
                                    <div className={classes.color}>
                                        <p className={classes.colorTitle}>color:</p>
                                        <div className={classes.colors}>
                                            <div className={classes.colorItemGray}></div>
                                            <div className={classes.colorItemBlack}></div>
                                            <div className={classes.colorItemGreen}></div>
                                        </div>
                                    </div>
                                )}

                                <div className={classes.price}>
                                    <p className={classes.priceTitle}>price:</p>
                                    <div className={classes.priceValue}>$50.00</div>
                                </div>

                                <button className={classes.addToCartBtn}>ADD TO CART</button>
                            
                                <div className={classes.description}>
                                    {data.product.description}
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