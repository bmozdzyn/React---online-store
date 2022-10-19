import { Component } from "react";

import { Query } from "@apollo/client/react/components";
import { GET_CATEGORY } from "../../api/Queries";

import classes from "./Categories.module.css";

class Categories extends Component {
    constructor() {
        super();

        this.state = {
            currentCategory: 'all',
        }
    }

    categoryStateHandler(currentCategory) {
        this.setState(() => {
            return {currentCategory: currentCategory}
        })
    }
    
    render() {
        {console.log(this.state.currentCategory)}
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
                                    ${(this.state.currentCategory === element.name) ? classes.currentElement : null}
                                `}    
                                onClick={() => this.categoryStateHandler(String(element.name))}
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