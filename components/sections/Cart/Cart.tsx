'use client';

import { FC, useCallback, useEffect, useRef, useState } from 'react';
import { createCartAndSetCookie } from 'components/template/cart/actions';
import { useCart } from 'components/template/cart/cart-context';
import styles from './Cart.module.scss';
import { CartItems } from './components/Cart.Items';
import { CartSummary } from './components/Cart.Summary';

export const Cart: FC = () => {
    const { cart } = useCart();
    const cartInteracted = useRef(false);
    const [isOpen, setIsOpen] = useState(false);
    const toggleCart = useCallback(() => setIsOpen(!isOpen), [isOpen]);

    useEffect(() => {
        if (!cart) {
            createCartAndSetCookie();
        }

        if (cart?.totalQuantity === 0) {
            setIsOpen(false);
        }

        if ((cart?.totalQuantity ?? 0) > 0) {
            cartInteracted.current = true;
        }
    }, [cart]);

    if (!cart || !cartInteracted.current) {
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
                <CartSummary toggleCart={toggleCart} />
            </div>
        </div>
    );
};
