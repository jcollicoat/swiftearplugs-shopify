'use client';

import classNames from 'classnames';
import { FC, useEffect } from 'react';
import { createCartAndSetCookie } from '@shopify/cart/actions';
import { useCart } from '@shopify/cart/cart-context';
import styles from './CartModal.module.scss';
import { Item } from './Item/Item';

export const CartModal: FC = () => {
    const { cart, isCartOpen } = useCart();

    useEffect(() => {
        if (!cart) {
            createCartAndSetCookie();
        }
    }, [cart]);

    if (!cart) return null;

    const sortedItems = cart.lines.sort((a, b) => {
        if (
            a.merchandise.selectedOptions[0].value >
            b.merchandise.selectedOptions[0].value
        ) {
            return 1;
        }
        if (
            b.merchandise.selectedOptions[0].value >
            a.merchandise.selectedOptions[0].value
        ) {
            return -1;
        }
        return 0;
    });

    return (
        <div
            className={classNames(styles.background, isCartOpen && styles.open)}
        >
            <div className={styles.modal}>
                <div className={styles.items}>
                    {sortedItems.map((item) => (
                        <Item key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </div>
    );
};
