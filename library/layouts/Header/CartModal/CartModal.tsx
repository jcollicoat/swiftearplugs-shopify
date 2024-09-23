import classNames from 'classnames';
import { FC, useEffect } from 'react';
import { Icon } from '@components/Icon/Icon';
import { createCartAndSetCookie } from '@shopify/cart/actions';
import { useCart } from '@shopify/cart/cart-context';
import styles from './CartModal.module.scss';
import { Item } from './Item/Item';
import { Summary } from './Summary/Summary';
import { useClickOutside } from './useClickOutside';

export const CartModal: FC = () => {
    const { cart, isCartOpen, setIsCartOpen } = useCart();
    const closeCart = () => setIsCartOpen(false);
    const { modalRef } = useClickOutside(isCartOpen, closeCart);

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
            <div className={styles.wrapper}>
                <div className={styles.modal} ref={modalRef}>
                    <div className={styles.header}>
                        <h2>Your Cart</h2>
                        <button className={styles.close} onClick={closeCart}>
                            <Icon icon="CircleCross" />
                        </button>
                    </div>
                    <hr />
                    {sortedItems.length === 0 ? (
                        <span className={styles.empty}>Your cart is empty</span>
                    ) : (
                        <>
                            <div className={styles.items}>
                                {sortedItems.map((item) => (
                                    <Item key={item.id} item={item} />
                                ))}
                            </div>
                            <hr />
                            <Summary />
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};
