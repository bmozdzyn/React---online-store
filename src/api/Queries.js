import { gql } from '@apollo/client';

export const GET_CATEGORY = gql`
    query getCategories {
        categories {
            name
        }
    }
`;

export const GET_CURRENCIES = gql`
    query getCurrencies {
        currencies {
            symbol
            label
        }
    }
`;

export const GET_PRODUCTS_BY_ID = gql`
    query product($id: String!) {
        product(id: $id) {
        id
        name
        inStock
        gallery
        description
        attributes {
            id
            name
            type
            items {
            id
            displayValue
            value
            }
        }
        prices {
            currency {
            label
            symbol
            }
            amount
        }
        brand
    }
  }
`;
