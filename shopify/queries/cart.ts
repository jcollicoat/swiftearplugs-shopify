import cartFragment from 'shopify/fragments/cart';

export const getCartQuery = /* GraphQL */ `
    query getCart($cartId: ID!) {
        cart(id: $cartId) {
            ...cart
        }
    }
    ${cartFragment}
`;
