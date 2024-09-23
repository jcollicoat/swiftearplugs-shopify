'use client';

import { FC } from 'react';
import { Cost } from '@components/Cost/Cost';
import { Icon } from '@components/Icon/Icon';
import { useCart } from '@shopify/cart/cart-context';
import styles from './CartButton.module.scss';

export const CartButton: FC = () => {
    const { cart, isCartOpen, setIsCartOpen } = useCart();
    const toggleCart = () => setIsCartOpen(!isCartOpen);

    const value = cart?.cost.totalAmount.amount ?? '0.00';
    const currency = cart?.cost.totalAmount.currencyCode ?? 'NZD';
    const quantity = cart?.totalQuantity ?? 0;

    return (
        <button className={styles.button} onClick={toggleCart}>
            <Icon icon="Cart" />
            <div className={styles.summary}>
                <Cost value={value} currency={currency} />
                <span className={styles.quantity}>
                    {quantity + ` ${quantity === 1 ? 'item' : 'items'}`}
                </span>
            </div>
        </button>
    );
};
