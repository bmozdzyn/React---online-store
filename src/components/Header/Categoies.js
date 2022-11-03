import { Component } from "react";

import { Query } from "@apollo/client/react/components";
import { GET_CATEGORY } from "../../api/Queries";

import classes from "./Categories.module.css";

class Categories extends Component {
    render() {
        return(
            <ul className={classes.categories}>
                <Query query={GET_CATEGORY}>
                    {({loading, data}) => {
                        if(loading) return "Loading...";
                        const { categories } = data; //equivalent as data.categories

                        return categories.map(
                            (element, index) => 
                            <li key={index}
                                className={`
                                    ${classes.element} 
                                    ${(this.props.currentCategory === element.name) ? classes.currentElement : null}
                                `}    
                                onClick = {() => {
                                    this.props.categoryStateHandler(String(element.name));
                                    (this.props.isProductPageOpen === true) && this.props.productPageOpenHandler(this.props.isProductPageOpen);
                                }}
                            >
                                {element.name}
                            </li>
                        );
                    }}
                </Query>
            </ul>
        )
    }
}

export default Categories;