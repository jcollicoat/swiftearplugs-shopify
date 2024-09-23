'use client';

import { FC } from 'react';
import { Icon } from '@components/Icon/Icon';
import { useCart } from '@shopify/cart/cart-context';
import styles from './CartButton.module.scss';

export const CartButton: FC = () => {
    const { cart, toggleIsCartOpen } = useCart();

    return (
        <button className={styles.button} onClick={toggleIsCartOpen}>
            <Icon icon="Cart" />
            <span>
                {cart?.totalQuantity +
                    ` ${cart?.totalQuantity === 1 ? 'item' : 'items'}`}
            </span>
        </button>
    );
};
