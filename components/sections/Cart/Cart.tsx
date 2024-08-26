'use client';

import { FC, useCallback, useEffect, useState } from 'react';
import { createCartAndSetCookie } from 'components/template/cart/actions';
import { useCart } from 'components/template/cart/cart-context';
import styles from './Cart.module.scss';
import { CartItems } from './components/Cart.Items';
import { CartSummary } from './components/Cart.Summary';

export const Cart: FC = () => {
    const { cart } = useCart();
    const [isOpen, setIsOpen] = useState(false);
    const openCart = useCallback(() => setIsOpen(true), []);
    const closeCart = useCallback(() => setIsOpen(false), []);

    useEffect(() => {
        if (!cart) {
            createCartAndSetCookie();
        }
    }, [cart]);

    useEffect(() => {
        if (cart?.totalQuantity === 0) {
            closeCart();
        }
    }, [cart?.totalQuantity, closeCart]);

    if (!cart || cart.totalQuantity === 0) {
        return null;
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.modal}>
                {isOpen && (
                    <>
                        <CartItems />
                        <hr />
                    </>
                )}
                <CartSummary isOpen={isOpen} openCart={openCart} />
            </div>
        </div>
    );
};
