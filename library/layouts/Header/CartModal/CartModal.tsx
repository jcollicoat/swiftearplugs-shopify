'use client';

import classNames from 'classnames';
import { FC, useEffect } from 'react';
import { createCartAndSetCookie } from '@shopify/cart/actions';
import { useCart } from '@shopify/cart/cart-context';
import styles from './CartModal.module.scss';

export const CartModal: FC = () => {
    const { cart, isCartOpen } = useCart();

    useEffect(() => {
        if (!cart) {
            createCartAndSetCookie();
        }
    }, [cart]);

    return (
        <div
            className={classNames(styles.background, isCartOpen && styles.open)}
        >
            <div className={styles.modal}>[CART]</div>
        </div>
    );
};
