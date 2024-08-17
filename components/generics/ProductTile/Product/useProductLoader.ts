'use client';

import ShopifyBuy from '@shopify/buy-button-js';
import { useEffect } from 'react';

const shopifyClient = ShopifyBuy.buildClient({
    domain: 'swiftearplugs.myshopify.com',
    storefrontAccessToken: process.env.NEXT_PUBLIC_SHOPIFY_ACCESS_TOKEN,
});

const ui = ShopifyBuy.UI.init(shopifyClient);

export const useProduct = () => {
    useEffect(() => {
        const id = 9428823441727;
        const node = document.getElementById('product');

        if (node?.hasChildNodes()) {
            return;
        }

        ui.createComponent('product', {
            id,
            node,
            moneyFormat: '%24%7B%7Bamount%7D%7D',
            options: {
                product: {
                    styles: {
                        product: {
                            '@media (min-width: 601px)': {
                                'max-width': 'calc(25% - 20px)',
                                'margin-left': '20px',
                                'margin-bottom': '50px',
                            },
                        },
                        title: {
                            'font-size': '20px',
                            color: '#000000',
                        },
                        button: {
                            'font-size': '16px',
                            'padding-top': '16px',
                            'padding-bottom': '16px',
                            ':hover': {
                                'background-color': '#cb0044',
                            },
                            'background-color': '#e1004b',
                            ':focus': {
                                'background-color': '#cb0044',
                            },
                            'border-radius': '16px',
                            'padding-left': '80px',
                            'padding-right': '80px',
                        },
                        quantityInput: {
                            'font-size': '16px',
                            'padding-top': '16px',
                            'padding-bottom': '16px',
                        },
                        price: {
                            'font-size': '16px',
                            color: '#777777',
                        },
                        compareAt: {
                            'font-size': '13.6px',
                            color: '#777777',
                        },
                        unitPrice: {
                            'font-size': '13.6px',
                            color: '#777777',
                        },
                    },
                    buttonDestination: 'checkout',
                    width: '380px',
                    text: {
                        button: 'Buy now',
                    },
                },
                productSet: {
                    styles: {
                        products: {
                            '@media (min-width: 601px)': {
                                'margin-left': '-20px',
                            },
                        },
                    },
                },
                modalProduct: {
                    contents: {
                        img: false,
                        imgWithCarousel: true,
                        button: false,
                        buttonWithQuantity: true,
                    },
                    styles: {
                        product: {
                            '@media (min-width: 601px)': {
                                'max-width': '100%',
                                'margin-left': '0px',
                                'margin-bottom': '0px',
                            },
                        },
                        button: {
                            'font-size': '16px',
                            'padding-top': '16px',
                            'padding-bottom': '16px',
                            ':hover': {
                                'background-color': '#cb0044',
                            },
                            'background-color': '#e1004b',
                            ':focus': {
                                'background-color': '#cb0044',
                            },
                            'border-radius': '16px',
                            'padding-left': '80px',
                            'padding-right': '80px',
                        },
                        quantityInput: {
                            'font-size': '16px',
                            'padding-top': '16px',
                            'padding-bottom': '16px',
                        },
                        title: {
                            'font-family': 'Helvetica Neue, sans-serif',
                            'font-weight': 'bold',
                            'font-size': '26px',
                            color: '#4c4c4c',
                        },
                        price: {
                            'font-family': 'Helvetica Neue, sans-serif',
                            'font-weight': 'normal',
                            'font-size': '18px',
                            color: '#4c4c4c',
                        },
                        compareAt: {
                            'font-family': 'Helvetica Neue, sans-serif',
                            'font-weight': 'normal',
                            'font-size': '15.299999999999999px',
                            color: '#4c4c4c',
                        },
                        unitPrice: {
                            'font-family': 'Helvetica Neue, sans-serif',
                            'font-weight': 'normal',
                            'font-size': '15.299999999999999px',
                            color: '#4c4c4c',
                        },
                    },
                    text: {
                        button: 'Add to cart',
                    },
                },
                option: {},
                cart: {
                    styles: {
                        button: {
                            'font-size': '16px',
                            'padding-top': '16px',
                            'padding-bottom': '16px',
                            ':hover': {
                                'background-color': '#cb0044',
                            },
                            'background-color': '#e1004b',
                            ':focus': {
                                'background-color': '#cb0044',
                            },
                            'border-radius': '16px',
                        },
                    },
                    text: {
                        total: 'Subtotal',
                        button: 'Checkout',
                    },
                    popup: false,
                },
                toggle: {
                    styles: {
                        toggle: {
                            'background-color': '#e1004b',
                            ':hover': {
                                'background-color': '#cb0044',
                            },
                            ':focus': {
                                'background-color': '#cb0044',
                            },
                        },
                        count: {
                            'font-size': '16px',
                        },
                    },
                },
            },
        });
    }, []);
};
