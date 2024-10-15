import { FC } from 'react';
import { Cost } from '@Generic/Cost/Cost';
import { Icon } from '@Generic/Icon/Icon';
import { useCart } from 'shopify/cart/cart-context';
import styles from './CartButton.module.scss';

export const CartButton: FC = () => {
    const { cart, setIsCartOpen } = useCart();
    const openCart = () => setIsCartOpen(true);

    if (!cart) return null;

    const value = cart.cost.totalAmount.amount;
    const currency = cart.cost.totalAmount.currencyCode;
    const quantity = cart.totalQuantity;

    const disabled = quantity <= 0;

    return (
        <button
            className={styles.button}
            disabled={disabled}
            aria-disabled={disabled}
            onClick={openCart}
        >
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
