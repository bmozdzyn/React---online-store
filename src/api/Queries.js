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

export const GET_PRODUCTS_BY_CATEGORY = gql`
    query Categories($input: CategoryInput) {
        category(input: $input) {
        name
        products {
            name
            id
            inStock
            gallery
            description
            category
            attributes {
            id
            name
            type
            items {
                displayValue
                value
                id
            }
            }
            prices {
            currency {
                symbol
                label
            }
            amount
            }
            brand
        }
        }
    }
`;

export const GET_PRODUCT_BY_ID = gql`
    query Product($productId: String!) {
        product(id: $productId) {
            id
            name
            gallery
            inStock
            description
            category
            attributes {
              id
              name
              type
              items {
                displayValue
                value
                id
              }
            }
            prices {
              currency {
                symbol
                label
              }
              amount
            }
            brand
        }
    }
`;
