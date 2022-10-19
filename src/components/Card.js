import React, {Component} from "react";

import {Query} from '@apollo/client/react/components';
import {GET_CATEGORY} from '../api/Queries';

class Card extends Component {


    render() {
        return(
            <Query query={GET_CATEGORY}>
                {({loading, data}) => {
                    if (loading) return "Loading...";
                    const { categories } = data; //equivalent as data.catergories
                    return categories.map(categories => <h1>{categories.name}</h1>);
                }}
            </Query>
        )
    }
}

export default Card;