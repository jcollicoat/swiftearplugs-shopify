'use client';

import classNames from 'classnames';
import { FC, Fragment, useEffect, useState } from 'react';
import { useFormState } from 'react-dom';
import {
    createCartAndSetCookie,
    removeItem,
} from 'components/template/cart/actions';
import { useCart } from 'components/template/cart/cart-context';
import styles from './Cart.module.scss';

const CartClosed: FC = () => {
    return null;
};

const CartOpen: FC = () => {
    const { cart, updateCartItem } = useCart();

    const [message, formAction] = useFormState(removeItem, null);

    return (
        <div className={styles.cartOpen}>
            {cart?.lines.map((line) => {
                const actionWithVariant = formAction.bind(
                    null,
                    line.merchandise.id,
                );

                return (
                    <Fragment key={line.id}>
                        <div>{line.merchandise.product.title}</div>
                        <button
                            onClick={async () => {
                                updateCartItem(line.merchandise.id, 'delete');
                                await actionWithVariant();
                            }}
                        >
                            Remove item
                        </button>
                        <p aria-live="polite" className="sr-only" role="status">
                            {message}
                        </p>
                    </Fragment>
                );
            })}
        </div>
    );
};

export const Cart: FC = () => {
    const { cart } = useCart();
    console.log('Cart', cart);
    const [isOpen, setIsOpen] = useState(false);
    const openCart = () => setIsOpen(true);
    const closeCart = () => setIsOpen(false);

    useEffect(() => {
        if (!cart) {
            createCartAndSetCookie();
        }
    }, [cart]);

    return (
        <div className={classNames(styles.modal, isOpen && styles.open)}>
            {isOpen ? <CartOpen /> : <CartClosed />}
            <div>
                {cart?.totalQuantity} items | ${cart?.cost.totalAmount.amount}
                {cart?.cost.totalAmount.currencyCode}
            </div>
            <button onClick={() => (isOpen ? closeCart() : openCart())}>
                {isOpen ? 'Close cart' : 'Open cart'}
            </button>
        </div>
    );
};
